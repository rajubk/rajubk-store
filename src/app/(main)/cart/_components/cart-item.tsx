import { CartProduct } from "@/services/cart/type";
import { getProductById } from "@/services/product/product";
import Image from "next/image";
import React from "react";

const CartItem = async ({ item }: { item: CartProduct }) => {
  const { productId, quantity } = item;
  const {
    category,
    description,
    image,
    price,
    rating: { count, rate },
    title,
  } = await getProductById(`${productId}`);

  return (
    <div className="w-full px-4 py-2 grid grid-cols-12 place-items-center shadow-lg gap-4">
      <div className="col-span-2">
        <Image src={image} width={64} height={64} alt="monkey" />
      </div>
      <div className="text-xs md:text-sm col-span-4">
        {title.slice(0, 50)}
        <div className="hidden md:block text-xs text-slate-500">
          {description.slice(0, 200)}
        </div>
      </div>
      <div className="col-span-2">{quantity}</div>
      <div className="text-xs col-span-2">
        {`${rate}(${count})`}
        <div className="text-xs text-slate-500">{category}</div>
      </div>
      <div className="text-xs col-span-2"> {price}</div>
    </div>
  );
};

export default CartItem;
