import { USER_COOKIE_ID } from "@/utils/constants";
import { getCookie } from "@/utils/cookie";
import { GET_USERS } from "@/utils/endpoints";
import { logger } from "@/utils/pino";
import { FETCH_USERS_TAG } from "./constants";
import { USER } from "./type";
import { buildUrl } from "@/utils/url";

export const getLoggedUser = async () => {
  try {
    const userId = getCookie(USER_COOKIE_ID)?.value;
    if (!userId) {
      return null;
    }
    const user = await getUserById(userId);
    return user;
  } catch (error) {
    logger.error(error, "failed to get user");
    return null;
  }
};

export const getUsers = async () => {
  try {
    const url = `${process.env.API_URL}/${GET_USERS}`;
    logger.info("users | fetch start");
    const res = await fetch(url, {
      next: { revalidate: 3600, tags: [FETCH_USERS_TAG] },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const products: USER[] = await res.json();
    logger.info("users | fetch sucess");

    return products;
  } catch (error) {
    logger.error({ error }, "users | fetch error");
    throw new Error(`Failed to fetch error:${error}`);
  }
};

export const getUserById = async (userId: string) => {
  try {
    const url = `${process.env.API_URL}/${GET_USERS}/${userId}`;
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const product: USER = await res.json();
    return product;
  } catch (error) {
    throw new Error(`Failed to fetch error:${error}`);
  }
};

export const getUserByName = async (username: string) => {
  try {
    const url = `${process.env.API_URL}/${GET_USERS}`;
    const userUrl = buildUrl(url, { username });
    const res = await fetch(userUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const [user] = await res.json();
    return user as USER;
  } catch (error) {
    throw new Error(`Failed to fetch error:${error}`);
  }
};

export const getUserByPassword = async (username: string, password: string) => {
  try {
    const url = `${process.env.API_URL}/${GET_USERS}`;
    const userUrl = buildUrl(url, { username, password });
    const res = await fetch(userUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user: USER[] = await res.json();
    return user;
  } catch (error) {
    throw new Error(`Failed to fetch error:${error}`);
  }
};

export const addUser = async (body: USER) => {
  try {
    const url = `${process.env.API_URL}/${GET_USERS}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const user: USER = await res.json();
    return user;
  } catch (error) {
    throw new Error(`Failed to fetch error:${error}`);
  }
};
