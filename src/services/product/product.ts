import { GET_PRODUCTS } from "@/utils/endpoints";
import { FETCH_PRODUCTS_TAG } from "./constats";
import { Product } from "./type";

export const getProducts = async () => {
  try {
    const res = await fetch(GET_PRODUCTS, {
      next: { revalidate: 3600, tags: [FETCH_PRODUCTS_TAG] },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { products = [] } = await res.json();
    return products as Product[];
  } catch (error) {
    throw new Error(`Failed to fetch error:${error}`);
  }
};
