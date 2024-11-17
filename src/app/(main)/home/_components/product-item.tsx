import { Product } from "@/services/product/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  const { image, price, id } = product;

  return (
    <Link href={`/product/${id}`}>
      <div className="w-full h-full flex flex-col space-y-4 p-4 shadow-lg">
        <div className="flex-1 flex justify-center items-center">
          <Image width={100} height={100} src={image} alt="img" />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-sm">{product.title.slice(0, 20)}</div>
          <p className="text-slate-500">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
