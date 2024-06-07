import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/vlora-image.jpg";
import type { Metadata } from "next";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";

export const metadata: Metadata = {
  title: "Exploring Vlorë: The Gateway to the Albanian Riviera",
  description:
    "Discover Vlorë, a vibrant coastal city in southwestern Albania known for its beautiful beaches, rich history, and lively atmosphere. Explore top attractions, hidden gems, and local tips for an unforgettable experience.",
  keywords:
    "Vlorë, Albania, travel to Vlora, tourism, beaches, history, Albanian Riviera, top attractions, hidden gems, travel tips, Vlora in Albania, travel to Vlora",
  openGraph: {
    title: "Exploring Vlorë: The Gateway to the Albanian Riviera",
    description:
      "Discover Vlorë, a vibrant coastal city in southwestern Albania known for its beautiful beaches, rich history, and lively atmosphere. Explore top attractions, hidden gems, and local tips for an unforgettable experience.",
    url: "https://albaniagateway.com/explore-cities/vlora",
    siteName: "Albania Gateway",
    images: {
      url: "/vlora-image.jpg",
      width: 1260,
      height: 800,
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Vlorë"; // Replace with actual time if needed
  const alt = "Image of Vlora";
  const mainTitle = "Exploring Vlorë: The Gateway to the Albanian Riviera"; // Replace with actual title
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
      <Paragraph text="Vlorë, a vibrant coastal city in southwestern Albania, is known for its beautiful beaches, rich history, and lively atmosphere. As the country's third-largest city, Vlorë plays a pivotal role in both Albania's cultural heritage and its tourism industry. It is also the starting point of the stunning Albanian Riviera." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Spectacular Beaches: Pristine beaches with crystal-clear waters." />
      <ListParagraph text="Historical Significance: The birthplace of Albanian independence." />
      <ListParagraph text="Natural Beauty: Surrounded by mountains and the Adriatic Sea." />
      <ListParagraph text="Lively Culture: Bustling nightlife and vibrant local traditions." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text='"During my visit to Vlorë, I was captivated by the harmonious blend of history and modernity. One evening, as I watched the sunset over the Ionian Sea from Kuzum Baba, the highest point in the city, I felt a profound connection to the past and present of this remarkable city."' />

      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <ListParagraph text="Independence Declaration (1912): Vlorë is where Albania declared its independence from the Ottoman Empire on November 28, 1912." />
      <ListParagraph text="Ancient Origins: The city's history dates back to the 6th century BC, with significant Greek and Roman influences." />
      <ListParagraph text="Ottoman Era: Vlorë flourished under Ottoman rule, leaving a lasting architectural legacy." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Vlorë is a cultural melting pot, with influences from various civilizations that have left their mark over centuries. It is known for its patriotic spirit, being the site of the Albanian Declaration of Independence and home to numerous cultural festivals celebrating its diverse heritage." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text="Independence Monument: Commemorates the declaration of Albanian independence." />
      <ListParagraph text="Muradie Mosque: A stunning example of Ottoman architecture, built in 1542." />
      <ListParagraph text="Kanina Castle: Offers panoramic views and a glimpse into the city's medieval past." />

      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest major airport is Tirana International Airport, about 150 km away." />
      <ListParagraph text="Bus: Regular bus services connect Vlorë with Tirana, Durrës, and other cities." />
      <ListParagraph text="Car: Driving is a popular option, offering scenic coastal routes." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <Paragraph
        text="From Tirana: Take the SH4 highway southwards, approximately a 2-hour drive.
From Durrës: Follow the SH4, about 1.5 hours by car."
      />

      <Title text="IV. Travel Tips" />
      <Paragraph
        text="Road Conditions: Generally good, but be mindful of traffic during peak seasons.
Public Transport: Buses are reliable and affordable.
Local Transport: Taxis and rental cars are available for local travel."
      />

      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <ListParagraph text="Lungomare: Ideal for beach lovers and nightlife enthusiasts." />
      <ListParagraph text="City Center: Close to historical sites and cultural attractions." />
      <ListParagraph text="Radhimë: Offers a more tranquil, scenic stay by the sea." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: From budget to luxury, catering to all needs." />
      <ListParagraph text="Hostels: Great for backpackers and budget travelers." />
      <ListParagraph text="Vacation Rentals: Perfect for families or longer stays." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Hotel Partner: A comfortable mid-range option near the city center." />
      <ListParagraph text="Regina Blu Hotel: Offers luxury with stunning sea views." />
      <ListParagraph text="Vlora Backpackers Hostel: Popular among young travelers for its friendly vibe." />

      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Independence Monument: A symbol of national pride." />
      <ListParagraph text="Kuzum Baba: The highest point in the city, offering breathtaking views." />
      <ListParagraph text="Flag Square (Sheshi i Flamurit): The heart of the city's historic celebrations." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Muradie Mosque: Known for its unique architectural style." />
      <ListParagraph text="Kanina Castle: Provides historical insights and scenic views." />
      <ListParagraph text="Ethnographic Museum: Showcases local culture and traditions." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="Museum of Independence: Chronicles Albania's journey to independence." />
      <ListParagraph text="Historic Museum: Offers a deeper look into Vlorë’s rich past." />
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Zvernec Island: A tranquil island with a picturesque monastery." />
      <ListParagraph text="Orikum: An ancient archaeological site and a serene coastal area." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Narta Lagoon: A beautiful natural area popular among locals for birdwatching." />
      <ListParagraph text="Shushica River Valley: Perfect for nature walks and picnics." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Boat Tours: Explore the coastline and nearby islands." />
      <ListParagraph text="Local Festivals: Participate in traditional music and dance events." />

      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <ListParagraph text="Seafood: Fresh and delicious, especially along the coast." />
      <ListParagraph text="Byrek: Savory pastries filled with cheese, meat, or spinach." />
      <ListParagraph text="Tavë Kosi: A traditional lamb and yogurt dish." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Restaurant Pulebardha: Known for its excellent seafood and sea views." />
      <ListParagraph text="Ristorante San Giorgio al Porto: Offers a blend of Italian and Albanian cuisine." />
      <ListParagraph text="Tre Forchette: A cozy spot with a diverse menu and friendly atmosphere." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text="Cuba Libre Beach Club: A lively spot for cocktails and dancing." />
      <ListParagraph text="Mojito Bar: Perfect for a relaxed evening by the sea." />
      <ListParagraph text="Hemingway Bar: A great place to enjoy a drink and live music." />

      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Lungomare Promenade: Perfect for a leisurely walk or bike ride." />
      <ListParagraph text="Karaburun Peninsula: Offers hiking trails and stunning coastal views." />
      <ListParagraph text="Diving and Snorkeling: Explore the underwater world of the Adriatic Sea." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Local Festivals: Experience traditional music, dance, and cuisine." />
      <ListParagraph text="Theater Performances: Check out local productions at the Petro Marko Theater." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text="Old Bazaar: Find unique souvenirs, antiques, and handmade goods." />
      <ListParagraph text="Weekly Farmers Market: Sample fresh local produce and delicacies." />

      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text="Himarë: A charming coastal town with beautiful beaches." />
      <ListParagraph text="Butrint National Park: An archaeological site with ancient ruins and natural beauty." />
      <ListParagraph text="Dhermi: Known for its stunning beaches and vibrant nightlife." />

      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <Paragraph text="Spring and Autumn: Ideal for mild weather and fewer crowds." />
      <Paragraph text="Summer: Vibrant atmosphere but can be hot and busy." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <Paragraph text="Respect Local Customs: Dress modestly when visiting religious sites." />
      <Paragraph text="Greeting Etiquette: A handshake is common, and locals appreciate a friendly greeting." />
      <SecondTitle text="Safety Tips" />
      <Paragraph text="Stay Hydrated: Especially important in the summer heat." />
      <Paragraph text="Watch Your Belongings: As with any tourist destination, be mindful of your valuables." />

      <Title text="XII. Conclusion" />
      <Paragraph text="Vlorë is a city of contrasts, where ancient history meets modern vibrancy. With its stunning beaches, rich cultural heritage, and lively atmosphere, Vlorë offers an unforgettable experience for every traveler. Whether you're soaking up the sun on its pristine beaches, delving into its storied past, or savoring the local cuisine, Vlorë has something for everyone. Embrace the adventure and discover all that this beautiful city has to offer." />
    </Cities>
  );
}
