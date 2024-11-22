import { GET_CARTS } from "@/utils/endpoints";
import { FETCH_CARTS_TAG, FETCH_USER_CART_TAG } from "./constants";
import { Cart } from "./type";
import { logger } from "@/utils/pino";
import { buildUrl } from "@/utils/url";
import { isEmpty } from "lodash";
import { getProductById } from "../product/product";

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

export const emptyCart = async (cartId: number) => {
  try {
    const url = `${process.env.API_URL}/${GET_CARTS}/${cartId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const cart: Cart = await res.json();
    return cart;
  } catch (error) {
    logger.error({ error }, "cart | empty cart error");
    throw new Error(`Failed to empty cart`);
  }
};

export const userTotalCartPrice = async (userId: string) => {
  try {
    const cart = await getUserCart(userId);
    if (isEmpty(cart)) {
      logger.error("cart | Unable to get user cart");
      throw new Error("Unable to get user cart");
    }
    const { products = [] } = cart;
    let total = 0;
    for (const { productId, quantity } of products) {
      const product = await getProductById(`${productId}`);
      if (isEmpty(product)) {
        continue;
      }
      const { price = 0 } = product;
      total += price * Number(quantity);
    }
    return total.toFixed(2);
  } catch (error) {
    logger.error({ error }, "cart | total price error");
    throw new Error("Error while getting total cart price");
  }
};
