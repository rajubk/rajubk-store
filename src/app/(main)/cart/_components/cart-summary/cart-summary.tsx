import Link from "next/link";
import React from "react";

const CartSummary = ({ cartTotal }: { cartTotal: string }) => {
  return (
    <div className="w-full fixed flex justify-between items-center bottom-0 px-4 md:px-16 py-3 bg-white drop-shadow-2xl shadow-2xl">
      <div className="hidden md:block" />
      <div className="text-2xl text-slate-700 font-bold">
        Order Total: <span className="text-black">{`$${cartTotal}`}</span>
      </div>
      <Link
        href="/checkout"
        className="px-4 py-2 flex justify-center items-center rounded-md bg-blue-500 text-white"
      >
        Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
