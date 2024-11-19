import React from "react";
import LoginForm from "./login-form";
import Container from "@/app/ui/container";
import { NotificationProvider } from "@/providers/notification-provider";

const LoginPage = () => {
  return (
    <Container>
      <NotificationProvider>
        <LoginForm />;
      </NotificationProvider>
    </Container>
  );
};

export default LoginPage;
