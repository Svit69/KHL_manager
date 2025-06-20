import { Player } from '../../types/player';

const skaRoster: Player[] = [
  // Вратари
  {
    id: 'player-1101',
    firstName: 'Егор',
    lastName: 'Заврагин',
    position: 'G',
    birthDate: '2005-08-23',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 9,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1101.png'
  },
  {
    id: 'player-1102',
    firstName: 'Сергей',
    lastName: 'Иванов',
    position: 'G',
    birthDate: '2004-04-03',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1102.png'
  },
  {
    id: 'player-1103',
    firstName: 'Павел',
    lastName: 'Мойсевич',
    position: 'G',
    birthDate: '2004-09-29',
    nationality: 'BY',
    club: 'СКА',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['СКА', 'Динамо Минск'],
    photoUrl: '/players/photos/player-1103.png'
  },

  // Защитники
  {
    id: 'player-1104',
    firstName: 'Иван',
    lastName: 'Выдренков',
    position: 'D',
    birthDate: '2004-07-31',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2027-05-31',
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
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1104.png'
  },
  {
    id: 'player-1105',
    firstName: 'Данила',
    lastName: 'Галенюк',
    position: 'D',
    birthDate: '2000-02-11',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 30,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1105.png'
  },
  {
    id: 'player-1106',
    firstName: 'Никита',
    lastName: 'Зайцев',
    position: 'D',
    birthDate: '1991-10-29',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2028-05-31',
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
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1106.png'
  },
  {
    id: 'player-1107',
    firstName: 'Артем',
    lastName: 'Земченок',
    position: 'D',
    birthDate: '1991-06-24',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1107.png'
  },
  {
    id: 'player-1108',
    firstName: 'Илья',
    lastName: 'Карпухин',
    position: 'D',
    birthDate: '1998-07-13',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 55,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1108.png'
  },
  {
    id: 'player-1109',
    firstName: 'Андрей',
    lastName: 'Педан',
    position: 'D',
    birthDate: '1993-07-03',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1109.png'
  },
  {
    id: 'player-1110',
    firstName: 'Сергей',
    lastName: 'Сапего',
    position: 'D',
    birthDate: '1999-10-08',
    nationality: 'BY',
    club: 'СКА',
    contract: {
      endDate: '2028-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 50,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['СКА', 'Динамо Минск'],
    photoUrl: '/players/photos/player-1110.png'
  },
  {
    id: 'player-1111',
    firstName: 'Дмитрий',
    lastName: 'Юдин',
    position: 'D',
    birthDate: '1995-07-31',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 55,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1111.png'
  },

  // Нападающие
  {
    id: 'player-1112',
    firstName: 'Павел',
    lastName: 'Акользин',
    position: 'LW',
    birthDate: '1990-11-25',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 8,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: ['СКА', 'Барыс'],
    photoUrl: '/players/photos/player-1112.png'
  },
  {
    id: 'player-1113',
    firstName: 'Владимир',
    lastName: 'Алистров',
    position: 'RW',
    birthDate: '2001-02-12',
    nationality: 'BY',
    club: 'СКА',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 50,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: ['СКА', 'Динамо Минск'],
    photoUrl: '/players/photos/player-1113.png'
  },
  {
    id: 'player-1114',
    firstName: 'Сергей',
    lastName: 'Андронов',
    position: 'C',
    birthDate: '1989-07-19',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 71,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1114.png'
  },
  {
    id: 'player-1115',
    firstName: 'Михаил',
    lastName: 'Воробьев',
    position: 'C',
    birthDate: '1997-01-05',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 55,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1115.png'
  },
  {
    id: 'player-1116',
    firstName: 'Михаил',
    lastName: 'Григоренко',
    position: 'C',
    birthDate: '1994-05-16',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2028-05-31',
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
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1116.png'
  },
  {
    id: 'player-1117',
    firstName: 'Павел',
    lastName: 'Дедунов',
    position: 'RW',
    birthDate: '1990-04-08',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 70,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1117.png'
  },
  {
    id: 'player-1118',
    firstName: 'Иван',
    lastName: 'Зинченко',
    position: 'C',
    birthDate: '2002-01-20',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 12,
      currency: 'RUB'
    },
    overallRating: 69,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1118.png'
  },
  {
    id: 'player-1119',
    firstName: 'Валентин',
    lastName: 'Зыков',
    position: 'LW',
    birthDate: '1995-05-15',
    nationality: 'RU',
    club: 'СКА',
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
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1119.png'
  },
  {
    id: 'player-1120',
    firstName: 'Матвей',
    lastName: 'Короткий',
    position: 'C',
    birthDate: '2005-12-23',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 86,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1120.png'
  },
  {
    id: 'player-1121',
    firstName: 'Сергей',
    lastName: 'Плотников',
    position: 'RW',
    birthDate: '1990-06-03',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2028-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 35,
      currency: 'RUB'
    },
    overallRating: 80,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1121.png'
  },
  {
    id: 'player-1122',
    firstName: 'Сергей',
    lastName: 'Толчинский',
    position: 'LW',
    birthDate: '1995-02-03',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2028-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 77,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1122.png'
  },
  {
    id: 'player-1123',
    firstName: 'Марат',
    lastName: 'Хайруллин',
    position: 'RW',
    birthDate: '1996-07-15',
    nationality: 'RU',
    club: 'СКА',
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
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1123.png'
  },
  {
    id: 'player-1124',
    firstName: 'Андрей',
    lastName: 'Чивилев',
    position: 'RW',
    birthDate: '2000-02-10',
    nationality: 'RU',
    club: 'СКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1124.png'
  }
];

export default skaRoster;
