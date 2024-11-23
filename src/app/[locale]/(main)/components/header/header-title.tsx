import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const HeaderTitle = () => {
  const t = useTranslations();
  return (
    <Link href="/home" className="flex items-center space-x-2">
      <Image src="/shop.png" width={24} height={24} alt="shop" />
      <div className="text-2xl font-extrabold md:hidden">
        {t("title_mobile")}
      </div>
      <div className="hidden text-2xl font-extrabold md:block">
        {t("title")}
      </div>
    </Link>
  );
};

export default HeaderTitle;
