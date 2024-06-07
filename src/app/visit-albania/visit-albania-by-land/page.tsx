// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/visit/byland-data";
import LinkToGoogle from "@/components/atoms/Link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Guide to Flying in and Exploring the Land of Eagles",
  description:
    "Soar into Albania with this comprehensive guide to flying in and exploring the land of eagles. Discover the main airports, airlines, flight costs, and visa requirements for your unforgettable journey.",
  keywords:
    "Albania, flying to Albania, Tirana International Airport, Kukës International Airport Zayed, Vlora International Airport, airlines to Albania, flight costs to Albania,albania visa requirements",
  openGraph: {
    title: "Your Guide to Flying in and Exploring the Land of Eagles",
    description:
      "Soar into Albania with this comprehensive guide to flying in and exploring the land of eagles. Discover the main airports, airlines, flight costs, and visa requirements for your unforgettable journey.",
    url: "https://albaniagateway.com/visit-albania/visit-albania-by-air",
    siteName: "Albania Gateway",
    images: {
      url: "/air-albania-plane.jpg",
      width: 1200,
      height: 630,
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
