import { getProducts } from "@/services/product/product";
import type { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const products = await getProducts();

  return (products ?? []).map((x) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${x.id}`,
  }));

  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
};

export default sitemap;
