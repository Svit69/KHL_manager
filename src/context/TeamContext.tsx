'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TeamContextType {
  selectedTeamId: string | null;
  setSelectedTeamId: (teamId: string | null) => void;
  isTeamSelected: boolean;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({ children }: { children: ReactNode }) {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

  const value = {
    selectedTeamId,
    setSelectedTeamId,
    isTeamSelected: selectedTeamId !== null,
  };

  return (
    <TeamContext.Provider value={value}>
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
}
