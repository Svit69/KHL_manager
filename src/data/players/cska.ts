import { Player } from '../../types/player';

const cskaRoster: Player[] = [
  // Вратари
  {
    id: 'player-1201',
    firstName: 'Дмитрий',
    lastName: 'Гамзин',
    position: 'G',
    birthDate: '2003-04-08',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1201.png'
  },

  // Защитники
  {
    id: 'player-1202',
    firstName: 'Артем',
    lastName: 'Барабоша',
    position: 'D',
    birthDate: '2004-03-18',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 64,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1202.png'
  },
  {
    id: 'player-1203',
    firstName: 'Егор',
    lastName: 'Брютов',
    position: 'D',
    birthDate: '2001-07-11',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 67,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1203.png'
  },
  {
    id: 'player-1204',
    firstName: 'Михаил',
    lastName: 'Гордеев',
    position: 'D',
    birthDate: '2000-01-05',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 62,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1204.png'
  },
  {
    id: 'player-1205',
    firstName: 'Александр',
    lastName: 'Дрягилев',
    position: 'D',
    birthDate: '2000-03-26',
    nationality: 'RU',
    club: 'ЦСКА',
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
    potential: 68,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1205.png'
  },
  {
    id: 'player-1206',
    firstName: 'Николай',
    lastName: 'Макаров',
    position: 'D',
    birthDate: '2003-01-12',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1206.png'
  },
  {
    id: 'player-1207',
    firstName: 'Никита',
    lastName: 'Нестеров',
    position: 'D',
    birthDate: '1993-03-28',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 50,
      currency: 'RUB'
    },
    overallRating: 81,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1207.png'
  },
  {
    id: 'player-1208',
    firstName: 'Никита',
    lastName: 'Охотюк',
    position: 'D',
    birthDate: '2000-12-04',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1208.png'
  },
  {
    id: 'player-1209',
    firstName: 'Владислав',
    lastName: 'Провольнев',
    position: 'D',
    birthDate: '1995-04-03',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1209.png'
  },
  {
    id: 'player-1210',
    firstName: 'Джереми',
    lastName: 'Рой',
    position: 'D',
    birthDate: '1997-05-14',
    nationality: 'CA',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 50,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1210.png'
  },
  {
    id: 'player-1211',
    firstName: 'Дмитрий',
    lastName: 'Саморуков',
    position: 'D',
    birthDate: '1999-06-16',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1211.png'
  },
  {
    id: 'player-1212',
    firstName: 'Никита',
    lastName: 'Седов',
    position: 'D',
    birthDate: '2001-05-05',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1212.png'
  },
  {
    id: 'player-1213',
    firstName: 'Данила',
    lastName: 'Станиславский',
    position: 'D',
    birthDate: '2004-10-17',
    nationality: 'RU',
    club: 'ЦСКА',
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
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1213.png'
  },
  {
    id: 'player-1214',
    firstName: 'Колби',
    lastName: 'Уильямс',
    position: 'D',
    birthDate: '1995-01-26',
    nationality: 'CA',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1214.png'
  },

  // Нападающие
  {
    id: 'player-1215',
    firstName: 'Виталий',
    lastName: 'Абрамов',
    position: 'RW',
    birthDate: '1998-05-08',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1215.png'
  },
  {
    id: 'player-1216',
    firstName: 'Матвей',
    lastName: 'Аверочкин',
    position: 'C',
    birthDate: '2003-05-15',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 60,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1216.png'
  },
  {
    id: 'player-1217',
    firstName: 'Дмитрий',
    lastName: 'Бучельников',
    position: 'LW',
    birthDate: '2003-09-06',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 22,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 86,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1217.png'
  },
  {
    id: 'player-1218',
    firstName: 'Денис',
    lastName: 'Гурьянов',
    position: 'LW',
    birthDate: '1997-06-07',
    nationality: 'RU',
    club: 'ЦСКА',
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
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1218.png'
  },
  {
    id: 'player-1219',
    firstName: 'Кирилл',
    lastName: 'Долженков',
    position: 'LW',
    birthDate: '2004-04-20',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 68,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1219.png'
  },
  {
    id: 'player-1220',
    firstName: 'Иван',
    lastName: 'Дроздов',
    position: 'LW',
    birthDate: '1999-11-15',
    nationality: 'BY',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1220.png'
  },
  {
    id: 'player-1221',
    firstName: 'Василий',
    lastName: 'Дронык',
    position: 'LW',
    birthDate: '2003-06-23',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 59,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1221.png'
  },
  {
    id: 'player-1222',
    firstName: 'Руслан',
    lastName: 'Исхаков',
    position: 'C',
    birthDate: '2000-07-22',
    nationality: 'RU',
    club: 'ЦСКА',
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
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1222.png'
  },
  {
    id: 'player-1223',
    firstName: 'Владислав',
    lastName: 'Каменев',
    position: 'C',
    birthDate: '1996-08-12',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 75,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1223.png'
  },
  {
    id: 'player-1224',
    firstName: 'Павел',
    lastName: 'Карнаухов',
    position: 'C',
    birthDate: '1997-03-15',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 55,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1224.png'
  },
  {
    id: 'player-1225',
    firstName: 'Коул',
    lastName: 'Касселс',
    position: 'C',
    birthDate: '1995-05-04',
    nationality: 'US',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 26,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1225.png'
  },
  {
    id: 'player-1226',
    firstName: 'Егор',
    lastName: 'Кузьминов',
    position: 'RW',
    birthDate: '2002-02-05',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 64,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1226.png'
  },
  {
    id: 'player-1227',
    firstName: 'Олег',
    lastName: 'Майстренко',
    position: 'LW',
    birthDate: '2005-01-06',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2028-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 60,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1227.png'
  },
  {
    id: 'player-1228',
    firstName: 'Тахир',
    lastName: 'Мингачев',
    position: 'C',
    birthDate: '2001-07-31',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 13,
      currency: 'RUB'
    },
    overallRating: 68,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1228.png'
  },
  {
    id: 'player-1229',
    firstName: 'Прохор',
    lastName: 'Полтапов',
    position: 'RW',
    birthDate: '2003-02-01',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1229.png'
  },
  {
    id: 'player-1230',
    firstName: 'Максим',
    lastName: 'Соркин',
    position: 'C',
    birthDate: '2000-04-19',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1230.png'
  },
  {
    id: 'player-1231',
    firstName: 'Алексей',
    lastName: 'Чуркин',
    position: 'RW',
    birthDate: '2004-04-29',
    nationality: 'RU',
    club: 'ЦСКА',
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
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1231.png'
  },
  {
    id: 'player-1232',
    firstName: 'Иван',
    lastName: 'Янченко',
    position: 'LW',
    birthDate: '2004-02-27',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 54,
    potential: 67,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1232.png'
  },
  {
    id: 'player-1233',
    firstName: 'Ярослав',
    lastName: 'Яппаров',
    position: 'RW',
    birthDate: '2004-03-22',
    nationality: 'RU',
    club: 'ЦСКА',
    contract: {
      endDate: '2026-05-31',
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
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1233.png'
  }
];

export default cskaRoster;
