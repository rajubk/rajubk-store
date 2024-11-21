import { Cart } from "@/services/cart/type";
import CartItem from "./cart-item";
import Conditional from "@/app/ui/conditional";
import { isEmpty } from "lodash";
import EmptyCart from "./empty-cart";

const CartItems = ({ cart }: { cart: Cart }) => {
  const { products = [] } = cart;

  return (
    <>
      <div className="w-full h-full flex flex-col px-4 py-8 space-y-8">
        <Conditional test={!isEmpty(products)} fallback={<EmptyCart />}>
          {products.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
        </Conditional>
      </div>
    </>
  );
};

export default CartItems;
