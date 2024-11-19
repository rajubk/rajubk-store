import Button from "@/app/ui/button";
import { useNotificationConext } from "@/providers/notification-provider";
import React, { useEffect } from "react";

const LoginButton = ({ ...props }) => {
  const { setNotification } = useNotificationConext();

  useEffect(() => {
    setNotification({
      message: "monkey",
      severity: "error",
      variant: "filled",
    });
  }, []);

  return (
    <Button type="submit" {...props}>
      Login
    </Button>
  );
};

export default LoginButton;
