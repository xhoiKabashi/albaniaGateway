import { MainWrapper } from "@/components/atoms/Wrapper";
import BlogCard from "@/components/organisms/blog/Blogcards";
import React from "react";
import food from "../../../public/info/foodheader.jpg";
import drinks from "../../../public/info/drinks.jpg";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Albanian Food and Beverages",
  description:
    "Albanian cuisine offers a rich tapestry of flavors and techniques that reflect its history and geography. Exploring the food in Albania reveals a hearty, rustic culinary tradition infused with Mediterraneaninfluences",
  keywords:
    "Albanian cuisine, travel to Albania, tourism, Shkodër, Vlorë, Theth, Lezhë, raki, tave kosi,tave dhehu, byrek, fasule, traditional food, travel tips, Albania travel guide, explore Albania, Albania blogs",
  openGraph: {
    title: "Explore Albanian Food and Beverages",
    description:
      "Albanian cuisine offers a rich tapestry of flavors and techniques that reflect its history and geography. Exploring the food in Albania reveals a hearty, rustic culinary tradition infused with Mediterraneaninfluences",
    url: "https://albaniagateway.com/food-beverage",
    siteName: "Albania Gateway",
    images: {
      url: "/info/foodheader.jpg",
      width: 1260,
      alt: "Image of an albanian dish",
      height: 800,
    },
    locale: "en-EN",
  },
};

const Blog = () => {
  const blogData = [
    {
      imageUrl: food,
      date: "Jun 29",
      title: "Popular Albanian Food",
      location: "Read more",
      href: "/food-beverage/food",
      alt: "Image of an albanian dish",
    },
    {
      imageUrl: drinks,
      date: "Jun 26",
      title: "Popular Albanian Beverages",
      href: "/food-beverage/beverage",
      alt: "Image of an albanian drnks",
    },

    // Add more blog data objects as needed
  ];

  return (
    <MainWrapper>
      <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
        Explore Albanian Food and Beverages
      </h2>
      <p className="text-base  text-center mb-8  md:w-2/3 w-[90%]">
        Albanian cuisine offers a rich tapestry of flavors and techniques that
        reflect its history and geography. Exploring the food in Albania reveals
        a hearty, rustic culinary tradition infused with Mediterranean
        influences, characteristic of the region. Imagine a picturesque
        settlement nestled alongside a meandering river, where the tradition of
        sharing meals highlights the cultural significance of using food to
        bring people together. From the coastal use of fresh seafood to the
        interior s preference for dairy and meat, the diversity in Albanian
        meals is truly notable
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-6 justify-center w-[95%] md:w-[60%]">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            imageUrl={blog.imageUrl}
            date={blog.date}
            title={blog.title}
            href={blog.href}
            alt={blog.alt}
          />
        ))}
      </div>
    </MainWrapper>
  );
};

export default Blog;
