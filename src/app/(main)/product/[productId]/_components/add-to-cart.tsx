"use client";
import React, { useEffect, useRef } from "react";
import AddToCartButton from "./add-to-cart-button";
import { useFormState } from "react-dom";
import { addToCart } from "@/services/product/action";
import { useNotificationConext } from "@/providers/notification-provider";
import { ACTION_STATUS } from "@/utils/constants";
import { useForm } from "react-hook-form";
import { revalidateUserCart } from "@/services/cart/action";

const AddToCart = ({ productId }: { productId: number }) => {
  const [state, addToCartAction] = useFormState(
    addToCart.bind(null, productId),
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { quantity: 1 },
  });
  const { setNotification } = useNotificationConext();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const { status = "none" } = state || {};
    switch (status) {
      case ACTION_STATUS.SUCCESS:
        (async () => revalidateUserCart())();
        setNotification({
          message: "Item successfully added to cart!!!",
          severity: "success",
          variant: "filled",
        });
        break;
      case ACTION_STATUS.FAILURE:
        setNotification({
          message: "Unable to add to cart!!!",
          severity: "error",
          variant: "filled",
        });
        break;
      case ACTION_STATUS.LOGIN_REQUIRED:
        setNotification({
          message: "Login to add items to cart!!!",
          severity: "error",
          variant: "filled",
        });
        break;
    }
  }, [state, setNotification]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(() =>
        addToCartAction(new FormData(formRef.current!))
      )}
      noValidate
      className="flex flex-col space-y-4"
    >
      <div>
        <input
          placeholder="Quantity"
          {...register("quantity", {
            required: "Quantity is required",
            pattern: { value: /^[0-9]*$/, message: "only numbers" },
            min: { value: 1, message: "Minimum 1" },
            max: { value: 999, message: "Maximum 999" },
          })}
          className="border px-2 py-1"
        />
        {errors.quantity && (
          <div className="text-red-500 text-sm">{errors.quantity.message}</div>
        )}
      </div>
      <AddToCartButton />
    </form>
  );
};

export default AddToCart;
