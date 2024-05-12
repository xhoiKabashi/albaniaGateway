// `app/page.tsx` is the UI for the `/` URL

import BlogHomePage from "@/components/organisms/homepage/BlogHomePage";

import HeaderHomeImage from "@/components/organisms/homepage/HeaderHomeImage";
import OnFocusGrid from "@/components/organisms/homepage/OnFocusGrid";
import VisitCities from "@/components/organisms/homepage/VisitCities";

export default function Page() {
  return (
    <main className="w-full flex flex-col justify-center items-center pt-16">
      <HeaderHomeImage />
      <OnFocusGrid />
      <VisitCities />
      <BlogHomePage />
    </main>
  );
}
