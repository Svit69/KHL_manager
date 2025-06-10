/**
 * Утилиты для отображения информации об игроках
 */

export class PlayerDisplayUtils {
  /**
   * Рассчитывает возраст игрока на основе даты рождения
   */
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

  /**
   * Получает правильное окончание для возраста
   */
  static getAgeEnding(age: number): string {
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;
    
    // Исключения для 11-14
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return 'лет';
    }
    
    // Обычные правила
    if (lastDigit === 1) {
      return 'год';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return 'года';
    } else {
      return 'лет';
    }
  }

  /**
   * Форматирует возраст с правильным окончанием
   */
  static formatAge(birthDate: string): string {
    const age = this.calculateAge(birthDate);
    const ending = this.getAgeEnding(age);
    return `${age} ${ending}`;
  }

  /**
   * Получает сокращение национальности на русском языке
   */
  static getNationalityAbbreviation(nationality: string): string {
    const abbreviations: { [key: string]: string } = {
      'RU': 'РУС',
      'BY': 'БЕЛ',
      'KZ': 'КАЗ',
      'CA': 'КАН',
      'US': 'США',
      'FI': 'ФИН',
      'SE': 'ШВЕ',
      'CZ': 'ЧЕХ',
      'SK': 'СЛК',
      'DE': 'ГЕР',
      'FR': 'ФРА',
      'SI': 'СЛО',
      'CN': 'КИТ',
      'NO': 'НОР',
      'DK': 'ДАН',
      'CH': 'ШВЦ',
      'AT': 'АВТ',
      'LV': 'ЛАТ',
      'LT': 'ЛИТ',
      'EE': 'ЭСТ',
      'UA': 'УКР',
      'PL': 'ПОЛ',
      'HU': 'ВЕН',
      'IT': 'ИТА',
      'GB': 'ВБР',
      'JP': 'ЯПО',
      'KR': 'КОР'
    };
    
    return abbreviations[nationality] || nationality;
  }

  /**
   * Получает полное название национальности на русском языке
   */
  static getNationalityFullName(nationality: string): string {
    const fullNames: { [key: string]: string } = {
      'RU': 'Россия',
      'BY': 'Беларусь',
      'KZ': 'Казахстан',
      'CA': 'Канада',
      'US': 'США',
      'FI': 'Финляндия',
      'SE': 'Швеция',
      'CZ': 'Чехия',
      'SK': 'Словакия',
      'DE': 'Германия',
      'FR': 'Франция',
      'SI': 'Словения',
      'CN': 'Китай',
      'NO': 'Норвегия',
      'DK': 'Дания',
      'CH': 'Швейцария',
      'AT': 'Австрия',
      'LV': 'Латвия',
      'LT': 'Литва',
      'EE': 'Эстония',
      'UA': 'Украина',
      'PL': 'Польша',
      'HU': 'Венгрия',
      'IT': 'Италия',
      'GB': 'Великобритания',
      'JP': 'Япония',
      'KR': 'Корея'
    };
    
    return fullNames[nationality] || nationality;
  }

  /**
   * Получает путь к флагу страны
   */
  static getFlagPath(nationality: string): string {
    const flagMap: { [key: string]: string } = {
      'RU': '/flags/icon-russia.png',
      'BY': '/flags/icon-belarus.png',
      'KZ': '/flags/icon-kazakhstan.png',
      'US': '/flags/icon-usa.png',
      'CA': '/flags/icon-canada.png',
      'FI': '/flags/icon-finland.png',
      'SE': '/flags/icon-sweden.png',
      'CZ': '/flags/icon-czech.png',
      'SK': '/flags/icon-slovakia.png',
      'DE': '/flags/icon-germany.png',
      'FR': '/flags/icon-france.png',
      'SI': '/flags/icon-slovenia.png',
      'CN': '/flags/icon-china.png',
    };
    return flagMap[nationality] || '/flags/icon-russia.png';
  }

  /**
   * Получает сокращенное название позиции на русском
   */
  static getPositionDisplayName(position: string): string {
    const positions: { [key: string]: string } = {
      'G': 'ВРТ',
      'D': 'ЗАЩ',
      'C': 'ЦТР',
      'LW': 'ЛНП',
      'RW': 'ПНП'
    };
    
    return positions[position] || position;
  }

  /**
   * Получает цвет позиции
   */
  static getPositionColor(position: string): string {
    switch (position) {
      case 'G':
        return '#9747FF'; // Фиолетовый для вратарей
      case 'D':
        return '#FFCE47'; // Желтый для защитников
      case 'LW':
      case 'RW':
      case 'C':
        return '#FF474A'; // Красный для нападающих
      default:
        return '#FFCE47';
    }
  }
}
