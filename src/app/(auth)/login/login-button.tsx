import Button from "@/app/ui/button";

const LoginButton = ({ ...props }) => {
  return (
    <Button type="submit" {...props}>
      Login
    </Button>
  );
};

export default LoginButton;
