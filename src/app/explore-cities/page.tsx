import { MainWrapper } from "@/components/atoms/Wrapper";
import BlogCard from "@/components/organisms/blog/Blogcards";
import React from "react";
import tirana from "../../../public/tirana-image.jpg";
import shkoder from "../../../public/shkoder-card.jpg";
import berat from "../../../public/berat-image.jpg";
import gjirokaster from "../../../public/gjirokaster-image.jpg";
import vlora from "../../../public/vlora-image.jpg";
import saranda from "../../../public/saranda-image.jpg";
import durres from "../../../public/durres.jpg";
import korca from "../../../public/korca-image.jpg";
import pogradec from "../../../public/pogradec.jpg";
import permet from "../../../public/permet-image.jpg";
import dhermia from "../../../public/dhermi.jpg";
import theth from "../../../public/theth.jpg";
import tepelena from "../../../public/Vjosa.jpg";
import lezha from "../../../public/varri-skenderbehut.jpg";
import kruja from "../../../public/kruje.jpg";
import elbasan from "../../../public/elbasani.jpg";
import tropoja from "../../../public/tropoje.jpg";

const Blog = () => {
  const blogData = [
    {
      imageUrl: tirana,
      date: "Tirana",
      title:
        "Tirana a vibrant capital, known for its lively nightlife and colorful buildings.",
      location: "Read more",
      href: "/explore-cities/tirana",
    },
    {
      imageUrl: shkoder,
      date: "Shkodra",
      title: "Historic city by Lake Shkodra, featuring Rozafa Castle.",
      href: "/explore-cities/shkodra",
    },
    {
      imageUrl: berat,
      date: "Berat",
      title:
        "UNESCO World Heritage site, famous for its Ottoman architecture and a thousand windows.",
      href: "/explore-cities/berat",
    },
    {
      imageUrl: gjirokaster,
      date: "Gjirokastra",
      title: "Stone houses and the impressive Gjirokastër Castle",
      href: "/explore-cities/gjirokastra",
    },
    {
      imageUrl: vlora,
      date: "Vlora",
      title: "Independence site with beautiful beaches and marine parks",
      href: "/explore-cities/vlora",
    },
    {
      imageUrl: saranda,
      date: "Saranda",
      title:
        " Coastal city near Butrint, known for clear waters and summer vibes.",
      href: "/explore-cities/saranda",
    },
    {
      imageUrl: durres,
      date: "Durres",
      title: "Major port city with an ancient Roman amphitheater.",
      href: "/explore-cities/durres",
    },
    {
      imageUrl: korca,
      date: "Korca",
      title: "Cultural hub with museums and the famous Korçë Brewery",
      href: "/explore-cities/korca",
    },
    {
      imageUrl: pogradec,
      date: "Pogradec",
      title:
        "Picturesque town on Lake Ohrid, famous for its clear waters and serene landscapes.",
      href: "/explore-cities/pogradec",
    },
    {
      imageUrl: permet,
      date: "Permet",
      title: "Known for its natural hot springs and stunning canyons.",
      href: "/explore-cities/permet",
    },
    {
      imageUrl: dhermia,
      date: "Dhermi & Himara",
      title:
        "Beautiful coastal village with pristine beaches and vibrant nightlife.",
      href: "/explore-cities/himara-dhermi",
    },
    {
      imageUrl: tepelena,
      date: "Tepelena",
      title:
        "Historic town known for its stunning landscapes and the Ali Pasha Tepelena Castle.",
      href: "/explore-cities/tepelena",
    },
    {
      imageUrl: theth,
      date: "Theth",
      title:
        " Remote mountain village in the Albanian Alps, perfect for scenic hikes and exploring nature.",
      href: "/explore-cities/theth",
    },
    {
      imageUrl: lezha,
      date: "Lezha",
      title:
        "Historic city featuring Skanderbeg's Memorial and the ancient Lezhë Castle.",
      href: "/explore-cities/lezha",
    },
    {
      imageUrl: kruja,
      date: "Kruja",
      title:
        "Known for the Krujë Castle and the National Museum dedicated to Skanderbeg.",
      href: "/explore-cities/kruja",
    },
    {
      imageUrl: elbasan,
      date: "Elbasan",
      title:
        "Central city with a rich history, featuring the Elbasan Castle and its ancient walls.",
      href: "/explore-cities/elbasan",
    },
    {
      imageUrl: tropoja,
      date: "Tropoja",
      title:
        " Gateway to the Valbona Valley, ideal for hiking and nature enthusiasts",
      href: "/explore-cities/tropoja",
    },

    // Add more blog data objects as needed
  ];

  return (
    <MainWrapper>
      <h1 className="text-3xl font-bold text-center mb-8">Explore Cities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center w-[95%] md:w-[80%]">
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
