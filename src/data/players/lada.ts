import { Player } from '../../types/player';

const ladaRoster: Player[] = [
  // Вратари
  {
    id: 'player-1401',
    firstName: 'Иван',
    lastName: 'Бочаров',
    position: 'G',
    birthDate: '1995-05-18',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Динамо Москва'],
    photoUrl: '/players/photos/player-1401.png'
  },
  {
    id: 'player-1402',
    firstName: 'Данила',
    lastName: 'Овчарик',
    position: 'G',
    birthDate: '2004-11-01',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 60,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1402.png'
  },
  {
    id: 'player-1403',
    firstName: 'Денис',
    lastName: 'Попов',
    position: 'G',
    birthDate: '2002-05-30',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 64,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1403.png'
  },
  {
    id: 'player-1404',
    firstName: 'Максим',
    lastName: 'Третьяк',
    position: 'G',
    birthDate: '1996-10-22',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 10,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: ['ЦСКА'],
    photoUrl: '/players/photos/player-1404.png'
  },
  {
    id: 'player-1405',
    firstName: 'Александр',
    lastName: 'Трушков',
    position: 'G',
    birthDate: '1996-07-31',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 15,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Спартак'],
    photoUrl: '/players/photos/player-1405.png'
  },

  // Защитники
  {
    id: 'player-1406',
    firstName: 'Денис',
    lastName: 'Баранцев',
    position: 'D',
    birthDate: '1992-04-12',
    nationality: 'RU',
    club: 'Лада',
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
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: ['Лада'],
    photoUrl: '/players/photos/player-1406.png'
  },
  {
    id: 'player-1407',
    firstName: 'Максим',
    lastName: 'Белоусов',
    position: 'D',
    birthDate: '2005-04-06',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 58,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1407.png'
  },
  {
    id: 'player-1408',
    firstName: 'Максим',
    lastName: 'Березин',
    position: 'D',
    birthDate: '1991-01-29',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1408.png'
  },
  {
    id: 'player-1409',
    firstName: 'Карим',
    lastName: 'Вафин',
    position: 'D',
    birthDate: '2004-02-04',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 61,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1409.png'
  },
  {
    id: 'player-1410',
    firstName: 'Никита',
    lastName: 'Зимин',
    position: 'D',
    birthDate: '2000-08-09',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 65,
    potential: 71,
    physicalCondition: 100,
    favoriteClubs: ['Локомотив'],
    photoUrl: '/players/photos/player-1410.png'
  },
  {
    id: 'player-1411',
    firstName: 'Денис',
    lastName: 'Истюфеев',
    position: 'D',
    birthDate: '2004-12-27',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 59,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1411.png'
  },
  {
    id: 'player-1412',
    firstName: 'Евгений',
    lastName: 'Калабушкин',
    position: 'D',
    birthDate: '1999-11-25',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 15,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1412.png'
  },
  {
    id: 'player-1413',
    firstName: 'Марат',
    lastName: 'Калимуллин',
    position: 'D',
    birthDate: '2005-11-30',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 56,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1413.png'
  },
  {
    id: 'player-1414',
    firstName: 'Артем',
    lastName: 'Карпов',
    position: 'D',
    birthDate: '2005-02-20',
    nationality: 'RU',
    club: 'Лада',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1414.png'
  },
  {
    id: 'player-1415',
    firstName: 'Алекс',
    lastName: 'Коттон',
    position: 'D',
    birthDate: '2001-05-12',
    nationality: 'CA',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1415.png'
  },
  {
    id: 'player-1416',
    firstName: 'Егор',
    lastName: 'Морозов',
    position: 'D',
    birthDate: '2002-09-30',
    nationality: 'RU',
    club: 'Лада',
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
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1416.png'
  },
  {
    id: 'player-1417',
    firstName: 'Олег',
    lastName: 'Попов',
    position: 'D',
    birthDate: '1997-08-12',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 66,
    potential: 69,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1417.png'
  },
  {
    id: 'player-1418',
    firstName: 'Владислав',
    lastName: 'Семин',
    position: 'D',
    birthDate: '1998-02-17',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 17,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1418.png'
  },

  // Нападающие
  {
    id: 'player-1419',
    firstName: 'Андрей',
    lastName: 'Алтыбармакян',
    position: 'RW',
    birthDate: '1998-08-04',
    nationality: 'RU',
    club: 'Лада',
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
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-1419.png'
  },
  {
    id: 'player-1420',
    firstName: 'Даниил',
    lastName: 'Аноп',
    position: 'LW',
    birthDate: '2000-11-18',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 64,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1420.png'
  },
  {
    id: 'player-1421',
    firstName: 'Александр',
    lastName: 'Бажухин',
    position: 'C',
    birthDate: '2005-12-28',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 53,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1421.png'
  },
  {
    id: 'player-1422',
    firstName: 'Данил',
    lastName: 'Башкиров',
    position: 'RW',
    birthDate: '2001-05-15',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 33,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1422.png'
  },
  {
    id: 'player-1423',
    firstName: 'Рафаэль',
    lastName: 'Бикмуллин',
    position: 'RW',
    birthDate: '1997-07-12',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 17,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1423.png'
  },
  {
    id: 'player-1424',
    firstName: 'Данил',
    lastName: 'Бородин',
    position: 'LW',
    birthDate: '2005-03-10',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 60,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: ['Сибирь'],
    photoUrl: '/players/photos/player-1424.png'
  },
  {
    id: 'player-1425',
    firstName: 'Александр',
    lastName: 'Государев',
    position: 'RW',
    birthDate: '2005-04-21',
    nationality: 'RU',
    club: 'Лада',
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
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1425.png'
  },
  {
    id: 'player-1426',
    firstName: 'Евгений',
    lastName: 'Грошев',
    position: 'RW',
    birthDate: '1999-12-31',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 11,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1426.png'
  },
  {
    id: 'player-1427',
    firstName: 'Дмитрий',
    lastName: 'Кугрышев',
    position: 'LW',
    birthDate: '1990-01-18',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1427.png'
  },
  {
    id: 'player-1428',
    firstName: 'Джошуа',
    lastName: 'Лоуренс',
    position: 'RW',
    birthDate: '2002-01-28',
    nationality: 'CA',
    club: 'Лада',
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
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1428.png'
  },
  {
    id: 'player-1429',
    firstName: 'Артем',
    lastName: 'Манукян',
    position: 'LW',
    birthDate: '1998-06-09',
    nationality: 'RU',
    club: 'Лада',
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
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1429.png'
  },
  {
    id: 'player-1430',
    firstName: 'Никита',
    lastName: 'Михайлов',
    position: 'RW',
    birthDate: '1998-05-08',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1430.png'
  },
  {
    id: 'player-1431',
    firstName: 'Петр',
    lastName: 'Михальченко',
    position: 'LW',
    birthDate: '2005-07-12',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 52,
    potential: 70,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1431.png'
  },
  {
    id: 'player-1432',
    firstName: 'Данила',
    lastName: 'Моисеев',
    position: 'C',
    birthDate: '1998-07-25',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1432.png'
  },
  {
    id: 'player-1433',
    firstName: 'Алексей',
    lastName: 'Ожгихин',
    position: 'C',
    birthDate: '1998-04-01',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1433.png'
  },
  {
    id: 'player-1434',
    firstName: 'Вячеслав',
    lastName: 'Основин',
    position: 'C',
    birthDate: '1994-03-05',
    nationality: 'RU',
    club: 'Лада',
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
    photoUrl: '/players/photos/player-1434.png'
  },
  {
    id: 'player-1435',
    firstName: 'Глеб',
    lastName: 'Петров',
    position: 'LW',
    birthDate: '2001-07-10',
    nationality: 'RU',
    club: 'Лада',
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
    photoUrl: '/players/photos/player-1435.png'
  },
  {
    id: 'player-1436',
    firstName: 'Никита',
    lastName: 'Попугаев',
    position: 'RW',
    birthDate: '1998-11-20',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1436.png'
  },
  {
    id: 'player-1437',
    firstName: 'Илья',
    lastName: 'Рейнгардт',
    position: 'RW',
    birthDate: '2003-09-08',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 6,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1437.png'
  },
  {
    id: 'player-1438',
    firstName: 'Иван',
    lastName: 'Романов',
    position: 'LW',
    birthDate: '1998-01-20',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 9,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1438.png'
  },
  {
    id: 'player-1439',
    firstName: 'Райли',
    lastName: 'Савчук',
    position: 'RW',
    birthDate: '1999-03-18',
    nationality: 'CA',
    club: 'Лада',
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
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1439.png'
  },
  {
    id: 'player-1440',
    firstName: 'Олег',
    lastName: 'Сенькин',
    position: 'C',
    birthDate: '2005-01-30',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 58,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1440.png'
  },
  {
    id: 'player-1441',
    firstName: 'Владислав',
    lastName: 'Федоров',
    position: 'LW',
    birthDate: '2005-07-27',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 51,
    potential: 67,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1441.png'
  },
  {
    id: 'player-1442',
    firstName: 'Александр',
    lastName: 'Хохлачев',
    position: 'RW',
    birthDate: '1993-09-09',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1442.png'
  },
  {
    id: 'player-1443',
    firstName: 'Владислав',
    lastName: 'Червоненко',
    position: 'RW',
    birthDate: '1999-03-01',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 11,
      currency: 'RUB'
    },
    overallRating: 68,
    potential: 71,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1443.png'
  },
  {
    id: 'player-1444',
    firstName: 'Данил',
    lastName: 'Юртайкин',
    position: 'LW',
    birthDate: '1997-07-01',
    nationality: 'RU',
    club: 'Лада',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-1444.png'
  }
];

export default ladaRoster;
