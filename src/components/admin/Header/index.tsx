import Link from "next/link";
import NavigationAdmin from "../Navigation";
import Image from "next/image";

export default function HeaderAdmin() {
  return (
    <header className="min-w-50 w-full mx-auto max-w-480 py-8 p-5 md:px-12 shadow-sm">
      <div className="w-full flex items-center gap-5">
        <h1 className="flex-1">
          <Link
            className="text-xl md:text-3xl flex gap-2 items-center font-bold"
            href={"/z_admin"}
          >
            <span className="relative w-5 h-5 md:w-10 md:h-10">
              <Image
                src={"/icon.svg"}
                fill
                className="absolute w-full h-full object-cover"
                alt="logo is site"
              />
            </span>
            Norhline
          </Link>
        </h1>
        <div className="flex-2 lg:flex-4 xl:flex-5">
          <NavigationAdmin links={["settings", "billboards"]} />
        </div>

        <div>user</div>
      </div>
    </header>
  );
}
