import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/durres.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Durrës: Albania's Coastal Gem",
  description:
    "Explore Durrës, one of Albania’s most vibrant and historic cities. Known for its expansive beaches, ancient ruins, and bustling port, Durrës offers a unique blend of old-world charm and modern allure.",
  keywords:
    "Durrës, Albania, Adriatic coast, beaches, historical landmarks, Durres Amphitheater, Venetian Tower, Durrës Castle, transportation options, Tirana International Airport, train services, bus routes, road conditions, accommodation, City Center, Beachfront, Durres Plazh, hotels, hostels, vacation rentals, Hotel Adriatik, Vila Verde Beach Hotel, Durrës Hostel, tourist attractions, Durrës Archaeological Museum, Ethnographic Museum, Cape of Rodon, Kallmi Beach, Taulantia Promenade, Old Bazaar, wine tasting, local markets, local cuisine, seafood, Tave Kosi, Fërgesë, Vertigo restaurant, Gusto di Mare & Sushi Time, 2 Kitarrat restaurant, bars, nightlife, Zgara e Durrësit, Bar Restorant Charlie’s, outdoor activities, hiking, parks, cultural experiences, theaters, festivals, shopping areas, day trips, Kruja, Tirana, Apollonia, best times to visit, cultural norms, safety tips, conclusion",
  openGraph: {
    title: "Discover Durrës: Albania's Coastal Gem",
    description:
      "Explore Durrës, one of Albania’s most vibrant and historic cities. Known for its expansive beaches, ancient ruins, and bustling port, Durrës offers a unique blend of old-world charm and modern allure.",
    url: "https://albaniagateway.com/explore-cities/durres",
    siteName: "Albania Gateway",
    images: {
      url: "/durres.jpg", // Update with the correct image URL
      width: 800,
      height: 600,
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Durrës"; // Replace with actual time if needed
  const alt = "Image of Durres streets";
  const mainTitle = "Discover Durrës: Albania's Coastal Gem"; // Replace with actual title
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
      <Paragraph text="Nestled on the Adriatic coast, Durrës is one of Albania’s most vibrant and historic cities. Known for its expansive beaches, ancient ruins, and bustling port, Durrës offers a unique blend of old-world charm and modern allure. Whether you’re a history buff, beach lover, or culture enthusiast, Durrës has something to captivate you. Imagine strolling along the seafront promenade, enjoying fresh seafood with a view of the sea, and exploring ancient Roman amphitheaters all in one day" />

      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <Paragraph text="Durrës boasts a rich history dating back over 2,500 years. Founded by the ancient Greeks in 627 BC, it later became an important Roman port. The city’s strategic location made it a significant trade hub and military stronghold throughout the centuries. It played a crucial role during the Byzantine era and experienced numerous invasions and reconstructions." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Durrës’ historical significance is reflected in its diverse architectural landscape, showcasing remnants from Greek, Roman, Byzantine, and Ottoman eras. The city has been a cultural melting pot, influencing and being influenced by various civilizations over millennia." />
      <SecondTitle text="Important Landmarks" />
      <Paragraph text="Key historical landmarks include the Durres Amphitheater, one of the largest in the Balkans, the Venetian Tower, and the ancient city walls. The Archaeological Museum, located near the beach, offers fascinating insights into the city’s past." />
      {/*  */}
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest airport is Tirana International Airport (TIA), about 35 km from Durrës. Regular buses and taxis connect the airport to the city." />
      <ListParagraph text="Train: Durrës is connected by rail to other major Albanian cities, though the train service is limited." />
      <ListParagraph text="Bus: Frequent bus services run from Tirana, Vlora, and other cities to Durrës." />
      <ListParagraph text="Car: Durrës is accessible via the SH2 highway from Tirana, making it an easy drive." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Approximately a 40-minute drive via the SH2 highway." />
      <ListParagraph text="From Vlora: Around 2 hours by car via SH4 and SH2." />
      <ListParagraph text="From Shkodër: About 1.5 hours by car via the SH1 and SH2." />
      <Title text="IV. Travel Tips" />
      {/*  */}
      <Paragraph text="Consider traveling by bus for an economical option, but if you prefer flexibility, renting a car is advisable. Traffic can be busy during peak tourist season, so plan your travel times accordingly." />
      <Title text="V. Where to Stay?" />
      {/*  */}
      <SecondTitle text="Neighborhood Recommendations" />
      <ListParagraph text="City Center: Close to historical sites and the main promenade." />
      <ListParagraph text="Beachfront: Ideal for those wanting easy access to the beach and seafront restaurants." />
      <ListParagraph text="Durres Plazh: Popular for its resorts and family-friendly accommodations." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: From luxury to budget-friendly options." />
      <ListParagraph text="Hostels: Great for solo travelers and backpackers." />
      <ListParagraph text="Vacation Rentals: Ideal for families or those wanting a home-like stay." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Hotel Adriatik: A luxurious beachfront hotel with excellent amenities." />
      <ListParagraph text="Vila Verde Beach Hotel: Mid-range option with sea views and modern facilities." />
      <ListParagraph text="Durrës Hostel: A budget-friendly choice with a friendly atmosphere." />
      {/*  */}
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Durrës Amphitheater: An ancient Roman structure offering a glimpse into the city’s past." />
      <ListParagraph text="Venetian Tower: Part of the old city fortifications with great views." />
      <ListParagraph text="Durrës Archaeological Museum: Home to artifacts from the city’s long history." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Durrës Castle: Historic fortifications with a mix of ancient and medieval structures." />
      <ListParagraph text="Byzantine Forum (Macellum): Ruins of a Roman market square." />
      <ListParagraph text="Great Mosque of Durrës: A beautiful example of Ottoman architecture." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="Durrës Archaeological Museum: As mentioned, it’s a must-visit." />
      <ListParagraph text="Ethnographic Museum: Offers insights into local traditions and culture." />
      <Title text="VII. Hidden Gems" />
      {/*  */}
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Cape of Rodon: A beautiful, less touristy area with a castle and stunning views." />
      <ListParagraph text="Kallmi Beach: A quieter beach away from the main tourist areas." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Taulantia Promenade: Perfect for evening strolls with a local vibe." />
      <ListParagraph text="Old Bazaar: Great for finding unique souvenirs and experiencing local life." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Wine Tasting: Visit local wineries like the Durrës Wine Estate." />
      <ListParagraph text="Local Markets: Explore the fresh produce markets for a taste of local life." />
      {/*  */}

      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Durrës is known for its seafood, influenced by its coastal location. Try dishes like 'Tave Kosi' (baked lamb with yogurt) and 'Fërgesë' (a traditional dish made with peppers, tomatoes, and cheese)." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Vertigo: Offers panoramic views and a varied menu." />
      <ListParagraph text="Gusto di Mare & Sushi Time: Known for its seafood and sushi." />
      <ListParagraph text="2 Kitarrat: A cozy spot for traditional Albanian cuisine." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text="Zgara e Durrësit: Famous for its grilled meat and lively atmosphere." />
      <ListParagraph text="Bar Restorant Charlie’s: Great for cocktails and a relaxed evening." />
      <Title text="IX. Activities and Experiences" />
      {/*  */}
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Beaches: Enjoy the sandy shores of Durrës Beach and Currila Beach." />
      <ListParagraph text="Hiking: Explore trails near Cape of Rodon." />
      <ListParagraph text="Parks: Visit Durrës Park for a leisurely walk or picnic." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Theaters: Check out the Aleksandër Moisiu Theatre for local performances." />
      <ListParagraph text="Festivals: Attend the Durres International Film Festival if visiting in September." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text="Durrës City Center: For boutique shops and souvenir hunting." />
      <ListParagraph text="Local Markets: Great for fresh produce and local goods." />
      <Title text="X. Day Trips and Excursions" />
      {/*  */}
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text="Kruja: Known for its castle and traditional bazaar." />
      <ListParagraph text="Tirana: The bustling capital city, just a short drive away." />
      <ListParagraph text="Apollonia: Ancient ruins located south of Durrës." />
      {/*  */}
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <ListParagraph text="Spring and Fall: Ideal for avoiding the summer heat and crowds." />
      <ListParagraph text="Early Morning: Best for visiting popular sites like the amphitheater." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <ListParagraph text="Greetings: Albanians are hospitable; a friendly greeting goes a long way." />
      <ListParagraph text="Dress: Casual, but respectful attire is appreciated in religious sites." />
      <SecondTitle text="Safety Tips" />
      <ListParagraph text="General Safety: Durrës is generally safe, but be mindful of your belongings in crowded areas." />
      <ListParagraph text="Swimming: Only swim in designated areas and heed local advice." />
      <Title text="XII. Conclusion" />
      {/*  */}
      <Paragraph text="Durrës is a city that beautifully balances its ancient heritage with modern vibrancy. From the stunning beaches to the fascinating historical sites, every corner of Durrës tells a story. Whether you’re exploring the ancient amphitheater, relaxing on the sandy shores, or savoring local cuisine, Durrës promises an unforgettable experience. Embrace the charm of this coastal gem, and let Durrës enchant you with its rich history and warm hospitality." />
      <Paragraph text="By diving into the multifaceted experiences Durrës offers, you'll discover a city that not only preserves its historical roots but also thrives as a modern-day destination. Happy travels!" />
    </Cities>
  );
}
