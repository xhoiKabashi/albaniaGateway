import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/pogradec.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovering Pogradec: A Lakeside Gem in Albania",
  description:
    "Explore Pogradec, a charming city on the shores of Lake Ohrid in southeastern Albania. Discover its natural beauty, rich history, and cultural heritage. Plan your trip and experience the tranquility of Pogradec.",
  keywords:
    "Pogradec, Pogradec Albania, Lake Ohrid, Pogradec attractions, Albania travel, Pogradec tourism, Albanian culture",
  openGraph: {
    title: "Discovering Pogradec: A Lakeside Gem in Albania",
    description:
      "Explore Pogradec, a charming city on the shores of Lake Ohrid in southeastern Albania. Discover its natural beauty, rich history, and cultural heritage. Plan your trip and experience the tranquility of Pogradec.",
    url: "https://albaniagateway.com/explore-cities/pogradec",
    siteName: "Albania Gateway",
    images: {
      url: "/pogradec.jpg", // Update with the correct image URL
      width: 800,
      height: 600,
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Pogradec"; // Replace with actual time if needed
  const alt = "Image of Pogradec from above";
  const mainTitle = "Discovering Pogradec: A Lakeside Gem in Albania"; // Replace with actual title
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
      <Paragraph text="Pogradec is a charming city located on the shores of Lake Ohrid in southeastern Albania. Known for its stunning natural beauty, rich cultural heritage, and relaxing atmosphere, Pogradec is a favorite destination for both locals and tourists. The city's picturesque landscapes, crystal-clear waters, and welcoming community make it an ideal spot for a peaceful retreat." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Scenic Beauty: Nestled by the tranquil waters of Lake Ohrid, surrounded by lush hills and mountains." />
      <ListParagraph text="Cultural Richness: A mix of historical influences and traditions." />
      <ListParagraph text="Recreational Activities: Ideal for swimming, boating, and fishing." />
      <ListParagraph text="Gastronomic Delights: Renowned for its delicious local cuisine, especially the famous Koran fish." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text="“Imagine sipping a coffee on a sunny lakeside promenade, the gentle sound of waves lapping at the shore, and the majestic mountains in the distance. In Pogradec, every moment is a postcard-worthy experience, inviting you to relax and soak in the serene beauty of one of Albania’s most beloved lakeside towns.”" />
      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <Paragraph text="Pogradec has a rich history dating back to ancient times. It was an important settlement during the Illyrian and Roman periods. In the medieval era, it became a vital trade and cultural center. The city saw various rulers, including the Byzantines, Bulgarians, and Ottomans, each leaving their mark on the local culture and architecture." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Pogradec is not just about natural beauty; it's also a cultural hub. The city is home to several important cultural events, including the annual “Lake Day” festival, which celebrates the heritage and natural beauty of Lake Ohrid. The area is also known for its traditional music, dance, and crafts." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text="The Castle of Pogradec: Ruins of a medieval castle offering panoramic views of the city and lake." />
      <ListParagraph text="Drilon Springs: Beautiful natural springs located just outside the city." />
      <ListParagraph text="Tushemisht Village: A picturesque village known for its traditional architecture and beautiful lakeside setting." />
      {/*  */}
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest airport is Tirana International Airport (TIA), about 140 km from Pogradec." />
      <ListParagraph text="Bus: Regular buses connect Pogradec with major cities like Tirana, Korçë, and Elbasan." />
      <ListParagraph text="Car: Driving to Pogradec is a scenic experience, with well-maintained roads offering beautiful views." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Drive southeast on the SH3 highway. The journey takes around 2-3 hours." />
      <ListParagraph text="From Korçë: Take the SH75 road north to Pogradec, approximately a 45-minute drive." />
      <ListParagraph text="From Elbasan: Follow the SH3 road southeast for about 1.5 hours." />
      <Title text="IV. Travel Tips" />
      <ListParagraph text="Seasonal Considerations: The best time to visit is during late spring to early autumn when the weather is warm and pleasant." />
      <ListParagraph text="Road Conditions: Ensure your vehicle is in good condition for the hilly terrain. Winter driving may require snow chains." />
      {/*  */}
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <Paragraph text="Staying near the lakeside promenade offers easy access to the beach, restaurants, and main attractions. The village of Tushemisht is another excellent option, providing a more traditional and tranquil setting." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: Comfortable and convenient, often with lakeside views." />
      <ListParagraph text="Guesthouses: Cozy and homely, providing a more personal experience." />
      <ListParagraph text="Vacation Rentals: Ideal for families or groups looking for more space and amenities." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Hotel Pogradeci: A modern hotel with beautiful lake views and excellent facilities." />
      <ListParagraph text="Enkelana Hotel: Known for its comfortable rooms and prime lakeside location." />
      <ListParagraph text="Vila Sigal: A charming guesthouse with traditional decor and warm hospitality." />
      {/*  */}
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Lake Ohrid: Enjoy the clear waters for swimming, boating, or simply relaxing on the shore." />
      <ListParagraph text="Drilon Springs: Visit this beautiful natural area with its serene waters and lush greenery." />
      <ListParagraph text="Tushemisht Village: Explore this traditional village with its charming streets and friendly locals." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Pogradec Castle: Climb up to the ruins for a breathtaking view of the city and lake." />
      <ListParagraph text="Sveti Naum Monastery: Located just across the lake in North Macedonia, accessible by boat." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="National Museum of Medieval Art (in nearby Korçë): Features an impressive collection of Byzantine and post-Byzantine art." />
      <ListParagraph text="Museum of Natural Sciences: Learn about the local flora and fauna, especially the unique species found in and around Lake Ohrid." />
      {/*  */}
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Lini Peninsula: A small, picturesque village on a peninsula jutting into Lake Ohrid, known for its Roman mosaics and stunning views." />
      <ListParagraph text="Golik Bridge: A beautiful stone bridge hidden in the lush landscape around Pogradec." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Daily Fresh Markets: Explore the local markets for fresh produce, fish, and traditional Albanian products." />
      <ListParagraph text="Homemade Wine Tastings: Visit local vineyards and enjoy tastings of homemade wines." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Boat Rides on Lake Ohrid: Take a boat ride to enjoy the serene waters and visit nearby attractions like the Sveti Naum Monastery." />
      <ListParagraph text="Traditional Cooking Classes: Learn how to prepare traditional Albanian dishes with local chefs." />
      {/*  */}
      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Pogradec is famous for its freshwater fish, particularly the Koran (a type of trout). Other specialties include 'Tavë Kosi' (baked lamb with yogurt) and 'Pispili' (cornbread with leeks)." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Restaurant Pogradeci: Offers delicious local dishes with a stunning view of the lake." />
      <ListParagraph text="Dallga Restaurant: Known for its fresh fish and traditional Albanian cuisine." />
      <ListParagraph text="Hotel Millennium Restaurant: Provides a fine dining experience with a variety of local and international dishes." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text="Bar Restorant Kashta: A great spot for evening drinks with a lakeside view." />
      <ListParagraph text="Sherlock Irish Pub Café: Popular with both locals and tourists for its lively atmosphere and good music." />
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Hiking: Explore the trails around Lake Ohrid and the surrounding mountains." />
      <ListParagraph text="Swimming: Enjoy the clear waters of the lake, especially in the summer months." />
      <ListParagraph text="Fishing: Try your hand at fishing in one of Europe’s oldest and deepest lakes." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Lake Day Festival: Participate in this vibrant celebration of local culture, music, and traditions." />
      <ListParagraph text="Handicraft Markets: Visit local markets to see and purchase traditional crafts and souvenirs." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text="Local Markets: Discover fresh produce, local cheeses, and handmade crafts." />
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text="Korçë: Known for its beautiful architecture, museums, and vibrant cultural scene." />
      <ListParagraph text="Voskopoja: A historic village with ancient churches and stunning mountain scenery." />
      <SecondTitle text="Suggested Itineraries for Day Trips" />
      <ListParagraph text="Lake Ohrid Boat Tour: Take a boat tour to visit Sveti Naum Monastery and enjoy the scenic beauty of the lake." />
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <ListParagraph text="Spring and Summer: Perfect for outdoor activities and enjoying the lake." />
      <ListParagraph text="Autumn: Beautiful fall colors and a quieter atmosphere." />
      <ListParagraph text="Winter: Fewer tourists, but be prepared for colder weather." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <ListParagraph text="Hospitality: Albanians are known for their hospitality; be polite and respectful." />
      <ListParagraph text="Dress Modestly: When visiting religious sites, ensure your clothing is modest." />
      <SecondTitle text="Safety Tips" />
      <ListParagraph text="Lake Safety: Always be cautious when swimming or boating in the lake." />
      <ListParagraph text="Road Conditions: If driving, be aware of the road conditions, especially in winter." />
      <Title text="XII. Conclusion" />
      <Paragraph text="Pogradec is a delightful destination that combines natural beauty, rich history, and vibrant culture. Whether you’re drawn by the serene waters of Lake Ohrid, the fascinating historical sites, or the warm hospitality of the locals, Pogradec offers an unforgettable experience. So pack your bags, and get ready to explore one of Albania’s most charming lakeside cities." />
      <Paragraph text="Embark on a journey to Pogradec and discover the beauty and tranquility of this lakeside gem. Happy travels!" />
    </Cities>
  );
}
