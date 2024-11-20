import React from "react";
import ProductDetail from "./_components/product-detail";
import { getProductById } from "@/services/product/product";

const ProductWrapper = async ({
  productId,
}: {
  productId: Readonly<string>;
}) => {
  const product = await getProductById(productId);

  return <ProductDetail product={product} />;
};

export default ProductWrapper;
