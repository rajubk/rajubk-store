import Button from "@/app/ui/button";
import React from "react";

const LoginButton = ({ ...props }) => {
  return (
    <Button type="submit" {...props}>
      Login
    </Button>
  );
};

export default LoginButton;
