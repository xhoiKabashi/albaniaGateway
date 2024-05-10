import { TypographyH2 } from "@/components/atoms/TypographyH2";
import React from "react";
import { BlogCard, CityCard } from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cities = [
  {
    imageUrl: "/tirana-image.jpg",
    alt: "Image of Tirana, the vibrant capital of Albania",
    title: "Tirana",
    text: "20 km from TIA Airport",
    // link: "/tirana",
  },
  {
    imageUrl: "/berat-image.jpg",
    alt: "Image of Berat, Albania's UNESCO World Heritage city",
    title: "Berat",
    text: "100 km from Tirana",
    // link: "/berat",
  },
  {
    imageUrl: "/gjirokaster-image.jpg",
    alt: "Explore Gjirokaster, a UNESCO World Heritage Site in Albania",
    title: "Gjirokaster",
    text: "222 km from Tirana",
    // link="/gjirokaster" {/* Add link for SEO and navigation */}
  },
  {
    imageUrl: "/korca-image.jpg",
    alt: "Discover Korca, a historical city in southeastern Albania",
    title: "Korca",
    text: "162 km from Tirana",
    // link="/korca" {/* Add link for SEO and navigation */}
  },
  {
    imageUrl: "/vlora-image.jpg",
    alt: "Unwind in Vlora, a coastal city in southern Albania",
    title: "Vlora",
    text: "162 km from Tirana",
    // link="/vlora" {/* Add link for SEO and navigation */}
  },
  {
    imageUrl: "/shkoder.jpg",
    alt: "Discover Shkoder, a historical city in north of Albania",
    title: "Shkoder",
    text: "102 km from Tirana",
    // link="/vlora" {/* Add link for SEO and navigation */}
  },
  {
    imageUrl: "/saranda-image.jpg",
    alt: "Unwind in Saranda, a coastal city in southern Albania",
    title: "Saranda",
    text: "270 km from Tirana",
    // link="/vlora" {/* Add link for SEO and navigation */}
  },
  {
    imageUrl: "/durres-image.jpg",
    alt: "Discover Durres, a historical city coasal of Albania",
    title: "Durres",
    text: "37 km from Tirana",
    // link="/vlora" {/* Add link for SEO and navigation */}
  },

  // ... add the rest of the cities here
];

export default function BlogHomePage() {
  return (
    <div className="flex flex-col w-[90%]  justify-center items-center  md:w-[90%]">
      <TypographyH2 text="A diversity in great cuisine" />
      <div className=" w-full mt-6  flex justify-center">
        <Carousel className="w-[85%] md:w-full ">
          <CarouselContent className="md:w-full">
            {cities.map((city, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <BlogCard
                  imageUrl={city.imageUrl}
                  alt={city.alt}
                  title={city.title}
                  text={city.text}
                  // link={city.link}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
