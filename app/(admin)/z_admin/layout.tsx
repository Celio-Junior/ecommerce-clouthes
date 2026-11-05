import HeaderAdmin from "@/src/components/admin/Header";
import { headers } from "next/headers";
import { Suspense } from "react";

export default function RootAdmin({ children }: LayoutProps<"/account">) {
  return (
    <Suspense fallback={null}>
      <HeaderAdminLogic />
      <main>{children}</main>
    </Suspense>
  );
}

async function HeaderAdminLogic() {
  const isHeaderAdmin = (await headers()).get("x-pathname");
  return isNaN(Number(isHeaderAdmin)) ? <HeaderAdmin /> : null;
}
