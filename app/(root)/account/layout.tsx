import { cn } from "@/src/utils/function-formats";

export default function RootAccount({ children }: LayoutProps<"/account">) {
  return <main className={cn("w-full h-full flex")}>{children}</main>;
}
