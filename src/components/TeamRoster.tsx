'use client';

import React, { useState, useMemo } from 'react';
import { Player, PlayerPosition } from '../types/player';
import { PlayerUtils } from '../utils/playerUtils';
import PlayerCard from './PlayerCard';

interface TeamRosterProps {
  players: Player[];
  teamName: string;
  onPlayerSelect?: (player: Player) => void;
}



export default function TeamRoster({ players, teamName, onPlayerSelect }: TeamRosterProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация игроков (только поиск по имени)
  const filteredPlayers = useMemo(() => {
    let result = [...players];

    // Поиск по имени
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(player =>
        player.firstName.toLowerCase().includes(query) ||
        player.lastName.toLowerCase().includes(query)
      );
    }

    // Сортировка по позиции (фиксированная)
    result = PlayerUtils.sortPlayersByPosition(result);

    return result;
  }, [players, searchQuery]);

  // Статистика команды
  const teamStats = useMemo(() => {
    const positionStats = PlayerUtils.getTeamPositionStats(players);
    const averageAge = PlayerUtils.getAverageAge(players);
    const totalSalary = PlayerUtils.getTotalSalary(players);
    const averageRating = players.length > 0 
      ? Math.round(players.reduce((sum, p) => sum + p.overallRating, 0) / players.length)
      : 0;

    return {
      positionStats,
      averageAge,
      totalSalary,
      averageRating,
      totalPlayers: players.length
    };
  }, [players]);

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
    onPlayerSelect?.(player);
  };

  return (
    <div className="team-roster w-full">
      {/* Заголовок */}
      <div className="roster-header mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          Состав команды {teamName}
        </h1>
        
        {/* Статистика команды */}
        <div className="team-stats grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="stat-card bg-[#1A1A1A] p-3 rounded-lg">
            <div className="text-[#AFAFAF] text-sm">Игроков</div>
            <div className="text-white text-xl font-semibold">{teamStats.totalPlayers}</div>
          </div>
          <div className="stat-card bg-[#1A1A1A] p-3 rounded-lg">
            <div className="text-[#AFAFAF] text-sm">Средний возраст</div>
            <div className="text-white text-xl font-semibold">{teamStats.averageAge}</div>
          </div>
          <div className="stat-card bg-[#1A1A1A] p-3 rounded-lg">
            <div className="text-[#AFAFAF] text-sm">Средний рейтинг</div>
            <div className="text-white text-xl font-semibold">{teamStats.averageRating}</div>
          </div>
          <div className="stat-card bg-[#1A1A1A] p-3 rounded-lg">
            <div className="text-[#AFAFAF] text-sm">Общая зарплата</div>
            <div className="text-white text-xl font-semibold">
              {PlayerUtils.formatSalary(teamStats.totalSalary)}
            </div>
          </div>
        </div>

        {/* Статистика по позициям */}
        <div className="position-stats flex gap-4 mb-4">
          {Object.entries(teamStats.positionStats).map(([position, count]) => (
            <div key={position} className="position-stat bg-[#1A1A1A] px-3 py-2 rounded">
              <span className="text-[#AFAFAF] text-sm">
                {PlayerUtils.getPositionName(position as PlayerPosition)}:
              </span>
              <span className="text-white font-semibold ml-1">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Фильтры и поиск */}
      <div className="roster-controls mb-6 space-y-4">
        {/* Поиск */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Поиск игрока..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#383838] rounded-lg text-white placeholder-[#AFAFAF] focus:border-[#FFFFFF] focus:outline-none"
          />
        </div>


      </div>

      {/* Список игроков */}
      <div className="players-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onClick={handlePlayerClick}
            isSelected={selectedPlayer?.id === player.id}
          />
        ))}
      </div>

      {/* Сообщение если игроки не найдены */}
      {filteredPlayers.length === 0 && (
        <div className="no-players text-center py-8">
          <div className="text-[#AFAFAF] text-lg">
            {searchQuery ? 'Игроки не найдены' : 'Нет игроков в команде'}
          </div>
        </div>
      )}
    </div>
  );
}
