import { Player } from '../../types/player';

// Пример ростера команды "Ак Барс"
export const akBarsRoster: Player[] = [
  // Вратари
  {
    id: 'player-101',
    firstName: 'Тимур',
    lastName: 'Билялов',
    position: 'G',
    birthDate: '1991-05-15',
    nationality: 'RU',
    teamId: 'ak-bars',
    contract: {
      endDate: '2025-04-30',
      type: 'one-way',
      salaryPerYear: 25, // 25 млн рублей
      signedDate: '2023-05-01',
      isActive: true
    },
    overallRating: 82,
    potential: 85,
    physicalCondition: 88,
    favoriteClubs: ['ak-bars', 'ska'],
    photoUrl: '/players/photos/player-101.png',
    status: 'active'
  },
  {
    id: 'player-102',
    firstName: 'Адам',
    lastName: 'Рейдеборн',
    position: 'G',
    birthDate: '1991-02-11',
    nationality: 'CA',
    teamId: 'ak-bars',
    contract: {
      endDate: '2024-04-30',
      type: 'one-way',
      salaryPerYear: 18, // 18 млн рублей
      signedDate: '2022-07-01',
      isActive: true
    },
    overallRating: 78,
    potential: 79,
    physicalCondition: 85,
    favoriteClubs: ['ak-bars'],
    photoUrl: '/players/photos/player-102.png',
    status: 'active'
  },

  // Защитники
  {
    id: 'player-103',
    firstName: 'Артем',
    lastName: 'Лукоянов',
    position: 'D',
    birthDate: '1995-03-22',
    nationality: 'RU',
    teamId: 'ak-bars',
    contract: {
      endDate: '2026-04-30',
      type: 'one-way',
      salaryPerYear: 35, // 35 млн рублей
      signedDate: '2024-05-01',
      isActive: true
    },
    overallRating: 85,
    potential: 88,
    physicalCondition: 92,
    favoriteClubs: ['ak-bars', 'cska'],
    photoUrl: '/players/photos/player-103.png',
    status: 'active'
  },
  {
    id: 'player-104',
    firstName: 'Артем',
    lastName: 'Галимов',
    position: 'D',
    birthDate: '1993-01-15',
    nationality: 'RU',
    teamId: 'ak-bars',
    contract: {
      endDate: '2025-04-30',
      type: 'one-way',
      salaryPerYear: 28, // 28 млн рублей
      signedDate: '2023-06-01',
      isActive: true
    },
    overallRating: 81,
    potential: 83,
    physicalCondition: 89,
    favoriteClubs: ['ak-bars'],
    photoUrl: '/players/photos/player-104.png',
    status: 'active'
  },

  // Нападающие
  {
    id: 'player-105',
    firstName: 'Дмитрий',
    lastName: 'Воронков',
    position: 'LW',
    birthDate: '1999-11-13',
    nationality: 'RU',
    teamId: 'ak-bars',
    contract: {
      endDate: '2027-04-30',
      type: 'one-way',
      salaryPerYear: 45, // 45 млн рублей
      signedDate: '2024-07-01',
      isActive: true
    },
    overallRating: 87,
    potential: 92,
    physicalCondition: 95,
    favoriteClubs: ['ak-bars', 'columbus-blue-jackets'],
    photoUrl: '/players/photos/player-105.png',
    status: 'active'
  },
  {
    id: 'player-106',
    firstName: 'Дамир',
    lastName: 'Жафяров',
    position: 'C',
    birthDate: '1996-04-08',
    nationality: 'RU',
    teamId: 'ak-bars',
    contract: {
      endDate: '2025-04-30',
      type: 'one-way',
      salaryPerYear: 32, // 32 млн рублей
      signedDate: '2023-05-15',
      isActive: true
    },
    overallRating: 83,
    potential: 86,
    physicalCondition: 91,
    favoriteClubs: ['ak-bars', 'salavat-yulaev'],
    photoUrl: '/players/photos/player-106.png',
    status: 'active'
  },
  {
    id: 'player-107',
    firstName: 'Кирилл',
    lastName: 'Петров',
    position: 'RW',
    birthDate: '1994-09-12',
    nationality: 'RU',
    teamId: 'ak-bars',
    contract: {
      endDate: '2024-04-30',
      type: 'one-way',
      salaryPerYear: 29, // 29 млн рублей
      signedDate: '2022-08-01',
      isActive: true
    },
    overallRating: 80,
    potential: 81,
    physicalCondition: 87,
    favoriteClubs: ['ak-bars', 'lokomotiv'],
    photoUrl: '/players/photos/player-107.png',
    status: 'active'
  }
];

// Экспорт для использования в других файлах
export default akBarsRoster;
