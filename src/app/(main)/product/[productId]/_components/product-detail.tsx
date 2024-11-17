import { Product } from "@/services/product/type";
import Image from "next/image";
import React from "react";
import AddCartButton from "./add-cart-button";

const ProductDetail = ({ product }: { product: Readonly<Product> }) => {
  const { image, title, price, category, description } = product;
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-8">
      <div className="flex-1 w-full h-96  flex justify-center items-center">
        <Image width={100} height={100} src={image} alt="img" />
      </div>
      <div className="flex-[2] flex flex-col space-y-8 p-4">
        <div className="text-5xl font-bold">{title}</div>
        <div className="text-xl text-slate-500">{`$${price}`}</div>
        <AddCartButton />
        <div>{category}</div>
        <div className=" text-slate-300">{description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
