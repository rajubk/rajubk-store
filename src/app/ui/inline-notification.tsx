import React from "react";
import { Notification } from "./types";
import cx from "classnames";

interface Props extends Notification {
  clearNotification: () => void;
}

const InlineNotification = ({
  message = "",
  severity = "info",
  variant = "filled",
  clearNotification,
}: Props) => {
  console.log(variant);
  return (
    <div
      className={cx(
        "flex w-full items-center justify-between rounded-xl px-8 py-4 text-slate-700",
        {
          "bg-green-300": severity === "success",
          "bg-blue-300": severity === "info",
          "bg-yellow-300": severity === "warning",
          "bg-red-300": severity === "error",
        },
      )}
    >
      {message}
      <button
        onClick={clearNotification}
        className="text-lg font-extrabold text-black"
      >
        X
      </button>
    </div>
  );
};

export default InlineNotification;
