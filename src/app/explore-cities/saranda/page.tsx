import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/saranda-image.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovering Sarandë: The Jewel of the Albanian Riviera",
  description:
    "Explore Sarandë, a picturesque coastal town in southern Albania, renowned for its stunning beaches, crystal-clear waters, and vibrant nightlife. Plan your trip and experience the beauty of the Albanian Riviera.",
  keywords:
    "Sarandë, Saranda, Saranda Albania, Albanian Riviera, Saranda beaches, Saranda attractions, Albania travel, Saranda tourism, Albanian culture",
  openGraph: {
    title: "Discovering Sarandë: The Jewel of the Albanian Riviera",
    description:
      "Explore Sarandë, a picturesque coastal town in southern Albania, renowned for its stunning beaches, crystal-clear waters, and vibrant nightlife. Plan your trip and experience the beauty of the Albanian Riviera.",
    url: "https://albaniagateway.com/explore-cities/saranda",
    siteName: "Albania Gateway",
    images: {
      url: "/saranda-image.jpg", // Update with the correct image URL
      width: 800,
      height: 600,
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Saranda"; // Replace with actual time if needed
  const alt = "Image of Saranda sea";
  const mainTitle = "Discovering Sarandë: The Jewel of the Albanian Riviera"; // Replace with actual title
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
      <Paragraph text="Sarandë, a picturesque coastal town in southern Albania, is renowned for its stunning beaches, crystal-clear waters, and vibrant nightlife. Situated on the Ionian Sea, just opposite the Greek island of Corfu, Sarandë has become one of Albania's most popular tourist destinations." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Breathtaking Beaches: Pristine and inviting, perfect for sunbathing and swimming." />
      <ListParagraph text="Cultural and Historical Sites: Home to ancient ruins and historic landmarks." />
      <ListParagraph text="Lively Atmosphere: Bustling with cafes, bars, and a vibrant nightlife." />
      <ListParagraph text="Gateway to Butrint: Close to the UNESCO World Heritage site of Butrint." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text="“I remember my first visit to Sarandë vividly. As the ferry from Corfu approached the shore, the city’s white buildings shimmered in the sunlight, and the turquoise waters beckoned. Exploring the vibrant promenade, with its lively cafes and stunning sea views, I immediately felt the unique charm of this beautiful coastal town.”" />
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <ListParagraph text="Ancient Origins: Sarandë was originally a Greek colony called Onchesmos." />
      <ListParagraph text="Roman Era: Became an important port city during the Roman Empire." />
      <ListParagraph text="Medieval Period: The city saw various rulers, including Byzantines, Venetians, and Ottomans." />
      <ListParagraph text="20th Century: Played a role in both World Wars and Albania’s communist history." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Sarandë's rich cultural tapestry is woven from its diverse history. From ancient Greek ruins to Ottoman architecture, the city reflects a blend of influences. Its position as a key port city has also contributed to its multicultural vibe." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text="Lekuresi Castle: Offers panoramic views of the city and the Ionian Sea." />
      <ListParagraph text="Synagogue Complex: Ruins of an ancient Jewish synagogue." />
      <ListParagraph text="Ethnographic Museum: Displays traditional Albanian artifacts." />
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest major airport is Corfu International Airport, just a short ferry ride away." />
      <ListParagraph text="Ferry: Regular ferry services from Corfu to Sarandë." />
      <ListParagraph text="Bus: Direct bus routes connect Sarandë with Tirana and other Albanian cities." />
      <ListParagraph text="Car: Driving offers flexibility and scenic coastal views." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Take the SH4 and SH8 highways southwards, approximately a 4-hour drive." />
      <ListParagraph text="From Vlorë: Follow the coastal SH8 road, about 2.5 hours by car." />
      <Title text="IV. Travel Tips" />
      <ListParagraph text="Ferry Schedules: Check ferry times in advance, especially during off-peak seasons." />
      <ListParagraph text="Road Conditions: Roads are generally good, but some coastal routes can be narrow and winding." />
      <ListParagraph text="Local Transport: Taxis and rental cars are available for getting around the city." />
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <ListParagraph text="City Center: Close to the beach, restaurants, and nightlife." />
      <ListParagraph text="Lekuresi Area: Offers stunning views and a more tranquil environment." />
      <ListParagraph text="Ksamil: A nearby village known for its beautiful beaches, ideal for a quieter stay." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: From budget to luxury, catering to all preferences." />
      <ListParagraph text="Hostels: Ideal for backpackers and budget travelers." />
      <ListParagraph text="Vacation Rentals: Perfect for families or longer stays." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Hotel Brilant: A mid-range option with comfortable rooms and sea views." />
      <ListParagraph text="Hotel Demi: Offers luxury accommodations with excellent amenities." />
      <ListParagraph text="Bora Bora Hotel Ksamil: Popular for its beachfront location and family-friendly atmosphere." />
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Butrint National Park: A UNESCO World Heritage site with ancient ruins set in a stunning natural environment." />
      <ListParagraph text="Blue Eye (Syri i Kaltër): A mesmerizing natural spring with vibrant blue waters." />
      <ListParagraph text="Lekuresi Castle: Provides breathtaking panoramic views and a glimpse into the area’s history." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Sarandë Promenade: A lively area perfect for evening strolls." />
      <ListParagraph text="Monastery of 40 Saints: Offers historical insight and scenic views." />
      <ListParagraph text="Sarandë Synagogue: Ruins that reflect the city’s diverse past." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="Butrint Museum: Located within the archaeological site, showcasing artifacts from various periods." />
      <ListParagraph text="Ethnographic Museum: Highlights traditional Albanian culture and history." />
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Kakome Beach: A secluded beach known for its unspoiled beauty." />
      <ListParagraph text="Phoenice Archaeological Park: Lesser-known ruins offering a peaceful exploration." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Mirror Beach (Plazhi i Pasqyrave): Loved by locals for its clear waters and stunning surroundings." />
      <ListParagraph text="Monastery Beach: A tranquil spot ideal for a relaxing day by the sea." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Boat Tours: Explore the coastline and nearby islands." />
      <ListParagraph text="Wine Tasting: Visit local vineyards and sample Albanian wines." />
      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <ListParagraph text="Seafood: Fresh and delicious, especially octopus, mussels, and fish." />
      <ListParagraph text="Byrek: Savory pastries filled with cheese, meat, or vegetables." />
      <ListParagraph text="Tave Kosi: A traditional lamb and yogurt dish." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Taverna Laberia: Known for its authentic Albanian cuisine." />
      <ListParagraph text="Restaurant Limani: Offers a variety of seafood dishes with a great view of the bay." />
      <ListParagraph text="Guvat Bar & Restaurant: Located in Ksamil, famous for its fresh seafood and beachside setting." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text="Havana Beach Club: A lively spot with music, dancing, and great cocktails." />
      <ListParagraph text="Orange Lounge Bar: Perfect for a relaxed evening with a sea view." />
      <ListParagraph text="Mango Beach Bar: Popular for its vibrant atmosphere and beachfront location." />
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Sarandë Beach: Ideal for swimming, sunbathing, and water sports." />
      <ListParagraph text="Hiking in Butrint National Park: Explore the trails and enjoy the natural beauty." />
      <ListParagraph text="Snorkeling and Diving: Discover the underwater world of the Ionian Sea." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Local Festivals: Experience traditional music, dance, and food at festivals like the Sarandë Summer Festival." />
      <ListParagraph text="Theater Performances: Attend local productions at the city’s cultural centers." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text="Sarandë Promenade: Find souvenirs, local crafts, and fresh produce." />
      <ListParagraph text="Farmers Markets: Sample fresh fruits, vegetables, and local delicacies." />
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text="Gjirokastër: A UNESCO World Heritage site known for its Ottoman-era architecture." />
      <ListParagraph text="Himarë: A charming coastal town with beautiful beaches." />
      <ListParagraph text="Dhermi: Famous for its stunning beaches and lively nightlife." />
      <SecondTitle text="Suggested Itineraries for Day Trips" />
      <ListParagraph text="Day Trip to Butrint: Spend a day exploring the ancient ruins and natural beauty of Butrint National Park." />
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <ListParagraph text="Spring and Autumn: Ideal for mild weather and fewer crowds." />
      <ListParagraph text="Summer: Perfect for beach activities but can be crowded and hot." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <ListParagraph text="Respect Local Customs: Dress modestly when visiting religious sites." />
      <ListParagraph text="Greeting Etiquette: A handshake is common, and locals appreciate a friendly greeting." />
      <SecondTitle text="Safety Tips" />
      <ListParagraph text="Stay Hydrated: Especially important in the summer heat." />
      <ListParagraph text="Watch Your Belongings: Be mindful of your valuables, especially in crowded areas." />
      <Title text="XII. Conclusion" />
      <Paragraph text="Sarandë is a gem on the Albanian Riviera, offering stunning beaches, rich historical sites, and a lively atmosphere. Whether you're interested in ancient history, vibrant nightlife, or simply relaxing by the sea, Sarandë has something for everyone. Take the time to explore Sarandë’s diverse offerings. From the ancient ruins of Butrint to the hidden coves and lively beach bars, there is always something new to discover. Embrace the beauty and culture of this enchanting coastal city." />
    </Cities>
  );
}
