"use server";
import { styleText } from "node:util";
import envVar from "env-var";
import { AdminLoginSchema } from "@/src/lib/validations/admin";
import { redirect } from "next/navigation";
import LoginSessionUser from "@/src/lib/login/manage-users";

export default async function authenticationAdminAction(formData: FormData) {
  const isAuth = AdminLoginSchema.safeParse(Object.fromEntries(formData));
  if (!isAuth.success)
    return console.log(
      styleText(["red"], "Usuário não identificado, tentando fazer login!!"),
    );

  if (
    !(
      isAuth.data.email === envVar.get("ADMIN_EMAIL").asString() &&
      isAuth.data.password === envVar.get("ADMIN_PASSWORD").asString()
    )
  )
    return;

  const token = await LoginSessionUser.createToken(
    { email: isAuth.data.email },
    "admin",
  );

  await LoginSessionUser.createLogin(token, "admin");

  console.log(styleText(["green"], "logado"));
  redirect("/z_admin");
}
