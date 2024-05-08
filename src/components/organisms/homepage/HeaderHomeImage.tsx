"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

export default function HeaderHomeImage() {
  return (
    <Image
      src="/header.jpg"
      alt="Image of Albania Landscape"
      width={1400}
      height={0}
      className="rounded-md object-cover h-auto"
      priority
    />
  );
}
