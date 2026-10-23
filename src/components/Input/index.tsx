import { cn } from "@/src/utils/function-formats";
import { ComponentPropsWithRef } from "react";

type InputProps = {
  classInput?: InputProps["className"];
  label: string;
  htmlFor?: string;
} & ComponentPropsWithRef<"input">;
export function Input({
  className,
  classInput,
  label,
  type = "text",
  htmlFor = "",
  name,
}: InputProps) {
  const divClassName = cn(
    "w-full border rounded-xl shadow-lg",
    "flex flex-col justify-center relative",
  );
  return (
    <div className={cn(divClassName, className)}>
      <input
        name={name}
        type={type}
        className={cn("outline-0 px-3 py-2 z-2", "peer", classInput)}
      />

      <label
        className={cn(
          "absolute z-0 left-2 transition-all duration-200",
          "text-(--sand-color) peer-focus:text-(--salmon-dark-color) font-semibold text-lg bg-white",
          "peer-focus: peer-focus:z-1 peer-focus:-translate-y-6",
        )}
        htmlFor={
          !htmlFor
            ? label?.toString().split(" ")[0].toLocaleLowerCase()
            : htmlFor
        }
      >
        {label}
      </label>
    </div>
  );
}
