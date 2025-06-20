'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Player } from '../types/player';
import { PlayersDataManager } from '../data/players';

interface TeamContextType {
  selectedTeamId: string | null;
  setSelectedTeamId: (teamId: string | null) => void;
  isTeamSelected: boolean;
  wishlist: Player[];
  setWishlist: (wishlist: Player[]) => void;
  addToWishlist: (player: Player) => void;
  removeFromWishlist: (playerId: string) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({ children }: { children: ReactNode }) {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Player[]>([]);

  // Ключ для localStorage на основе выбранной команды
  const wishlistStorageKey = selectedTeamId ? `wishlist-${selectedTeamId}` : null;

  // Загружаем сохраненный вишлист при смене команды
  useEffect(() => {
    if (wishlistStorageKey && selectedTeamId) {
      const savedWishlist = localStorage.getItem(wishlistStorageKey);
      console.log('TeamContext: Загружаем вишлист для команды:', selectedTeamId, 'Данные:', savedWishlist);

      if (savedWishlist) {
        try {
          const parsedWishlist = JSON.parse(savedWishlist);
          // Проверяем, что все игроки из сохраненного вишлиста еще существуют
          const allPlayers = PlayersDataManager.getAllPlayers();
          const validWishlist = parsedWishlist.filter((savedPlayer: Player) =>
            allPlayers.find(p => p.id === savedPlayer.id)
          );
          console.log('TeamContext: Валидный вишлист:', validWishlist);
          setWishlist(validWishlist);
        } catch (error) {
          console.error('TeamContext: Ошибка при загрузке сохраненного вишлиста:', error);
          setWishlist([]);
        }
      } else {
        console.log('TeamContext: Нет сохраненного вишлиста, очищаем');
        setWishlist([]);
      }
    }
  }, [selectedTeamId]);

  // Сохраняем вишлист при его изменении
  useEffect(() => {
    if (wishlistStorageKey && selectedTeamId) {
      console.log('TeamContext: Сохраняем вишлист для команды:', selectedTeamId, 'Данные:', wishlist);
      localStorage.setItem(wishlistStorageKey, JSON.stringify(wishlist));
    }
  }, [wishlist, wishlistStorageKey, selectedTeamId]);

  const addToWishlist = (player: Player) => {
    if (!wishlist.find(p => p.id === player.id)) {
      setWishlist(prev => [...prev, player]);
    }
  };

  const removeFromWishlist = (playerId: string) => {
    setWishlist(prev => prev.filter(p => p.id !== playerId));
  };

  const value = {
    selectedTeamId,
    setSelectedTeamId,
    isTeamSelected: selectedTeamId !== null,
    wishlist,
    setWishlist,
    addToWishlist,
    removeFromWishlist,
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
