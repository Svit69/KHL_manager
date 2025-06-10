'use client';

import React from 'react';
import { TeamRoster } from '@/components/TeamRoster';
import { PlayersDataManager } from '@/data/players';

export default function TestRosterPage() {
  const avtomobilistPlayers = PlayersDataManager.getTeamPlayers('avtomobilist');
  
  return (
    <div className="min-h-screen bg-[#101010] p-6">
      <TeamRoster 
        players={avtomobilistPlayers}
        teamName="Автомобилист"
        onPlayerSelect={(player) => {
          console.log('Selected player:', player);
        }}
      />
    </div>
  );
}
