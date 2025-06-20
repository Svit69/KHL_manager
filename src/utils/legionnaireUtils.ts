import { Player } from '../types/player';

export class LegionnaireUtils {
  // Страны, игроки которых НЕ являются легионерами
  private static readonly NON_LEGIONNAIRE_COUNTRIES = [
    'RU', // Россия
    'BY', // Беларусь
    'KZ', // Казахстан
    'AM', // Армения
    'KG'  // Киргизия
  ];

  // Команды, для которых НЕ действует лимит на легионеров
  private static readonly EXEMPT_TEAMS = [
    'dynamo-mn', // Динамо Минск
    'barys',     // Барыс
    'kunlun'     // Куньлунь
  ];

  /**
   * Проверяет, является ли игрок легионером
   */
  static isLegionnaire(player: Player): boolean {
    return !this.NON_LEGIONNAIRE_COUNTRIES.includes(player.nationality);
  }

  /**
   * Проверяет, действует ли лимит на легионеров для команды
   */
  static isTeamExemptFromLimit(teamId: string): boolean {
    return this.EXEMPT_TEAMS.includes(teamId);
  }

  /**
   * Подсчитывает количество легионеров в составе
   */
  static countLegionnaires(players: Player[]): number {
    return players.filter(player => this.isLegionnaire(player)).length;
  }

  /**
   * Подсчитывает количество легионеров-вратарей в составе
   */
  static countLegionnaireGoalies(players: Player[]): number {
    return players.filter(player => 
      this.isLegionnaire(player) && player.position === 'G'
    ).length;
  }

  /**
   * Проверяет, можно ли добавить игрока в состав с учетом лимита легионеров
   */
  static canAddPlayerToLineup(
    currentLineup: Player[], 
    newPlayer: Player, 
    teamId: string
  ): { canAdd: boolean; reason?: string } {
    // Если команда освобождена от лимита
    if (this.isTeamExemptFromLimit(teamId)) {
      return { canAdd: true };
    }

    // Если игрок не легионер, можно добавлять
    if (!this.isLegionnaire(newPlayer)) {
      return { canAdd: true };
    }

    const currentLegionnaires = this.countLegionnaires(currentLineup);
    const currentLegionnaireGoalies = this.countLegionnaireGoalies(currentLineup);

    // Проверяем лимит на общее количество легионеров (5)
    if (currentLegionnaires >= 5) {
      return { 
        canAdd: false, 
        reason: 'Превышен лимит легионеров в составе (максимум 5)' 
      };
    }

    // Проверяем лимит на легионеров-вратарей (1)
    if (newPlayer.position === 'G' && currentLegionnaireGoalies >= 1) {
      return { 
        canAdd: false, 
        reason: 'Превышен лимит легионеров-вратарей в составе (максимум 1)' 
      };
    }

    return { canAdd: true };
  }

  /**
   * Получает статистику по легионерам в команде
   */
  static getLegionnaireStats(players: Player[], teamId: string) {
    const totalLegionnaires = this.countLegionnaires(players);
    const legionnaireGoalies = this.countLegionnaireGoalies(players);
    const isExempt = this.isTeamExemptFromLimit(teamId);

    return {
      totalLegionnaires,
      legionnaireGoalies,
      maxLegionnaires: isExempt ? 'Без ограничений' : 5,
      maxLegionnaireGoalies: isExempt ? 'Без ограничений' : 1,
      isExempt,
      canAddLegionnaire: isExempt || totalLegionnaires < 5,
      canAddLegionnaireGoalie: isExempt || legionnaireGoalies < 1
    };
  }

  /**
   * Получает список легионеров из массива игроков
   */
  static getLegionnaires(players: Player[]): Player[] {
    return players.filter(player => this.isLegionnaire(player));
  }

  /**
   * Получает список не-легионеров из массива игроков
   */
  static getNonLegionnaires(players: Player[]): Player[] {
    return players.filter(player => !this.isLegionnaire(player));
  }

  /**
   * Получает название страны по коду
   */
  static getCountryName(countryCode: string): string {
    const countryNames: { [key: string]: string } = {
      'RU': 'Россия',
      'BY': 'Беларусь', 
      'KZ': 'Казахстан',
      'AM': 'Армения',
      'KG': 'Киргизия',
      'US': 'США',
      'CA': 'Канада',
      'SE': 'Швеция',
      'FI': 'Финляндия',
      'CZ': 'Чехия',
      'SK': 'Словакия',
      'DE': 'Германия',
      'CH': 'Швейцария',
      'NO': 'Норвегия',
      'DK': 'Дания',
      'LV': 'Латвия',
      'LT': 'Литва',
      'EE': 'Эстония'
    };
    
    return countryNames[countryCode] || countryCode;
  }
}
