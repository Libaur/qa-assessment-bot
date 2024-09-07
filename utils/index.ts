import data from "../questions.json";
import { Questions } from "contracts";

const questions: Questions = data;

export function getRandomQuestion(topic: string) {
  const questionTopic = topic.toLowerCase() as keyof Questions;
  const randomQuestionIndex = Math.floor(
    Math.random() * questions[questionTopic].length
  );
  return questions[questionTopic][randomQuestionIndex];
}
