"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { toastMessages } from "@/lib/toast";
import { SubmitEvent } from "react";

export function FormSettings() {
  const handleForm = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    toastMessages.success("teste");
  };

  return (
    <form onSubmit={handleForm} action="">
      <Input
        type="text"
        variant="default"
        label="Store Name"
        placeholder="Northline"
        defaultValue={"Northline"}
      />
      <Button type="submit" size="xl" variant="default">
        Save changes
      </Button>
    </form>
  );
}
