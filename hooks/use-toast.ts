"use client";

import { toast as sonnerToast } from "sonner";

type ToastOptions = {
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
};

function toast(
  title: string,
  options?: ToastOptions & { variant?: "error" | "success" }
) {
  sonnerToast(title, {
    description: options?.description,
    action: options?.action
      ? {
          label: options.action.label,
          onClick: options.action.onClick,
        }
      : undefined,
    duration: options?.duration || 4000,
    className:
      options?.variant === "error" ? "border border-red-500 text-red-500" : "",
  });
}

function useToast() {
  return { toast };
}

export { useToast, toast };
