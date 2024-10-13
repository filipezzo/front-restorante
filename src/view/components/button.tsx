import { ComponentProps, ReactNode } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export function Button({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-app-green flex h-10 items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-emerald-700",
        variant === "outline" && "bg-zinc-800 hover:bg-zinc-600",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
