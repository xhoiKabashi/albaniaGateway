// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/info/democratic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Albania a Democracy? - Explore Albania Like Never Before",
  description:
    "Explore Albania's democratic journey through our blog. From its parliamentary system to the challenges it faces, discover how Albania navigates its path towards European integration.",
  keywords:
    "Albania, travel to Albania, Albania blog, Democracy in Albania, Is Albania democratic country, Albanian history, Albanian culture, Albania politics, is Albania safe, democracy, parliamentary republic, Albanian government, elections in Albania, Albanian Parliament, Kuvendi, corruption in Albania, judicial independence in Albania, Albania in Nato, Albania in EU, albania dangerous",
  openGraph: {
    title: "Is Albania a Democracy? ",
    description:
      "Explore Albania's democratic journey through our blog. From its parliamentary system to the challenges it faces, discover how Albania navigates its path towards European integration.",
    url: "https://albaniagateway.com/blog/albania-a-democratic-country",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/democracy.jpg",
      width: 1260,
      height: 800,
    },
    locale: "en-EN",
  },
};

const page = () => {
  return (
    <>
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
    </>
  );
};

export default page;
