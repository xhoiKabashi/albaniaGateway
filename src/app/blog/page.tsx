import { MainWrapper } from "@/components/atoms/Wrapper";
import BlogCard from "@/components/organisms/blog/Blogcards";
import React from "react";
import ksamil from "../../../public/al-riviera-header.jpg";
import packUp from "../../../public/howtotravel-header.jpg";
import Money from "../../../public/lek-onfocus.jpg";
import church from "../../../public/blog/church.jpg";
import xhamia from "../../../public/blog/xhamia.jpg";
import democracy from "../../../public/blog/democracy.jpg";
import castle from "../../../public/blog/Gjirokastër-Castle-1.jpg";
import nato from "../../../public/blog/nato.jpg";
import policia from "../../../public/blog/policia.jpg";
import eu from "../../../public/blog/eu.jpg";
import rich from "../../../public/blog/rich.jpg";
import tolerance from "../../../public/blog/tolerance.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Blogs - Albania Gateway",
  description:
    "Discover the vibrant cities of Albania, each with its unique charm and attractions. From the historic streets of Shkodër and the coastal beauty of Vlorë to the mountainous paradise of Theth and the cultural richness of Lezhë, explore the best of what Albania has to offer through our insightful blogs.",
  keywords:
    "Albanian cities, travel to Albania, tourism, Shkodër, Vlorë, Theth, Lezhë, top attractions, hidden gems, travel tips, Albania travel guide, explore Albania, Albania blogs",
  openGraph: {
    title: "Explore Blogs - Albania Gateway",
    description:
      "Discover the vibrant cities of Albania, each with its unique charm and attractions. From the historic streets of Shkodër and the coastal beauty of Vlorë to the mountainous paradise of Theth and the cultural richness of Lezhë, explore the best of what Albania has to offer through our insightful blogs.",
    url: "https://albaniagateway.com/blog",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/Gjirokastër-Castle-1.jpg",
      width: 1260,
      height: 800,
    },
    locale: "en-EN",
  },
};

const Blog = () => {
  const blogData = [
    {
      imageUrl: ksamil,
      date: "May 26",
      title: "A Journey Down the Albanian Riviera",
      location: "Read more",
      href: "/blog/explore-albania-riviera",
      alt: "Image of Albania Rivera",
    },
    {
      imageUrl: packUp,
      date: "May 26",
      title: "A Comprehensive Guide to Arrival by Sea, Sky, and Land",
      href: "/blog/how-to-travel-to-albania",
      alt: "Image of a travel backpack",
    },
    {
      imageUrl: Money,
      date: "May 26",
      title: "Understanding Albania’s Currency Confusion",
      href: "/blog/what-do-you-need-to-know-about-albania-currency",
      alt: "Image of Albania Currency",
    },
    {
      imageUrl: church,
      date: "May 26",
      title: "Is Albania a Christian Country?",
      href: "/blog/albania-christian-country",
      alt: "Image of an Albania Church",
    },
    {
      imageUrl: xhamia,
      date: "May 26",
      title: "Is Albania a Muslim Country?",
      href: "/blog/albania-muslim-country",
      alt: "Image of an Albania Mosque",
    },
    {
      imageUrl: democracy,
      date: "May 26",
      title: "Is Albania a Democratic Country?",
      href: "/blog/albania-a-democratic-country",
      alt: "Image of People protesting in Tirana",
    },
    {
      imageUrl: castle,
      date: "May 26",
      title: "Exploring Albania's Enigmatic Castles",
      href: "/blog/top-ten-castles-in-albania",
      alt: "Image of Gjirokaster Castle",
    },
    {
      imageUrl: nato,
      date: "May 26",
      title: "Is Albania in Nato?",
      href: "/blog/albania-in-nato",
      alt: "Image of Albania and Nato flags",
    },
    {
      imageUrl: policia,
      date: "May 26",
      title: "Is Albania Safe?",
      href: "/blog/is-albania-safe",
      alt: "Image of a couple of Police Officers",
    },
    {
      imageUrl: eu,
      date: "May 26",
      title: "Is Albania in EU?",
      href: "/blog/is-albania-in-eu",
      alt: "Image of European Union flag",
    },
    {
      imageUrl: rich,
      date: "May 26",
      title: "Is Albania a Rich or Poor Country?",
      href: "/blog/is-albania-rich",
      alt: "Image of Financial Services",
    },
    {
      imageUrl: tolerance,
      date: "May 26",
      title: "Albania and Religious Tolerance",
      href: "/blog/tolerance",
      alt: "Image of Albanian Clerks in Paris",
    },

    // Add more blog data objects as needed
  ];

  return (
    <MainWrapper>
      <h2 className="text-3xl font-bold text-center mb-8">Explore Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-[95%] md:w-[90%]">
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
