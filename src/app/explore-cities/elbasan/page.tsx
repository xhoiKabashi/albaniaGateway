import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/elbasani.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";

export default function page() {
  const estimatedReadingTime = "Elbasan"; // Replace with actual time if needed
  const mainTitle = "Discover Elbasan: A Historic Heart of Albania"; // Replace with actual title
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
    >
      <Title text="I. Introduction" />
      <SecondTitle text="Brief Overview of the City" />
      <Paragraph text="Elbasan, situated in central Albania, is a city rich in history and culture, offering a blend of ancient heritage and vibrant modern life. Known for its well-preserved castle, vibrant bazaars, and warm hospitality, Elbasan is an underrated gem waiting to be explored. Imagine wandering through narrow streets lined with Ottoman-era buildings, enjoying traditional Albanian cuisine in family-run restaurants, and discovering the stories of a city that has stood the test of time." />
      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <Paragraph text="Elbasan's history dates back to the Illyrian period, but it gained prominence during the Roman Empire as a key point on the Via Egnatia, the road connecting Rome with Byzantium. The city was fortified by the Ottomans in the 15th century, and its castle remains a significant landmark. During the Ottoman era, Elbasan became a center of trade and culture." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Elbasan has been a melting pot of cultures and religions, reflected in its diverse architecture and cultural practices. The city played a pivotal role in the Albanian Renaissance, contributing to the national awakening and the development of Albanian education and literature." />
      <SecondTitle text="Important Landmarks" />
      <Paragraph text="Key landmarks include the Elbasan Castle, King Mosque, and Saint Mary's Orthodox Church. The Ethnographic Museum offers insights into the region's cultural heritage, while the ancient Via Egnatia road remnants remind visitors of the city's historical significance." />
      {/*  */}
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest airport is Tirana International Airport (TIA), approximately 50 km from Elbasan. From there, you can take a bus or taxi." />
      <ListParagraph text="Bus: Frequent bus services run from Tirana, making it an accessible destination." />
      <ListParagraph text="Car: Elbasan is easily reachable via the SH3 highway from Tirana." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: About an hour’s drive via the SH3 highway." />
      <ListParagraph text="From Durrës: Approximately 1.5 hours by car via SH7 and SH3." />
      <ListParagraph text="From Berat: Around 1.5 hours by car via SH72 and SH3." />
      {/*  */}
      <Title text="IV. Travel Tips" />
      <Paragraph text="Consider taking a bus for convenience, but if you prefer exploring at your own pace, renting a car is a good option. Be prepared for narrow streets within the city center if driving." />
      {/*  */}
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <ListParagraph text="City Center: Close to historical sites and main attractions." />
      <ListParagraph text="Castle Area: For a more historic atmosphere with charming old buildings." />
      <ListParagraph text="Suburban Areas: Quieter, residential neighborhoods with more modern accommodations." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: Ranging from luxury to budget-friendly options." />
      <ListParagraph text="Hostels: Ideal for solo travelers and backpackers." />
      <ListParagraph text="Vacation Rentals: Suitable for families or those wanting a home-like stay." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Hotel Real Scampis: Located within the castle walls, offering a historic experience." />
      <ListParagraph text="Hotel Guri: A mid-range option with comfortable rooms and good amenities." />
      <ListParagraph text="Hotel Le Olive: A budget-friendly hotel known for its hospitality and convenient location." />
      {/*  */}
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Elbasan Castle: A well-preserved fortress with ancient walls and historic buildings." />
      <ListParagraph text="King Mosque: One of the oldest mosques in Albania, dating back to the 15th century." />
      <ListParagraph text="Saint Mary's Orthodox Church: A beautiful example of religious architecture." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Via Egnatia: The ancient Roman road that once connected Rome to Byzantium." />
      <ListParagraph text="Clock Tower: Located in the city center, offering panoramic views." />
      <ListParagraph text="Ethnographic Museum: Showcasing traditional Albanian life and customs." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="Ethnographic Museum: As mentioned, it provides a deep dive into local history." />
      <ListParagraph text="Elbasan Art Gallery: Featuring works by local and national artists." />
      {/*  */}
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Liqeni i Belshit: A serene lake near Elbasan, perfect for a day trip." />
      <ListParagraph text="Holta Canyon: An adventure spot for hiking and exploring natural beauty." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Old Bazaar: A lively market where you can find traditional crafts and local products." />
      <ListParagraph text="Krasta Hill: A popular spot among locals for hiking and enjoying city views." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Traditional Bathhouses: Experience a traditional Turkish bath in one of the city’s historic hammams." />
      <ListParagraph text="Cooking Classes: Learn to cook traditional Albanian dishes with local chefs." />
      {/*  */}
      <Title text="VIII. Foods and Drinks" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Elbasan is known for dishes like 'Tave Elbasani' (a lamb and yogurt casserole) and 'Byrek' (savory pastries). Local cuisine is hearty and flavorful, reflecting the region's agricultural bounty. Elbasan is also known for its traditional 'snack', the bugaçe, which is bread stuffed with pasta, spread with butter and salt. It can also be stuffed with cheese and sausages. This food is typically consumed in the morning, and you can find it in different bakeries around town. The traditional coffee served only in Elbasan is called Leçe, which is condensed milk with espresso coffee. It is a must-try if you visit Elbasan!" />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Restaurant Vila Benvenuto: Known for its traditional Albanian dishes." />
      <ListParagraph text="Taverna 2 Luanet: Offers a mix of local and Mediterranean cuisine." />
      <ListParagraph text="Café Bistro: A cozy spot for coffee and light snacks." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text="Bar Restorant Univers: Great for a relaxed evening with drinks and music." />
      <ListParagraph text="Piazza Bar: Popular among locals for its vibrant atmosphere and good cocktails." />
      <Title text="IX. Activities and Experiences" />
      {/*  */}
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Shebenik-Jabllanice National Park: Ideal for hiking and nature walks." />
      <ListParagraph text="Shkumbin River: Perfect for fishing and picnics." />
      <ListParagraph text="Krasta Hill: Offers trails for hiking and stunning views over the city." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Skampa Theater: Attend a local play or performance." />
      <ListParagraph text="Summer Day Festival: Celebrated on March 14th, marking the end of winter with parades and festivities." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text="Old Bazaar: For traditional crafts and souvenirs." />
      <ListParagraph text="Elbasan City Mall: A modern shopping center with various stores." />
      <SecondTitle text="X. Day Trips and Excursions" />
      {/*  */}
      <ListParagraph text="Berat: Known as the 'City of a Thousand Windows,' it’s a UNESCO World Heritage site." />
      <ListParagraph text="Tirana: The capital city, offering a mix of history, culture, and modern attractions." />
      <ListParagraph text="Pogradec: Located by Lake Ohrid, known for its natural beauty and fish cuisine." />
      <SecondTitle text="Suggested Itineraries for Day Trips" />
      <ListParagraph text="Day Trip to Berat: Explore Berat Castle, the Onufri Museum, and the old town." />
      <ListParagraph text="Exploring Shebenik-Jabllanice National Park: A full day of hiking and wildlife spotting." />
      <ListParagraph text="Visit to Pogradec: Enjoy the lakeside views, local restaurants, and cultural sites." />
      {/*  */}
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <ListParagraph text="Spring and Fall: Ideal for mild weather and fewer tourists." />
      <ListParagraph text="Early Morning: Best for visiting popular sites like the castle to avoid crowds." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <ListParagraph text="Greetings: Handshakes are common; locals appreciate politeness and respect." />
      <ListParagraph text="Dress: Casual but modest, especially when visiting religious sites." />
      <SecondTitle text="Safety Tips" />
      <ListParagraph text="General Safety: Elbasan is generally safe, but stay aware of your surroundings in busy areas." />
      <ListParagraph text="Driving: Be cautious when driving, as local driving habits can be unpredictable." />
      <Title text="Conclusion" />
      {/*  */}
      <Paragraph text="Elbasan is a city that beautifully combines its rich historical heritage with the vibrancy of modern Albanian life. From the ancient walls of its castle to the bustling bazaars, Elbasan offers a unique and immersive experience for every traveler. Discover the charm of this historic heart of Albania, and let the stories of Elbasan’s past and present enchant you." />
      <Paragraph text="Embark on your journey to Elbasan and explore the hidden treasures and rich history of this fascinating city. Happy travels!" />
    </Cities>
  );
}
