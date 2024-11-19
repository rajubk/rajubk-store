import React from "react";
import Notification from "./notification";

const NotificationWrapper = ({ error }: { error?: string }) => {
  return <Notification error={error} />;
};

export default NotificationWrapper;
