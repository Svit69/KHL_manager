import { Player } from '../types/player';
import { PlayerUtils } from './playerUtils';

export interface ContractOffer {
  playerId: string;
  teamId: string;
  salaryOffer: number;
  contractLength: number; // в годах
  contractType: 'one-way' | 'two-way';
}

export interface NegotiationResult {
  isAccepted: boolean;
  confidence: number;
  reasons: string[];
  counterOffer?: {
    salary: number;
    contractLength: number;
  };
  category: 'accepted' | 'rejected' | 'counter';
}

export class ContractNegotiation {
  
  // Расчет ожидаемой зарплаты игрока
  static calculateExpectedSalary(player: Player): number {
    const age = PlayerUtils.calculateAge(player.birthDate);
    const rating = player.overallRating;

    // Базовая зарплата на основе рейтинга (более реалистичная формула)
    let baseSalary;
    if (rating >= 80) {
      baseSalary = rating * 0.6 + 15; // 80 рейтинг = 63 млн
    } else if (rating >= 75) {
      baseSalary = rating * 0.5 + 5; // 75 рейтинг = 42.5 млн
    } else if (rating >= 70) {
      baseSalary = rating * 0.4; // 70 рейтинг = 28 млн
    } else {
      baseSalary = rating * 0.25; // 65 рейтинг = 16.25 млн
    }

    // Модификатор возраста
    let ageModifier = 1.0;
    if (age <= 23) {
      ageModifier = 0.6; // Молодые игроки значительно дешевле
    } else if (age <= 27) {
      ageModifier = 0.9; // Пик карьеры, но не переплачиваем
    } else if (age <= 30) {
      ageModifier = 1.0; // Опытные игроки
    } else if (age <= 33) {
      ageModifier = 0.8; // Начинают дешеветь
    } else {
      ageModifier = 0.5; // Ветераны значительно дешевле
    }

    const expectedSalary = baseSalary * ageModifier;

    // Минимум 3 млн, максимум 120 млн
    return Math.max(3, Math.min(120, Math.round(expectedSalary)));
  }
  
  // Оценка предложения контракта игроком
  static evaluateContractOffer(player: Player, offer: ContractOffer): NegotiationResult {
    const age = PlayerUtils.calculateAge(player.birthDate);
    const expectedSalary = this.calculateExpectedSalary(player);
    const reasons: string[] = [];
    
    // Проверяем, есть ли команда в любимых клубах
    const isFavoriteTeam = player.favoriteClubs.includes(offer.teamId);
    
    // Расчет разницы в зарплате
    const salaryDifference = offer.salaryOffer - expectedSalary;
    const salaryRatio = offer.salaryOffer / expectedSalary;
    
    // Базовая оценка на основе зарплаты (более гибкая система)
    let baseScore = 0;
    if (salaryRatio >= 1.1) {
      baseScore = 80; // Отличное предложение
      reasons.push(`💰 Отличная зарплата: ${offer.salaryOffer} млн (ожидал ~${expectedSalary} млн)`);
    } else if (salaryRatio >= 0.95) {
      baseScore = 65; // Хорошее предложение
      reasons.push(`💵 Справедливая зарплата: ${offer.salaryOffer} млн (ожидал ~${expectedSalary} млн)`);
    } else if (salaryRatio >= 0.75) {
      baseScore = 45; // Приемлемое предложение
      reasons.push(`💸 Зарплата ниже ожиданий: ${offer.salaryOffer} млн (ожидал ~${expectedSalary} млн)`);
    } else if (salaryRatio >= 0.6) {
      baseScore = 25; // Низкое предложение, но можно торговаться
      reasons.push(`📉 Низкая зарплата: ${offer.salaryOffer} млн (ожидал ~${expectedSalary} млн)`);
    } else {
      baseScore = 10; // Очень низкое предложение
      reasons.push(`🚫 Неприемлемо низкая зарплата: ${offer.salaryOffer} млн (ожидал ~${expectedSalary} млн)`);
    }
    
    // Бонус за любимую команду
    if (isFavoriteTeam) {
      baseScore += 25;
      reasons.push(`❤️ Любимая команда: готов принять меньшую зарплату`);
    }
    
    // Модификатор длины контракта (более гибкая система)
    let contractModifier = 0;
    const preferredLength = this.getPreferredContractLength(age);
    const lengthDifference = Math.abs(offer.contractLength - preferredLength);

    if (age <= 25) {
      // Молодые игроки (16-25 лет): предпочитают 2-3 года
      if (offer.contractLength >= 1 && offer.contractLength <= 3) {
        contractModifier = 10 - (lengthDifference * 3); // Штраф за отклонение от предпочтений
        if (offer.contractLength === 2 || offer.contractLength === 3) {
          reasons.push(`📝 Оптимальная длина контракта для молодого игрока`);
        } else {
          reasons.push(`📝 Приемлемая длина контракта`);
        }
      } else if (offer.contractLength >= 4) {
        contractModifier = -15;
        reasons.push(`📝 Слишком длинный контракт для молодого игрока`);
      }
    } else if (age >= 26 && age <= 29) {
      // Игроки в расцвете сил (26-29 лет): гибкие, предпочитают 2-4 года
      if (offer.contractLength >= 2 && offer.contractLength <= 4) {
        contractModifier = 8 - (lengthDifference * 2);
        reasons.push(`📝 Подходящая длина контракта для игрока в расцвете сил`);
      } else if (offer.contractLength === 1) {
        contractModifier = -5;
        reasons.push(`📝 Короткий контракт, но можно рассмотреть`);
      } else {
        contractModifier = -10;
        reasons.push(`📝 Неподходящая длина контракта`);
      }
    } else if (age >= 30 && age <= 33) {
      // Опытные игроки (30-33 года): предпочитают 1-2 года
      if (offer.contractLength === 1 || offer.contractLength === 2) {
        contractModifier = 12;
        reasons.push(`📝 Идеальная длина контракта для опытного игрока`);
      } else if (offer.contractLength === 3) {
        contractModifier = 0;
        reasons.push(`📝 Приемлемая длина контракта`);
      } else {
        contractModifier = -12;
        reasons.push(`📝 Слишком длинный контракт для игрока этого возраста`);
      }
    } else {
      // Ветераны (34+ лет): предпочитают 1 год
      if (offer.contractLength === 1) {
        contractModifier = 15;
        reasons.push(`📝 Оптимальная длина контракта для ветерана`);
      } else if (offer.contractLength === 2) {
        contractModifier = -5;
        reasons.push(`📝 Немного длинновато, но можно рассмотреть`);
      } else {
        contractModifier = -20;
        reasons.push(`📝 Слишком длинный контракт для ветерана`);
      }
    }
    
    // Модификатор типа контракта
    let typeModifier = 0;
    if (player.overallRating >= 75 && offer.contractType === 'two-way') {
      typeModifier = -15;
      reasons.push(`📋 Two-way контракт неподходящий для игрока такого уровня`);
    } else if (player.overallRating < 70 && offer.contractType === 'one-way') {
      typeModifier = 10;
      reasons.push(`📋 One-way контракт - хорошая возможность`);
    }
    
    const finalScore = Math.max(0, Math.min(100, baseScore + contractModifier + typeModifier));
    
    // Определяем результат (более гибкие пороги)
    if (finalScore >= 65) {
      return {
        isAccepted: true,
        confidence: finalScore,
        reasons: [`✅ Принимаю предложение!`, ...reasons],
        category: 'accepted'
      };
    } else if (finalScore >= 30) {
      // Контрпредложение (более реалистичное и гибкое)
      let counterSalary;
      if (isFavoriteTeam) {
        counterSalary = Math.round(expectedSalary * 0.9); // Скидка для любимой команды
      } else if (salaryRatio >= 0.8) {
        counterSalary = Math.round(expectedSalary * 1.05); // Небольшая надбавка
      } else {
        counterSalary = Math.round(expectedSalary * 0.95); // Готов немного снизить ожидания
      }

      // Более гибкая логика для длины контракта
      const contractRange = this.getAcceptableContractRange(age);
      let counterLength;

      if (offer.contractLength < contractRange.min) {
        // Предложили слишком короткий контракт
        counterLength = contractRange.min;
      } else if (offer.contractLength > contractRange.max) {
        // Предложили слишком длинный контракт
        counterLength = contractRange.max;
      } else {
        // Длина в приемлемом диапазоне, предлагаем предпочтительную
        counterLength = contractRange.preferred;
      }

      return {
        isAccepted: false,
        confidence: finalScore,
        reasons: [`🤝 Готов к переговорам`, ...reasons],
        counterOffer: {
          salary: counterSalary,
          contractLength: counterLength
        },
        category: 'counter'
      };
    } else {
      return {
        isAccepted: false,
        confidence: finalScore,
        reasons: [`❌ Отклоняю предложение`, ...reasons],
        category: 'rejected'
      };
    }
  }
  
  // Получить предпочтительную длину контракта по возрасту
  static getPreferredContractLength(age: number): number {
    if (age <= 25) {
      return 2; // Молодые предпочитают 2-3 года, берем среднее
    } else if (age <= 29) {
      return 3; // Игроки в расцвете сил предпочитают 2-4 года
    } else if (age <= 33) {
      return 1; // Опытные игроки предпочитают 1-2 года
    } else {
      return 1; // Ветераны предпочитают 1 год
    }
  }

  // Получить диапазон приемлемой длины контракта
  static getAcceptableContractRange(age: number): { min: number; max: number; preferred: number } {
    if (age <= 25) {
      return { min: 1, max: 4, preferred: 2 }; // Молодые: 1-4 года, предпочитают 2
    } else if (age <= 29) {
      return { min: 1, max: 5, preferred: 3 }; // Расцвет сил: 1-5 лет, предпочитают 3
    } else if (age <= 33) {
      return { min: 1, max: 3, preferred: 1 }; // Опытные: 1-3 года, предпочитают 1
    } else {
      return { min: 1, max: 2, preferred: 1 }; // Ветераны: 1-2 года, предпочитают 1
    }
  }

  // Получить рекомендуемое предложение для игрока
  static getRecommendedOffer(player: Player, teamId: string): ContractOffer {
    const age = PlayerUtils.calculateAge(player.birthDate);
    const expectedSalary = this.calculateExpectedSalary(player);
    const isFavoriteTeam = player.favoriteClubs.includes(teamId);

    // Рекомендуемая зарплата (чуть выше ожидаемой)
    const recommendedSalary = Math.round(expectedSalary * (isFavoriteTeam ? 1.05 : 1.15));

    // Рекомендуемая длина контракта на основе возраста
    const recommendedLength = this.getPreferredContractLength(age);

    // Тип контракта
    const contractType = player.overallRating >= 70 ? 'one-way' : 'two-way';

    return {
      playerId: player.id,
      teamId,
      salaryOffer: recommendedSalary,
      contractLength: recommendedLength,
      contractType
    };
  }
}
