"use client";
import { Button } from "@/components/Button";
import { ButtonSocial } from "@/components/Button/Social";
import { Input } from "@/components/Input";
import { cn } from "@/utils/function-formats";

import Link from "next/link";

export function FormRegister() {
  return (
    <form className="w-full mt-5" action="">
      <fieldset className={cn("w-full")}>
        <div className="flex flex-col gap-8 mb-5">
          <Input variant="form" label="Name" name="password" type="text" />
          <Input variant="form" name="email" label="Email" type="email" />
          <Input
            variant="form"
            label="Password"
            name="password"
            type="password"
          />
          <Input
            variant="form"
            htmlFor="password2"
            label="Repeat password"
            name="password2"
            type="password"
          />
        </div>

        <Button variant="form">Create account</Button>
        <ButtonSocial />
        <span className="block my-7 m-auto w-fit text-gray-500 font-semibold text-md">
          have an account?{" "}
          <Link
            className="font-bold text-(--beige-color)"
            href="/account/login"
          >
            Login
          </Link>
        </span>
      </fieldset>
    </form>
  );
}
