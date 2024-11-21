"use server";

import { logger } from "@/utils/pino";
import { redirect } from "next/navigation";
import isEmpty from "lodash/isEmpty";
import { deleteCookie, setCookie } from "@/utils/cookie";
import { ACTION_STATUS, USER_COOKIE_ID } from "@/utils/constants";
import { addUser, getUserByName, getUserByPassword } from "../user/user";
import { newUserBody } from "./util";

export const loginUser = async (_: unknown, formData: FormData) => {
  try {
    logger.info("login | started");
    const username = formData.get("user")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";
    const user = await getUserByPassword(username, password);
    if (!isEmpty(user)) {
      setCookie(USER_COOKIE_ID, `${user?.[0]?.id}`);
      return { status: ACTION_STATUS.SUCCESS };
    }
    return { status: ACTION_STATUS.FAILURE };
  } catch (error) {
    logger.error({ error }, "login | error");
    return { status: ACTION_STATUS.FAILURE };
  }
};

export const registerUser = async (_: unknown, formData: FormData) => {
  try {
    logger.info("register | started");
    const fullName = formData.get("fullName")?.toString() ?? "";
    const username = formData.get("user")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const user = await getUserByName(username);
    if (!isEmpty(user)) {
      return { status: ACTION_STATUS.USER_EXISTS };
    }
    const body = newUserBody({ fullName, username, password, email });
    const newUser = await addUser(body);
    if (!isEmpty(newUser)) {
      setCookie(USER_COOKIE_ID, `${newUser?.id}`);
    }
    return { status: ACTION_STATUS.SUCCESS };
  } catch (error) {
    logger.error({ error }, "register | error");
    return { status: ACTION_STATUS.FAILURE };
  }
};

export const logoutUser = () => {
  try {
    deleteCookie(USER_COOKIE_ID);
    return { status: ACTION_STATUS.SUCCESS };
  } catch (error) {
    logger.error({ error }, "logout | error");
    return { status: ACTION_STATUS.FAILURE };
  }
};

export const redirectHome = () => {
  redirect("/");
};
