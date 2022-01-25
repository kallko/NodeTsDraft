import bcrypt from "bcryptjs";

import { userService } from "../service/userService";
import { LoginData, UserCreationProps } from "../@type/user";
interface LoginResult {
  success: boolean;
  token?: string;
  errorMessage?: string;
}

export const userController = {
  async createUser(user: UserCreationProps) {
    return userService.createUser(user);
  },
  async login(auth: LoginData): Promise<LoginResult> {
    const { login, password } = auth;
    const user = await userService.getUserByLogin(login);
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user?.password);
      if (isPasswordCorrect) {
        return {
          success: true,
          // todo createToken
          token: "1234",
        };
      } else {
        return {
          success: false,
          errorMessage: "Password is wrong",
        };
      }
    }
    return {
      success: false,
      errorMessage: `User with login: ${login} not exists`,
    };
  },
};
