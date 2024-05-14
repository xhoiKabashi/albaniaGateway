// Page2.jsx
import React from "react";
import CommonPage from "@/components/organisms/blog/BlogTemplate";

export default function Page2() {
  return (
    <CommonPage
      title="Exploring Albania's Enigmatic Castles: A Journey Through Time"
      description="Embark on a journey through Albania's rich history by exploring its enigmatic castles. From Krujë to Petrela, discover tales of empires and resilience."
      keywords="Albania, castles, history, Krujë, Rozafa, Berat, Gjirokastër, Bashtovë, Petrela, exploration, heritage, architecture, Albania castles,Albania history, Krujë, Rozafa, Berat, Gjirokastër, Bashtovë, Petrela, exploration,Albania heritage,Albania architecture"
      headerImageSrc="/Gjirokastër-Castle-1.jpg"
      pageTitle="Exploring Albania's Enigmatic Castles: A Journey Through Time"
      sections={[
        {
          h1: true,
          title: "Introduction",
          content:
            "Albania, a Balkan nation steeped in rich history and dramatic landscapes, boasts a treasure trove of castles that whisper tales of empires risen and fallen. These magnificent structures, scattered like forgotten guardians across the country, offer a glimpse into a bygone era and a chance to embark on a thrilling historical adventure.",
        },
        {
          h1: false,
          title: "Krujë Castle:",
          content:
            "Krujë Castle is one of the most visited cultural sites in Albania. This mighty fortress served as the epicenter of Gjergj Castriot’s (Gjergj Kastrioti) resistance against the vast and frequent Ottoman armies. The castle was first erected in the V-th century during the Byzantine era. Within the castle’s walls, visitors can go through a museum dedicated to the deeds of Gjergj Castrioti.",
        },
        {
          h1: false,
          title: "Rozafa Castle:",
          content:
            "Rozafa Castle stands proud over a rocky hill above the northern city of Shkodra. Its outer walls follow the fluid terrain of the hill and cover in them some 9 ha of land. Once you enter the main gate, fortified during the XV-th century, you’ll come to a courtyard. This is the oldest part of the castle. A tract of an Illyrian wall of the IV-th century B.C.E., stands out in this section.",
        },
        {
          h1: false,
          title: "Berat Castle:",
          content:
            "Berat Castle rises over a hill 187 metres (613 feet) high above the authentic city of Berat. The fortification, east of Osum river, dates from the IV-th century B.C.E., reflecting traces of Illyrian civilization. The castle’s outer stone walls cover a distance of 1,440 meters (4,724). Along these walls stood 24 watchtowers for added defense, and two main gates for access.",
        },
        {
          h1: false,
          title: "Gjirokastër Castle:",
          content:
            "A UNESCO World Heritage Site, Gjirokastër Castle is a marvel of Ottoman architecture and military engineering. Located in the historic city of Gjirokastër, this imposing fortress offers visitors a glimpse into Albania's Ottoman past. Within its walls lie a museum dedicated to the country's communist era, as well as stunning views of the city and surrounding countryside. Don't miss the chance to explore the castle's labyrinthine passageways and climb the towering ramparts for an unforgettable experience.",
        },
        {
          h1: false,
          title: "Bashtovë Fortress:",
          content:
            "Bashtovë Fortress is located near the outflow of the Shkumbin River into the Adriatic Sea in Central Albania. The fortress is part of the tentative list for inclusion in the UNESCO World Heritage Site list. These are just a few of the many castles that dot the Albanian landscape. Each castle has its own unique history and charm, making them a must-visit for any history or architecture enthusiast. So, the next time you find yourself in Albania, make sure to take a step back in time and explore these magnificent structures.",
        },
        {
          h1: false,
          title: "Petrela Castle:",
          content:
            "Just a short drive from the capital city of Tirana lies Petrela Castle, a medieval fortress steeped in history and legend. Believed to have been built in the 6th century, the castle offers stunning views of the surrounding countryside and the nearby Erzen River. Visitors can explore its well-preserved walls and towers, learn about its storied past, and enjoy a leisurely meal at the castle's onsite restaurant. With its tranquil setting and rich history, Petrela Castle is a must-visit destination for history buffs and outdoor enthusiasts alike.",
        },
        {
          h1: false,
          title: "Conclusion:",
          content:
            "Albania's castles stand as tangible reminders of the country's rich and diverse history. From the ancient walls of Rozafa Castle to the imposing ramparts of Gjirokastër, each fortress offers a unique glimpse into Albania's past and its enduring spirit of resilience. Whether you're a history enthusiast, a culture aficionado, or simply a lover of breathtaking landscapes, a journey through Albania's castles is sure to leave you spellbound and inspired.",
        },
      ]}
    />
  );
}
