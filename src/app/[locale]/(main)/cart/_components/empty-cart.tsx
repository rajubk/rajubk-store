import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

const EmptyCart = () => {
  const t = useTranslations();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
      <div className="text-4xl font-extrabold">{`${t(
        "your_cart_empty"
      )}!!!`}</div>
      <Link className="text-blue-500 text-sm" href="/">
        {t("click_here_to_add")}
      </Link>
    </div>
  );
};

export default EmptyCart;
