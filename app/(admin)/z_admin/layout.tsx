import HeaderAdmin from "@/src/components/admin/Header";

export default function RootAdmin({ children }: LayoutProps<"/account">) {
  return (
    <>
      <HeaderAdmin />
      <main>{children}</main>
    </>
  );
}
