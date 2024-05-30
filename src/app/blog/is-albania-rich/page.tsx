// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/info/poor-rich.data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Is Albania a Rich or Poor Country? - Assessing Albania's Economic Development",
  description:
    "Assess Albania's economic status through our blog post. From its growth since the fall of communism to the challenges it faces today, explore the factors shaping Albania's economic landscape and its journey towards prosperity.",
  keywords:
    "Albania, travel to Albania, Albania blog, Albanian economy, economic development, poverty in Albania, Albania's GDP, unemployment in Albania, corruption in Albania, foreign investments in Albania, European Union and Albania, Albania's economic challenges, economic prospects",
  openGraph: {
    title:
      "Is Albania a Rich or Poor Country? - Assessing Albania's Economic Development",
    description:
      "Assess Albania's economic status through our blog post. From its growth since the fall of communism to the challenges it faces today, explore the factors shaping Albania's economic landscape and its journey towards prosperity.",
    url: "https://albaniagateway.com/blog/is-albania-rich-or-poor-country",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/rich.jpg",
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
