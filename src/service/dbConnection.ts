import { connect } from "mongoose";
import { initData } from "./migrations/initData";
import { UserSchema } from "./schema/user";
import { userService } from "./userService";

export async function setupMongoose(): Promise<void> {
  try {
    await connect("mongodb://172.20.0.1:27017/Quiz", {});
    const userCount = (await userService.getNewIdForUser()) - 1;
    console.log("User count ", userCount);
    if (userCount === 0) {
      console.log("First start. Let add initial data. ");
      await initData.addData();
    }
  } catch (err) {
    console.error("Connection to DB error: ", err);
  }
}
