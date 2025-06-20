import { Player } from '../../types/player';

const metallurgRoster: Player[] = [
  // Вратари
  {
    id: 'player-601',
    firstName: 'Джелал-Ад-Дин',
    lastName: 'Амирбеков',
    position: 'G',
    birthDate: '2002-09-24',
    nationality: 'KZ',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 59,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-601.png'
  },
  {
    id: 'player-602',
    firstName: 'Александр',
    lastName: 'Смолин',
    position: 'G',
    birthDate: '2003-10-11',
    nationality: 'RU',
    club: 'Металлург',
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
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-602.png'
  },
  {
    id: 'player-603',
    firstName: 'Илья',
    lastName: 'Набоков',
    position: 'G',
    birthDate: '2003-03-27',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
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
    favoriteClubs: [],
    photoUrl: '/players/photos/player-603.png'
  },

  // Защитники
  {
    id: 'player-604',
    firstName: 'Данил',
    lastName: 'Гололобов',
    position: 'D',
    birthDate: '2002-10-11',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 67,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-604.png'
  },
  {
    id: 'player-605',
    firstName: 'Кирилл',
    lastName: 'Жуков',
    position: 'D',
    birthDate: '2004-08-23',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 63,
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-605.png'
  },
  {
    id: 'player-606',
    firstName: 'Богдан',
    lastName: 'Крохалев',
    position: 'D',
    birthDate: '2003-06-18',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 52,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-606.png'
  },
  {
    id: 'player-607',
    firstName: 'Вадим',
    lastName: 'Лукин',
    position: 'D',
    birthDate: '2004-06-27',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 52,
    potential: 68,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-607.png'
  },
  {
    id: 'player-608',
    firstName: 'Алексей',
    lastName: 'Маклюков',
    position: 'D',
    birthDate: '1993-09-19',
    nationality: 'RU',
    club: 'Металлург',
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
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-608.png'
  },
  {
    id: 'player-609',
    firstName: 'Савелий',
    lastName: 'Медведев',
    position: 'D',
    birthDate: '2004-06-27',
    nationality: 'RU',
    club: 'Металлург',
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
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-609.png'
  },
  {
    id: 'player-610',
    firstName: 'Артем',
    lastName: 'Минулин',
    position: 'D',
    birthDate: '1998-10-01',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 41,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-610.png'
  },
  {
    id: 'player-611',
    firstName: 'Ярослав',
    lastName: 'Мухранов',
    position: 'D',
    birthDate: '2005-07-10',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 52,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-611.png'
  },
  {
    id: 'player-612',
    firstName: 'Валерий',
    lastName: 'Орехов',
    position: 'D',
    birthDate: '1999-07-17',
    nationality: 'KZ',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 37,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-612.png'
  },
  {
    id: 'player-613',
    firstName: 'Данила',
    lastName: 'Паливко',
    position: 'D',
    birthDate: '2001-11-30',
    nationality: 'BY',
    club: 'Металлург',
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
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-613.png'
  },
  {
    id: 'player-614',
    firstName: 'Робин',
    lastName: 'Пресс',
    position: 'D',
    birthDate: '1994-12-21',
    nationality: 'SE',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 70,
      currency: 'RUB'
    },
    overallRating: 82,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-614.png'
  },
  {
    id: 'player-615',
    firstName: 'Макар',
    lastName: 'Хабаров',
    position: 'D',
    birthDate: '1999-09-10',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 31,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-615.png'
  },
  {
    id: 'player-616',
    firstName: 'Эдуард',
    lastName: 'Шетле',
    position: 'D',
    birthDate: '2003-01-05',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 67,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-616.png'
  },
  {
    id: 'player-617',
    firstName: 'Егор',
    lastName: 'Яковлев',
    position: 'D',
    birthDate: '1991-09-17',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 65,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-617.png'
  },

  // Нападающие
  {
    id: 'player-618',
    firstName: 'Дерек',
    lastName: 'Барак',
    position: 'C',
    birthDate: '1995-02-27',
    nationality: 'US',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-618.png'
  },
  {
    id: 'player-619',
    firstName: 'Даниил',
    lastName: 'Вовченко',
    position: 'LW',
    birthDate: '1996-04-04',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 50,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: ['Северсталь'],
    photoUrl: '/players/photos/player-619.png'
  },
  {
    id: 'player-620',
    firstName: 'Матвей',
    lastName: 'Галенюк',
    position: 'C',
    birthDate: '2003-08-29',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 57,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-620.png'
  },
  {
    id: 'player-621',
    firstName: 'Игорь',
    lastName: 'Гераськин',
    position: 'RW',
    birthDate: '1998-08-26',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 38,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: ['Северсталь'],
    photoUrl: '/players/photos/player-621.png'
  },
  {
    id: 'player-622',
    firstName: 'Михаил',
    lastName: 'Грасс',
    position: 'C',
    birthDate: '2004-01-15',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 65,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-622.png'
  },
  {
    id: 'player-623',
    firstName: 'Люк',
    lastName: 'Джонсон',
    position: 'C',
    birthDate: '1994-09-19',
    nationality: 'US',
    club: 'Металлург',
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
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-623.png'
  },
  {
    id: 'player-624',
    firstName: 'Денис',
    lastName: 'Зернов',
    position: 'C',
    birthDate: '1996-01-10',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 75,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-624.png'
  },
  {
    id: 'player-625',
    firstName: 'Никита',
    lastName: 'Зимин',
    position: 'C',
    birthDate: '2003-06-05',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 54,
    potential: 68,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-625.png'
  },
  {
    id: 'player-626',
    firstName: 'Роман',
    lastName: 'Канцеров',
    position: 'LW',
    birthDate: '2004-09-20',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 10,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 86,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-626.png'
  },
  {
    id: 'player-627',
    firstName: 'Андрей',
    lastName: 'Козлов',
    position: 'C',
    birthDate: '2005-07-13',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-627.png'
  },
  {
    id: 'player-628',
    firstName: 'Егор',
    lastName: 'Коробкин',
    position: 'RW',
    birthDate: '1998-08-31',
    nationality: 'RU',
    club: 'Металлург',
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
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-628.png'
  },
  {
    id: 'player-629',
    firstName: 'Никита',
    lastName: 'Коротков',
    position: 'LW',
    birthDate: '1996-07-20',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-629.png'
  },
  {
    id: 'player-630',
    firstName: 'Артем',
    lastName: 'Кузякин',
    position: 'LW',
    birthDate: '2004-04-17',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 53,
    potential: 70,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-630.png'
  },
  {
    id: 'player-631',
    firstName: 'Никита',
    lastName: 'Михайлис',
    position: 'LW',
    birthDate: '1995-06-18',
    nationality: 'KZ',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 80,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-631.png'
  },
  {
    id: 'player-632',
    firstName: 'Борис',
    lastName: 'Осипович',
    position: 'RW',
    birthDate: '2005-09-10',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 61,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-632.png'
  },
  {
    id: 'player-633',
    firstName: 'Егор',
    lastName: 'Пензин',
    position: 'LW',
    birthDate: '2002-05-04',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 52,
    potential: 67,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-633.png'
  },
  {
    id: 'player-634',
    firstName: 'Александр',
    lastName: 'Петунин',
    position: 'RW',
    birthDate: '1997-01-31',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-634.png'
  },
  {
    id: 'player-635',
    firstName: 'Иннокентий',
    lastName: 'Рыбин',
    position: 'RW',
    birthDate: '2003-03-20',
    nationality: 'RU',
    club: 'Металлург',
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
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-635.png'
  },
  {
    id: 'player-636',
    firstName: 'Дмитрий',
    lastName: 'Силантьев',
    position: 'RW',
    birthDate: '2000-07-31',
    nationality: 'RU',
    club: 'Металлург',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 25,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-636.png'
  }
];

export default metallurgRoster;
