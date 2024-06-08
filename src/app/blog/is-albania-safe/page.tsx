// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/info/is-albania-safe-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://albaniagateway.com/"),

  title:
    "Is Albania Safe? A Comprehensive Guide for 2024 - Ensuring Safety in Your Albanian Adventure",
  description:
    "Ensure a safe and enjoyable trip to Albania with our comprehensive safety guide for 2024. From crime statistics to tourist safety tips, arm yourself with the latest information to make the most of your Albanian adventure.",
  keywords:
    "Albania, travel to Albania, Albania blog, safety in Albania, crime in Albania, Albania crime statistics, tourist safety in Albania, Albania travel tips, is Albania safe to visit, Albania crime rate, safety precautions in Albania",
  openGraph: {
    title:
      "Is Albania Safe? A Comprehensive Guide for 2024 - Ensuring Safety in Your Albanian Adventure",
    description:
      "Ensure a safe and enjoyable trip to Albania with our comprehensive safety guide for 2024. From crime statistics to tourist safety tips, arm yourself with the latest information to make the most of your Albanian adventure.",
    url: "https://albaniagateway.com/blog/is-albania-safe-2024",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/policia.jpg",
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
        <ParaBlog key={index} text={para.para} />
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
