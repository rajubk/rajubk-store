"use client";
import { Notification } from "@/app/ui/types";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

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

export const notificationContext = createContext<NotificationContext>(null!);

export const useNotificationConext = () => useContext(notificationContext);

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
