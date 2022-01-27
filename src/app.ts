import express from "express";
import { authMiddleware } from "./middleware/auth";
import { dataValidateMiddleware } from "./middleware/dataValidation";
import { setupMongoose } from "./service/dbConnection";
const router = require("./router/routes");

const app = express();

const PORT: number = 5000;
setupMongoose();
app.use(express.json());
app.use(authMiddleware);
app.use(dataValidateMiddleware);
app.use("/", router);

app.listen(PORT, () => {
  console.info(`Ready on port ${PORT}`);
});
