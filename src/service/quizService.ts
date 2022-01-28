import { Quiz } from "../@type/quiz";
import * as mongoose from "mongoose";
import { QuizSchema } from "./schema/quiz";
const ObjectId = require("mongodb").ObjectId;

const deleteProjection = {
  _id: 1,
  title: 1,
  questions: 1,
};
const adminProjection = {
  _id: 1,
  title: 1,
};

const QuizModel = mongoose.model<Quiz>("Quiz", QuizSchema);

export const quizService = {
  async create(quiz: Quiz) {
    quiz.questions.forEach((question) =>
      question.answers.forEach(
        (answer) => (answer.correct = answer.correct === "true")
      )
    );
    await new QuizModel(quiz).save();
  },
  async getById(_id: string) {
    return QuizModel.findOne({
      _id: ObjectId(_id),
    });
  },
  async delete(authorId: number, _id: string) {
    const quiz = await QuizModel.findOne(
      { _id: ObjectId(_id), authorId },
      deleteProjection
    );
    if (!quiz) {
      return { success: false };
    }
    await quiz.deleteOne();
    return { success: true };
  },
  async getQuizForUser(authorId: number) {
    return QuizModel.find(
      {
        authorId,
      },
      adminProjection
    );
  },
  async getQuizExcludeAuthor(authorId: number) {
    return QuizModel.aggregate([
      {
        $match: {
          authorId: { $ne: authorId.toString() },
        },
      },
      { $sample: { size: 1 } },
    ]);
  },
};
