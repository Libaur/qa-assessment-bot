import data from "../questions.json" assert { type: "json" };
import { Questions } from "contracts/index.ts";
import { KEYBOARD_BUTTONS } from "../constants/index.ts";

const questions: Questions = data;
const allQuestions = [...data.base, ...data.process, ...data.technical, ...data.expertise];

function getRandomQuestion(topicTitle: string) {
  if (topicTitle === "random") {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    const numQuestions = Math.floor(Math.random() * allQuestions.length) + 1;
    return shuffledQuestions[numQuestions]
  }
  const randomQuestionIndex = Math.floor(
    Math.random() * questions[topicTitle as keyof Questions].length
  );
  return questions[topicTitle as keyof Questions][randomQuestionIndex];
}

function convertTopicTitleToCode(topicTitle: string) {
  switch (true) {
    case topicTitle === KEYBOARD_BUTTONS.QUESTIONS_OPTIONS.PROCESS:
      return "process";
    case topicTitle === KEYBOARD_BUTTONS.QUESTIONS_OPTIONS.TECHICAL:
      return "technical";
    case topicTitle === KEYBOARD_BUTTONS.QUESTIONS_OPTIONS.EXPERTISE:
      return "expertise";
    case topicTitle === KEYBOARD_BUTTONS.QUESTIONS_OPTIONS.RANDOM:
      return "random";
    default:
      return "base";
  }
}

export { getRandomQuestion, convertTopicTitleToCode };
