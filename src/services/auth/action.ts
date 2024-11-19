"use server";

import { logger } from "@/utils/pino";
import { getUserByPassword } from "./login";
import { redirect } from "next/navigation";
import isEmpty from "lodash/isEmpty";

export const loginUser = async (_: unknown, formData: FormData) => {
  try {
    logger.info("login | started");
    const username = formData.get("user")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";
    const user = await getUserByPassword(username, password);
    console.log("user", user);
    if (!isEmpty(user)) {
      return { status: "success" };
    }
    return { status: "failure" };
  } catch (error) {
    logger.error({ error }, "login | error");
    return { status: "failure" };
  }
};

export const redirectHome = () => {
  redirect("/");
};
