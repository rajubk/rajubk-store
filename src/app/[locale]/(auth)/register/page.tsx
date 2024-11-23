import React from "react";
import Container from "@/app/ui/container";
import { NotificationProvider } from "@/providers/notification-provider";
import Notification from "@/app/components/notification/notification";
import { Metadata } from "next";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Register",
  description: "This is register page",
};

const RegisterPage = () => {
  return (
    <Container>
      <NotificationProvider>
        <Notification />
        <RegisterForm />
      </NotificationProvider>
    </Container>
  );
};

export default RegisterPage;
