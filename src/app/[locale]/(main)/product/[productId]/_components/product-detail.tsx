import { Product } from "@/services/product/type";
import Image from "next/image";
import React from "react";
import AddToCart from "./add-to-cart";

const ProductDetail = ({ product }: { product: Readonly<Product> }) => {
  const { id, image, title, price, category, description } = product;
  return (
    <div className="flex h-full w-full flex-col gap-8 md:flex-row">
      <div className="flex h-96 w-full flex-1 items-center justify-center">
        <Image width={100} height={100} src={image} alt="img" />
      </div>
      <div className="flex flex-[2] flex-col space-y-4 p-4">
        <div className="text-2xl font-bold md:text-3xl">{title}</div>
        <div className="text-slate-500">{category}</div>
        <div className="text-slate-500">{`$${price.toFixed(2)}`}</div>
        <AddToCart productId={id} />
        <div className="text-lg text-slate-700">Product description</div>
        <div className="px-4 text-slate-300">{description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
