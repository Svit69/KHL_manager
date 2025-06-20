import { Player } from '../../types/player';

const dynamoMinskRoster: Player[] = [
  // Вратари
  {
    id: 'player-1001',
    firstName: 'Егор',
    lastName: 'Вельмакин',
    position: 'G',
    birthDate: '2003-04-08',
    nationality: 'RU',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 6,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1001.png'
  },
  {
    id: 'player-1002',
    firstName: 'Василий',
    lastName: 'Демченко',
    position: 'G',
    birthDate: '1994-03-16',
    nationality: 'RU',
    club: 'Динамо Минск',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 35,
      currency: 'RUB'
    },
    overallRating: 80,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1002.png'
  },
  {
    id: 'player-1003',
    firstName: 'Зак',
    lastName: 'Фукале',
    position: 'G',
    birthDate: '1995-05-28',
    nationality: 'CA',
    club: 'Динамо Минск',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 71,
      currency: 'RUB'
    },
    overallRating: 85,
    potential: 86,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1003.png'
  },

  // Защитники
  {
    id: 'player-1004',
    firstName: 'Джошуа',
    lastName: 'Брук',
    position: 'D',
    birthDate: '1999-06-17',
    nationality: 'CA',
    club: 'Динамо Минск',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 35,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1004.png'
  },
  {
    id: 'player-1005',
    firstName: 'Павел',
    lastName: 'Денисов',
    position: 'D',
    birthDate: '2001-05-17',
    nationality: 'BY',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 12,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1005.png'
  },
  {
    id: 'player-1006',
    firstName: 'Даррен',
    lastName: 'Диц',
    position: 'D',
    birthDate: '1993-07-17',
    nationality: 'CA',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 30,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1006.png'
  },
  {
    id: 'player-1007',
    firstName: 'Николас',
    lastName: 'Мелош',
    position: 'D',
    birthDate: '1997-07-18',
    nationality: 'CA',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 36,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1007.png'
  },
  {
    id: 'player-1008',
    firstName: 'Ксавье',
    lastName: 'Уэлле',
    position: 'D',
    birthDate: '1993-07-29',
    nationality: 'CA',
    club: 'Динамо Минск',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1008.png'
  },
  {
    id: 'player-1009',
    firstName: 'Кристиан',
    lastName: 'Хенкель',
    position: 'D',
    birthDate: '1995-11-07',
    nationality: 'BY',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 35,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1009.png'
  },
  {
    id: 'player-1010',
    firstName: 'Роберт',
    lastName: 'Хэмилтон',
    position: 'D',
    birthDate: '1994-03-31',
    nationality: 'CA',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 42,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1010.png'
  },

  // Нападающие
  {
    id: 'player-1011',
    firstName: 'Егор',
    lastName: 'Бориков',
    position: 'RW',
    birthDate: '2005-08-28',
    nationality: 'BY',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 68,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1011.png'
  },
  {
    id: 'player-1012',
    firstName: 'Вадим',
    lastName: 'Мороз',
    position: 'RW',
    birthDate: '2003-11-20',
    nationality: 'BY',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 7,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1012.png'
  },
  {
    id: 'player-1013',
    firstName: 'Никита',
    lastName: 'Пышкайло',
    position: 'LW',
    birthDate: '2000-05-29',
    nationality: 'BY',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 3,
      currency: 'RUB'
    },
    overallRating: 67,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1013.png'
  },
  {
    id: 'player-1014',
    firstName: 'Андрей',
    lastName: 'Стась',
    position: 'C',
    birthDate: '1988-10-18',
    nationality: 'BY',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 5,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1014.png'
  },
  {
    id: 'player-1015',
    firstName: 'Вадим',
    lastName: 'Шипачев',
    position: 'C',
    birthDate: '1987-03-12',
    nationality: 'RU',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1015.png'
  },
  {
    id: 'player-1016',
    firstName: 'Сэм',
    lastName: 'Энэс',
    position: 'RW',
    birthDate: '1993-06-01',
    nationality: 'US',
    club: 'Динамо Минск',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 50,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1016.png'
  }
];

export default dynamoMinskRoster;
