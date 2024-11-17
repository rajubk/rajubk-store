import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full container max-w-5xl mx-auto py-8">
      {children}
    </div>
  );
};

export default Container;
