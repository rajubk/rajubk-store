"use client";

import InlineNotification from "@/app/ui/inline-notification";
import { notificationContext } from "@/providers/notification-provider";
import React, { useContext } from "react";

const Notification = ({ error }: { error?: string }) => {
  const {
    notification: { message, severity, variant },
    clearNotification,
  } = useContext(notificationContext);

  if (!(error || message)) {
    return null;
  }

  return (
    <div className="w-full absolute top-0 left-0 right-0 flex justify-center items-center px-8 md:px-24 py-8">
      <InlineNotification
        message={error || message}
        severity={error ? "error" : severity}
        variant={variant}
        clearNotification={clearNotification}
      />
    </div>
  );
};

export default Notification;
