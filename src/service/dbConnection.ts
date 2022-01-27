import { connect } from "mongoose";
import { initData } from "./migrations/initData";

export async function setupMongoose(): Promise<void> {
  try {
    const db = await connect("mongodb://172.20.0.1:27017/Quiz", {});
    if (!db.modelNames().includes("User")) {
      console.log("First start. Let add initial data.");
      await initData.addData();
    }
  } catch (err) {
    console.error("Connection to DB error: ", err);
  }
}
