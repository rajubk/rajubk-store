import React, { ReactNode } from "react";
import cx from "classnames";

const Button = ({
  children,
  variant = "primary",
  className = "",
  size = "md",
  ...props
}: {
  variant?: "primary" | "secondary" | "naked" | "error";
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  [k: string]: unknown;
}) => {
  return (
    <button
      className={cx(
        "rounded-md flex justify-center items-center ",
        {
          "bg-blue-500 text-white disabled:bg-gray-300": variant === "primary",
          border: variant === "secondary",
          "bg-transparent text-black disabled:text-gray-300":
            variant === "naked",
          "bg-red-500 text-white": variant === "error",
          "px-[6px] py-[2px] text-[10px]": size === "sm",
          "px-4 py-2": size === "md",
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
