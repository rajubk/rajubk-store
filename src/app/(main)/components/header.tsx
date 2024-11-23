import Conditional from "@/app/ui/conditional";
import { getUserCart } from "@/services/cart/cart";
import { getLoggedUser } from "@/services/user/user";
import Link from "next/link";
import React from "react";
import LogoutButton from "./logout-button";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";

const Header = async () => {
  const user = await getLoggedUser();
  let cart = null;
  if (user) {
    const data = await getUserCart(`${user.id}`);
    cart = data;
  }

  return (
    <div className="w-full bg-white flex justify-between shadow-lg px-4 md:px-8 py-2">
      <Link href="/home" className="flex items-center space-x-2">
        <Image src="/shop.png" width={24} height={24} alt="shop" />
        <div className="font-extrabold text-2xl">RajuBK Store</div>
      </Link>
      <div className="flex items-center justify-start space-x-4 md:space-x-8 text-xl">
        <Link href="/cart" className="relative">
          <FaCartShopping />
          <Conditional test={cart}>
            <div className="absolute -right-2 -top-2 w-4 h-4 flex justify-center items-center bg-red-500 rounded-full">
              <div className="text-xs text-white">{cart?.products?.length}</div>
            </div>
          </Conditional>
        </Link>
        <Conditional test={user} fallback={<Link href="/login">Login</Link>}>
          <LogoutButton fullName={user?.name} />
        </Conditional>
      </div>
    </div>
  );
};

export default Header;
