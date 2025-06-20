import { Player } from '@/types/player';
import { PlayerUtils } from './playerUtils';
import { SalaryUtils } from './salaryUtils';
import { PlayersDataManager } from '../data/players';

// Интерфейс для хранения истории отклоненных обменов
interface RejectedTradeHistory {
  tradeHash: string;
  timestamp: number;
}

// Хранилище отклоненных обменов (в памяти)
const rejectedTrades: RejectedTradeHistory[] = [];

export interface TradeOffer {
  givingPlayers: Player[]; // Игроки, которых МЫ отдаем
  receivingPlayers: Player[]; // Игроки, которых МЫ получаем
  targetTeamId: string; // Команда, которая принимает решение
}

export interface TradeAnalysis {
  isAccepted: boolean;
  confidence: number; // 0-100%
  reasons: string[];
  delta?: number; // Разница в стоимости
  category?: 'beneficial' | 'neutral' | 'unfavorable'; // 🟢🟡🔴
  breakdown: {
    valueBalance: number;
    salaryImpact: number;
    playerInterest: number;
    teamNeed: number;
    ageAndPotential: number;
  };
}

export class TradeAI {
  // Создание хеша для обмена (для отслеживания повторных предложений)
  static createTradeHash(offer: TradeOffer): string {
    const givingIds = offer.givingPlayers.map((p: Player) => p.id).sort().join(',');
    const receivingIds = offer.receivingPlayers.map((p: Player) => p.id).sort().join(',');
    return `${offer.targetTeamId}-${givingIds}-${receivingIds}`;
  }

  // Проверка, был ли этот обмен недавно отклонен
  static wasRecentlyRejected(tradeHash: string): boolean {
    const now = Date.now();
    const recentThreshold = 5 * 60 * 1000; // 5 минут

    // Очищаем старые записи
    const validIndex = rejectedTrades.findIndex(trade =>
      now - trade.timestamp > recentThreshold
    );
    if (validIndex !== -1) {
      rejectedTrades.splice(0, validIndex);
    }

    // Проверяем, есть ли этот обмен в недавно отклоненных
    return rejectedTrades.some(trade => trade.tradeHash === tradeHash);
  }

  // Добавление обмена в список отклоненных
  static addRejectedTrade(tradeHash: string): void {
    rejectedTrades.push({
      tradeHash,
      timestamp: Date.now()
    });
  }

  // Рассчитать стоимость игрока по новой формуле
  static calculatePlayerValue(player: Player): number {
    // Базовая стоимость
    const ratingValue = player.overallRating * 0.5;
    const potentialValue = player.potential * 0.4;

    // Штраф за возраст
    const age = PlayerUtils.calculateAge(player.birthDate);
    let agePenalty = 0;
    if (age > 30) {
      agePenalty = age - 30; // -1 балл за каждый год после 30
    }
    if (age > 34) {
      agePenalty += (age - 34); // дополнительно -1 балл за каждый год после 34 (итого -2)
    }

    // Штраф за контракт (переплата) - уменьшенное влияние
    const expectedSalary = player.overallRating * 0.8; // Ожидаемая зарплата
    const actualSalary = player.salary?.amount || 0;
    const overpay = Math.max(0, actualSalary - expectedSalary);
    const contractPenalty = overpay * 0.2; // -0.2 балла за каждый 1 млн переплаты (было -1)

    // Бонусы для звездных игроков
    let starBonus = 0;
    if (player.overallRating >= 80 && age < 30) {
      starBonus = 5; // +5 к стоимости для молодых звезд
    } else if (player.overallRating >= 78) {
      starBonus = 2; // +2 к стоимости для игроков 78+ рейтинга
    }

    // Бонус/штраф за срок контракта
    const contractTermBonus = this.calculateContractTermBonus(player, overpay);

    const totalValue = ratingValue + potentialValue - agePenalty - contractPenalty + starBonus + contractTermBonus;
    return Math.max(0, totalValue); // Не может быть отрицательной
  }

  // Расчет бонуса/штрафа за срок контракта
  static calculateContractTermBonus(player: Player, overpay: number): number {
    if (!player.contract.isActive) return 0;

    // Определяем количество лет до окончания контракта
    const contractEndDate = new Date(player.contract.endDate);
    const currentDate = new Date();
    const yearsLeft = Math.max(0, Math.ceil((contractEndDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24 * 365)));

    if (yearsLeft <= 1) return 0; // Игроки на последнем году не получают бонус/штраф

    // Если контракт хороший (нет переплаты)
    if (overpay <= 0) {
      // Чем дольше хороший контракт, тем ценнее игрок
      return yearsLeft * 1.5; // +1.5 за каждый год хорошего контракта
    } else {
      // Если контракт плохой (есть переплата)
      // Чем дольше плохой контракт, тем менее ценен игрок
      return -(yearsLeft * 1.0); // -1.0 за каждый год плохого контракта
    }
  }

  // Проверка на отдачу последнего игрока ключевой позиции
  static checkLastPlayerProtection(offer: TradeOffer): { shouldReject: boolean; reasons: string[] } {
    const reasons: string[] = [];

    // Получаем текущий состав команды
    const teamPlayers = PlayersDataManager.getTeamPlayers(offer.targetTeamId);
    if (!teamPlayers || teamPlayers.length === 0) {
      return { shouldReject: false, reasons: [] };
    }

    // Подсчитываем игроков по позициям в текущем составе
    const currentPositions = this.getPositionCounts(teamPlayers);

    // Подсчитываем, сколько игроков каждой позиции мы отдаем и получаем
    const givingAwayPositions = this.getPositionCounts(offer.receivingPlayers);
    const receivingPositions = this.getPositionCounts(offer.givingPlayers);

    // Ключевые позиции и минимальные требования
    const keyPositions = {
      'G': { min: 1, name: 'вратарь' },
      'D': { min: 4, name: 'защитник' },
      'C': { min: 2, name: 'центральный нападающий' },
      'LW': { min: 2, name: 'левый нападающий' },
      'RW': { min: 2, name: 'правый нападающий' }
    };

    // Проверяем каждую ключевую позицию
    for (const [position, config] of Object.entries(keyPositions)) {
      const currentCount = currentPositions[position] || 0;
      const givingAwayCount = givingAwayPositions[position] || 0;
      const receivingCount = receivingPositions[position] || 0;

      // Учитываем баланс: отдаем - получаем
      const finalCount = currentCount - givingAwayCount + receivingCount;

      if (finalCount < config.min) {
        reasons.push(`🚫 Нельзя отдать ${config.name}: останется ${finalCount}, минимум ${config.min}`);
        reasons.push(`Текущий состав: ${currentCount}, отдаем: ${givingAwayCount}, получаем: ${receivingCount}`);
        return { shouldReject: true, reasons };
      }
    }

    return { shouldReject: false, reasons: [] };
  }

  // Основная функция оценки сделки
  static evaluateTrade(offer: TradeOffer): TradeAnalysis {
    // Проверяем, был ли этот обмен недавно отклонен
    const tradeHash = this.createTradeHash(offer);
    if (this.wasRecentlyRejected(tradeHash)) {
      return {
        isAccepted: false,
        confidence: 95,
        reasons: ['🚫 Этот обмен уже был недавно отклонен', 'Команда не изменила своего мнения'],
        delta: -999,
        category: 'unfavorable',
        breakdown: {
          valueBalance: -100,
          salaryImpact: 0,
          playerInterest: 0,
          teamNeed: -100,
          ageAndPotential: 0
        }
      };
    }

    // Проверяем защиту последних игроков ключевых позиций
    const positionProtection = this.checkLastPlayerProtection(offer);
    if (positionProtection.shouldReject) {
      return {
        isAccepted: false,
        confidence: 95,
        reasons: positionProtection.reasons,
        delta: -999,
        category: 'unfavorable',
        breakdown: {
          valueBalance: -100,
          salaryImpact: 0,
          playerInterest: 0,
          teamNeed: -100,
          ageAndPotential: 0
        }
      };
    }

    // Проверяем зарплатный потолок
    const canAfford = SalaryUtils.canAffordTrade(offer.targetTeamId, offer.receivingPlayers, offer.givingPlayers);

    if (!canAfford) {
      return {
        isAccepted: false,
        confidence: 95,
        reasons: ['Сделка превышает потолок зарплат команды'],
        delta: -999,
        category: 'unfavorable',
        breakdown: {
          valueBalance: -100,
          salaryImpact: -100,
          playerInterest: 0,
          teamNeed: -100,
          ageAndPotential: 0
        }
      };
    }

    // Проверяем bulk-обмены (много игроков за одного звездного)
    const bulkAnalysis = this.analyzeBulkTrade(offer);
    if (bulkAnalysis.shouldReject) {
      return {
        isAccepted: false,
        confidence: 90,
        reasons: bulkAnalysis.reasons,
        delta: -999,
        category: 'unfavorable',
        breakdown: {
          valueBalance: -100,
          salaryImpact: 0,
          playerInterest: 0,
          teamNeed: -100,
          ageAndPotential: 0
        }
      };
    }

    // Рассчитываем стоимость игроков с учетом bulk-модификатора
    let givingValue = offer.givingPlayers.reduce((sum, p) => sum + this.calculatePlayerValue(p), 0);
    const receivingValue = offer.receivingPlayers.reduce((sum, p) => sum + this.calculatePlayerValue(p), 0);

    // Применяем bulk-модификатор к стоимости получаемых игроков
    if (bulkAnalysis.bulkModifier < 1) {
      givingValue *= bulkAnalysis.bulkModifier;
    }

    // Дельта с точки зрения целевой команды (они получают givingPlayers, отдают receivingPlayers)
    const delta = givingValue - receivingValue;

    // Определяем категорию и принятие
    let category: 'beneficial' | 'neutral' | 'unfavorable';
    let isAccepted: boolean;
    let confidence: number;
    const reasons: string[] = [];

    if (delta > 8) {
      category = 'beneficial';
      isAccepted = true;
      confidence = Math.min(95, 70 + delta * 2);
      reasons.push(`🟢 Выгодный обмен (Δ = +${delta.toFixed(1)})`);
      reasons.push('Команда получает значительно больше ценности');
    } else if (delta >= -2) {
      category = 'neutral';
      // В нейтральной зоне: 70% отказ, 30% согласие
      const randomChance = Math.random();
      isAccepted = randomChance < 0.3; // 30% шанс принятия
      confidence = isAccepted ? 30 : 70;
      reasons.push(`🟡 Нейтральный обмен (Δ = ${delta.toFixed(1)})`);
      if (isAccepted) {
        reasons.push('🎲 Команда решила рискнуть (30% шанс)');
        reasons.push('Обмен может принести пользу в долгосрочной перспективе');
      } else {
        reasons.push('🎲 Команда предпочла не рисковать (70% шанс)');
        reasons.push('Обмен не дает достаточных гарантий улучшения');
        // Добавляем в историю отклоненных обменов
        this.addRejectedTrade(tradeHash);
      }
    } else {
      category = 'unfavorable';
      isAccepted = false;
      confidence = Math.min(95, 70 + Math.abs(delta) * 2);
      reasons.push(`🔴 Невыгодный обмен (Δ = ${delta.toFixed(1)})`);
      reasons.push('Команда теряет слишком много ценности');
      // Добавляем в историю отклоненных обменов
      this.addRejectedTrade(tradeHash);
    }

    // Добавляем информацию о молодых звездах
    const youngStarsGiving = offer.givingPlayers.filter(p =>
      p.overallRating >= 80 && PlayerUtils.calculateAge(p.birthDate) < 30
    );
    const youngStarsReceiving = offer.receivingPlayers.filter(p =>
      p.overallRating >= 80 && PlayerUtils.calculateAge(p.birthDate) < 30
    );

    if (youngStarsGiving.length > 0) {
      reasons.push(`⭐ Команда получает ${youngStarsGiving.length} молодых звезд (80+ рейтинг, <30 лет)`);
    }
    if (youngStarsReceiving.length > 0) {
      reasons.push(`💔 Команда отдает ${youngStarsReceiving.length} молодых звезд (дополнительная ценность)`);
    }

    // Добавляем информацию о bulk-анализе
    if (bulkAnalysis.reasons.length > 0) {
      reasons.push(...bulkAnalysis.reasons);
    }

    const breakdown = {
      valueBalance: delta,
      salaryImpact: this.calculateSalaryImpact(offer.receivingPlayers, offer.givingPlayers),
      playerInterest: this.calculatePlayerInterest(offer.givingPlayers, offer.targetTeamId),
      teamNeed: this.calculateTeamNeed(offer.receivingPlayers, offer.givingPlayers),
      ageAndPotential: this.calculateAgeAndPotential(offer.receivingPlayers, offer.givingPlayers)
    };

    return {
      isAccepted,
      confidence,
      reasons,
      delta,
      category,
      breakdown
    };
  }

  // Анализ bulk-обменов (много игроков за одного)
  private static analyzeBulkTrade(offer: TradeOffer): {
    shouldReject: boolean;
    bulkModifier: number;
    reasons: string[];
  } {
    const reasons: string[] = [];

    // Проверяем, есть ли дисбаланс в количестве игроков
    const givingCount = offer.givingPlayers.length;
    const receivingCount = offer.receivingPlayers.length;

    // Если обмен 1 на 1 или получаем больше игроков - обычная логика
    if (givingCount <= receivingCount) {
      return {
        shouldReject: false,
        bulkModifier: 1.0,
        reasons: []
      };
    }

    // Bulk-обмен: отдаем больше игроков, чем получаем
    const highestGivingRating = Math.max(...offer.givingPlayers.map(p => p.overallRating));
    const highestReceivingRating = Math.max(...offer.receivingPlayers.map(p => p.overallRating));

    // Проверка "звездного правила": если их лучший игрок на 5+ рейтинга выше нашего лучшего
    if (highestReceivingRating - highestGivingRating >= 5) {
      reasons.push(`🚫 Отказ: их звезда (${highestReceivingRating}) слишком превосходит нашего лучшего (${highestGivingRating})`);
      reasons.push('Команда не готова отдать звездного игрока за группу менее талантливых');
      return {
        shouldReject: true,
        bulkModifier: 0,
        reasons
      };
    }

    // Определяем bulk-модификатор
    let bulkModifier = 1.0;
    if (givingCount === 2) {
      bulkModifier = 0.65;
      reasons.push(`📉 Bulk-штраф: стоимость 2 игроков снижена до 65% (${bulkModifier}x)`);
    } else if (givingCount >= 3) {
      bulkModifier = 0.3;
      reasons.push(`📉 Bulk-штраф: стоимость ${givingCount} игроков снижена до 30% (${bulkModifier}x)`);
    }

    if (bulkModifier < 1.0) {
      reasons.push('Команда предпочитает качество количеству');
    }

    return {
      shouldReject: false,
      bulkModifier,
      reasons
    };
  }

  // Анализ позиционного баланса для нейтральных обменов
  private static analyzePositionBalance(offer: TradeOffer): number {
    let score = 0;

    // Анализ позиций получаемых игроков
    const positionCounts = this.getPositionCounts(offer.givingPlayers);
    const positionNeeds = { G: 2, D: 6, C: 4, LW: 4, RW: 4 }; // Желаемое количество

    Object.entries(positionCounts).forEach(([position, count]) => {
      const need = positionNeeds[position as keyof typeof positionNeeds] || 0;
      if (count > 0) {
        score += Math.min(count, need) * 2; // Бонус за нужные позиции
      }
    });

    // Штраф за отдачу ключевых позиций
    const givingAway = this.getPositionCounts(offer.receivingPlayers);
    Object.entries(givingAway).forEach(([position, count]) => {
      if (position === 'G' && count > 0) {
        score -= count * 5; // Большой штраф за отдачу вратарей
      } else {
        score -= count; // Обычный штраф за отдачу игроков
      }
    });

    return score;
  }

  private static getPositionCounts(players: Player[]): Record<string, number> {
    return players.reduce((counts, player) => {
      counts[player.position] = (counts[player.position] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);
  }

  // Простые вспомогательные методы
  private static calculateSalaryImpact(giving: Player[], receiving: Player[]): number {
    const givingSalary = giving.reduce((sum, p) => sum + (p.salary?.amount || 0), 0);
    const receivingSalary = receiving.reduce((sum, p) => sum + (p.salary?.amount || 0), 0);
    const salaryDiff = receivingSalary - givingSalary;

    if (salaryDiff <= 0) return Math.min(50, Math.abs(salaryDiff) * 2);
    return Math.max(-50, -salaryDiff);
  }

  private static calculatePlayerInterest(players: Player[], targetTeamId: string): number {
    if (players.length === 0) return 0;
    const favoriteTeamBonus = players.filter(p => p.favoriteClubs.includes(targetTeamId)).length * 20;
    return Math.min(50, favoriteTeamBonus);
  }

  private static calculateTeamNeed(giving: Player[], receiving: Player[]): number {
    const playerCountDiff = giving.length - receiving.length;
    if (playerCountDiff > 0) return playerCountDiff * 10;
    if (playerCountDiff < 0) return playerCountDiff * 15;
    return 0;
  }

  private static calculateAgeAndPotential(giving: Player[], receiving: Player[]): number {
    if (giving.length === 0 || receiving.length === 0) return 0;

    const avgGivingAge = giving.reduce((sum, p) => sum + PlayerUtils.calculateAge(p.birthDate), 0) / giving.length;
    const avgReceivingAge = receiving.reduce((sum, p) => sum + PlayerUtils.calculateAge(p.birthDate), 0) / receiving.length;

    return Math.min(25, Math.max(-25, (avgReceivingAge - avgGivingAge) * 2));
  }

}
