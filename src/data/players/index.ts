import { Player, TeamRoster } from '../../types/player';
import akBarsRoster from './ak-bars';
import avtomobilistRoster from './avtomobilist';
import salavatYulaevRoster from './salavat-yulaev';
import avangardRoster from './avangard';

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
    return allPlayers.filter(player => !player.contract.isActive);
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
}

// Экспорт отдельных ростеров для удобства
export { akBarsRoster, avtomobilistRoster, salavatYulaevRoster, avangardRoster };

// Экспорт по умолчанию
export default {
  allPlayers,
  teamRosters,
  PlayersDataManager
};
