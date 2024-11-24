import { Bot, Keyboard, InlineKeyboard, GrammyError, HttpError } from "grammy";
import { getToken } from "./config/index.ts";
import { KEYBOARD_BUTTONS, REPLIES, ERRORS } from "./constants/index.ts";
import { getRandomQuestion, convertTopicTitleToCode } from "./utils/index.ts";

const { BASE, PROCESS, TECHICAL, EXPERTISE } =
  KEYBOARD_BUTTONS.QUESTIONS_OPTIONS;

const bot = new Bot(getToken());

bot.command("start", async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text(KEYBOARD_BUTTONS.START_OPTIONS.BREAKING_BAD, "breakingBad")
    .text(KEYBOARD_BUTTONS.START_OPTIONS.NOT_SHURE, "notShure");
  await ctx.reply(REPLIES.GREETINGS, { reply_markup: inlineKeyboard });
});

bot.callbackQuery(["breakingBad", "notShure"], async (ctx) => {
  const startKeyboard = new Keyboard()
    .text(BASE)
    .text(PROCESS)
    .row()
    .text(TECHICAL)
    .text(EXPERTISE)
    .resized();
  await ctx.reply(REPLIES.QUESTION_SELECTION, { reply_markup: startKeyboard });
});

bot.hears([BASE, PROCESS, TECHICAL, EXPERTISE], async (ctx) => {
  const currentTopic = convertTopicTitleToCode(ctx.message?.text ?? "base");
  const currentQuestion = getRandomQuestion(currentTopic ?? "base");
  const buttonRows = currentQuestion.options.map((option) => [
    InlineKeyboard.text(
      option.text,
      JSON.stringify({ isCorrect: option.isCorrect })
    ),
  ]);
  const inlineKeyboard = InlineKeyboard.from(buttonRows);
  await ctx.reply(currentQuestion.text, {
    reply_markup: inlineKeyboard,
  });
});

bot.on("callback_query:data", async (ctx) => {
  const callbackData = JSON.parse(ctx.callbackQuery.data);
  if (!callbackData.isCorrect) {
    await ctx.answerCallbackQuery({
      text: REPLIES.WRONG_ANSWER,
      show_alert: true,
    });
  } else {
    await ctx.answerCallbackQuery({ text: REPLIES.RIGHT_ANSWER });
    await ctx.reply(REPLIES.ANOTHER_QUESTION_SELECTION);
  }
});

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`${ERRORS.UPDATE} ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error(ERRORS.REQUEST, e.description);
  } else if (e instanceof HttpError) {
    console.error(ERRORS.HTTP, e);
  } else {
    console.error(ERRORS.UNKNOWN, e);
  }
});

bot.start();
