import { z } from "zod";

export const AdminLoginSchema = z.object({
  email: z.string().nonempty("username empty"),
  password: z.string().min(6, "min 6 digit password"),
});
