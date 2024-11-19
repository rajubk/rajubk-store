"use client";

import { notificationContext } from "@/providers/notification-provider";
import React, { useContext } from "react";

const Notification = ({ error }: { error?: string }) => {
  const {
    notification: { message, severity, variant },
    clearNotification,
  } = useContext(notificationContext);

  const notification = {
    message: error || message,
    severity: error ? "error" : severity,
    variant: variant,
  };

  if (!notification.message) {
    return null;
  }

  return (
    <div className="w-full absolute top-0 left-0 right-0 flex justify-center items-center px-8 md:px-24 py-4">
      <div className="w-full p-8 bg-red-300 flex justify-between items-center rounded-xl">
        <p>{notification.message}</p>
        <button onClick={clearNotification}>X</button>
      </div>
    </div>
  );
};

export default Notification;
