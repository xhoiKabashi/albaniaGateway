// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/visit/whyvisit-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Visiting Albania?",
  description:
    "Discover the beauty and charm of Albania through our comprehensive guide. From its rich history to its breathtaking natural landscapes, Albania offers something for every traveler.",
  keywords:
    "Albania, travel, Balkans, adventure, culture, cuisine, hospitality, tourism, hidden gems, travel tips, Albanian Riviera, Albanian Alps, Adriatic Sea, Ionian Sea, Dhermi, Himara, Illyrians, Greeks, Romans, Byzantines, Ottomans, Durres, Gjirokastër, Berat, Butrint, Tirana, Byrek, Tavë Kosi, affordable, budget, people, hiking, kayaking, Osumi Canyons, paragliding, mountain biking, scuba diving, uncrowded, unique destinations, travel guide",

  openGraph: {
    title: "Why Visiting Albania?",
    description:
      "Discover the beauty and charm of Albania through our comprehensive guide. From its rich history to its breathtaking natural landscapes, Albania offers something for every traveler.",
    url: "https://albaniagateway.com/blog/why-visit-albania",
    siteName: "Albania Gateway",
    images: {
      url: "/tiranaWhyVisit.jpg",
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
          <ParaBlog text={reason.para} />
        </React.Fragment>
      ))}
    </BlogPost>
  );
};

export default page;
