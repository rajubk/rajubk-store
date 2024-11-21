import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
      <div className="text-4xl font-extrabold">Your cart is empty!!!</div>
      <Link className="text-blue-500 text-sm" href="/">
        Click here to add items to your cart
      </Link>
    </div>
  );
};

export default EmptyCart;
