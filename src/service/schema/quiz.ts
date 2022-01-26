import { Schema } from "mongoose";

export const QuizSchema = new Schema(
  {
    title: { type: String, index: true },
    questions: { type: JSON },
    authorId: { type: String },
  },
  { strict: true }
);
