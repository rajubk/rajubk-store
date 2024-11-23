import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto h-full w-full max-w-5xl py-8">
      {children}
    </div>
  );
};

export default Container;
