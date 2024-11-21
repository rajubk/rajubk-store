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

const CartPage = async () => {
  const user = await getLoggedUser();

  if (isEmpty(user)) {
    redirect("/");
  }
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<Loading />}>
        <Container>
          <NotificationProvider>
            <Notification />
            <CartWrapper />
          </NotificationProvider>
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default CartPage;
