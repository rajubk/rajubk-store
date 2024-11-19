import { getUserCart } from "@/services/cart/cart";
import Link from "next/link";
import React from "react";

const Header = async () => {
  const [cart] = await getUserCart(`1`);

  return (
    <div className="w-full flex justify-between shadow-lg px-8 py-2">
      <Link href="/home">
        <h2>RBK Store</h2>
      </Link>
      <div className="flex space-x-8">
        <Link href="/cart" className="relative">
          <div>Cart</div>
          <div className="absolute -right-3 -top-1 w-5 h-5 flex justify-center items-center bg-blue-500 rounded-full">
            <div className="text-xs text-white">{cart.products.length}</div>
          </div>
        </Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
