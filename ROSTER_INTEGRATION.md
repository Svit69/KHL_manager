# Интеграция системы ростера игроков

## Обзор созданной структуры

Была создана полная система управления ростером игроков КХЛ со следующими компонентами:

### 1. Типы данных (`src/types/player.ts`)
- **Player** - основной интерфейс игрока со всеми необходимыми полями
- **Contract** - информация о контракте
- **TeamRoster** - ростер команды
- **Transfer** - информация о трансферах
- **ContractHistory** - история контрактов

### 2. API слой (`src/api/players.ts`)
- **PlayerManager** - класс для управления игроками
- Методы для трансферов, продления контрактов, завершения карьеры
- Управление историей контрактов и трансферов

### 3. Утилиты (`src/utils/playerUtils.ts`)
- Вычисление возраста, форматирование данных
- Сортировка и фильтрация игроков
- Проверка статусов и условий

### 4. Компоненты UI
- **PlayerCard** (`src/components/PlayerCard.tsx`) - карточка игрока
- **TeamRoster** (`src/components/TeamRoster.tsx`) - полный ростер команды

### 5. Структура данных
- **Пример ростера** (`src/data/players/ak-bars.ts`) - команда Ак Барс
- **Менеджер данных** (`src/data/players/index.ts`) - централизованное управление

### 6. Структура фотографий
```
public/players/photos/
├── player-001.png     # Универсальные ID игроков
├── player-002.png
├── player-003.png
├── ...
└── default/           # Фотографии по умолчанию
    ├── g.png          # Вратарь
    ├── d.png          # Защитник
    ├── lw.png         # Левый крайний
    ├── c.png          # Центральный
    └── rw.png         # Правый крайний
```

**Преимущества новой системы:**
- Игроки сохраняют ID при трансферах
- Формат PNG для лучшего качества
- Упрощенная система управления

## Как использовать систему

### 1. Отображение ростера команды

```tsx
import { TeamRoster } from '@/components/TeamRoster';
import { PlayersDataManager } from '@/data/players';

function RosterPage({ teamId }: { teamId: string }) {
  const players = PlayersDataManager.getTeamPlayers(teamId);
  
  return (
    <TeamRoster 
      players={players}
      teamName="Ак Барс"
      onPlayerSelect={(player) => console.log('Selected:', player)}
    />
  );
}
```

### 2. Работа с игроками через API

```tsx
import { playerManager } from '@/api/players';

// Перевод игрока
playerManager.transferPlayer('ak-bars-001', 'ak-bars', 'ska');

// Продление контракта
playerManager.extendContract('ak-bars-001', {
  endDate: '2026-04-30',
  type: 'one-way',
  salaryPerYear: 30000000,
  signedDate: '2024-05-01',
  isActive: true
});

// Завершение карьеры
playerManager.retirePlayer('ak-bars-001');
```

### 3. Поиск и фильтрация

```tsx
import { PlayersDataManager } from '@/data/players';

// Поиск по имени
const foundPlayers = PlayersDataManager.searchPlayersByName('Воронков');

// Топ игроков
const topPlayers = PlayersDataManager.getTopPlayersByRating(10);

// Истекающие контракты
const expiringContracts = PlayersDataManager.getPlayersWithExpiringContracts(6);
```

## Следующие шаги для полной интеграции

### 1. Создание ростеров всех команд
Создать файлы для каждой команды КХЛ:
- `src/data/players/avangard.ts`
- `src/data/players/ska.ts`
- `src/data/players/cska.ts`
- и т.д.

### 2. Добавление фотографий
Разместить фотографии игроков в соответствующих папках:
- `public/players/photos/{team-id}/{player-id}.jpg`
- Создать фотографии по умолчанию в `public/players/photos/default/`

### 3. Интеграция с основным приложением

#### Добавить страницу ростера:
```tsx
// src/app/roster/page.tsx
import { TeamRoster } from '@/components/TeamRoster';
import { PlayersDataManager } from '@/data/players';

export default function RosterPage() {
  // Получить ID выбранной команды из контекста/состояния
  const selectedTeamId = 'ak-bars'; // Заменить на динамическое получение
  const players = PlayersDataManager.getTeamPlayers(selectedTeamId);
  
  return (
    <div className="p-6">
      <TeamRoster 
        players={players}
        teamName="Ак Барс"
        onPlayerSelect={(player) => {
          // Обработка выбора игрока
          console.log('Selected player:', player);
        }}
      />
    </div>
  );
}
```

#### Обновить навигацию:
```tsx
// В src/components/Sidebar.tsx добавить ссылку на ростер
{ title: 'Состав', path: '/roster' }
```

### 4. Расширение функционала

#### Модальное окно игрока:
```tsx
// src/components/PlayerModal.tsx
// Детальная информация об игроке, редактирование контракта
```

#### Страница трансферов:
```tsx
// src/app/transfers/page.tsx
// Управление трансферами, свободные агенты
```

#### Система уведомлений:
```tsx
// Уведомления об истекающих контрактах
// Предложения о продлении/трансферах
```

## Структура файлов данных

### Формат данных игрока:
```typescript
{
  id: 'team-id-number',           // Уникальный ID
  firstName: 'Имя',               // Имя
  lastName: 'Фамилия',            // Фамилия
  position: 'G|D|LW|C|RW',        // Позиция
  birthDate: 'YYYY-MM-DD',        // Дата рождения
  nationality: 'RU',              // Национальность (ISO код)
  teamId: 'team-id',              // ID команды
  contract: {                     // Контракт
    endDate: 'YYYY-MM-DD',
    type: 'one-way|two-way|three-way',
    salaryPerYear: 25000000,      // Зарплата в рублях
    signedDate: 'YYYY-MM-DD',
    isActive: true
  },
  overallRating: 82,              // Общий рейтинг (1-100)
  potential: 85,                  // Потенциал (1-100)
  physicalCondition: 88,          // Физическая форма (0-100)
  favoriteClubs: ['ak-bars'],     // Любимые клубы
  photoUrl: '/players/photos/...',// Путь к фото
  status: 'active',               // Статус игрока
  height: 185,                    // Рост в см
  weight: 82,                     // Вес в кг
  shoots: 'L',                    // Бросок (L/R)
  catches: 'L'                    // Ловля для вратарей (L/R)
}
```

## Преимущества созданной системы

1. **Модульность** - каждый компонент независим и переиспользуем
2. **Типизация** - полная типизация TypeScript для безопасности
3. **Расширяемость** - легко добавлять новые функции и команды
4. **Производительность** - оптимизированные компоненты с мемоизацией
5. **UX** - интуитивный интерфейс с поиском, фильтрами и сортировкой
6. **Гибкость** - поддержка всех операций с игроками (трансферы, контракты, etc.)

Система готова к использованию и может быть легко расширена для всех команд КХЛ!
