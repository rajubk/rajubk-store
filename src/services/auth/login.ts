import { GET_USERS } from "@/utils/endpoints";
import { FETCH_USERS_TAG } from "./constants";
import { logger } from "@/utils/pino";
import { USER } from "./type";
import { buildUrl } from "@/utils/url";

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

export const getUser = async (userId: string) => {
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

export const getUserByPassword = async (username: string, password: string) => {
  try {
    const url = `${process.env.API_URL}/${GET_USERS}`;
    const userUrl = buildUrl(url, { username, password });
    console.log("first", userUrl);
    const res = await fetch(userUrl, {
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
