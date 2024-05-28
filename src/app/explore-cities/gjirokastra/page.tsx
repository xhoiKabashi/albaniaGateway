import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/gjirokaster-image.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";

export default function page() {
  const estimatedReadingTime = "Gjirokastra"; // Replace with actual time if needed
  const mainTitle = "Discovering Gjirokastra: The Stone City of Albania"; // Replace with actual title
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
      <Paragraph text="Gjirokastër, often called the 'City of Stone,' is a captivating UNESCO World Heritage site located in southern Albania. Known for its well-preserved Ottoman architecture and rich history, Gjirokastër offers a unique blend of cultural heritage and natural beauty, making it a must-visit destination for travelers." />
      <SecondTitle text="Brief Overview of the City" />
      <ListParagraph text="UNESCO World Heritage Site: Recognized for its outstanding universal value." />
      <ListParagraph text="Historic Ottoman Architecture: Featuring distinctive stone houses and cobblestone streets." />
      <ListParagraph text="Stunning Landscapes: Nestled in the Drino River valley, surrounded by mountains" />
      <ListParagraph text="Cultural Richness: Home to festivals, traditional music, and vibrant local culture." />
      <SecondTitle text="Personal Experience" />
      <Italic text="“Walking through Gjirokastër's narrow, winding streets feels like stepping back in time. I remember my first visit to the city, where the scent of fresh burek and the sound of traditional folk music filled the air, creating an atmosphere that was both enchanting and timeless.”" />
      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <ListParagraph text=" Ancient Origins: Gjirokastër's history dates back to the 4th century BC, with roots in ancient Greek civilization." />
      <ListParagraph text=" Ottoman Era: Flourished under Ottoman rule from the 15th century, becoming a major center of commerce and culture." />
      <ListParagraph text="20th Century: Played a significant role in Albania's resistance during World War II." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Gjirokastër is a cultural mosaic, reflecting a blend of various influences over centuries. Its rich traditions, from folk music to craftsmanship, make it a vital repository of Albanian heritage." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text=" Gjirokastër Castle: A massive fortress offering panoramic views and a museum." />
      <ListParagraph text="Zekate House: An example of grand Ottoman architecture, open to visitors." />
      <ListParagraph text=" Ethnographic Museum: Housed in the birthplace of Albania's former dictator, Enver Hoxha, showcasing traditional artifacts." />
      {/*  */}
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest major airport is Tirana International Airport, about 230 km away." />
      <ListParagraph text="Bus: Regular bus services connect Gjirokastër to Tirana, Saranda, and other cities." />
      <ListParagraph text="Car: Driving offers flexibility and the chance to enjoy scenic routes." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Take the A2/E853 highway southwards, about a 3.5-hour drive." />
      <ListParagraph text="From Saranda: Follow the SH8 and SH99 roads, approximately 1.5 hours." />
      {/*  */}
      <Title text="IV. Travel Tips" />

      <ListParagraph text="Road Conditions: Roads are generally good, but be cautious in mountainous areas." />

      <ListParagraph text="Public Transport: Buses are reliable and affordable." />

      <ListParagraph text="Local Transport: Taxis and rental cars are available for local travel." />
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />

      <ListParagraph text="Old Bazaar Area: Close to major attractions, full of character and charm." />

      <ListParagraph text=" Castle Vicinity: Offers stunning views and historical ambiance." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text=" Hotels: Ranging from budget to luxury." />

      <ListParagraph text="Hostels: Ideal for backpackers and budget travelers." />

      <ListParagraph text="Vacation Rentals: Great for longer stays or larger groups." />
      <SecondTitle text="Specific Hotel Recommendations" />

      <ListParagraph text=" Hotel Gjirokastër: A mid-range option with comfortable amenities." />

      <ListParagraph text="Hotel Kalemi: Offers a traditional experience with modern comforts." />
      <ListParagraph text=" Stone City Hostel: Popular among younger travelers for its friendly atmosphere." />
      {/*  */}
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text=" Gjirokastër Castle: Dominates the city skyline with its impressive size and history." />
      <ListParagraph text="Old Bazaar: A bustling marketplace with shops and cafes." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text=" Skenduli House: A well-preserved example of Ottoman-era architecture." />
      <ListParagraph text=" St. Michael’s Church: A beautiful 18th-century church." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text=" Gjirokastër Museum: Located in the castle, showcasing the city’s history." />
      <ListParagraph text=" Ismail Kadare's House: Celebrates the life of Albania’s most famous writer." />
      <Title text="VII. Hidden Gems" />
      {/*  */}
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Antigonea Archaeological Park: Ruins of an ancient city, offering a glimpse into the past." />
      <ListParagraph text=" Cold War Tunnel: A hidden underground bunker from the Communist era." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text=" Ali Pasha Bridge: A lesser-known but picturesque spot." />
      <ListParagraph text=" Viroi Lake: A serene location just outside the city." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text=" Folklore Festivals: Participate in traditional music and dance events." />
      <ListParagraph text=" Cooking Classes: Learn to make traditional Albanian dishes." />
      <Title text="VIII. Food and Drink" />
      {/*  */}
      <SecondTitle text="Local Cuisine Specialties" />
      <ListParagraph text=" Qifqi: Rice balls mixed with herbs and spices." />
      <ListParagraph text=" Burek: Savory pastries filled with cheese, meat, or spinach." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text=" Taverna Kuka: Offers traditional dishes with a modern twist." />
      <ListParagraph text=" Restaurant Kujtimi: Known for its hearty, homemade meals." />
      <ListParagraph text=" Bar Restorant Gjirokastra: Great for local cuisine and ambiance." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text=" Café Bar Çajupi: A lively spot with a good selection of drinks." />
      <ListParagraph text=" Kantina Wine Bar: Perfect for wine lovers, offering local wines." />
      <Title text="IX. Activities and Experiences" />
      {/*  */}
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text=" Drino Valley Hikes: Explore the beautiful landscapes and scenic trails." />
      <ListParagraph text=" Viroi Lake: Enjoy a relaxing day by the water." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text=" Gjirokastër National Folklore Festival: Held every five years, a showcase of traditional music and dance." />
      <ListParagraph text=" Local Handicrafts: Visit workshops to see traditional crafts being made." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text=" Old Bazaar: Find unique souvenirs, antiques, and handmade goods." />
      <ListParagraph text=" Weekly Farmers Market: Sample fresh local produce and delicacies." />
      <Title text="X. Day Trips and Excursions" />
      {/*  */}
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text=" Blue Eye Spring: A stunning natural spring with crystal-clear waters." />
      <ListParagraph text=" Butrint National Park: An archaeological site with ancient ruins." />
      <Title text="XI. Local Tips" />
      {/*  */}
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <ListParagraph text=" Spring and Autumn: Ideal for mild weather and fewer crowds." />
      <ListParagraph text=" Summer: Vibrant atmosphere but can be hot and busy." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <ListParagraph text=" Respect Local Customs: Dress modestly when visiting religious sites." />
      <ListParagraph text=" Greeting Etiquette: A handshake is common, and locals appreciate a friendly greeting." />
      <SecondTitle text="Safety Tips" />
      <ListParagraph text=" Stay Hydrated: Especially important in the summer heat." />
      <ListParagraph text=" Watch Your Step: Cobblestone streets can be uneven and slippery." />
      <Title text="XII. Conclusion" />
      {/*  */}
      <Paragraph text="Gjirokastër is a treasure trove of history, culture, and natural beauty. Its unique architecture, fascinating museums, and vibrant local life offer an unforgettable experience for travelers. Whether you're a history buff, a nature lover, or a cultural enthusiast, Gjirokastër has something to offer. Take the time to explore its winding streets, taste its delicious cuisine, and immerse yourself in its rich heritage." />
    </Cities>
  );
}
