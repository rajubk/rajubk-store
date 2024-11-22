import { CartProduct } from "@/services/cart/type";
import { getProductById } from "@/services/product/product";
import Image from "next/image";
import React from "react";
import DeleteCartItem from "./delete-cart-item";
import Link from "next/link";

const CartItem = async ({ item }: { item: CartProduct }) => {
  const { productId, quantity } = item;
  const {
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
      <div className="text-xs md:text-sm font-bold col-span-4">
        <Link href={`product/${productId}`} className="text-blue-500 underline">
          {title.slice(0, 30)}
        </Link>
        <div className=" md:hidden text-xs text-slate-500">
          {description.slice(0, 40)}
        </div>
        <div className="hidden md:block text-xs text-slate-500">
          {description.slice(0, 150)}
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-center">
        <div className="text-xs text-slate-500">Quantity</div>
        <div className="font-bold ">{quantity}</div>
      </div>
      <div className="hidden md:flex text-xs col-span-2 flex-col items-center">
        <div className="text-xs text-slate-500">Ratings</div>
        <div className="font-bold ">{`${rate}(${count})`}</div>
      </div>
      <div className="text-xs col-span-2 md:col-span-1 flex-col items-center">
        <div className="text-xs text-slate-500">Price</div>
        <div className="font-bold ">{`$${price}`}</div>
      </div>
      <div className=" col-span-2 md:col-span-1 text-red-500">
        <DeleteCartItem productId={productId} />
      </div>
    </div>
  );
};

export default CartItem;
