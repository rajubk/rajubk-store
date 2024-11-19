import { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex-1">{children}</div>
    </div>
  );
}
