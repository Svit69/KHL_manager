import { Player, TeamRoster } from '../../types/player';
import akBarsRoster from './ak-bars';
import avtomobilistRoster from './avtomobilist';
import salavatYulaevRoster from './salavat-yulaev';
import avangardRoster from './avangard';
import dynamoMinskRoster from './dynamo-minsk';
import skaRoster from './ska';
import torpedoRoster from './torpedo';
import metallurgRoster from './metallurg';
import spartakRoster from './spartak';
import cskaRoster from './cska';
import amurRoster from './amur';
import ladaRoster from './lada';
import freeAgents from './free-agents';

// Импорт всех ростеров команд
// В будущем здесь будут импорты всех команд:
// import avangardRoster from './avangard';
// и т.д.

// Объединенный список всех игроков
export const allPlayers: Player[] = [
  ...akBarsRoster,
  ...avtomobilistRoster,
  ...salavatYulaevRoster,
  ...avangardRoster,
  ...dynamoMinskRoster,
  ...skaRoster,
  ...torpedoRoster,
  ...metallurgRoster,
  ...spartakRoster,
  ...cskaRoster,
  ...amurRoster,
  ...ladaRoster,
  ...freeAgents,
  // и т.д.
];

// Ростеры по командам
export const teamRosters: Record<string, TeamRoster> = {
  'ak-bars': {
    teamId: 'ak-bars',
    players: akBarsRoster,
    lastUpdated: new Date().toISOString()
  },
  'avtomobilist': {
    teamId: 'avtomobilist',
    players: avtomobilistRoster,
    lastUpdated: new Date().toISOString()
  },
  'salavat-yulaev': {
    teamId: 'salavat-yulaev',
    players: salavatYulaevRoster,
    lastUpdated: new Date().toISOString()
  },
  'avangard': {
    teamId: 'avangard',
    players: avangardRoster,
    lastUpdated: new Date().toISOString()
  },
  'dynamo-mn': {
    teamId: 'dynamo-mn',
    players: dynamoMinskRoster,
    lastUpdated: new Date().toISOString()
  },
  'ska': {
    teamId: 'ska',
    players: skaRoster,
    lastUpdated: new Date().toISOString()
  },
  'torpedo': {
    teamId: 'torpedo',
    players: torpedoRoster,
    lastUpdated: new Date().toISOString()
  },
  'metallurg': {
    teamId: 'metallurg',
    players: metallurgRoster,
    lastUpdated: new Date().toISOString()
  },
  'spartak': {
    teamId: 'spartak',
    players: spartakRoster,
    lastUpdated: new Date().toISOString()
  },
  'cska': {
    teamId: 'cska',
    players: cskaRoster,
    lastUpdated: new Date().toISOString()
  },
  'amur': {
    teamId: 'amur',
    players: amurRoster,
    lastUpdated: new Date().toISOString()
  },
  'lada': {
    teamId: 'lada',
    players: ladaRoster,
    lastUpdated: new Date().toISOString()
  },
  'free-agents': {
    teamId: 'free-agents',
    players: freeAgents,
    lastUpdated: new Date().toISOString()
  },
};

// Функции для работы с данными игроков
export class PlayersDataManager {
  
  // Получить всех игроков
  static getAllPlayers(): Player[] {
    return allPlayers;
  }

  // Получить игроков команды
  static getTeamPlayers(teamId: string): Player[] {
    const roster = teamRosters[teamId];
    return roster ? roster.players : [];
  }

  // Получить игрока по ID
  static getPlayerById(playerId: string): Player | undefined {
    return allPlayers.find(player => player.id === playerId);
  }

  // Получить игроков по позиции
  static getPlayersByPosition(position: string): Player[] {
    return allPlayers.filter(player => player.position === position);
  }

  // Получить игроков по национальности
  static getPlayersByNationality(nationality: string): Player[] {
    return allPlayers.filter(player => player.nationality === nationality);
  }

  // Поиск игроков по имени
  static searchPlayersByName(query: string): Player[] {
    const searchQuery = query.toLowerCase();
    return allPlayers.filter(player => 
      player.firstName.toLowerCase().includes(searchQuery) ||
      player.lastName.toLowerCase().includes(searchQuery)
    );
  }

  // Получить топ игроков по рейтингу
  static getTopPlayersByRating(limit: number = 10): Player[] {
    return [...allPlayers]
      .sort((a, b) => b.overallRating - a.overallRating)
      .slice(0, limit);
  }

  // Получить игроков с истекающими контрактами
  static getPlayersWithExpiringContracts(monthsAhead: number = 6): Player[] {
    const checkDate = new Date();
    checkDate.setMonth(checkDate.getMonth() + monthsAhead);
    
    return allPlayers.filter(player => {
      const contractEnd = new Date(player.contract.endDate);
      return contractEnd <= checkDate && player.contract.isActive;
    });
  }

  // Получить свободных агентов (игроков без активного контракта)
  static getFreeAgents(): Player[] {
    return allPlayers.filter(player => !player.contract.isActive || player.club === 'НСА');
  }

  // Получить статистику по всем игрокам
  static getGlobalStats() {
    const totalPlayers = allPlayers.length;
    const averageAge = totalPlayers > 0 
      ? allPlayers.reduce((sum, player) => {
          const birthDate = new Date(player.birthDate);
          const age = new Date().getFullYear() - birthDate.getFullYear();
          return sum + age;
        }, 0) / totalPlayers
      : 0;

    const averageRating = totalPlayers > 0
      ? allPlayers.reduce((sum, player) => sum + player.overallRating, 0) / totalPlayers
      : 0;

    const positionCounts = allPlayers.reduce((counts, player) => {
      counts[player.position] = (counts[player.position] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);

    const nationalityCounts = allPlayers.reduce((counts, player) => {
      counts[player.nationality] = (counts[player.nationality] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);

    return {
      totalPlayers,
      averageAge: Math.round(averageAge * 10) / 10,
      averageRating: Math.round(averageRating * 10) / 10,
      positionCounts,
      nationalityCounts
    };
  }

  // Обновить состав команды
  static updateTeamRoster(teamId: string, newRoster: Player[]): void {
    if (teamRosters[teamId]) {
      teamRosters[teamId].players = newRoster;
      teamRosters[teamId].lastUpdated = new Date().toISOString();

      // Обновляем общий список игроков
      this.rebuildAllPlayersList();
    }
  }

  // Обновить игрока (с перемещением между командами)
  static updatePlayer(updatedPlayer: Player): void {
    // Находим старую команду игрока
    let oldTeamId: string | null = null;
    for (const [teamId, roster] of Object.entries(teamRosters)) {
      if (roster.players.find(p => p.id === updatedPlayer.id)) {
        oldTeamId = teamId;
        break;
      }
    }

    // Удаляем игрока из старой команды
    if (oldTeamId && teamRosters[oldTeamId]) {
      teamRosters[oldTeamId].players = teamRosters[oldTeamId].players.filter(p => p.id !== updatedPlayer.id);
      teamRosters[oldTeamId].lastUpdated = new Date().toISOString();
    }

    // Добавляем игрока в новую команду
    const newTeamId = this.getTeamIdByName(updatedPlayer.club);
    if (newTeamId && teamRosters[newTeamId]) {
      teamRosters[newTeamId].players.push(updatedPlayer);
      teamRosters[newTeamId].lastUpdated = new Date().toISOString();
    }

    // Обновляем общий список игроков
    this.rebuildAllPlayersList();
  }

  // Получить ID команды по названию
  static getTeamIdByName(teamName: string): string | null {
    const teamNameToId: { [key: string]: string } = {
      'Ак Барс': 'ak-bars',
      'Автомобилист': 'avtomobilist',
      'Салават Юлаев': 'salavat-yulaev',
      'Авангард': 'avangard',
      'Динамо Минск': 'dynamo-mn',
      'СКА': 'ska',
      'Торпедо': 'torpedo',
      'Металлург': 'metallurg',
      'Спартак': 'spartak',
      'ЦСКА': 'cska',
      'Амур': 'amur',
      'Лада': 'lada',
      'НСА': 'free-agents'
    };

    return teamNameToId[teamName] || null;
  }

  // Пересобрать общий список игроков
  private static rebuildAllPlayersList(): void {
    const newAllPlayers: Player[] = [];
    Object.values(teamRosters).forEach(teamData => {
      newAllPlayers.push(...teamData.players);
    });

    // Обновляем экспортируемый массив
    allPlayers.length = 0;
    allPlayers.push(...newAllPlayers);
  }
}

// Экспорт отдельных ростеров для удобства
export { akBarsRoster, avtomobilistRoster, salavatYulaevRoster, avangardRoster, dynamoMinskRoster, skaRoster, torpedoRoster, metallurgRoster, spartakRoster, cskaRoster, amurRoster, ladaRoster };

// Экспорт по умолчанию
export default {
  allPlayers,
  teamRosters,
  PlayersDataManager
};
