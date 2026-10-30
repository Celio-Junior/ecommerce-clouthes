import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";
import { ZodError } from "zod";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const formatZodErrors = <T>(errors: ZodError<T>) =>
  errors.issues.map((err) => err.message);
