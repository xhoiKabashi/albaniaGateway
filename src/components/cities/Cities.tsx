// pages/somePage.js

import React from "react";

import Image from "next/image";
import { MainWrapper, SecondaryWrapper } from "@/components/atoms/Wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
interface ContentDataItem {
  title: string;
}

interface pageTypes {
  contentData: ContentDataItem[];
  estimatedReadingTime: string;
  mainTitle: string;
  children: any[];
  imageSrc: any;
  alt: string;
}

const page = ({
  contentData,
  estimatedReadingTime,
  mainTitle,
  children,
  imageSrc,
  alt,
}: pageTypes) => {
  return (
    <article className="w-full">
      <MainWrapper>
        <SecondaryWrapper>
          <header className="md:mb-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger className=" flex justify-center gap-3 pb-3">
                  Table of content
                </AccordionTrigger>
                {contentData.map((section, index) => (
                  <AccordionContent key={index} className=" text-sm">
                    <Link href={`#${section.title}`} passHref>
                      <h2 className=" text-sm">{section.title}</h2>
                    </Link>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>

            <div className=" w-full text-center mt-8">
              <h2 className="text-red-600 font-semibold tracking-widest mb-4 md:mb-6 uppercase text-xl">
                {estimatedReadingTime}
              </h2>
              <h1 className=" text-xl md:text-4xl text-sky-500">{mainTitle}</h1>
            </div>
            <Image
              src={imageSrc}
              alt={alt}
              className="w-full my-12"
              style={{ objectFit: "cover" }}
              priority={true}
              width={400}
              height={400}
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </header>

          <section className="text-pretty">{children}</section>
        </SecondaryWrapper>
      </MainWrapper>
    </article>
  );
};

export default page;
