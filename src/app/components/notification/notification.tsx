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
    <div className="absolute left-0 right-0 top-0 flex w-full items-center justify-center px-8 py-12 md:px-24">
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
