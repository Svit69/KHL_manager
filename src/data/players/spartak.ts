import { Player } from '../../types/player';

const spartakRoster: Player[] = [
  // Вратари
  {
    id: 'player-701',
    firstName: 'Вячеслав',
    lastName: 'Бугров',
    position: 'G',
    birthDate: '2005-07-06',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-701.png'
  },
  {
    id: 'player-702',
    firstName: 'Артем',
    lastName: 'Загидулин',
    position: 'G',
    birthDate: '1995-08-08',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-702.png'
  },
  {
    id: 'player-703',
    firstName: 'Павел',
    lastName: 'Канаев',
    position: 'G',
    birthDate: '2003-07-24',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 64,
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-703.png'
  },
  {
    id: 'player-704',
    firstName: 'Дмитрий',
    lastName: 'Куликов',
    position: 'G',
    birthDate: '2001-05-31',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 68,
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-704.png'
  },
  {
    id: 'player-705',
    firstName: 'Дмитрий',
    lastName: 'Николаев',
    position: 'G',
    birthDate: '2000-01-25',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 23,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-705.png'
  },

  // Защитники
  {
    id: 'player-706',
    firstName: 'Роман',
    lastName: 'Бычков',
    position: 'D',
    birthDate: '2001-02-10',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 6,
      currency: 'RUB'
    },
    overallRating: 67,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-706.png'
  },
  {
    id: 'player-707',
    firstName: 'Никита',
    lastName: 'Ефремов',
    position: 'D',
    birthDate: '2001-09-28',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-707.png'
  },
  {
    id: 'player-708',
    firstName: 'Владимир',
    lastName: 'Жиряков',
    position: 'D',
    birthDate: '2005-06-19',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 71,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-708.png'
  },
  {
    id: 'player-709',
    firstName: 'Егор',
    lastName: 'Зайцев',
    position: 'D',
    birthDate: '1998-05-03',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 20,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-709.png'
  },
  {
    id: 'player-710',
    firstName: 'Даниил',
    lastName: 'Иванов',
    position: 'D',
    birthDate: '2003-09-26',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-710.png'
  },
  {
    id: 'player-711',
    firstName: 'Вениамин',
    lastName: 'Королев',
    position: 'D',
    birthDate: '2003-06-30',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-711.png'
  },
  {
    id: 'player-712',
    firstName: 'Артем',
    lastName: 'Малков',
    position: 'D',
    birthDate: '2005-08-14',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-712.png'
  },
  {
    id: 'player-713',
    firstName: 'Егор',
    lastName: 'Мартынов',
    position: 'D',
    birthDate: '2004-08-14',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 59,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-713.png'
  },
  {
    id: 'player-714',
    firstName: 'Антон',
    lastName: 'Марышев',
    position: 'D',
    birthDate: '2004-12-28',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 61,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-714.png'
  },
  {
    id: 'player-715',
    firstName: 'Андрей',
    lastName: 'Миронов',
    position: 'D',
    birthDate: '1994-07-29',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
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
    favoriteClubs: [],
    photoUrl: '/players/photos/player-715.png'
  },
  {
    id: 'player-716',
    firstName: 'Даниил',
    lastName: 'Орлов',
    position: 'D',
    birthDate: '2003-12-21',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 4,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-716.png'
  },
  {
    id: 'player-717',
    firstName: 'Арсений',
    lastName: 'Парамонов',
    position: 'D',
    birthDate: '2002-06-26',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-717.png'
  },
  {
    id: 'player-718',
    firstName: 'Даниил',
    lastName: 'Соболев',
    position: 'D',
    birthDate: '2003-03-03',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 58,
    potential: 69,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-718.png'
  },
  {
    id: 'player-719',
    firstName: 'Никита',
    lastName: 'Соколов',
    position: 'D',
    birthDate: '1998-11-02',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-719.png'
  },
  {
    id: 'player-720',
    firstName: 'Степан',
    lastName: 'Фролов',
    position: 'D',
    birthDate: '2004-05-25',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 63,
    potential: 72,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-720.png'
  },
  {
    id: 'player-721',
    firstName: 'Михал',
    lastName: 'Чайковски',
    position: 'D',
    birthDate: '1992-05-06',
    nationality: 'SK',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 38,
      currency: 'RUB'
    },
    overallRating: 77,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-721.png'
  },

  // Нападающие
  {
    id: 'player-722',
    firstName: 'Александр',
    lastName: 'Беляев',
    position: 'LW',
    birthDate: '1999-03-28',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
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
    photoUrl: '/players/photos/player-722.png'
  },
  {
    id: 'player-723',
    firstName: 'Егор',
    lastName: 'Варюшкин',
    position: 'C',
    birthDate: '2004-12-20',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 59,
    potential: 73,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-723.png'
  },
  {
    id: 'player-724',
    firstName: 'Иван',
    lastName: 'Гаврилов',
    position: 'C',
    birthDate: '2005-07-19',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 61,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-724.png'
  },
  {
    id: 'player-725',
    firstName: 'Николай',
    lastName: 'Голдобин',
    position: 'RW',
    birthDate: '1995-10-07',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 80,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-725.png'
  },
  {
    id: 'player-726',
    firstName: 'Прохор',
    lastName: 'Корбит',
    position: 'RW',
    birthDate: '2002-05-28',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-726.png'
  },
  {
    id: 'player-727',
    firstName: 'Максим',
    lastName: 'Кровяков',
    position: 'C',
    birthDate: '2002-05-12',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-727.png'
  },
  {
    id: 'player-728',
    firstName: 'Константин',
    lastName: 'Лукин',
    position: 'RW',
    birthDate: '2001-03-26',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.7,
      currency: 'RUB'
    },
    overallRating: 59,
    potential: 67,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-728.png'
  },
  {
    id: 'player-729',
    firstName: 'Сергей',
    lastName: 'Лукьянцев',
    position: 'LW',
    birthDate: '2004-12-29',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-729.png'
  },
  {
    id: 'player-730',
    firstName: 'Михаил',
    lastName: 'Мальцев',
    position: 'LW',
    birthDate: '1998-03-12',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-730.png'
  },
  {
    id: 'player-731',
    firstName: 'Демид',
    lastName: 'Мансуров',
    position: 'C',
    birthDate: '2000-08-09',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-731.png'
  },
  {
    id: 'player-732',
    firstName: 'Иван',
    lastName: 'Морозов',
    position: 'C',
    birthDate: '2000-05-05',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 82,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-732.png'
  },
  {
    id: 'player-733',
    firstName: 'Никита',
    lastName: 'Мыльников',
    position: 'LW',
    birthDate: '2005-07-08',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2026-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 50,
    potential: 71,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-733.png'
  },
  {
    id: 'player-734',
    firstName: 'Макар',
    lastName: 'Насретдинов',
    position: 'C',
    birthDate: '2004-07-23',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 69,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-734.png'
  },
  {
    id: 'player-735',
    firstName: 'Александр',
    lastName: 'Пашин',
    position: 'RW',
    birthDate: '2002-07-28',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 11,
      currency: 'RUB'
    },
    overallRating: 78,
    potential: 83,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-735.png'
  },
  {
    id: 'player-736',
    firstName: 'Данил',
    lastName: 'Пивчулин',
    position: 'LW',
    birthDate: '2003-04-11',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 81,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-736.png'
  },
  {
    id: 'player-737',
    firstName: 'Павел',
    lastName: 'Порядин',
    position: 'LW',
    birthDate: '1996-07-21',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2028-05-31',
      type: 'one-way',
      isActive: true
    },
    salary: {
      amount: 45,
      currency: 'RUB'
    },
    overallRating: 79,
    potential: 80,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-737.png'
  },
  {
    id: 'player-738',
    firstName: 'Герман',
    lastName: 'Рубцов',
    position: 'C',
    birthDate: '1998-06-27',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 15,
      currency: 'RUB'
    },
    overallRating: 75,
    potential: 78,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-738.png'
  },
  {
    id: 'player-739',
    firstName: 'Иван',
    lastName: 'Рябов',
    position: 'C',
    birthDate: '2005-01-26',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 75,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-739.png'
  },
  {
    id: 'player-740',
    firstName: 'Дмитрий',
    lastName: 'Соловьев',
    position: 'LW',
    birthDate: '2002-01-26',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-740.png'
  },
  {
    id: 'player-741',
    firstName: 'Никита',
    lastName: 'Сусуев',
    position: 'LW',
    birthDate: '2005-02-06',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 0.5,
      currency: 'RUB'
    },
    overallRating: 63,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-741.png'
  },
  {
    id: 'player-742',
    firstName: 'Павел',
    lastName: 'Ткаченко',
    position: 'RW',
    birthDate: '1997-07-11',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 74,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-742.png'
  },
  {
    id: 'player-743',
    firstName: 'Даниэль',
    lastName: 'Усманов',
    position: 'C',
    birthDate: '2002-04-15',
    nationality: 'RU',
    club: 'Спартак',
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
    potential: 76,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-743.png'
  },
  {
    id: 'player-744',
    firstName: 'Егор',
    lastName: 'Филин',
    position: 'RW',
    birthDate: '1999-06-01',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
      type: 'two-way',
      isActive: true
    },
    salary: {
      amount: 1,
      currency: 'RUB'
    },
    overallRating: 74,
    potential: 77,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-744.png'
  },
  {
    id: 'player-745',
    firstName: 'Никита',
    lastName: 'Холодилин',
    position: 'LW',
    birthDate: '2002-06-19',
    nationality: 'RU',
    club: 'Спартак',
    contract: {
      endDate: '2027-05-31',
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
    favoriteClubs: [],
    photoUrl: '/players/photos/player-745.png'
  },
  {
    id: 'player-746',
    firstName: 'Егор',
    lastName: 'Чезганов',
    position: 'LW',
    birthDate: '2002-06-28',
    nationality: 'BY',
    club: 'Спартак',
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
    potential: 79,
    physicalCondition: 100,
    favoriteClubs: [],
    photoUrl: '/players/photos/player-746.png'
  }
];

export default spartakRoster;
