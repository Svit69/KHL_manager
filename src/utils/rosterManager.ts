import { Player } from '../types/player';
import { PlayersDataManager } from '../data/players';

export interface ContractDetails {
  salary: number;
  contractLength: number;
  contractType: 'one-way' | 'two-way';
  endDate: string;
}

export class RosterManager {
  
  // Подписание НСА в команду
  static signFreeAgent(player: Player, teamId: string, contractDetails: ContractDetails): boolean {
    try {
      console.log(`🔄 Начинаем подписание игрока ${player.firstName} ${player.lastName} в команду ${teamId}`);

      // Проверяем, что игрок действительно НСА
      if (player.club !== 'НСА' && player.contract.isActive) {
        console.error('Игрок не является свободным агентом');
        return false;
      }

      // Проверяем лимиты ростера
      const currentRoster = PlayersDataManager.getTeamPlayers(teamId);
      const rosterLimits = this.checkRosterLimits(currentRoster, contractDetails.contractType);

      console.log(`📊 Текущий ростер команды ${teamId}:`);
      console.log(`   Всего игроков: ${rosterLimits.totalPlayers}/40`);
      console.log(`   One-way контракты: ${rosterLimits.oneWayPlayers}/25`);
      console.log(`   Two-way контракты: ${rosterLimits.twoWayPlayers}`);

      if (!rosterLimits.canAddPlayer) {
        console.error(`❌ Превышение лимита ростера: ${rosterLimits.limitMessage}`);
        return false;
      }

      const teamName = this.getTeamNameById(teamId);
      console.log(`🏒 Команда: ${teamName}`);

      // Создаем обновленного игрока с новым контрактом
      const updatedPlayer: Player = {
        ...player,
        club: teamName,
        contract: {
          endDate: contractDetails.endDate,
          type: contractDetails.contractType,
          isActive: true
        },
        salary: {
          amount: contractDetails.salary,
          currency: 'RUB'
        }
      };

      console.log(`📝 Обновленный игрок:`, {
        id: updatedPlayer.id,
        name: `${updatedPlayer.firstName} ${updatedPlayer.lastName}`,
        club: updatedPlayer.club,
        salary: updatedPlayer.salary.amount,
        contractActive: updatedPlayer.contract.isActive
      });

      // Обновляем игрока в системе
      PlayersDataManager.updatePlayer(updatedPlayer);

      // Проверяем, что игрок добавился в команду
      const updatedRoster = PlayersDataManager.getTeamPlayers(teamId);
      const playerInRoster = updatedRoster.find(p => p.id === player.id);

      if (playerInRoster) {
        console.log(`✅ Игрок ${player.firstName} ${player.lastName} успешно добавлен в ростер команды ${teamName}`);
        console.log(`📊 Новый размер ростера: ${updatedRoster.length} игроков`);
        return true;
      } else {
        console.error(`❌ Игрок не найден в ростере после обновления`);
        return false;
      }

    } catch (error) {
      console.error('Ошибка при подписании игрока:', error);
      return false;
    }
  }

  // Получение названия команды по ID
  private static getTeamNameById(teamId: string): string {
    const teamNames: { [key: string]: string } = {
      'ak-bars': 'Ак Барс',
      'avtomobilist': 'Автомобилист',
      'salavat-yulaev': 'Салават Юлаев',
      'avangard': 'Авангард',
      'dynamo-mn': 'Динамо Минск',
      'ska': 'СКА',
      'torpedo': 'Торпедо',
      'metallurg': 'Металлург',
      'spartak': 'Спартак',
      'cska': 'ЦСКА',
      'amur': 'Амур',
      'lada': 'Лада'
    };

    return teamNames[teamId] || teamId;
  }

  // Расчет даты окончания контракта
  static calculateContractEndDate(contractLength: number): string {
    const currentDate = new Date();
    const endDate = new Date(currentDate.getFullYear() + contractLength, 4, 31); // 31 мая
    return endDate.toISOString().split('T')[0];
  }

  // Проверка лимитов ростера
  static checkRosterLimits(currentRoster: Player[], newContractType: 'one-way' | 'two-way'): {
    totalPlayers: number;
    oneWayPlayers: number;
    twoWayPlayers: number;
    canAddPlayer: boolean;
    limitMessage: string;
  } {
    const totalPlayers = currentRoster.length;
    const oneWayPlayers = currentRoster.filter(p => p.contract.type === 'one-way').length;
    const twoWayPlayers = currentRoster.filter(p => p.contract.type === 'two-way').length;

    let canAddPlayer = true;
    let limitMessage = '';

    // Проверяем общий лимит (40 игроков)
    if (totalPlayers >= 40) {
      canAddPlayer = false;
      limitMessage = 'Достигнут максимум игроков в ростере (40)';
    }
    // Проверяем лимит односторонних контрактов (25 игроков)
    else if (newContractType === 'one-way' && oneWayPlayers >= 25) {
      canAddPlayer = false;
      limitMessage = 'Достигнут максимум игроков на односторонних контрактах (25)';
    }

    return {
      totalPlayers,
      oneWayPlayers,
      twoWayPlayers,
      canAddPlayer,
      limitMessage
    };
  }

  // Проверка зарплатного потолка команды
  static checkSalaryCap(teamId: string, additionalSalary: number): {
    isValid: boolean;
    currentTotal: number;
    newTotal: number;
    capLimit: number
  } {
    const CAP_LIMIT = 900; // 900 млн рублей
    const currentRoster = PlayersDataManager.getTeamPlayers(teamId);
    const currentTotal = currentRoster.reduce((sum, player) => sum + (player.salary?.amount || 0), 0);
    const newTotal = currentTotal + additionalSalary;

    return {
      isValid: newTotal <= CAP_LIMIT,
      currentTotal,
      newTotal,
      capLimit: CAP_LIMIT
    };
  }

  // Получение статистики ростера команды
  static getRosterStats(teamId: string): {
    totalPlayers: number;
    oneWayPlayers: number;
    twoWayPlayers: number;
    goalies: number;
    defensemen: number;
    forwards: number;
    totalSalary: number;
    averageAge: number;
    averageRating: number;
  } {
    const roster = PlayersDataManager.getTeamPlayers(teamId);

    const oneWayPlayers = roster.filter(p => p.contract.type === 'one-way').length;
    const twoWayPlayers = roster.filter(p => p.contract.type === 'two-way').length;
    const goalies = roster.filter(p => p.position === 'G').length;
    const defensemen = roster.filter(p => p.position === 'D').length;
    const forwards = roster.filter(p => ['C', 'LW', 'RW'].includes(p.position)).length;

    const totalSalary = roster.reduce((sum, player) => sum + (player.salary?.amount || 0), 0);

    const ages = roster.map(p => {
      const birthDate = new Date(p.birthDate);
      const today = new Date();
      return today.getFullYear() - birthDate.getFullYear();
    });
    const averageAge = ages.length > 0 ? Math.round(ages.reduce((sum, age) => sum + age, 0) / ages.length) : 0;

    const ratings = roster.map(p => p.overallRating);
    const averageRating = ratings.length > 0 ? Math.round(ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length) : 0;

    return {
      totalPlayers: roster.length,
      oneWayPlayers,
      twoWayPlayers,
      goalies,
      defensemen,
      forwards,
      totalSalary,
      averageAge,
      averageRating
    };
  }

  // Проверка позиционных потребностей команды
  static getPositionalNeeds(teamId: string): {
    needsGoalie: boolean;
    needsDefenseman: boolean;
    needsForward: boolean;
    recommendations: string[];
  } {
    const stats = this.getRosterStats(teamId);
    const recommendations: string[] = [];
    
    const needsGoalie = stats.goalies < 2;
    const needsDefenseman = stats.defensemen < 6;
    const needsForward = stats.forwards < 12;

    if (needsGoalie) {
      recommendations.push(`🥅 Нужен вратарь (сейчас: ${stats.goalies}/2)`);
    }
    if (needsDefenseman) {
      recommendations.push(`🛡️ Нужны защитники (сейчас: ${stats.defensemen}/6)`);
    }
    if (needsForward) {
      recommendations.push(`⚡ Нужны нападающие (сейчас: ${stats.forwards}/12)`);
    }

    if (recommendations.length === 0) {
      recommendations.push('✅ Состав сбалансирован');
    }

    return {
      needsGoalie,
      needsDefenseman,
      needsForward,
      recommendations
    };
  }
}
