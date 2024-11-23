import { redirect } from "@/i18n/routing";

const Page = () => {
  redirect({ href: "/home", locale: "en" });
};

export default Page;
