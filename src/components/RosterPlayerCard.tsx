'use client';

import React from 'react';
import { Player } from '../types/player';
import { PlayerUtils } from '../utils/playerUtils';

interface RosterPlayerCardProps {
  player: Player;
  onClick?: (player: Player) => void;
  isSelected?: boolean;
  isDraggable?: boolean;
  onDragStart?: (player: Player) => void;
  onDragEnd?: () => void;
  isInLineup?: boolean;
}

export default function RosterPlayerCard({
  player,
  onClick,
  isSelected = false,
  isDraggable = true,
  onDragStart,
  onDragEnd,
  isInLineup = false
}: RosterPlayerCardProps) {
  // Исправленная проверка легионеров - используем ISO коды
  const isLegionnaire = !['RU', 'KZ', 'BY'].includes(player.nationality);

  // Функция для получения цвета позиции
  function getPositionColor(position: string): string {
    switch (position) {
      case 'G':
        return '#9747FF'; // Фиолетовый для вратарей
      case 'D':
        return '#FFCE47'; // Желтый для защитников
      case 'LW':
      case 'RW':
      case 'C':
        return '#FF474A'; // Красный для нападающих
      default:
        return '#FFCE47';
    }
  }

  // Функция для получения сокращенного названия позиции
  function getPositionDisplayName(position: string): string {
    switch (position) {
      case 'G':
        return 'ВРТ';
      case 'D':
        return 'ЗАЩ';
      case 'C':
        return 'ЦТР';
      case 'LW':
        return 'ЛНП';
      case 'RW':
        return 'ПНП';
      default:
        return position;
    }
  }

  // Функция для получения флага страны - используем ISO коды
  function getFlagPath(nationality: string): string {
    const flagMap: { [key: string]: string } = {
      'RU': '/flags/icon-russia.png',
      'BY': '/flags/icon-belarus.png',
      'KZ': '/flags/icon-kazakhstan.png',
      'US': '/flags/icon-usa.png',
      'CA': '/flags/icon-canada.png',
      'FI': '/flags/icon-finland.png',
      'SE': '/flags/icon-sweden.png',
      'CZ': '/flags/icon-czech.png',
      'SK': '/flags/icon-slovakia.png',
      'DE': '/flags/icon-germany.png',
      'FR': '/flags/icon-france.png',
      'SI': '/flags/icon-slovenia.png',
      'CN': '/flags/icon-china.png',
    };
    return flagMap[nationality] || '/flags/icon-russia.png';
  }

  // Функция для получения цвета полоски физической формы
  function getConditionColor(condition: number): string {
    if (condition >= 80) return '#0EE289'; // Зеленый
    if (condition >= 60) return '#FFA500'; // Оранжевый
    if (condition >= 40) return '#FF6347'; // Красно-оранжевый
    return '#FF0000'; // Красный
  }

  // Функция для получения ширины полоски физической формы
  function getConditionWidth(condition: number): string {
    return `${condition}%`;
  }

  const handleDragStart = (e: React.DragEvent) => {
    if (isDraggable && !isInLineup) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', player.id);
      onDragStart?.(player);
    } else {
      e.preventDefault();
    }
  };

  const handleDragEnd = () => {
    onDragEnd?.();
  };

  return (
    <div
      className={`roster-player-card p-3 hover:bg-[#2A2A2A] hover:bg-opacity-20 transition-colors relative ${
        isDraggable && !isInLineup ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
      } ${isSelected ? 'ring-2 ring-white' : ''} ${isInLineup ? 'opacity-50' : ''}`}
      onClick={() => onClick?.(player)}
      draggable={isDraggable && !isInLineup}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col items-center">
        {/* Блок 1: позиция + фото + рейтинг в линию */}
        <div className="flex items-end w-full" id="main-block">
          {/* Позиция слева - фиксированная ширина */}
          <div className="flex items-center gap-1 mb-2 w-[3.5rem]">
            <div
              className="position-indicator w-3 h-3 rounded-full border-2 border-white"
              style={{ backgroundColor: getPositionColor(player.position) }}
            ></div>
            <div className="position-text text-white text-xs font-medium">
              {getPositionDisplayName(player.position)}
            </div>
          </div>

          {/* Фото игрока по центру - высота 3.6rem */}
          <div className="player-photo w-[3rem] h-[3rem] overflow-hidden flex-1 flex justify-center">
            <img
              src={player.photoUrl}
              alt={`${player.firstName} ${player.lastName}`}
              className="w-[3rem] h-[3.6rem] object-cover object-top"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = PlayerUtils.getDefaultPhotoPath(player.position);
              }}
            />
          </div>

          {/* Рейтинг и флаг справа - фиксированная ширина */}
          <div className="flex flex-col items-center justify-end h-[3rem] w-[3.5rem]">
            {/* Флаг легионера - только для легионеров */}
            {isLegionnaire && (
              <div className="flag w-4 h-3 mb-1">
                <img
                  src={getFlagPath(player.nationality)}
                  alt={player.nationality}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Рейтинг игрока - всегда внизу блока */}
            <div className="player-rating text-white text-lg font-bold">
              {player.overallRating}
            </div>
          </div>
        </div>

        {/* Блок 2: полоска физической формы по центру под фото */}
        <div className="condition-bar w-[6.4rem] h-[0.35rem] bg-[#313131] rounded-full relative overflow-hidden">
          <div
            className="condition-fill h-full rounded-full transition-all duration-300"
            style={{
              backgroundColor: getConditionColor(player.physicalCondition),
              width: getConditionWidth(player.physicalCondition)
            }}
          ></div>
        </div>

        {/* Фамилия игрока */}
        <div className="player-name text-white text-sm font-medium text-center mt-1">
          {player.lastName}
        </div>
      </div>
    </div>
  );
}
