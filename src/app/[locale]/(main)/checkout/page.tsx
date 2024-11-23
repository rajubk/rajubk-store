import Container from "@/app/ui/container";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../components/loading";
import { getLoggedUser } from "@/services/user/user";
import { isEmpty } from "lodash";
import { redirect } from "next/navigation";
import { NotificationProvider } from "@/providers/notification-provider";
import Notification from "@/app/components/notification/notification";
import CheckoutWrapper from "./checkout-wrapper";

const CheckoutPage = async () => {
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
            <CheckoutWrapper />
          </Container>
        </Suspense>
      </NotificationProvider>
    </ErrorBoundary>
  );
};

export default CheckoutPage;
