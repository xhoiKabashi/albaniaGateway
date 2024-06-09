import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/varri-skenderbehut.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exploring Lezha: A Gem of North Albania",
  description:
    "Discover Lezhë, a city rich in history and natural beauty. Explore ancient ruins, visit Skanderbeg’s Memorial, and immerse yourself in Albanian culture. Plan your trip and uncover the hidden gem of northern Albania.",
  keywords:
    "Lezhë, Albania, Lezhë Castle, Skanderbeg’s Memorial, St. Nicholas Cathedral, Lissus, League of Lezhë, historical landmarks, cultural significance, natural beauty, transportation options, travel tips, accommodations, top attractions, hidden gems, local favorites, food and drink, outdoor activities, cultural experiences, day trips, local tips, safety tips",
  openGraph: {
    title: "Exploring Lezha: A Gem of North Albania",
    description:
      "Discover Lezhë, a city rich in history and natural beauty. Explore ancient ruins, visit Skanderbeg’s Memorial, and immerse yourself in Albanian culture. Plan your trip and uncover the hidden gem of northern Albania.",
    url: "https://albaniagateway.com/explore-cities/lezha",
    siteName: "Albania Gateway",
    images: {
      url: "/varri-skenderbehut.jpg", // Update with the correct image URL
      width: 800,
      height: 600,
      alt: "Image of Lexha",
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Lezha"; // Replace with actual time if needed
  const alt = "Image of Skanderbeg’s Memorial";
  const mainTitle = "Exploring Lezha: A Gem of North Albania"; // Replace with actual title
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
      <Paragraph text="Lezhë, located in northern Albania, is a city rich in history and natural beauty. Nestled between mountains and the Adriatic Sea, Lezhë offers visitors a unique blend of ancient ruins, scenic landscapes, and authentic Albanian culture." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Historical Significance: Home to the ruins of the ancient city of Lissus and the tomb of Albania’s national hero, Skanderbeg." />
      <ListParagraph text="Natural Beauty: Proximity to both the coast and picturesque mountains" />
      <ListParagraph text="Cultural Depth: A mix of historical sites, traditional Albanian cuisine, and vibrant local markets." />
      <SecondTitle text="Personal Experience" />
      <Italic text="“Imagine standing atop the ancient walls of Lezhë Castle, with panoramic views stretching from the mountains to the sea, feeling the weight of centuries of history beneath your feet. Lezhë is a city where every stone tells a story, and every corner holds a piece of Albania’s rich heritage.”" />
      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <Paragraph text="Lezhë’s history dates back to the 4th century BC when it was founded as the Greek colony of Lissus. The city later became an important Roman stronghold and, during the Middle Ages, a key site in the Albanian resistance against the Ottoman Empire led by Skanderbeg." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Lezhë is culturally significant for its role in Albanian history, particularly as the location where Skanderbeg was buried. The city also played a vital role in the League of Lezhë, an important military alliance formed in 1444." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text=" Lezhë Castle: Overlooking the city, this ancient fortress offers breathtaking views and a glimpse into the city’s strategic importance." />
      <ListParagraph text=" Skanderbeg’s Memorial: The tomb of Albania’s national hero, located in the center of the city." />
      <ListParagraph text=" St. Nicholas Cathedral: A historic church that has served as a significant religious site for centuries." />
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text=" Air: The nearest major airport is Tirana International Airport (TIA), about 50 km from Lezhë." />
      <ListParagraph text=" Bus: Regular buses connect Lezhë with Tirana, Shkodër, and other major cities." />
      <ListParagraph text=" Car: Lezhë is easily accessible by car via the A1 and SH1 highways." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text=" From Tirana: Drive north on the A1 highway, then take the exit for SH1. The journey takes about 1 hour." />
      <ListParagraph text=" From Shkodër: Head south on SH1, which takes approximately 45 minutes." />
      <ListParagraph text=" From Durrës: Drive northeast on SH2, then switch to SH1 north, taking around 1.5 hours." />
      <Title text="IV. Travel Tips" />
      <ListParagraph text="Best Time to Visit: Spring and autumn offer mild weather and fewer crowds." />
      <ListParagraph text="Road Conditions: Roads are generally well-maintained, but be cautious during winter months when snow is possible in higher elevations." />

      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <ListParagraph text=" Areas near Skanderbeg’s Memorial and the Old Bazaar are particularly recommended." />
      <ListParagraph text="Staying in the city center provides easy access to Lezhë’s main attractions, restaurants, and shops." />
      <ListParagraph text="Areas near Skanderbeg’s Memorial and the Old Bazaar are particularly recommended." />

      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: Comfortable and often centrally located." />
      <ListParagraph text="Guesthouses: Offer a more personal and often traditional experience." />
      <ListParagraph text="Vacation Rentals: Ideal for longer stays or larger groups." />

      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text=" Hotel Liss: A centrally located hotel with modern amenities and excellent service." />
      <ListParagraph text=" Jolly Hotel: Known for its comfortable rooms and friendly staff." />
      <ListParagraph text=" Hotel Bar Restaurant Triumf: Offers a blend of accommodation and dining, with beautiful views of the surrounding area." />
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text=" Lezhë Castle: Explore the ancient ruins and enjoy panoramic views of the city and surrounding landscape." />
      <ListParagraph text=" Skanderbeg’s Memorial: Visit the tomb of Albania’s national hero and learn about his legacy." />
      <ListParagraph text=" St. Nicholas Cathedral: A historic church with beautiful architecture and significant cultural importance." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text=" Ancient Walls of Lissus: Remnants of the city’s ancient Greek and Roman past." />
      <ListParagraph text=" Ethnographic Museum: Offers insights into the traditional Albanian way of life." />
      <ListParagraph text=" River Drin: A picturesque river that runs through the city, perfect for a leisurely walk or picnic." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text=" Historical Museum of Lezhë: Showcases artifacts and exhibits from the city’s long history." />
      <ListParagraph text=" Art Gallery of Lezhë: Features works by local and national artists." />
      {/*  */}
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text=" Kune-Vain-Tale Nature Reserve: A beautiful area just outside the city, perfect for birdwatching and nature walks." />
      <ListParagraph text=" Mausoleum of Skanderbeg: Less visited but offers a deeper historical perspective." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text=" Lezhë Beach: A local favorite for sunbathing and swimming, with a relaxed atmosphere." />
      <ListParagraph text=" Local Vineyards: Visit nearby vineyards to sample and purchase local wines." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text=" Traditional Albanian Cooking Classes: Learn to prepare local dishes from expert chefs." />
      <ListParagraph text=" Fishing on River Drin: Join local fishermen for a day on the river." />
      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Lezhë is known for its hearty and flavorful cuisine. Must-try dishes include:" />
      <ListParagraph text=" Tave Kosi: Baked lamb with yogurt." />
      <ListParagraph text=" Byrek: A savory pastry filled with spinach, cheese, or meat." />
      <ListParagraph text=" Fresh Seafood: Given its proximity to the coast, seafood is a local specialty." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text=" Restaurant Rapsodia: Renowned for its traditional dishes and warm atmosphere." />
      <ListParagraph text=" Fishland Restaurant: Specializes in fresh seafood and offers beautiful views." />
      <ListParagraph text=" Bar Restorant Hylli i Drites: A great spot for local cuisine and a cozy dining experience." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text=" Bar 'Oaz': Popular for its lively atmosphere and great drinks." />
      <ListParagraph text=" Buna Bar: Known for its relaxed setting and friendly service." />
      <ListParagraph text=" Bar 'Rruga e Vjetër': A local favorite for an evening out." />
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text=" Hiking in the Kune-Vain-Tale Nature Reserve: Explore diverse ecosystems and scenic trails." />
      <ListParagraph text=" Cycling: Rent a bike and explore the city and surrounding countryside." />
      <ListParagraph text=" Swimming and Sunbathing at Lezhë Beach: Enjoy the Adriatic coast’s clear waters and sandy shores." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text=" Lezhë Carnival: Held annually, this colorful festival showcases local traditions and music." />
      <ListParagraph text=" Summer Music Festivals: Various events celebrating Albanian and international music." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text=" Old Bazaar (Pazari i Vjetër): Perfect for buying local crafts, antiques, and souvenirs." />
      <ListParagraph text=" Local Markets: Fresh produce, traditional foods, and local delicacies can be found here." />
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text=" Shëngjin: A coastal town known for its beautiful beaches and vibrant atmosphere." />
      <ListParagraph text=" Rana e hedhun: A coastal dune in the Adriatic Sea in between Lezhë and Shëngjin." />
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <Paragraph text="Spring and Summer: Ideal for outdoor activities and enjoying the beaches. Autumn: Offers pleasant weather and fewer tourists. Winter: Visit the historical sites and enjoy a quieter experience." />
      <SecondTitle text="Cultural Norms and Etiquette" />

      <ListParagraph text="Hospitality: Albanians are known for their hospitality; always greet locals with a smile and show respect." />
      <ListParagraph text="Dress Modestly: When visiting religious sites, ensure your clothing is modest." />

      <SecondTitle text="Safety Tips" />
      <Paragraph text="City Safety: Lezhë is generally safe, but always be mindful of your belongings. Road Conditions: If driving, be cautious on mountain roads, especially during winter." />
      <ListParagraph text="City Safety: Lezhë is generally safe, but always be mindful of your belongings." />
      <ListParagraph text="Road Conditions: If driving, be cautious on mountain roads, especially during winter." />

      <Title text="XII. Conclusion" />
      <Paragraph text="Lezhë is a city that seamlessly blends history, culture, and natural beauty. From its ancient ruins and historical sites to its vibrant local culture and stunning landscapes, Lezhë offers a unique and enriching experience for every traveler. So, plan your visit and immerse yourself in the hidden gem of northern Albania. " />
      <Paragraph text="Embark on a journey to Lezhë and discover the beauty and cultural richness of this enchanting city. Happy travels!" />
    </Cities>
  );
}
