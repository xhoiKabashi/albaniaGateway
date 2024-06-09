// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/visit/byair-data";
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
    url: "https://albaniagateway.com/blog/your-guide-to-flying-in-and-exploring-the-land-of-eagles",
    siteName: "Albania Gateway",
    images: {
      url: "air-albania-plane.jpg",
      width: 1200,
      height: 630,
      alt: "Air Albania Plane",
    },
    locale: "en-EN",
  },
};

const page = () => {
  const majorAirlines = [
    "Air Albania (the national carrier)",
    "Aegean Airlines (Greece's flag carrier)",
    "Air Serbia (Serbia's national carrier)",
    "Airbaltic (leading airline in the Baltics)",
    "Air France (France's national carrier)",
    "Austrian Airlines (Austria's biggest airline)",
    "British Airways (major British airline)",
    "Lufthansa (Germany's largest airline)",
  ];

  const lowCostCarriers = [
    "EasyJet (known for budget-friendly fares across Europe)",
    "Eurowings (German low-cost carrier)",
    "Flydubai (Emirates' budget airline)",
    "Flynas (Saudi Arabian low-cost carrier)",
    "Ryanair (leading European low-cost carrier)",
    "SunExpress (Turkish-owned low-cost carrier)",
    "Swiss International (Switzerland's national carrier)",
    "Transavia (Dutch low-cost carrier)",
    "TUI fly (German leisure airline)",
    "Wizz Air (known for their budget-friendly fares)",
  ];

  return (
    <BlogPost
      title={blogData.title}
      date={blogData.date}
      readTime={blogData.readTime}
      imageSrc={blogData.imageSrc}
      imageAlt={blogData.imageAlt}
    >
      <TitleBlog text="Soaring into Albania: Your Guide to Flying in and Exploring the Land of Eagles" />
      <ParaBlog text="Albania, a Balkan gem boasting stunning beaches, dramatic mountains, and rich history, is calling your name! And the easiest way to answer that call? By air, of course. This post will be your one-stop guide to navigating the skies and touching down in this unforgettable country." />
      <TitleBlog text="Airports:" />
      <TitleBlog text="1. Tirana International Airport Nënë Tereza (TIA)" />
      <ParaBlog text="The Tirana International Airport Nënë Tereza is the largest airport in Albania    . Located in Rinas, it is the main international gateway to the country and its capital, Tirana. In 2023, it handled over 10 million passengers, marking a 102% increase." />
      <LinkToGoogle link="https://www.google.com/maps/place/Tirana+International+Airport/@41.4191522,19.7107162,17z/data=!3m1!4b1!4m6!3m5!1s0x13502d0712c5607f:0x5254c1f62d5286db!8m2!3d41.4191482!4d19.7132911!16zL20vMDF2cDZj?entry=ttu" />
      <TitleBlog text="2. Kukës International Airport Zayed" />
      <ParaBlog text="The Kukës International Airport Zayed, the newest airport in Albania, opened its doors on July 9, 2021. It marked the end of the monopoly on international flights in Albania after 15 years. Despite being relatively new, it has already started to make its mark." />{" "}
      <LinkToGoogle link="https://www.google.com/maps/place/Kuk%C3%ABs+International+Airport/@42.036378,20.4154536,17z/data=!3m1!4b1!4m6!3m5!1s0x1353d3dce10deda9:0xadb9364b85e66e42!8m2!3d42.036374!4d20.4180285!16s%2Fm%2F0g5ptg6?entry=ttu" />
      <TitleBlog text="3. Vlora International Airport" />
      <ParaBlog text="The Vlora International Airport is currently under construction1. The international tender was won by a consortium made up of Behgjet Pacolli’s Mabco Constructions, the Turkish YDA Group, and the Kosovar 2A Group Shpk2. The airport is expected to welcome its first passengers in summer 20252." />
      <LinkToGoogle link="https://www.google.com/maps/dir//JC4H%2B37+Vlora+International+Airport,+Akerni,+Albania/@40.605315,19.3458162,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x134549007225ef5f:0xf7dd4da4465f5e38!2m2!1d19.4282176!2d40.6052139!3e0?entry=ttu" />
      <TitleBlog text="Gearing Up for Takeoff: Who Flies to Albania?" />
      <ParaBlog text="The good news is, Albania is well-connected with flights from across Europe. Here's a comprehensive list of airlines that operate flights to Tirana, Albania's capital city:" />
      <section>
        <TitleBlog text="Major Airlines:" />
        <ul className=" list-disc mb-4">
          {majorAirlines.map((airline, index) => (
            <li key={index}>{airline}</li>
          ))}
        </ul>
        <TitleBlog text="Low-Cost Carriers:" />
        <ul className=" list-disc  mb-4">
          {lowCostCarriers.map((airline, index) => (
            <li key={index}>{airline}</li>
          ))}
        </ul>
        <ParaBlog text="These airlines offer flights from various European cities, including Milan, Istanbul, London, and Bologna." />
      </section>
      <TitleBlog text="Cost Considerations: How Much Does it Cost to Fly to Albania?" />
      <ParaBlog text="Flight prices can vary depending on several factors, including the time of year, your departure city, and the airline you choose. However, you can expect to find flights ranging from a budget-friendly €57 (during the off-season) to over €100 for peak travel times." />
      <TitleBlog text="Landing Permissions: Do I Need a Visa?" />
      <ParaBlog text="Visa requirements can change, so it's always best to check the latest information with the Albanian Ministry of Foreign Affairs. However, many nationalities can now apply for an e-Visa online before their trip, making the process quick and convenient. You can find more details and the application process here: https://e-visa.al/" />
    </BlogPost>
  );
};

export default page;
