// components/BlogPost.js
import React from "react";
import Image from "next/image";

interface BlogPostType {
  title: string;
  date: string;
  readTime: string;
  imageAlt: string;
  imageSrc: any;
  children: any;
}

const BlogPost = ({
  title,
  date,
  readTime,
  imageSrc,
  imageAlt,
  children,
}: BlogPostType) => {
  return (
    <div className="my-20 flex flex-col items-center">
      <div className="w-[90%] md:w-[60%]">
        <div className="mb-4">
          <h3 className="text-xl tracking-widest text-blue-800">{date}</h3>
          <h3 className="text-red-600 font-semibold tracking-widest mb-10 uppercase">
            {readTime}
          </h3>
          <h1 className="font-light   text-left text-cyan-500 text-3xl md:text-6xl  md:text-start leading-7 tracking-wider">
            {title}
          </h1>

          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full my-12"
            style={{ objectFit: "cover" }}
            priority={true}
            width={400}
            height={400}
            sizes="(min-width: 808px) 50vw, 100vw"
            placeholder="blur"
          />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default BlogPost;
