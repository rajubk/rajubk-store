"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

interface Notification {
  variant: "standard" | "filled" | "outlined";
  severity: "success" | "info" | "warning" | "error";
  message: string;
}
interface NotificationContext {
  notification: Notification;
  clearNotification: () => void;
  setNotification: Dispatch<SetStateAction<Notification>>;
}

const defaultValue: Notification = {
  message: "",
  variant: "filled",
  severity: "info",
};

export const notificationContext = createContext<NotificationContext | null>(
  null
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<Notification>(defaultValue);

  const value = useMemo(() => {
    const clearNotification = () => setNotification(defaultValue);
    return { notification, clearNotification, setNotification };
  }, [notification, setNotification]);

  return (
    <notificationContext.Provider value={value}>
      {children}
    </notificationContext.Provider>
  );
};
