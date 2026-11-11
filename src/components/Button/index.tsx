"use client";
import { cn } from "@/utils/function-formats";
import { ComponentPropsWithoutRef } from "react";

const buttonSizes = {
  md: cn("text-md p-1 rounded-md font-medium cursor-pointer"),
  lg: cn("text-lg p-3 font-semibold rounded-xl", "transition duration-120"),
  xl: cn("text-2xl px-6 py-4 font-bold rounded-xl transition duration-110"),
};

const buttonVariants = {
  customer: "",
  default: cn(
    "cursor-pointer",
    "bg-gray-950 text-gray-200 hove hover:scale-105 mt-5",
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
