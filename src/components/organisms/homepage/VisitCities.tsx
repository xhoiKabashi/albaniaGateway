import { TypographyH2 } from "@/components/atoms/TypographyH2";
import React from "react";
import { CityCard } from "./Card";

export default function VisitCities() {
  return (
    <div className="flex flex-col w-[90%]  justify-center items-center  md:w-[80%]">
      <TypographyH2 text="Explore Nearby Cities" /> {/* Optimized H2 heading */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full mt-6">
        <CityCard
          imageUrl={"/tirana-image.jpg"}
          alt="Image of Tirana, the vibrant capital of Albania"
          title="Tirana"
          text="20 km from TIA Airport"
          // link="/tirana" {/* Add link for SEO and navigation */}
        />
        <CityCard
          imageUrl={"/berat-image.jpg"}
          alt="Image of Berat, Albania's UNESCO World Heritage city"
          title="Berat"
          text="100 km from Tirana"
          // link="/berat" {/* Add link for SEO and navigation */}
        />
        <CityCard
          imageUrl={"/gjirokaster-image.jpg"}
          alt="Explore Gjirokaster, a UNESCO World Heritage Site in Albania"
          title="Gjirokaster"
          text="233 km from Tirana"
          // link="/gjirokaster" {/* Add link for SEO and navigation */}
        />
        <CityCard
          imageUrl={"/korca-image.jpg"}
          alt="Discover Korca, a historical city in southeastern Albania"
          title="Korca"
          text="163 km from Tirana"
          // link="/korca" {/* Add link for SEO and navigation */}
        />
        <CityCard
          imageUrl={"/vlora-image.jpg"}
          alt="Unwind in Vlora, a coastal city in southern Albania"
          title="Vlora"
          text="162 km from Tirana"
          // link="/vlora" {/* Add link for SEO and navigation */}
        />
        <CityCard
          imageUrl={"/saranda-image.jpg"}
          alt="Unwind in Saranda, a coastal city in southern Albania"
          title="Saranda"
          text="270 km from Tirana"
          // link="/vlora" {/* Add link for SEO and navigation */}
        />
        <CityCard
          imageUrl={"/shkoder.jpg"}
          alt="Discover Shkoder, a historical city in north of Albania"
          title="Shkoder"
          text="103 km from Tirana"
          // link="/vlora" {/* Add link for SEO and navigation */}
        />
        <CityCard
          imageUrl={"/durres-image.jpg"}
          alt="Discover Durres, a historical city coasal of Albania"
          title="Durres"
          text="37 km from Tirana"
          // link="/vlora" {/* Add link for SEO and navigation */}
        />
      </div>
    </div>
  );
}
