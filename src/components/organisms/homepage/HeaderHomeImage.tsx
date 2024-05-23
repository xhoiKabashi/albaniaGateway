"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";
import headerImg from "../../../../public/download.jpg";

export default function HeaderHomeImage() {
  return (
    <Image
      src={headerImg}
      alt="Image of Albania Landscape"
      width={1400}
      height={400}
      className=" md:rounded-md object-cover"
      priority
      placeholder="blur"
    />
  );
}
