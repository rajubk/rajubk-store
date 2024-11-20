import Container from "@/app/ui/container";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../components/loading";
import CartWrapper from "./cart-wrapper";
import { getLoggedUser } from "@/services/user/user";
import { isEmpty } from "lodash";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const user = await getLoggedUser();

  if (isEmpty(user)) {
    redirect("/");
  }
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<Loading />}>
        <Container>
          <CartWrapper />
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
  ``;
};

export default CartPage;
