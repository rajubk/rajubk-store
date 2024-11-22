import React from "react";
import CartSummary from "./cart-summary";
import { getUserCart, userTotalCartPrice } from "@/services/cart/cart";
import { getLoggedUser } from "@/services/user/user";
import { isEmpty } from "lodash";
import Conditional from "@/app/ui/conditional";

const CartSummaryWrapper = async () => {
  const user = await getLoggedUser();
  if (isEmpty(user)) {
    throw new Error("Error total cart");
  }
  const cart = await getUserCart(`${user?.id}`);

  let cartTotal = "";
  if (!isEmpty(cart)) {
    cartTotal = await userTotalCartPrice(`${user.id}`);
  }

  return (
    <Conditional test={!isEmpty(cart?.products)} fallback={null}>
      <CartSummary cartTotal={cartTotal} />;
    </Conditional>
  );
};

export default CartSummaryWrapper;
