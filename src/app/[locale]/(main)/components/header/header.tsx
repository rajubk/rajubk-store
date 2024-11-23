import Conditional from "@/app/ui/conditional";
import { getUserCart } from "@/services/cart/cart";
import { getLoggedUser } from "@/services/user/user";
import React from "react";
import LogoutButton from "../logout-button";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "@/i18n/routing";
import HeaderTitle from "./header-title";
import LanguageSelector from "./language-selector";

const Header = async () => {
  const user = await getLoggedUser();
  let cart = null;
  if (user) {
    const data = await getUserCart(`${user.id}`);
    cart = data;
  }

  return (
    <div className="flex w-full justify-between bg-white px-4 py-2 shadow-lg md:px-8">
      <HeaderTitle />
      <div className="flex items-center justify-start space-x-4 text-xl md:space-x-8">
        <LanguageSelector />
        <Link href="/cart" className="relative">
          <FaCartShopping />
          <Conditional test={cart}>
            <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
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
