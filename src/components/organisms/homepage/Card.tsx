import Image from "next/image";

import React from "react";

// Define the types for the props that the Card component expects
interface CardProps {
  style?: string; // style is optional and should be a string
  imageUrl?: string; //
  alt: string; //
  text: string; // text is optional
}

// main card, used in What to see & do

const Card: React.FC<CardProps> = ({
  style = "",
  imageUrl = "",
  alt,
  text,
}) => {
  return (
    <div
      className={`relative flex flex-col w-full bg-black ${style} overflow-hidden rounded-2xl  min-h-52 `}
    >
      <Image
        alt={alt}
        src={imageUrl}
        layout="fill" // Fill the container
        objectFit="cover" // Adjust to cover the container
        className="hover:scale-105 transition-all duration-700 ease-out h-[500px]"
      />
      <h1 className="absolute top-3/4 left-44 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold text-balance w-[80%]">
        {text}
      </h1>
    </div>
  );
};

export default Card;

// second card, used in Cities

interface CityCardProps {
  imageUrl?: string; // style is optional and should be a string
  alt: string; //
  title: string; //
  text: string; //
}

export const CityCard: React.FC<CityCardProps> = ({
  imageUrl = "",
  alt,
  title,
  text,
}) => {
  return (
    <div className="  bg-slate-50 border flex py-4 md:h-40  rounded-3xl  justify-around items-center hover:shadow-md transition-all duration-700 ease-in-out">
      <div className=" bg-black h-24 w-24 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          height={400}
          width={400}
          className=" bg-cover h-full w-full"
        />
      </div>
      <div>
        <h1 className=" font-semibold">{title}</h1>
        <h4 className=" text-sm">{text}</h4>
      </div>
    </div>
  );
};

export const BlogCard: React.FC<CityCardProps> = ({
  imageUrl = "",
  alt,
  title,
  text,
}) => {
  return (
    <div className=" flex h-72 w-52 flex-col md:h-96 md:w-72  p-1 overflow-hidden rounded-md">
      <Image
        src={imageUrl}
        alt={alt}
        height={400}
        width={400}
        className=" bg-cover h-36 md:h-72 w-full rounded-sm"
      />
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
};
