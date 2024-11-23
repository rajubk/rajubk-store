import { Product } from "@/services/product/type";
import Image from "next/image";
import React from "react";
import AddToCart from "./add-to-cart";

const ProductDetail = ({ product }: { product: Readonly<Product> }) => {
  const { id, image, title, price, category, description } = product;
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-8">
      <div className="flex-1 w-full h-96 flex justify-center items-center">
        <Image width={100} height={100} src={image} alt="img" />
      </div>
      <div className="flex-[2] flex flex-col space-y-4 p-4">
        <div className="text-2xl md:text-3xl font-bold">{title}</div>
        <div className="text-slate-500">{category}</div>
        <div className="text-slate-500">{`$${price.toFixed(2)}`}</div>
        <AddToCart productId={id} />
        <div className="text-lg text-slate-700">Product description</div>
        <div className=" text-slate-300 px-4">{description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
