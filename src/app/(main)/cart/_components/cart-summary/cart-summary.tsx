import Button from "@/app/ui/button";
import React from "react";

const CartSummary = ({ cartTotal }: { cartTotal: string }) => {
  return (
    <div className="w-full fixed flex justify-between items-center bottom-0 px-4 md:px-16 py-3 bg-white drop-shadow-2xl shadow-2xl">
      <div className="hidden md:block" />
      <div className="text-2xl text-slate-700 font-bold">
        Order Total: <span className="text-black">{`$${cartTotal}`}</span>
      </div>
      <Button variant="primary">Checkout</Button>
    </div>
  );
};

export default CartSummary;
