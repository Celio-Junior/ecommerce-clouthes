import { cn } from "@/src/utils/function-formats";

export function FormLogin() {
  return (
    <form className="w-[40%]" action="">
      <fieldset className={cn("w-full")}>
        <label htmlFor="">Email</label>
        <input type="email" />

        <button type="submit"> Login</button>
      </fieldset>
    </form>
  );
}
