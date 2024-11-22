import React from "react";
import { getUserCart } from "@/services/cart/cart";
import { getLoggedUser } from "@/services/user/user";
import CartItems from "./_components/cart-item/cart-items";

const CartWrapper = async () => {
  const user = await getLoggedUser();
  const cart = await getUserCart(`${user?.id}`);

  return <CartItems cart={cart} />;
};

export default CartWrapper;
