import { Player } from '@/types/player';
import { PlayersDataManager } from '@/data/players';

export class SalaryUtils {
  // Потолок зарплат в млн рублей
  static readonly SALARY_CAP = 900;

  // Получить общую зарплату команды
  static getTeamSalary(teamId: string): number {
    const players = PlayersDataManager.getTeamPlayers(teamId);
    return players.reduce((total, player) => {
      // Поддерживаем обе структуры данных
      const salaryAmount = player.salary?.amount || (player.contract as any)?.salaryPerYear || 0;
      return total + salaryAmount;
    }, 0);
  }

  // Получить оставшееся место под потолком
  static getRemainingCap(teamId: string): number {
    return this.SALARY_CAP - this.getTeamSalary(teamId);
  }

  // Проверить, влезает ли сделка в потолок зарплат
  static canAffordTrade(teamId: string, givingPlayers: Player[], receivingPlayers: Player[]): boolean {
    const currentSalary = this.getTeamSalary(teamId);
    const givingSalary = givingPlayers.reduce((sum, p) => sum + (p.salary?.amount || (p.contract as any)?.salaryPerYear || 0), 0);
    const receivingSalary = receivingPlayers.reduce((sum, p) => sum + (p.salary?.amount || (p.contract as any)?.salaryPerYear || 0), 0);

    const newSalary = currentSalary - givingSalary + receivingSalary;
    return newSalary <= this.SALARY_CAP;
  }

  // Получить изменение зарплаты от сделки
  static getTradeSalaryImpact(givingPlayers: Player[], receivingPlayers: Player[]): number {
    const givingSalary = givingPlayers.reduce((sum, p) => sum + (p.salary?.amount || (p.contract as any)?.salaryPerYear || 0), 0);
    const receivingSalary = receivingPlayers.reduce((sum, p) => sum + (p.salary?.amount || (p.contract as any)?.salaryPerYear || 0), 0);
    return receivingSalary - givingSalary;
  }

  // Получить процент использования потолка
  static getCapUsagePercent(teamId: string): number {
    return (this.getTeamSalary(teamId) / this.SALARY_CAP) * 100;
  }
}
