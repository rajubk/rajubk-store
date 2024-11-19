import Container from "@/app/ui/container";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../components/loading";
import CartWrapper from "./cart-wrapper";

const CartPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<Loading />}>
        <Container>
          <CartWrapper />
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default CartPage;
