"use server";

import { logger } from "@/utils/pino";
import { ACTION_STATUS } from "@/utils/constants";
import { getLoggedUser } from "../user/user";
import { createUserCart, getUserCart, updateUserCart } from "../cart/cart";
import { formatISO } from "date-fns";
import { Cart } from "../cart/type";

export const addToCart = async (
  productId: number,
  _: unknown,
  formData: FormData
) => {
  try {
    logger.info("add to cart | started");
    const quantity = formData.get("quantity")?.toString() ?? "";

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
            productId: +productId,
            quantity: +quantity,
          },
        ],
      };
      createUserCart({ body });
      return { status: ACTION_STATUS.SUCCESS };
    }
    const body: Partial<Cart> = {
      products: [
        ...cart.products,
        {
          productId: +productId,
          quantity: +quantity,
        },
      ],
    };
    await updateUserCart({ cartId: `${cart.id}`, body });
    return { status: ACTION_STATUS.SUCCESS };
  } catch (error) {
    logger.error({ error }, "product | error");
    return { status: ACTION_STATUS.FAILURE };
  }
};
