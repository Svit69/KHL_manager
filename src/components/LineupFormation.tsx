'use client';

import React, { useState, useEffect } from 'react';
import { Player } from '@/types/player';
import { PlayerUtils } from '@/utils/playerUtils';
import { LineupUtils, LineupState } from '@/utils/lineupUtils';
import LineupSlot from './LineupSlot';

interface LineupFormationProps {
  players: Player[];
  onPlayerSelect?: (player: Player, position: string) => void;
  onLineupChange?: (lineup: LineupState) => void;
  draggedPlayer?: Player | null;
  currentLineup?: LineupState;
}

interface LinePosition {
  id: string;
  label: string;
  position: string;
  player?: Player;
}

interface HockeyLine {
  id: number;
  name: string;
  positions: LinePosition[];
}

const HOCKEY_LINES: HockeyLine[] = [
  {
    id: 1,
    name: "1-е звено",
    positions: [
      { id: 'lw1', label: 'ЛНП', position: 'LW' },
      { id: 'c1', label: 'ЦТР', position: 'C' },
      { id: 'rw1', label: 'ПНП', position: 'RW' },
    ]
  },
  {
    id: 2,
    name: "2-е звено", 
    positions: [
      { id: 'lw2', label: 'ЛНП', position: 'LW' },
      { id: 'c2', label: 'ЦТР', position: 'C' },
      { id: 'rw2', label: 'ПНП', position: 'RW' },
    ]
  },
  {
    id: 3,
    name: "3-е звено",
    positions: [
      { id: 'lw3', label: 'ЛНП', position: 'LW' },
      { id: 'c3', label: 'ЦТР', position: 'C' },
      { id: 'rw3', label: 'ПНП', position: 'RW' },
    ]
  },
  {
    id: 4,
    name: "4-е звено",
    positions: [
      { id: 'lw4', label: 'ЛНП', position: 'LW' },
      { id: 'c4', label: 'ЦТР', position: 'C' },
      { id: 'rw4', label: 'ПНП', position: 'RW' },
    ]
  }
];

const DEFENSE_PAIRS = [
  {
    id: 1,
    name: "1-я пара",
    positions: [
      { id: 'ld1', label: 'ЗАЩ', position: 'D' },
      { id: 'rd1', label: 'ЗАЩ', position: 'D' },
    ]
  },
  {
    id: 2,
    name: "2-я пара",
    positions: [
      { id: 'ld2', label: 'ЗАЩ', position: 'D' },
      { id: 'rd2', label: 'ЗАЩ', position: 'D' },
    ]
  },
  {
    id: 3,
    name: "3-я пара",
    positions: [
      { id: 'ld3', label: 'ЗАЩ', position: 'D' },
      { id: 'rd3', label: 'ЗАЩ', position: 'D' },
    ]
  }
];

const GOALIES = [
  { id: 'g1', label: 'ВРТ', position: 'G' },
  { id: 'g2', label: 'ВРТ', position: 'G' },
];

export default function LineupFormation({
  players,
  onPlayerSelect,
  onLineupChange,
  draggedPlayer,
  currentLineup = {}
}: LineupFormationProps) {
  const [selectedLine, setSelectedLine] = useState<number>(1);
  const [lineup, setLineup] = useState<LineupState>(currentLineup);

  // Синхронизируем локальный состав с переданным из родительского компонента
  useEffect(() => {
    setLineup(currentLineup);
  }, [currentLineup]);

  const handlePlayerDrop = (player: Player, positionId: string) => {
    const newLineup = LineupUtils.addPlayerToLineup(lineup, player, positionId);
    setLineup(newLineup);
    onLineupChange?.(newLineup);
    onPlayerSelect?.(player, positionId);
  };

  const handlePlayerRemove = (positionId: string) => {
    const player = lineup[positionId];
    if (player) {
      const newLineup = LineupUtils.removePlayerFromLineup(lineup, player.id);
      setLineup(newLineup);
      onLineupChange?.(newLineup);
    }
  };

  const handleSlotClick = (positionId: string, positionType: string) => {
    // Логика для выбора игрока на позицию через клик
    console.log(`Clicked position: ${positionId}, type: ${positionType}`);
  };

  const renderPlayerCard = (position: LinePosition, player?: Player) => {
    const isSelected = player !== undefined;
    
    return (
      <div
        key={position.id}
        onClick={() => handlePositionClick(position.id, position.position)}
        className={`player-slot relative w-24 h-32 rounded-lg border-2 cursor-pointer transition-all ${
          isSelected 
            ? 'border-blue-500 bg-[#2A2A2A]' 
            : 'border-[#383838] bg-[#1A1A1A] hover:border-[#AFAFAF]'
        }`}
      >
        {player ? (
          <div className="h-full flex flex-col items-center justify-between p-2">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#383838]">
              <img 
                src={player.photoUrl} 
                alt={`${player.firstName} ${player.lastName}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = PlayerUtils.getDefaultPhotoPath(player.position);
                }}
              />
            </div>
            <div className="text-center">
              <div className="text-white text-xs font-medium">{player.overallRating}</div>
              <div className="text-[#AFAFAF] text-xs">{position.label}</div>
              <div className="text-white text-xs truncate w-full">{player.lastName}</div>
              <div className="text-[#AFAFAF] text-xs">{PlayerUtils.calculateAge(player.birthDate)} лет</div>
              {PlayerUtils.isLegionnaire(player.nationality) && (
                <div className="text-xs">🏴</div>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
            <div className="text-[#AFAFAF] text-sm">{position.label}</div>
          </div>
        )}
      </div>
    );
  };

  // Функция для определения, нужен ли вратарь в текущем звене
  const shouldShowGoalie = (lineNumber: number): boolean => {
    return lineNumber === 1 || lineNumber === 4;
  };

  return (
    <div className="lineup-formation w-full h-full relative">
      {/* Основная область */}
      <div className="relative z-10 w-full h-full flex">
        {/* Левая часть - хоккейное поле */}
        <div className="flex-1 p-4">
          {/* Позиции игроков прямо на фоне */}
          <div className="hockey-rink relative w-full h-full">
            {/* Первая линия - нападающие */}
            <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 flex gap-20">
              <LineupSlot
                positionId={`lw${selectedLine}`}
                positionLabel="ЛНП"
                positionType="LW"
                player={lineup[`lw${selectedLine}`]}
                onPlayerDrop={handlePlayerDrop}
                onPlayerRemove={handlePlayerRemove}
                onSlotClick={handleSlotClick}
                draggedPlayer={draggedPlayer}
              />
              <LineupSlot
                positionId={`c${selectedLine}`}
                positionLabel="ЦТР"
                positionType="C"
                player={lineup[`c${selectedLine}`]}
                onPlayerDrop={handlePlayerDrop}
                onPlayerRemove={handlePlayerRemove}
                onSlotClick={handleSlotClick}
                draggedPlayer={draggedPlayer}
              />
              <LineupSlot
                positionId={`rw${selectedLine}`}
                positionLabel="ПНП"
                positionType="RW"
                player={lineup[`rw${selectedLine}`]}
                onPlayerDrop={handlePlayerDrop}
                onPlayerRemove={handlePlayerRemove}
                onSlotClick={handleSlotClick}
                draggedPlayer={draggedPlayer}
              />
            </div>

            {/* Вторая линия - защитники */}
            <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 flex gap-24">
              <LineupSlot
                positionId={`ld${selectedLine}`}
                positionLabel="ЗАЩ"
                positionType="D"
                player={lineup[`ld${selectedLine}`]}
                onPlayerDrop={handlePlayerDrop}
                onPlayerRemove={handlePlayerRemove}
                onSlotClick={handleSlotClick}
                draggedPlayer={draggedPlayer}
              />
              <LineupSlot
                positionId={`rd${selectedLine}`}
                positionLabel="ЗАЩ"
                positionType="D"
                player={lineup[`rd${selectedLine}`]}
                onPlayerDrop={handlePlayerDrop}
                onPlayerRemove={handlePlayerRemove}
                onSlotClick={handleSlotClick}
                draggedPlayer={draggedPlayer}
              />
            </div>

            {/* Вратарь - показываем только для 1-го и 4-го звена */}
            {shouldShowGoalie(selectedLine) && (
              <div className="absolute top-[62%] left-1/2 transform -translate-x-1/2">
                <LineupSlot
                  positionId={`g${selectedLine}`}
                  positionLabel="ВРТ"
                  positionType="G"
                  player={lineup[`g${selectedLine}`]}
                  onPlayerDrop={handlePlayerDrop}
                  onPlayerRemove={handlePlayerRemove}
                  onSlotClick={handleSlotClick}
                  draggedPlayer={draggedPlayer}
                />
              </div>
            )}
          </div>
        </div>

        {/* Правая часть - селектор звеньев */}
        <div className="w-20 flex flex-col items-center justify-center gap-6 pr-6">
          {[1, 2, 3, 4].map((lineNum) => (
            <button
              key={lineNum}
              onClick={() => setSelectedLine(lineNum)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                selectedLine === lineNum
                  ? 'bg-white text-black'
                  : 'bg-[#2A2A2A] text-white hover:bg-[#383838] border border-[#555]'
              }`}
            >
              {lineNum}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
