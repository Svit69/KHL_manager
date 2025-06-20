'use client';

import React, { useState, useEffect } from 'react';
import { useTeam } from '@/context/TeamContext';
import { teams } from '@/data/teams';
import { Player } from '@/types/player';
import { PlayersDataManager } from '@/data/players';
import { PlayerUtils } from '@/utils/playerUtils';
import { TradeAI, TradeOffer, TradeAnalysis } from '@/utils/tradeAI';
import { SalaryUtils } from '@/utils/salaryUtils';
import { TransferUtils, TransferResult } from '@/utils/transferUtils';
import { ContractNegotiation } from '@/utils/contractNegotiation';
import { RosterManager } from '@/utils/rosterManager';

export default function TransfersContent() {
  const { selectedTeamId, setSelectedTeamId, wishlist, setWishlist, addToWishlist, removeFromWishlist } = useTeam();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [showTradePopup, setShowTradePopup] = useState(false);
  const [tradeTarget, setTradeTarget] = useState<Player | null>(null);
  const [myTradePlayers, setMyTradePlayers] = useState<Player[]>([]);
  const [theirTradePlayers, setTheirTradePlayers] = useState<Player[]>([]);
  const [showMyPlayerSelector, setShowMyPlayerSelector] = useState(false);
  const [showTheirPlayerSelector, setShowTheirPlayerSelector] = useState(false);
  const [tradeAnalysis, setTradeAnalysis] = useState<TradeAnalysis | null>(null);
  const [showTradeResult, setShowTradeResult] = useState(false);
  const [transferResult, setTransferResult] = useState<TransferResult | null>(null);

  // Состояния для поиска игроков
  const [showPlayerSearch, setShowPlayerSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<Player[]>([]);
  const [selectedSearchPlayer, setSelectedSearchPlayer] = useState<Player | null>(null);

  // Состояния для переговоров с НСА
  const [showContractNegotiation, setShowContractNegotiation] = useState(false);
  const [negotiatingPlayer, setNegotiatingPlayer] = useState<Player | null>(null);

  // Фильтры поиска
  const [searchFilters, setSearchFilters] = useState({
    name: '',
    league: 'all',
    team: 'all',
    position: 'all',
    nationality: 'all',
    ageMin: 16,
    ageMax: 50,
    salaryMin: 0,
    salaryMax: 200,
    status: 'all'
  });

  // Устанавливаем первого игрока как выбранного при изменении вишлиста
  useEffect(() => {
    if (wishlist.length > 0 && !selectedPlayer) {
      setSelectedPlayer(wishlist[0]);
    } else if (wishlist.length === 0) {
      setSelectedPlayer(null);
    }
  }, [wishlist]);

  // Фильтрация команд по поисковому запросу
  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTeamSelect = (teamId: string) => {
    setSelectedTeamId(teamId);
  };

  const handlePlayerSelect = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleSignPlayer = (player: Player) => {
    // Проверяем, является ли игрок НСА
    if (player.club === 'НСА' || !player.contract.isActive) {
      // Открываем окно переговоров с НСА
      handleNegotiateWithFreeAgent(player);
    } else {
      // Обычный обмен
      setTradeTarget(player);
      setTheirTradePlayers([player]); // Автоматически добавляем целевого игрока
      setMyTradePlayers([]);
      setShowTradePopup(true);
    }
  };

  const handleRemoveFromWishlist = (player: Player) => {
    removeFromWishlist(player.id);

    // Если удаляем выбранного игрока, выбираем следующего или сбрасываем
    if (selectedPlayer?.id === player.id) {
      const updatedWishlist = wishlist.filter(p => p.id !== player.id);
      if (updatedWishlist.length > 0) {
        setSelectedPlayer(updatedWishlist[0]);
      } else {
        setSelectedPlayer(null);
      }
    }
  };

  // Функция для получения сокращения страны и флага
  const getNationalityInfo = (nationality: string) => {
    const nationalityMap: Record<string, { abbr: string, flag: string }> = {
      'RU': { abbr: 'РУС', flag: '/flags/icon-russia.png' },
      'BY': { abbr: 'БЕЛ', flag: '/flags/icon-belarus.png' },
      'US': { abbr: 'США', flag: '/flags/icon-usa.png' },
      'CA': { abbr: 'КАН', flag: '/flags/icon-canada.png' },
      'KZ': { abbr: 'КАЗ', flag: '/flags/icon-kazakhstan.png' },
      'FI': { abbr: 'ФИН', flag: '/flags/icon-finland.png' },
      'SE': { abbr: 'ШВЕ', flag: '/flags/icon-sweden.png' },
      'CZ': { abbr: 'ЧЕХ', flag: '/flags/icon-czech.png' },
      'SK': { abbr: 'СЛО', flag: '/flags/icon-slovakia.png' },
      'DE': { abbr: 'ГЕР', flag: '/flags/icon-germany.png' },
      'FR': { abbr: 'ФРА', flag: '/flags/icon-france.png' },
      'CN': { abbr: 'КИТ', flag: '/flags/icon-china.png' },
      'SI': { abbr: 'СЛВ', flag: '/flags/icon-slovenia.png' }
    };

    return nationalityMap[nationality] || { abbr: nationality, flag: '/flags/icon-russia.png' };
  };

  const handleCloseTradePopup = () => {
    setShowTradePopup(false);
    setTradeTarget(null);
    setMyTradePlayers([]);
    setTheirTradePlayers([]);
    setShowMyPlayerSelector(false);
    setShowTheirPlayerSelector(false);
  };

  const handleRemoveFromTrade = (playerId: string, isMyPlayer: boolean) => {
    if (isMyPlayer) {
      setMyTradePlayers(prev => prev.filter(p => p.id !== playerId));
    } else {
      // Не позволяем удалить целевого игрока
      if (tradeTarget?.id !== playerId) {
        setTheirTradePlayers(prev => prev.filter(p => p.id !== playerId));
      }
    }
  };

  const handleAddMyPlayer = (player: Player) => {
    if (!myTradePlayers.find(p => p.id === player.id)) {
      setMyTradePlayers(prev => [...prev, player]);
    }
    setShowMyPlayerSelector(false);
  };

  const handleAddTheirPlayer = (player: Player) => {
    if (!theirTradePlayers.find(p => p.id === player.id)) {
      setTheirTradePlayers(prev => [...prev, player]);
    }
    setShowTheirPlayerSelector(false);
  };

  const handleProposeTrade = () => {
    if (!tradeTarget || myTradePlayers.length === 0) {
      alert('Добавьте хотя бы одного игрока для обмена');
      return;
    }

    const tradeOffer: TradeOffer = {
      givingPlayers: myTradePlayers,
      receivingPlayers: theirTradePlayers,
      targetTeamId: teams.find(t => t.name === tradeTarget.club)?.id || 'dynamo-mn'
    };

    const analysis = TradeAI.evaluateTrade(tradeOffer);
    setTradeAnalysis(analysis);
    setShowTradeResult(true);
  };

  const handleCompleteTrade = () => {
    if (!tradeTarget || !selectedTeamId) return;

    // Выполняем обмен
    const targetTeamId = teams.find(t => t.name === tradeTarget.club)?.id || 'dynamo-mn';
    const result = TransferUtils.executePlayerTrade(
      selectedTeamId,
      targetTeamId,
      myTradePlayers,
      theirTradePlayers
    );

    setTransferResult(result);

    if (result.success) {
      // Удаляем переведенных игроков из wishlist
      result.transferredPlayers.toMyTeam.forEach(player => {
        removeFromWishlist(player.id);
      });

      // Если удаляем выбранного игрока, сбрасываем выбор
      if (selectedPlayer && result.transferredPlayers.toMyTeam.find(tp => tp.id === selectedPlayer.id)) {
        const updatedWishlist = wishlist.filter(player =>
          !result.transferredPlayers.toMyTeam.find(tp => tp.id === player.id)
        );
        setSelectedPlayer(updatedWishlist.length > 0 ? updatedWishlist[0] : null);
      }

      // Показываем уведомление
      alert(TransferUtils.createTradeNotification(result));

      // Закрываем все попапы
      setShowTradeResult(false);
      handleCloseTradePopup();
    } else {
      alert(`Ошибка: ${result.message}`);
    }
  };

  // Компонент звезд интереса
  const InterestStars = ({ interest }: { interest: number }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className="w-5 h-5"
            fill={star <= interest ? '#FFC917' : '#2A2A2A'}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Компонент карточки игрока для обмена
  const TradePlayerCard = ({ player, onRemove, canRemove = true }: {
    player: Player;
    onRemove: () => void;
    canRemove?: boolean;
  }) => {
    const nationalityInfo = getNationalityInfo(player.nationality);
    const contractYear = new Date(player.contract.endDate).getFullYear();

    return (
      <div className="bg-[#1A1A1A] border border-[#383838] rounded-lg p-4 relative">
        <div className="flex items-center gap-3">
          {/* Рейтинг */}
          <div className="text-white font-bold text-lg">{player.overallRating}</div>

          {/* Фото */}
          <img
            src={player.photoUrl}
            alt={`${player.firstName} ${player.lastName}`}
            className="w-12 h-12 object-cover rounded"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = PlayerUtils.getDefaultPhotoPath(player.position);
            }}
          />

          {/* Информация */}
          <div className="flex-1">
            <div className="text-white font-medium">
              {player.firstName.charAt(0)}. {player.lastName}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8B8B8B]">
              <img
                src={nationalityInfo.flag}
                alt={player.nationality}
                className="w-4 h-3 object-cover"
              />
              <span>{nationalityInfo.abbr}</span>
              <span>•</span>
              <span>до {contractYear}</span>
              <span>•</span>
              <span>{player.salary?.amount || 0} млн ₽</span>
            </div>
          </div>

          {/* Кнопка удаления */}
          {canRemove && (
            <button
              onClick={onRemove}
              className="w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ×
            </button>
          )}
        </div>
      </div>
    );
  };

  // Компонент селектора игроков
  const PlayerSelector = ({
    players,
    onSelect,
    onClose,
    title
  }: {
    players: Player[];
    onSelect: (player: Player) => void;
    onClose: () => void;
    title: string;
  }) => {
    // Сортируем игроков по рейтингу (от высшего к низшему)
    const sortedPlayers = [...players].sort((a, b) => b.overallRating - a.overallRating);
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[70]">
        <div className="bg-[#1A1A1A] border border-[#383838] rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-[#383838] hover:bg-[#555] text-white rounded-full flex items-center justify-center transition-colors"
            >
              ×
            </button>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {sortedPlayers.map((player) => {
              const nationalityInfo = getNationalityInfo(player.nationality);
              return (
                <div
                  key={player.id}
                  onClick={() => onSelect(player)}
                  className="bg-[#2A2A2A] hover:bg-[#333] border border-[#383838] rounded-lg p-3 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-white font-bold text-lg">{player.overallRating}</div>
                    <img
                      src={player.photoUrl}
                      alt={`${player.firstName} ${player.lastName}`}
                      className="w-10 h-10 object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = PlayerUtils.getDefaultPhotoPath(player.position);
                      }}
                    />
                    <div className="flex-1">
                      <div className="text-white font-medium">
                        {player.firstName} {player.lastName}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#8B8B8B]">
                        <span>{player.position}</span>
                        <span>•</span>
                        <img
                          src={nationalityInfo.flag}
                          alt={player.nationality}
                          className="w-4 h-3 object-cover"
                        />
                        <span>{nationalityInfo.abbr}</span>
                        <span>•</span>
                        <span>{player.salary?.amount || 0} млн ₽</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const handlePlayerSearch = () => {
    setShowPlayerSearch(true);
    // Выполняем поиск с текущими фильтрами
    performSearch();
  };

  // Функция выполнения поиска
  const performSearch = () => {
    const allPlayers = PlayersDataManager.getAllPlayers();

    let filtered = allPlayers.filter(player => {
      // Исключаем игроков своей команды
      if (selectedTeamId) {
        const myTeamPlayers = PlayersDataManager.getTeamPlayers(selectedTeamId);
        if (myTeamPlayers.find(p => p.id === player.id)) {
          return false;
        }
      }

      // Фильтр по имени
      if (searchFilters.name && !`${player.firstName} ${player.lastName}`.toLowerCase().includes(searchFilters.name.toLowerCase())) {
        return false;
      }

      // Фильтр по команде
      if (searchFilters.team !== 'all' && player.club !== searchFilters.team) {
        return false;
      }

      // Фильтр по позиции
      if (searchFilters.position !== 'all' && player.position !== searchFilters.position) {
        return false;
      }

      // Фильтр по национальности
      if (searchFilters.nationality !== 'all' && player.nationality !== searchFilters.nationality) {
        return false;
      }

      // Фильтр по возрасту
      const age = PlayerUtils.calculateAge(player.birthDate);
      if (age < searchFilters.ageMin || age > searchFilters.ageMax) {
        return false;
      }

      // Фильтр по зарплате
      const salary = player.salary?.amount || 0;
      if (salary < searchFilters.salaryMin || salary > searchFilters.salaryMax) {
        return false;
      }

      // Фильтр по статусу
      if (searchFilters.status !== 'all') {
        const isFreeAgent = player.club === 'НСА' || !player.contract.isActive;
        if (searchFilters.status === 'ufa' && !isFreeAgent) {
          return false;
        }
        if (searchFilters.status === 'rfa' && isFreeAgent) {
          return false; // RFA пока не реализованы
        }
      }

      return true;
    });

    // Сортируем результаты по рейтингу (от высшего к низшему)
    filtered.sort((a, b) => b.overallRating - a.overallRating);

    setSearchResults(filtered);
  };

  // Обработчики для поиска игроков
  const handleSearchPlayerSelect = (player: Player) => {
    setSelectedSearchPlayer(player);
  };

  const handleAddToWishlist = (player: Player) => {
    // Проверяем, что игрок не из нашей команды
    if (selectedTeamId) {
      const myTeamPlayers = PlayersDataManager.getTeamPlayers(selectedTeamId);
      if (myTeamPlayers.find(p => p.id === player.id)) {
        alert('Нельзя добавить игрока из своей команды в список желаемых!');
        return;
      }
    }

    if (!wishlist.find(p => p.id === player.id)) {
      addToWishlist(player);
      setSelectedPlayer(player);
    }
    // Не закрываем режим поиска, только сбрасываем выбранного игрока
    setSelectedSearchPlayer(null);
  };

  const handleSignFromSearch = (player: Player) => {
    // Проверяем, что игрок не из нашей команды
    if (selectedTeamId) {
      const myTeamPlayers = PlayersDataManager.getTeamPlayers(selectedTeamId);
      if (myTeamPlayers.find(p => p.id === player.id)) {
        alert('Нельзя подписать игрока из своей команды!');
        return;
      }
    }

    // Проверяем, является ли игрок НСА
    if (player.club === 'НСА' || !player.contract.isActive) {
      // Открываем окно переговоров с НСА
      handleNegotiateWithFreeAgent(player);
    } else {
      // Обычный обмен
      handleSignPlayer(player);
    }

    setShowPlayerSearch(false);
    setSelectedSearchPlayer(null);
  };

  const handleClosePlayerSearch = () => {
    setShowPlayerSearch(false);
    setSelectedSearchPlayer(null);
    setSearchResults([]);
  };

  // Обработчик переговоров с НСА
  const handleNegotiateWithFreeAgent = (player: Player) => {
    setNegotiatingPlayer(player);
    setShowContractNegotiation(true);
  };

  const handleCloseContractNegotiation = () => {
    setShowContractNegotiation(false);
    setNegotiatingPlayer(null);
  };

  // Функция расчета интереса игрока к переходу (от 0 до 5 звезд)
  const calculatePlayerInterest = (player: Player): number => {
    let interest = 0;

    // Базовый интерес (1 звезда)
    interest += 1;

    // Проверяем любимые клубы (если наш клуб в списке - +2 звезды)
    if (selectedTeamId && player.favoriteClubs.includes(selectedTeamId)) {
      interest += 2;
    }

    // Анализ зарплаты относительно рейтинга
    const expectedSalary = player.overallRating * 0.8; // Примерная формула
    const actualSalary = player.salary?.amount || 0;
    if (actualSalary < expectedSalary) {
      interest += 1; // Недоплачивают - хочет больше денег
    }

    // Анализ игрового времени (симуляция)
    // Высокий рейтинг, но мало играет = +1 звезда
    if (player.overallRating >= 80 && Math.random() > 0.6) {
      interest += 1; // Симуляция недостатка игрового времени
    }

    // Ограничиваем максимум 5 звездами
    return Math.min(interest, 5);
  };

  return (
    <div className="main-layout flex-1 bg-[#101010] relative">
      {/* Верхнее меню */}
      <div 
        className="main-header sticky top-0 z-10 isolate bg-[#101010] border-b border-[#383838]"
        style={{ top: 'var(--current-stack-height, 0px)' }}
      >
        <div className="header-content p-6">
          <h2 className="header-title text-xl font-medium">Трансферы</h2>
        </div>
      </div>

      {/* Основная часть */}
      <div className="main-content bg-[#101010] p-8 flex">
        {/* Левая часть - фоновая картинка (64%) */}
        <div className="content-left w-[64%] bg-[#101010] relative">
          <div
            className="background-container sticky bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/background.png)',
              top: 'var(--current-stack-height, 78px)',
              height: 'calc(100vh - var(--current-stack-height, 78px))'
            }}
          >
            {/* Wishlist трансферов */}
            <div className="p-8 h-full">
              <div className="wishlist-container h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-6">Список желаемых игроков</h3>

                {/* Пустой wishlist */}
                {wishlist.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <h4 className="text-4xl font-bold text-white mb-8">Нет игроков в списке</h4>
                      <div className="space-y-4 flex justify-center">
                        <button
                          onClick={handlePlayerSearch}
                          className="bg-[#212121] hover:bg-[#2a2a2a] text-[#909090] font-medium px-6 py-2 rounded-full transition-colors"
                        >
                          Поиск игроков
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Список игроков в wishlist */
                  <div className="flex-1">
                    {/* Заголовки колонок */}
                    <div className="grid grid-cols-5 gap-4 mb-4 px-4 py-2 text-[#8B8B8B] text-sm font-medium">
                      <div>Поз</div>
                      <div>Имя</div>
                      <div className="text-center">Воз</div>
                      <div className="text-center">Общ</div>
                      <div className="text-center">Команда</div>
                    </div>

                    {/* Карточки игроков */}
                    <div className="space-y-2">
                      {wishlist.map((player) => {
                        const age = PlayerUtils.calculateAge(player.birthDate);
                        const team = teams.find(t => t.name === player.club);
                        const shortName = `${player.firstName.charAt(0)}. ${player.lastName}`;

                        // Перевод позиций на русский
                        const getPositionRu = (position: string) => {
                          switch(position) {
                            case 'G': return 'ВРТ';
                            case 'D': return 'ЗАЩ';
                            case 'C': return 'ЦТР';
                            case 'LW': return 'ЛНП';
                            case 'RW': return 'ПНП';
                            default: return position;
                          }
                        };

                        return (
                          <div
                            key={player.id}
                            onClick={() => handlePlayerSelect(player)}
                            className={`rounded-lg pt-4 px-4 pb-0 hover:bg-[#222] transition-colors relative overflow-hidden cursor-pointer ${
                              selectedPlayer?.id === player.id
                                ? 'bg-[#2A2A2A] border-2 border-blue-500'
                                : 'bg-[#1A1A1A] border border-[#383838]'
                            }`}
                          >
                            <div className="grid grid-cols-5 gap-4 items-center h-16">
                              {/* Позиция */}
                              <div className="text-white font-medium">
                                {getPositionRu(player.position)}
                              </div>

                              {/* Фото и имя */}
                              <div className="relative flex items-center">
                                {/* Фото смещено левее и касается нижнего края карточки */}
                                <img
                                  src={player.photoUrl}
                                  alt={`${player.firstName} ${player.lastName}`}
                                  className="w-20 h-20 object-cover rounded absolute left-[-6rem] bottom-0"
                                  style={{ transform: 'translateY(50%)' }}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = PlayerUtils.getDefaultPhotoPath(player.position);
                                  }}
                                />
                                {/* Имя под заголовком */}
                                <span className="text-white font-medium whitespace-nowrap">{shortName}</span>
                              </div>

                              {/* Возраст */}
                              <div className="text-white font-medium text-center">
                                {age}
                              </div>

                              {/* Общий рейтинг */}
                              <div className="text-white font-medium text-center">
                                {player.overallRating}
                              </div>

                              {/* Логотип команды */}
                              <div className="flex items-center justify-center">
                                <img
                                  src={team?.logo || '/logo/default.png'}
                                  alt={player.club}
                                  className="w-12 h-12 object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/logo/default.png';
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Кнопка добавить еще игроков */}
                    <div className="mt-6 text-center">
                      <button
                        onClick={handlePlayerSearch}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                      >
                        Добавить игроков
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Правая часть - информация об игроке (36%) */}
        <div className="content-right w-[36%] bg-[#101010] p-6">
          {selectedPlayer ? (
            <div className="player-info">
              {/* Фото и основная информация */}
              <div className="text-center mb-6">
                <img
                  src={selectedPlayer.photoUrl}
                  alt={`${selectedPlayer.firstName} ${selectedPlayer.lastName}`}
                  className="w-32 h-32 object-cover rounded-lg mx-auto mb-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = PlayerUtils.getDefaultPhotoPath(selectedPlayer.position);
                  }}
                />

                {/* Имя и фамилия */}
                <div className="mb-4">
                  <div className="text-white text-sm opacity-50">{selectedPlayer.firstName}</div>
                  <div className="text-white text-2xl font-bold">{selectedPlayer.lastName}</div>
                </div>

                {/* Позиция, рейтинг, клуб */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-[#8B8B8B] text-xs">Позиция</div>
                    <div className="text-white font-medium">
                      {selectedPlayer.position === 'G' ? 'ВРТ' :
                       selectedPlayer.position === 'D' ? 'ЗАЩ' :
                       selectedPlayer.position === 'C' ? 'ЦТР' :
                       selectedPlayer.position === 'LW' ? 'ЛНП' :
                       selectedPlayer.position === 'RW' ? 'ПНП' : selectedPlayer.position}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#8B8B8B] text-xs">Рейтинг</div>
                    <div className="text-white font-bold text-3xl">{selectedPlayer.overallRating}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#8B8B8B] text-xs">Клуб</div>
                    <div className="text-white font-medium text-sm">{selectedPlayer.club}</div>
                  </div>
                </div>
              </div>

              {/* Детальная информация */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#8B8B8B]">Возраст:</span>
                  <span className="text-white">{PlayerUtils.calculateAge(selectedPlayer.birthDate)} лет</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B8B8B]">Гражданство:</span>
                  <div className="flex items-center gap-2">
                    <img
                      src={getNationalityInfo(selectedPlayer.nationality).flag}
                      alt={selectedPlayer.nationality}
                      className="w-5 h-4 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/flags/icon-russia.png';
                      }}
                    />
                    <span className="text-white">{getNationalityInfo(selectedPlayer.nationality).abbr}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B8B8B]">Контракт до:</span>
                  <span className="text-white">{new Date(selectedPlayer.contract.endDate).toLocaleDateString('ru-RU')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B8B8B]">Зарплата:</span>
                  <span className="text-white">{selectedPlayer.salary?.amount || 0} млн ₽</span>
                </div>
              </div>

              {/* Интерес к переходу */}
              <div className="border-t border-[#383838] pt-4 mb-6">
                <div className="text-[#8B8B8B] text-sm mb-2">Интерес к переходу:</div>
                <InterestStars interest={calculatePlayerInterest(selectedPlayer)} />
              </div>

              {/* Кнопки действий */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleSignPlayer(selectedPlayer)}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ✍️ Подписать
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(selectedPlayer)}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  🗑️ Удалить
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-[#8B8B8B] mt-20">
              <p>Выберите игрока из списка</p>
            </div>
          )}
        </div>
      </div>

      {/* Попап обмена */}
      {showTradePopup && tradeTarget && (
        <div className="fixed inset-0 bg-[#101010] bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-[#1A1A1A] border border-[#AFAFAF] rounded-xl p-8 max-w-6xl w-full mx-8 max-h-[90vh] overflow-y-auto">
            {/* Заголовок */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Оформление сделки</h2>
              <button
                onClick={handleCloseTradePopup}
                className="w-8 h-8 bg-[#383838] hover:bg-[#555] text-white rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>

            {/* Информация о зарплатном потолке */}
            <div className="bg-[#2A2A2A] border border-[#383838] rounded-lg p-4 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-[#8B8B8B] text-sm">Текущие обязательства</div>
                  <div className="text-white font-bold">
                    {selectedTeamId ? SalaryUtils.getTeamSalary(selectedTeamId).toFixed(0) : '0'} млн ₽
                  </div>
                </div>
                <div>
                  <div className="text-[#8B8B8B] text-sm">Потолок зарплат</div>
                  <div className="text-white font-bold">{SalaryUtils.SALARY_CAP} млн ₽</div>
                </div>
                <div>
                  <div className="text-[#8B8B8B] text-sm">Свободно</div>
                  <div className="text-green-400 font-bold">
                    {selectedTeamId ? SalaryUtils.getRemainingCap(selectedTeamId).toFixed(0) : '0'} млн ₽
                  </div>
                </div>
              </div>

              {/* Влияние сделки на зарплаты */}
              {myTradePlayers.length > 0 || theirTradePlayers.length > 0 ? (
                <div className="mt-4 pt-4 border-t border-[#383838]">
                  <div className="text-center">
                    <div className="text-[#8B8B8B] text-sm">Изменение зарплат от сделки</div>
                    <div className={`font-bold ${
                      SalaryUtils.getTradeSalaryImpact(myTradePlayers, theirTradePlayers) > 0
                        ? 'text-red-400'
                        : 'text-green-400'
                    }`}>
                      {SalaryUtils.getTradeSalaryImpact(myTradePlayers, theirTradePlayers) > 0 ? '+' : ''}
                      {SalaryUtils.getTradeSalaryImpact(myTradePlayers, theirTradePlayers).toFixed(0)} млн ₽
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Основная область обмена */}
            <div className="grid grid-cols-2 gap-8">
              {/* Левая сторона - моя команда */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={teams.find(t => t.id === selectedTeamId)?.logo || '/logo/default.png'}
                    alt="Моя команда"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-white font-medium">Вы отправляете</h3>
                    <button
                      onClick={() => setShowMyPlayerSelector(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2 transition-colors"
                    >
                      Добавить игрока
                    </button>
                  </div>
                </div>

                {/* Список моих игроков для обмена */}
                <div className="space-y-3">
                  {myTradePlayers.map((player) => (
                    <TradePlayerCard
                      key={player.id}
                      player={player}
                      onRemove={() => handleRemoveFromTrade(player.id, true)}
                    />
                  ))}
                  {myTradePlayers.length === 0 && (
                    <div className="text-center text-[#8B8B8B] py-8 border-2 border-dashed border-[#383838] rounded-lg">
                      Добавьте игроков для обмена
                    </div>
                  )}
                </div>
              </div>

              {/* Правая сторона - их команда */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={teams.find(t => t.name === tradeTarget.club)?.logo || '/logo/default.png'}
                    alt={tradeTarget.club}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-white font-medium">Отправляет</h3>
                    <button
                      onClick={() => setShowTheirPlayerSelector(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2 transition-colors"
                    >
                      Добавить игрока
                    </button>
                  </div>
                </div>

                {/* Список их игроков для обмена */}
                <div className="space-y-3">
                  {theirTradePlayers.map((player) => (
                    <TradePlayerCard
                      key={player.id}
                      player={player}
                      onRemove={() => handleRemoveFromTrade(player.id, false)}
                      canRemove={player.id !== tradeTarget.id} // Нельзя удалить целевого игрока
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-[#383838]">
              <button
                onClick={handleCloseTradePopup}
                className="flex-1 bg-[#383838] hover:bg-[#555] text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Отмена
              </button>
              <button
                onClick={handleProposeTrade}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Предложить обмен
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Селектор моих игроков */}
      {showMyPlayerSelector && selectedTeamId && (
        <PlayerSelector
          players={PlayersDataManager.getTeamPlayers(selectedTeamId)}
          onSelect={handleAddMyPlayer}
          onClose={() => setShowMyPlayerSelector(false)}
          title="Выберите игрока из вашей команды"
        />
      )}

      {/* Селектор игроков противника */}
      {showTheirPlayerSelector && tradeTarget && (
        <PlayerSelector
          players={PlayersDataManager.getTeamPlayers(PlayersDataManager.getTeamIdByName(tradeTarget.club) || 'dynamo-mn')}
          onSelect={handleAddTheirPlayer}
          onClose={() => setShowTheirPlayerSelector(false)}
          title={`Выберите игрока из ${tradeTarget.club}`}
        />
      )}

      {/* Попап результата анализа сделки */}
      {showTradeResult && tradeAnalysis && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[80]">
          <div className="bg-[#1A1A1A] border border-[#AFAFAF] rounded-xl p-8 max-w-2xl w-full mx-8">
            {/* Заголовок */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {tradeAnalysis.isAccepted ? '✅ Сделка принята!' : '❌ Сделка отклонена'}
              </h2>
              <button
                onClick={() => {
                  setShowTradeResult(false);
                  if (tradeAnalysis.isAccepted) {
                    handleCloseTradePopup();
                  }
                }}
                className="w-8 h-8 bg-[#383838] hover:bg-[#555] text-white rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>

            {/* Основная информация */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-white">
                  <span className="text-[#8B8B8B]">Дельта (Δ):</span>
                  <span className={`ml-2 font-bold text-xl ${
                    tradeAnalysis.category === 'beneficial' ? 'text-green-400' :
                    tradeAnalysis.category === 'neutral' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {tradeAnalysis.delta && tradeAnalysis.delta > 0 ? '+' : ''}{tradeAnalysis.delta?.toFixed(1) || '0.0'}
                  </span>
                </div>
                <div className="text-white">
                  <span className="text-[#8B8B8B]">Категория:</span>
                  <span className="ml-2 font-bold">
                    {tradeAnalysis.category === 'beneficial' ? '🟢 Выгодный' :
                     tradeAnalysis.category === 'neutral' ? '🟡 Нейтральный' : '🔴 Невыгодный'}
                  </span>
                </div>
                <div className="text-white">
                  <span className="text-[#8B8B8B]">Статус:</span>
                  <span className="ml-2 font-bold">
                    {tradeAnalysis.isAccepted ? '✅ Принято' : '❌ Отклонено'}
                  </span>
                </div>
                <div className="text-white">
                  <span className="text-[#8B8B8B]">Уверенность:</span>
                  <span className="ml-2 font-bold text-blue-400">{tradeAnalysis.confidence.toFixed(0)}%</span>
                </div>
              </div>

              {/* Анализ игроков с расчетом стоимости */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Получаемые игроки:</h4>
                  {theirTradePlayers.map((player, index) => {
                    // Импортируем TradeAI для расчета стоимости
                    const value = TradeAI.calculatePlayerValue(player);
                    return (
                      <div key={index} className="text-sm text-[#AFAFAF] flex justify-between">
                        <span>{player.firstName.charAt(0)}. {player.lastName} ({player.overallRating})</span>
                        <span className="text-green-400">{value.toFixed(1)}</span>
                      </div>
                    );
                  })}
                  <div className="border-t border-[#383838] mt-2 pt-2 flex justify-between font-bold">
                    <span className="text-white">Итого:</span>
                    <span className="text-green-400">
                      {theirTradePlayers.reduce((sum, p) => sum + TradeAI.calculatePlayerValue(p), 0).toFixed(1)}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Отдаваемые игроки:</h4>
                  {myTradePlayers.map((player, index) => {
                    const value = TradeAI.calculatePlayerValue(player);
                    return (
                      <div key={index} className="text-sm text-[#AFAFAF] flex justify-between">
                        <span>{player.firstName.charAt(0)}. {player.lastName} ({player.overallRating})</span>
                        <span className="text-red-400">{value.toFixed(1)}</span>
                      </div>
                    );
                  })}
                  <div className="border-t border-[#383838] mt-2 pt-2 flex justify-between font-bold">
                    <span className="text-white">Итого:</span>
                    <span className="text-red-400">
                      {myTradePlayers.reduce((sum, p) => sum + TradeAI.calculatePlayerValue(p), 0).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Детальный анализ */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B8B8B]">Баланс ценности:</span>
                    <span className={`${tradeAnalysis.breakdown.valueBalance > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {tradeAnalysis.breakdown.valueBalance > 0 ? '+' : ''}{tradeAnalysis.breakdown.valueBalance.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B8B8B]">Влияние зарплат:</span>
                    <span className={`${tradeAnalysis.breakdown.salaryImpact > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {tradeAnalysis.breakdown.salaryImpact > 0 ? '+' : ''}{tradeAnalysis.breakdown.salaryImpact.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B8B8B]">Интерес игроков:</span>
                    <span className={`${tradeAnalysis.breakdown.playerInterest > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {tradeAnalysis.breakdown.playerInterest > 0 ? '+' : ''}{tradeAnalysis.breakdown.playerInterest.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B8B8B]">Потребность команды:</span>
                    <span className={`${tradeAnalysis.breakdown.teamNeed > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {tradeAnalysis.breakdown.teamNeed > 0 ? '+' : ''}{tradeAnalysis.breakdown.teamNeed.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B8B8B]">Возраст и потенциал:</span>
                    <span className={`${tradeAnalysis.breakdown.ageAndPotential > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {tradeAnalysis.breakdown.ageAndPotential > 0 ? '+' : ''}{tradeAnalysis.breakdown.ageAndPotential.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Причины решения */}
            <div className="mb-6">
              <h3 className="text-white font-medium mb-3">Обоснование решения:</h3>
              <ul className="space-y-2">
                {tradeAnalysis.reasons.map((reason, index) => (
                  <li key={index} className="text-[#AFAFAF] text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Кнопки */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowTradeResult(false)}
                className="flex-1 bg-[#383838] hover:bg-[#555] text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                {tradeAnalysis.isAccepted ? 'Продолжить' : 'Изменить предложение'}
              </button>
              {tradeAnalysis.isAccepted && (
                <button
                  onClick={handleCompleteTrade}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Завершить сделку
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Попап поиска игроков */}
      {showPlayerSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[80]">
          <div className="bg-[#1A1A1A] border border-[#AFAFAF] rounded-xl p-8 max-w-7xl w-full mx-8 max-h-[90vh] overflow-hidden">
            {/* Заголовок */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Поиск игроков</h2>
              <button
                onClick={handleClosePlayerSearch}
                className="w-8 h-8 bg-[#383838] hover:bg-[#555] text-white rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>

            <div className="flex gap-8 h-[calc(90vh-200px)]">
              {/* Левая часть - фильтры */}
              <div className="w-80 bg-[#2A2A2A] rounded-lg p-6 overflow-y-auto">
                <h3 className="text-white font-medium mb-4">Фильтры</h3>

                <div className="space-y-4">
                  {/* Поиск по имени */}
                  <div>
                    <label className="block text-[#8B8B8B] text-sm mb-2">Поиск по имени</label>
                    <input
                      type="text"
                      value={searchFilters.name}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-[#1A1A1A] border border-[#383838] rounded-lg px-3 py-2 text-white"
                      placeholder="Введите имя игрока"
                    />
                  </div>

                  {/* Лига */}
                  <div>
                    <label className="block text-[#8B8B8B] text-sm mb-2">Лига</label>
                    <select
                      value={searchFilters.league}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, league: e.target.value }))}
                      className="w-full bg-[#1A1A1A] border border-[#383838] rounded-lg px-3 py-2 text-white"
                    >
                      <option value="all">Все лиги</option>
                      <option value="khl">КХЛ</option>
                    </select>
                  </div>

                  {/* Команда */}
                  <div>
                    <label className="block text-[#8B8B8B] text-sm mb-2">Команда</label>
                    <select
                      value={searchFilters.team}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, team: e.target.value }))}
                      className="w-full bg-[#1A1A1A] border border-[#383838] rounded-lg px-3 py-2 text-white"
                    >
                      <option value="all">Все команды</option>
                      {teams.map(team => (
                        <option key={team.id} value={team.name}>{team.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Позиция */}
                  <div>
                    <label className="block text-[#8B8B8B] text-sm mb-2">Позиция</label>
                    <select
                      value={searchFilters.position}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, position: e.target.value }))}
                      className="w-full bg-[#1A1A1A] border border-[#383838] rounded-lg px-3 py-2 text-white"
                    >
                      <option value="all">Все позиции</option>
                      <option value="G">Вратарь</option>
                      <option value="D">Защитник</option>
                      <option value="C">Центр</option>
                      <option value="LW">Левый нападающий</option>
                      <option value="RW">Правый нападающий</option>
                    </select>
                  </div>

                  {/* Национальность */}
                  <div>
                    <label className="block text-[#8B8B8B] text-sm mb-2">Национальность</label>
                    <select
                      value={searchFilters.nationality}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, nationality: e.target.value }))}
                      className="w-full bg-[#1A1A1A] border border-[#383838] rounded-lg px-3 py-2 text-white"
                    >
                      <option value="all">Все страны</option>
                      <option value="RU">Россия</option>
                      <option value="BY">Беларусь</option>
                      <option value="KZ">Казахстан</option>
                      <option value="US">США</option>
                      <option value="CA">Канада</option>
                      <option value="FI">Финляндия</option>
                      <option value="SE">Швеция</option>
                      <option value="CZ">Чехия</option>
                      <option value="SK">Словакия</option>
                    </select>
                  </div>

                  {/* Возраст */}
                  <div>
                    <label className="block text-[#8B8B8B] text-sm mb-2">
                      Возраст: {searchFilters.ageMin} - {searchFilters.ageMax} лет
                    </label>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="16"
                        max="50"
                        value={searchFilters.ageMin}
                        onChange={(e) => setSearchFilters(prev => ({ ...prev, ageMin: parseInt(e.target.value) }))}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="16"
                        max="50"
                        value={searchFilters.ageMax}
                        onChange={(e) => setSearchFilters(prev => ({ ...prev, ageMax: parseInt(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Зарплата */}
                  <div>
                    <label className="block text-[#8B8B8B] text-sm mb-2">
                      Зарплата: {searchFilters.salaryMin} - {searchFilters.salaryMax} млн ₽
                    </label>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={searchFilters.salaryMin}
                        onChange={(e) => setSearchFilters(prev => ({ ...prev, salaryMin: parseInt(e.target.value) }))}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={searchFilters.salaryMax}
                        onChange={(e) => setSearchFilters(prev => ({ ...prev, salaryMax: parseInt(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Статус */}
                  <div>
                    <label className="block text-[#8B8B8B] text-sm mb-2">Статус</label>
                    <select
                      value={searchFilters.status}
                      onChange={(e) => setSearchFilters(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full bg-[#1A1A1A] border border-[#383838] rounded-lg px-3 py-2 text-white"
                    >
                      <option value="all">Все</option>
                      <option value="ufa">НСА</option>
                      <option value="rfa">ОСА</option>
                    </select>
                  </div>

                  {/* Кнопка поиска */}
                  <button
                    onClick={performSearch}
                    className="w-full bg-[#212121] hover:bg-[#2a2a2a] text-[#909090] font-medium px-6 py-2 rounded-full transition-colors mt-6"
                  >
                    Поиск
                  </button>
                </div>
              </div>

              {/* Правая часть - результаты поиска */}
              <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  {searchResults.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-[#8B8B8B]">
                        <p className="text-xl">Нажмите "Поиск" для отображения результатов</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {searchResults.map((player) => {
                        const age = PlayerUtils.calculateAge(player.birthDate);
                        const team = teams.find(t => t.name === player.club);
                        const shortName = `${player.firstName.charAt(0)}. ${player.lastName}`;
                        const isSelected = selectedSearchPlayer?.id === player.id;

                        // Перевод позиций на русский
                        const getPositionRu = (position: string) => {
                          switch(position) {
                            case 'G': return 'ВРТ';
                            case 'D': return 'ЗАЩ';
                            case 'C': return 'ЦТР';
                            case 'LW': return 'ЛНП';
                            case 'RW': return 'ПНП';
                            default: return position;
                          }
                        };

                        return (
                          <div key={player.id}>
                            <div
                              onClick={() => handleSearchPlayerSelect(player)}
                              className={`rounded-lg pt-4 px-4 pb-0 hover:bg-[#222] transition-colors relative overflow-hidden cursor-pointer ${
                                isSelected
                                  ? 'bg-[#2A2A2A] border-2 border-blue-500'
                                  : 'bg-[#1A1A1A] border border-[#383838]'
                              }`}
                            >
                              <div className="grid grid-cols-5 gap-4 items-center h-16">
                                {/* Позиция */}
                                <div className="text-white font-medium">
                                  {getPositionRu(player.position)}
                                </div>

                                {/* Фото и имя */}
                                <div className="relative flex items-center">
                                  <img
                                    src={player.photoUrl}
                                    alt={`${player.firstName} ${player.lastName}`}
                                    className="w-20 h-20 object-cover rounded absolute left-[-6rem] bottom-0"
                                    style={{ transform: 'translateY(50%)' }}
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = PlayerUtils.getDefaultPhotoPath(player.position);
                                    }}
                                  />
                                  <span className="text-white font-medium whitespace-nowrap">{shortName}</span>
                                </div>

                                {/* Возраст */}
                                <div className="text-white font-medium text-center">
                                  {age}
                                </div>

                                {/* Общий рейтинг */}
                                <div className="text-white font-medium text-center">
                                  {player.overallRating}
                                </div>

                                {/* Логотип команды */}
                                <div className="flex items-center justify-center">
                                  <img
                                    src={team?.logo || '/logo/default.png'}
                                    alt={player.club}
                                    className="w-12 h-12 object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = '/logo/default.png';
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Кнопки действий для выбранного игрока */}
                            {isSelected && (
                              <div className="flex gap-3 mt-3 px-4 pb-4">
                                <button
                                  onClick={() => handleSignFromSearch(player)}
                                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                                >
                                  ✍️ Подписать
                                </button>
                                <button
                                  onClick={() => handleAddToWishlist(player)}
                                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                                >
                                  📋 Добавить в список
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Попап переговоров с НСА */}
      {showContractNegotiation && negotiatingPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[80]">
          <div className="bg-[#1A1A1A] border border-[#AFAFAF] rounded-xl p-8 max-w-2xl w-full mx-8">
            {/* Заголовок */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Переговоры с НСА</h2>
              <button
                onClick={handleCloseContractNegotiation}
                className="w-8 h-8 bg-[#383838] hover:bg-[#555] text-white rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>

            {/* Информация об игроке */}
            <div className="bg-[#2A2A2A] rounded-lg p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={negotiatingPlayer.photoUrl}
                  alt={`${negotiatingPlayer.firstName} ${negotiatingPlayer.lastName}`}
                  className="w-20 h-20 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = PlayerUtils.getDefaultPhotoPath(negotiatingPlayer.position);
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {negotiatingPlayer.firstName} {negotiatingPlayer.lastName}
                  </h3>
                  <div className="flex items-center gap-4 text-[#8B8B8B]">
                    <span className="text-lg">Рейтинг: {negotiatingPlayer.overallRating}</span>
                    <span>•</span>
                    <span>Возраст: {PlayerUtils.calculateAge(negotiatingPlayer.birthDate)} лет</span>
                  </div>
                </div>
              </div>

              {/* Ожидаемая зарплата и информация о команде */}
              <div className="bg-[#1A1A1A] rounded-lg p-4">
                <div className="text-white font-medium mb-2">Ожидания игрока:</div>
                <div className="text-[#8B8B8B]">
                  Зарплата: ~{ContractNegotiation.calculateExpectedSalary(negotiatingPlayer)} млн ₽/год
                </div>
                {(() => {
                  const age = PlayerUtils.calculateAge(negotiatingPlayer.birthDate);
                  const contractRange = ContractNegotiation.getAcceptableContractRange(age);
                  return (
                    <div className="text-[#8B8B8B] mt-1">
                      Длина контракта: {contractRange.min === contractRange.max
                        ? `${contractRange.preferred} год${contractRange.preferred === 1 ? '' : contractRange.preferred < 5 ? 'а' : 'лет'}`
                        : `${contractRange.min}-${contractRange.max} лет (предпочитает ${contractRange.preferred})`
                      }
                    </div>
                  );
                })()}
                {negotiatingPlayer.favoriteClubs.length > 0 && (
                  <div className="text-[#8B8B8B] mt-1">
                    Любимые клубы: {negotiatingPlayer.favoriteClubs.join(', ')}
                  </div>
                )}

                {/* Информация о зарплатном потолке и лимитах ростера */}
                {selectedTeamId && (() => {
                  const capInfo = RosterManager.checkSalaryCap(selectedTeamId, 0);
                  const rosterStats = RosterManager.getRosterStats(selectedTeamId);
                  return (
                    <div className="mt-3 pt-3 border-t border-[#383838]">
                      <div className="text-white font-medium mb-1">Состояние команды:</div>

                      {/* Лимиты ростера */}
                      <div className="text-[#8B8B8B] text-sm">
                        Всего игроков: {rosterStats.totalPlayers}/40
                      </div>
                      <div className="text-[#8B8B8B] text-sm">
                        One-way контракты: {rosterStats.oneWayPlayers}/25
                      </div>
                      <div className="text-[#8B8B8B] text-sm">
                        Two-way контракты: {rosterStats.twoWayPlayers}
                      </div>

                      {/* Зарплатный потолок */}
                      <div className="text-[#8B8B8B] text-sm mt-1">
                        Зарплатные обязательства: {capInfo.currentTotal} млн ₽ / {capInfo.capLimit} млн ₽
                      </div>
                      <div className="text-[#8B8B8B] text-sm">
                        Свободно: {capInfo.capLimit - capInfo.currentTotal} млн ₽
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Форма предложения */}
            <div className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Предлагаемая зарплата (млн ₽/год)</label>
                <input
                  type="number"
                  min="1"
                  max="200"
                  defaultValue={ContractNegotiation.calculateExpectedSalary(negotiatingPlayer)}
                  className="w-full bg-[#2A2A2A] border border-[#383838] rounded-lg px-4 py-2 text-white"
                  id="salary-offer"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Длительность контракта (лет)</label>
                <select
                  defaultValue="3"
                  className="w-full bg-[#2A2A2A] border border-[#383838] rounded-lg px-4 py-2 text-white"
                  id="contract-length"
                >
                  <option value="1">1 год</option>
                  <option value="2">2 года</option>
                  <option value="3">3 года</option>
                  <option value="4">4 года</option>
                  <option value="5">5 лет</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Тип контракта</label>
                <select
                  defaultValue={negotiatingPlayer.overallRating >= 70 ? 'one-way' : 'two-way'}
                  className="w-full bg-[#2A2A2A] border border-[#383838] rounded-lg px-4 py-2 text-white"
                  id="contract-type"
                >
                  <option value="one-way">One-way (основной состав)</option>
                  <option value="two-way">Two-way (основной/фарм)</option>
                </select>
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => {
                  const salaryInput = document.getElementById('salary-offer') as HTMLInputElement;
                  const lengthSelect = document.getElementById('contract-length') as HTMLSelectElement;
                  const typeSelect = document.getElementById('contract-type') as HTMLSelectElement;

                  const salaryOffer = parseInt(salaryInput.value);
                  const contractLength = parseInt(lengthSelect.value);
                  const contractType = typeSelect.value as 'one-way' | 'two-way';

                  // Проверяем лимиты ростера
                  const currentRoster = PlayersDataManager.getTeamPlayers(selectedTeamId || '');
                  const rosterCheck = RosterManager.checkRosterLimits(currentRoster, contractType);
                  if (!rosterCheck.canAddPlayer) {
                    alert(`🚫 ${rosterCheck.limitMessage}\n\nТекущее состояние ростера:\n• Всего игроков: ${rosterCheck.totalPlayers}/40\n• One-way контракты: ${rosterCheck.oneWayPlayers}/25\n• Two-way контракты: ${rosterCheck.twoWayPlayers}`);
                    return;
                  }

                  // Проверяем зарплатный потолок
                  const capCheck = RosterManager.checkSalaryCap(selectedTeamId || '', salaryOffer);
                  if (!capCheck.isValid) {
                    alert(`🚫 Превышение зарплатного потолка!\n\nТекущие обязательства: ${capCheck.currentTotal} млн ₽\nПосле подписания: ${capCheck.newTotal} млн ₽\nЛимит: ${capCheck.capLimit} млн ₽\n\nПревышение на ${capCheck.newTotal - capCheck.capLimit} млн ₽`);
                    return;
                  }

                  const offer = {
                    playerId: negotiatingPlayer.id,
                    teamId: selectedTeamId || '',
                    salaryOffer,
                    contractLength,
                    contractType
                  };

                  const result = ContractNegotiation.evaluateContractOffer(negotiatingPlayer, offer);

                  if (result.isAccepted) {
                    // Подписываем игрока
                    const contractDetails = {
                      salary: salaryOffer,
                      contractLength,
                      contractType,
                      endDate: RosterManager.calculateContractEndDate(contractLength)
                    };

                    const success = RosterManager.signFreeAgent(negotiatingPlayer, selectedTeamId || '', contractDetails);

                    if (success) {
                      // Удаляем игрока из wishlist если он там есть
                      removeFromWishlist(negotiatingPlayer.id);

                      // Если удаляем выбранного игрока, переключаемся на следующего
                      if (selectedPlayer?.id === negotiatingPlayer.id) {
                        const updatedWishlist = wishlist.filter(p => p.id !== negotiatingPlayer.id);
                        if (updatedWishlist.length > 0) {
                          setSelectedPlayer(updatedWishlist[0]);
                        } else {
                          setSelectedPlayer(null);
                        }
                      }

                      // Обновляем результаты поиска (убираем подписанного игрока)
                      setSearchResults(prev => prev.filter(p => p.id !== negotiatingPlayer.id));

                      alert(`✅ ${negotiatingPlayer.lastName} подписан!\n\n💰 Зарплата: ${salaryOffer} млн ₽/год\n📅 Контракт: ${contractLength} лет\n📋 Тип: ${contractType}\n\nИгрок добавлен в ростер вашей команды!\n\n${result.reasons.join('\n')}`);
                      handleCloseContractNegotiation();
                    } else {
                      alert('❌ Ошибка при подписании игрока');
                    }
                  } else if (result.category === 'counter') {
                    alert(`🤝 ${negotiatingPlayer.lastName} готов к переговорам!\n\nКонтрпредложение:\n• Зарплата: ${result.counterOffer?.salary} млн ₽\n• Длительность: ${result.counterOffer?.contractLength} лет\n\n${result.reasons.join('\n')}`);
                  } else {
                    alert(`❌ ${negotiatingPlayer.lastName} отклонил предложение\n\n${result.reasons.join('\n')}`);
                  }
                }}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                💼 Сделать предложение
              </button>

              <button
                onClick={() => {
                  const recommended = ContractNegotiation.getRecommendedOffer(negotiatingPlayer, selectedTeamId || '');
                  const salaryInput = document.getElementById('salary-offer') as HTMLInputElement;
                  const lengthSelect = document.getElementById('contract-length') as HTMLSelectElement;
                  const typeSelect = document.getElementById('contract-type') as HTMLSelectElement;

                  salaryInput.value = recommended.salaryOffer.toString();
                  lengthSelect.value = recommended.contractLength.toString();
                  typeSelect.value = recommended.contractType;
                }}
                className="bg-[#383838] hover:bg-[#555] text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                💡 Рекомендуемое
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
