import { Player } from '../../types/player';

const freeAgents: Player[] = [
  {
    id: 'player-401',
    firstName: 'Марк',
    lastName: 'Верба',
    position: 'LW',
    birthDate: '1998-02-02',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 69,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: ['Авангард'],
    photoUrl: '/players/photos/player-401.png'
  },
  {
    id: 'player-402',
    firstName: 'Егор',
    lastName: 'Воронков',
    position: 'D',
    birthDate: '1997-01-23',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: ['Витязь'],
    photoUrl: '/players/photos/player-402.png'
  },
  {
    id: 'player-403',
    firstName: 'Эмиль',
    lastName: 'Галимов',
    position: 'LW',
    birthDate: '1992-05-09',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: ['Нефтехимик', 'Локомотив'],
    photoUrl: '/players/photos/player-403.png'
  },
  {
    id: 'player-404',
    firstName: 'Илья',
    lastName: 'Каблуков',
    position: 'C',
    birthDate: '1988-01-18',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 68,
    potential: 68,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-404.png'
  },
  {
    id: 'player-405',
    firstName: 'Антон',
    lastName: 'Ковалев',
    position: 'LW',
    birthDate: '1997-07-03',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 63,
    potential: 68,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-405.png'
  },
  {
    id: 'player-406',
    firstName: 'Евгений',
    lastName: 'Кулик',
    position: 'D',
    birthDate: '1993-06-12',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: ['Спартак'],
    photoUrl: '/players/photos/player-406.png'
  },
  {
    id: 'player-407',
    firstName: 'Райан',
    lastName: 'Спунер',
    position: 'C',
    birthDate: '1992-01-30',
    nationality: 'US',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-407.png'
  },
  {
    id: 'player-408',
    firstName: 'Джованни',
    lastName: 'Фьоре',
    position: 'RW',
    birthDate: '1996-08-13',
    nationality: 'US',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-408.png'
  },
  {
    id: 'player-409',
    firstName: 'Андрей',
    lastName: 'Обидин',
    position: 'C',
    birthDate: '1997-02-28',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-409.png'
  },
  {
    id: 'player-410',
    firstName: 'Леонид',
    lastName: 'Метальников',
    position: 'D',
    birthDate: '1990-04-25',
    nationality: 'KZ',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 71,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-410.png'
  },
  {
    id: 'player-411',
    firstName: 'Владислав',
    lastName: 'Барулин',
    position: 'LW',
    birthDate: '1996-07-09',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-411.png'
  },
  {
    id: 'player-412',
    firstName: 'Всеволод',
    lastName: 'Гайдамак',
    position: 'RW',
    birthDate: '2003-04-09',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 60,
    potential: 70,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-412.png'
  },
  {
    id: 'player-413',
    firstName: 'Вячеслав',
    lastName: 'Грецкий',
    position: 'RW',
    birthDate: '1996-12-23',
    nationality: 'BY',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: ['Динамо Минск'],
    photoUrl: '/players/photos/player-413.png'
  },
  {
    id: 'player-414',
    firstName: 'Станислав',
    lastName: 'Бочаров',
    position: 'RW',
    birthDate: '1991-06-20',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-414.png'
  },
  {
    id: 'player-415',
    firstName: 'Антон',
    lastName: 'Бурдасов',
    position: 'LW',
    birthDate: '1991-05-09',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-415.png'
  },
  {
    id: 'player-416',
    firstName: 'Вячеслав',
    lastName: 'Войнов',
    position: 'D',
    birthDate: '1990-01-15',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-416.png'
  },
  {
    id: 'player-417',
    firstName: 'Артем',
    lastName: 'Николаев',
    position: 'RW',
    birthDate: '1999-03-24',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 67,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-417.png'
  },
  {
    id: 'player-418',
    firstName: 'Александр',
    lastName: 'Шевченко',
    position: 'LW',
    birthDate: '1992-08-20',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 68,
    potential: 70,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-418.png'
  },
  {
    id: 'player-419',
    firstName: 'Егор',
    lastName: 'Бабенко',
    position: 'LW',
    birthDate: '1997-02-05',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 67,
    potential: 69,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-419.png'
  },
  {
    id: 'player-420',
    firstName: 'Владимир',
    lastName: 'Галузин',
    position: 'C',
    birthDate: '1988-08-06',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 65,
    potential: 65,
    physicalCondition: 100,
    favoriteClubs: ['Витязь'],
    photoUrl: '/players/photos/player-420.png'
  },
  {
    id: 'player-422',
    firstName: 'Юрий',
    lastName: 'Паутов',
    position: 'D',
    birthDate: '1995-03-18',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-422.png'
  },
  {
    id: 'player-423',
    firstName: 'Евгений',
    lastName: 'Кузнецов',
    position: 'C',
    birthDate: '1992-05-19',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 83,
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: ['Трактор'],
    photoUrl: '/players/photos/player-423.png'
  },
  {
    id: 'player-424',
    firstName: 'Владимир',
    lastName: 'Брюквин',
    position: 'RW',
    birthDate: '1992-01-22',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 72,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: ['Динамо Москва'],
    photoUrl: '/players/photos/player-424.png'
  },
  {
    id: 'player-425',
    firstName: 'Джон',
    lastName: 'Леонард',
    position: 'LW',
    birthDate: '1998-08-07',
    nationality: 'US',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-425.png'
  },
  {
    id: 'player-426',
    firstName: 'Алекс',
    lastName: 'Стивс',
    position: 'C',
    birthDate: '1999-12-10',
    nationality: 'US',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-426.png'
  },
  {
    id: 'player-427',
    firstName: 'Чарльз',
    lastName: 'Хьюдон',
    position: 'RW',
    birthDate: '1994-06-23',
    nationality: 'CA',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-427.png'
  },
  {
    id: 'player-428',
    firstName: 'Рокко',
    lastName: 'Гримальди',
    position: 'C',
    birthDate: '1993-02-08',
    nationality: 'US',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-428.png'
  },
  {
    id: 'player-429',
    firstName: 'Алекс',
    lastName: 'Белзил',
    position: 'RW',
    birthDate: '1991-08-31',
    nationality: 'CA',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-429.png'
  },
  {
    id: 'player-430',
    firstName: 'Евгений',
    lastName: 'Дадонов',
    position: 'RW',
    birthDate: '1989-03-12',
    nationality: 'RU',
    club: 'НСА',
    contract: {
      endDate: '',
      type: 'ufa',
      isActive: false
    },
    salary: {
      amount: 0,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Трактор', 'СКА'],
    photoUrl: '/players/photos/player-430.png'
  }
];

export default freeAgents;
