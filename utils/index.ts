import data from "../questions.json" assert { type: "json" };
import { Questions } from "contracts/index.ts";
import { KEYBOARD_BUTTONS } from "../constants/index.ts";

const questions: Questions = data;

function getRandomQuestion(topicTitle: string) {
  const randomQuestionIndex = Math.floor(
    Math.random() * questions[topicTitle as keyof Questions].length
  );
  return questions[topicTitle as keyof Questions][randomQuestionIndex];
}

// function getAnswer(currentTopic: string, currentiId: number) {
//   const question = questions[currentTopic as keyof Questions].find(
//     (question) => (question.id === currentiId)
//   );
//   if (!question) return null;

// }

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
