// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/info/christian.data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Is Albania a Christian Country? - Explore Albania's Religious Diversity",
  description:
    "Discover the religious landscape of Albania through our blog post. From its historical roots to modern-day secularism, explore the diverse tapestry of Christian and Muslim traditions in Albania.",
  keywords:
    "Albania, travel to Albania, Albania blog, Christianity in Albania, religious diversity, Albanian history, Albanian culture, Albania religion, Albanian society, religious tolerance, religious coexistence, Albania's religious landscape, religious demographics, Christianity in Balkans",
  openGraph: {
    title:
      "Is Albania a Christian Country? - Explore Albania's Religious Diversity",
    description:
      "Discover the religious landscape of Albania through our blog post. From its historical roots to modern-day secularism, explore the diverse tapestry of Christian and Muslim traditions in Albania.",
    url: "https://albaniagateway.com/blog/is-albania-a-christian-country",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/church.jpg",
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
