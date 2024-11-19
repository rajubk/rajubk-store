import Button from "@/app/ui/button";
import { useNotificationConext } from "@/providers/notification-provider";
import React, { useEffect } from "react";

const LoginButton = ({ ...props }) => {
  return (
    <Button type="submit" {...props}>
      Login
    </Button>
  );
};

export default LoginButton;
