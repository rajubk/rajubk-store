import { ReactNode } from "react";
import Header from "./components/header/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen flex-col bg-slate-50">
      <div className="sticky top-0 w-full">
        <Header />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
