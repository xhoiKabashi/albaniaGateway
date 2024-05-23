import { TypographyH2 } from "@/components/atoms/TypographyH2";
import Image from "next/image";
import React from "react";

export default function WhyVisitTirana() {
  return (
    <div className=" flex  flex-col items-center  w-full my-10 gap-4  text-center">
      <TypographyH2 h1={false} text="Why visit Albania?" />
      <p className=" w-[90%] md:w-[70%]">
        Verona: a UNESCO world heritage city and the home of Romeo and Juliet, a
        place of history, culture, music, architecture and high society. A land
        of great traditions, from opera to fine food and wine.
      </p>

      <Image src="/whyvisitTirana.jpg" height={200} width={700} alt="test" />
    </div>
  );
}
