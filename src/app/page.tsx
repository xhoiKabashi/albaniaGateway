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
    "Explore Albania like never before with our travel blog! Dive into crystal-clear waters along the stunning Albanian coast and hike through breathtaking mountains. Learn about Albania's fascinating history, visit charming villages, and taste delicious local food. Let us show you the beauty and excitement of Albania through our blog",
  keywords:
    "Vlorë, Albania, travel to Vlora, tourism, beaches, history, Albanian Riviera, top attractions, hidden gems, travel tips, Vlora in Albania, travel to Vlora",
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
