import { Answer, Question, Quiz } from "../@type/quiz";
import { quizService } from "../service/quizService";
import { statisticController } from "./statisticController";

export const quizController = {
  async create(options: { userId: number; quiz: Quiz }) {
    const { userId, quiz } = options;
    quiz.authorId = userId;
    return quizService.create(quiz);
  },
  async getQuizForPlay(authorId: number) {
    const result = await quizService.getQuizExcludeAuthor(authorId);
    result?.[0].questions.forEach((question: Question) => {
      question.answers.forEach((answer: Answer) => delete answer.correct);
    });
    return result;
  },
  async checkAnswers(options: {
    answerIds: any;
    id: string;
    authorId: number;
  }) {
    const { id, answerIds, authorId } = options;

    const quiz = await quizService.getById(id);
    // todo move to statistic controller
    // todo if no quiz?
    const result = {
      score: 0,
      questions: quiz?.questions.length,
    };
    quiz?.questions.forEach((question, index) => {
      if (answerIds[index] && question.answers[answerIds[index] - 1]?.correct) {
        result.score++;
      }
    });
    console.log("Result Answer ", result);
    await statisticController.createStatistic({
      authorId,
      quizId: id,
      score: result.score,
      questions: result.questions || 0,
    });
    return result;
  },
};
