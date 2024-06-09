import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

interface BlogCards {
  imageUrl: any;
  date?: string;
  title: string;
  href: string;
  alt: string;
}

const BlogCard = ({ imageUrl, date, title, href, alt }: BlogCards) => {
  return (
    <Link
      href={href}
      className="relative flex flex-col  justify-between bg-slate-100 border rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={alt}
          objectFit="cover"
          className="rounded-t-2xl"
          height={400}
          width={600}
          priority
        />
        <h3 className="absolute top-2 left-2 bg-sky-500 text-slate-50 px-2 py-1 rounded  font-semibold tracking-wider">
          {date}
        </h3>
      </div>
      <div className="relative flex flex-col  justify-end items-center p-4 bg-slate-100 text-white">
        <div className="flex flex-col justify-end text-center">
          <h2 className="text-base  text-slate-700 font-bold">{title}</h2>
        </div>
        <p className="mt-2 bg-sky-500 px-4 py-1 rounded text-slate-50 font-bold">
          Read more
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
