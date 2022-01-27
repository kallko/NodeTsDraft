export const validatorHelper = {
  isValidaLoginData: (loginData: any) => {
    return (
      typeof loginData?.login === "string" &&
      loginData?.login?.length > 0 &&
      typeof loginData?.password === "string" &&
      loginData?.password?.length > 0
    );
  },
  isValidaQuizData: (quizData: any) => {
    return (
      typeof quizData?.title === "string" &&
      quizData?.title?.length > 0 &&
      Array.isArray(quizData?.questions) &&
      quizData.questions.length > 0 &&
      quizData.questions.every(
        (question: any) =>
          typeof question?.text === "string" &&
          Array.isArray(question?.answers) &&
          question.answers.length > 0 &&
          question.answers.every(
            (answer: any) =>
              typeof answer?.text === "string" &&
              ((typeof answer?.correct === "string" &&
                (answer.correct === "true" || answer.correct === "false")) ||
                typeof answer?.correct === "boolean")
          )
      )
    );
  },
  isValidQuizAnswerData: (quizAnswer: any) => {
    return (
      Array.isArray(quizAnswer) &&
      quizAnswer.length > 0 &&
      quizAnswer.every((answerId) => Number.isInteger(answerId) && answerId > 0)
    );
  },
  removeMongoDbIdFromReqPath: (path: string) => {
    const pathElements = path.split("/");
    const mongoDbId = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.exec(
      <string>pathElements[pathElements.length - 1]
    )?.input;
    return mongoDbId ? path.replace("/" + mongoDbId, "") : path;
  },
};
