import { Player } from '../../types/player';

const salavatYulaevRoster: Player[] = [
  // Вратари
  {
    id: 'player-803',
    firstName: 'Семен',
    lastName: 'Вязовой',
    position: 'G',
    birthDate: '2003-02-26',
    nationality: 'RU',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 7,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 87,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-803.png'
  },
  {
    id: 'player-812',
    firstName: 'Александр',
    lastName: 'Самонов',
    position: 'G',
    birthDate: '1995-08-23',
    nationality: 'RU',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 35,
      currency: 'RUB'
    },
    overallRating: 82,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-812.png'
  },

  // Защитники
  {
    id: 'player-802',
    firstName: 'Сергей',
    lastName: 'Варлов',
    position: 'D',
    birthDate: '2000-06-30',
    nationality: 'RU',
    club: 'Салават Юлаев',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-802.png'
  },
  {
    id: 'player-806',
    firstName: 'Никита',
    lastName: 'Зоркин',
    position: 'D',
    birthDate: '2000-06-13',
    nationality: 'RU',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 24,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев', 'ЦСКА'],
    photoUrl: '/players/photos/player-806.png'
  },
  {
    id: 'player-807',
    firstName: 'Александр',
    lastName: 'Комаров',
    position: 'D',
    birthDate: '2002-11-12',
    nationality: 'RU',
    club: 'Салават Юлаев',
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
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-807.png'
  },
  {
    id: 'player-815',
    firstName: 'Динар',
    lastName: 'Хафизуллин',
    position: 'D',
    birthDate: '1989-01-05',
    nationality: 'RU',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 42,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев', 'Ак Барс'],
    photoUrl: '/players/photos/player-815.png'
  },
  {
    id: 'player-817',
    firstName: 'Ярослав',
    lastName: 'Цулыгин',
    position: 'D',
    birthDate: '2004-07-22',
    nationality: 'RU',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 4,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-817.png'
  },
  {
    id: 'player-820',
    firstName: 'Алексей',
    lastName: 'Василевский',
    position: 'D',
    birthDate: '1993-01-21',
    nationality: 'RU',
    club: 'Салават Юлаев',
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
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-820.png'
  },

  // Нападающие
  {
    id: 'player-801',
    firstName: 'Данил',
    lastName: 'Алалыкин',
    position: 'RW',
    birthDate: '2001-03-27',
    nationality: 'RU',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-801.png'
  },
  {
    id: 'player-804',
    firstName: 'Артем',
    lastName: 'Горшков',
    position: 'LW',
    birthDate: '2003-08-04',
    nationality: 'RU',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 3,
      currency: 'RUB'
    },
    overallRating: 67,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-804.png'
  },
  {
    id: 'player-805',
    firstName: 'Владислав',
    lastName: 'Ефремов',
    position: 'C',
    birthDate: '1995-08-01',
    nationality: 'RU',
    club: 'Салават Юлаев',
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
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-805.png'
  },
  {
    id: 'player-808',
    firstName: 'Глеб',
    lastName: 'Кузьмин',
    position: 'LW',
    birthDate: '1997-01-05',
    nationality: 'RU',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 10,
      currency: 'RUB'
    },
    overallRating: 68,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-808.png'
  },
  {
    id: 'player-809',
    firstName: 'Джошуа',
    lastName: 'Ливо',
    position: 'LW',
    birthDate: '1993-05-26',
    nationality: 'CA',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 110,
      currency: 'RUB'
    },
    overallRating: 84,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-809.png'
  },
  {
    id: 'player-816',
    firstName: 'Александр',
    lastName: 'Хмелевский',
    position: 'C',
    birthDate: '1999-06-09',
    nationality: 'US',
    club: 'Салават Юлаев',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 80,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['Салават Юлаев'],
    photoUrl: '/players/photos/player-816.png'
  }
];

export default salavatYulaevRoster;
