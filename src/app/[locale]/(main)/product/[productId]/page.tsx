import Container from "@/app/ui/container";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../../components/loading";
import ProductWrapper from "./product-wrapper";
import { Metadata } from "next";
import { getProductById } from "@/services/product/product";
import { NotificationProvider } from "@/providers/notification-provider";
import Notification from "@/app/components/notification/notification";

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const { productId = "-1" } = params;
  const product = await getProductById(productId);
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

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<Loading />}>
        <Container>
          <NotificationProvider>
            <Notification />
            <ProductWrapper productId={productId} />
          </NotificationProvider>
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProductPage;
