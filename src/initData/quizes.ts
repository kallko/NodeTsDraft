import { QuizCreationProps } from "../@type/quiz";

// todo init import data
export const quiz1: QuizCreationProps = {
  title: "Star Wars 4",
  questions: [
    {
      text: "How many planets was destroyed by Death Star?",
      answers: [
        {
          text: "0",
          correct: false,
        },
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
      ],
    },
  ],
};

export const quiz2: QuizCreationProps = {
  title: "Star Wars 5",
  questions: [
    {
      text: "Where was rebel's base?",
      answers: [
        {
          text: "planet Nabu",
          correct: false,
        },
        {
          text: "planet Jaku",
          correct: false,
        },
        {
          text: "planet Hoth",
          correct: true,
        },
        {
          text: "planet Earth",
          correct: false,
        },
      ],
    },
    {
      text: "Who is Darth Vader?",
      answers: [
        {
          text: "Luck's Father",
          correct: true,
        },
        {
          text: "Jedi Knight",
          correct: false,
        },
        {
          text: "Sith Emperor",
          correct: false,
        },
        {
          text: "Luck's San",
          correct: false,
        },
      ],
    },
    {
      text: "Joda is...",
      answers: [
        {
          text: "super Master",
          correct: false,
        },
        {
          text: "grand Master",
          correct: false,
        },
        {
          text: "Master - lomaster",
          correct: true,
        },
      ],
    },
  ],
};

export const quiz3: QuizCreationProps = {
  title: "Star Wars 6",
  questions: [
    {
      text: "Who killed Jaba?",
      answers: [
        {
          text: "Han Solo",
          correct: false,
        },
        {
          text: "Princess Leya",
          correct: true,
        },
        {
          text: "Luck Skywalker",
          correct: false,
        },
      ],
    },
    {
      text: "When this film was released",
      answers: [
        {
          text: "1979",
          correct: false,
        },
        {
          text: "1985",
          correct: true,
        },
        {
          text: "1983",
          correct: true,
        },
      ],
    },
  ],
};
