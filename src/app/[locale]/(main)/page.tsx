import { redirect } from "@/i18n/routing";

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  redirect({ href: "/home", locale });
};

export default Page;
