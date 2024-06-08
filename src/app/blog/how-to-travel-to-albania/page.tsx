// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/blog/how-to-travel-to-tirana";
import { Metadata } from "next";

export const metadata: Metadata = {


  title:
    "Exploring Albania: A Comprehensive Guide to Arrival by Sea, Sky, and Land - Your Gateway to the Balkans",
  description:
    "Discover the various ways to enter Albania through our comprehensive guide. From ferry ports to international airports and land border crossings, explore the diverse entry points and embark on an unforgettable journey through the heart of the Balkans.",
  keywords:
    "Albania, travel to Albania, Albania blog, Albanian transportation, arrival to Albania, Albanian ports, Albanian airports, Albanian land borders, Albanian travel tips, Tirana International Airport, Durres Port, Vlora Port, Kukës Airport, Albania-Montenegro border, Albania-North Macedonia border, Albania-Greece border",
  openGraph: {
    title:
      "Exploring Albania: A Comprehensive Guide to Arrival by Sea, Sky, and Land - Your Gateway to the Balkans",
    description:
      "Discover the various ways to enter Albania through our comprehensive guide. From ferry ports to international airports and land border crossings, explore the diverse entry points and embark on an unforgettable journey through the heart of the Balkans.",
    url: "https://albaniagateway.com/blog/exploring-albania-arrival-guide",
    siteName: "Albania Gateway",
    images: {
      url: "/air-albania.jpg",
      width: 1260,
      height: 800,
    },
    locale: "en-EN",
  },
};

const page = () => {
  return (
    <BlogPost
      title={blogData.title}
      date={blogData.date}
      readTime={blogData.readTime}
      imageSrc={blogData.imageSrc}
      imageAlt={blogData.imageAlt}
    >
      {blogData.paragraphs.map((para, index) => (
        <ParaBlog key={index} text={para.text} />
      ))}
      {blogData.paragraphsWithTitle.map((reason, index) => (
        <React.Fragment key={index}>
          <TitleBlog text={reason.title} />
          <ParaBlog text={reason.text} />
        </React.Fragment>
      ))}
    </BlogPost>
  );
};

export default page;
