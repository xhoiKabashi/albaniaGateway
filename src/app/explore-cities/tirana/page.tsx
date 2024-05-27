// pages/somePage.js
import { TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/info/christian.data";
import imageee from "../../../../public/kruje.jpg";

import React from "react";
import { ParaBlog } from "@/components/atoms/TypographyH2";
import Image from "next/image";
import { MainWrapper, SecondaryWrapper } from "@/components/atoms/Wrapper";

// Reusable Content Component (abstraction)
const ContentSection = ({ title }) => {
  return (
    <section className="mb-1 text-xs ">
      <h3>{title}</h3>
    </section>
  );
};

// Reusable Image Component (abstraction)
const PageImage = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  sizes,
  priority,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
    />
  );
};

const page = () => {
  const contentData = [
    {
      title: "I. Introduction",
    }, // Replace [...] with actual content points
    {
      title: "II. Historical Background",
    },
    {
      title: "III.	How to Get There?",
    },
    {
      title: "IV.	Travel Tips",
      contentPoints: [""],
    },
    {
      title: "V.	Where to Stay?",
    },
    {
      title: "VI.	Top Attractions",
    },

    {
      title: "VII.	Hidden Gems",
    },
    {
      title: "VIII.	Foods and Drinks",
    },
    {
      title: "IX.	Activities and Experiences",
    },
    {
      title: "X.	Day Trips and Excursions",
    },
    {
      title: "X.	Day Trips and Excursions",
    },
  ];

  const estimatedReadingTime = "Tirana"; // Replace with actual time if needed
  const mainTitle = "Exploring Tirana: A Comprehensive Guide"; // Replace with actual title

  //  ----------------------------------------------------------------

  interface textType {
    text: string; //
  }

  const Title = ({ text }: textType) => {
    return <h1>{text}</h1>;
  };
  const SecondTitle = ({ text }: textType) => {
    return <h1>{text}</h1>;
  };
  const Paragraph = ({ text }: textType) => {
    return <h1>{text}</h1>;
  };
  const ListParagraph = ({ text }: textType) => {
    return <li>{text}</li>;
  };
  const Italic = ({ text }: textType) => {
    return <i className=" italic">{text}</i>;
  };

  return (
    <article className="w-full bg-slate-100 ">
      <MainWrapper>
        <SecondaryWrapper>
          <header className="md:mb-4">
            <h1 className=" font-semibold  pb-2 uppercase">Table of content</h1>
            {contentData.map((section) => (
              <ContentSection key={section.title} {...section} />
            ))}

            <div className=" w-full text-center mt-8">
              <h2 className="text-red-600 font-semibold tracking-widest mb-4 md:mb-6 uppercase text-xl">
                {estimatedReadingTime}
              </h2>
              <h1 className=" text-xl md:text-4xl text-sky-500">{mainTitle}</h1>
            </div>

            <PageImage
              src={imageee}
              alt={"test"}
              className="w-full my-12"
              style={{ objectFit: "cover" }}
              priority={true}
              width={400}
              height={400}
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </header>

          <section className="  text-pretty">
            <Title text="I. Introduction" />
            <SecondTitle text="Brief Overview of the City" />
            <Paragraph
              text="Tirana, the vibrant capital of Albania, is a city that perfectly
              blends its rich history with modern charm. Nestled between the
              Adriatic Sea and the Dajti Mountain, Tirana is a bustling
              metropolis known for its colorful architecture, lively streets,
              and welcoming atmosphere."
            />
            <SecondTitle text="Unique Selling Points" />
            <ListParagraph
              text="Colorful Architecture: Known for its brightly painted buildings,
              Tirana`s cityscape is a visual feast."
            />
            <ListParagraph
              text="Vibrant Culture: A melting pot of influences, Tirana boasts a
              dynamic arts scene and a lively nightlife."
            />
            <ListParagraph
              text="Historical Depth: From Ottoman-era mosques to Communist-era
              relics, the city`s history is palpable."
            />
            <SecondTitle text="Personal Anecdote or Hook" />
            <Italic
              text=" “On my first visit to Tirana, I was struck by the contrast between
              the old and the new. Walking through the streets, I found myself
              moving from bustling markets to serene parks, each corner offering
              a new surprise. It was this blend of history and modernity that
              truly captivated me.”"
            />
          </section>
        </SecondaryWrapper>
      </MainWrapper>
    </article>
  );
};

export default page;
