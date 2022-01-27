import { Token } from "../@type/token";
import { tokenService } from "../service/tokenService";
import { v4 as uuidV4 } from "uuid";

export const tokenController = {
  async create(userId: number, token?: string) {
    if (!token) {
      await tokenService.delete(userId);
      token = token || uuidV4();
    }
    return tokenService.create({ userId, token });
  },
  async getByToken(token: string) {
    return tokenService.getByToken(token);
  },
  async updateToken(token: Token) {
    await tokenService.delete(token.userId);
    return tokenService.create({ token: token.token, userId: token.userId });
  },
};
