import { expect } from "chai";
import { statisticHelper } from "../src/helper/statisticHelper";
import { Statistic } from "../src/@type/statistic";
import { validatorHelper } from "../src/helper/validatorHelper";
import { quiz2 } from "../src/initData/quizes";

describe("Check helpers functions", () => {
  describe("statisticHelper", () => {
    it("getAverage for 5/10 should return 50.00", () => {
      const result = statisticHelper.getAverage([statistics[0]]);
      expect(result).equal("50.00");
    });
    it("getAverage for 5/10 and 0/10 should return 25.00", () => {
      const result = statisticHelper.getAverage([statistics[0], statistics[1]]);
      expect(result).equal("25.00");
    });
    it("getAverage for 5/10 and 0/10 and 5/10 should return 33.33", () => {
      const result = statisticHelper.getAverage(statistics);
      expect(result).equal("33.33");
    });
  });
  describe("validatorHelper", () => {
    it("validate login data should not accept empty object", () => {
      const result = validatorHelper.isValidaLoginData({});
      expect(result).equal(false);
    });
    it("validate login data should not accept object without login", () => {
      const result = validatorHelper.isValidaLoginData({ foo: "bar" });
      expect(result).equal(false);
    });
    it("validate login data should not accept object without login", () => {
      const result = validatorHelper.isValidaLoginData({ login: "bar" });
      expect(result).equal(false);
    });
    it("validate login data should accept object with login string and password string", () => {
      const result = validatorHelper.isValidaLoginData({
        login: "bar",
        password: "foo",
      });
      expect(result).equal(true);
    });
    it("validate login data should not accept object with login number and password string", () => {
      const result = validatorHelper.isValidaLoginData({
        login: 1,
        password: "foo",
      });
      expect(result).equal(false);
    });
    it("validate login data should not accept object with login string and password array", () => {
      const result = validatorHelper.isValidaLoginData({
        login: "foo",
        password: ["foo"],
      });
      expect(result).equal(false);
    });
    it("validate quiz data should not accept empty object", () => {
      const result = validatorHelper.isValidaQuizData({});
      expect(result).equal(false);
    });
    it("validate quiz data should accept valid quiz", () => {
      const testQuiz = JSON.parse(JSON.stringify(quiz2));
      const result = validatorHelper.isValidaQuizData(testQuiz);
      expect(result).equal(true);
    });
    it("validate quiz data should not accept quiz without questions", () => {
      const testQuiz = JSON.parse(JSON.stringify(quiz2));
      delete testQuiz.questions;
      const result = validatorHelper.isValidaQuizData(testQuiz);
      expect(result).equal(false);
    });
    it("validate quiz data should not accept quiz without answers", () => {
      const testQuiz = JSON.parse(JSON.stringify(quiz2));
      delete testQuiz.questions[0].answers;
      const result = validatorHelper.isValidaQuizData(testQuiz);
      expect(result).equal(false);
    });
    it("validate quiz data should not accept quiz without answer with correct field", () => {
      const testQuiz = JSON.parse(JSON.stringify(quiz2));
      delete testQuiz.questions[0].answers[0].correct;
      const result = validatorHelper.isValidaQuizData(testQuiz);
      expect(result).equal(false);
    });
    it("validate answer data should not accept empty array", () => {
      const result = validatorHelper.isValidaQuizData([]);
      expect(result).equal(false);
    });
    it("validate answer data should not accept array with string", () => {
      const result = validatorHelper.isValidaQuizData(["1", 1, 2]);
      expect(result).equal(false);
    });
    it("validate answer data should not accept number", () => {
      const result = validatorHelper.isValidaQuizData(1);
      expect(result).equal(false);
    });
    it("validate answer data should accept array of number", () => {
      const result = validatorHelper.isValidaQuizData([1, 2, 3, 4, 5]);
      expect(result).equal(false);
    });
  });
});

const statistics: Statistic[] = [
  { quizId: "11", score: 5, questions: 10, authorId: 0 },
  { quizId: "12", score: 0, questions: 10, authorId: 0 },
  { quizId: "13", score: 5, questions: 10, authorId: 0 },
];
