// CommonPage.jsx
/* eslint-disable react/no-unescaped-entities */
import { TypographyH2, TypographyH3 } from "@/components/atoms/TypographyH2";
import Image from "next/image";
import React from "react";

interface Section {
  title: string;
  content: string; // Specify the content property here
  h1: boolean;
}

interface CommonPageTypes {
  title: string;
  description: string;
  keywords: string;
  headerImageSrc: string;
  pageTitle: string;
  sections: Section[];
}

const CommonPage: React.FC<CommonPageTypes> = ({
  title,
  description,
  keywords,
  headerImageSrc,
  pageTitle,
  sections,
}) => {
  return (
    <div className="py-16 min-h-screen relative">
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <header className="w-full h-64 relative">
        <Image
          alt={pageTitle}
          src={headerImageSrc}
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
      </header>
      <div className="relative -inset-y-14 flex items-center text-back justify-center text-white  text-center md:text-4xl font-bold px-3">
        {pageTitle}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <section className=" w-[90%] md:w-[70%] text-balance  space-y-3">
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              <TypographyH3 text={section.title} h1={section.h1} />
              <p>{section.content}</p>
            </React.Fragment>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CommonPage;
