import { Statistic } from "../@type/statistic";

export const statisticHelper = {
  getAverage(statistics: Statistic[]) {
    const questions =
      statistics?.reduce((sum, statistic) => {
        return sum + statistic.questions;
      }, 0) || 1;
    const scores =
      statistics?.reduce((sum, statistic) => {
        return sum + statistic.score;
      }, 0) || 0;
    return ((scores / questions) * 100).toFixed(2);
  },
};
