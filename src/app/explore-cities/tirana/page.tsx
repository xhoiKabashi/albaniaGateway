import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/tiranaWhyVisit.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";

export default function page() {
  const estimatedReadingTime = "Tirana"; // Replace with actual time if needed
  const alt = "Image of Tirana";
  const mainTitle = "Exploring Tirana: A Comprehensive Guide"; // Replace with actual title
  const contentData = [
    {
      title: "I. Introduction",
    },
    {
      title: "II. Historical Background",
    },
    {
      title: "III.	How to Get There?",
    },
    {
      title: "IV.	Travel Tips",
      contentPoints: [""],
    },
    {
      title: "V.	Where to Stay?",
    },
    {
      title: "VI.	Top Attractions",
    },

    {
      title: "VII.	Hidden Gems",
    },
    {
      title: "VIII.	Foods and Drinks",
    },
    {
      title: "IX.	Activities and Experiences",
    },
    {
      title: "X.	Day Trips and Excursions",
    },
    {
      title: "XI.	Local Tips",
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
      <Paragraph
        text="Tirana, the vibrant capital of Albania, is a city that perfectly
              blends its rich history with modern charm. Nestled between the
              Adriatic Sea and the Dajti Mountain, Tirana is a bustling
              metropolis known for its colorful architecture, lively streets,
              and welcoming atmosphere."
      />
      <Paragraph
        text="Tirana, the vibrant capital of Albania, is a city that perfectly
              blends its rich history with modern charm. Nestled between the
              Adriatic Sea and the Dajti Mountain, Tirana is a bustling
              metropolis known for its colorful architecture, lively streets,
              and welcoming atmosphere."
      />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph
        text="Colorful Architecture: Known for its brightly painted buildings,
              Tirana`s cityscape is a visual feast."
      />
      <ListParagraph
        text="Vibrant Culture: A melting pot of influences, Tirana boasts a
              dynamic arts scene and a lively nightlife."
      />
      <ListParagraph
        text="Historical Depth: From Ottoman-era mosques to Communist-era
              relics, the city`s history is palpable."
      />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic
        text=" “On my first visit to Tirana, I was struck by the contrast between
              the old and the new. Walking through the streets, I found myself
              moving from bustling markets to serene parks, each corner offering
              a new surprise. It was this blend of history and modernity that
              truly captivated me.”"
      />
      <Title text="II.	Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <ListParagraph text="Ottoman Era: Tirana was founded in the early 17th century by Sulejman Pasha." />
      <ListParagraph text="Communist Era: From 1944 to 1992, Tirana was the heart of Enver Hoxha's Communist regime." />
      <ListParagraph text="Post-Communist Era: Since the fall of Communism, Tirana has undergone significant transformation, becoming a vibrant European capital." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Tirana is a cultural hub, home to numerous theaters, galleries, and cultural institutions. The National Historical Museum, for instance, offers a deep dive into the country's rich history, while the National Theatre of Opera and Ballet showcases the best of Albanian performing arts." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text="Skanderbeg Square: The city's main plaza, named after Albania's national hero" />
      <ListParagraph text="Et'hem Bey Mosque: A beautiful mosque from the Ottoman era" />
      <ListParagraph text="Pyramid of Tirana: A relic from the Communist era, now a symbol of the city's transformation." />
      <ListParagraph text="Grand Park of Tirana: The Park includes an artificial lake and it is one of the most relaxing place in the city." />
      {/*  */}
      <Title text="III.	How to Get There" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: Tirana International Airport Nënë Tereza is the main gateway, located just 17 km from the city center." />
      <ListParagraph text="Bus: Regular bus services connect Tirana with major cities in Albania and neighboring countries." />
      <ListParagraph text="Car: Well-connected highways make driving to Tirana from nearby cities convenient" />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Durrës: A 40-minute drive via SH2 highway." />
      <ListParagraph text="From Shkodër: A 1.5-hour drive via SH1 highway." />
      <ListParagraph text="From Pristina (Kosovo): A 4-hour drive via Rruga e Kombit highway." />
      {/*  */}
      <Title text="IV.	Travel Tips" />
      <Paragraph text="Language: While Albanian is the official language, English and Italian are widely understood in tourist areas." />
      <Paragraph text="Currency: The local currency is the Albanian Lek (ALL). Credit cards are accepted in most places, but it's advisable to carry some cash." />
      <Title text="V. Where to Stay" />
      <SecondTitle text="Neighborhood Recommendations" />
      <ListParagraph text="Blloku: Known for its vibrant nightlife and trendy cafes." />
      <ListParagraph text="Tirana City Center: Close to major attractions and ideal for first-time visitors." />
      <ListParagraph text="Lana River Area: A quieter area with beautiful riverside views." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: From luxury to budget options." />
      <ListParagraph text="Hostels: Affordable and social, ideal for backpackers." />
      <ListParagraph text="Vacation Rentals: Apartments and houses for a home-like stay." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Plaza Tirana: A luxurious stay with stunning city views." />
      <ListParagraph text="Rogner Hotel: Known for its excellent service and central location." />
      <ListParagraph text="Mosaic Home: A budget-friendly hostel with great amenities." />
      {/*  */}
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Skanderbeg Square: The heart of the city, surrounded by important buildings." />
      <ListParagraph text="Mount Dajti: Accessible by cable car, offering panoramic views of Tirana." />
      <ListParagraph text="Bunk’Art Museums: Former bunkers turned into museums showcasing Albania's history." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Et'hem Bey Mosque: A beautifully restored mosque in the city center." />
      <ListParagraph text="Clock Tower: Offers a great view of the city from the top." />
      <ListParagraph text="National Historical Museum: A must-visit for history enthusiasts." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="National Gallery of Arts: Home to an extensive collection of Albanian art." />
      <ListParagraph text="House of Leaves: A museum dedicated to the secret surveillance of the Communist regime." />
      <ListParagraph text="Bunk’Art 2: Focuses on the history of the Albanian police and political persecution." />
      {/*  */}
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Grand Park of Tirana: A large park perfect for a relaxing day out." />
      <ListParagraph text="Tirana Castle: Less crowded and full of historical charm." />
      <ListParagraph text="New Bazaar: A bustling market where you can experience local life." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="New Bazaar: A vibrant market area with great food stalls." />
      <ListParagraph text="Komiteti - Kafe Muzeum: A cafe and museum with a unique atmosphere and delicious local drinks." />
      <ListParagraph text="Artificial Lake: A popular spot for locals to relax and exercise." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Cycling in the city: Rent a bike and explore Tirana on two wheels." />
      <ListParagraph text="Street Art Tour: Discover the colorful murals that adorn the city." />
      <ListParagraph text="Cooking Classes: Learn how to make traditional Albanian dishes." />
      {/*  */}
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Skanderbeg Square: The heart of the city, surrounded by important buildings." />
      <ListParagraph text="Mount Dajti: Accessible by cable car, offering panoramic views of Tirana." />
      <ListParagraph text="Bunk’Art Museums: Former bunkers turned into museums showcasing Albania's history." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Et'hem Bey Mosque: A beautifully restored mosque in the city center." />
      <ListParagraph text="Clock Tower: Offers a great view of the city from the top." />
      <ListParagraph text="National Historical Museum: A must-visit for history enthusiasts." />
      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <ListParagraph text="Tavë Kosi: A traditional baked lamb dish." />
      <ListParagraph text="Byrek: Savory pastry filled with cheese, meat, or spinach." />
      <ListParagraph text="Fërgesë: A dish made with peppers, tomatoes, and cottage cheese." />
      {/* <Photo text="Foto Ushqimet" /> */}
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Mullixhiu: Renowned for its modern take on traditional Albanian cuisine." />
      <ListParagraph text="Oda: Offers authentic Albanian dishes in a cozy setting." />
      <ListParagraph text="Colonial Café: Perfect for a coffee or a light snack." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text="Radio Bar: Known for its great music and cocktails." />
      <ListParagraph text="Blloku Area: Full of trendy bars and nightclubs." />
      <ListParagraph text="Nouvelle Vague: A stylish bar with a relaxed atmosphere." />
      {/*  */}
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Mount Dajti National Park: Hiking and nature walks with stunning views." />
      <ListParagraph text="Grand Park of Tirana: Perfect for jogging, picnics, and boat rides." />
      <ListParagraph text="Artificial Lake Park: A serene spot for a walk or a bike ride." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Opera and Ballet: Enjoy performances at the National Theatre of Opera and Ballet." />
      <ListParagraph text="Tirana International Film Festival: Experience the best of Albanian and international cinema." />
      <ListParagraph text="Local Festivals: Participate in local events and festivals for an authentic experience." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text="Toptani Shopping Center: A modern mall with international brands." />
      <ListParagraph text="Pazari i Ri: A lively market where you can buy fresh produce and local crafts." />
      <ListParagraph text="Blloku: Boutiques and shops offering unique items." />
      {/*  */}

      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text="Durrës: A coastal city with beautiful beaches and ancient ruins." />
      <ListParagraph text="Kruja: A historic town known for its castle and bazaar." />
      <ListParagraph text="Berat: A UNESCO World Heritage site with stunning architecture." />
      {/*  */}
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <ListParagraph text="Spring and Autumn: Ideal for exploring the city and enjoying outdoor activities." />
      <ListParagraph text="Summer: Perfect for combining a city trip with beach visits." />
      <ListParagraph text="Winter: Less crowded and great for visiting museums and cultural sites." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <ListParagraph text="Greetings: A handshake is common; kissing on the cheek is also a friendly gesture." />
      <ListParagraph text="Dress Code: Generally casual, but modest clothing is appreciated when visiting religious sites." />
      <ListParagraph text="Tipping: Not mandatory, but appreciated in restaurants and cafes." />
      <SecondTitle text="Safety Tips" />
      <ListParagraph text="Stay Vigilant: Keep an eye on your belongings, especially in crowded areas." />
      <ListParagraph text="Transportation: Use official taxis or ride-hailing apps for safety." />
      <ListParagraph text="Health: Tap water is generally safe, but bottled water is recommended." />

      <Title text="XII. Conclusion" />
      <Paragraph text="Tirana is a city that effortlessly blends history, culture, and modernity. With its vibrant streets, rich history, and welcoming locals, it offers a unique and enriching travel experience." />
      <Paragraph text="Whether you're wandering through its colorful streets, savoring local cuisine, or discovering hidden gems, Tirana promises an unforgettable adventure. Embrace the city's dynamic spirit and immerse yourself in all it has to offer." />
      <Paragraph text="Exploring Tirana offers a journey through history, culture, and vibrant urban life. It's a city that invites you to explore its past and present, promising a memorable adventure." />
    </Cities>
  );
}
