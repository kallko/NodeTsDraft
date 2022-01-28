import { Schema } from "mongoose";

export const TokenSchema = new Schema(
  {
    token: { type: String, index: true, unique: true },
    userId: { type: Number, unique: true },
  },
  { strict: true }
);
