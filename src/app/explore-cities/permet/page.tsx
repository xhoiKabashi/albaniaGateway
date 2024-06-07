import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/permet-image.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exploring Përmet: A Gem of Southern Albania",
  description:
    "Discover Përmet, a hidden gem in southern Albania. Explore its natural thermal baths, scenic landscapes, and vibrant culture. Plan your trip and experience the charm of Përmet.",
  keywords:
    "Përmet, Përmet Albania, Southern Albania, thermal baths, Përmet attractions, Albania travel, Përmet tourism, Albanian culture",
  openGraph: {
    title: "Exploring Përmet: A Gem of Southern Albania",
    description:
      "Discover Përmet, a hidden gem in southern Albania. Explore its natural thermal baths, scenic landscapes, and vibrant culture. Plan your trip and experience the charm of Përmet.",
    url: "https://albaniagateway.com/explore-cities/permet",
    siteName: "Albania Gateway",
    images: {
      url: "/permet-image.jpg", // Update with the correct image URL
      width: 800,
      height: 600,
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Përmet"; // Replace with actual time if needed
  const alt = "Image of thermal baths in Permet";
  const mainTitle = "Exploring Përmet: A Gem of Southern Albania"; // Replace with actual title
  const contentData = [
    {
      title: "I. Introduction",
    },
    {
      title: "II. Historical Background",
    },
    {
      title: "III. How to Get There?",
    },
    {
      title: "IV. Travel Tips",
    },
    {
      title: "V. Where to Stay?",
    },
    {
      title: "VI. Top Attractions",
    },

    {
      title: "VII. Hidden Gems",
    },
    {
      title: "VIII.	Foods and Drinks",
    },
    {
      title: "IX. Activities and Experiences",
    },
    {
      title: "X. Day Trips and Excursions",
    },
    {
      title: "XI. Local Tips",
    },
  ];

  return (
    <Cities
      contentData={contentData}
      estimatedReadingTime={estimatedReadingTime}
      mainTitle={mainTitle}
      imageSrc={imageSrc}
      alt={alt}
    >
      <Title text="I. Introduction" />
      <SecondTitle text="Brief Overview of the City" />
      <Paragraph text="Nestled in the heart of southern Albania, Përmet is a hidden gem waiting to be discovered. This charming town, surrounded by breathtaking natural beauty, offers visitors a glimpse into traditional Albanian life, with its warm hospitality, rich culture, and stunning landscapes." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text=" Thermal Springs: Renowned for its natural thermal baths, known for their healing properties." />
      <ListParagraph text="River Vjosë: Flows through the town, offering opportunities for rafting and scenic walks along its banks." />
      <ListParagraph text=" Cultural Heritage: Home to vibrant traditions, folklore, and delicious cuisine." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text="“As I wandered through the streets of Përmet, I was captivated by the town's tranquil ambiance and the friendly smiles of its residents. Sitting by the Vjosë River, savoring a traditional meal, I felt a sense of peace and contentment wash over me. Përmet's natural beauty and warm hospitality left a lasting impression on my heart.”" />
      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <ListParagraph text=" Ancient Origins: Traces its history back to Illyrian and Roman times." />
      <ListParagraph text=" Ottoman Influence: Flourished during the Ottoman period, leaving a mark on its architecture and culture." />
      <ListParagraph text=" Albanian Independence: Played a significant role in Albania's struggle for independence in the early 20th century." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Përmet is a melting pot of Albanian culture, with influences from various civilizations throughout history. Its traditional music, dance, and cuisine reflect the town's rich heritage and deep-rooted traditions." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text=" Bënja Thermal Baths: Natural thermal springs renowned for their therapeutic properties." />
      <ListParagraph text=" Përmet Castle: Offers panoramic views of the town and surrounding mountains." />
      <ListParagraph text=" Kisha e Labovës: A historic church dating back to the 10th century, known for its Byzantine frescoes." />
      {/*  */}
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text=" Bus: Regular bus services connect Përmet with major cities like Tirana, Gjirokastër, and Korçë." />
      <ListParagraph text=" Car: Accessible by car via SH75, offering a scenic drive through the Vjosë Valley." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text=" From Tirana: Take the SH4 south towards Gjirokastër, then follow signs to Përmet via SH75. The journey takes approximately 4-5 hours." />
      <ListParagraph text=" From Gjirokastër: Head north on SH4, then follow SH75 to Përmet, about a 1.5-hour drive." />
      {/*  */}
      <Title text="IV. Travel Tips" />
      <ListParagraph text=" Road Conditions: While generally good, some roads in rural areas may be narrow and winding." />
      <ListParagraph text=" Local Transport: Taxis and minivans are available for shorter trips within the town and surrounding areas." />
      {/*  */}
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <Paragraph text="Staying near the town center allows easy access to shops, restaurants, and attractions. Riverside accommodations offer beautiful views of the Vjosë River." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text=" Hotels: Comfortable and convenient options for travelers." />
      <ListParagraph text=" Guesthouses: Provides a cozy and authentic Albanian experience." />
      <ListParagraph text=" Vacation Rentals: Ideal for families or groups looking for more space and privacy." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text=" Hotel Ramizi: Centrally located with modern amenities and friendly service." />
      <ListParagraph text=" Guesthouse Kotoni: Offers traditional Albanian hospitality in a charming setting." />
      <ListParagraph text=" Villa Kala: Riverside accommodations with picturesque views and a peaceful atmosphere." />
      {/*  */}
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text=" Bënja Thermal Baths: Relax and rejuvenate in the healing waters of these natural springs." />
      <ListParagraph text=" Përmet Castle: Explore the ruins of this ancient fortress and enjoy panoramic views of the town." />
      <ListParagraph text=" Kisha e Labovës: Admire the beautiful Byzantine frescoes and learn about the church's history." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text=" Old Bazaar: Wander through the narrow streets and discover traditional shops selling local crafts and souvenirs." />
      <ListParagraph text=" Përmet Museum: Learn about the town's history, culture, and folklore through exhibits and artifacts." />
      <ListParagraph text=" Bridge of Katiu: An Ottoman-era bridge spanning the Vjosë River, offering scenic views and photo opportunities." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text=" Përmet Museum: Showcases artifacts, documents, and photographs related to the town's history and culture." />
      <ListParagraph text=" Art Gallery Zef Kolombi: Features works by local artists, providing insight into Albanian art and creativity." />
      {/*  */}
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text=" Blue Eye Spring: A natural wonder located a short drive from Përmet, with crystal-clear waters and lush surroundings." />
      <ListParagraph text=" Canyon of Langarica: Offers hiking trails, waterfalls, and stunning landscapes, perfect for outdoor enthusiasts." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text=" Përmeti Wine: Sample locally-produced wines, known for their unique flavors and high quality." />
      <ListParagraph text=" Traditional Music and Dance: Attend a live performance to experience the vibrant culture of Përmet." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text=" Cooking Classes: Learn to prepare traditional Albanian dishes using fresh, local ingredients." />
      <ListParagraph text=" Folklore Evenings: Enjoy an evening of music, dance, and storytelling, immersing yourself in Albanian traditions." />
      {/*  */}
      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Përmet is renowned for its delicious cuisine, influenced by both Ottoman and Mediterranean flavors. Must-try dishes include:" />
      <ListParagraph text=" Tave Kosi: Baked lamb with yogurt and rice, a classic Albanian dish." />
      <ListParagraph text=" Flija: Layers of thin pancake-like dough baked with butter and served with various fillings." />
      <ListParagraph text=" Pispili: Fried dough filled with cheese or meat, a popular street food snack." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text=" Restaurant Sofra Përmetare: Offers a diverse menu featuring traditional Albanian dishes and international cuisine." />
      <ListParagraph text=" Restaurant Antigonea: Known for its fresh local dishes and welcoming atmosphere." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text=" Café Veranda: A cozy café with outdoor seating, perfect for enjoying drinks and socializing with locals." />
      <ListParagraph text=" Book Bar Përmet: Known for its friendly staff and relaxed ambiance, ideal for an evening drink." />
      {/*  */}
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text=" Rafting: Experience the thrill of rafting on the Vjosë River, surrounded by stunning scenery." />
      <ListParagraph text=" Hiking: Explore the trails around the town and discover hidden waterfalls, caves, and natural pools." />
      <ListParagraph text=" Cycling: Rent a bike and explore the picturesque countryside and nearby villages." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text=" Traditional Music and Dance Performances: Attend a live performance to experience the vibrant culture of Përmet." />
      <ListParagraph text=" Festivals and Events: Participate in local festivals and celebrations to immerse yourself in Albanian traditions." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text=" Përmet Bazaar: Browse for souvenirs, local crafts, and traditional Albanian products." />
      <ListParagraph text=" Weekly Market: Explore the weekly market where locals sell fresh produce, cheeses, handmade crafts, and more." />
      {/*  */}
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text=" Benja Thermal Pools: Relax in the healing waters of these natural thermal springs, located just outside Përmet." />
      <ListParagraph text=" Blue Eye Spring: Discover this stunning natural wonder with its crystal-clear waters and lush surroundings." />
      <ListParagraph text=" Kelcyra Gorge: Take a scenic drive through the breathtaking Kelcyra Gorge, known for its dramatic cliffs and river." />
      <SecondTitle text="Suggested Itineraries for Day Trips" />
      <ListParagraph text=" Përmet to Benja Thermal Pools: Spend a relaxing day soaking in the thermal baths and enjoying a picnic by the river." />
      <ListParagraph text=" Përmet to Blue Eye Spring: Explore the Blue Eye Spring and nearby hiking trails, followed by a traditional lunch in a local restaurant." />
      <ListParagraph text=" Përmet to Kelcyra Gorge: Take a scenic drive through the gorge, stopping for photo opportunities and short walks along the way." />
      {/*  */}
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <ListParagraph text=" Spring and Autumn: Ideal for outdoor activities and exploring the town's natural attractions." />
      <ListParagraph text=" Summer: Perfect for rafting on the Vjosë River and enjoying the warm weather." />
      <ListParagraph text=" Winter: Experience the town's cozy atmosphere and relax in the thermal baths." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <ListParagraph text=" Greetings: A friendly 'Tungjatjeta' (Hello) or 'Mirëdita' (Good day) is a polite way to greet locals." />
      <ListParagraph text=" Respect Local Customs: Show respect for Albanian traditions and customs, especially when visiting religious sites." />
      <SecondTitle text="Safety Tips" />
      <ListParagraph text=" Stay Hydrated: Especially during outdoor activities like hiking and rafting." />
      <ListParagraph text=" Sun Protection: Wear sunscreen and a hat to protect yourself from the sun, especially during the summer months." />
      <ListParagraph text=" Be Mindful of Wildlife: When hiking or exploring nature, be aware of your surroundings and respectful of wildlife." />
      {/*  */}
      <Title text="XII. Conclusion" />
      <Paragraph text="Përmet is a hidden treasure in southern Albania, offering visitors a unique blend of natural beauty, cultural heritage, and warm hospitality. Whether you're relaxing in the thermal baths, exploring the town's historic sites, or enjoying outdoor adventures in the surrounding countryside, Përmet promises an unforgettable experience." />
      <Paragraph text="With its natural thermal springs, stunning landscapes, and vibrant culture, Përmet is a destination that appeals to travelers seeking relaxation, adventure, and authentic Albanian experiences." />
      <Paragraph text="Take the time to immerse yourself in Përmet's unique atmosphere, connect with the locals, and discover all that this charming town has to offer." />
    </Cities>
  );
}
