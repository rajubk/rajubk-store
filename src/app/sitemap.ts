import { getProducts } from "@/services/product/product";
import type { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const products = await getProducts();

  return (products ?? []).map((x) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/product/${x.id}`,
    lastModified: new Date(),
  }));
};

export default sitemap;
