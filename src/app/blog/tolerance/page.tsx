// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/info/tolerance.data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Albania and Religious Tolerance: A Model of Harmony and Coexistence",
  description:
    "Explore Albania's rich tradition of religious tolerance and coexistence. From its historical background to current initiatives, discover how Albania fosters unity among diverse faiths.",
  keywords:
    "Albania, religious tolerance, religious diversity, Albania culture, interfaith relations, Albania history, Albania religious institutions, secularism, religious freedom",
  openGraph: {
    title:
      "Albania and Religious Tolerance: A Model of Harmony and Coexistence",
    description:
      "Explore Albania's rich tradition of religious tolerance and coexistence. From its historical background to current initiatives, discover how Albania fosters unity among diverse faiths.",
    url: "https://albaniagateway.com/blog/albania-religious-tolerance",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/tolerance.jpg",
      width: 1260,
      alt: "Image of Albanian Clerks in Paris",
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
