"use server";

import { logger } from "@/utils/pino";
import { ACTION_STATUS } from "@/utils/constants";
import { getLoggedUser } from "../user/user";
import { createUserCart, getUserCart, updateUserCart } from "../cart/cart";
import { formatISO } from "date-fns";
import { Cart, CartProduct } from "../cart/type";
import { isEmpty } from "lodash";

export const addToCart = async (
  productId: number,
  _: unknown,
  formData: FormData
) => {
  try {
    logger.info("add to cart | started");
    const quantity = +(formData.get("quantity")?.toString() ?? "0");

    const user = await getLoggedUser();
    if (!user) {
      return { status: ACTION_STATUS.LOGIN_REQUIRED };
    }
    const cart = await getUserCart(`${user.id}`);
    if (!cart) {
      const body: Cart = {
        id: Date.now(),
        userId: user.id,
        date: formatISO(new Date()),
        products: [
          {
            productId: productId,
            quantity: +quantity,
          },
        ],
      };
      createUserCart({ body });
      return { status: ACTION_STATUS.SUCCESS };
    }
    const { products = [] } = cart;
    const product = products.filter((x) => x.productId === productId)?.[0];
    let body = [] as Partial<Cart>;
    if (!isEmpty(product)) {
      body = {
        products: products.map((x) =>
          x.productId === productId
            ? { productId, quantity: x.quantity + quantity }
            : x
        ) as CartProduct[],
      };
    } else {
      body = {
        products: [
          ...cart.products,
          {
            productId: +productId,
            quantity: +quantity,
          },
        ],
      };
    }
    await updateUserCart({ cartId: `${cart.id}`, body });
    return { status: ACTION_STATUS.SUCCESS };
  } catch (error) {
    logger.error({ error }, "product | error");
    return { status: ACTION_STATUS.FAILURE };
  }
};
