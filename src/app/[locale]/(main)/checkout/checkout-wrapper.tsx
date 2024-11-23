import React from "react";
import { getUserCart } from "@/services/cart/cart";
import { getLoggedUser } from "@/services/user/user";
import DeliveryAddress from "./_components/develivery-address";
import { isEmpty } from "lodash";

const CheckoutWrapper = async () => {
  const user = await getLoggedUser();
  if (isEmpty(user)) {
    throw new Error("Invalid user");
  }
  const cart = await getUserCart(`${user?.id}`);

  return (
    <div className="flex h-full w-full flex-col">
      <DeliveryAddress user={user} />
    </div>
  );
};

export default CheckoutWrapper;
