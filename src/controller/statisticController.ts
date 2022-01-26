import { statisticService } from "../service/statisticService";
import { Statistic } from "../@type/statistic";
import { statisticHelper } from "../helper/statisticHelper";

export const statisticController = {
  async createStatistic(options: Statistic) {
    return statisticService.create(options);
  },
  async getStatisticForUser(userId: number) {
    const statistics = await statisticService.getByAuthorId(userId);
    return {
      attempts: statistics?.length || 0,
      fullyCompleted:
        statistics?.filter(
          (statistic) => statistic.score === statistic.questions
        ).length || 0,
      fullyUnCompleted: statistics?.filter((statistic) => statistic.score === 0)
        .length,
      averageScore: `${statisticHelper.getAverage(statistics)} %`,
    };
  },
};
