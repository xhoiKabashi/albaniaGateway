// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/blog/currency-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Albania’s Currency Confusion",
  description:
    "Navigating Albania's currency can be tricky due to the historical 'old lek' and 'new lek' terminology. Learn about Albania's official currency, the lek, and how to avoid confusion when making purchases.",
  keywords:
    "Albania, currency, Albanian lek, old lek, new lek, Bank of Albania, currency reform, financial transactions, confusion, tourist tips, Albania tourist traps, currency confusion,",
  openGraph: {
    title: "The Tale of Two Leks: Understanding Albania’s Currency Confusion",
    description:
      "Navigating Albania's currency can be tricky due to the historical 'old lek' and 'new lek' terminology. Learn about Albania's official currency, the lek, and how to avoid confusion when making purchases.",
    url: "https://albaniagateway.com/blog/albania-currency-confusion",
    siteName: "Albania Gateway",
    images: {
      url: "/lek.jpg",
      width: 1260,
      height: 800,
      alt: "Image of Albania Currency",
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
