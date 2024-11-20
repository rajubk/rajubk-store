import { USER_COOKIE_ID } from "@/utils/constants";
import { getCookie } from "@/utils/cookie";
import { getUserById } from "../auth/login";
import { logger } from "@/utils/pino";
import { unstable_cache } from "next/cache";
import { GET_LOGGED_USER_TAG } from "./constants";

export const getLoggedUser = unstable_cache(
  async () => {
    try {
      const userId = getCookie(USER_COOKIE_ID);
      console.log("userId", userId);
      if (!userId) {
        return null;
      }
      const user = await getUserById(userId?.value ?? "");
      return user;
    } catch (error) {
      logger.error(error, "failed to get user");
      return null;
    }
  },
  [`logged-user`],
  { revalidate: 3600, tags: [GET_LOGGED_USER_TAG] }
);
