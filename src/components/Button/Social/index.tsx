"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "..";
import { cn } from "@/src/utils/function-formats";

export function ButtonSocial() {
  return (
    <div className="w-[90%] mx-auto mt-7 border-t-2 border-(--gray-purple-color) relative flex justify-center">
      <span className="bg-white absolute -top-3 px-2 font-bold text-gray-500">
        OR
      </span>

      <Button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        size="md"
        variant="customer"
        className={cn(
          "flex items-center justify-center mt-5 p-4 relative",
          "bg-(--gray-purple-color) hover:bg-(--white-sand-color) shadow-2xl hover:text-(--salmon-dark-color) hover:scale-105",
        )}
      >
        <FcGoogle className="w-10 h-10 absolute left-4" /> Continue with Google
      </Button>
    </div>
  );
}
