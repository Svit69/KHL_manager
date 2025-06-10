import { Player } from '../../types/player';

const avangardRoster: Player[] = [
  // Вратари
  {
    id: 'player-901',
    firstName: 'Михаил',
    lastName: 'Бердин',
    position: 'G',
    birthDate: '1998-03-01',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-901.png'
  },
  {
    id: 'player-902',
    firstName: 'Андрей',
    lastName: 'Мишуров',
    position: 'G',
    birthDate: '2001-08-06',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 10,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-902.png'
  },
  {
    id: 'player-903',
    firstName: 'Никита',
    lastName: 'Серебряков',
    position: 'G',
    birthDate: '1995-11-01',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2030-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 50,
      currency: 'RUB'
    },
    overallRating: 83,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: ['Авангард'],
    photoUrl: '/players/photos/player-903.png'
  },

  // Защитники
  {
    id: 'player-904',
    firstName: 'Джесси',
    lastName: 'Блэкер',
    position: 'D',
    birthDate: '1991-04-19',
    nationality: 'KZ',
    club: 'Авангард',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 46,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-904.png'
  },
  {
    id: 'player-905',
    firstName: 'Алекс',
    lastName: 'Грант',
    position: 'D',
    birthDate: '1989-01-20',
    nationality: 'CA',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-905.png'
  },
  {
    id: 'player-906',
    firstName: 'Михаил',
    lastName: 'Гуляев',
    position: 'D',
    birthDate: '2005-04-26',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 18,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 88,
    physicalCondition: 100,
    favoriteClubs: ['Авангард'],
    photoUrl: '/players/photos/player-906.png'
  },
  {
    id: 'player-907',
    firstName: 'Марсель',
    lastName: 'Ибрагимов',
    position: 'D',
    birthDate: '1997-08-04',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 12,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-907.png'
  },
  {
    id: 'player-908',
    firstName: 'Павел',
    lastName: 'Коледов',
    position: 'D',
    birthDate: '1994-09-20',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 60,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: ['Сибирь'],
    photoUrl: '/players/photos/player-908.png'
  },
  {
    id: 'player-909',
    firstName: 'Алексей',
    lastName: 'Соловьев',
    position: 'D',
    birthDate: '1994-09-08',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 27,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-909.png'
  },
  {
    id: 'player-910',
    firstName: 'Даниил',
    lastName: 'Чайка',
    position: 'D',
    birthDate: '2002-10-22',
    nationality: 'RU',
    club: 'Авангард',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-910.png'
  },
  {
    id: 'player-911',
    firstName: 'Семен',
    lastName: 'Чистяков',
    position: 'D',
    birthDate: '2001-08-07',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 80,
    potential: 86,
    physicalCondition: 100,
    favoriteClubs: ['Авангард'],
    photoUrl: '/players/photos/player-911.png'
  },
  {
    id: 'player-912',
    firstName: 'Дамир',
    lastName: 'Шарипзянов',
    position: 'D',
    birthDate: '1996-02-17',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2030-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 80,
      currency: 'RUB'
    },
    overallRating: 84,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: ['Авангард'],
    photoUrl: '/players/photos/player-912.png'
  },

  // Нападающие
  {
    id: 'player-913',
    firstName: 'Дмитрий',
    lastName: 'Злодеев',
    position: 'C',
    birthDate: '2002-02-15',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 10,
      currency: 'RUB'
    },
    overallRating: 64,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: ['Динамо Москва'],
    photoUrl: '/players/photos/player-913.png'
  },
  {
    id: 'player-914',
    firstName: 'Николай',
    lastName: 'Прохоркин',
    position: 'C',
    birthDate: '1993-09-17',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 35,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-914.png'
  },
  {
    id: 'player-915',
    firstName: 'Иван',
    lastName: 'Игумнов',
    position: 'RW',
    birthDate: '1996-06-29',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 30,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: ['Динамо Москва'],
    photoUrl: '/players/photos/player-915.png'
  },
  {
    id: 'player-916',
    firstName: 'Константин',
    lastName: 'Окулов',
    position: 'RW',
    birthDate: '1995-02-18',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2028-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 85,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-916.png'
  },
  {
    id: 'player-917',
    firstName: 'Александр',
    lastName: 'Филатьев',
    position: 'RW',
    birthDate: '2004-01-28',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 3,
      currency: 'RUB'
    },
    overallRating: 63,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-917.png'
  },
  {
    id: 'player-918',
    firstName: 'Игорь',
    lastName: 'Мартынов',
    position: 'LW',
    birthDate: '1999-01-19',
    nationality: 'BY',
    club: 'Авангард',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 30,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-918.png'
  },
  {
    id: 'player-919',
    firstName: 'Даниил',
    lastName: 'Степанов',
    position: 'LW',
    birthDate: '2001-01-12',
    nationality: 'BY',
    club: 'Авангард',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 62,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-919.png'
  },
  {
    id: 'player-920',
    firstName: 'Владимир',
    lastName: 'Ткачев',
    position: 'LW',
    birthDate: '1995-10-05',
    nationality: 'RU',
    club: 'Авангард',
    contract: {
      endDate: '2030-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 120,
      currency: 'RUB'
    },
    overallRating: 82,
    potential: 86,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-920.png'
  },
  {
    id: 'player-921',
    firstName: 'Наиль',
    lastName: 'Якупов',
    position: 'LW',
    birthDate: '1993-10-06',
    nationality: 'RU',
    club: 'Авангард',
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
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['Авангард'],
    photoUrl: '/players/photos/player-921.png'
  }
];

export default avangardRoster;
