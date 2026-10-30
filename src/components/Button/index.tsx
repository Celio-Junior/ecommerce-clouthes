"use client";
import { cn } from "@/src/utils/function-formats";
import { ComponentPropsWithoutRef } from "react";

const buttonSizes = {
  md: cn("text-md p-1 font-medium"),
  lg: cn("text-lg p-2 font-semibold"),
  xl: cn("text-xl p-3 font-bold"),
};

const buttonVariants = {
  customer: "",
  default: "",
  confirm: cn(
    "transition duration-150 cursor-pointer hover:text-gray-700 text-white",
    "bg-(--beige-color) hover:bg-(--salmon-dark-color) hover:text-(--white-sand-color)",
    "hover:scale-103",
  ),
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  children,
  className,
  variant = "default",
  size = "xl",
  type = "button",
  ...buttonRest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "block w-[80%] mx-auto rounded-2xl cursor-pointer transition duration-150",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      type={type}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
