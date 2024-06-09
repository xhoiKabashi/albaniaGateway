import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/berat-image.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovering Berat: The City of a Thousand Windows",
  description:
    "Explore Berat, Albania's charming and historic city. Known for its stunning Ottoman architecture, picturesque landscapes, and rich cultural heritage, Berat is a must-visit destination.",
  keywords:
    "Berat, Berat Albania, Berat attractions, Berat tourism, things to do in Berat, Berat travel guide, Berat Historical Background, Berat Top Attractions, Berat Hidden Gems, Berat Food and Drink, Berat Activities and Experiences, Berat Day Trips and Excursions, Berat Local Tips, Berat Accommodation, Berat Transportation, Berat Cultural Significance, Berat Unique Selling Points, Berat Nightlife, Berat Shopping Areas, Berat Outdoor Activities, Berat Cultural Experiences, Berat Safety Tips, Berat Local Cuisine",
  openGraph: {
    title: "Discovering Berat: The City of a Thousand Windows",
    description:
      "Explore Berat, Albania's charming and historic city. Known for its stunning Ottoman architecture, picturesque landscapes, and rich cultural heritage, Berat is a must-visit destination.",
    url: "https://albaniagateway.com/explore-cities/berat",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/berat-image.jpg",
      width: 1260,
      height: 800,
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Berat"; // Replace with actual time if needed
  const alt = "Image of Berat City";
  const mainTitle =
    "Discovering Berat: The City of a Thousand Windows (one above another Windows)"; // Replace with actual title
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
      <Paragraph text="Berat, often referred to as the 'City of a Thousand Windows', is a charming and historic city in central Albania. It is renowned for its stunning Ottoman architecture, picturesque landscapes, and rich cultural heritage. Nestled on the banks of the Osum River and surrounded by hills, Berat offers a unique blend of historical and natural beauty." />
      <Paragraph
        text="Tirana, the vibrant capital of Albania, is a city that perfectly
              blends its rich history with modern charm. Nestled between the
              Adriatic Sea and the Dajti Mountain, Tirana is a bustling
              metropolis known for its colorful architecture, lively streets,
              and welcoming atmosphere."
      />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Historical Architecture: Well-preserved Ottoman-era houses and buildings" />
      <ListParagraph text="UNESCO World Heritage Site: Recognized for its historical and cultural significance" />
      <ListParagraph text="Scenic Beauty: Picturesque views of the Osum River and the surrounding hills." />
      <ListParagraph text="Rich Cultural Heritage: Vibrant traditions, festivals, and friendly locals." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text=" “Imagine walking through narrow cobblestone streets lined with white-washed houses, each adorned with numerous large windows. The warmth of the sun glistens off the river as you explore ancient castles and mosques. Berat's timeless beauty and welcoming atmosphere make it a must-visit destination for any traveler.”" />
      {/*  */}
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <ListParagraph text="Ancient Origins: Founded in the 4th century BC as a Greek settlement." />
      <ListParagraph text="Ottoman Era: Flourished under Ottoman rule, leaving a lasting architectural legacy." />
      <ListParagraph text="20th Century: Survived through the communist regime and embraced new freedoms post-1991." />
      <SecondTitle text="Cultural Significance" />
      <ListParagraph text="Berat is a living museum of Albanian history and culture. It showcases a harmonious blend of various civilizations, including Greek, Roman, Byzantine, and Ottoman influences. The city is a testament to Albania's rich cultural tapestry and resilience." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text="Berat Castle: A historic fortress offering panoramic views of the city and the river." />
      <ListParagraph text="Gorica and Mangalem Quarters: Famous for their distinctive Ottoman houses." />
      <ListParagraph text="Onufri Museum: Housed in the Church of the Dormition of St. Mary, featuring works by the famous painter Onufri." />
      {/*  */}
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest major airport is Tirana International Airport (TIA), about 120 km away." />
      <ListParagraph text="Bus: Regular bus services connect Berat with Tirana, Durrës, and other major cities." />
      <ListParagraph text="Car: Accessible by car via SH4 and SH72, offering a scenic drive through the countryside." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Take SH4 south towards Durrës, then continue on SH72 to Berat. The journey takes about 2 hours." />
      <ListParagraph text="From Durrës: Drive southeast on SH4, then follow SH72 to Berat. This route takes approximately 1.5 hours." />
      <ListParagraph text="From Vlorë: Head northeast on SH8, then take SH4 and SH72 to Berat, about a 2-hour drive." />
      {/*  */}
      <Title text="IV. Travel Tips" />
      <ListParagraph text="Best Time to Visit: Spring and autumn for pleasant weather and fewer crowds." />
      <ListParagraph text="Road Conditions: Generally good, but be cautious of narrow streets in the old town." />
      {/*  */}
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <Paragraph text="Staying in the historical quarters of Mangalem and Gorica offers a unique experience, with easy access to major attractions. The city center also provides convenient accommodation options." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: Comfortable and often located in historic buildings." />
      <ListParagraph text="Guesthouses: Family-run establishments offering a more intimate experience." />
      <ListParagraph text="Vacation Rentals: Ideal for families or groups seeking a home-away-from-home." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Hotel Mangalemi: A charming hotel located in the heart of the historical district." />
      <ListParagraph text="Hotel Rezidenca Desaret: Known for its traditional decor and excellent views." />
      <ListParagraph text="Guesthouse Kris: Offers cozy accommodations with a personal touch." />
      {/*  */}
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Berat Castle: Explore the ancient fortress and its historic churches and buildings." />
      <ListParagraph text="Gorica Bridge: A picturesque Ottoman bridge connecting the two sides of the city." />
      <ListParagraph text="Ethnographic Museum: Housed in an 18th-century Ottoman house, showcasing local culture and history." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="King Mosque: One of the oldest mosques in Albania, dating back to the 15th century." />
      <ListParagraph text="Lead Mosque: Named for its lead-covered dome, a notable example of Ottoman architecture." />
      <ListParagraph text="Saint Michael’s Church: Perched on a hill, offering stunning views and historical insights." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="Onufri Museum: Features religious icons and artwork by the renowned painter Onufri." />
      <ListParagraph text="National Iconographic Museum: Displays a collection of Albanian icons and religious artifacts." />
      <ListParagraph text="Edward Lear Gallery: Showcases works inspired by the famous British artist’s travels in Albania." />
      {/*  */}
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Bogove Waterfall: A beautiful natural spot perfect for hiking and picnics." />
      <ListParagraph text="Tomorr Mountain: Sacred to both Christians and Muslims, offering hiking trails and panoramic views." />
      <ListParagraph text="Osumi Canyons: A stunning natural wonder for rafting and exploring." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Kisha e Shën Gjergjit: A lesser-known church with beautiful frescoes." />
      <ListParagraph text="Berat’s Secret Streets: Wander through the narrow, winding streets of the old town to discover hidden gems." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Traditional Cooking Classes: Learn to prepare Albanian dishes with local chefs." />
      <ListParagraph text="Wine Tasting: Visit local vineyards to sample Berat’s renowned wines." />
      {/*  */}

      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <ListParagraph text="Berat’s cuisine is a delightful mix of Mediterranean and Albanian flavors. Must-try dishes include:" />
      <ListParagraph text="Byrek: A savory pastry filled with cheese, meat, or spinach." />
      <ListParagraph text="Tavë Kosi: Baked lamb and rice with a yogurt sauce." />
      <ListParagraph text="Fërgesë: A dish made with peppers, tomatoes, and cheese." />
      <ListParagraph text="Vionez: Steak stuffed with Kackavall cheese and rolled up." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Restaurant Antigoni: Known for its traditional Albanian dishes and riverside location." />
      <ListParagraph text=" Homemade Food Lili: Offers home-cooked meals in a cozy setting." />
      <ListParagraph text=" Restaurant Mangalemi: A popular spot for both locals and tourists, serving a variety of local dishes." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text=" Bar Republika: A trendy bar offering great views and a lively atmosphere." />
      <ListParagraph text=" Wine Bar Osumi: Perfect for tasting local wines and enjoying a relaxed evening." />
      <ListParagraph text=" Bar Enoteka: Known for its extensive wine list and cozy ambiance." />
      {/*  */}
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text=" Hiking: Explore the trails around Tomorr Mountain and the Osumi Canyons." />
      <ListParagraph text=" Rafting: Experience the thrill of rafting in the Osumi River." />
      <ListParagraph text=" Cycling: Rent a bike and tour the scenic countryside." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text=" Folk Music and Dance: Attend local performances to experience traditional Albanian culture." />
      <ListParagraph text=" Festivals: Participate in festivals like the National Festival of Urban Folk Songs." />
      <ListParagraph text="Artisanal Workshops: Visit local artisans to see traditional crafts being made." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text=" Mangalem Quarter: Browse for souvenirs and local crafts in the historical district." />
      <ListParagraph text=" Ethnographic Museum Shop: Purchase handmade goods and traditional items." />
      <ListParagraph text=" Local Markets: Explore fresh produce, cheeses, and other local products." />
      {/*  */}
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text=" Apollonia: An ancient Greek city with well-preserved ruins." />
      <ListParagraph text=" Vlorë: A coastal city with beautiful beaches and historical sites." />
      <ListParagraph text=" Gjirokastër: Another UNESCO World Heritage Site known for its Ottoman architecture." />
      <SecondTitle text="Suggested Itineraries for Day Trips" />
      <ListParagraph text=" Berat to Apollonia: Explore the ancient ruins and enjoy a picnic in the scenic surroundings." />
      <ListParagraph text=" Berat to Vlorë: Spend a day at the beach and visit historical landmarks." />
      <ListParagraph text=" Berat to Gjirokastër: Discover the 'City of Stone' and its unique architecture." />
      {/*  */}
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <ListParagraph text=" Spring and Autumn: Ideal for exploring the city’s outdoor attractions." />
      <ListParagraph text=" Summer: Enjoy festivals and cultural events, but be prepared for warmer weather." />
      <ListParagraph text=" Winter: Quieter and cooler, perfect for a more intimate experience." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <ListParagraph text=" Greetings: A friendly 'Mirëdita' (Good day) goes a long way." />
      <ListParagraph text=" Dress Modestly: Especially when visiting religious sites." />
      <ListParagraph text=" Respect Local Customs: Show respect for local traditions and practices." />
      <SecondTitle text="Safety Tips" />
      <ListParagraph text=" Stay Hydrated: Especially in the summer months." />
      <ListParagraph text=" Secure Belongings: As in any travel destination, keep an eye on your personal items." />
      <ListParagraph text=" Local Assistance: Don’t hesitate to ask locals for help or directions; they are usually very friendly and helpful." />
      {/*  */}
      <Title text="XII. Conclusion" />
      <Paragraph text="Berat is a city that captivates with its historical charm, cultural richness, and stunning natural beauty. Whether you're exploring its ancient fortresses, savoring local cuisine, or simply soaking in the scenic views, Berat promises an unforgettable experience." />
      <Paragraph text="Berat is not just a destination; it's an experience. Take your time to wander through its historic streets, engage with its warm-hearted locals, and immerse yourself in its rich heritage." />
      <Paragraph text="Plan your visit to Berat and discover the magic of this enchanting region. Happy travels!" />
    </Cities>
  );
}
