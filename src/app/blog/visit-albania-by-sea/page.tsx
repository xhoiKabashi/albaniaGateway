// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/visit/bysea-data";
import LinkToGoogle from "@/components/atoms/Link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Setting Sail for Albania: Your Guide to Arriving by Ferry",
  description:
    "Embark on a maritime adventure to Albania with this comprehensive guide to traveling by ferry. Discover the key ports, routes, ferry companies, ticket prices, and visa requirements for an unforgettable journey.",
  keywords:
    "Albania, ferry to Albania, traveling by ferry, Albanian ports, ferry routes,Albania ferry companies,Albania ferry ticket prices,Albania maritime adventure, travel by sea, Albania Seas, Adriatic Sea, Ionnian Sea, Travel from Italy, Travel from Greece, Travel from Durres, Travel from from Vlora, Travel from Saranda, Italy to Albania, Greece to Albania, Albania to Italy, Albania to Greece",
  openGraph: {
    title: "Setting Sail for Albania: Your Guide to Arriving by Ferry",
    description:
      "Embark on a maritime adventure to Albania with this comprehensive guide to traveling by ferry. Discover the key ports, routes, ferry companies, ticket prices, and visa requirements for an unforgettable journey.",
    url: "https://albaniagateway.com/blog/arriving-by-ferry-in-albania",
    siteName: "Albania Gateway",
    images: {
      url: "ferry-durres-port.jpg",
      width: 1200,
      height: 630,
      alt: "Image of Durres Port",
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
      <ParaBlog text="Albania's stunning coastline beckons travelers seeking sun-drenched beaches, charming port towns, and dramatic cliffs. While flying is a popular option, for those seeking a more scenic and adventurous arrival, there's the exciting alternative - traveling by ferry!" />
      <ParaBlog text="This guide will navigate you through the world of ferries to Albania, covering routes, ports, and everything you need to know for a smooth maritime adventure." />

      <TitleBlog text="Charting Your Course: Ports of Entry in Albania" />
      <ParaBlog text="Several Albanian ports welcome ferries from neighboring countries, making it easy to find a route that suits your travel plans. The key ports to remember are:" />

      <ParaBlog text="1. Durrës (Durazzo): The largest port city in Albania, located on the Adriatic coast." />
      <LinkToGoogle link="https://www.google.com/maps/place/Durres+Port/@41.3074422,19.446818,13.94z/data=!4m6!3m5!1s0x134fda30ad7ad68f:0xc91c17895091ddf6!8m2!3d41.313922!4d19.455799!16s%2Fm%2F0cm83st?entry=ttu" />
      <ParaBlog text="2. Vlorë (Vlora): A coastal city known for its beaches and historical sites, also on the Adriatic Sea." />
      <LinkToGoogle link="https://www.google.com/maps/search/vlora+port/@40.4508066,19.4794373,15.78z?entry=ttu" />

      <ParaBlog text="3. Sarandë (Saranda): A popular resort town in southern Albania, situated on the Ionian Sea." />
      <LinkToGoogle link="https://www.google.com/maps/place/Saranda+Ferry+Terminal/@39.8714064,20.0008338,17z/data=!3m1!4b1!4m6!3m5!1s0x135b14fb879162bf:0x7a37996ff4cf6555!8m2!3d39.8714023!4d20.0034087!16s%2Fg%2F1tjbcct9?entry=ttu" />

      <TitleBlog text="Bon Voyage from Your Neighboring Shores" />
      <ParaBlog text="Currently, ferries to Albania primarily operate from Italy and Greece, making them ideal for travelers originating from these countries or those looking to combine a visit to Albania with these popular tourist destinations. Here's a breakdown of the main routes:" />
      <h2 className=" font-semibold text-base">Italy to Albania:</h2>
      <ParaBlog text="Ferry services connect ports in Albania (Durrës, Vlorë) with Italian ports like Ancona, Bari, Brindisi, and Trieste." />
      <ParaBlog text="The journey typically takes several hours, with some routes offering overnight crossings." />
      <h2 className=" font-semibold text-base">Greece to Albania:</h2>
      <ParaBlog text="The most frequent ferry connection is between Corfu, a Greek island in the Ionian Sea, and Sarandë in Albania." />
      <ParaBlog text="This is a popular and quick option, with ferries taking only 45 minutes to 1 hour depending on the type of boat." />

      <div>
        <TitleBlog text="Choosing Your Vessel: Ferry Companies Operating in Albania" />
        <ParaBlog text="Several ferry companies operate routes to Albania, offering a range of services and price points. Here are some of the main players:" />
        <ul className=" list-disc mb-4">
          {blogData.companies.map((companies, index) => (
            <li key={index}>{companies}</li>
          ))}
        </ul>
      </div>
      <TitleBlog text="Knowing the Cost: Budgeting for Your Ferry Trip" />
      <ParaBlog text="Ferry ticket prices vary depending on the route, travel time, and chosen company. Generally, expect to pay anywhere from €18 for a short hop across the Ionian Sea (Corfu - Sarandë) to over €100 for longer overnight journeys from Italy." />
      <TitleBlog text="Here are some resources to help you compare prices and book your ferry tickets:" />
      <ParaBlog text="Ferry Company Websites: Visit the websites of the ferry companies mentioned above to find their latest fares and schedules." />
      <ParaBlog text="Ferry Booking Websites: Utilize online platforms like Direct Ferries or Ferryhopper to compare fares across different companies and book your tickets conveniently." />
      <ParaBlog text="Visa requirements can change, so it's always best to check the latest information with the Albanian Ministry of Foreign Affairs. However, many nationalities can now apply for an e-Visa online before their trip, making the process quick and convenient. You can find more details and the application process here: https://e-visa.al/" />
      <TitleBlog text="Embark on Your Albanian Odyssey!" />
      <ParaBlog text="With your ferry route chosen, tickets booked, and a sense of adventure in your heart, you're all set to set sail for Albania. Enjoy the refreshing sea breeze, captivating views of the coastline, and the anticipation of exploring this fascinating Balkan nation." />
      <ParaBlog text="So, ditch the ordinary and arrive in Albania in style - by ferry!" />
    </BlogPost>
  );
};

export default page;
