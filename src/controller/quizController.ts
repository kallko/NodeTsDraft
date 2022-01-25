import { Answer, Question, Quiz } from "../@type/quiz";
import { quizService } from "../service/quizService";

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
  async checkAnswers(options: { id: string; answerIds: number[] }) {
    const { id, answerIds } = options;

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
    return result;
  },
};
