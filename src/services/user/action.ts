"use server";

import { revalidateTag } from "next/cache";
import { GET_LOGGED_USER_TAG } from "./constants";

export const revalidateLoggedUser = () => {
  revalidateTag(GET_LOGGED_USER_TAG);
};
