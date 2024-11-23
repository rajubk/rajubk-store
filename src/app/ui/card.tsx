import React, { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`p-2 border rounded-md ${className}`}>{children}</div>;
};

export default Card;
