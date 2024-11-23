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
    <div className="flex h-full w-full flex-col space-y-4 bg-white shadow-lg">
      <div className="flex flex-1 items-center justify-center">
        <Link href={`/product/${id}`}>
          <Image width={100} height={100} src={image} alt="img" />
        </Link>
      </div>
      <div className="flex flex-col bg-sky-50 p-2">
        <Link href={`/product/${id}`}>
          <div className="text-sm font-bold">{product.title.slice(0, 20)}</div>
        </Link>
        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-500">{`$${price.toFixed(2)}`}</div>
          <Button size="sm">{t("add_to_cart")}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
