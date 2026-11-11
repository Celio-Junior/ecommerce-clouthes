"use client";

import { LuImagePlus } from "react-icons/lu";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "..";
import { cn } from "@/utils/function-formats";
import { Dispatch, SetStateAction } from "react";
import { ImageUpPublicType } from "@/interfaces/cloudinary";

type ButtonUploadProps = {
  setStateUpload: Dispatch<SetStateAction<ImageUpPublicType>>;
};

const UPLOAD_PRESET_NAME = process.env.NEXT_PUBLIC_UPLOAD_PRESET_NAME;

export function ButtonUpload({ setStateUpload }: ButtonUploadProps) {
  const buttonClassStyle = cn(
    "bg-gray-50  shadow-md rounded-lg hover:scale-105 hover:bg-gray-200",
    "flex items-center gap-2",
    "font-semibold cursor-pointer w-fit",
  );
  return (
    <CldUploadWidget
      onSuccess={(result) => {
        if (result.info && typeof result.info !== "string") {
          setStateUpload({
            url: result.info.url,
            public_id: result.info.public_id,
          });
        }
      }}
      uploadPreset={UPLOAD_PRESET_NAME}
    >
      {({ open }) => {
        return (
          <Button
            onClick={() => open()}
            className={buttonClassStyle}
            variant="customer"
            size="lg"
          >
            <LuImagePlus />
            Upload and image
          </Button>
        );
      }}
    </CldUploadWidget>
  );
}
