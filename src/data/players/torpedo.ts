import { Player } from '../../types/player';

const torpedoRoster: Player[] = [
  // Вратари
  {
    id: 'player-501',
    firstName: 'Дмитрий',
    lastName: 'Дагестанский',
    position: 'G',
    birthDate: '2004-08-28',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-501.png'
  },
  {
    id: 'player-502',
    firstName: 'Денис',
    lastName: 'Костин',
    position: 'G',
    birthDate: '1995-06-21',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 30,
      currency: 'RUB'
    },
    overallRating: 80,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: ['Авангард', 'Сибирь'],
    photoUrl: '/players/photos/player-502.png'
  },
  {
    id: 'player-503',
    firstName: 'Иван',
    lastName: 'Кульбаков',
    position: 'G',
    birthDate: '1996-09-18',
    nationality: 'BY',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-503.png'
  },

  // Защитники
  {
    id: 'player-504',
    firstName: 'Денис',
    lastName: 'Александров',
    position: 'D',
    birthDate: '1995-01-17',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-504.png'
  },
  {
    id: 'player-505',
    firstName: 'Сергей',
    lastName: 'Бойков',
    position: 'D',
    birthDate: '1996-01-24',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 15,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-505.png'
  },
  {
    id: 'player-506',
    firstName: 'Дмитрий',
    lastName: 'Бреус',
    position: 'D',
    birthDate: '2004-02-22',
    nationality: 'KZ',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 3,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-506.png'
  },
  {
    id: 'player-507',
    firstName: 'Арсений',
    lastName: 'Варлаков',
    position: 'D',
    birthDate: '2003-07-21',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 6,
      currency: 'RUB'
    },
    overallRating: 68,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-507.png'
  },
  {
    id: 'player-508',
    firstName: 'Александр',
    lastName: 'Пелевин',
    position: 'D',
    birthDate: '2004-05-16',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-508.png'
  },
  {
    id: 'player-509',
    firstName: 'Антон',
    lastName: 'Сизов',
    position: 'D',
    birthDate: '1995-07-24',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 27,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-509.png'
  },
  {
    id: 'player-510',
    firstName: 'Кирилл',
    lastName: 'Стеклов',
    position: 'D',
    birthDate: '2002-03-30',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-510.png'
  },
  {
    id: 'player-511',
    firstName: 'Александр',
    lastName: 'Щемеров',
    position: 'D',
    birthDate: '1997-06-02',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 15,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-511.png'
  },

  // Нападающие
  {
    id: 'player-512',
    firstName: 'Михаил',
    lastName: 'Абрамов',
    position: 'C',
    birthDate: '2001-03-26',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-512.png'
  },
  {
    id: 'player-513',
    firstName: 'Никита',
    lastName: 'Артамонов',
    position: 'LW',
    birthDate: '2005-11-17',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 6,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 88,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-513.png'
  },
  {
    id: 'player-514',
    firstName: 'Василий',
    lastName: 'Атанасов',
    position: 'RW',
    birthDate: '2002-09-25',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-514.png'
  },
  {
    id: 'player-515',
    firstName: 'Андрей',
    lastName: 'Белевич',
    position: 'C',
    birthDate: '1997-08-27',
    nationality: 'BY',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 19,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-515.png'
  },
  {
    id: 'player-516',
    firstName: 'Егор',
    lastName: 'Виноградов',
    position: 'C',
    birthDate: '2003-04-17',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-516.png'
  },
  {
    id: 'player-517',
    firstName: 'Кирилл',
    lastName: 'Воронин',
    position: 'RW',
    birthDate: '1994-01-11',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-517.png'
  },
  {
    id: 'player-518',
    firstName: 'Сергей',
    lastName: 'Гончарук',
    position: 'LW',
    birthDate: '1999-07-13',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-518.png'
  },
  {
    id: 'player-519',
    firstName: 'Богдан',
    lastName: 'Конюшков',
    position: 'D',
    birthDate: '2002-12-20',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 30,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-519.png'
  },
  {
    id: 'player-520',
    firstName: 'Алексей',
    lastName: 'Кручинин',
    position: 'C',
    birthDate: '1991-06-09',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-520.png'
  },
  {
    id: 'player-521',
    firstName: 'Максим',
    lastName: 'Летунов',
    position: 'C',
    birthDate: '1996-02-20',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
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
    photoUrl: '/players/photos/player-521.png'
  },
  {
    id: 'player-522',
    firstName: 'Артем',
    lastName: 'Мисников',
    position: 'RW',
    birthDate: '2003-03-11',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-522.png'
  },
  {
    id: 'player-523',
    firstName: 'Роберт',
    lastName: 'Нарделла',
    position: 'D',
    birthDate: '1996-04-22',
    nationality: 'US',
    club: 'Торпедо',
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
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-523.png'
  },
  {
    id: 'player-524',
    firstName: 'Даниил',
    lastName: 'Омелюсик',
    position: 'LW',
    birthDate: '2004-11-06',
    nationality: 'BY',
    club: 'Торпедо',
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
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-524.png'
  },
  {
    id: 'player-525',
    firstName: 'Роман',
    lastName: 'Опалев',
    position: 'C',
    birthDate: '1996-08-28',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-525.png'
  },
  {
    id: 'player-526',
    firstName: 'Кирилл',
    lastName: 'Свищев',
    position: 'C',
    birthDate: '2005-07-30',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-526.png'
  },
  {
    id: 'player-527',
    firstName: 'Никита',
    lastName: 'Тертышный',
    position: 'RW',
    birthDate: '1998-06-11',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 23,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Трактор'],
    photoUrl: '/players/photos/player-527.png'
  },
  {
    id: 'player-528',
    firstName: 'Владислав',
    lastName: 'Фирстов',
    position: 'LW',
    birthDate: '2001-06-19',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 30,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-528.png'
  },
  {
    id: 'player-529',
    firstName: 'Илья',
    lastName: 'Чефанов',
    position: 'RW',
    birthDate: '2001-10-18',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-529.png'
  },
  {
    id: 'player-530',
    firstName: 'Никита',
    lastName: 'Шавин',
    position: 'LW',
    birthDate: '2001-11-18',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 8,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-530.png'
  },
  {
    id: 'player-531',
    firstName: 'Дмитрий',
    lastName: 'Шевченко',
    position: 'C',
    birthDate: '1995-12-15',
    nationality: 'RU',
    club: 'Торпедо',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 18,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-531.png'
  },
  {
    id: 'player-532',
    firstName: 'Данил',
    lastName: 'Савунов',
    position: 'RW',
    birthDate: '2000-12-23',
    nationality: 'RU',
    club: 'Торпедо',
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
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-532.png'
  }
];

export default torpedoRoster;
