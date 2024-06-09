// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/visit/byland-data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Comprehensive Guide to Exploring Albania by Land",
  description:
    "Discover the main entry points, transportation options, visa requirements, and essential considerations for exploring Albania by land. Embark on an unforgettable journey through Albania's dramatic landscapes and historic towns.",
  keywords:
    "Albania, exploring Albania by land, Albanian land borders, Albania entry points, Albania transportation, Albania visa requirements, Albanian Lek, Albanian adventure",
  openGraph: {
    title: "Your Comprehensive Guide to Exploring Albania by Land",
    description:
      "Discover the main entry points, transportation options, visa requirements, and essential considerations for exploring Albania by land. Embark on an unforgettable journey through Albania's dramatic landscapes and historic towns.",
    url: "https://albaniagateway.com/blog/visit-albania-by-land",
    siteName: "Albania Gateway",
    images: {
      url: "/explore-albania-land.jpg",
      width: 1200,
      height: 630,
      alt: "Image of Albania border",
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
      <ParaBlog text="Albania's dramatic landscapes and historic towns are waiting to be explored, and what better way to experience them than on a scenic land journey? Whether you're a seasoned road tripper or prefer a comfortable bus ride, this guide will equip you with all the information you need to navigate your way into Albania by land." />
      <TitleBlog text="Crossing Borders: Entry Points by Land" />
      <ParaBlog text="Albania shares land borders with several countries, offering you various entry points depending on your starting location. Here's a rundown of the main ones:" />
      <ParaBlog text="1. Montenegro: The most popular land border crossing for travelers coming from Western Europe. Key points are Hani Hotit and Muriqan, leading to Shkodër in northern Albania." />
      <ParaBlog text="2. Greece: Several border crossings exist, catering to different travel routes. Kakavija in the south is the busiest, connecting Ioannina, Greece, with Gjirokaster in Albania. Kapshtica in the southeast links Konitsa, Greece, with Korça in Albania." />
      <ParaBlog text="3. North Macedonia: The Qafë Boti-Konispol crossing in the southeast connects Struga, North Macedonia, with Pogradec, Albania." />
      <ParaBlog text="4. Kosovo: The border crossing point near Vermosh links both countries in the northern mountainous region." />
      <TitleBlog text="Gearing Up for Your Journey: Choosing Your Mode of Land Transport" />
      <ParaBlog text="There are two main ways to explore Albania by land:" />
      <ParaBlog text="Bus: A convenient and affordable option, especially for longer distances. Numerous bus companies operate routes connecting major Albanian cities with neighboring countries. Popular companies include Central Buses, Florentia Bus, Pati Travel, and Balkan Ekspres." />
      <ParaBlog text="Rental Car: For ultimate flexibility and freedom, consider renting a car. Explore the Albanian countryside at your own pace and discover hidden gems off the beaten path. However, be aware that some mountain roads can be challenging, and driving standards might differ from your home country." />
      <TitleBlog text="Essential Considerations for Your Land Travel" />
      <ParaBlog text="Visa Requirements: Check visa requirements with the Albanian Ministry of Foreign Affairs before your trip. Many nationalities can apply for an e-Visa online for a hassle-free process [e visa Albania]." />
      <ParaBlog text="Border Crossings: Border procedures can vary in terms of waiting times and documentation checks. Be prepared to show your passport, visa (if required), and any necessary vehicle documents if entering by car." />
      <ParaBlog text="Currency Exchange: The Albanian Lek (ALL) is the official currency. Consider exchanging some money to local currency before entering Albania, as exchange options might be limited at border crossings" />
      <TitleBlog text="Embark on Your Albanian Adventure!" />
      <ParaBlog text="With your route planned, transportation secured, and a thirst for exploration, you're ready to hit the road and discover the wonders of Albania. From the bustling streets of Tirana to the serene beauty of the Albanian Alps, a land adventure awaits!" />
    </BlogPost>
  );
};

export default page;
