import { Player, PlayerPosition, ContractType } from '../types/player';

// Утилиты для работы с игроками
export class PlayerUtils {
  
  // Вычислить возраст игрока
  static calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  }

  // Проверить, истекает ли контракт в текущем сезоне
  static isContractExpiring(endDate: string, monthsAhead: number = 6): boolean {
    const contractEnd = new Date(endDate);
    const checkDate = new Date();
    checkDate.setMonth(checkDate.getMonth() + monthsAhead);
    
    return contractEnd <= checkDate;
  }

  // Получить отображаемое название позиции
  static getPositionName(position: PlayerPosition): string {
    const positions = {
      'G': 'Вратарь',
      'D': 'Защитник',
      'LW': 'Левый крайний',
      'C': 'Центральный',
      'RW': 'Правый крайний'
    };
    return positions[position];
  }

  // Получить короткое отображаемое название позиции
  static getPositionDisplayName(position: PlayerPosition): string {
    const positions = {
      'G': 'ВРТ',
      'D': 'ЗАЩ',
      'LW': 'ЛНП',
      'C': 'ЦТР',
      'RW': 'ПНП'
    };
    return positions[position];
  }

  // Проверить, является ли игрок легионером
  static isLegionnaire(nationality: string): boolean {
    // Не легионеры: Россия, Казахстан, Беларусь
    const nonLegionnaireCountries = ['RU', 'KZ', 'BY'];
    return !nonLegionnaireCountries.includes(nationality.toUpperCase());
  }

  // Получить отображаемое название типа контракта
  static getContractTypeName(type: ContractType): string {
    const types = {
      'one-way': 'Односторонний',
      'two-way': 'Двухсторонний',
      'three-way': 'Трехсторонний'
    };
    return types[type];
  }

  // Форматировать зарплату (salary уже в миллионах)
  static formatSalary(salary: number): string {
    if (salary >= 1000) {
      return `${(salary / 1000).toFixed(1)} млрд ₽`;
    } else if (salary >= 1) {
      return `${salary.toFixed(1)} млн ₽`;
    } else {
      return `${(salary * 1000).toFixed(0)} тыс ₽`;
    }
  }

  // Получить цвет рейтинга
  static getRatingColor(rating: number): string {
    if (rating >= 90) return '#00FF00'; // Зеленый - элитный
    if (rating >= 80) return '#90EE90'; // Светло-зеленый - отличный
    if (rating >= 70) return '#FFFF00'; // Желтый - хороший
    if (rating >= 60) return '#FFA500'; // Оранжевый - средний
    if (rating >= 50) return '#FF6347'; // Красно-оранжевый - ниже среднего
    return '#FF0000'; // Красный - плохой
  }

  // Получить статус физической формы
  static getConditionStatus(condition: number): string {
    if (condition >= 90) return 'Отличная';
    if (condition >= 75) return 'Хорошая';
    if (condition >= 60) return 'Удовлетворительная';
    if (condition >= 40) return 'Плохая';
    return 'Критическая';
  }

  // Получить цвет для отображения физической формы
  static getConditionColor(condition: number): string {
    if (condition >= 90) {
      return '#0EE289'; // Зеленый для отличной формы
    } else if (condition >= 75) {
      return '#FFCE47'; // Желтый для хорошей формы
    } else if (condition >= 50) {
      return '#FFA500'; // Оранжевый для средней формы
    } else {
      return '#FF474A'; // Красный для плохой формы
    }
  }

  // Проверить, подходит ли игрок для пенсии (по возрасту)
  static isRetirementCandidate(player: Player): boolean {
    const age = this.calculateAge(player.birthDate);
    const retirementAges = {
      'G': 38, // Вратари играют дольше
      'D': 36,
      'LW': 35,
      'C': 35,
      'RW': 35
    };
    
    return age >= retirementAges[player.position];
  }

  // Получить путь к фото игрока
  static getPlayerPhotoPath(playerId: string): string {
    return `/players/photos/${playerId}.png`;
  }

  // Получить фото по умолчанию
  static getDefaultPhotoPath(position: PlayerPosition): string {
    return `/players/photos/default/${position.toLowerCase()}.png`;
  }

  // Сортировать игроков по позициям
  static sortPlayersByPosition(players: Player[]): Player[] {
    const positionOrder: PlayerPosition[] = ['G', 'D', 'LW', 'C', 'RW'];
    
    return players.sort((a, b) => {
      const aIndex = positionOrder.indexOf(a.position);
      const bIndex = positionOrder.indexOf(b.position);
      
      if (aIndex !== bIndex) {
        return aIndex - bIndex;
      }
      
      // Если позиции одинаковые, сортируем по рейтингу (по убыванию)
      return b.overallRating - a.overallRating;
    });
  }

  // Фильтровать игроков по позиции
  static filterPlayersByPosition(players: Player[], position: PlayerPosition): Player[] {
    return players.filter(player => player.position === position);
  }

  // Получить статистику команды по позициям
  static getTeamPositionStats(players: Player[]): Record<PlayerPosition, number> {
    const stats: Record<PlayerPosition, number> = {
      'G': 0,
      'D': 0,
      'LW': 0,
      'C': 0,
      'RW': 0
    };

    players.forEach(player => {
      if (player.status === 'active') {
        stats[player.position]++;
      }
    });

    return stats;
  }

  // Проверить, нужны ли команде игроки определенной позиции
  static needsPosition(players: Player[], position: PlayerPosition): boolean {
    const minRequirements: Record<PlayerPosition, number> = {
      'G': 2,   // Минимум 2 вратаря
      'D': 6,   // Минимум 6 защитников
      'LW': 4,  // Минимум 4 левых крайних
      'C': 4,   // Минимум 4 центральных
      'RW': 4   // Минимум 4 правых крайних
    };

    const activePlayers = players.filter(p => p.status === 'active');
    const positionCount = this.filterPlayersByPosition(activePlayers, position).length;
    
    return positionCount < minRequirements[position];
  }

  // Получить средний возраст команды
  static getAverageAge(players: Player[]): number {
    if (players.length === 0) return 0;
    
    const totalAge = players.reduce((sum, player) => {
      return sum + this.calculateAge(player.birthDate);
    }, 0);
    
    return Math.round(totalAge / players.length * 10) / 10;
  }

  // Получить общую зарплату команды
  static getTotalSalary(players: Player[]): number {
    return players.reduce((total, player) => {
      return total + (player.contract.isActive ? player.contract.salaryPerYear : 0);
    }, 0);
  }
}
