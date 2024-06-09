// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/blog/albania-riviera-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Journey Down the Albanian Riviera",
  description:
    "Embark on a breathtaking journey down the Albanian Riviera through our blog post. From the rugged cliffs of Karaburun Peninsula to the pristine beaches of Ksamil, discover the beauty and charm of Albania's southwestern coastline.",
  keywords:
    "Albania, travel to Albania, Albanian Riviera, Albanian coast, Ionian Sea, Mediterranean, Albanian beaches, Albanian villages, Albanian culture, Albanian cuisine, Albanian hospitality, hidden gems, travel tips, Albanian tourism",
  openGraph: {
    title:
      "A Journey Down the Albanian Riviera - Explore the Hidden Gems of the Ionian Coast",
    description:
      "Embark on a breathtaking journey down the Albanian Riviera through our blog post. From the rugged cliffs of Karaburun Peninsula to the pristine beaches of Ksamil, discover the beauty and charm of Albania's southwestern coastline.",
    url: "https://albaniagateway.com/blog/albanian-riviera",
    siteName: "Albania Gateway",
    images: {
      url: "/al-riviera-header.jpg",
      width: 1260,
      height: 800,
      alt: "Image of Albania Riviera",
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
