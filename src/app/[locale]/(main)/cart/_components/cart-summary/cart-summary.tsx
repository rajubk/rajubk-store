import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

const CartSummary = ({ cartTotal }: { cartTotal: string }) => {
  const t = useTranslations();
  return (
    <div className="w-full fixed flex justify-between items-center bottom-0 px-4 md:px-16 py-3 bg-white drop-shadow-2xl shadow-2xl">
      <div className="hidden md:block" />
      <div className="text-2xl text-slate-700 font-bold">
        {`${t("order_total")}: `}
        <span className="text-black">{`$${cartTotal}`}</span>
      </div>
      <Link
        href="/checkout"
        className="px-4 py-2 flex justify-center items-center rounded-md bg-blue-500 text-white"
      >
        {t("checkout")}
      </Link>
    </div>
  );
};

export default CartSummary;
