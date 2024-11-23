import Button from "@/app/ui/button";
import { useFormStatus } from "react-dom";

const LoginButton = ({ ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" {...props} disabled={pending}>
      Login
    </Button>
  );
};

export default LoginButton;
