import { NextFunction, Request, Response } from "express";
import { tokenController } from "../controller/tokenController";
const whiteList = ["/register", "/login"];
const AUTO_LOGOUT_TIME = 60 * 60 * 1000;

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
      if (token || !isActive(token)) {
        req.user = token?.userId;
        await tokenController.updateToken(token!);
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

const isActive = (token: any) => {
  return (
    token &&
    Date.now() - parseInt(token!._id.toString().slice(0, 8), 16) * 1000 <
      AUTO_LOGOUT_TIME
  );
};
