"use client";
import Image from "next/image";
import React, { useState } from "react";

interface CityTypes {
  top: number;
  right: number;
  name: string;
  reverse: boolean;
}

interface CityCardProps {
  city: string | null;
}

const CityCard = ({ city }: CityCardProps) => {
  const cityInfo: any = {
    Tropoja: "Tropoja information",
    Theth: "Theth information",
    Shkoder: "Shkoder information",
    Lezhe: "Lezhe information",
    Kruje: "Kruje information",
    Tirane: "Tirane information",
    Durres: "Durres information",
    Elbasan: "Elbasan information",
    Pogradec: "Pogradec information",
    Korca: "Korca information",
    Berat: "Berat information",
    Vlora: "Vlora information",
    "Dhermi & Himara": "Dhermi & Himara information",
    Tepelena: "Tepelena information",
    Saranda: "Saranda information",
    Gjirokaster: "Gjirokaster information",
    Permet: "Permet information",
  };

  return (
    <div className=" w-96  h-screen bg-sky-200 p-2">
      {city ? cityInfo[city] : "Hover over a city to see details"}
    </div>
  );
};

const CityMarker = ({
  top,
  right,
  name,
  reverse,
  onHover,
}: CityTypes & { onHover: (city: string) => void }) => {
  return (
    <div
      className={`absolute text-sm flex gap-3 justify-center group ${
        reverse ? "flex-row-reverse" : ""
      }`}
      style={{ top: `${top}px`, right: `${right}px` }}
      onMouseEnter={() => onHover(name)}
      onMouseLeave={() => onHover("")}
    >
      <div className="h-7 w-7 rounded-full opacity-50 bg-gray-50 group-hover:bg-red-600 transition-colors duration-300"></div>
      <div className="h-4 px-2 uppercase text-slate-800 text-[12px] font-semibold group-hover:text-red-600 transition-colors duration-300">
        {name}
      </div>
    </div>
  );
};

export default function Map() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const cities = [
    { top: 61, right: 150, name: "Tropoja", reverse: false },
    { top: 52, right: 281, name: "Theth", reverse: true },
    { top: 113, right: 309, name: "Shkoder", reverse: true },
    { top: 165, right: 291, name: "Lezhe", reverse: true },
    { top: 213, right: 206, name: "Kruje", reverse: false },
    { top: 247, right: 197, name: "Tirane", reverse: false },
    { top: 250, right: 322, name: "Durres", reverse: true },
    { top: 286, right: 150, name: "Elbasan", reverse: false },
    { top: 327, right: 59, name: "Pogradec", reverse: false },
    { top: 378, right: 70, name: "Korca", reverse: false },
    { top: 361, right: 184, name: "Berat", reverse: false },
    { top: 402, right: 316, name: "Vlora", reverse: true },
    { top: 457, right: 294, name: "Dhermi & Himara", reverse: true },
    { top: 439, right: 243, name: "Tepelena", reverse: true },
    { top: 513, right: 247, name: "Saranda", reverse: true },
    { top: 476, right: 116, name: "Gjirokaster", reverse: false },
    { top: 448, right: 122, name: "Permet", reverse: false },
  ];

  return (
    <div className=" md:flex">
      <CityCard city={hoveredCity} />
      <div className="flex flex-col items-end relative">
        <div className="relative  w-[500px] h-[580px]">
          <Image
            src="/map-cities.png"
            alt="Albania map"
            layout="fill" // Or "fixed" if needed
          />
        </div>
        {cities.map((city, index) => (
          <CityMarker key={index} {...city} onHover={setHoveredCity} />
        ))}
      </div>
    </div>
  );
}
