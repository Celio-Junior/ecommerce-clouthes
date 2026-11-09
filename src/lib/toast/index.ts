import { cn } from "@/utils/function-formats";
import { toast } from "react-toastify";

class ToastMessages {
  private theme: "dark" | "light";
  constructor(theme: "light" | "dark" = "light") {
    this.theme = theme;
  }

  setTheme(theme: "light" | "dark" = "light") {
    this.theme = theme;
  }

  success(message: string) {
    toast.success(message, {
      theme: this.theme,
      toastId: crypto.randomUUID(),
      className: cn(
        "text-gray-950 font-bold",
        this.theme === "dark" && "text-gray-50",
      ),
    });
  }
  error(message: string) {
    toast.error(message, { theme: this.theme, toastId: crypto.randomUUID() });
  }
  warning(message: string) {
    toast.warning(message, { theme: this.theme, toastId: crypto.randomUUID() });
  }
}
export const toastMessages = new ToastMessages();
