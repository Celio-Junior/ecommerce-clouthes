import { cn } from "@/src/utils/function-formats";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type FashionModelProps = {
  src: string;
  children: React.ReactNode;
};

export function FashionModel({ src, children }: FashionModelProps) {
  return (
    <div
      // style={{
      //   backgroundImage: "url(/images/model-female-login.jpg)",
      //   objectFit: "cover",
      //   backgroundSize: "100% 100%",
      //   backgroundRepeat: "no-repeat",
      // }}
      className={cn(
        `bg-[url(${src})]`,
        "bg-cover bg-no-repeat w-[40%]",
        "rounded-2xl",
        "flex flex-col justify-between",
        "p-12",
      )}
    >
      <h1 className="flex items-center gap-2">
        {" "}
        <Image
          src="/icon.svg"
          alt="model-female-login"
          width={45}
          height={40}
        />{" "}
        <Link className="text-5xl font-medium" href={"/"}>
          Northline
        </Link>
      </h1>
      {/* imagem */}

      <div>
        <h2 className="text-3xl font-bold">{children}</h2>
        <h3 className="text-3xl font-semibold mt-5">Celio Junior</h3>
        <h4 className="text-xl font-medium">Development of software</h4>
      </div>
    </div>
  );
}
