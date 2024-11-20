import { Cart } from "@/services/cart/type";
import React from "react";
import CartItem from "./cart-item";

const CartItems = ({ cart }: { cart: Cart }) => {
  const { products = [] } = cart;

  return (
    <>
      <div className="w-full h-full flex flex-col px-4 py-8 space-y-8">
        {products.map((item) => (
          <CartItem key={item.productId} item={item} />
        ))}
      </div>
    </>
  );
};

export default CartItems;
