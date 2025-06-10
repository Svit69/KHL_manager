'use client';

import React from 'react';
import { Player } from '../types/player';
import { PlayerUtils } from '../utils/playerUtils';

interface CompactPlayerCardProps {
  player: Player;
  onClick?: (player: Player) => void;
  isSelected?: boolean;
}

export default function CompactPlayerCard({ player, onClick, isSelected = false }: CompactPlayerCardProps) {
  const age = PlayerUtils.calculateAge(player.birthDate);
  const positionName = PlayerUtils.getPositionName(player.position);
  const isLegionnaire = !['Россия', 'Казахстан', 'Беларусь'].includes(player.nationality);

  function getPositionColor(position: string): string {
    switch (position) {
      case 'G':
        return 'bg-red-500';
      case 'LW':
      case 'RW':
      case 'C':
        return 'bg-green-500';
      case 'D':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  }

  return (
    <div 
      className={`compact-player-card bg-[#1A1A1A] rounded-lg overflow-hidden hover:bg-[#2A2A2A] transition-colors cursor-pointer ${
        isSelected ? 'ring-2 ring-white' : ''
      }`}
      onClick={() => onClick?.(player)}
    >
      <div className="flex items-center">
        {/* Цветная полоска позиции */}
        <div className={`w-1 h-16 ${getPositionColor(player.position)}`}></div>
        
        {/* Фото игрока */}
        <div className="player-photo w-12 h-12 rounded-full overflow-hidden bg-[#2A2A2A] flex-shrink-0 ml-3">
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

        {/* Информация об игроке */}
        <div className="player-info flex-1 px-3 py-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs text-[#8B8B8B]">{positionName}</span>
                {isLegionnaire && (
                  <span className="text-xs">🌍</span>
                )}
              </div>
              <span className="player-name text-white text-sm font-medium block">
                {player.firstName} {player.lastName}
              </span>
            </div>
            <div className="text-right">
              <div className="player-rating text-white text-lg font-bold">
                {player.overallRating}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
