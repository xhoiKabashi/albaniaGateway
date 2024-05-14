import Image from "next/image";
import Link from "next/link";

import React from "react";

// Define the types for the props that the Card component expects
interface CardProps {
  style?: string; //
  imageUrl?: any; //
  alt: string; //
  text: string;
  href: string;
}

// main card, used in What to see & do

const Card: React.FC<CardProps> = ({
  style = "",
  imageUrl = "",
  alt,
  text,
  href,
}) => {
  return (
    <Link
      href={href}
      className={`relative flex flex-col w-full bg-black ${style} overflow-hidden rounded-2xl  min-h-52 `}
    >
      <div className=" absolute w-full h-full group">
        <Image
          alt={alt}
          src={imageUrl}
          style={{ objectFit: "cover" }}
          className="transition-all duration-700 ease-out group-hover:scale-105"
          fill
          priority={true}
          placeholder="blur"
          sizes="(min-width: 808px) 50vw, 100vw"
        />

        <div className="absolute inset-0  opacity-35 bg-black group-hover:text-gray-900"></div>
      </div>
      <h1 className="absolute top-3/4 left-44 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold text-balance w-[80%]">
        {text}
      </h1>
    </Link>
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
