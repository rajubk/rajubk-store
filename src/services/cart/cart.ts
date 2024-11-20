import { GET_CARTS } from "@/utils/endpoints";
import { FETCH_CARTS_TAG, FETCH_USER_CART_TAG } from "./constants";
import { Cart } from "./type";
import { logger } from "@/utils/pino";
import { buildUrl } from "@/utils/url";

export const getCarts = async () => {
  try {
    const url = `${process.env.API_URL}/${GET_CARTS}`;
    logger.info("cart | fetch start");
    const res = await fetch(url, {
      next: { revalidate: 3600, tags: [FETCH_CARTS_TAG] },
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
      next: { revalidate: 3600, tags: [FETCH_USER_CART_TAG] },
    });
    const [cart] = await res.json();
    return cart as Cart;
  } catch (error) {
    logger.error({ error }, "cart | fetch error");
    throw new Error(`Failed to fetch error`);
  }
};

export const createUserCart = async ({ body }: { body: Cart }) => {
  try {
    const url = `${process.env.API_URL}/${GET_CARTS}`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    logger.error({ error }, "cart | post error");
    throw new Error(`Failed to create cart error`);
  }
};

export const updateUserCart = async ({
  cartId,
  body,
}: {
  cartId: string;
  body: Partial<Cart>;
}) => {
  try {
    const url = `${process.env.API_URL}/${GET_CARTS}/${cartId}`;
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    logger.error({ error }, "cart | patch error");
    throw new Error(`Failed to update cart error`);
  }
};
