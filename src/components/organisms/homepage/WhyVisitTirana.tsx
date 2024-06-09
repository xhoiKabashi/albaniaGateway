import { TypographyH2 } from "@/components/atoms/TypographyH2";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import tirana from "../../../../public/whyvisitTirana.jpg";
export default function WhyVisitTirana() {
  return (
    <div className=" flex  flex-col items-center  w-full my-10 gap-4  text-center">
      <TypographyH2 h1={false} text="Why visit Albania?" />
      <p className=" w-[90%] md:w-[70%]">
        Albania, a hidden gem in the Balkans, offers a unique blend of rich
        history, stunning landscapes, and warm hospitality. Whether you`re an
        adventurer, a history buff, or simply looking for a relaxing getaway,
        Albania has something to offer everyone. Here are some compelling
        reasons why you should consider visiting Albania.
      </p>

      <Image
        src={tirana}
        height={200}
        width={700}
        alt="test"
        priority
        placeholder="blur"
      />
      <Link
        href={"/blog/why-visit-albania"}
        className=" bg-sky-500 text-white px-2  rounded-lg"
      >
        {" "}
        Read more
      </Link>
    </div>
  );
}
