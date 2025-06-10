'use client';

import React, { useState } from 'react';
import { useTeam } from '@/context/TeamContext';
import { PlayersDataManager } from '@/data/players';
import { teams } from '@/data/teams';
import LineupFormation from '@/components/LineupFormation';
import RosterPlayerList from '@/components/RosterPlayerList';
import { Player } from '@/types/player';
import { LineupUtils, LineupState } from '@/utils/lineupUtils';
import { useEffect } from 'react';

export default function RosterContent() {
  const { selectedTeamId, isTeamSelected } = useTeam();
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [positionFilter, setPositionFilter] = useState<string>('all');
  const [lineup, setLineup] = useState<LineupState>({});
  const [draggedPlayer, setDraggedPlayer] = useState<Player | null>(null);

  // Ключ для localStorage на основе выбранной команды
  const lineupStorageKey = selectedTeamId ? `lineup-${selectedTeamId}` : null;

  // Загружаем сохраненный состав при смене команды
  useEffect(() => {
    if (lineupStorageKey && selectedTeamId) {
      const savedLineup = localStorage.getItem(lineupStorageKey);
      if (savedLineup) {
        try {
          const parsedLineup = JSON.parse(savedLineup);
          // Получаем игроков команды для проверки
          const teamPlayers = PlayersDataManager.getTeamPlayers(selectedTeamId);
          // Проверяем, что все игроки из сохраненного состава еще существуют в команде
          const validLineup: LineupState = {};
          for (const [positionId, player] of Object.entries(parsedLineup)) {
            const playerExists = teamPlayers.find(p => p.id === (player as Player).id);
            if (playerExists) {
              validLineup[positionId] = playerExists;
            }
          }
          setLineup(validLineup);
        } catch (error) {
          console.error('Ошибка при загрузке сохраненного состава:', error);
          setLineup({});
        }
      } else {
        setLineup({});
      }
    }
  }, [selectedTeamId, lineupStorageKey]);

  // Если команда не выбрана, показываем сообщение
  if (!isTeamSelected || !selectedTeamId) {
    return (
      <div className="main-layout flex-1 bg-[#101010] relative">
        {/* Верхнее меню */}
        <div 
          className="main-header sticky top-0 z-10 isolate bg-[#101010] border-b border-[#383838]"
          style={{ top: 'var(--current-stack-height, 0px)' }}
        >
          <div className="header-content p-6">
            <h2 className="header-title text-xl font-medium">Состав</h2>
          </div>
        </div>

        {/* Основная часть */}
        <div className="main-content bg-[#101010] p-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Команда не выбрана
            </h2>
            <p className="text-[#AFAFAF]">
              Вернитесь на главную страницу и выберите команду
            </p>
          </div>
        </div>
      </div>
    );
  }

  const allPlayers = PlayersDataManager.getTeamPlayers(selectedTeamId);
  const team = teams.find(t => t.id === selectedTeamId);

  // Получаем доступных игроков (не в составе)
  const availablePlayers = LineupUtils.getAvailablePlayers(allPlayers, lineup);

  // Обработчики drag-and-drop
  const handleDragStart = (player: Player) => {
    setDraggedPlayer(player);
  };

  const handleDragEnd = () => {
    setDraggedPlayer(null);
  };

  const handleLineupChange = (newLineup: LineupState) => {
    setLineup(newLineup);
    // Сбрасываем состояние перетаскивания после успешного drop
    setDraggedPlayer(null);

    // Сохраняем состав в localStorage
    if (lineupStorageKey) {
      localStorage.setItem(lineupStorageKey, JSON.stringify(newLineup));
    }
  };

  const handleClearLineup = () => {
    setLineup({});
    if (lineupStorageKey) {
      localStorage.removeItem(lineupStorageKey);
    }
  };

  return (
    <div className="main-layout flex-1 bg-[#101010] relative">
      {/* Верхнее меню */}
      <div
        className="main-header sticky top-0 z-10 isolate bg-[#101010] border-b border-[#383838]"
        style={{ top: 'var(--current-stack-height, 0px)' }}
      >
        <div className="header-content p-6">
          <div className="flex items-center justify-between">
            {/* Кнопка очистки состава слева */}
            <button
              onClick={handleClearLineup}
              className="text-sm font-medium text-[#8B8B8B] hover:text-white transition-colors border border-[#383838] hover:border-[#666] px-3 py-1 rounded"
            >
              Очистить состав
            </button>

            {/* Фильтры позиций справа */}
            <div className="header-filters flex gap-4">
              {[
                { value: 'all', label: 'Все' },
                { value: 'forwards', label: 'Нападающие' },
                { value: 'defense', label: 'Защитники' },
                { value: 'goalies', label: 'Вратари' }
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setPositionFilter(filter.value)}
                  className={`text-sm font-medium transition-colors ${
                    positionFilter === filter.value
                      ? 'text-white'
                      : 'text-[#8B8B8B] hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Основная часть */}
      <div className="main-content bg-[#101010] p-8 flex">
        {/* Левая часть - формирование состава с фоновой картинкой (64%) */}
        <div className="content-left w-[64%] bg-[#101010] relative">
          <div
            className="background-container sticky bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/background.png)',
              top: 'var(--current-stack-height, 78px)',
              height: 'calc(100vh - var(--current-stack-height, 78px))'
            }}
          >
            <LineupFormation
              players={allPlayers}
              onPlayerSelect={(player, position) => {
                console.log('Player selected for position:', player, position);
                setSelectedPlayer(player);
              }}
              onLineupChange={handleLineupChange}
              draggedPlayer={draggedPlayer}
              currentLineup={lineup}
            />
          </div>
        </div>

        {/* Правая часть - список игроков (36%) */}
        <div className="content-right w-[36%] bg-[#101010]">
          <RosterPlayerList
            players={availablePlayers}
            selectedPlayer={selectedPlayer}
            onPlayerSelect={setSelectedPlayer}
            initialFilter={positionFilter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            lineup={lineup}
          />
        </div>
      </div>
    </div>
  );
}
