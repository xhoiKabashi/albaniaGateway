// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/blog/food";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 Popular Albanian Foods",
  description:
    "Mediterranean culture, history, and cuisine are renowned worldwide. This vibrant region is a mosaic of diverse countries, including Albania, known locally as Shqiperia.",
  keywords:
    "Albania, food, Albanian lek, Fërgesë, Byrek, Pispili, Tarator, Flija, Speca të mbushura, Tave kosi,Peshk në zgarë, fish in grill, fasule, Qofte",
  openGraph: {
    title: "Top 10 Popular Albanian Foods",
    description:
      "Mediterranean culture, history, and cuisine are renowned worldwide. This vibrant region is a mosaic of diverse countries, including Albania, known locally as Shqiperia.",
    url: "https://albaniagateway.com/food-beverage/food",
    siteName: "Albania Gateway",
    images: {
      url: "/info/foodheader.jpg",
      width: 1260,
      height: 800,
      alt: "Image of an Albanian Dish",
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
