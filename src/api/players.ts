import { Player, TeamRoster, Transfer, ContractHistory, Contract } from '../types/player';

// Класс для управления игроками
export class PlayerManager {
  private players: Map<string, Player> = new Map();
  private teamRosters: Map<string, TeamRoster> = new Map();
  private transfers: Transfer[] = [];
  private contractHistories: Map<string, ContractHistory> = new Map();

  // Загрузка данных игроков
  async loadPlayersData(): Promise<void> {
    try {
      // В будущем здесь будет загрузка из JSON файлов или API
      console.log('Loading players data...');
    } catch (error) {
      console.error('Error loading players data:', error);
    }
  }

  // Получить игрока по ID
  getPlayer(playerId: string): Player | undefined {
    return this.players.get(playerId);
  }

  // Получить всех игроков команды
  getTeamRoster(teamId: string): Player[] {
    const roster = this.teamRosters.get(teamId);
    return roster ? roster.players : [];
  }

  // Добавить игрока
  addPlayer(player: Player): void {
    this.players.set(player.id, player);
    this.updateTeamRoster(player.teamId, player);
  }

  // Обновить игрока
  updatePlayer(playerId: string, updates: Partial<Player>): void {
    const player = this.players.get(playerId);
    if (player) {
      const updatedPlayer = { ...player, ...updates };
      this.players.set(playerId, updatedPlayer);
      this.updateTeamRoster(updatedPlayer.teamId, updatedPlayer);
    }
  }

  // Перевести игрока в другую команду
  transferPlayer(playerId: string, fromTeamId: string, toTeamId: string, transferDetails?: any): void {
    const player = this.players.get(playerId);
    if (player && player.teamId === fromTeamId) {
      // Обновляем команду игрока
      player.teamId = toTeamId;
      this.players.set(playerId, player);

      // Удаляем из старой команды
      this.removePlayerFromTeam(fromTeamId, playerId);
      
      // Добавляем в новую команду
      this.updateTeamRoster(toTeamId, player);

      // Записываем трансфер
      const transfer: Transfer = {
        id: `transfer_${Date.now()}_${playerId}`,
        playerId,
        fromTeamId,
        toTeamId,
        transferDate: new Date().toISOString().split('T')[0],
        transferType: 'trade',
        details: transferDetails
      };
      this.transfers.push(transfer);
    }
  }

  // Продлить контракт игрока
  extendContract(playerId: string, newContract: Contract): void {
    const player = this.players.get(playerId);
    if (player) {
      // Сохраняем старый контракт в историю
      this.addContractToHistory(playerId, player.contract, player.teamId);
      
      // Обновляем контракт
      player.contract = newContract;
      this.players.set(playerId, player);
    }
  }

  // Завершить карьеру игрока
  retirePlayer(playerId: string): void {
    const player = this.players.get(playerId);
    if (player) {
      player.status = 'retired';
      player.contract.isActive = false;
      this.players.set(playerId, player);
      
      // Удаляем из команды
      this.removePlayerFromTeam(player.teamId, playerId);

      // Записываем "трансфер" как завершение карьеры
      const retirement: Transfer = {
        id: `retirement_${Date.now()}_${playerId}`,
        playerId,
        fromTeamId: player.teamId,
        toTeamId: 'retired',
        transferDate: new Date().toISOString().split('T')[0],
        transferType: 'retirement'
      };
      this.transfers.push(retirement);
    }
  }

  // Получить историю трансферов
  getTransferHistory(playerId?: string): Transfer[] {
    if (playerId) {
      return this.transfers.filter(t => t.playerId === playerId);
    }
    return this.transfers;
  }

  // Получить историю контрактов игрока
  getContractHistory(playerId: string): ContractHistory | undefined {
    return this.contractHistories.get(playerId);
  }

  // Приватные методы
  private updateTeamRoster(teamId: string, player: Player): void {
    let roster = this.teamRosters.get(teamId);
    if (!roster) {
      roster = {
        teamId,
        players: [],
        lastUpdated: new Date().toISOString()
      };
    }
    
    // Удаляем игрока если он уже есть, затем добавляем обновленного
    roster.players = roster.players.filter(p => p.id !== player.id);
    roster.players.push(player);
    roster.lastUpdated = new Date().toISOString();
    
    this.teamRosters.set(teamId, roster);
  }

  private removePlayerFromTeam(teamId: string, playerId: string): void {
    const roster = this.teamRosters.get(teamId);
    if (roster) {
      roster.players = roster.players.filter(p => p.id !== playerId);
      roster.lastUpdated = new Date().toISOString();
      this.teamRosters.set(teamId, roster);
    }
  }

  private addContractToHistory(playerId: string, contract: Contract, teamId: string): void {
    let history = this.contractHistories.get(playerId);
    if (!history) {
      history = {
        playerId,
        contracts: []
      };
    }
    
    history.contracts.push({
      ...contract,
      teamId,
      startDate: contract.signedDate
    });
    
    this.contractHistories.set(playerId, history);
  }
}

// Экспортируем единственный экземпляр менеджера
export const playerManager = new PlayerManager();
