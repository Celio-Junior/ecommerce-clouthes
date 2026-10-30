import { Auth } from "@/src/components/admin/Auth";

export default function AuthAdmin() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Auth>
        <h1 className="text-3xl text-center text-(--salmon-dark-color) mb-4 font-bold">
          Authentication admin
        </h1>
        <h2 className="text-center text-gray-400">
          painel admin ecommerce Northline
        </h2>
      </Auth>
    </main>
  );
}
