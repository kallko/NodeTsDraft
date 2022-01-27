import mongoose from "mongoose";
import { TokenSchema } from "./schema/token";
import { Token } from "../@type/token";
const TokenModel = mongoose.model<Token>("Token", TokenSchema);

export const tokenService = {
  async create(token: Token) {
    return new TokenModel(token).save();
  },
  async delete(userId: number) {
    return TokenModel.deleteOne({ userId });
  },
  async getByToken(token: string) {
    return TokenModel.findOne({ token });
  },
};
