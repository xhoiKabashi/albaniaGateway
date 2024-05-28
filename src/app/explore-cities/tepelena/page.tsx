import React from "react";
import Cities from "@/components/cities/Cities";
import imageSrc from "../../../../public/Vjosa.jpg";
import {
  Title,
  SecondTitle,
  Paragraph,
  ListParagraph,
  Italic,
} from "@/components/cities/TextCities";

export default function page() {
  const estimatedReadingTime = "Tepelena"; // Replace with actual time if needed
  const mainTitle =
    "Discovering Tepelenë: The birthplace of Ali Pasha Tepelena"; // Replace with actual title
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
      <Paragraph text="Nestled amidst the stunning landscapes of southern Albania, Tepelenë is a picturesque town with a rich history and a vibrant culture. Surrounded by rugged mountains and lush greenery, Tepelenë offers visitors a tranquil escape and a glimpse into traditional Albanian life." />
      <SecondTitle text="Unique Selling Points" />
      <ListParagraph text="Scenic Beauty: Situated along the Vjosë River, Tepelenë boasts breathtaking views of the surrounding mountains and valleys." />
      <ListParagraph text="Historical Significance: Home to historic landmarks and sites, including the birthplace of one of Albania's most renowned figures, Ali Pasha Tepelena." />
      <ListParagraph text="Cultural Heritage: Vibrant traditions, folklore, and warm hospitality make Tepelenë a welcoming destination for travelers." />
      <SecondTitle text="Personal Anecdote or Hook" />
      <Italic text='"As I wandered through the streets of Tepelenë, I was enchanted by the towns charm and tranquility. From the picturesque riverfront to the ancient fortress overlooking the valley, every corner of Tepelenë tells a story of its rich history and cultural heritage. My visit to this hidden gem left me with memories that will last a lifetime."' />
      <Title text="II. Historical Background" />
      <SecondTitle text="Key Historical Events" />
      <ListParagraph text="Ali Pasha Tepelena: The town is closely associated with Ali Pasha Tepelena, a prominent Ottoman ruler known for his influence in the region." />
      <ListParagraph text="Ottoman Rule: Tepelenë flourished under Ottoman rule, serving as an important administrative and military center." />
      <SecondTitle text="Cultural Significance" />
      <Paragraph text="Tepelenë's cultural heritage is reflected in its architecture, traditions, and way of life. The town's historic sites and cultural events offer visitors a glimpse into its rich and diverse past." />
      <SecondTitle text="Important Landmarks" />
      <ListParagraph text="Tepelenë Castle: Overlooking the town, the castle offers panoramic views of the surrounding countryside and the Vjosë River." />
      <ListParagraph text="Ali Pasha's Bridge: A historic Ottoman bridge spanning the Vjosë River, named after the town's most famous resident." />
      <ListParagraph text="Ali Pasha's Birthplace: Visit the birthplace of Ali Pasha Tepelena, now a museum dedicated to his life and legacy." />
      <Title text="III. How to Get There?" />
      <SecondTitle text="Transportation Options" />
      <ListParagraph text="Bus: Regular bus services connect Tepelenë with major cities like Tirana, Gjirokastër, and Sarandë." />
      <ListParagraph text="Car: Accessible by car via SH4, offering a scenic drive through the Vjosë Valley." />
      <SecondTitle text="Directions from Major Nearby Cities" />
      <ListParagraph text="From Tirana: Take the SH4 south towards Gjirokastër, then follow signs to Tepelenë. The journey takes approximately 3-4 hours." />
      <ListParagraph text="From Gjirokastër: Head north on SH4, then follow signs to Tepelenë, about a 1-hour drive." />
      <SecondTitle text="Travel Tips" />
      <Paragraph text="Road Conditions: The roads leading to Tepelenë are generally well-maintained, but some rural areas may have narrow and winding roads. Local Transport: Taxis and minivans are available for shorter trips within the town and surrounding areas." />
      <Title text="IV. Where to Stay?" />
      <SecondTitle text="Neighborhood Recommendations" />
      <Paragraph text="Staying in the town center allows easy access to shops, restaurants, and attractions. Riverside accommodations offer beautiful views of the Vjosë River and the surrounding mountains." />
      <SecondTitle text="Types of Accommodations" />
      <ListParagraph text="Hotels: Comfortable and convenient options for travelers." />
      <ListParagraph text="Guesthouses: Provides a cozy and authentic Albanian experience." />
      <ListParagraph text="Vacation Rentals: Ideal for families or groups looking for more space and privacy." />
      <SecondTitle text="Specific Hotel Recommendations" />
      <ListParagraph text="Hotel Vjosa: Centrally located with modern amenities and stunning views of the river and mountains." />
      <ListParagraph text="Guesthouse Tepelena: Offers traditional Albanian hospitality in a charming setting, with home-cooked meals and personalized service." />
      <ListParagraph text="Villa Riviera: Riverside accommodations with a peaceful atmosphere and easy access to the town center." />
      <Title text="V. Top Attractions" />
      <SecondTitle text="Major Tourist Sites" />
      <ListParagraph text="Tepelenë Castle: Explore the ruins of this ancient fortress and enjoy panoramic views of the town and surrounding countryside." />
      <ListParagraph text="Ali Pasha's Bridge: Admire the architecture of this historic Ottoman bridge and learn about its significance in the region's history." />
      <ListParagraph text="Ali Pasha's Birthplace Museum: Discover the life and legacy of Ali Pasha Tepelena through exhibits and artifacts." />
      <SecondTitle text="Must-See Landmarks" />
      <ListParagraph text="Old Bazaar: Wander through the narrow streets and discover traditional shops selling local crafts, souvenirs, and handmade products." />
      <ListParagraph text="Vjosë River Promenade: Enjoy a leisurely stroll along the riverfront and take in the scenic views of the surrounding mountains and valleys." />
      <ListParagraph text="Ethnographic Museum: Learn about the history and culture of Tepelenë and its people through displays of traditional clothing, tools, and household items." />
      <SecondTitle text="Museums and Galleries" />
      <ListParagraph text="Ali Pasha's Birthplace Museum: Offers insight into the life and times of Ali Pasha Tepelena, with exhibits on his reign, achievements, and legacy." />
      <ListParagraph text="Ethnographic Museum: Showcases artifacts and objects related to the history, culture, and traditions of Tepelenë and its inhabitants." />
      <Title text="VI. Hidden Gems" />
      <SecondTitle text="Off-the-Beaten-Path Locations" />
      <ListParagraph text="Gur i Kuq Cave: Explore this hidden cave located near Tepelenë, known for its stunning rock formations and underground chambers." />
      <ListParagraph text="Shepherd's Hut: Experience traditional Albanian hospitality by spending a night in a shepherd's hut in the mountains surrounding Tepelenë." />
      <SecondTitle text="Local Favorites" />
      <ListParagraph text="Raki Tasting: Sample locally-produced raki, a traditional Albanian spirit, and learn about the distillation process from local experts." />
      <ListParagraph text="Folklore Evenings: Attend a traditional music and dance performance to experience the vibrant culture of Tepelenë and its people." />
      <SecondTitle text="Unique Experiences" />
      <ListParagraph text="Cooking Classes: Learn to prepare traditional Albanian dishes using fresh, local ingredients, and savor the flavors of homemade cuisine." />
      <ListParagraph text="Nature Walks: Explore the scenic trails and hiking paths surrounding Tepelenë, and discover hidden waterfalls, caves, and viewpoints." />
      <Title text="VII. Food and Drink" />
      <SecondTitle text="Local Cuisine Specialties" />
      <Paragraph text="Tepelenë is known for its delicious cuisine, influenced by Ottoman and Mediterranean flavors. Must-try dishes include:" />
      <ListParagraph text="Tavë Kosi: Baked lamb with yogurt and rice, a classic Albanian dish." />
      <ListParagraph text="Byrek: Savory pastry filled with cheese, spinach, or meat, a popular street food snack." />
      <ListParagraph text="Pilaf: Rice dish cooked with meat and vegetables, often served with a side of salad and yogurt." />
      <SecondTitle text="Recommended Restaurants and Cafes" />
      <ListParagraph text="Restaurant Vjosa: Offers a diverse menu of traditional Albanian dishes and international cuisine, with riverside seating and panoramic views." />
      <ListParagraph text="Restaurant Oda e Hasan Beut: Enjoy authentic Albanian cuisine in a traditional setting." />
      <ListParagraph text="Café Tepelena: Relax with a coffee or tea while enjoying views of the town and surrounding mountains from the outdoor terrace." />
      <SecondTitle text="Popular Bars and Nightlife Spots" />
      <ListParagraph text="Restaurant “Uji i Ftohtë Tepelenë”: Enjoy cocktails, beers, and wines in a cozy setting, perfect for unwinding after a day of exploration." />
      <Title text="VIII. Activities and Experiences" />
      <SecondTitle text="Outdoor Activities" />
      <ListParagraph text="Hiking: Explore the surrounding mountains and valleys on scenic hiking trails, with opportunities to discover hidden waterfalls, caves, and panoramic viewpoints." />
      <ListParagraph text="Rafting: Experience adrenaline-pumping rafting adventures on the Vjosë River, with thrilling rapids and stunning scenery along the way." />
      <ListParagraph text="Fishing: Cast your line in the Vjosë River and try your luck at catching trout, carp, and other freshwater fish." />
      <SecondTitle text="Cultural Experiences" />
      <ListParagraph text="Folklore Evenings: Immerse yourself in Albanian culture and traditions with live music and dance performances showcasing local folklore and customs." />
      <ListParagraph text="Artisan Workshops: Learn traditional crafts such as pottery, weaving, and woodcarving from local artisans, and create your own souvenirs to take home." />
      <SecondTitle text="Shopping Areas and Markets" />
      <ListParagraph text="Old Bazaar: Browse through the stalls and shops in the historic Old Bazaar, where you'll find handmade crafts, souvenirs, textiles, and local delicacies." />
      <ListParagraph text="Weekly Market: Experience the hustle and bustle of the weekly market, where locals sell fresh produce, cheeses, honey, handicrafts, and more." />
      <Title text="IX. Day Trips and Excursions" />
      <SecondTitle text="Nearby Towns or Attractions Worth Visiting" />
      <ListParagraph text="Gjirokastër: Explore the UNESCO-listed old town of Gjirokastër, with its well-preserved Ottoman architecture, historic sites, and museums." />
      <ListParagraph text="Blue Eye Spring: Discover this natural wonder with its crystal-clear waters and lush surroundings, perfect for swimming and picnicking." />
      <ListParagraph text="Nivicë: Discover the roof of Labëria between history and natural beauty." />
      <Title text="X. Local Tips" />
      <SecondTitle text="Best Times to Visit Specific Sites" />
      <Paragraph text="Spring and Autumn: Ideal for outdoor activities, with mild temperatures and blooming landscapes. Summer: Perfect for rafting and swimming in the river, but be prepared for hot weather. Winter: Enjoy a peaceful getaway and cozy atmosphere, but be aware that some outdoor activities may be limited." />
      <SecondTitle text="Cultural Norms and Etiquette" />
      <Paragraph text="Respect Local Customs: Be mindful of cultural traditions and etiquette, especially when visiting religious sites or interacting with locals. Dress Modestly: In more rural areas, it's appreciated to dress modestly, especially when visiting mosques or traditional villages." />
      <SecondTitle text="Safety Tips" />
      <Paragraph text="Stay Hydrated: Especially during outdoor activities like hiking and rafting, drink plenty of water to stay hydrated. Follow Local Advice: If engaging in outdoor activities, such as hiking or rafting, always follow local guides' instructions and safety precautions." />
      <Title text="XI. Conclusion" />
      <Paragraph text="Tepelenë is a hidden gem in southern Albania, offering visitors a unique blend of natural beauty, cultural heritage, and outdoor adventures. Whether you're exploring historic landmarks, immersing yourself in local culture, or enjoying outdoor activities in the stunning countryside, Tepelenë promises an unforgettable experience. With its rich history, picturesque landscapes, and warm hospitality, Tepelenë offers travelers a chance to discover the beauty and charm of southern Albania. " />
      <Paragraph text="Take the time to explore Tepelenë's hidden treasures, connect with the locals, and create memories that will last a lifetime." />
    </Cities>
  );
}
