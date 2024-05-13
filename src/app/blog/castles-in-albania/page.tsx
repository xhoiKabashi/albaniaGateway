/* eslint-disable react/no-unescaped-entities */
import { TypographyH2, TypographyH3 } from "@/components/atoms/TypographyH2";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="py-16 min-h-screen relative">
      <title>
        Exploring Albania's Enigmatic Castles: A Journey Through Time
      </title>
      <meta
        name="description"
        content="Embark on a journey through Albania's rich history by exploring its enigmatic castles. From Krujë to Petrela, discover tales of empires and resilience."
      />
      <meta
        name="keywords"
        content="Albania, castles, history, Krujë, Rozafa, Berat, Gjirokastër, Bashtovë, Petrela, exploration, heritage, architecture, Albania castles,Albania history, Krujë, Rozafa, Berat, Gjirokastër, Bashtovë, Petrela, exploration,Albania heritage,Albania architecture"
      />

      <header className="w-full h-64 relative">
        <Image
          alt="Image of the Gjirokastër Castle, in focus is the Albanian flag"
          src={"/Gjirokastër-Castle-1.jpg"}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
      </header>
      <div className="relative -inset-y-14 flex items-center text-back justify-center text-white  text-center md:text-4xl font-bold px-3">
        Exploring Albania's Enigmatic Castles: A Journey Through Time
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <section className=" w-[90%] md:w-[70%] text-balance  space-y-3">
          <TypographyH2 text="Introduction" />
          <p>
            Albania, a Balkan nation steeped in rich history and dramatic
            landscapes, boasts a treasure trove of castles that whisper tales of
            empires risen and fallen. These magnificent structures, scattered
            like forgotten guardians across the country, offer a glimpse into a
            bygone era and a chance to embark on a thrilling historical
            adventure.
          </p>
          <TypographyH3 text="Krujë Castle:" />
          <p>
            Krujë Castle is one of the most visited cultural sites in Albania.
            This mighty fortress served as the epicenter of Gjergj Castriot’s
            (Gjergj Kastrioti) resistance against the vast and frequent Ottoman
            armies. The castle was first erected in the V-th century during the
            Byzantine era. Within the castle’s walls, visitors can go through a
            museum dedicated to the deeds of Gjergj Castrioti.
          </p>
          <TypographyH3 text="Rozafa Castle:" />
          <p>
            Rozafa Castle stands proud over a rocky hill above the northern city
            of Shkodra1. Its outer walls follow the fluid terrain of the hill
            and cover in them some 9 ha of land1. Once you enter the main gate,
            fortified during the XV-th century, you’ll come to a courtyard1.
            This is the oldest part of the castle1. A tract of an Illyrian wall
            of the IV-th century B.C.E., stands out in this section1.
          </p>
          <TypographyH3 text="Berat Castle:" />
          <p>
            Berat Castle rises over a hill 187 metres (613 feet) high above the
            authentic city of Berat1. The fortification, east of Osum river,
            dates from the IV-th century B.C.E., reflecting traces of Illyrian
            civilization1. The castle’s outer stone walls cover a distance of
            1,440 meters (4,724)1. Along these walls stood 24 watchtowers for
            added defense, and two main gates for access1.
          </p>
          <TypographyH3
            text="Gjirokastër Castle:
"
          />
          <p>
            A UNESCO World Heritage Site, Gjirokastër Castle is a marvel of
            Ottoman architecture and military engineering. Located in the
            historic city of Gjirokastër, this imposing fortress offers visitors
            a glimpse into Albania's Ottoman past. Within its walls lie a museum
            dedicated to the country's communist era, as well as stunning views
            of the city and surrounding countryside. Don't miss the chance to
            explore the castle's labyrinthine passageways and climb the towering
            ramparts for an unforgettable experience.
          </p>
          <TypographyH3 text="Bashtovë Fortress:" />
          <p>
            Bashtovë Fortress is located near the outflow of the Shkumbin River
            into the Adriatic Sea in Central Albania2. The fortress is part of
            the tentative list for inclusion in the UNESCO World Heritage Site
            list2. These are just a few of the many castles that dot the
            Albanian landscape. Each castle has its own unique history and
            charm, making them a must-visit for any history or architecture
            enthusiast. So, the next time you find yourself in Albania, make
            sure to take a step back in time and explore these magnificent
            structures.
          </p>
          <TypographyH3 text="Petrela Castle:" />
          <p>
            Just a short drive from the capital city of Tirana lies Petrela
            Castle, a medieval fortress steeped in history and legend. Believed
            to have been built in the 6th century, the castle offers stunning
            views of the surrounding countryside and the nearby Erzen River.
            Visitors can explore its well-preserved walls and towers, learn
            about its storied past, and enjoy a leisurely meal at the castle's
            onsite restaurant. With its tranquil setting and rich history,
            Petrela Castle is a must-visit destination for history buffs and
            outdoor enthusiasts alike.
          </p>
          <TypographyH3 text="Conclusion:" />
          <p>
            Albania's castles stand as tangible reminders of the country's rich
            and diverse history. From the ancient walls of Rozafa Castle to the
            imposing ramparts of Gjirokastër, each fortress offers a unique
            glimpse into Albania's past and its enduring spirit of resilience.
            Whether you're a history enthusiast, a culture aficionado, or simply
            a lover of breathtaking landscapes, a journey through Albania's
            castles is sure to leave you spellbound and inspired.
          </p>
        </section>
      </div>
    </div>
  );
}
