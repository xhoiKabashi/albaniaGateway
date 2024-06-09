// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/info/musilm.data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Is Albania a Muslim Country? - Exploring Albania's Religious Diversity",
  description:
    "Discover the religious landscape of Albania through our blog post. From its historical roots to its modern-day secularism, explore the unique blend of Muslim and Christian traditions in Albania and its culture of religious tolerance.",
  keywords:
    "Albania, travel to Albania, Albania blog, Islam in Albania, religious diversity, Albanian history, Albanian culture, Albania religion, Albanian society, religious tolerance, religious coexistence, Albania's religious landscape, religious demographics, Christianity in Albania, Albania's Muslim population",
  openGraph: {
    title:
      "Is Albania a Muslim Country? - Exploring Albania's Religious Diversity",
    description:
      "Discover the religious landscape of Albania through our blog post. From its historical roots to its modern-day secularism, explore the unique blend of Muslim and Christian traditions in Albania and its culture of religious tolerance.",
    url: "https://albaniagateway.com/blog/is-albania-a-muslim-country",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/xhamia.jpg",
      width: 1260,
      height: 800,
      alt: "A mosque in Albania",
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
