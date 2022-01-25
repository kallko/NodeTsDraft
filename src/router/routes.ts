import express from "express";
import { userController } from "../controller/userController";
const router = express.Router();
const serverStartTime = new Date();

router.route("/").get(function (req: express.Request, res: express.Response) {
  try {
    res.json({ response: "main route success", time: serverStartTime });
  } catch (e: any) {
    console.error("ERROR " + e + e.stack);
  }
});
router
  .route("/register")
  .post(async function (req: express.Request, res: express.Response) {
    try {
      const result = await userController.createUser(req.body);
      res.json(result);
    } catch (e: any) {
      console.error("ERROR " + e + e.stack);
    }
  });

router
  .route("/login")
  .post(async function (req: express.Request, res: express.Response) {
    try {
      const result = await userController.login(req.body);
      res.json(result);
    } catch (e: any) {
      console.error("ERROR " + e + e.stack);
    }
  });

router
  .route("/quiz/play")
  .get(function (req: express.Request, res: express.Response) {
    try {
      res.json({ response: "test route success", time: serverStartTime });
    } catch (e: any) {
      console.error("ERROR " + e + e.stack);
    }
  });

router
  .route("/quiz/create")
  .get(function (req: express.Request, res: express.Response) {
    try {
      res.json({ response: "test route success", time: serverStartTime });
    } catch (e: any) {
      console.error("ERROR  " + e + e.stack);
    }
  });

router
  .route("/user/statistic")
  .get(function (req: express.Request, res: express.Response) {
    try {
      res.json({ response: "test route success", time: serverStartTime });
    } catch (e: any) {
      console.error("ERROR " + e + e.stack);
    }
  });

router.route("/").post(function (req: express.Request, res: express.Response) {
  try {
    res.json({
      response: "main route success",
      time: serverStartTime,
      method: "Post",
    });
  } catch (e: any) {
    console.error("ERROR " + e + e.stack);
  }
});

module.exports = router;
