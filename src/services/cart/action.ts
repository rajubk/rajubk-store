"use server";

import { revalidateTag } from "next/cache";
import { FETCH_USER_CART_TAG } from "./constants";
import { getLoggedUser } from "../user/user";
import { emptyCart, getUserCart, updateUserCart } from "./cart";
import { isEmpty } from "lodash";
import { ACTION_STATUS } from "@/utils/constants";
import { logger } from "@/utils/pino";

export const revalidateUserCart = async () => {
  revalidateTag(FETCH_USER_CART_TAG);
};

export const deleteCartItem = async (productId: number) => {
  try {
    const user = await getLoggedUser();
    const cart = await getUserCart(`${user?.id}`);
    if (isEmpty(cart)) {
      return { status: ACTION_STATUS.FAILURE };
    }
    const { products = [], id } = cart;
    const filtered = products.filter((x) => x.productId !== productId);
    const body = { ...cart, products: filtered };
    await updateUserCart({ cartId: `${id}`, body });
    return { status: ACTION_STATUS.SUCCESS };
  } catch (error) {
    logger.error({ error }, "delete cart | error");
    return { status: ACTION_STATUS.FAILURE };
  }
};

export const emptyUserCart = async () => {
  try {
    const user = await getLoggedUser();
    if (isEmpty(user)) {
      return { status: ACTION_STATUS.FAILURE };
    }
    await emptyCart(user?.id);
    return { status: ACTION_STATUS.SUCCESS };
  } catch (error) {
    logger.error({ error }, "delete cart | error");
    return { status: ACTION_STATUS.FAILURE };
  }
};
