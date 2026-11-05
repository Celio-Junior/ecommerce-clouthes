"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationAdmin({ links }: { links: string[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-8">
      {links.map((linkNavigation) => {
        return (
          <li key={crypto.randomUUID()}>
            <Link
              className={clsx(
                "text-md md:text-lg text-gray-700 font-semibold capitalize inline-block",
                " hover:text-gray-950 transition duration-130 hover:scale-110",
                pathname.includes(linkNavigation) && "scale-110 text-gray-950",
              )}
              href={`/${pathname.split("/")[1]}/${linkNavigation}`}
            >
              {linkNavigation}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
