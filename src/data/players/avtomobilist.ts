import { Player } from '../../types/player';

// Ростер команды "Автомобилист" (Екатеринбург)
export const avtomobilistRoster: Player[] = [
  // Вратари
  {
    id: 'player-001',
    firstName: 'Евгений',
    lastName: 'Аликин',
    position: 'G',
    birthDate: '1994-10-18',
    nationality: 'RU',
    club: 'Автомобилист',
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
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-001.png'
  },
  {
    id: 'player-002',
    firstName: 'Владимир',
    lastName: 'Галкин',
    position: 'G',
    birthDate: '2000-06-15',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист', 'Трактор'],
    photoUrl: '/players/photos/player-002.png'
  },

  // Защитники
  {
    id: 'player-003',
    firstName: 'Никита',
    lastName: 'Ишимников',
    position: 'D',
    birthDate: '2005-04-21',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 62,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-003.png'
  },
  {
    id: 'player-004',
    firstName: 'Евгений',
    lastName: 'Кашников',
    position: 'D',
    birthDate: '2002-12-25',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 10,
      currency: 'RUB'
    },
    overallRating: 70,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист', 'ЦСКА'],
    photoUrl: '/players/photos/player-004.png'
  },
  {
    id: 'player-005',
    firstName: 'Никита',
    lastName: 'Трямкин',
    position: 'D',
    birthDate: '1994-08-30',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2028-05-31',
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
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-005.png'
  },

  {
    id: 'player-006',
    firstName: 'Кирилл',
    lastName: 'Воробьев',
    position: 'D',
    birthDate: '1995-02-11',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 35,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-006.png'
  },
  {
    id: 'player-007',
    firstName: 'Сергей',
    lastName: 'Зборовский',
    position: 'D',
    birthDate: '1997-02-21',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 32,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-007.png'
  },
  {
    id: 'player-008',
    firstName: 'Юрий',
    lastName: 'Журавлев',
    position: 'D',
    birthDate: '2002-09-27',
    nationality: 'RU',
    club: 'Автомобилист',
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
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-008.png'
  },

  // Нападающие
  {
    id: 'player-009',
    firstName: 'Рид',
    lastName: 'Буше',
    position: 'LW',
    birthDate: '1993-09-08',
    nationality: 'US',
    club: 'Автомобилист',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 90,
      currency: 'RUB'
    },
    overallRating: 83,
    potential: 84,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-009.png'
  },
  {
    id: 'player-010',
    firstName: 'Алексей',
    lastName: 'Бывальцев',
    position: 'C',
    birthDate: '1994-02-20',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 53,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-010.png'
  },
  {
    id: 'player-011',
    firstName: 'Егор',
    lastName: 'Черников',
    position: 'RW',
    birthDate: '2002-12-09',
    nationality: 'RU',
    club: 'Автомобилист',
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
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-011.png'
  },
  {
    id: 'player-012',
    firstName: 'Стефан',
    lastName: 'Да Коста',
    position: 'C',
    birthDate: '1989-07-11',
    nationality: 'FR',
    club: 'Автомобилист',
    contract: {
      endDate: '2027-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 60,
      currency: 'RUB'
    },
    overallRating: 80,
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-012.png'
  },
  {
    id: 'player-013',
    firstName: 'Максим',
    lastName: 'Денежкин',
    position: 'C',
    birthDate: '2000-12-10',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 7,
      currency: 'RUB'
    },
    overallRating: 73,
    potential: 85,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист', 'Локомотив'],
    photoUrl: '/players/photos/player-013.png'
  },
  {
    id: 'player-014',
    firstName: 'Анатолий',
    lastName: 'Голышев',
    position: 'RW',
    birthDate: '1995-02-14',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2029-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 40,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист'],
    photoUrl: '/players/photos/player-014.png'
  },
  {
    id: 'player-015',
    firstName: 'Роман',
    lastName: 'Горбунов',
    position: 'LW',
    birthDate: '1996-11-14',
    nationality: 'BY',
    club: 'Автомобилист',
    contract: {
      endDate: '2028-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 55,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: ['Автомобилист', 'Динамо Минск'],
    photoUrl: '/players/photos/player-015.png'
  },
  {
    id: 'player-016',
    firstName: 'Данил',
    lastName: 'Романцев',
    position: 'C',
    birthDate: '1993-06-05',
    nationality: 'RU',
    club: 'Автомобилист',
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
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-016.png'
  },
  {
    id: 'player-017',
    firstName: 'Александр',
    lastName: 'Шаров',
    position: 'LW',
    birthDate: '1995-11-05',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2028-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 60,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-017.png'
  },
  {
    id: 'player-018',
    firstName: 'Никита',
    lastName: 'Шашков',
    position: 'RW',
    birthDate: '1999-03-26',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 17,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: ['Сибирь'],
    photoUrl: '/players/photos/player-018.png'
  },
  {
    id: 'player-019',
    firstName: 'Артем',
    lastName: 'Каштанов',
    position: 'RW',
    birthDate: '2004-12-09',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 2,
      currency: 'RUB'
    },
    overallRating: 71,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-019.png'
  },
  {
    id: 'player-020',
    firstName: 'Ник',
    lastName: 'Меркли',
    position: 'RW',
    birthDate: '1997-05-23',
    nationality: 'CA',
    club: 'Автомобилист',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 76,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-020.png'
  },
  {
    id: 'player-021',
    firstName: 'Брукс',
    lastName: 'Мэйсек',
    position: 'RW',
    birthDate: '1992-05-15',
    nationality: 'DE',
    club: 'Автомобилист',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 65,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-021.png'
  },
  {
    id: 'player-022',
    firstName: 'Никита',
    lastName: 'Новоселов',
    position: 'G',
    birthDate: '2004-06-03',
    nationality: 'RU',
    club: 'Автомобилист',
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
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-022.png'
  },
  {
    id: 'player-023',
    firstName: 'Василий',
    lastName: 'Филяев',
    position: 'C',
    birthDate: '1999-01-08',
    nationality: 'BY',
    club: 'Автомобилист',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-023.png'
  },
  {
    id: 'player-024',
    firstName: 'Константин',
    lastName: 'Хремкин',
    position: 'C',
    birthDate: '2002-04-17',
    nationality: 'RU',
    club: 'Автомобилист',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 65,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: ['СКА'],
    photoUrl: '/players/photos/player-024.png'
  }
];

// Экспорт для использования в других файлах
export default avtomobilistRoster;
