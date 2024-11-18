import { GET_PRODUCTS } from "@/utils/endpoints";
import { FETCH_PRODUCTS_TAG } from "./constats";
import { Product } from "./type";
import { logger } from "@/utils/pino";

export const getProducts = async () => {
  try {
    const url = `${process.env.API_URL}/${GET_PRODUCTS}`;
    logger.info("prodcut | fetch start");
    const res = await fetch(url, {
      next: { revalidate: 3600, tags: [FETCH_PRODUCTS_TAG] },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const products: Product[] = await res.json();
    logger.info("product| fetch sucess");

    return products;
  } catch (error) {
    logger.error({ error }, "product | fetch error");
    throw new Error(`Failed to fetch error:${error}`);
  }
};

export const getProduct = async (id: string) => {
  try {
    const url = `${process.env.API_URL}/${GET_PRODUCTS}/${id}`;
    const res = await fetch(url, {
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
