/* eslint-disable react/no-unescaped-entities */
import { TypographyH2, TypographyH3 } from "@/components/atoms/TypographyH2";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="py-16 min-h-screen relative">
      <title> A Journey Down the Albanian Riviera</title>
      <meta
        name="description"
        content="Explore the stunning beauty and cultural richness of the Albanian Riviera with our comprehensive guide. From hidden coves and dramatic cliffs to charming villages and historical sites, embark on an authentic Balkan adventure along Albania's southwestern coastline."
      />
      <meta
        name="keywords"
        content="Albanian Riviera, Albania travel, Mediterranean coast, Balkan adventure, Ionian Sea, Adriatic Sea, Albanian beaches, Albanian culture, Albanian cuisine, Albanian history, Riviera attractions, Riviera destinations, Riviera travel tips, Riviera accommodation, Riviera currency"
      />

      <header className="w-full h-64 relative">
        <Image
          alt="Panoramic view of the Air Albania at Tirana International Airport"
          src={"/riviera-page-header.jpg"}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      </header>
      <div className="relative -inset-y-14 flex items-center text-back justify-center text-white  text-center md:text-4xl font-bold px-3">
        A Journey Down the Albanian Riviera
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <section className=" w-[90%] md:w-[70%] text-balance  space-y-3">
          <TypographyH2 text="Introduction" />
          <p>
            The turquoise waters of the Mediterranean lap against hidden coves,
            dramatic cliffs pierce the azure sky, and charming villages whisper
            tales of a bygone era. Welcome to the Albanian Riviera, a slice of
            paradise stretching along Albania's southwestern coastline. Forget
            the crowds and inflated prices – here, on the shores of the Ionian
            Sea, awaits an authentic Balkan adventure.
          </p>
          <TypographyH3 text="Adriatic Sea:" />

          <p>
            Our journey begins as the Adriatic Sea kisses Albania's northern
            shores. Here, the beaches transition from the pebbled stretches near
            the Montenegrin border to the golden sands of Velipoja, a haven for
            windsurfers and kitesurfers. Further south, bustling Shëngjin offers
            a vibrant mix of beaches, bars, and historical sites like the
            ancient city of Shkodra.
          </p>
          <br />
          <p>
            Durrës, Albania's second-largest city, marks the transition point
            between the Adriatic and Ionian Seas. Its long, sandy beach caters
            to families, while the Roman Amphitheatre offers a glimpse into
            Albania's rich history. Neighboring Golem Beach boasts a lively
            atmosphere, perfect for those seeking water sports and beachfront
            entertainment.
          </p>
          <br />
          <p>
            South of Durrës, the landscape transforms. Lush greenery cascades
            towards the Ionian, marking the entrance to the Albanian Riviera
            proper. The Karaburun Peninsula, a national park teeming with flora
            and fauna, juts out into the turquoise waters. Here, hidden coves
            like Spille Beach offer a tranquil escape, while Divjakë-Karavasta
            National Park provides a haven for birdwatchers, with its vast
            wetlands teeming with pelicans and flamingos.
          </p>
          <br />
          <p>
            Vlorë, a charming coastal town, marks the official start of the
            Riviera. Its historic center and bustling port offer a glimpse into
            Albanian life. But the true magic lies south, where the Ionian Sea
            unveils its breathtaking beauty.
          </p>
          <TypographyH3 text="Ionian Sea:" />
          <p>
            Passing Llogara National Park, a scenic mountain pass, the panorama
            explodes into a tapestry of turquoise waters, verdant hills, and
            quaint villages. This is the heart of the Albanian Riviera, a string
            of gems waiting to be explored.
          </p>
          <p>
            First stop: Palasë, a postcard-perfect village nestled in a secluded
            bay. Pristine beaches, olive groves, and traditional stone houses
            create an atmosphere of timeless beauty. Further south, Dhërmi
            beckons with its bohemian charm. Here, laid-back vibes meet stunning
            beaches, ideal for relaxation and water activities.
          </p>
          <p>
            Next, we arrive in Vuno, a village perched on a clifftop overlooking
            hidden coves accessible only by boat. Hikers will find paradise in
            Himara, a traditional village surrounded by dramatic cliffs and
            secluded coves like Porto Palermo, a former pirate hideout.
          </p>
          <p>
            The Riviera's crown jewel awaits further south – Ksamil. Imagine
            tiny, uninhabited islands scattered across a turquoise sea,
            accessible by short boat trips. Add pristine beaches, buzzing
            nightlife, and an abundance of fresh seafood, and you have a recipe
            for an unforgettable stay.
          </p>
          <p>
            The Riviera's southernmost tip unfolds near Qeparo, a village known
            for its long, sandy beach and crystal-clear waters. Picturesque
            Borsh Beach stretches for kilometers, offering a haven for
            relaxation and nature lovers. Finally, our journey ends in Sarandë,
            the Riviera's liveliest town. Here, a charming promenade lined with
            cafes and restaurants overlooks the stunning bay, while the imposing
            Lekursi Castle offers panoramic views.
          </p>
          <p>
            Beyond the stunning beaches, the Albanian Riviera offers a treasure
            trove of cultural experiences. Explore the ancient city of Butrint,
            a UNESCO World Heritage Site boasting Greek and Roman ruins. Delve
            into the Ottoman history of Gjirokaster, another UNESCO site known
            for its distinctive Ottoman houses. But the true charm of the
            Riviera lies in its people. Warm hospitality is a way of life here,
            and visitors are welcomed with open arms. Savor fresh, local cuisine
            seafood dominates, but don't miss traditional dishes like byrek
            (savory pastries) and tavë kosi (lamb stew).
          </p>
          <p>
            The Albanian Riviera is still relatively undiscovered, offering a
            unique blend of natural beauty, cultural treasures, and authentic
            experiences. So, ditch the crowds and embark on an unforgettable
            journey down this hidden gem of the Mediterranean.
          </p>
          <TypographyH3 text="Here are some additional tips for your Albanian Riviera adventure:" />
          <p>
            Getting There: Tirana International Airport is the main gateway to
            Albania. From there, you can take buses, ferries, or rent a car to
            explore the Riviera.
          </p>
          <p>
            When to Visit: The peak season is from June to September, with warm
            weather and sunshine. Shoulder seasons (April-May and October) offer
            pleasant weather and fewer crowds.
          </p>
          <p>
            Accommodation: The Albanian Riviera offers a variety of
            accommodation options, from budget-friendly guesthouses to luxury
            resorts.
          </p>
          <p>
            Currency: The Albanian Lek (ALL) is the local currency. ATMs are
            widely available, and some places accept Euros.
          </p>
        </section>
      </div>
    </div>
  );
}
