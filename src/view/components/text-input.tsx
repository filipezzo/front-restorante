import { ComponentProps, forwardRef, useId } from "react";
import { cn } from "../../app/utils/cn";

interface TextInputProps extends ComponentProps<"input"> {
  label: string;
  className?: string;
  error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, className, ...rest }, ref) => {
    const id = useId();
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          id={id}
          className={cn(
            "h-10 w-full rounded-md border border-gray-400 bg-transparent p-4 outline-none focus-within:border-app-green",
            className,
          )}
          {...rest}
        />
        {error && <span className="text-sm text-rose-500">{error}</span>}
      </div>
    );
  },
);
