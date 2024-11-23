import Button from "@/app/ui/button";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

const LoginButton = ({ ...props }) => {
  const t = useTranslations();
  const { pending } = useFormStatus();

  return (
    <Button type="submit" {...props} disabled={pending}>
      {t("login")}
    </Button>
  );
};

export default LoginButton;
