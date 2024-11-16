import React from "react";
import { getProducts } from "@/services/product/product";
import ProductList from "./_components/product-list";

const HomeWrapper = async () => {
  const products = await getProducts();

  return <ProductList products={products} />;
};

export default HomeWrapper;
