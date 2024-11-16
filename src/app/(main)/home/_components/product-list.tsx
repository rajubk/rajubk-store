import { Product } from "@/services/product/type";
import React from "react";
import ProductItem from "./product-item";

const ProductList = ({ products }: { products: Readonly<Product[]> }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {(products ?? []).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
