import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/shkoder-card.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";

export default function page() {
  const estimatedReadingTime = "Shkodra"; // Replace with actual time if needed
  const alt = "Image of Shkodra center";
  const mainTitle =
    "Exploring Shkodër: A Cultural and Historical Gem in Northern Albania"; // Replace with actual title
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
      <Paragraph text="Shkodër, one of the oldest and most culturally significant cities in Albania, is located in the northwest of the country, near the borders with Montenegro. Nestled between the Accursed Mountains and Lake Shkodër, the city offers a captivating blend of natural beauty, rich history, and vibrant culture. Shkodër is a gateway to the Albanian Alps and a hub for exploring the stunning landscapes of northern Albania." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Historic Landmarks: Home to the Rozafa Castle and the iconic Lead Mosque." />
      <ListParagraph text="Cultural Hub: Known for its festivals, arts scene, and traditional music." />
      <ListParagraph text="Natural Beauty: Proximity to Lake Shkodër and the Albanian Alps provides opportunities for outdoor activities." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text="“Imagine standing atop Rozafa Castle at sunset, with panoramic views stretching from the glistening waters of Lake Shkodër to the rugged peaks of the Albanian Alps. This city not only offers historical intrigue but also breathtaking scenery that leaves a lasting impression on every visitor.”" />
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <Paragraph text="Shkodër has been a significant settlement since antiquity, originally founded by the Illyrians and later becoming an important city in the Roman and Byzantine empires. During the Ottoman period, it flourished as a center of trade and culture. The city has witnessed numerous battles and sieges, most notably the Siege of Shkodër in 1478-79 during the Ottoman-Venetian War." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Shkodër has long been a center of Albanian culture and education. It played a crucial role in the Albanian Renaissance, fostering the growth of national identity and literature. The city is also famous for its traditional music and dances, which reflect its rich cultural heritage." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text="Rozafa Castle: An ancient fortress with stunning views and a fascinating legend." />
      <ListParagraph text="Lead Mosque (Xhamia e Plumbit): A beautiful 18th-century mosque." />
      <ListParagraph text="Marubi National Museum of Photography: Showcasing the work of the Marubi dynasty of photographers." />
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest airport is Tirana International Airport (TIA), about 95 km from Shkodër." />
      <ListParagraph text="Bus: Frequent buses connect Shkodër with Tirana and other major cities." />
      <ListParagraph text="Car: Driving is a convenient option, with good road connections from Tirana and Montenegro." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Approximately 2 hours by car via the A1/E762 highway." />
      <ListParagraph text="From Durrës: Around 2 hours by car via the A1/E762." />
      <ListParagraph text="From Podgorica, Montenegro: About 1.5 hours by car via the SH1 highway." />
      <Title text="IV. Travel Tips" />
      <Paragraph text="If traveling by bus, consider booking your tickets in advance, especially during peak tourist seasons. For those driving, ensure your vehicle is in good condition, as some roads can be challenging, especially in mountainous areas." />
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <ListParagraph text="City Center: Close to main attractions, shops, and restaurants." />
      <ListParagraph text="Lake Shkodër Area: Offers beautiful views and a peaceful atmosphere." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: Ranging from luxury to budget-friendly options." />
      <ListParagraph text="Hostels: Ideal for backpackers and solo travelers." />
      <ListParagraph text="Vacation Rentals: Suitable for families or those seeking a home-like stay." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Hotel Tradita Geg & Tosk: A charming hotel with traditional Albanian decor." />
      <ListParagraph text="Hotel Colosseo: Offers modern amenities and is centrally located." />
      <ListParagraph text="Rozafa Hotel: A historic hotel with comfortable rooms and great service." />
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Rozafa Castle: Explore the ancient ruins and enjoy panoramic views of the city and surrounding landscapes." />
      <ListParagraph text="Lead Mosque: Visit this architectural gem, known for its distinctive lead-covered dome." />
      <ListParagraph text="Ebu Bekr Mosque: One of the largest mosques in Albania, with beautiful interior decorations." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Marubi National Museum of Photography: Discover the history of Albanian photography." />
      <ListParagraph text="Historic Clock Tower: An iconic landmark in the city center." />
      <ListParagraph text="Shkodër Cathedral (St. Stephen’s Cathedral): A significant religious site with impressive architecture." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="Marubi National Museum of Photography: As mentioned, it’s a must-visit for photography enthusiasts." />
      <ListParagraph text="Shkodër Historical Museum: Offers insights into the city’s rich history and culture." />
      <ListParagraph text="Venice Art Mask Factory: Showcases beautifully crafted masks and offers workshops." />

      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Mesi Bridge: A picturesque Ottoman bridge located just outside the city." />
      <ListParagraph text="Drishti Castle: A lesser-known fortress with stunning views and historical significance." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Lake Shkodër: Perfect for a peaceful day of boating or fishing." />
      <ListParagraph text="Komani Lake: A bit further afield but worth the trip for its breathtaking fjord-like scenery." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Cycling Tours: Explore the city and surrounding countryside on a bicycle." />
      <ListParagraph text="Bird Watching: Visit the Shkodër Lake Nature Reserve, home to diverse bird species." />
      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Shkodër is known for its delicious traditional dishes such as 'Tave Krapi' (carp baked in a clay pot) and 'Byrek' (savory pastry)." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Restaurant Tradita Geg & Tosk: Enjoy authentic Albanian cuisine in a traditional setting." />
      <ListParagraph text="Bar-Restaurant San Francisco: Offers a variety of local and international dishes." />
      <ListParagraph text="Rozafa Fish Restaurant: Specializes in fresh fish from Lake Shkodër." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text="Marubi Café: A cozy spot for coffee and light snacks." />
      <ListParagraph text="Club Havana: Known for its lively atmosphere and good music." />
      <ListParagraph text="Irish Pub Shkodër: A popular spot for locals and tourists alike." />
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Hiking: Numerous trails in the Albanian Alps and around Lake Shkodër." />
      <ListParagraph text="Boating and Fishing: On Lake Shkodër and the Buna River." />
      <ListParagraph text="Cycling: Explore the scenic routes around the city and countryside." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Shkodër Jazz Festival: Held annually, attracting jazz enthusiasts from around the region." />
      <ListParagraph text="Traditional Music and Dance Performances: Often held during local festivals." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text="Old Bazaar (Pazari i Vjetër): Shop for traditional crafts, souvenirs, and local produce." />
      <ListParagraph text="Shopping Mall 'Qender': A modern shopping center with a variety of stores." />
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text="Theth National Park: Known for its stunning landscapes and traditional mountain villages." />
      <ListParagraph text="Valbona Valley: Another beautiful destination in the Albanian Alps." />
      <ListParagraph text="Montenegro: Easy day trips to nearby Montenegrin towns like Ulcinj and Bar." />
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <Paragraph text="Spring and Fall: Ideal for mild weather and fewer tourists. Early Morning: Best for visiting popular sites like Rozafa Castle to avoid crowds." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <Paragraph text="Greetings: A polite 'Mirëdita' (Good day) is appreciated. Dress Modestly: Especially when visiting religious sites." />
      <SecondTitle text="Safety Tips" />
      <Paragraph text="General Safety: Shkodër is generally safe, but be mindful of your belongings in crowded areas. Outdoor Activities: If hiking or exploring nature, carry sufficient water and inform someone of your plans." />
      <Title text="XII. Conclusion" />
      <Paragraph text="Shkodër is a city that beautifully marries its rich historical past with the vibrancy of modern Albanian culture. From the ancient Rozafa Castle to the lively streets of the Old Bazaar, Shkodër offers a unique and immersive experience. Whether you’re a history buff, nature enthusiast, or cultural explorer, Shkodër has something to captivate your interest. Embark on your journey to Shkodër and discover the timeless charm and rich heritage of this northern Albanian gem. Happy travels!" />
    </Cities>
  );
}
