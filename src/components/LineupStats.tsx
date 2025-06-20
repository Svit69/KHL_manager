'use client';

import React from 'react';
import { LineupState, LineupUtils } from '@/utils/lineupUtils';
import { LegionnaireUtils } from '@/utils/legionnaireUtils';

interface LineupStatsProps {
  lineup: LineupState;
  teamId?: string;
}

export default function LineupStats({ lineup, teamId }: LineupStatsProps) {
  const stats = LineupUtils.getLineupStats(lineup, teamId);
  const players = Object.values(lineup);
  
  // Получаем статистику по легионерам
  const legionnaireStats = teamId ? LegionnaireUtils.getLegionnaireStats(players, teamId) : null;

  return (
    <div className="lineup-stats bg-[#1A1A1A] rounded-lg p-4 mb-4">
      <h3 className="text-white text-lg font-semibold mb-3">Статистика состава</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {/* Общее количество игроков */}
        <div className="stat-item">
          <div className="text-[#AFAFAF] text-sm">Игроков</div>
          <div className="text-white text-xl font-bold">{stats.totalPlayers}</div>
        </div>

        {/* Средний рейтинг */}
        <div className="stat-item">
          <div className="text-[#AFAFAF] text-sm">Ср. рейтинг</div>
          <div className="text-white text-xl font-bold">{stats.averageRating}</div>
        </div>

        {/* Легионеры */}
        <div className="stat-item">
          <div className="text-[#AFAFAF] text-sm">Легионеры</div>
          <div className={`text-xl font-bold ${
            legionnaireStats?.isExempt 
              ? 'text-[#0EE289]' 
              : stats.legionnaires > 5 
                ? 'text-[#FF474A]' 
                : stats.legionnaires === 5 
                  ? 'text-[#FFC917]' 
                  : 'text-white'
          }`}>
            {stats.legionnaires}
            {!legionnaireStats?.isExempt && (
              <span className="text-[#AFAFAF] text-sm ml-1">/5</span>
            )}
          </div>
        </div>

        {/* Легионеры-вратари */}
        <div className="stat-item">
          <div className="text-[#AFAFAF] text-sm">Врт-легионеры</div>
          <div className={`text-xl font-bold ${
            legionnaireStats?.isExempt 
              ? 'text-[#0EE289]' 
              : stats.legionnaireGoalies > 1 
                ? 'text-[#FF474A]' 
                : stats.legionnaireGoalies === 1 
                  ? 'text-[#FFC917]' 
                  : 'text-white'
          }`}>
            {stats.legionnaireGoalies}
            {!legionnaireStats?.isExempt && (
              <span className="text-[#AFAFAF] text-sm ml-1">/1</span>
            )}
          </div>
        </div>
      </div>

      {/* Детальная статистика по позициям */}
      <div className="position-breakdown grid grid-cols-3 gap-4">
        <div className="stat-item">
          <div className="text-[#AFAFAF] text-sm">Вратари</div>
          <div className="text-white font-semibold">{stats.goalies}</div>
        </div>
        
        <div className="stat-item">
          <div className="text-[#AFAFAF] text-sm">Защитники</div>
          <div className="text-white font-semibold">{stats.defensemen}</div>
        </div>
        
        <div className="stat-item">
          <div className="text-[#AFAFAF] text-sm">Нападающие</div>
          <div className="text-white font-semibold">{stats.forwards}</div>
        </div>
      </div>

      {/* Предупреждения */}
      {legionnaireStats && !legionnaireStats.isExempt && (
        <div className="warnings mt-4 space-y-2">
          {stats.legionnaires > 5 && (
            <div className="warning bg-[#4A1A1A] border border-[#FF474A] rounded p-2">
              <span className="text-[#FF474A] text-sm">
                ⚠️ Превышен лимит легионеров: {stats.legionnaires}/5
              </span>
            </div>
          )}
          
          {stats.legionnaireGoalies > 1 && (
            <div className="warning bg-[#4A1A1A] border border-[#FF474A] rounded p-2">
              <span className="text-[#FF474A] text-sm">
                ⚠️ Превышен лимит вратарей-легионеров: {stats.legionnaireGoalies}/1
              </span>
            </div>
          )}
        </div>
      )}

      {/* Информация об исключении */}
      {legionnaireStats?.isExempt && (
        <div className="exemption-info mt-4">
          <div className="bg-[#1A4A1A] border border-[#0EE289] rounded p-2">
            <span className="text-[#0EE289] text-sm">
              ✓ Команда освобождена от лимита на легионеров
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
