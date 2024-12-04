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
    RANDOM: "Случайный вопрос",
  },
};

const REPLIES = {
  GREETINGS:
    "Привет! Я QA Interview Bot 🤖 \nЯ помогу пройти ассессмент QA в стриме ITSM \nХорошо подготовились?",
  QUESTION_SELECTION: "Сейчас проверим. Выбери тему вопроса в меню 👇🏻",
  ANOTHER_QUESTION_SELECTION: "Отлично справляешься! Выбери следующую тему вопроса в меню 👇🏻",
  RIGHT_ANSWER: "Верно!",
  WRONG_ANSWER: "Не верно!",
};

const ERRORS = {
  TOKEN_IS_NOT_DEFINED: "Ошибка получения токена из переменной окружения",
  UPDATE: "Ошибка при обработке обновления",
  REQUEST: "Ошибка в запросе:",
  HTTP: "Не удалось установить соединение с Telegram:",
  UNKNOWN: "Неизвестная ошибка:",
};

export { KEYBOARD_BUTTONS, REPLIES, ERRORS };
