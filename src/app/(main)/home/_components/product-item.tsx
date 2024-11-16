import { Product } from "@/services/product/type";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="w-full h-full flex flex-col space-y-4 p-4 shadow-md">
      <div className="flex-1 w-full flex justify-center">
        <Image width={100} height={100} src={product.image} alt="img" />
      </div>
      <h2>{product.title.slice(0, 25)}</h2>
      <p className="text-slate-500">{product.price}</p>
    </div>
  );
};

export default ProductItem;
