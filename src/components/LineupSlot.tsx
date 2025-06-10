'use client';

import React, { useState } from 'react';
import { Player } from '@/types/player';
import { PlayerUtils } from '@/utils/playerUtils';
import { LineupUtils } from '@/utils/lineupUtils';
import { PlayerDisplayUtils } from '@/utils/playerDisplayUtils';

interface LineupSlotProps {
  positionId: string;
  positionLabel: string;
  positionType: string;
  player?: Player;
  onPlayerDrop?: (player: Player, positionId: string) => void;
  onPlayerRemove?: (positionId: string) => void;
  onSlotClick?: (positionId: string, positionType: string) => void;
  draggedPlayer?: Player | null;
}

export default function LineupSlot({
  positionId,
  positionLabel,
  positionType,
  player,
  onPlayerDrop,
  onPlayerRemove,
  onSlotClick,
  draggedPlayer
}: LineupSlotProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  // Проверяем, можно ли поставить перетаскиваемого игрока на эту позицию
  const canAcceptPlayer = draggedPlayer ? LineupUtils.canPlacePlayer(draggedPlayer, positionType) : false;
  
  // Рассчитываем эффективный рейтинг для перетаскиваемого игрока
  const effectiveRating = draggedPlayer ? LineupUtils.calculateEffectiveRating(draggedPlayer, positionType) : null;
  
  // Получаем описание штрафа
  const penaltyDescription = draggedPlayer ? LineupUtils.getPositionPenaltyDescription(draggedPlayer, positionType) : null;
  
  // Получаем цвет для отображения штрафа
  const penaltyColor = draggedPlayer ? LineupUtils.getPenaltyColor(draggedPlayer, positionType) : '#0EE289';

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (canAcceptPlayer) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (draggedPlayer && canAcceptPlayer && onPlayerDrop) {
      onPlayerDrop(draggedPlayer, positionId);
    }
  };

  const handleClick = () => {
    if (player && onPlayerRemove) {
      onPlayerRemove(positionId);
    } else if (onSlotClick) {
      onSlotClick(positionId, positionType);
    }
  };

  const getSlotClassName = () => {
    let baseClass = "position-slot w-28 h-[10.5rem] rounded-lg flex flex-col text-white text-sm border-2 cursor-pointer transition-all duration-200";

    if (player) {
      // Слот занят игроком - новый дизайн
      return `${baseClass} bg-[#101010] border-[#545454] hover:border-[#FFFFFF] p-2`;
    } else if (isDragOver && canAcceptPlayer) {
      // Перетаскивание разрешенного игрока
      return `${baseClass} bg-[#1A4A1A] border-[#0EE289] border-dashed items-center justify-center`;
    } else if (isDragOver && !canAcceptPlayer) {
      // Перетаскивание запрещенного игрока
      return `${baseClass} bg-[#4A1A1A] border-[#FF474A] border-dashed items-center justify-center`;
    } else if (draggedPlayer && canAcceptPlayer) {
      // Подсветка доступных слотов
      return `${baseClass} bg-[#1A3A1A] border-[#0EE289] border-dashed items-center justify-center`;
    } else {
      // Пустой слот
      return `${baseClass} bg-[#2A2A2A] border-[#444] hover:border-[#666] items-center justify-center`;
    }
  };

  const renderPlayerContent = () => {
    if (!player) return null;

    const currentEffectiveRating = LineupUtils.calculateEffectiveRating(player, positionType);
    const hasPenalty = currentEffectiveRating !== player.overallRating;
    const age = PlayerDisplayUtils.formatAge(player.birthDate);
    const nationalityAbbr = PlayerDisplayUtils.getNationalityAbbreviation(player.nationality);
    const flagPath = PlayerDisplayUtils.getFlagPath(player.nationality);

    return (
      <div className="h-full w-full flex flex-col justify-between">
        {/* Верхний блок: рейтинг и позиция слота */}
        <div className="flex items-center justify-between">
          <div
            className="text-lg font-bold"
            style={{ color: hasPenalty ? penaltyColor : '#FFFFFF' }}
          >
            {currentEffectiveRating}
            {hasPenalty && (
              <span className="text-xs text-[#FF474A] ml-1">
                ({player.overallRating})
              </span>
            )}
          </div>
          <div className="text-xs text-[#8B8B8B] font-medium">
            {positionLabel}
          </div>
        </div>

        {/* Центральный блок: фото и физбар - поднят выше */}
        <div className="flex flex-col items-center -mt-2">
          {/* Фото игрока обрезанное на 10% снизу */}
          <div className="w-[4.56rem] h-[4.1rem] overflow-hidden rounded">
            <img
              src={player.photoUrl}
              alt={`${player.firstName} ${player.lastName}`}
              className="w-[4.56rem] h-[4.56rem] object-cover object-top"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = PlayerUtils.getDefaultPhotoPath(player.position);
              }}
            />
          </div>

          {/* Полоска физической формы - примыкает к фото, увеличенная */}
          <div className="w-[98%] h-[0.4rem] bg-[#313131] rounded-full relative overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                backgroundColor: PlayerUtils.getConditionColor(player.physicalCondition),
                width: `${player.physicalCondition}%`
              }}
            ></div>
          </div>
        </div>

        {/* Нижний блок: возраст и нация */}
        <div className="flex items-center justify-between text-[10px]">
          <div className="text-[#AFAFAF]">
            {age}
          </div>
          <div className="flex items-center gap-1">
            <img
              src={flagPath}
              alt={player.nationality}
              className="w-3 h-2 object-cover"
            />
            <span className="text-[#AFAFAF]">
              {nationalityAbbr}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderEmptySlotContent = () => {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {/* Подпись позиции */}
        <div className="text-[#8B8B8B] mb-2 font-medium">
          {positionLabel}
        </div>

        {/* Предварительный просмотр при перетаскивании */}
        {draggedPlayer && canAcceptPlayer && (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#383838] mb-2 opacity-70">
              <img 
                src={draggedPlayer.photoUrl} 
                alt={`${draggedPlayer.firstName} ${draggedPlayer.lastName}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = PlayerUtils.getDefaultPhotoPath(draggedPlayer.position);
                }}
              />
            </div>
            
            <div className="text-xs text-white opacity-70 text-center mb-1">
              {draggedPlayer.lastName}
            </div>
            
            <div 
              className="text-sm font-bold"
              style={{ color: penaltyColor }}
            >
              {effectiveRating}
            </div>
            
            {penaltyDescription && (
              <div className="text-xs text-[#FF474A] text-center mt-1">
                {penaltyDescription}
              </div>
            )}
          </div>
        )}

        {/* Сообщение о невозможности размещения */}
        {draggedPlayer && !canAcceptPlayer && (
          <div className="text-xs text-[#FF474A] text-center">
            Нельзя поставить<br/>{draggedPlayer.position} на {positionType}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={getSlotClassName()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      title={player ? `${player.firstName} ${player.lastName} (${player.position})` : `Позиция: ${positionLabel}`}
    >
      {player ? renderPlayerContent() : renderEmptySlotContent()}
    </div>
  );
}
