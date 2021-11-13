import * as express from "express";
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
  .route("/test/")
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
