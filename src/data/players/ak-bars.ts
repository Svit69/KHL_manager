import { Player } from '../../types/player';

const akBarsRoster: Player[] = [
  // Вратари
  {
    id: 'player-301',
    firstName: 'Тимур',
    lastName: 'Билялов',
    position: 'G',
    birthDate: '1995-03-28',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 55,
      currency: 'RUB'
    },
    overallRating: 81,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-301.png'
  },

  // Защитники
  {
    id: 'player-302',
    firstName: 'Даниил',
    lastName: 'Журавлев',
    position: 'D',
    birthDate: '2000-04-08',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 23,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-302.png'
  },
  {
    id: 'player-303',
    firstName: 'Константин',
    lastName: 'Лучевников',
    position: 'D',
    birthDate: '1995-07-12',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 9,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-303.png'
  },
  {
    id: 'player-304',
    firstName: 'Никита',
    lastName: 'Лямкин',
    position: 'D',
    birthDate: '1996-02-06',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 52,
      currency: 'RUB'
    },
    overallRating: 80,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-304.png'
  },
  {
    id: 'player-305',
    firstName: 'Митчелл',
    lastName: 'Миллер',
    position: 'D',
    birthDate: '2001-12-20',
    nationality: 'US',
    club: 'Ак Барс',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 80,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-305.png'
  },
  {
    id: 'player-306',
    firstName: 'Степан',
    lastName: 'Терехов',
    position: 'D',
    birthDate: '2004-10-07',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 69,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-306.png'
  },
  {
    id: 'player-307',
    firstName: 'Степан',
    lastName: 'Фальковский',
    position: 'D',
    birthDate: '1996-12-18',
    nationality: 'BY',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 50,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс', 'Динамо Минск'],
    photoUrl: '/players/photos/player-307.png'
  },
  {
    id: 'player-308',
    firstName: 'Альберт',
    lastName: 'Яруллин',
    position: 'D',
    birthDate: '1993-05-03',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 55,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-308.png'
  },

  // Нападающие
  {
    id: 'player-309',
    firstName: 'Александр',
    lastName: 'Барабанов',
    position: 'LW',
    birthDate: '1994-06-17',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 95,
      currency: 'RUB'
    },
    overallRating: 81,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: ['СКА', 'Ак Барс'],
    photoUrl: '/players/photos/player-309.png'
  },
  {
    id: 'player-310',
    firstName: 'Артем',
    lastName: 'Галимов',
    position: 'RW',
    birthDate: '1999-09-08',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 37,
      currency: 'RUB'
    },
    overallRating: 81,
    potential: 86,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-310.png'
  },
  {
    id: 'player-311',
    firstName: 'Никита',
    lastName: 'Дыняк',
    position: 'LW',
    birthDate: '1997-08-06',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 27,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-311.png'
  },
  {
    id: 'player-312',
    firstName: 'Радэль',
    lastName: 'Замалтдинов',
    position: 'RW',
    birthDate: '2005-08-08',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 66,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-312.png'
  },
  {
    id: 'player-313',
    firstName: 'Дмитрий',
    lastName: 'Кателевский',
    position: 'C',
    birthDate: '2003-01-17',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 7,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-313.png'
  },
  {
    id: 'player-314',
    firstName: 'Илья',
    lastName: 'Сафонов',
    position: 'C',
    birthDate: '2001-05-30',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-314.png'
  },
  {
    id: 'player-315',
    firstName: 'Кирилл',
    lastName: 'Семенов',
    position: 'C',
    birthDate: '1994-10-27',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 75,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-315.png'
  },
  {
    id: 'player-316',
    firstName: 'Дмитрий',
    lastName: 'Яшкин',
    position: 'RW',
    birthDate: '1993-03-23',
    nationality: 'RU',
    club: 'Ак Барс',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 95,
      currency: 'RUB'
    },
    overallRating: 80,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['Ак Барс'],
    photoUrl: '/players/photos/player-316.png'
  }
];

export default akBarsRoster;
