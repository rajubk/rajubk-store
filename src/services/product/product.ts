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
    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    throw new Error(`Failed to fetch error:${error}`);
  }
};

export const getProduct = async (id: string) => {
  try {
    const res = await fetch(`${GET_PRODUCTS}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const product: Product = await res.json();
    return product;
  } catch (error) {
    throw new Error(`Failed to fetch error:${error}`);
  }
};
