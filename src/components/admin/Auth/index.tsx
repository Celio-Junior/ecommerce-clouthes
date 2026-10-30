"use client";

import { cn } from "@/src/utils/function-formats";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { SubmitEvent } from "react";
import authenticationAdminAction from "@/src/actions/admin/auth/authentication";

type AuthProps = {
  children: React.ReactNode;
};

const inputClass = cn(
  "outline-0 border-2 rounded-xl text-lg px-2 py-1",
  "focus:border-(--beige-color) text-gray-700",
  "outline-3 outline-transparent focus:outline-(--beige-color)",
);
const labelClass = cn("text-xl text-(--salmon-dark-color) font-semibold");

let isValidationUser = true;
export function Auth({ children }: AuthProps) {
  function handlerFormAuth(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    form.values().forEach((input) => {
      if (typeof input !== "string") return;
      if (input.trim().length < 3) isValidationUser = false;
    });

    if (!isValidationUser) {
      isValidationUser = true;
      return;
    }

    authenticationAdminAction(form);
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 min-w-120 w-1/3 max-w-160">
      {children}

      <form onSubmit={handlerFormAuth}>
        <fieldset className="flex flex-col gap-2 mt-5">
          <Input
            className={labelClass}
            classInput={inputClass}
            name="email"
            variant="customer"
            label="Email"
          />
          <Input
            className={labelClass}
            classInput={inputClass}
            name="password"
            variant="customer"
            label="Password"
            type="password"
          />

          <Button
            className="w-full my-5"
            size="xl"
            type="submit"
            variant="confirm"
          >
            login
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
