// Типы позиций игроков
export type PlayerPosition = 'G' | 'D' | 'LW' | 'C' | 'RW';

// Типы контрактов
export type ContractType = 'one-way' | 'two-way' | 'three-way';

// Статус игрока
export type PlayerStatus = 'active' | 'injured' | 'retired' | 'suspended';

// Информация о контракте
export interface Contract {
  endDate: string; // YYYY-MM-DD формат
  type: ContractType;
  salaryPerYear: number; // в миллионах рублей (90 = 90 млн рублей)
  signedDate: string; // YYYY-MM-DD формат
  isActive: boolean;
}

// Основная информация об игроке
export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  position: PlayerPosition;
  birthDate: string; // YYYY-MM-DD формат
  nationality: string; // ISO код страны (RU, CA, US, etc.)
  teamId: string; // ID команды из teams.ts
  contract: Contract;
  overallRating: number; // 1-100
  potential: number; // 1-100
  physicalCondition: number; // 0-100 процент физформы
  favoriteClubs: string[]; // массив ID команд
  photoUrl: string; // путь к фото игрока
  status: PlayerStatus;
}

// Интерфейс для ростера команды
export interface TeamRoster {
  teamId: string;
  players: Player[];
  lastUpdated: string; // YYYY-MM-DD HH:mm:ss
}

// Интерфейс для трансферов
export interface Transfer {
  id: string;
  playerId: string;
  fromTeamId: string;
  toTeamId: string;
  transferDate: string; // YYYY-MM-DD
  transferType: 'trade' | 'free_agent' | 'draft' | 'retirement';
  details?: {
    tradedPlayers?: string[]; // ID других игроков в обмене
    compensation?: number; // денежная компенсация
    draftPicks?: string[]; // пики драфта
  };
}

// Интерфейс для истории контрактов
export interface ContractHistory {
  playerId: string;
  contracts: (Contract & {
    teamId: string;
    startDate: string;
  })[];
}
