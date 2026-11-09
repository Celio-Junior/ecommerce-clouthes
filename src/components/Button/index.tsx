"use client";
import { cn } from "@/utils/function-formats";
import { ComponentPropsWithoutRef } from "react";

const buttonSizes = {
  md: cn("text-md p-1 font-medium"),
  lg: cn("text-lg p-3 font-semibold rounded-xl", "transition duration-120"),
  xl: cn("text-2xl p-5 font-bold"),
};

const buttonVariants = {
  customer: "",
  default: cn(
    "cursor-pointer",
    "bg-blue-400 text-gray-200 hover:bg-blue-700 hover:text-gray-50 hover:scale-105 mt-5",
  ),
  form: cn(
    "transition duration-150 cursor-pointer hover:text-gray-700 text-white",
    "bg-(--beige-color) hover:bg-(--salmon-dark-color) hover:text-(--white-sand-color)",
    "hover:scale-103",
    "block w-[80%] mx-auto rounded-2xl cursor-pointer transition duration-150",
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
      className={cn(buttonSizes[size], buttonVariants[variant], className)}
      type={type}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
