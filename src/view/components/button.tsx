import { ComponentProps, ReactNode } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

export function Button({
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex h-10 items-center gap-2 rounded-lg bg-app-green px-4 py-2 text-sm transition-colors hover:bg-emerald-700 disabled:opacity-60",
        variant === "outline" && "bg-zinc-800 hover:bg-zinc-600",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
