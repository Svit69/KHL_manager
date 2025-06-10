import { Player } from '../../types/player';

// Ростер команды "Автомобилист" (Екатеринбург)
export const avtomobilistRoster: Player[] = [
  // Вратари
  {
    id: 'player-001',
    firstName: 'Евгений',
    lastName: 'Аликин',
    position: 'G',
    birthDate: '1994-10-18',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      salaryPerYear: 52, // 52 млн рублей
      signedDate: '2024-06-01',
      isActive: true
    },
    overallRating: 80,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-001.png',
    status: 'active'
  },
  {
    id: 'player-002',
    firstName: 'Владимир',
    lastName: 'Галкин',
    position: 'G',
    birthDate: '2000-06-15',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      salaryPerYear: 20, // 20 млн рублей
      signedDate: '2025-06-01',
      isActive: true
    },
    overallRating: 79,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist', 'traktor'],
    photoUrl: '/players/photos/player-002.png',
    status: 'active'
  },

  // Защитники
  {
    id: 'player-003',
    firstName: 'Никита',
    lastName: 'Ишимников',
    position: 'D',
    birthDate: '2005-04-21',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      salaryPerYear: 1, // 1 млн рублей
      signedDate: '2025-06-01',
      isActive: true
    },
    overallRating: 62,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-003.png',
    status: 'active'
  },
  {
    id: 'player-004',
    firstName: 'Евгений',
    lastName: 'Кашников',
    position: 'D',
    birthDate: '2002-12-25',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      salaryPerYear: 10, // 10 млн рублей
      signedDate: '2025-06-01',
      isActive: true
    },
    overallRating: 70,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist', 'cska'],
    photoUrl: '/players/photos/player-004.png',
    status: 'active'
  },
  {
    id: 'player-005',
    firstName: 'Никита',
    lastName: 'Трямкин',
    position: 'D',
    birthDate: '1994-08-30',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2028-05-31',
      type: 'one-way',
      salaryPerYear: 55, // 55 млн рублей
      signedDate: '2024-06-01',
      isActive: true
    },
    overallRating: 81,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-005.png',
    status: 'active'
  },

  {
    id: 'player-006',
    firstName: 'Кирилл',
    lastName: 'Воробьев',
    position: 'D',
    birthDate: '1995-02-11',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      salaryPerYear: 35, // 35 млн рублей
      signedDate: '2025-06-01',
      isActive: true
    },
    overallRating: 77,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-006.png',
    status: 'active'
  },
  {
    id: 'player-007',
    firstName: 'Сергей',
    lastName: 'Зборовский',
    position: 'D',
    birthDate: '1997-02-21',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      salaryPerYear: 32, // 32 млн рублей
      signedDate: '2025-06-01',
      isActive: true
    },
    overallRating: 75,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-007.png',
    status: 'active'
  },
  {
    id: 'player-008',
    firstName: 'Юрий',
    lastName: 'Журавлев',
    position: 'D',
    birthDate: '2002-09-27',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      salaryPerYear: 1, // 1 млн рублей
      signedDate: '2024-06-01',
      isActive: true
    },
    overallRating: 67,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-008.png',
    status: 'active'
  },

  // Нападающие
  {
    id: 'player-009',
    firstName: 'Рид',
    lastName: 'Буше',
    position: 'LW',
    birthDate: '1993-09-08',
    nationality: 'US',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      salaryPerYear: 90, // 90 млн рублей
      signedDate: '2024-06-01',
      isActive: true
    },
    overallRating: 83,
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-009.png',
    status: 'active'
  },
  {
    id: 'player-010',
    firstName: 'Алексей',
    lastName: 'Бывальцев',
    position: 'LW',
    birthDate: '1994-02-20',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      salaryPerYear: 53, // 53 млн рублей
      signedDate: '2024-06-01',
      isActive: true
    },
    overallRating: 76,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-010.png',
    status: 'active'
  },
  {
    id: 'player-011',
    firstName: 'Егор',
    lastName: 'Черников',
    position: 'RW',
    birthDate: '2002-12-09',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      salaryPerYear: 0.9, // 0.9 млн рублей
      signedDate: '2024-06-01',
      isActive: true
    },
    overallRating: 70,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-011.png',
    status: 'active'
  },
  {
    id: 'player-012',
    firstName: 'Стефан',
    lastName: 'Да Коста',
    position: 'C',
    birthDate: '1989-07-11',
    nationality: 'FR',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      salaryPerYear: 60, // 60 млн рублей
      signedDate: '2025-06-01',
      isActive: true
    },
    overallRating: 80,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-012.png',
    status: 'active'
  },
  {
    id: 'player-013',
    firstName: 'Максим',
    lastName: 'Денежкин',
    position: 'C',
    birthDate: '2000-12-10',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      salaryPerYear: 7, // 7 млн рублей
      signedDate: '2024-06-01',
      isActive: true
    },
    overallRating: 73,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist', 'lokomotiv'],
    photoUrl: '/players/photos/player-013.png',
    status: 'active'
  },
  {
    id: 'player-014',
    firstName: 'Анатолий',
    lastName: 'Голышев',
    position: 'RW',
    birthDate: '1995-02-14',
    nationality: 'RU',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2029-05-31',
      type: 'one-way',
      salaryPerYear: 40, // 40 млн рублей
      signedDate: '2025-06-01',
      isActive: true
    },
    overallRating: 78,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist'],
    photoUrl: '/players/photos/player-014.png',
    status: 'active'
  },
  {
    id: 'player-015',
    firstName: 'Роман',
    lastName: 'Горбунов',
    position: 'LW',
    birthDate: '1996-11-14',
    nationality: 'BY',
    teamId: 'avtomobilist',
    contract: {
      endDate: '2028-05-31',
      type: 'one-way',
      salaryPerYear: 55, // 55 млн рублей
      signedDate: '2024-06-01',
      isActive: true
    },
    overallRating: 78,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: ['avtomobilist', 'dinamo-minsk'],
    photoUrl: '/players/photos/player-015.png',
    status: 'active'
  }
];

// Экспорт для использования в других файлах
export default avtomobilistRoster;
