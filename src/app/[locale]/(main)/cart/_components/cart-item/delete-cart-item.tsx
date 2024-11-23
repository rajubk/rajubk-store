"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import DeleteButton from "./delete-button";
import { useNotificationConext } from "@/providers/notification-provider";
import { ACTION_STATUS } from "@/utils/constants";
import { deleteCartItem, revalidateUserCart } from "@/services/cart/action";

const DeleteCartItem = ({ productId }: { productId: number }) => {
  const [state, deleteCartAction] = useFormState(
    deleteCartItem.bind(null, productId),
    null,
  );
  const { setNotification } = useNotificationConext();

  useEffect(() => {
    const { status = "none" } = state || {};
    switch (status) {
      case ACTION_STATUS.SUCCESS:
        (async () => revalidateUserCart())();
        setNotification({
          message: "Item successfully deleted from cart!!!",
          severity: "success",
          variant: "filled",
        });
        break;
      case ACTION_STATUS.FAILURE:
        setNotification({
          message: "Unable to delete cart item!!!",
          severity: "error",
          variant: "filled",
        });
        break;
    }
  }, [state, setNotification]);

  return (
    <form
      action={deleteCartAction}
      noValidate
      className="flex flex-col space-y-2"
    >
      <DeleteButton />
    </form>
  );
};

export default DeleteCartItem;
