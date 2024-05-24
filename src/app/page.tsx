// `app/page.tsx` is the UI for the `/` URL

import BlogHomePage from "@/components/organisms/homepage/BlogHomePage";

import HeaderHomeImage from "@/components/organisms/homepage/HeaderHomeImage";
import OnFocusGrid from "@/components/organisms/homepage/OnFocusGrid";
import VisitCities from "@/components/organisms/homepage/VisitCities";
import WhyVisitTirana from "@/components/organisms/homepage/WhyVisitTirana";
import Map from "@/components/organisms/map/Map";
import Blog from "./blog/page";

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
