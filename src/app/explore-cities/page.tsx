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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exploring Albanian Cities: Discover the Richness of Albania",
  description:
    "Discover the vibrant cities of Albania, each with its unique charm and attractions. From the historic streets of Shkodër and the coastal beauty of Vlorë to the mountainous paradise of Theth and the cultural richness of Lezhë, explore the best of what Albania has to offer.",
  keywords:
    "Albania,Albanian cities, travel to Albania, tourism, Shkodër, Vlorë, Theth, Lezhë, top attractions, hidden gems, travel tips, Albania travel guide, explore Albania, Albania, travel, Balkans, adventure, culture, cuisine, hospitality, tourism, hidden gems, travel tips, Albanian Riviera, Albanian Alps, Adriatic Sea, Ionian Sea, Dhermi, Himara, Illyrians, Greeks, Romans, Byzantines, Ottomans, Durres, Gjirokastër, Berat, Butrint, Tirana, Byrek, Tavë Kosi, affordable, budget, people, hiking, kayaking, Osumi Canyons, paragliding, mountain biking, scuba diving, uncrowded, unique destinations, travel guide",
  openGraph: {
    title: "Exploring Albanian Cities: Discover the Richness of Albania",
    description:
      "Discover the vibrant cities of Albania, each with its unique charm and attractions. From the historic streets of Shkodër and the coastal beauty of Vlorë to the mountainous paradise of Theth and the cultural richness of Lezhë, explore the best of what Albania has to offer.",
    url: "https://albaniagateway.com/explore-cities",
    siteName: "Albania Gateway",
    images: {
      url: "/tirana-image.jpg",
      width: 1260,
      height: 800,
    },
    locale: "en-EN",
  },
};

const Blog = () => {
  const blogData = [
    {
      imageUrl: tirana,
      date: "Tirana",
      title:
        "Tirana a vibrant capital, known for its lively nightlife and colorful buildings.",
      location: "Read more",
      href: "/explore-cities/tirana",
      alt: "Image of Tirana",
    },
    {
      imageUrl: shkoder,
      date: "Shkodra",
      title: "Historic city by Lake Shkodra, featuring Rozafa Castle.",
      href: "/explore-cities/shkodra",
      alt: "Image of Shkodra center",
    },
    {
      imageUrl: berat,
      date: "Berat",
      title:
        "UNESCO World Heritage site, famous for its Ottoman architecture and a thousand windows.",
      href: "/explore-cities/berat",
      alt: "Image of Berat City",
    },
    {
      imageUrl: gjirokaster,
      date: "Gjirokastra",
      title: "Stone houses and the impressive Gjirokastër Castle",
      href: "/explore-cities/gjirokastra",
      alt: "Image of Gjirokastra Castle",
    },
    {
      imageUrl: vlora,
      date: "Vlora",
      title: "Independence site with beautiful beaches and marine parks",
      href: "/explore-cities/vlora",
      alt: "Image of Vlora",
    },
    {
      imageUrl: saranda,
      date: "Saranda",
      title:
        " Coastal city near Butrint, known for clear waters and summer vibes.",
      href: "/explore-cities/saranda",
      alt: "Image of Saranda sea",
    },
    {
      imageUrl: durres,
      date: "Durres",
      title: "Major port city with an ancient Roman amphitheater.",
      href: "/explore-cities/durres",
      alt: "Image of Durres streets",
    },
    {
      imageUrl: korca,
      date: "Korca",
      title: "Cultural hub with museums and the famous Korçë Brewery",
      href: "/explore-cities/korca",
      alt: "Image of Korca city center",
    },
    {
      imageUrl: pogradec,
      date: "Pogradec",
      title:
        "Picturesque town on Lake Ohrid, famous for its clear waters and serene landscapes.",
      href: "/explore-cities/pogradec",
      alt: "Image of Pogradec from above",
    },
    {
      imageUrl: permet,
      date: "Permet",
      title: "Known for its natural hot springs and stunning canyons.",
      href: "/explore-cities/permet",
      alt: "Image of Berat City",
    },
    {
      imageUrl: dhermia,
      date: "Dhermi & Himara",
      title:
        "Beautiful coastal village with pristine beaches and vibrant nightlife.",
      href: "/explore-cities/himara-dhermi",
      alt: "Image of a Church in Dhermi",
    },
    {
      imageUrl: tepelena,
      date: "Tepelena",
      title:
        "Historic town known for its stunning landscapes and the Ali Pasha Tepelena Castle.",
      href: "/explore-cities/tepelena",
      alt: "Image of Vjosa River",
    },
    {
      imageUrl: theth,
      date: "Theth",
      title:
        " Remote mountain village in the Albanian Alps, perfect for scenic hikes and exploring nature.",
      href: "/explore-cities/theth",
      alt: "Image of Theth Church",
    },
    {
      imageUrl: lezha,
      date: "Lezha",
      title:
        "Historic city featuring Skanderbeg's Memorial and the ancient Lezhë Castle.",
      href: "/explore-cities/lezha",
      alt: "Image of Skanderbeg’s Memorial",
    },
    {
      imageUrl: kruja,
      date: "Kruja",
      title:
        "Known for the Krujë Castle and the National Museum dedicated to Skanderbeg.",
      href: "/explore-cities/kruja",
      alt: "Image of Kruja Castle",
    },
    {
      imageUrl: elbasan,
      date: "Elbasan",
      title:
        "Central city with a rich history, featuring the Elbasan Castle and its ancient walls.",
      href: "/explore-cities/elbasan",
      alt: "Image of Elbasan City center",
    },
    {
      imageUrl: tropoja,
      date: "Tropoja",
      title:
        " Gateway to the Valbona Valley, ideal for hiking and nature enthusiasts",
      href: "/explore-cities/tropoja",
      alt: "Image of Tropoja landscape",
    },

    // Add more blog data objects as needed
  ];

  return (
    <MainWrapper>
      <h1 className="text-3xl font-bold text-center mb-8">Explore Cities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-[95%] md:w-[80%]">
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
