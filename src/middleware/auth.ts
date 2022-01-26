import { NextFunction, Request, Response } from "express";
const whiteList = ["/register", "/login"];

export const authMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (
    req.headers?.["x-api-key"] === "123" ||
    whiteList.some((route) => req.originalUrl?.startsWith(route))
  ) {
    // todo find user here
    req.user = 1;
    next();
  } else {
    res.status(401);
    next(new Error("You Are not authorized"));
  }
};
