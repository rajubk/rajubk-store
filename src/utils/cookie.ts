import { cookies } from "next/headers";
import { logger } from "./pino";

export const getCookie = (key: string) => {
  try {
    const cookie = cookies();
    return cookie.get(key);
  } catch (error) {
    logger.error(error, "Cookie not found");
    throw new Error("Cookie not found");
  }
};

export const setCookie = (key: string, value: string) => {
  try {
    const cookie = cookies();
    cookie.set(key, value);
  } catch (error) {
    logger.error(error, "Cookie set Error");
    throw new Error("Cookie set error");
  }
};

export const deleteCookie = (key: string) => {
  try {
    const cookie = cookies();
    if (cookie.has(key)) {
      cookie.delete(key);
    }
  } catch (error) {
    logger.error(error, "Cookie delete Error");
    throw new Error("Cookie delete error");
  }
};
