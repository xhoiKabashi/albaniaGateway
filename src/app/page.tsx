// `app/page.tsx` is the UI for the `/` URL

import HeaderHomeImage from "@/components/organisms/homepage/HeaderHomeImage";
import OnFocusGrid from "@/components/organisms/homepage/OnFocusGrid";
import WhyVisitTirana from "@/components/organisms/homepage/WhyVisitTirana";
import Map from "@/components/organisms/map/Map";
import Blog from "./blog/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://albaniagateway.com/"),
  title: {
    template: "%s | Albania Gateway",
    default: "Albania Gateway",
  },
  description:
    "Discover the vibrant cities of Albania, each with its unique charm and attractions. From the historic streets of Shkodër and the coastal beauty of Vlorë to the mountainous paradise of Theth and the cultural richness of Lezhë, explore the best of what Albania has to offer.",
  keywords:
    "Albania,Albanian cities, travel to Albania, tourism, Shkodër, Vlorë, Theth, Lezhë, top attractions, hidden gems, travel tips, Albania travel guide, explore Albania, Albania, travel, Balkans, adventure, culture, cuisine, hospitality, tourism, hidden gems, travel tips, Albanian Riviera, Albanian Alps, Adriatic Sea, Ionian Sea, Dhermi, Himara, Illyrians, Greeks, Romans, Byzantines, Ottomans, Durres, Gjirokastër, Berat, Butrint, Tirana, Byrek, Tavë Kosi, affordable, budget, people, hiking, kayaking, Osumi Canyons, paragliding, mountain biking, scuba diving, uncrowded, unique destinations, travel guide",
  openGraph: {
    title: "Albania Gateway,  The Gateway to the Albanian Paradise",
    description:
      "Explore Albania like never before with our travel blog! Dive into crystal-clear waters along the stunning Albanian coast and hike through breathtaking mountains.",
    url: "https://albaniagateway.com",
    siteName: "Albania Gateway",
    images: {
      url: "/vlora-image.jpg",
      width: 1260,
      height: 800,
    },
    locale: "en-EN",
  },
};

export default function Page() {
  return (
    <main className="w-full md:w-[70%]  mt-16">
      <HeaderHomeImage />
      <WhyVisitTirana />
      <OnFocusGrid />
      <Map />
      <Blog />
    </main>
  );
}
