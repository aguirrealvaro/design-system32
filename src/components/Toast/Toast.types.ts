import { ReactNode } from "react";

export type ToastVariantType = "default" | "positive" | "negative" | "warning" | "neutral";

export type ToastOptions = {
  permanent?: boolean;
  variant?: ToastVariantType;
};

export type ToastProps = {
  children?: ReactNode;
  id: number;
  content: string;
} & ToastOptions;