import Conditional from "@/app/ui/conditional";
import { getUserCart } from "@/services/cart/cart";
import { getLoggedUser } from "@/services/user/user";
import Link from "next/link";
import React from "react";
import LogoutButton from "./logout-button";

const Header = async () => {
  const user = await getLoggedUser();
  console.log("first", user);
  let cart = null;
  if (user) {
    const data = await getUserCart(`${user.id}`);
    cart = data?.[0];
  }

  return (
    <div className="w-full flex justify-between shadow-lg px-8 py-2">
      <Link href="/home">
        <h2>RBK Store</h2>
      </Link>
      <div className="flex space-x-8">
        <Link href="/cart" className="relative">
          <div>Cart</div>
          <Conditional test={cart}>
            <div className="absolute -right-3 -top-1 w-5 h-5 flex justify-center items-center bg-blue-500 rounded-full">
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
