import React from "react";
import ProductDetail from "./_components/product-detail";
import { getProduct } from "@/services/product/product";

const ProductWrapper = async ({
  productId,
}: {
  productId: Readonly<string>;
}) => {
  const product = await getProduct(productId);

  return <ProductDetail product={product} />;
};

export default ProductWrapper;
