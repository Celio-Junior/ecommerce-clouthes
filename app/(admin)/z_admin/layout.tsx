import HeaderAdmin from "@/components/admin/Header";
import { headers } from "next/headers";
import { Suspense } from "react";

export default function RootAdmin({ children }: LayoutProps<"/account">) {
  return (
    <Suspense fallback={null}>
      <HeaderAdminLogic />
      <main className="p-5 md:px-12 min-w-50 w-full mx-auto max-w-480">
        {children}
      </main>
    </Suspense>
  );
}

async function HeaderAdminLogic() {
  const isHeaderAdmin = (await headers()).get("x-pathname");
  return isNaN(Number(isHeaderAdmin)) ? <HeaderAdmin /> : null;
}
