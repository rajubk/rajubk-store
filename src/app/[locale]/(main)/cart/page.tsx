import Container from "@/app/ui/container";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../components/loading";
import CartWrapper from "./cart-wrapper";
import { getLoggedUser } from "@/services/user/user";
import { isEmpty } from "lodash";
import { redirect } from "next/navigation";
import { NotificationProvider } from "@/providers/notification-provider";
import Notification from "@/app/components/notification/notification";
import CartSummaryWrapper from "./_components/cart-summary/cart-summary-wrapper";

const CartPage = async () => {
  const user = await getLoggedUser();

  if (isEmpty(user)) {
    redirect("/");
  }
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <NotificationProvider>
        <Notification />
        <Suspense fallback={<Loading />}>
          <Container>
            <CartWrapper />
          </Container>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <CartSummaryWrapper />
        </Suspense>
      </NotificationProvider>
    </ErrorBoundary>
  );
};

export default CartPage;
