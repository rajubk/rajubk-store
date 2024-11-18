import Container from "@/app/ui/container";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../../components/loading";
import ProductWrapper from "./product-wrapper";
import { Metadata } from "next";
import { getProduct } from "@/services/product/product";
import { logger } from "@/utils/pino";

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const { productId = "-1" } = params;
  const product = await getProduct(productId);
  const { image = "", title, description } = product;
  return {
    title,
    description,
    openGraph: {
      images: [image],
    },
  };
};

const ProductPage = ({ params }: { params: { productId: string } }) => {
  const { productId = "-1" } = params;

  logger.info({ productId }, "Product Page");

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
