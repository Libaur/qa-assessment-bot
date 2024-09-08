const KEYBOARD_BUTTONS = {
  START_OPTIONS: {
    BREAKING_BAD: "Давай во все тяжкие!",
    NOT_SHURE: "Не уверен",
  },
  QUESTIONS_OPTIONS: {
    BASE: "Основы тестирования",
    PROCESS: "Процессы и методологии",
    TECHICAL: "Инструменты и технологии",
    EXPERTISE: "Личные качества и опыт",
  },
};

const REPLIES = {
  GREETINGS:
    "Привет! Я QA Interview Bot 🤖 \nЯ помогу пройти ассессмент QA в стриме ITSM \nХорошо подготовились?",
  QUESTION_SELECTION: "Сейчас проверим. Выбери тему вопроса в меню 👇🏻",
  LETS_START: "Итак, поговорим про ",
  TEMP_ANSWER: "Так не интересно!",
  SPECIFIC: "Вижу, у Вас специфические вкусы",
};

const ERRORS = {
  TOKEN_IS_NOT_DEFINED: "Ошибка получения токена из переменной окружения",
  UPDATE: "Ошибка при обработке обновления",
  REQUEST: "Ошибка в запросе:",
  HTTP: "Не удалось установить соединение с Telegram:",
  UNKNOWN: "Неизвестная ошибка:",
};

export { KEYBOARD_BUTTONS, REPLIES, ERRORS };
