import mongoose from "mongoose";
import { Statistic } from "../@type/statistic";
import { StatisticSchema } from "./schema/statistic";

const StatisticModel = mongoose.model<Statistic>("Statistic", StatisticSchema);

export const statisticService = {
  async create(options: Statistic) {
    const { quizId, questions, authorId, score } = options;
    await new StatisticModel({ quizId, questions, authorId, score }).save();
  },
  async getByAuthorId(authorId: number): Promise<Statistic[]> {
    console.log("Test1");
    return StatisticModel.find({ authorId });
  },
};
