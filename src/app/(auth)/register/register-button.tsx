import Button from "@/app/ui/button";

const RegisterButton = ({ ...props }) => {
  return (
    <Button type="submit" {...props}>
      Register
    </Button>
  );
};

export default RegisterButton;
