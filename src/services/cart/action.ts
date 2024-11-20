"use server";

import { revalidateTag } from "next/cache";
import { FETCH_USER_CART_TAG } from "./constants";

export const revalidateUserCart = async () => {
  revalidateTag(FETCH_USER_CART_TAG);
};
