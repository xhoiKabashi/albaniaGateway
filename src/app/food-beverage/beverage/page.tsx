// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/blog/drink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 7 Refreshing and Flavorful Drinks to Try in Albania",
  description:
    "Albania, a Balkan gem, boasts not only stunning landscapes and rich history, but also a vibrant culinary scene. Beyond delicious food, Albania offers a delightful variety of beverages to quench your thirst and tantalize your taste buds.",
  keywords:
    "Albania, raki, albanian wine, dhalle, boze, albanian drink, albanian cafe, turkish caffee",
  openGraph: {
    title: "Top 7 Refreshing and Flavorful Drinks to Try in Albania",
    description:
      "Albania, a Balkan gem, boasts not only stunning landscapes and rich history, but also a vibrant culinary scene. Beyond delicious food, Albania offers a delightful variety of beverages to quench your thirst and tantalize your taste buds.",
    url: "https://albaniagateway.com/food-beverage/beverage",
    siteName: "Albania Gateway",
    images: {
      url: "/info/drinks.jpg",
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
