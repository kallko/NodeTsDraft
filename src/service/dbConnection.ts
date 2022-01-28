import { connect } from "mongoose";
import { initData } from "./migrations/initData";
import { userService } from "./userService";

export function setupMongoose(): void {
  connect("mongodb://172.21.0.1:27017/Quiz", {})
    .then(async (_db) => {
      const userCount = (await userService.getNewIdForUser()) - 1;
      if (userCount === 0) {
        console.log("First start. Let add initial data.");
        await initData.addData();
      }
    })
    .catch((err) => {
      console.log("Mongo DB connection error: ", err);
    });
}
