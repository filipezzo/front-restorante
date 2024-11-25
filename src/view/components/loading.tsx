import { cn } from "../../app/utils/cn";

interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  return (
    <div
      className={cn(
        "animate-spin size-6 rounded-full border-r-2 border-t-2 border-blue-500 duration-700",
        className,
      )}
    />
  );
}
