import { cn } from "../../app/utils/cn";

interface LineProps {
  position?: "horizontal" | "vertical";
}

export function Line({ position = "horizontal" }: LineProps) {
  return (
    <div
      className={cn(
        "bg-zinc-700",
        position === "horizontal" && "h-0.5 w-full",
        position === "vertical" && "h-full w-0.5",
      )}
    />
  );
}
