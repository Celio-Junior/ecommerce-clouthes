import { cn } from "@/src/utils/function-formats";
import { ComponentPropsWithRef, use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const inputVariant = {
  customer: "",
  default: cn(
    "absolute z-0 left-2",
    "text-(--sand-color) peer-focus:text-(--salmon-dark-color) font-semibold text-lg bg-white",
    "peer-focus: peer-focus:z-1 peer-focus:-translate-y-6",
  ),
};

type InputProps = {
  classInput?: InputProps["className"];
  label: string;
  htmlFor?: string;
  variant: keyof typeof inputVariant;
} & ComponentPropsWithRef<"input">;
export function Input({
  className,
  classInput,
  label,
  type = "text",
  htmlFor = "",
  name,
  variant = "default",
}: InputProps) {
  const divClassName = cn(
    "w-full",
    "flex justify-center relative",
    "flex-col-reverse",
    variant === "default" && "border rounded-xl flex-col shadow-lg",
  );

  const [isReadPassword, setIsReadPassword] = useState<boolean>(false);

  return (
    <div className={cn(divClassName, className)}>
      <div className="w-full relative flex items-center mt-3">
        <input
          name={name}
          type={isReadPassword ? "text" : type}
          className={cn(
            variant === "default" && "outline-0 px-3 py-2 z-2",
            "peer w-full",
            classInput,
          )}
        />
        {type === "password" && (
          <span
            onClick={() => setIsReadPassword((prev) => !prev)}
            className="absolute right-2 cursor-pointer hover:text-(--sand-color) transition duration-110 hover:scale-105"
          >
            {isReadPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
      <label
        className={cn("transition-all duration-200", inputVariant[variant])}
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
