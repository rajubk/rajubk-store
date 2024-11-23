import { CartProduct } from "@/services/cart/type";
import { getProductById } from "@/services/product/product";
import Image from "next/image";
import React from "react";
import DeleteCartItem from "./delete-cart-item";
import { Link } from "@/i18n/routing";

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
    <div className="grid w-full grid-cols-12 place-items-center gap-4 bg-white px-4 py-2 shadow-lg">
      <div className="col-span-2">
        <Image src={image} width={64} height={64} alt="monkey" />
      </div>
      <div className="col-span-4 text-xs font-bold md:text-sm">
        <Link href={`product/${productId}`} className="text-blue-500 underline">
          {title.slice(0, 30)}
        </Link>
        <div className="text-xs text-slate-500 md:hidden">
          {description.slice(0, 40)}
        </div>
        <div className="hidden text-xs text-slate-500 md:block">
          {description.slice(0, 150)}
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-center">
        <div className="text-xs text-slate-500">Quantity</div>
        <div className="font-bold">{quantity}</div>
      </div>
      <div className="col-span-2 hidden flex-col items-center text-xs md:flex">
        <div className="text-xs text-slate-500">Ratings</div>
        <div className="font-bold">{`${rate}(${count})`}</div>
      </div>
      <div className="col-span-2 flex-col items-center text-xs md:col-span-1">
        <div className="text-xs text-slate-500">Price</div>
        <div className="font-bold">{`$${price}`}</div>
      </div>
      <div className="col-span-2 text-red-500 md:col-span-1">
        <DeleteCartItem productId={productId} />
      </div>
    </div>
  );
};

export default CartItem;
