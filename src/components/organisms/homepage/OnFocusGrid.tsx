import React from "react";
import Card from "./Card";
import { TypographyH2 } from "@/components/atoms/TypographyH2";

const cardProps = [
  {
    style: "lg:col-span-2 lg:row-span-4",
    alt: "test",
    imageUrl: "/al-riviera-header.jpg",
    text: "Experience Albania Riviera",
  },
  {
    style: "lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-2",
    alt: "test",
    imageUrl: "/howtotravel-header.jpg",
    text: "Traveling to Albania: A Comprehensive Guide",
  },
  {
    style: "lg:col-start-3 lg:col-span-2 lg:row-start-3 lg:row-span-2",
    alt: "test",
    imageUrl: "/travelhero2.png",
    text: "Experience Albania Riviera",
  },
  {
    style: "lg:col-start-5 lg:col-span-2 lg:row-span-4",
    alt: "test",
    imageUrl: "/travelhero2.png",
    text: "Experience Albania Riviera",
  },
];

export default function OnFocusGrid() {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <TypographyH2 text="In focus" />
      <div className="flex flex-col md:grid md:grid-cols-2 h-screen w-[90%] lg:grid lg:grid-cols-6 lg:grid-rows-4 gap-3 lg:w-[80%] lg:h-[530px] py-10">
        {cardProps.map((props, index) => (
          <Card key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
