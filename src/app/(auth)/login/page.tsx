import React from "react";
import LoginForm from "./login-form";
import Container from "@/app/ui/container";
import { NotificationProvider } from "@/providers/notification-provider";
import Notification from "@/app/components/notification/notification";
import { getLoggedUser } from "@/services/user/user";
import { isEmpty } from "lodash";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Login",
  description: "This is login page",
};

const LoginPage = async () => {
  const user = await getLoggedUser();

  if (!isEmpty(user)) {
    redirect("/");
  }

  return (
    <Container>
      <NotificationProvider>
        <Notification />
        <LoginForm />
      </NotificationProvider>
    </Container>
  );
};

export default LoginPage;
