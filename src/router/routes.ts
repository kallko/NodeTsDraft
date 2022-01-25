import * as express from "express";
import { userController } from "../controller/userController";
import { quizController } from "../controller/quizController";
import { quizService } from "../service/quizService";
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
  .route("/quiz/create")
  .post(async function (req: express.Request, res: express.Response) {
    if (!req["user"]) {
      throw new Error("You Are not authorized");
    }
    try {
      const result = await quizController.create({
        userId: req["user"],
        quiz: req.body,
      });
      res.json({ response: "test route success", result });
    } catch (e: any) {
      console.error("ERROR  " + e + e.stack);
    }
  });

router
  .route("/quiz")
  .get(async function (req: express.Request, res: express.Response) {
    try {
      const result = await quizService.getQuizForUser(req.user || 0);
      res.json(result || { errorMessage: "No quiz created" });
    } catch (err: any) {
      res.status(404).send(err.message);
    }
  });

router
  .route("/quiz/:id")
  .delete(async function (req: express.Request, res: express.Response) {
    try {
      const result = await quizService.delete(req.user || 0, req.params.id);
      res.json(result);
    } catch (err: any) {
      res.status(404).send(err.message);
    }
  });

router
  .route("/quiz/play")
  .get(async function (req: express.Request, res: express.Response) {
    try {
      const result = await quizController.getQuizForPlay(req.user || 0);
      res.json({ result });
    } catch (e: any) {
      console.error("ERROR " + e + e.stack);
    }
  });

router
  .route("/quiz/:id/answer")
  .post(async function (req: express.Request, res: express.Response) {
    try {
      const result = await quizController.checkAnswers({
        id: req.params.id,
        answerIds: req.body,
      });
      res.json(result);
    } catch (e: any) {
      console.error("ERROR " + e + e.stack);
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
