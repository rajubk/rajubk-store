import React from "react";
import { getUserCart } from "@/services/cart/cart";
import { getLoggedUser } from "@/services/user/user";
import DeliveryAddress from "./_components/develivery-address";

const CheckoutWrapper = async () => {
  const user = await getLoggedUser();
  const cart = await getUserCart(`${user?.id}`);

  console.log(cart);

  return (
    <div className="w-full h-full flex flex-col">
      <DeliveryAddress />
    </div>
  );
};

export default CheckoutWrapper;
