"use client";
import { extractClassesStyles } from "@/utils/extract-styles";
import { cn } from "@/utils/function-formats";
import { ComponentPropsWithRef, FocusEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const labelVariant = {
  customer: "",
  form: cn(
    "w-fit block",
    "absolute z-1 left-2",
    "text-(--salmon-dark-color)  font-semibold text-lg bg-white",
    "peer-focus:-translate-y-6 peer-focus:text-(--sand-color)",
  ),
  default: cn(
    "w-full",
    "font-bold text-xl placeholder:text-xl placeholder:text-gray-500",
  ),
};

const inputVariant = {
  customer: "",
  form: cn("outline-0 px-3 py-2 z-0", "w-full"),
  default: cn(
    "w-full text-lg  rounded-lg p-2 font-semibold ",
    "border-2 border-gray-900 outline outline-transparent focus:outline-gray-900",
  ),
};

type InputProps = {
  classInput?: InputProps["className"];
  label: string;
  htmlFor?: string;
  variant: keyof typeof labelVariant;
} & ComponentPropsWithRef<"input">;
export function Input({
  className = "",
  classInput,
  label,
  type = "text",
  htmlFor = "",
  name,
  variant = "default",
  ...rest
}: InputProps) {
  const divClassName = cn(
    "flex justify-center relative",
    "flex-col-reverse",
    variant === "form" && "border rounded-xl flex-col w-full shadow-lg",
    variant === "default" && "w-1/3 gap-3",
  );
  const divAndLabelStyle = extractClassesStyles(
    className,
    "w",
    "flex",
    "grid",
    "mt",
    "gap",
  );

  const [isReadPassword, setIsReadPassword] = useState<boolean>(false);
  const [isContentInput, setIsContentInput] = useState<boolean>(false);

  const handleFocusOut = (e: FocusEvent<HTMLInputElement, Element>) => {
    console.log(e.target.value.trim().length, isContentInput);
    if (e.target.value.trim().length > 0) return setIsContentInput(true);
    setIsContentInput(false);
  };

  return (
    <div className={cn(divClassName, divAndLabelStyle.result_searched)}>
      <>
        <input
          name={name}
          type={isReadPassword ? "text" : type}
          className={cn("peer", inputVariant[variant], classInput)}
          onBlur={handleFocusOut}
          {...rest}
        />
        {type === "password" && (
          <span
            onClick={() => setIsReadPassword((prev) => !prev)}
            className="absolute right-2 cursor-pointer hover:text-(--sand-color) transition duration-110 hover:scale-105"
          >
            {isReadPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </>
      <label
        className={cn(
          "transition-all duration-200",
          labelVariant[variant],
          divAndLabelStyle.result_retired,
          variant === "form" &&
            isContentInput &&
            "-translate-y-6 text-(--sand-color)",
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
