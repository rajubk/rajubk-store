import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

const CartSummary = ({ cartTotal }: { cartTotal: string }) => {
  const t = useTranslations();
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-between bg-white px-4 py-3 shadow-2xl drop-shadow-2xl md:px-16">
      <div className="hidden md:block" />
      <div className="text-2xl font-bold text-slate-700">
        {`${t("order_total")}: `}
        <span className="text-black">{`$${cartTotal}`}</span>
      </div>
      <Link
        href="/checkout"
        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        {t("checkout")}
      </Link>
    </div>
  );
};

export default CartSummary;
