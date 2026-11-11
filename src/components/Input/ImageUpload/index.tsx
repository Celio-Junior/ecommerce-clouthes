"use client";

import { ButtonUpload } from "@/components/Button/ButtonUpload";
import { ImageUpPublicType } from "@/interfaces/cloudinary";
import { cn } from "@/utils/function-formats";
import { CldImage } from "next-cloudinary";
import { ComponentPropsWithoutRef, useState } from "react";

type InputImageProps = {
  label: React.ReactNode;
  src?: ComponentPropsWithoutRef<"img">["src"];
};

//vou tar title na imagem, pra passar mouse parece nome da imagem
export function InputImage({ label }: InputImageProps) {
  const [imageBillboard, setImageBillboard] = useState<ImageUpPublicType>({
    url: "",
    public_id: "",
  });
  return (
    <div className="flex flex-col gap-3">
      <label
        className={cn(
          "w-full block",
          "font-bold text-xl placeholder:text-xl placeholder:text-gray-500",
        )}
        htmlFor=""
      >
        {label}
      </label>

      {imageBillboard.public_id.length > 0 && (
        <div className="w-50 h-45 relative overflow-hidden rounded-2xl">
          <CldImage
            src={imageBillboard.public_id}
            // width={550}
            // height={550}
            fill
            crop={"fill"}
            alt="billboard example"
            className="object-cover"
          />
        </div>
      )}

      <ButtonUpload setStateUpload={setImageBillboard} />
    </div>
  );
}
