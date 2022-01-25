import * as mongoose from "mongoose";
import bcrypt from "bcryptjs";

import { User, UserCreationProps } from "../@type/user";
import { UserSchema } from "./schema/user";
const UserModel = mongoose.model<User>("User", UserSchema);
const projection = {
  _id: 0,
  id: 1,
  login: 1,
  password: 1,
};

export const userService = {
  async createUser(user: UserCreationProps): Promise<string> {
    try {
      const { login, password } = user;
      const existUser = await UserModel.findOne({ login }, projection);
      if (existUser) {
        return `User with login: ${login} already exists`;
      }
      const id = await userService.getNewIdForUser();
      const encryptedPassword = bcrypt.hashSync(password, 8);
      await new UserModel({ id, login, password: encryptedPassword }).save();
      return `User with login: ${login} created. Id is ${id}`;
    } catch (err) {
      return `Error ${err}`;
    }
  },
  async getNewIdForUser(): Promise<number> {
    const userWithMaxId = await UserModel.findOne({}, projection)
      .sort([["id", -1]])
      .limit(1);
    if (!userWithMaxId) {
      return 1;
    }
    return userWithMaxId.id + 1;
  },
  async getUserByLogin(login: string) {
    return UserModel.findOne({ login }, projection);
  },
};
