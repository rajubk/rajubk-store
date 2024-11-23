import { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className="w-screen h-screen bg-slate-50">{children}</div>;
}
