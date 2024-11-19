"use client";

import { notificationContext } from "@/providers/notification-provider";
import React, { useContext } from "react";

const Notification = ({ error }: { error?: string }) => {
  const {
    notification: { message, severity, variant },
    clearNotification,
  } = useContext(notificationContext);

  const notify = {
    message: error || message,
    severity: error ? "error" : severity,
    variant: variant,
  };

  return <div>Notification</div>;
};

export default Notification;
