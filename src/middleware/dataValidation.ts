import { NextFunction, Request, Response } from "express";
import { validatorHelper as validator } from "../helper/validatorHelper";
const VALIDATION_ALERT = "Data in request not valid. Valid schema: ";
const LOGIN_SCHEMA = "{ login: string, password: string }";
const ANSWER_SCHEMA = "number[]";
const QUIZ_SCHEMA =
  "{ title: string, questions: { text: string, answers: { text: string, correct: false | true }[]}[] At least 1 question. At least 1 answer for every question";

export const dataValidateMiddleware = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.method === "POST") {
    let dataValidationRoute = validator.removeMongoDbIdFromReqPath(req.path);
    switch (dataValidationRoute) {
      case "/register":
      case "/login": {
        return !validator.isValidaLoginData(req.body)
          ? next(new Error(VALIDATION_ALERT + LOGIN_SCHEMA))
          : next();
      }
      case "/quiz/create": {
        return !validator.isValidaQuizData(req.body)
          ? next(new Error(VALIDATION_ALERT + QUIZ_SCHEMA))
          : next();
      }
      case "/quiz/answer": {
        return !validator.isValidQuizAnswerData(req.body)
          ? next(new Error(VALIDATION_ALERT + ANSWER_SCHEMA))
          : next();
      }
      default: {
        return next();
      }
    }
  }
  next();
};
