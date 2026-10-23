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
      style={{ backgroundImage: `url("${src}")` }}
      className={cn(
        "bg-cover bg-center bg-no-repeat w-[50%]",
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
          height={45}
        />{" "}
        <Link
          className="text-5xl font-medium text-(--salmon-dark-color)"
          href={"/"}
        >
          Northline
        </Link>
      </h1>
      {/* imagem */}

      <div>
        <h2 className="text-3xl text-shadow-2xs font-bold text-(--salmon-dark-color)">
          {children}
        </h2>
        <h3 className="text-3xl font-semibold mt-5">Celio Junior</h3>
        <h4 className="text-xl font-medium text-gray-800">
          Development of software
        </h4>
      </div>
    </div>
  );
}
