import { Player } from '@/types/player';
import { PlayersDataManager } from '@/data/players';

export interface TransferResult {
  success: boolean;
  message: string;
  transferredPlayers: {
    toMyTeam: Player[];
    fromMyTeam: Player[];
  };
}

export class TransferUtils {
  // Выполнить обмен игроков между командами
  static executePlayerTrade(
    myTeamId: string,
    targetTeamId: string,
    myPlayers: Player[],
    theirPlayers: Player[]
  ): TransferResult {
    try {
      // Получаем текущие составы команд
      const myTeamPlayers = PlayersDataManager.getTeamPlayers(myTeamId);
      const targetTeamPlayers = PlayersDataManager.getTeamPlayers(targetTeamId);

      // Создаем новые составы
      const updatedMyTeam = [...myTeamPlayers];
      const updatedTargetTeam = [...targetTeamPlayers];

      // Удаляем игроков из моей команды и добавляем в целевую
      myPlayers.forEach(player => {
        const index = updatedMyTeam.findIndex(p => p.id === player.id);
        if (index !== -1) {
          updatedMyTeam.splice(index, 1);
          // Меняем клуб игрока
          const transferredPlayer = { ...player, club: this.getTeamName(targetTeamId) };
          updatedTargetTeam.push(transferredPlayer);
        }
      });

      // Удаляем игроков из целевой команды и добавляем в мою
      theirPlayers.forEach(player => {
        const index = updatedTargetTeam.findIndex(p => p.id === player.id);
        if (index !== -1) {
          updatedTargetTeam.splice(index, 1);
          // Меняем клуб игрока
          const transferredPlayer = { ...player, club: this.getTeamName(myTeamId) };
          updatedMyTeam.push(transferredPlayer);
        }
      });

      // Обновляем составы в менеджере данных
      PlayersDataManager.updateTeamRoster(myTeamId, updatedMyTeam);
      PlayersDataManager.updateTeamRoster(targetTeamId, updatedTargetTeam);

      return {
        success: true,
        message: `Обмен успешно завершен! ${theirPlayers.length} игрок(ов) присоединились к вашей команде.`,
        transferredPlayers: {
          toMyTeam: theirPlayers.map(p => ({ ...p, club: this.getTeamName(myTeamId) })),
          fromMyTeam: myPlayers.map(p => ({ ...p, club: this.getTeamName(targetTeamId) }))
        }
      };
    } catch (error) {
      console.error('Ошибка при выполнении обмена:', error);
      return {
        success: false,
        message: 'Произошла ошибка при выполнении обмена',
        transferredPlayers: {
          toMyTeam: [],
          fromMyTeam: []
        }
      };
    }
  }

  // Получить название команды по ID
  private static getTeamName(teamId: string): string {
    const teamNames: Record<string, string> = {
      'ak-bars': 'Ак Барс',
      'avtomobilist': 'Автомобилист',
      'salavat-yulaev': 'Салават Юлаев',
      'avangard': 'Авангард',
      'dynamo-mn': 'Динамо Минск'
    };
    return teamNames[teamId] || 'Неизвестная команда';
  }

  // Проверить валидность обмена
  static validateTrade(
    myTeamId: string,
    targetTeamId: string,
    myPlayers: Player[],
    theirPlayers: Player[]
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Проверяем, что есть игроки для обмена
    if (myPlayers.length === 0 && theirPlayers.length === 0) {
      errors.push('Необходимо выбрать игроков для обмена');
    }

    // Проверяем, что игроки принадлежат правильным командам
    const myTeamPlayers = PlayersDataManager.getTeamPlayers(myTeamId);
    const targetTeamPlayers = PlayersDataManager.getTeamPlayers(targetTeamId);

    myPlayers.forEach(player => {
      if (!myTeamPlayers.find(p => p.id === player.id)) {
        errors.push(`Игрок ${player.firstName} ${player.lastName} не принадлежит вашей команде`);
      }
    });

    theirPlayers.forEach(player => {
      if (!targetTeamPlayers.find(p => p.id === player.id)) {
        errors.push(`Игрок ${player.firstName} ${player.lastName} не принадлежит команде ${this.getTeamName(targetTeamId)}`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Создать уведомление об обмене
  static createTradeNotification(result: TransferResult): string {
    if (!result.success) {
      return result.message;
    }

    const incoming = result.transferredPlayers.toMyTeam;
    const outgoing = result.transferredPlayers.fromMyTeam;

    let message = '🔄 Обмен завершен!\n\n';
    
    if (incoming.length > 0) {
      message += '✅ Присоединились к команде:\n';
      incoming.forEach(player => {
        message += `• ${player.firstName} ${player.lastName} (${player.position}, ${player.overallRating})\n`;
      });
      message += '\n';
    }

    if (outgoing.length > 0) {
      message += '📤 Покинули команду:\n';
      outgoing.forEach(player => {
        message += `• ${player.firstName} ${player.lastName} (${player.position}, ${player.overallRating})\n`;
      });
    }

    return message;
  }
}
