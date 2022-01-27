import { userService } from "../userService";
import { quizService } from "../quizService";
import { quiz1, quiz2, quiz3 } from "../../initData/quizes";

export const initData = {
  addData: async () => {
    await userService.createUser({ login: "admin", password: "admin" });
    const admin = await userService.getUserByLogin("admin");
    await quizService.create({ ...quiz1, authorId: admin!.id });
    await quizService.create({ ...quiz2, authorId: admin!.id });
    await quizService.create({ ...quiz3, authorId: admin!.id });
  },
};
