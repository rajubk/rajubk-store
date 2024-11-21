import Conditional from "@/app/ui/conditional";
import { getUserCart } from "@/services/cart/cart";
import { getLoggedUser } from "@/services/user/user";
import Link from "next/link";
import React from "react";
import LogoutButton from "./logout-button";
import { FaCartShopping } from "react-icons/fa6";

const Header = async () => {
  const user = await getLoggedUser();
  let cart = null;
  if (user) {
    const data = await getUserCart(`${user.id}`);
    cart = data;
  }

  return (
    <div className="w-full flex justify-between shadow-lg px-8 py-2">
      <Link href="/home">
        <div className="font-extrabold text-2xl">RajuBK Store</div>
      </Link>
      <div className="flex items-center justify-start space-x-8 text-lg">
        <Link href="/cart" className="relative text-xl">
          <FaCartShopping />
          <Conditional test={cart}>
            <div className="absolute -right-2 -top-2 w-4 h-4 flex justify-center items-center bg-red-500 rounded-full">
              <div className="text-xs text-white">{cart?.products?.length}</div>
            </div>
          </Conditional>
        </Link>
        <Conditional test={user} fallback={<Link href="/login">Login</Link>}>
          <LogoutButton />
        </Conditional>
      </div>
    </div>
  );
};

export default Header;
