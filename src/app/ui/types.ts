export interface Notification {
  variant?: "standard" | "filled" | "outlined";
  severity: "success" | "info" | "warning" | "error";
  message: string;
}
