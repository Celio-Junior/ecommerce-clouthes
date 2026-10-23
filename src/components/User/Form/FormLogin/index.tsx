"use client";
import { Button } from "@/src/components/Button";
import { ButtonSocial } from "@/src/components/Button/Social";
import { Input } from "@/src/components/Input";
import { cn } from "@/src/utils/function-formats";

import Link from "next/link";

export function FormLogin() {
  return (
    <form className="w-full mt-5" action="">
      <fieldset className={cn("w-full")}>
        <Input className="mb-6" name="email" label="Email" type="email" />

        <Input label="Password" name="password" type="password" />

        <span className="block mt-2 mb-7">
          <Link
            className="font-bold text-(--beige-color) hover:underline hover:text-(--salmon-dark-color)"
            href="/account/forgot-password"
          >
            Forgot Password?
          </Link>
        </span>

        <Button variant="confirm">Login</Button>
        <ButtonSocial />
        <span className="block my-7 m-auto w-fit text-gray-500 font-semibold text-md">
          Don´t have an account?{" "}
          <Link
            className="font-bold text-(--beige-color)"
            href="/account/register"
          >
            Register
          </Link>
        </span>
      </fieldset>
    </form>
  );
}
