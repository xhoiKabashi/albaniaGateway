import React from "react";
import Card from "./Card";
import { TypographyH2 } from "@/components/atoms/TypographyH2";
import riviera from "../../../../public/al-riviera-header.jpg";
import howtotravel from "../../../../public/howtotravel-header.jpg";
import lekonfocus from "../../../../public/lek-onfocus.jpg";
import gjirokastër from "../../../../public/Gjirokastër-Castle-1.jpg";

const cardProps = [
  {
    alt: "Image of Ksamil,Sarande, an image taken from drone",
    imageUrl: riviera,
    text: "A Journey Down the Albanian Riviera",
    href: "/blog/explore-albania-riviera",
  },
  {
    alt: "A passport and a baggage image,meaning for traveling",
    imageUrl: howtotravel,
    text: "Traveling to Albania: A Comprehensive Guide",
    href: "/blog/how-to-travel-to-albania",
  },
  {
    alt: "Image of the Albanian lek Banknotes, 200 and 500, 1000 and 2000 Lek",
    imageUrl: lekonfocus,
    text: "The Tale of Two Leks: Understanding Albania’s Currency Confusion",
    href: "/blog/what-do-you-need-to-know-about-albania-currency",
  },
];

export default function OnFocusGrid() {
  return (
    <div className=" w-full flex flex-col justify-center items-center  my-8 text-center">
      <TypographyH2 h1={false} text="This Week's Spotlight" />
      <p className=" w-[90%] md:w-[70%]">
        Dive into the hottest articles of the week, featuring trending travel
        stories, must-visit destinations. Whether you re looking for adventure,
        relaxation, or cultural experiences, our spotlight highlights the most
        popular reads that will inspire your next journey.
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3  gap-3 w-[96%]  md:w-full lg:h-[300px] py-10">
        {cardProps.map((props, index) => (
          <Card key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
