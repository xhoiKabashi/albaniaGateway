import Image from "next/image";

import React from "react";

// Define the types for the props that the Card component expects
interface CardProps {
  style?: string; // style is optional and should be a string
  imageUrl?: string; //
  alt: string; //
}

// main card, used in What to see & do

const Card: React.FC<CardProps> = ({ style = "", imageUrl = "", alt }) => {
  return (
    <div
      className={`flex flex-col  w-full bg-black ${style} overflow-hidden  rounded-2xl`}
    >
      <Image
        alt={alt}
        src={imageUrl}
        className=" h-full w-full hover:scale-105 transition-all duration-700 ease-out"
        width={400}
        height={400}
      />
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
    <div className=" flex h-72  w-52 flex-col md:h-96 md:w-72  p-1">
      <Image
        src={imageUrl}
        alt={alt}
        height={400}
        width={400}
        className=" bg-cover h-36 md:h-72 w-full"
      />
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
};
