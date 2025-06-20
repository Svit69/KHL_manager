import { Player } from '@/types/player';
import { LegionnaireUtils } from './legionnaireUtils';

export interface LineupPosition {
  id: string;
  label: string;
  position: string;
  player?: Player;
  effectiveRating?: number; // Рейтинг с учетом штрафов
}

export interface LineupState {
  [positionId: string]: Player;
}

export class LineupUtils {
  /**
   * Проверяет, можно ли поставить игрока на позицию
   */
  static canPlacePlayer(player: Player, targetPosition: string): boolean {
    // Вратари только на вратарские позиции
    if (player.position === 'G') {
      return targetPosition === 'G';
    }
    
    // Вратарские позиции только для вратарей
    if (targetPosition === 'G') {
      return player.position === 'G';
    }
    
    // Остальные позиции можно ставить друг на друга с штрафами
    return true;
  }

  /**
   * Рассчитывает эффективный рейтинг игрока на позиции с учетом штрафов
   */
  static calculateEffectiveRating(player: Player, targetPosition: string): number {
    const baseRating = player.overallRating;
    
    // Вратари на своих позициях без штрафов
    if (player.position === 'G' && targetPosition === 'G') {
      return baseRating;
    }
    
    // Защитники
    if (player.position === 'D') {
      if (targetPosition === 'D') {
        return baseRating; // Без штрафа
      } else {
        // Защитник на нападающих позициях: -30%
        return Math.round(baseRating * 0.7);
      }
    }
    
    // Нападающие
    if (['LW', 'C', 'RW'].includes(player.position)) {
      if (targetPosition === 'D') {
        // Нападающий на защитнических позициях: -30%
        return Math.round(baseRating * 0.7);
      } else if (['LW', 'C', 'RW'].includes(targetPosition)) {
        // Нападающий на нападающих позициях
        if (player.position === targetPosition) {
          return baseRating; // Без штрафа
        } else if (targetPosition === 'C') {
          // Не центральный на центральную: -10%
          return Math.round(baseRating * 0.9);
        } else {
          // Другие нападающие позиции: -5%
          return Math.round(baseRating * 0.95);
        }
      }
    }
    
    return baseRating;
  }

  /**
   * Получает описание штрафа для UI
   */
  static getPositionPenaltyDescription(player: Player, targetPosition: string): string | null {
    if (player.position === targetPosition) {
      return null; // Нет штрафа
    }
    
    if (player.position === 'G' || targetPosition === 'G') {
      return null; // Вратари не имеют штрафов на своих позициях
    }
    
    if (player.position === 'D' && targetPosition !== 'D') {
      return '-30% (защитник на нападающей позиции)';
    }
    
    if (['LW', 'C', 'RW'].includes(player.position) && targetPosition === 'D') {
      return '-30% (нападающий на защитнической позиции)';
    }
    
    if (['LW', 'C', 'RW'].includes(player.position) && ['LW', 'C', 'RW'].includes(targetPosition)) {
      if (targetPosition === 'C') {
        return '-10% (не центральный на центральной позиции)';
      } else {
        return '-5% (другая нападающая позиция)';
      }
    }
    
    return null;
  }

  /**
   * Получает цвет для отображения штрафа
   */
  static getPenaltyColor(player: Player, targetPosition: string): string {
    const penalty = this.getPositionPenaltyDescription(player, targetPosition);
    
    if (!penalty) {
      return '#0EE289'; // Зеленый - без штрафа
    }
    
    if (penalty.includes('-30%')) {
      return '#FF474A'; // Красный - большой штраф
    }
    
    if (penalty.includes('-10%')) {
      return '#FFA500'; // Оранжевый - средний штраф
    }
    
    return '#FFCE47'; // Желтый - малый штраф
  }

  /**
   * Проверяет, занята ли позиция
   */
  static isPositionOccupied(lineup: LineupState, positionId: string): boolean {
    return lineup[positionId] !== undefined;
  }

  /**
   * Находит позицию игрока в составе
   */
  static findPlayerPosition(lineup: LineupState, playerId: string): string | null {
    for (const [positionId, player] of Object.entries(lineup)) {
      if (player.id === playerId) {
        return positionId;
      }
    }
    return null;
  }

  /**
   * Добавляет игрока в состав
   */
  static addPlayerToLineup(
    lineup: LineupState,
    player: Player,
    positionId: string,
    teamId?: string
  ): LineupState {
    const newLineup = { ...lineup };

    // Убираем игрока с предыдущей позиции, если он там был
    const currentPosition = this.findPlayerPosition(lineup, player.id);
    if (currentPosition) {
      delete newLineup[currentPosition];
    }

    // Ставим игрока на новую позицию
    newLineup[positionId] = player;

    return newLineup;
  }

  /**
   * Проверяет, можно ли добавить игрока в состав с учетом лимита легионеров
   */
  static canAddPlayerToLineup(
    lineup: LineupState,
    player: Player,
    teamId: string,
    targetPositionId?: string
  ): { canAdd: boolean; reason?: string } {
    // Проверяем, есть ли игрок уже в составе
    const currentPosition = this.findPlayerPosition(lineup, player.id);
    if (currentPosition) {
      return { canAdd: true }; // Игрок уже в составе, можно перемещать
    }

    // Получаем текущих игроков в составе
    let currentPlayers = Object.values(lineup);

    // Если указана целевая позиция и там уже есть игрок,
    // исключаем его из подсчета (замена игрока)
    if (targetPositionId && lineup[targetPositionId]) {
      currentPlayers = currentPlayers.filter(p => p.id !== lineup[targetPositionId].id);
    }

    // Проверяем лимит легионеров
    return LegionnaireUtils.canAddPlayerToLineup(currentPlayers, player, teamId);
  }

  /**
   * Убирает игрока из состава
   */
  static removePlayerFromLineup(lineup: LineupState, playerId: string): LineupState {
    const newLineup = { ...lineup };
    const position = this.findPlayerPosition(lineup, playerId);
    
    if (position) {
      delete newLineup[position];
    }
    
    return newLineup;
  }

  /**
   * Получает список игроков, доступных для выбора (не в составе)
   */
  static getAvailablePlayers(allPlayers: Player[], lineup: LineupState): Player[] {
    const playersInLineup = new Set(Object.values(lineup).map(p => p.id));
    return allPlayers.filter(player => !playersInLineup.has(player.id));
  }

  /**
   * Получает статистику состава
   */
  static getLineupStats(lineup: LineupState, teamId?: string): {
    totalPlayers: number;
    goalies: number;
    defensemen: number;
    forwards: number;
    averageRating: number;
    legionnaires: number;
    legionnaireGoalies: number;
    legionnaireStats?: any;
  } {
    const players = Object.values(lineup);

    const goalies = players.filter(p => p.position === 'G').length;
    const defensemen = players.filter(p => p.position === 'D').length;
    const forwards = players.filter(p => ['LW', 'C', 'RW'].includes(p.position)).length;

    const averageRating = players.length > 0
      ? Math.round(players.reduce((sum, p) => sum + p.overallRating, 0) / players.length)
      : 0;

    const legionnaires = LegionnaireUtils.countLegionnaires(players);
    const legionnaireGoalies = LegionnaireUtils.countLegionnaireGoalies(players);

    const legionnaireStats = teamId ? LegionnaireUtils.getLegionnaireStats(players, teamId) : undefined;

    return {
      totalPlayers: players.length,
      goalies,
      defensemen,
      forwards,
      averageRating,
      legionnaires,
      legionnaireGoalies,
      legionnaireStats
    };
  }
}
