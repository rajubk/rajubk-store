import { USER_COOKIE_ID } from "@/utils/constants";
import { getCookie } from "@/utils/cookie";
import { getUserById } from "../auth/login";
import { logger } from "@/utils/pino";

export const getLoggedUser = async () => {
  try {
    const userId = getCookie(USER_COOKIE_ID);
    if (!userId) {
      return null;
    }
    const user = await getUserById(userId?.value ?? "");
    return user;
  } catch (error) {
    logger.error(error, "failed to get user");
    return null;
  }
};
