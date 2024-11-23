import Button from "@/app/ui/button";
import { useFormStatus } from "react-dom";

const RegisterButton = ({ ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" {...props} disabled={pending}>
      Register
    </Button>
  );
};

export default RegisterButton;
