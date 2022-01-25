export interface Answer {
  text: string;
  correct?: boolean | string;
}

export interface Question {
  text: string;
  answers: Answer[];
}

export interface QuizCreationProps {
  title: string;
  questions: Question[];
}

export interface Quiz extends QuizCreationProps {
  authorId: number;
}
