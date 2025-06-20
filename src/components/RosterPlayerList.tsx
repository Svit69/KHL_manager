'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Player } from '@/types/player';
import { PlayerUtils } from '@/utils/playerUtils';
import { LineupState } from '@/utils/lineupUtils';
import RosterPlayerCard from './RosterPlayerCard';

interface RosterPlayerListProps {
  players: Player[];
  onPlayerSelect?: (player: Player) => void;
  selectedPlayer?: Player | null;
  initialFilter?: string;
  onDragStart?: (player: Player) => void;
  onDragEnd?: () => void;
  lineup?: LineupState;
}

type FilterType = 'all' | 'forwards' | 'defense' | 'goalies';

const POSITION_FILTERS = [
  { value: 'all', label: 'Все', positions: ['LW', 'C', 'RW', 'D', 'G'] },
  { value: 'forwards', label: 'Нападающие', positions: ['LW', 'C', 'RW'] },
  { value: 'defense', label: 'Защитники', positions: ['D'] },
  { value: 'goalies', label: 'Вратари', positions: ['G'] },
];

export default function RosterPlayerList({
  players,
  onPlayerSelect,
  selectedPlayer,
  initialFilter = 'all',
  onDragStart,
  onDragEnd,
  lineup = {}
}: RosterPlayerListProps) {
  const [filter, setFilter] = useState<FilterType>(initialFilter as FilterType);
  const [searchQuery, setSearchQuery] = useState('');

  // Обновляем фильтр при изменении внешнего фильтра
  useEffect(() => {
    setFilter(initialFilter as FilterType);
  }, [initialFilter]);

  // Фильтрация и сортировка игроков
  const filteredAndSortedPlayers = useMemo(() => {
    let filtered = players;

    // Фильтр по позиции
    if (filter !== 'all') {
      const filterConfig = POSITION_FILTERS.find(f => f.value === filter);
      if (filterConfig) {
        filtered = filtered.filter(player => 
          filterConfig.positions.includes(player.position)
        );
      }
    }

    // Поиск по имени
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(player =>
        player.firstName.toLowerCase().includes(query) ||
        player.lastName.toLowerCase().includes(query)
      );
    }

    // Сортировка по рейтингу (фиксированная)
    filtered.sort((a, b) => b.overallRating - a.overallRating);

    return filtered;
  }, [players, filter, searchQuery]);

  const handlePlayerClick = (player: Player) => {
    onPlayerSelect?.(player);
  };

  const renderPlayerCard = (player: Player) => {
    const isSelected = selectedPlayer?.id === player.id;
    const isInLineup = Object.values(lineup).some(p => p.id === player.id);

    return (
      <RosterPlayerCard
        key={player.id}
        player={player}
        onClick={handlePlayerClick}
        isSelected={isSelected}
        isDraggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        isInLineup={isInLineup}
      />
    );
  };

  return (
    <div className="roster-player-list w-full h-full flex flex-col p-4">
      {/* Заголовок */}
      <h2 className="text-lg font-bold text-white mb-4">Состав команды</h2>

      {/* Фильтры позиций */}
      <div className="filters mb-4">
        <div className="flex gap-2 flex-wrap mb-3">
          {POSITION_FILTERS.map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value as FilterType)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filter === filterOption.value
                  ? 'bg-white text-black'
                  : 'bg-[#2A2A2A] text-white hover:bg-[#383838]'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>


      </div>

      {/* Поиск */}
      <div className="search-bar mb-4">
        <input
          type="text"
          placeholder="Поиск игрока..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#383838] rounded-lg text-white placeholder-[#AFAFAF] text-sm focus:border-[#FFFFFF] focus:outline-none"
        />
      </div>

      {/* Список игроков */}
      <div className="players-list flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3">
          {filteredAndSortedPlayers.map((player) => renderPlayerCard(player))}
        </div>

        {/* Сообщение если игроки не найдены */}
        {filteredAndSortedPlayers.length === 0 && (
          <div className="no-players text-center py-8">
            <div className="text-[#AFAFAF] text-sm">
              {searchQuery ? 'Игроки не найдены' : 'Нет игроков'}
            </div>
          </div>
        )}
      </div>

      {/* Статистика */}
      <div className="list-footer mt-4 pt-4 border-t border-[#383838]">
        <div className="text-[#AFAFAF] text-xs">
          Показано: {filteredAndSortedPlayers.length} из {players.length} игроков
        </div>
      </div>
    </div>
  );
}
