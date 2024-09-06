import dotenv from "dotenv";
import { ERRORS } from "constants/messages";

dotenv.config();

export function getToken(): string {
  const token = process.env.TOKEN;

  if (!token) {
    throw new Error(ERRORS.TOKEN_IS_NOT_DEFINED);
  }
  return token;
}
