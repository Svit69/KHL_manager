import { Player } from '../../types/player';

const amurRoster: Player[] = [
  // Вратари
  {
    id: 'player-1301',
    firstName: 'Владимир',
    lastName: 'Войтюк',
    position: 'G',
    birthDate: '2005-04-29',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 54,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1301.png'
  },
  {
    id: 'player-1302',
    firstName: 'Виктор',
    lastName: 'Кобозев',
    position: 'G',
    birthDate: '2004-05-08',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 60,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1302.png'
  },
  {
    id: 'player-1303',
    firstName: 'Дамир',
    lastName: 'Шаймарданов',
    position: 'G',
    birthDate: '2002-02-06',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1303.png'
  },

  // Защитники
  {
    id: 'player-1304',
    firstName: 'Кэмерон',
    lastName: 'Ли',
    position: 'D',
    birthDate: '1997-02-18',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 35,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1304.png'
  },
  {
    id: 'player-1305',
    firstName: 'Иван',
    lastName: 'Мищенко',
    position: 'D',
    birthDate: '1995-07-22',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 35,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1305.png'
  },
  {
    id: 'player-1306',
    firstName: 'Сергей',
    lastName: 'Рыжиков',
    position: 'D',
    birthDate: '2004-05-30',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 61,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1306.png'
  },

  // Нападающие
  {
    id: 'player-1307',
    firstName: 'Алекс',
    lastName: 'Броадхерст',
    position: 'C',
    birthDate: '1993-03-07',
    nationality: 'US',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 70,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1307.png'
  },
  {
    id: 'player-1308',
    firstName: 'Иван',
    lastName: 'Волгин',
    position: 'C',
    birthDate: '2003-11-14',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 60,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1308.png'
  },
  {
    id: 'player-1309',
    firstName: 'Александр',
    lastName: 'Гальченюк',
    position: 'RW',
    birthDate: '1994-02-12',
    nationality: 'US',
    club: 'Амур',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 90,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1309.png'
  },
  {
    id: 'player-1310',
    firstName: 'Артур',
    lastName: 'Гиздатуллин',
    position: 'C',
    birthDate: '1997-08-08',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 12,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1310.png'
  },
  {
    id: 'player-1311',
    firstName: 'Евгений',
    lastName: 'Грачев',
    position: 'C',
    birthDate: '1990-02-21',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1311.png'
  },
  {
    id: 'player-1312',
    firstName: 'Сергей',
    lastName: 'Дубакин',
    position: 'LW',
    birthDate: '2000-08-14',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 6,
      currency: 'RUB'
    },
    overallRating: 69,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1312.png'
  },
  {
    id: 'player-1313',
    firstName: 'Игнат',
    lastName: 'Коротких',
    position: 'C',
    birthDate: '2002-06-22',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1313.png'
  },
  {
    id: 'player-1314',
    firstName: 'Олег',
    lastName: 'Ли',
    position: 'LW',
    birthDate: '1991-02-28',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1314.png'
  },
  {
    id: 'player-1315',
    firstName: 'Роман',
    lastName: 'Макаров',
    position: 'LW',
    birthDate: '2004-01-29',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 58,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1315.png'
  },
  {
    id: 'player-1316',
    firstName: 'Никита',
    lastName: 'Мельник',
    position: 'LW',
    birthDate: '2005-12-04',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 51,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1316.png'
  },
  {
    id: 'player-1317',
    firstName: 'Степан',
    lastName: 'Новак',
    position: 'RW',
    birthDate: '2005-08-22',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 53,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1317.png'
  },
  {
    id: 'player-1318',
    firstName: 'Кирилл',
    lastName: 'Слепец',
    position: 'LW',
    birthDate: '1999-04-06',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 10,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1318.png'
  },
  {
    id: 'player-1319',
    firstName: 'Илья',
    lastName: 'Талалуев',
    position: 'RW',
    birthDate: '1998-01-28',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 10,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1319.png'
  },
  {
    id: 'player-1320',
    firstName: 'Кирилл',
    lastName: 'Ураков',
    position: 'RW',
    birthDate: '1997-12-21',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 14,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1320.png'
  },
  {
    id: 'player-1321',
    firstName: 'Артем',
    lastName: 'Шварев',
    position: 'RW',
    birthDate: '2001-11-01',
    nationality: 'RU',
    club: 'Амур',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 10,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1321.png'
  }
];

export default amurRoster;
