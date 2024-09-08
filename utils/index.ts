import data from "../questions.json";
import { Questions } from "contracts";
import { KEYBOARD_BUTTONS } from "../constants/messages";

const questions: Questions = data;

function getRandomQuestion(topicTitle: string) {
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
    default:
      return "base";
  }
}

export { getRandomQuestion, convertTopicTitleToCode };
