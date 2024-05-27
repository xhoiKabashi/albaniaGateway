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

const Blog = () => {
  const blogData = [
    {
      imageUrl: ksamil,
      date: "May 26",
      title: "A Journey Down the Albanian Riviera",
      location: "Read more",
      href: "/blog/explore-albania-riviera",
    },
    {
      imageUrl: packUp,
      date: "May 26",
      title: "A Comprehensive Guide to Arrival by Sea, Sky, and Land",
      href: "/blog/how-to-travel-to-albania",
    },
    {
      imageUrl: Money,
      date: "May 26",
      title: "Understanding Albania’s Currency Confusion",
      href: "/blog/what-do-you-need-to-know-about-albania-currency",
    },
    {
      imageUrl: church,
      date: "May 26",
      title: "Is Albania a Christian Country?",
      href: "/blog/albania-christian-country",
    },
    {
      imageUrl: xhamia,
      date: "May 26",
      title: "Is Albania a Muslim Country?",
      href: "/blog/albania-muslim-country",
    },
    {
      imageUrl: democracy,
      date: "May 26",
      title: "Is Albania a Democratic Country?",
      href: "/blog/albania-a-democratic-country",
    },
    {
      imageUrl: castle,
      date: "May 26",
      title: "Exploring Albania's Enigmatic Castles",
      href: "/blog/top-ten-castles-in-albania",
    },
    {
      imageUrl: nato,
      date: "May 26",
      title: "Is Albania in Nato?",
      href: "/blog/albania-in-nato",
    },
    {
      imageUrl: policia,
      date: "May 26",
      title: "Is Albania Safe?",
      href: "/blog/is-albania-safe",
    },
    {
      imageUrl: eu,
      date: "May 26",
      title: "Is Albania Safe?",
      href: "/blog/is-albania-in-eu",
    },
    {
      imageUrl: rich,
      date: "May 26",
      title: "Is Albania a Rich or Poor Country?",
      href: "/blog/is-albania-rich",
    },
    {
      imageUrl: tolerance,
      date: "May 26",
      title: "Albania and Religious Tolerance",
      href: "/blog/tolerance",
    },

    // Add more blog data objects as needed
  ];

  return (
    <MainWrapper>
      <h1 className="text-3xl font-bold text-center mb-8">Explore Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center w-[95%] md:w-[90%]">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            imageUrl={blog.imageUrl}
            date={blog.date}
            title={blog.title}
            href={blog.href}
          />
        ))}
      </div>
    </MainWrapper>
  );
};

export default Blog;
