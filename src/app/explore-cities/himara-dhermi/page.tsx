import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/dhermi.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";

export default function page() {
  const estimatedReadingTime = "Himarë and Dhërmi"; // Replace with actual time if needed
  const alt = "Image of a Church in Dhermi";
  const mainTitle =
    "Discovering Himarë and Dhërmi: Gems of the Albanian Riviera"; // Replace with actual title
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
      <Paragraph text="Himarë and Dhërmi, two picturesque coastal towns on the Albanian Riviera, are celebrated for their stunning beaches, crystal-clear waters, and charming blend of history and culture. Located along the Ionian Sea, these towns offer a serene retreat with breathtaking landscapes and a rich cultural heritage." />
      <SecondTitle text="Brief Overview of the City" />
      <ListParagraph text="Pristine Beaches: Beautiful sandy and pebble beaches with azure waters." />
      <ListParagraph text="Historic Charm: Ancient ruins, castles, and traditional stone houses." />
      <ListParagraph text="Vibrant Nightlife: Bars and beach clubs offering lively entertainment." />
      <ListParagraph text="Natural Beauty: Surrounded by mountains and lush greenery." />
      <SecondTitle text="Personal Experience" />
      <Italic text="“During my visit to Dhërmi, I spent an evening at a beachside cafe, watching the sunset paint the sky in hues of orange and pink. The tranquil waves lapping against the shore and the distant sound of traditional Albanian music created an unforgettable moment of peace and beauty.”" />
      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <ListParagraph text="Ancient Origins: Both towns have roots dating back to ancient Greek and Roman times." />
      <ListParagraph text=" Byzantine and Ottoman Eras: Influences from these periods are evident in the architecture and cultural sites." />
      <ListParagraph text=" 20th Century: Played significant roles during Albania's struggle for independence and during World War II." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Himarë and Dhërmi are culturally rich areas with a mix of Greek and Albanian influences. They are known for their traditional festivals, music, and cuisine, reflecting a diverse heritage." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text=" Himarë Castle: Offers stunning views and a glimpse into the town's history." />
      <ListParagraph text=" Monastery of Saint Theodore in Dhërmi: A significant religious and historical site." />
      <ListParagraph text="Spile Cave: An intriguing natural landmark in Himarë." />
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest major airport is Tirana International Airport, about 220 km from Himarë." />
      <ListParagraph text="Bus: Regular bus services connect Himarë and Dhërmi with Tirana, Vlorë, and Sarandë." />
      <ListParagraph text="Car: Driving is a convenient option, offering scenic coastal routes." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Take the SH4 highway southwards, then follow the coastal SH8 road. The drive takes approximately 4-5 hours." />
      <ListParagraph text="From Vlorë: Follow the SH8 coastal road south, a scenic 2-hour drive." />
      {/*  */}
      <Title text="IV. Travel Tips" />
      <ListParagraph text="Road Conditions: Generally good, but some coastal routes can be narrow and winding." />
      <ListParagraph text="Public Transport: Buses are reliable and affordable, though schedules can be limited." />
      <ListParagraph text="Local Transport: Taxis and car rentals are available for local travel." />
      <Title text="V. Where to Stay?" />
      {/*  */}
      <SecondTitle text="Neighborhood Recommendations" />
      <ListParagraph text=" Himarë Town Center: Close to the beach, restaurants, and historical sites." />
      <ListParagraph text=" Dhërmi Beach Area: Ideal for beach lovers and nightlife enthusiasts." />
      <ListParagraph text=" Vuno Village: Offers a quieter, more traditional experience." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text=" Hotels: Ranging from budget to luxury, catering to all preferences." />
      <ListParagraph text=" Hostels: Great for backpackers and budget travelers." />
      <ListParagraph text=" Vacation Rentals: Perfect for families or longer stays." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text=" Rapos Resort Hotel: A luxury option in Himarë with stunning sea views." />
      <ListParagraph text=" Hotel Summer Dream: A mid-range choice in Dhërmi, close to the beach." />
      <ListParagraph text=" Vila Kosteli: A cozy, budget-friendly option in Himarë." />
      <Title text="VI. Top Attractions" />
      {/*  */}
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text=" Gjipe Beach: A secluded beach accessible by hiking or boat, known for its clear waters and natural beauty." />
      <ListParagraph text=" Jale Beach: A popular spot for swimming and water sports, with vibrant beach bars." />
      <ListParagraph text=" Himarë Castle: A historic site offering panoramic views of the coastline." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text=" Ali Pasha Castle: Located near Porto Palermo, an impressive fortress with historical significance." />
      <ListParagraph text=" Monastery of Saint Mary in Dhërmi: A beautiful religious site with stunning architecture." />
      <ListParagraph text=" Old Himarë Village: Known for its traditional stone houses and narrow streets." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text=" Ethnographic Museum in Himarë: Showcases local history and culture." />
      <ListParagraph text=" Art Galleries: Local galleries in both towns often feature works by Albanian artists." />
      {/*  */}
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text=" Gjipe Canyon: A beautiful natural canyon perfect for hiking and exploring." />
      <ListParagraph text=" Livadi Beach: Less crowded than other beaches, offering a peaceful retreat." />
      <ListParagraph text=" Kudhës Village: A charming, traditional village near Himarë." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text=" Potami Beach: Loved by locals for its serene atmosphere and clear waters." />
      <ListParagraph text=" Llaman Beach: A quieter beach with beautiful scenery and fewer tourists." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text=" Boat Tours: Explore the coastline and nearby hidden coves." />
      <ListParagraph text=" Traditional Festivals: Experience local music, dance, and food during festivals like the Himarë Sea Festival." />
      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <ListParagraph text=" Fresh Seafood: Octopus, mussels, and fish are must-tries." />
      <ListParagraph text=" Byrek: Savory pastries filled with cheese, meat, or vegetables." />
      <ListParagraph text=" Tave Kosi: A traditional lamb and yogurt dish." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text=" Taverna Lefteri: Known for its authentic Albanian cuisine and fresh seafood in Himarë." />
      <ListParagraph text=" Luciano Restaurant: Offers a variety of Mediterranean dishes with stunning sea views in Dhërmi." />
      <ListParagraph text=" Havana Beach Bar: A popular spot for drinks and casual dining in Himarë." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text=" Folie Marine: A lively beach club in Dhërmi, perfect for dancing the night away." />
      <ListParagraph text=" Kokomo Beach Bar: Offers a relaxed atmosphere and great cocktails in Himarë." />
      <ListParagraph text=" Uji i Ftohte: A local favorite for evening drinks with a view." />
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text=" Beach Days: Enjoy sunbathing, swimming, and water sports at Himarë and Dhërmi beaches." />
      <ListParagraph text=" Hiking: Explore the trails around Gjipe Canyon and Llogara National Park." />
      <ListParagraph text="- Snorkeling and Diving: Discover the underwater beauty of the Ionian Sea." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text=" Local Festivals: Participate in traditional celebrations like the Himarë Sea Festival." />
      <ListParagraph text=" Theater Performances: Attend local productions and cultural shows." />
      <ListParagraph text=" Traditional Music and Dance: Experience Albanian folk traditions at local events." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text=" Himarë Promenade: Find souvenirs, local crafts, and fresh produce." />
      <ListParagraph text=" Dhërmi Beach Market: Offers beachwear, accessories, and local delicacies." />
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text=" Sarandë: A bustling coastal city with beautiful beaches and vibrant nightlife." />
      <ListParagraph text=" Vlorë: Known for its historical sites and stunning coastal views." />
      <ListParagraph text=" Butrint National Park: A UNESCO World Heritage site with ancient ruins and natural beauty." />
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <ListParagraph text=" Spring and Autumn: Ideal for mild weather and fewer crowds." />
      <ListParagraph text=" Summer: Perfect for beach activities but can be crowded and hot." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <ListParagraph text=" Respect Local Customs: Dress modestly when visiting religious sites." />
      <ListParagraph text=" Greeting Etiquette: A handshake is common, and locals appreciate a friendly greeting." />
      <SecondTitle text="Safety Tips" />
      <ListParagraph text=" Stay Hydrated: Especially important in the summer heat." />
      <ListParagraph text=" Watch Your Belongings: Be mindful of your valuables, especially in crowded areas." />
      <Title text="XII. Conclusion" />
      <Paragraph text="Himarë and Dhërmi are jewels of the Albanian Riviera, offering a perfect blend of natural beauty, rich history, and vibrant culture. From stunning beaches and ancient ruins to lively nightlife and traditional festivals, these towns provide an unforgettable experience for every traveler." />
      <Paragraph text="Take the time to explore Himarë and Dhërmi’s diverse offerings. Whether you're sunbathing on pristine beaches, delving into the towns' historical sites, or savoring local cuisine, there is always something new to discover. Embrace the beauty and culture of these enchanting coastal towns." />
    </Cities>
  );
}
