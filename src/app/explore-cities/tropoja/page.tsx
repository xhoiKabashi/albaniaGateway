import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/tropoje.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovering Tropojë: A Hidden Treasure in Northern Albania",
  description:
    "Explore the hidden gem of Tropojë in northern Albania with our comprehensive guide. Discover its stunning natural landscapes, rich cultural heritage, and top attractions.",
  keywords:
    "Tropojë, Tropoja Albania, Tropojë attractions, Tropojë tourism, things to do in Tropojë, Tropojë travel guide",
  openGraph: {
    title: "Discovering Tropojë: A Hidden Treasure in Northern Albania",
    description:
      "Explore the hidden gem of Tropojë in northern Albania with our comprehensive guide. Discover its stunning natural landscapes, rich cultural heritage, and top attractions.",
    url: "https://albaniagateway.com/explore-cities/tropoja",
    siteName: "Albania Gateway",
    images: {
      url: "/tropoje.jpg", // Update with the correct image URL
      width: 800,
      height: 600,
    },
    locale: "en-EN",
  },
};

export default function page() {
  const estimatedReadingTime = "Tropoja"; // Replace with actual time if needed
  const alt = "Image of Tropoja landscape";
  const mainTitle =
    "Discovering Tropojë: A Hidden Treasure in Northern Albania"; // Replace with actual title
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
      <Paragraph text="Tropojë, located in the northern part of Albania, is a region renowned for its stunning natural landscapes, rich cultural heritage, and welcoming atmosphere. Nestled in the heart of the Albanian Alps, Tropojë offers a unique blend of untouched nature and traditional Albanian culture." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Spectacular Natural Beauty: The breathtaking Valbona Valley, dramatic mountain ranges, and pristine rivers." />
      <ListParagraph text="Cultural Heritage: Rich traditions, folklore, and historical sites." />
      <ListParagraph text="Adventure Tourism: Hiking, trekking, and outdoor activities in some of Albania’s most rugged and beautiful terrain." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text='"Imagine standing at the edge of the Valbona Valley, surrounded by towering peaks and untouched wilderness, feeling the fresh mountain air on your face. Tropojë is a place where adventure meets tranquility, and every visit is an unforgettable experience."' />
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <Paragraph text="Tropojë has a rich history dating back to the Illyrian period. The area has seen various rulers, including the Romans and Ottomans. During the 20th century, it played a significant role in Albania’s resistance against foreign occupation." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Tropojë is known for its deep-rooted cultural traditions, including folk music, dance, and traditional crafts. The region is also home to significant historical sites, such as ancient fortresses and traditional Albanian houses." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text="Valbona Valley National Park: A natural treasure and major tourist attraction." />
      <ListParagraph text="The Old Bazaar of Bajram Curri: A historic market showcasing traditional crafts and goods." />
      <ListParagraph text="Kulla e Mic Sokolit: A historic tower house, symbolizing Albanian resistance." />
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest major airport is Tirana International Airport (TIA), about 200 km away." />
      <ListParagraph text="Bus: Regular bus services connect Tropojë with Tirana, Shkodër, and other major cities." />
      <ListParagraph text="Car: Accessible by car via SH22, offering scenic drives through mountainous terrain." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Drive north on SH1, then take SH22 towards Bajram Curri. The journey takes approximately 5 hours." />
      <ListParagraph text="From Shkodër: Head northeast on SH1, then switch to SH22. This route takes around 4 hours." />
      <ListParagraph text="From Pristina, Kosovo: Drive south on Route 9, crossing the border into Albania and continuing on SH22, about 3 hours." />
      <Title text="IV. Travel Tips" />
      <Paragraph
        text="Best Time to Visit: Late spring to early autumn for the best weather and accessibility.
Road Conditions: Be prepared for mountain roads and varying conditions, especially in winter."
      />
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <Paragraph text="Staying in or near Bajram Curri, the main town in Tropojë, provides convenient access to local amenities and attractions. Valbona Valley also offers picturesque lodging options." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: Comfortable and often centrally located in Bajram Curri." />
      <ListParagraph text="Guesthouses: Offer a more intimate and traditional Albanian experience." />
      <ListParagraph text="Vacation Rentals: Ideal for families or groups seeking a home-away-from-home." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Hotel Tradita: Known for its hospitality and traditional decor." />
      <ListParagraph text="Guesthouse Lugu i Brahimaj: Located in Valbona, offering stunning views and cozy accommodations." />
      <ListParagraph text="Hotel Bar Restaurant Lisi: Offers modern amenities and easy access to local attractions." />
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Valbona Valley National Park: A must-see for its breathtaking scenery, hiking trails, and wildlife." />
      <ListParagraph text="Gashi River: A UNESCO World Heritage site, known for its pristine beauty." />
      <ListParagraph text="The Old Bazaar of Bajram Curri: Explore traditional crafts, local produce, and Albanian culture." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Kulla e Mic Sokolit: A historic tower house with significant cultural importance." />
      <ListParagraph text="Xhamia e Mehmet Pashë Plakut: An old mosque with beautiful architecture." />
      <ListParagraph text="Rugova Canyon: A stunning natural landmark just across the border in Kosovo, accessible from Tropojë." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="Bajram Curri Museum: Dedicated to the local hero Bajram Curri and Albanian history." />
      <ListParagraph text="Valbona Ethnographic Museum: Showcases traditional Albanian life and artifacts." />
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Cerem: A remote village offering authentic Albanian hospitality and stunning views." />
      <ListParagraph text="Vermosh: One of Albania’s northernmost villages, known for its untouched natural beauty." />
      <ListParagraph text="Rrogam: A secluded village in Valbona Valley, perfect for hikers and nature lovers." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Valbona River: A serene spot for fishing, picnics, and relaxation." />
      <ListParagraph text="Local Festivals: Participate in traditional festivals to experience Albanian culture first-hand." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Shepherding Tours: Join local shepherds in the mountains for a day." />
      <ListParagraph text="Traditional Albanian Cooking Classes: Learn to prepare local dishes from experienced cooks." />

      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Tropojë’s cuisine is hearty and flavorful, with an emphasis on fresh, local ingredients. Must-try dishes include:" />
      <ListParagraph text="Fërgesë: A traditional Albanian dish made with peppers, tomatoes, and cheese." />
      <ListParagraph text="Flia: A layered pastry typically prepared for special occasions." />
      <ListParagraph text="Fresh Trout: Caught from the local rivers and served grilled." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Restaurant Valbona: Known for its delicious local dishes and friendly atmosphere." />
      <ListParagraph text="Bar Restaurant Alpina: Offers a mix of traditional and modern cuisine with stunning views." />
      <ListParagraph text="Cafe Europa: A popular spot for coffee and light snacks in Bajram Curri." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text="Bar 'Bujtina e Gjelit': A cozy spot with traditional music and a great selection of drinks." />
      <ListParagraph text="Nightclub 'Lisi': For those looking to experience local nightlife and dance." />

      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Hiking in Valbona Valley: Numerous trails for all levels, offering breathtaking views." />
      <ListParagraph text="Fishing: Enjoy fishing in the clear waters of the Valbona River." />
      <ListParagraph text="Horseback Riding: Explore the countryside on horseback with guided tours." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Traditional Music and Dance: Attend local performances to experience Albanian folklore." />
      <ListParagraph text="Festivals: Participate in local festivals like the Valbona Festival, celebrating culture and tradition." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text="Old Bazaar of Bajram Curri: Shop for traditional crafts, textiles, and local products." />
      <ListParagraph text="Local Markets: Discover fresh produce, dairy products, and handmade goods." />

      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text="Shkodër: Explore the historic city and its landmarks, like Rozafa Castle." />
      <ListParagraph text="Komani Lake: Take a ferry ride through the stunning fjord-like landscape." />
      <ListParagraph text="Rugova Canyon in Kosovo: A short drive away, perfect for hiking and sightseeing." />
      <SecondTitle text="Suggested Itineraries for Day Trips" />
      <ListParagraph text="Tropojë to Komani Lake: Spend a day on the water, enjoying the spectacular scenery." />

      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <Paragraph
        text="Spring and Summer: Ideal for outdoor activities and exploring the natural beauty.
Autumn: Offers cooler weather and vibrant fall colors.
Winter: Less accessible but perfect for those seeking solitude and winter landscapes."
      />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <Paragraph
        text="Hospitality: Albanians are known for their warm hospitality; always greet locals respectfully.
Dress Appropriately: Modest clothing is recommended, especially when visiting religious sites."
      />
      <SecondTitle text="Safety Tips" />
      <Paragraph
        text="Mountain Safety: Always inform someone of your hiking plans and stay on marked trails.
Travel Documents: Ensure you have necessary travel documents, especially when crossing borders."
      />

      <Title text="XII. Conclusion" />
      <Paragraph text="Tropojë is a hidden treasure in northern Albania, offering a unique blend of natural beauty, rich cultural heritage, and adventure. From the stunning landscapes of Valbona Valley to the vibrant local culture, Tropojë is a destination that promises an unforgettable experience. Plan your visit to Tropojë and discover the magic of this enchanting region. Happy travels!" />
    </Cities>
  );
}
