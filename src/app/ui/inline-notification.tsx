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
        "w-full px-8 py-4 rounded-xl text-slate-700 flex justify-between items-center",
        {
          "bg-green-300": severity === "success",
          "bg-blue-300": severity === "info",
          "bg-yellow-300": severity === "warning",
          "bg-red-300": severity === "error",
        }
      )}
    >
      {message}
      <button
        onClick={clearNotification}
        className="text-black font-extrabold text-lg"
      >
        X
      </button>
    </div>
  );
};

export default InlineNotification;
