import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/korca-image.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovering Korca: The Cultural Heart of Southeastern Albania",
  description:
    "Explore Korca, a city renowned for its rich cultural heritage, vibrant arts scene, and stunning architecture. Discover museums, galleries, festivals, and delicious cuisine in this enchanting destination.",
  keywords:
    "Korçë, Korca, Albania, cultural heritage, arts scene, architecture, festivals, Korca beer, First Albanian School, Orthodox Cathedral, transportation options, Tirana International Airport, bus routes, road conditions, accommodation, City Center, Pazari i Vjetër, hotels, guesthouses, vacation rentals, Life Gallery Hotel, Hotel Regency, Hotel Vila Alfa, tourist attractions, National Museum of Medieval Art, Red Tower, Morava Mountain, Vithkuq Village, Shën Naum Spring, Korça Brewery, traditional serenades, culinary workshops, local cuisine, lakror, Tavë Kosi, recommended restaurants, Taverna Vasili, FindFour, Life Gallery Restaurant, bars, nightlife, Bar Republika, Bulevard Café, Korça Brewery Bar, outdoor activities, hiking, cycling, fishing, cultural experiences, Korçë Carnival, Korçë Beer Festival, shopping areas, Old Bazaar, local markets, day trips, Voskopoja, Dardha, best times to visit, cultural norms, safety tips, conclusion",
  openGraph: {
    title: "Discovering Korçë: The Cultural Heart of Southeastern Albania",
    description:
      "Explore Korçë, a city renowned for its rich cultural heritage, vibrant arts scene, and stunning architecture. Discover museums, galleries, festivals, and delicious cuisine in this enchanting destination.",
    url: "https://albaniagateway.com/explore-cities/korca",
    siteName: "Albania Gateway",
    images: {
      url: "/korca-image.jpg", // Update with the correct image URL
      width: 800,
      alt: "Image of Korca",
      height: 600,
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Korca"; // Replace with actual time if needed
  const alt = "Image of Korca city center";

  const mainTitle =
    "Discovering Korca: The Cultural Heart of Southeastern Albania"; // Replace with actual title
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
      <Paragraph text="Korçë, located in southeastern Albania, is a city renowned for its rich cultural heritage, vibrant arts scene, and stunning architecture. Often referred to as the 'City of Serenades', Korçë offers a blend of historical charm and modern attractions, making it a must-visit destination for travelers seeking an authentic Albanian experience." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Cultural Hub: Known for its museums, art galleries, and theaters." />
      <ListParagraph text="Architectural Beauty: Home to beautiful neoclassical buildings and churches." />
      <ListParagraph text="Vibrant Festivals: Hosts a variety of cultural and musical festivals throughout the year." />
      <ListParagraph text="Gastronomic Delights: Famous for its traditional cuisine, including the renowned Korçë beer." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text="“Imagine wandering through the cobblestone streets of Korçë, with the sound of traditional serenades filling the air, and the aroma of freshly baked 'lakror' wafting from local bakeries. This city, with its warm hospitality and rich cultural tapestry, invites you to explore and savor every moment.”" />
      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <Paragraph text="Korçë's history dates back to antiquity, with significant developments during the Ottoman period. The city became a crucial center for education and culture in the 19th and 20th centuries, with the establishment of the first Albanian school in 1887." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Korçë is a cultural beacon in Albania, often celebrated for its contributions to literature, arts, and music. The city played a vital role in the Albanian National Awakening and continues to be a center for intellectual and artistic activities." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text=" The First Albanian School: A museum dedicated to the history of Albanian education." />
      <ListParagraph text=" The Orthodox Cathedral: One of the largest and most beautiful cathedrals in Albania." />
      <ListParagraph text=" Korçë Bazaar: A historical marketplace offering a glimpse into the city's vibrant commercial past." />
      {/*  */}
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text=" Air: The nearest airport is Tirana International Airport (TIA), about 170 km from Korçë." />
      <ListParagraph text=" Bus: Regular buses connect Korçë with major cities like Tirana, Pogradec, and Elbasan." />
      <ListParagraph text=" Car: Driving to Korçë offers scenic views and well-maintained roads." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text=" From Tirana: Drive southeast on the SH3 highway, then take the SH79 road. The journey takes about 3-4 hours." />
      <ListParagraph text=" From Pogradec: Take the SH75 road southwest to Korçë, approximately a 1-hour drive." />
      <ListParagraph text=" From Elbasan: Follow the SH3 road south, then switch to SH79, taking around 2.5 hours." />
      {/*  */}
      <Title text="IV. Travel Tips" />
      <ListParagraph text=" Seasonal Considerations: Spring and autumn offer the best weather for sightseeing and outdoor activities." />
      <ListParagraph text=" Road Conditions: Ensure your vehicle is in good condition, especially if traveling during winter months when snow is possible." />
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <Paragraph text="Staying in the city center provides easy access to Korçë’s main attractions, restaurants, and shops. The neighborhoods around Pazari i Vjetër (Old Bazaar) and the Cathedral are particularly recommended." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text=" Hotels: Modern amenities and comfort." />
      <ListParagraph text=" Guesthouses: Cozy, family-run establishments offering a personal touch." />
      <ListParagraph text=" Vacation Rentals: Ideal for families or groups looking for more space and privacy." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text=" Life Gallery Hotel: A boutique hotel offering stylish rooms and excellent service." />
      <ListParagraph text=" Hotel Regency: Known for its comfortable accommodations and central location." />
      <ListParagraph text=" Hotel Vila Alfa: A charming guesthouse with traditional decor and warm hospitality." />
      {/*
       */}
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text=" The First Albanian School Museum: Learn about the history of Albanian education and culture." />
      <ListParagraph text=" National Museum of Medieval Art: Houses an extensive collection of Byzantine and post-Byzantine art." />
      <ListParagraph text=" Orthodox Cathedral of the Resurrection: Admire the stunning architecture and intricate frescoes." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text=" Old Bazaar (Pazari i Vjetër): Wander through this historic marketplace and soak in the vibrant atmosphere." />
      <ListParagraph text=" Red Tower (Kulla e Kuqe): Offers panoramic views of the city and surrounding area." />
      <ListParagraph text=" French Military Cemetery: A poignant reminder of the region's history during World War I." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text=" National Museum of Education: Explore the exhibits detailing the history of Albanian education." />
      <ListParagraph text=" Gjon Mili Photography Museum: Dedicated to the works of the famous Albanian-American photographer." />
      <ListParagraph text=" Museum of Oriental Art: Features a unique collection of Asian art and artifacts." />
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text=" Morava Mountain: Perfect for hiking and enjoying nature, with stunning views over Korçë." />
      <ListParagraph text=" Vithkuq Village: A quaint village known for its traditional architecture and beautiful landscapes." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text=" Shën Naum Spring: A serene natural spot ideal for picnics and relaxation." />
      <ListParagraph text=" Korça Brewery: Tour the famous brewery and sample some of the best beer in Albania." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text=" Traditional Serenades: Experience an evening of traditional Korçë serenades performed by local musicians." />
      <ListParagraph text=" Culinary Workshops: Join a local cooking class to learn how to prepare traditional Albanian dishes." />
      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Korçë is famous for its hearty and flavorful cuisine. Must-try dishes include:" />
      <ListParagraph text=" Lakror: A traditional Albanian pie, similar to a savory pastry, often filled with leeks or spinach." />
      <ListParagraph text=" Tavë Kosi: Baked lamb with yogurt, a staple of Albanian cuisine." />
      <ListParagraph text=" Korçë Beer: The local beer brewed in the city's historic brewery." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text=" Taverna Vasili: Known for its delicious traditional dishes and warm atmosphere." />
      <ListParagraph text=" FindFour: A modern eatery offering a mix of local and international cuisine." />
      <ListParagraph text=" Life Gallery Restaurant: A fine dining option with a varied menu and excellent service." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text=" Bar Republika: A lively spot popular with both locals and tourists." />
      <ListParagraph text=" Bulevard Café: Great for enjoying a relaxed drink with a view of the main boulevard." />
      <ListParagraph text=" Korça Brewery Bar: Enjoy a fresh pint of beer in the heart of the city." />
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text=" Hiking on Morava Mountain: Trails offer varying levels of difficulty and beautiful views." />
      <ListParagraph text=" Cycling: Explore the scenic countryside around Korçë." />
      <ListParagraph text=" Fishing: Nearby lakes and rivers provide great spots for fishing." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text=" Korçë Carnival: Held in February, this is one of the city's most colorful and lively events." />
      <ListParagraph text=" Korçë Beer Festival: A summer festival celebrating the city's brewing tradition with music, food, and, of course, beer." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text=" Old Bazaar (Pazari i Vjetër): Ideal for buying local crafts, antiques, and souvenirs." />
      <ListParagraph text=" Local Markets: Fresh produce, traditional foods, and local delicacies can be found here." />
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text=" Voskopoja: A historic village with ancient churches and beautiful landscapes." />
      <ListParagraph text=" Dardha: Known for its winter sports facilities and charming alpine setting." />
      <SecondTitle text="Suggested Itineraries for Day Trips" />
      <ListParagraph text=" Korçë to Voskopoja: Spend a day exploring this picturesque village and its historical sites." />
      <ListParagraph text=" Korçë to Dardha: Ideal for winter sports enthusiasts or a relaxing summer retreat in the mountains." />
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <Paragraph
        text="Spring and Summer: Perfect for outdoor activities and festivals.
      Autumn: Enjoy the beautiful fall colors and a quieter atmosphere.
      Winter: Ideal for winter sports in nearby Dardha."
      />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <Paragraph
        text="Hospitality: Albanians are known for their hospitality; always greet locals with a smile and show respect.
      Dress Modestly: When visiting religious sites, ensure your clothing is modest."
      />
      <SecondTitle text="Safety Tips" />
      <Paragraph
        text="City Safety: Korçë is generally safe, but always be mindful of your belongings.
      Road Conditions: If driving, be cautious on mountain roads, especially during winter."
      />
      <Title text="XII. Conclusion" />
      <Paragraph text="Korçë is a city that captivates with its rich history, cultural vibrancy, and stunning natural beauty. From its fascinating museums and charming bazaars to its vibrant festivals and delicious cuisine, Korçë offers a unique and memorable experience for every traveler. So, plan your visit and immerse yourself in the cultural heart of southeastern Albania. Embark on a journey to Korçë and discover the beauty and cultural richness of this enchanting city. Happy travels!" />
      {/*  */}
    </Cities>
  );
}
