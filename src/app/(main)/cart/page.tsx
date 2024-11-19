import Container from "@/app/ui/container";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const CartPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<Loading />}>
        <Container>
          <HomeWrapper />
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default CartPage;
