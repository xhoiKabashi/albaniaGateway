/* eslint-disable react/no-unescaped-entities */
import { TypographyH2, TypographyH3 } from "@/components/atoms/TypographyH2";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="py-16 min-h-screen relative">
      <title>Exploring Albania: A Comprehensive Guide</title>
      <meta
        name="description"
        content="Discover the best ways to arrive in Albania by sea, air, or land with this comprehensive guide. Explore ports, airports, and border crossings for your adventure in the Balkans."
      />
      <meta
        name="keywords"
        content="Albania travel, Albania arrival, Albania ports, Albania airports, Albania border crossings, Balkans travel, European travel,"
      />

      <header className="w-full h-64 relative">
        <Image
          alt="Panoramic view of the Air Albania at Tirana International Airport"
          src={"/air-albania.jpg"}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      </header>
      <div className="relative -inset-y-14 flex items-center text-back justify-center text-white  text-center md:text-4xl font-bold px-3">
        Exploring Albania: A Comprehensive Guide to Arrival by Sea, Sky, and
        Land
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <section className=" w-[90%] md:w-[70%] text-balance  space-y-3">
          <TypographyH2 text="Introduction" h1={false} />
          <p>
            Albania, a jewel nestled in the Balkans, boasts stunning coastlines,
            rugged mountains, and a rich cultural tapestry. Whether you're drawn
            to its pristine beaches, ancient ruins, or vibrant cities, arriving
            in Albania is the first step towards an unforgettable adventure. In
            this comprehensive guide, we'll explore the various ways you can
            enter this enchanting country, from the azure waters of the Adriatic
            Sea to the towering peaks of the Albanian Alps.
          </p>
          <TypographyH3 h1={false} text="Arriving by Sea:" />
          <p>
            For those seeking a scenic approach, arriving in Albania by sea
            offers breathtaking views of the coastline and easy access to
            coastal towns and cities. The main ports of entry include:
            <br />
            <strong>1. Durres Port:</strong> Situated on the central Albanian
            coast, Durres Port is the largest seaport in the country and a
            popular gateway for ferries from Italy. Ferries from Ancona, Bari,
            and Trieste in Italy offer regular services to Durres, making it a
            convenient option for travelers coming from across the Adriatic Sea.
            <br />
            <strong>2. Vlora Port:</strong> Located further south along the
            Albanian coast, Vlora Port provides ferry connections to the Italian
            port of Brindisi. While fewer ferries operate from Vlora compared to
            Durres, it offers an alternative entry point for those traveling
            from Italy.
          </p>
          <TypographyH3 h1={false} text="Arriving by Air:" />
          <p>
            For travelers seeking a quicker arrival or arriving from more
            distant locations, Albania's international airports provide
            convenient access to the country's diverse attractions. The main
            airports include:
            <br />
            <strong>1. Tirana International Airport (Nënë Tereza):</strong>{" "}
            Located just outside the capital city of Tirana, this modern airport
            serves as the primary gateway to Albania. It offers direct flights
            to numerous European cities, including London, Rome, Istanbul, and
            Vienna, among others. From Tirana, travelers can easily access the
            rest of the country by road or rail.
            <br />
            <strong>2. Kukës Airport:</strong> Situated in northeastern Albania
            near the border with Kosovo, Kukës Airport provides domestic flights
            within Albania and limited international connections. While smaller
            in scale compared to Tirana International Airport, it offers
            convenient access to the northern regions of Albania, including the
            stunning Valbona Valley and Theth National Park.
          </p>
          <TypographyH3 h1={false} text="Arriving by Land:" />
          <p>
            For those arriving overland from neighboring countries, Albania's
            well-connected road network facilitates easy entry by bus, car, or
            train. The main land border crossings include:
            <br />
            <strong>1. Albania-Montenegro Border:</strong> The Hani i Hotit
            border crossing connects Albania with Montenegro and is located near
            the coastal town of Shkodra. Travelers can cross this border by bus,
            car, or taxi, with regular bus services operating between Shkodra
            and Montenegro's capital, Podgorica.
            <br />
            <strong>2. Albania-North Macedonia Border:</strong> The Qafë Thanë
            border crossing links Albania with North Macedonia and is located
            near the town of Pogradec. Buses run regularly between Pogradec and
            Ohrid, making it easy for travelers to explore both countries'
            scenic lakeside regions.
            <br />
            <strong>3. Albania-Greece Border:</strong> Several border crossings
            connect Albania with Greece, including Kakavija-Sagiada and
            Kapshtica-Krystallopigi. These crossings are popular routes for
            travelers exploring the southern Balkans, with buses and taxis
            readily available on both sides of the border.
          </p>

          <TypographyH3 h1={false} text="Conclusion:" />
          <p>
            Whether you arrive by sea, sky, or land, entering Albania marks the
            beginning of an adventure filled with natural beauty, rich history,
            and warm hospitality. From the bustling streets of Tirana to the
            tranquil shores of the Ionian Sea, Albania offers something for
            every traveler. By choosing the arrival method that best suits your
            preferences and itinerary, you'll set the stage for an unforgettable
            journey through this hidden gem of the Balkans.
          </p>
        </section>
      </div>
    </div>
  );
}
