import React, { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`rounded-md border p-2 ${className}`}>{children}</div>;
};

export default Card;
