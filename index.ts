import { Bot } from "grammy";
import { getToken } from "config";
import { REPLIES } from "constants/messages";

try {
  const bot = new Bot(getToken());
  bot.command("start", (ctx) => ctx.reply(REPLIES.GREETINGS));
  bot.on("message", (ctx) => ctx.reply(REPLIES.START));
  bot.start();
} catch (error) {
  error instanceof Error && console.error(error);
}
