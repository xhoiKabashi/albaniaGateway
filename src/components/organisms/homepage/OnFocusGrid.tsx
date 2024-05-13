import React from "react";
import Card from "./Card";
import { TypographyH2 } from "@/components/atoms/TypographyH2";

const cardProps = [
  {
    style: "lg:col-span-2 lg:row-span-4",
    alt: "Image of Ksamil,Sarande, an image taken from drone",
    imageUrl: "/al-riviera-header.jpg",
    text: "A Journey Down the Albanian Riviera",
    href: "/blog/riviera",
  },
  {
    style: "lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-2",
    alt: "A passport and a baggage image,meaning for traveling",
    imageUrl: "/howtotravel-header.jpg",
    text: "Traveling to Albania: A Comprehensive Guide",
    href: "/blog/how-to-travel-to-albania",
  },
  {
    style: "lg:col-start-3 lg:col-span-2 lg:row-start-3 lg:row-span-2",
    alt: "Image of the Albanian lek Banknotes, 200 and 500, 1000 and 2000 Lek",
    imageUrl: "/lek-onfocus.jpg",
    text: "The Tale of Two Leks: Understanding Albania’s Currency Confusion",
    href: "/blog/albania-currency",
  },
  {
    style: "lg:col-start-5 lg:col-span-2 lg:row-span-4",
    alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
    imageUrl: "/Gjirokastër-Castle-1.jpg",
    text: " Exploring Albania's Enigmatic Castles: A Journey Through Time",
    href: "/blog/castles-in-albania",
  },
];

export default function OnFocusGrid() {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <TypographyH2 text="In focus" />
      <div className="flex flex-col md:grid md:grid-cols-2 w-[90%] lg:grid lg:grid-cols-6 lg:grid-rows-4 gap-3 lg:w-[80%] lg:h-[530px] py-10">
        {cardProps.map((props, index) => (
          <Card key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
