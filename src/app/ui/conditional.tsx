import React, { ReactNode } from "react";

const Conditional = ({
  test,
  fallback = null,
  children,
}: {
  test: unknown;
  fallback?: ReactNode;
  children: ReactNode;
}) => {
  return <>{!!test ? children : fallback}</>;
};

export default Conditional;
