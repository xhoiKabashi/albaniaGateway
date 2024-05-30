// components/BlogPost.js
import React from "react";
import Image from "next/legacy/image";
import { MainWrapper, SecondaryWrapper } from "@/components/atoms/Wrapper";

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
    <MainWrapper>
      <SecondaryWrapper>
        <header className="md:mb-4">
          <h3 className="text-xl tracking-widest text-blue-800">{date}</h3>
          <h3 className="text-red-600 font-semibold tracking-widest mb-4 md:mb-6 uppercase">
            {readTime}
          </h3>
          <h1 className="font-light   text-left text-cyan-500 text-2xl md:text-5xl  md:text-start leading-7 tracking-wider mb-2 md:mb-4">
            {title}
          </h1>

          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full my-12"
            priority={true}
            width={600}
            height={400}
            sizes="(min-width: 808px) 50vw, 100vw"
            placeholder="blur"
          />
        </header>
        <section className="">{children}</section>
      </SecondaryWrapper>
    </MainWrapper>
  );
};

export default BlogPost;
