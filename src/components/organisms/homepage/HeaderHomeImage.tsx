"use client";

import Image from "next/legacy/image";
import React from "react";
import headerImg from "../../../../public/download.jpg";

export default function HeaderHomeImage() {
  return (
    <Image
      src={headerImg}
      alt="Image of Albania Landscape"
      width={1400}
      height={600}
      className=" md:rounded-md object-cover"
      priority
      placeholder="blur"
    />
  );
}
