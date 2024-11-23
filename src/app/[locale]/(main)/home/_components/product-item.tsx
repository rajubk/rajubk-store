import Button from "@/app/ui/button";
import { Link } from "@/i18n/routing";
import { Product } from "@/services/product/type";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  const t = useTranslations();
  const { image, price, id } = product;

  return (
    <div className="w-full h-full flex flex-col space-y-4 shadow-lg bg-white">
      <div className="flex-1 flex justify-center items-center">
        <Link href={`/product/${id}`}>
          <Image width={100} height={100} src={image} alt="img" />
        </Link>
      </div>
      <div className="flex flex-col bg-sky-50 p-2">
        <Link href={`/product/${id}`}>
          <div className="font-bold text-sm">{product.title.slice(0, 20)}</div>
        </Link>
        <div className="flex justify-between items-center">
          <div className="text-slate-500 text-xs">{`$${price.toFixed(2)}`}</div>
          <Button size="sm">{t("add_to_cart")}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
