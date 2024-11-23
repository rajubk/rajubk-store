import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const HeaderTitle = () => {
  const t = useTranslations();
  return (
    <Link href="/home" className="flex items-center space-x-2">
      <Image src="/shop.png" width={24} height={24} alt="shop" />
      <div className="font-extrabold text-2xl">{t("title")}</div>
    </Link>
  );
};

export default HeaderTitle;
