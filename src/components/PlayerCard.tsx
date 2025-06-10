'use client';

import React from 'react';
import { Player } from '../types/player';
import { PlayerUtils } from '../utils/playerUtils';

interface PlayerCardProps {
  player: Player;
  onClick?: (player: Player) => void;
  isSelected?: boolean;
}

export default function PlayerCard({ player, onClick, isSelected = false }: PlayerCardProps) {
  const age = PlayerUtils.calculateAge(player.birthDate);
  const positionName = PlayerUtils.getPositionName(player.position);
  const contractTypeName = PlayerUtils.getContractTypeName(player.contract.type);
  const formattedSalary = PlayerUtils.formatSalary(player.contract.salaryPerYear);
  const ratingColor = PlayerUtils.getRatingColor(player.overallRating);
  const conditionStatus = PlayerUtils.getConditionStatus(player.physicalCondition);
  const isContractExpiring = PlayerUtils.isContractExpiring(player.contract.endDate);
  const isRetirementCandidate = PlayerUtils.isRetirementCandidate(player);

  return (
    <div 
      className={`player-card p-4 rounded-lg border transition-all cursor-pointer ${
        isSelected 
          ? 'border-[#FFFFFF] bg-[#2A2A2A]' 
          : 'border-[#383838] bg-[#1A1A1A] hover:border-[#AFAFAF] hover:bg-[#202020]'
      }`}
      onClick={() => onClick?.(player)}
    >
      {/* Верхняя часть - фото и основная информация */}
      <div className="flex items-start gap-4 mb-3">
        {/* Фото игрока */}
        <div className="player-photo w-16 h-16 rounded-lg overflow-hidden bg-[#383838] flex-shrink-0">
          <img 
            src={player.photoUrl} 
            alt={`${player.firstName} ${player.lastName}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Если фото не загрузилось, показываем заглушку
              const target = e.target as HTMLImageElement;
              target.src = PlayerUtils.getDefaultPhotoPath(player.position);
            }}
          />
        </div>

        {/* Основная информация */}
        <div className="player-info flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="player-name text-white font-semibold text-lg truncate">
              {player.firstName} {player.lastName}
            </h3>
            {isRetirementCandidate && (
              <span className="retirement-badge px-2 py-1 bg-[#FF6347] text-white text-xs rounded">
                Пенсия?
              </span>
            )}
          </div>
          
          <div className="player-details text-sm text-[#AFAFAF] space-y-1">
            <div className="flex items-center gap-4">
              <span className="position font-medium text-[#FFFFFF]">
                {positionName}
              </span>
              <span className="age">
                {age} лет
              </span>
              <span className="nationality">
                {player.nationality}
              </span>
            </div>
            

          </div>
        </div>

        {/* Рейтинг */}
        <div className="player-rating text-center">
          <div 
            className="rating-circle w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: ratingColor }}
          >
            {player.overallRating}
          </div>
          <div className="potential text-xs text-[#AFAFAF] mt-1">
            Потенциал: {player.potential}
          </div>
        </div>
      </div>

      {/* Средняя часть - контракт */}
      <div className="contract-info bg-[#101010] rounded p-3 mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="contract-label text-[#AFAFAF] text-sm">Контракт</span>
          {isContractExpiring && (
            <span className="expiring-badge px-2 py-1 bg-[#FFA500] text-black text-xs rounded">
              Истекает
            </span>
          )}
        </div>
        
        <div className="contract-details space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-[#AFAFAF]">Тип:</span>
            <span className="text-white">{contractTypeName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#AFAFAF]">До:</span>
            <span className="text-white">{new Date(player.contract.endDate).toLocaleDateString('ru-RU')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#AFAFAF]">Зарплата:</span>
            <span className="text-white font-semibold">{formattedSalary}</span>
          </div>
        </div>
      </div>

      {/* Нижняя часть - состояние и статус */}
      <div className="player-status flex justify-between items-center">
        <div className="condition">
          <span className="text-[#AFAFAF] text-sm">Форма: </span>
          <span className={`text-sm font-medium ${
            player.physicalCondition >= 80 ? 'text-green-400' :
            player.physicalCondition >= 60 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {conditionStatus} ({player.physicalCondition}%)
          </span>
        </div>
        
        <div className={`status-badge px-2 py-1 rounded text-xs ${
          player.status === 'active' ? 'bg-green-600 text-white' :
          player.status === 'injured' ? 'bg-red-600 text-white' :
          player.status === 'suspended' ? 'bg-yellow-600 text-black' :
          'bg-gray-600 text-white'
        }`}>
          {player.status === 'active' ? 'Активен' :
           player.status === 'injured' ? 'Травма' :
           player.status === 'suspended' ? 'Дисквалификация' : 'Завершил карьеру'}
        </div>
      </div>
    </div>
  );
}
