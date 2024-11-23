import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "@/i18n/types";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Raju BK eCommerce Store",
    template: "%s - Raju BK eCommerce Store",
  },
  description: "Raju BK store for best purchases!!!",
  openGraph: {
    images: ["https://store.rajubk.site/twitter-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
