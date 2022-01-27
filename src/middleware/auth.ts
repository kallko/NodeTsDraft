import { NextFunction, Request, Response } from "express";
import { tokenController } from "../controller/tokenController";
const whiteList = ["/register", "/login"];

export const authMiddleware = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userToken = req.headers?.["x-api-key"]?.toString();
  const noAuthRoute = whiteList.some((route) =>
    req.originalUrl?.startsWith(route)
  );
  if (userToken || noAuthRoute) {
    if (userToken && !noAuthRoute) {
      const token = await tokenController.getByToken(userToken);
      if (token) {
        req.user = token?.userId;
        await tokenController.updateToken(token);
      } else {
        res.status(401);
        next(new Error("You Are not authorized"));
      }
    }
    next();
  } else {
    res.status(401);
    next(new Error("You Are not authorized"));
  }
};
