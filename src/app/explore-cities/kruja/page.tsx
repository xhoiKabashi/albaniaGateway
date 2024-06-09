import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/kruje.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Krujë: The Spirit of Albanian History",
  description:
    "Explore Krujë, a city steeped in history and culture. Discover its stunning castle, traditional bazaar, and learn about Albania’s national hero, Skanderbeg. Plan your visit and embark on a journey into the heart of Albanian history.",
  keywords:
    "Kruja, Albanian history, Skanderbeg, Krujë attractions, Albania travel, Krujë tourism, Balkan travel, Krujë, Albania, Krujë Castle, Skanderbeg Museum, Ethnographic Museum, historical landmarks, cultural significance, transportation options, travel tips, accommodations, top attractions, hidden gems, local favorites, food and drink, outdoor activities, cultural experiences, day trips, local tips, safety tips",
  openGraph: {
    title: "Discover Krujë: The Spirit of Albanian History",
    description:
      "Explore Krujë, a city steeped in history and culture. Discover its stunning castle, traditional bazaar, and learn about Albania’s national hero, Skanderbeg. Plan your visit and embark on a journey into the heart of Albanian history.",
    url: "https://albaniagateway.com/explore-cities/kruja",
    siteName: "Albania Gateway",
    images: {
      url: "/kruje.jpg", // Update with the correct image URL
      width: 800,
      height: 600,
      alt: "Image of Kruja",
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Kruja"; // Replace with actual time if needed
  const alt = "Image of Kruja Castle";
  const mainTitle = "Discover Krujë: The Spirit of Albanian History"; // Replace with actual title
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
      <Paragraph text="Nestled in the mountains of central Albania, Krujë is a city steeped in history and culture. Famous for its stunning castle, traditional bazaar, and as the home of Albania’s national hero, Skanderbeg, Krujë offers a captivating blend of scenic beauty and historical intrigue. Imagine walking through the same castle where Skanderbeg defended Albania from the Ottomans, shopping in an ancient bazaar, and enjoying panoramic views of the surrounding landscapes." />
      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <Paragraph text="Krujë's history dates back to antiquity, but it is most renowned for its role in the 15th century as the stronghold of Gjergj Kastrioti Skanderbeg, who led the resistance against the Ottoman Empire. The Siege of Krujë (1450) is particularly notable, where Skanderbeg’s forces successfully repelled the Ottomans." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Krujë holds a special place in Albanian culture and national identity. It is considered a symbol of resistance and pride, representing the unyielding spirit of the Albanian people. The city's historical significance is celebrated annually on November 28th, Albania's Independence Day." />
      <SecondTitle text="Important Landmarks" />
      <Paragraph text="Key landmarks include Krujë Castle, the Skanderbeg Museum, and the Ethnographic Museum. The castle, perched high on a hill, offers not only historical insight but also breathtaking views of the surrounding area." />
      {/*  */}
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text=" Air: The nearest airport is Tirana International Airport (TIA), about 30 km from Krujë. Regular buses and taxis are available." />
      <ListParagraph text=" Bus: Buses and minibuses run frequently from Tirana to Krujë, making it an easy and economical option." />
      <ListParagraph text=" Car: Krujë is accessible via the SH38 highway from Tirana, offering a scenic drive through the Albanian countryside." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text=" From Tirana: Approximately a 45-minute drive via SH38." />
      <ListParagraph text=" From Durrës: Around an hour’s drive via SH2 and SH38." />
      <ListParagraph text=" From Shkoder: About 2 hours by car via the A1 and SH38." />
      {/*  */}
      <Title text="IV. Travel Tips" />
      <Paragraph text="Taking a bus or minibus from Tirana is convenient and cost-effective. If driving, be prepared for narrow, winding roads as you approach Krujë." />
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />

      <ListParagraph text="Near the Castle: For easy access to historical sites and beautiful views" />
      <ListParagraph text="City Center: Close to shops, restaurants, and the bazaar" />
      <ListParagraph text="Outskirts: For a quieter stay with a more rural feel." />

      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: Ranging from luxury to budget options." />
      <ListParagraph text="Guesthouses: Offering a more personal and homely experience." />
      <ListParagraph text="Vacation Rentals: Ideal for families or longer stays" />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text=" Hotel Panorama Krujë: Offers stunning views of the castle and surrounding mountains." />
      <ListParagraph text=" Hotel Kroi: A mid-range option with comfortable rooms and friendly service." />
      <ListParagraph text=" Rooms Emiliano: A budget-friendly guesthouse with a welcoming atmosphere." />
      <Title text="VI. Top Attractions" />
      {/*  */}
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text=" Krujë Castle: A must-visit for its historical significance and panoramic views." />
      <ListParagraph text=" Skanderbeg Museum: Located within the castle, dedicated to Albania's national hero." />
      <ListParagraph text=" Ethnographic Museum: Showcasing traditional Albanian life and culture." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text=" Teqeja e Dollmës: A 400-year-old Bektashi teqe (dervish lodge) located within the castle grounds." />
      <ListParagraph text=" Krujë Bazaar: A lively market dating back to the Ottoman era, perfect for finding traditional crafts and souvenirs." />
      <ListParagraph text=" Sari Salltik: A holy site located on a hill above Krujë, offering stunning views and a peaceful atmosphere." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text=" Skanderbeg Museum: Offers extensive exhibits on Skanderbeg’s life and legacy." />
      <ListParagraph text=" Ethnographic Museum: Housed in a traditional Ottoman house, it provides a glimpse into historical Albanian life." />
      <Title text="VII. Hidden Gems" />
      {/*  */}
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text=" Qafë Shtamë National Park: A beautiful natural reserve ideal for hiking and picnics." />
      <ListParagraph text=" Old Bazaar Side Streets: Wander off the main path to discover quaint shops and quieter corners of the bazaar." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text=" Pazari i Vjetër: The old market where locals still shop and trade." />
      <ListParagraph text=" Local Hammams: Experience a traditional Turkish bath." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text=" Traditional Craft Workshops: Participate in workshops for weaving, pottery, or other traditional crafts." />
      <ListParagraph text=" Local Festivals: Time your visit to coincide with local celebrations for a deeper cultural experience." />
      {/*  */}

      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Krujë is known for dishes like 'Fërgesë' (a traditional dish made with peppers, tomatoes, and cheese), and 'Tave Dheu' (a clay pot casserole with meat and vegetables)." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text=" Restaurant Panorama: Offers traditional Albanian dishes with a view." />
      <ListParagraph text=" Bar Restorant Bardhi: Known for its friendly service and delicious local cuisine." />
      <ListParagraph text=" Café Bar Turizmi: A cozy spot for coffee and light snacks." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text=" Te Gjyshi: A popular bar among locals, offering a lively atmosphere." />
      <ListParagraph text=" Old Bazaar Bars: Enjoy a drink in one of the traditional bars within the bazaar area." />
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text=" Hiking: Explore the trails in Qafë Shtamë National Park." />
      <ListParagraph text=" Biking: Rent a bike and ride through the scenic mountain paths." />
      <ListParagraph text=" Paragliding: For the adventurous, try paragliding from the hills surrounding Krujë." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text=" Skanderbeg Museum Tours: Guided tours offer deep insights into the life of Albania's national hero." />
      <ListParagraph text=" Ethnographic Museum Visits: Learn about traditional Albanian life and customs." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text=" Krujë Bazaar: The best place to shop for traditional crafts, textiles, and souvenirs." />
      <ListParagraph text=" Local Artisan Shops: Find unique handmade items crafted by local artisans." />
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text=" Lezhë: Visit the mausoleum of Skanderbeg and explore the historical town." />
      <ListParagraph text=" Tirana: The capital city offers a mix of modern attractions and historical sites." />
      <ListParagraph text=" Shkodër: Known for its beautiful lake and Rozafa Castle." />
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <Paragraph text="Spring and Fall: Ideal for mild weather and fewer tourists. Early Morning: Best for visiting popular sites like the castle to avoid crowds." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <Paragraph text="Greetings: A friendly handshake or nod is common; showing respect is valued. Dress: Casual but modest, especially when visiting religious sites." />
      <SecondTitle text="Safety Tips" />
      <Paragraph text="General Safety: Krujë is generally safe, but stay aware of your surroundings in crowded areas. Driving: Be cautious when driving, especially on narrow mountain roads." />
      <Title text="XII. Conclusion" />
      <Paragraph text="Krujë is a city that embodies the rich history and resilient spirit of Albania. From its impressive castle and vibrant bazaar to the breathtaking mountain views, Krujë offers a unique and enriching experience for every traveler. Step into the past, explore the cultural heritage, and enjoy the hospitality of this historic city. Krujë is not just a destination, but a journey into the heart of Albanian pride and history. Embark on your journey to Krujë and uncover the stories and beauty of this historic city. Happy travels!" />
    </Cities>
  );
}
