import Container from "@/app/ui/container";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../../components/loading";
import ProductWrapper from "./product-wrapper";

const ProductPage = ({ params }: { params: { productId: string } }) => {
  const { productId = "-1" } = params;
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<Loading />}>
        <Container>
          <ProductWrapper productId={productId} />
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProductPage;
