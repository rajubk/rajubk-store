import { GET_CARTS } from "@/utils/endpoints";
import { FETCH_CART_TAG } from "./constants";
import { Cart } from "./type";
import { logger } from "@/utils/pino";
import { buildUrl } from "@/utils/url";

export const getCarts = async () => {
  try {
    const url = `${process.env.API_URL}/${GET_CARTS}`;
    logger.info("cart | fetch start");
    const res = await fetch(url, {
      next: { revalidate: 3600, tags: [FETCH_CART_TAG] },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const products: Cart[] = await res.json();
    logger.info("cart| fetch sucess");

    return products;
  } catch (error) {
    logger.error({ error }, "cart | fetch error");
    throw new Error(`Failed to fetch error:${error}`);
  }
};

export const getUserCart = async (userId: string) => {
  try {
    const url = `${process.env.API_URL}/${GET_CARTS}`;
    const cartUrl = buildUrl(url, { userId });
    const res = await fetch(cartUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const [cart] = await res.json();
    return cart as Cart;
  } catch (error) {
    throw new Error(`Failed to fetch error:${error}`);
  }
};
