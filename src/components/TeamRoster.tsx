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

type FilterType = 'all' | PlayerPosition;
type SortType = 'position' | 'rating' | 'age' | 'salary' | 'name';

export default function TeamRoster({ players, teamName, onPlayerSelect }: TeamRosterProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<SortType>('position');
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация и сортировка игроков
  const filteredAndSortedPlayers = useMemo(() => {
    let result = [...players];

    // Фильтрация по позиции
    if (filter !== 'all') {
      result = PlayerUtils.filterPlayersByPosition(result, filter);
    }

    // Поиск по имени
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(player => 
        player.firstName.toLowerCase().includes(query) ||
        player.lastName.toLowerCase().includes(query)
      );
    }

    // Сортировка
    switch (sortBy) {
      case 'position':
        result = PlayerUtils.sortPlayersByPosition(result);
        break;
      case 'rating':
        result.sort((a, b) => b.overallRating - a.overallRating);
        break;
      case 'age':
        result.sort((a, b) => PlayerUtils.calculateAge(a.birthDate) - PlayerUtils.calculateAge(b.birthDate));
        break;
      case 'salary':
        result.sort((a, b) => b.contract.salaryPerYear - a.contract.salaryPerYear);
        break;
      case 'name':
        result.sort((a, b) => a.lastName.localeCompare(b.lastName));
        break;
    }

    return result;
  }, [players, filter, sortBy, searchQuery]);

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

        {/* Фильтры и сортировка */}
        <div className="filters-sort flex flex-wrap gap-4">
          {/* Фильтр по позиции */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as FilterType)}
            className="px-3 py-2 bg-[#1A1A1A] border border-[#383838] rounded text-white focus:border-[#FFFFFF] focus:outline-none"
          >
            <option value="all">Все позиции</option>
            <option value="G">Вратари</option>
            <option value="D">Защитники</option>
            <option value="LW">Левые крайние</option>
            <option value="C">Центральные</option>
            <option value="RW">Правые крайние</option>
          </select>

          {/* Сортировка */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortType)}
            className="px-3 py-2 bg-[#1A1A1A] border border-[#383838] rounded text-white focus:border-[#FFFFFF] focus:outline-none"
          >
            <option value="position">По позиции</option>
            <option value="rating">По рейтингу</option>
            <option value="age">По возрасту</option>
            <option value="salary">По зарплате</option>
            <option value="name">По фамилии</option>
          </select>
        </div>
      </div>

      {/* Список игроков */}
      <div className="players-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredAndSortedPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onClick={handlePlayerClick}
            isSelected={selectedPlayer?.id === player.id}
          />
        ))}
      </div>

      {/* Сообщение если игроки не найдены */}
      {filteredAndSortedPlayers.length === 0 && (
        <div className="no-players text-center py-8">
          <div className="text-[#AFAFAF] text-lg">
            {searchQuery ? 'Игроки не найдены' : 'Нет игроков в команде'}
          </div>
        </div>
      )}
    </div>
  );
}
