import { ReactNode } from "react";
import Header from "./components/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
    </div>
  );
}
