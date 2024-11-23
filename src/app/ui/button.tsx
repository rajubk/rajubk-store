import React, { ReactNode } from "react";
import cx from "classnames";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  variant?: "primary" | "secondary" | "naked" | "error";
  children: ReactNode;
  className?: string;
  [k: string]: unknown;
}) => {
  return (
    <button
      className={cx(
        "px-4 py-2 rounded-md flex justify-center items-center disabled:bg-gray-300",
        {
          "bg-blue-500 text-white": variant === "primary",
          border: variant === "secondary",
          "bg-transparent": variant === "naked",
          "bg-red-500 text-white": variant === "error",
        },
        className.slice()
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
