import React from "react";
import LoginForm from "./login-form";
import Container from "@/app/ui/container";
import { NotificationProvider } from "@/providers/notification-provider";
import Notification from "@/app/components/notification/notification";

const LoginPage = () => {
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
