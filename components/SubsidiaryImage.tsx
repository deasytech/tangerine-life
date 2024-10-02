"use client"

import { useState } from "react";
import { CloudDownload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type SubsidaryImageProps = {
  image: string;
  hoverImage?: string;
  hoverText?: string;
  name: string;
  subName?: string;
  link: string;
};

const SubsidaryImage = ({
  image,
  hoverImage,
  hoverText,
  name,
  subName,
  link,
}: SubsidaryImageProps) => {
  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <Link href={link} className="w-full flex flex-col gap-2" target="_blank">
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? hoverImage! : image}
          alt={name}
          width={280}
          height={360}
          className="w-full object-contain rounded-2xl transition-transform duration-300"
        />
        {isHovered && (
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white rounded-lg transition-transform duration-300 cursor-pointer ${isHovered ? 'bottom-1/2 translate-y-1/2' : 'bottom-0 translate-y-full'
              }`}
          >
            <p className="bold-56 mb-2 ml-3">{hoverText}</p>
            <Link href={link} passHref target="_blank">
              <Button variant="secondary" size="icon" className="rounded-full">
                <Image src="/icons/arrow-right-up.svg" alt="arrow right up" width={24} height={24} />
              </Button>
            </Link>
          </div>
        )}
      </div>
      <label className={cn("regular-16 font-gilroy-light text-center", isHovered && "text-orange-base")}>{name}</label>
      {subName && (
        <div className="flex justify-between">
          <p className="regular-12 text-generic-500 uppercase">{subName}</p>
          <CloudDownload size={12} className="text-generic-500" />
        </div>
      )}
    </Link>
  );
};

export default SubsidaryImage;
