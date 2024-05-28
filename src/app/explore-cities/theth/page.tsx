import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/theth.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";

export default function page() {
  const estimatedReadingTime = "Theth"; // Replace with actual time if needed
  const mainTitle = "Discovering Theth: A Hidden Gem in the Albanian Alps"; // Replace with actual title
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
      <Paragraph text="Theth is a small, picturesque village located in the heart of the Albanian Alps. Renowned for its stunning natural beauty, traditional architecture, and rich cultural heritage, Theth offers visitors a unique experience in one of Albania’s most pristine and untouched regions. Nestled in a valley surrounded by towering peaks, Theth is a haven for nature lovers, adventure seekers, and anyone looking to escape the hustle and bustle of city life." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Breathtaking Landscapes: Dramatic mountains, crystal-clear rivers, and lush forests." />
      <ListParagraph text="Rich Cultural Heritage: Traditional stone houses, unique customs, and folklore." />
      <ListParagraph text="Outdoor Activities: Excellent hiking trails, including the famous Valbona-Theth trail." />
      <ListParagraph text="Tranquility and Seclusion: A remote and peaceful getaway from urban centers." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text='"Imagine waking up to the sound of a rushing river, stepping outside your traditional stone house to see mist lifting from the mountains, and spending your day exploring hidden waterfalls and ancient trails. Theth offers an enchanting escape into nature, where every moment feels like a step back in time."' />
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <Paragraph text="Theth has been inhabited since ancient times, with its history closely tied to the traditional ways of the Albanian highlanders, or 'Malësorët'. The area was relatively isolated for centuries, which helped preserve its unique cultural practices and way of life. During the communist era, Theth was designated as a National Park to protect its natural beauty and cultural heritage." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Theth is a symbol of Albanian highland culture, known for its distinctive stone houses, wooden towers (known as 'Kulla'), and vibrant traditions. The village is a living museum of Albanian mountain life, where ancient customs are still practiced today." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text="Theth Church: A historic stone church that stands as a testament to the village's long-standing Christian heritage." />
      <ListParagraph text="Kulla of Theth: Traditional defensive tower houses that offer insight into the village's past." />
      <ListParagraph text="Lock-in Tower (Kulla e Ngujimit): A unique historical structure used in the traditional Albanian practice of blood feuds." />
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Air: The nearest airport is Tirana International Airport (TIA), about 170 km from Theth." />
      <ListParagraph text="Bus: Buses run from Tirana to Shkodër, where you can catch a minibus or arrange a private transfer to Theth." />
      <ListParagraph text="Car: Driving is a popular option, though the road can be challenging. A 4x4 vehicle is recommended for the last stretch." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Drive north on the A1/E762 highway to Shkodër, then follow the signs to Theth. The journey takes about 4-5 hours." />
      <ListParagraph text="From Shkodër: The drive to Theth takes approximately 2-3 hours, depending on road conditions." />
      <Title text="IV. Travel Tips" />
      <Paragraph text="Traveling to Theth requires some preparation. Ensure your vehicle is suitable for mountain roads, especially in winter. Alternatively, consider joining a guided tour to simplify logistics. During peak season, book accommodations and transfers in advance to avoid disappointment." />
      <Title text="V. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <Paragraph text="Theth is a small village, so most accommodations are within walking distance of major attractions. Staying near the village center offers convenient access to the main sites and trails." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Guesthouses: The most common type of accommodation, offering cozy rooms and home-cooked meals." />
      <ListParagraph text="Hotels: A few small hotels provide more amenities and comfort." />
      <ListParagraph text="Vacation Rentals: Ideal for families or groups seeking more privacy and space." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Guesthouse Rupa: A charming guesthouse with comfortable rooms and stunning views." />
      <ListParagraph text="Bujtina Polia: Known for its warm hospitality and delicious traditional food." />
      <ListParagraph text="Villa Gjecaj: Offers modern amenities in a traditional setting, with beautiful garden views." />
      <Title text="VI. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Theth National Park: Explore the park’s diverse flora and fauna, along with its spectacular landscapes." />
      <ListParagraph text="Blue Eye of Theth (Syri i Kaltër): A mesmerizing natural spring with crystal-clear blue water." />
      <ListParagraph text="Grunas Waterfall: A stunning 30-meter-high waterfall, perfect for a refreshing break during a hike." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Theth Church: An iconic landmark that offers a glimpse into the village's spiritual heritage." />
      <ListParagraph text="Lock-in Tower (Kulla e Ngujimit): Learn about the history of blood feuds and traditional highland justice." />
      <SecondTitle text="Museums and Galleries" />
      <Paragraph text="Theth does not have traditional museums, but the entire village serves as a living museum of Albanian highland culture. The Lock-in Tower and local guesthouses often display historical artifacts and traditional items." />
      <Title text="VII. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Nderlysa: A small hamlet near Theth, home to the stunning Blue Eye of Kapreja." />
      <ListParagraph text="Peaks of the Balkans Trail: A challenging but rewarding trail for experienced hikers, offering unparalleled views." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Local Villages: Explore nearby villages like Nderlysa and Rragam to experience authentic rural life." />
      <ListParagraph text="Albanian Hospitality: Engage with locals and learn about their customs and traditions." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Traditional Highland Cooking: Participate in a cooking class to learn how to prepare local dishes." />
      <ListParagraph text="Guided Nature Walks: Join a local guide for a deeper understanding of the area's natural and cultural history." />
      <Title text="VIII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Theth's cuisine is hearty and traditional, featuring dishes like 'Tavë Dheu' (baked meat with spices), 'Fërgesë' (a dish made with peppers, tomatoes, and cheese), and freshly baked bread." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Bujtina Polia: Known for its delicious traditional meals and cozy atmosphere." />
      <ListParagraph text="Guesthouse Rupa: Offers home-cooked meals made from locally sourced ingredients." />
      <ListParagraph text="Villa Gjecaj: Provides a variety of traditional dishes in a beautiful setting." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <Paragraph text="Theth is more about tranquil evenings by the fire than nightlife. Most guesthouses offer cozy spaces to relax with a drink after a day of exploring." />
      <Title text="IX. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Hiking: Explore trails like the Valbona-Theth trail and the path to Grunas Waterfall." />
      <ListParagraph text="Fishing: Enjoy fishing in the crystal-clear waters of the Shala River." />
      <ListParagraph text="Swimming: Take a dip in the Blue Eye of Theth or other natural pools." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Traditional Music and Dance: Experience local music and dance during festivals or special events." />
      <ListParagraph text="Handicrafts: Purchase handmade crafts and souvenirs from local artisans." />
      <SecondTitle text="Shopping Areas and Markets" />
      <Paragraph text="Theth has a few small shops selling local products. For a broader selection, consider visiting the markets in Shkodër." />
      <Title text="X. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text="Valbona Valley: Known for its stunning landscapes and hiking opportunities." />
      <ListParagraph text="Shkodër: Explore this historic city with its own set of attractions, including Rozafa Castle." />
      <Title text="XI. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <Paragraph
        text="Spring and Summer: Ideal for hiking and outdoor activities.
Autumn: Beautiful fall colors and fewer tourists.
Winter: For a serene, snowy landscape, though some roads may be difficult to traverse."
      />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <Paragraph
        text="Respect Traditions: Theth has a strong sense of tradition, so be respectful of local customs.
Dress Modestly: Especially in the village and religious sites."
      />
      <SecondTitle text="Safety Tips" />
      <Paragraph
        text="Prepare for Weather: Theth’s weather can be unpredictable, so pack accordingly.
Stay on Trails: When hiking, stick to marked paths and inform someone of your plans."
      />
      <Title text="XII. Conclusion" />
      <Paragraph text="Theth is a hidden gem that offers a perfect blend of natural beauty, cultural richness, and serene tranquility. Whether you're exploring ancient trails, marveling at cascading waterfalls, or immersing yourself in local traditions, Theth promises an unforgettable experience. This village, with its breathtaking landscapes and welcoming locals, is a must-visit destination for any traveler seeking a unique and enriching adventure. Embark on a journey to Theth and discover the timeless charm of this enchanting village in the Albanian Alps. Happy travels!" />
    </Cities>
  );
}
