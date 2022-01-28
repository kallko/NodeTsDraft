import { Schema } from "mongoose";

// todo check index in all schemas
export const StatisticSchema = new Schema(
  {
    quizId: { type: String },
    questions: { type: Number },
    authorId: { type: String },
    score: { type: Number },
  },
  { strict: true }
);
