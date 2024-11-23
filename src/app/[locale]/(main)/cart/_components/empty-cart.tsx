import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

const EmptyCart = () => {
  const t = useTranslations();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <div className="text-4xl font-extrabold">{`${t(
        "your_cart_empty",
      )}!!!`}</div>
      <Link className="text-sm text-blue-500" href="/">
        {t("click_here_to_add")}
      </Link>
    </div>
  );
};

export default EmptyCart;
