import { connect } from "mongoose";

export function setupMongoose(): void {
    connect("mongodb://172.20.0.1:27017/Quiz", {})
        .then((_db) => {
            console.log("DB Connected");
        })
        .catch((err) => {
            console.log("Mongo DB connection error: ", err);
        });
}
