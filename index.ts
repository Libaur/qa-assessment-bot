import { Bot, Keyboard, InlineKeyboard, GrammyError, HttpError } from "grammy";
import { getToken } from "./config";
import { KEYBOARD_BUTTONS, REPLIES, ERRORS } from "./constants/messages";
import { getRandomQuestion, convertTopicTitleToCode } from "./utils";

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
  const inlineKeyboard = new InlineKeyboard()
    .text(
      "Узнать ответ",
      JSON.stringify({
        questionType: currentTopic,
        questionId: currentQuestion.id,
      })
    )
    .text("Отмена", "cancel");
  await ctx.reply(REPLIES.LETS_START + ctx.message?.text ?? REPLIES.SPECIFIC);
  await ctx.reply(currentQuestion.text, {
    reply_markup: inlineKeyboard,
  });
});

bot.on("callback_query:data", async (ctx) => {
  if (ctx.callbackQuery.data === "cancel") {
    await ctx.reply("Отменено");
    await ctx.answerCallbackQuery();
    return;
  }
  const callbackData = JSON.parse(ctx.callbackQuery.data);
  await ctx.reply(REPLIES.TEMP_ANSWER);
  await ctx.answerCallbackQuery();
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
