import Image from "next/legacy/image";
import tropoje from "../../../../public/tropoje.jpg";
import theth from "../../../../public/theth.jpg";
import shkoder from "../../../../public/shkoder-card.jpg";
import lezhe from "../../../../public/varri-skenderbehut.jpg";
import kruje from "../../../../public/kruje.jpg";
import tirana from "../../../../public/tirana-image.jpg";
import durres from "../../../../public/durres.jpg";
import elbasani from "../../../../public/elbasani.jpg";
import pogradec from "../../../../public/pogradec.jpg";
import korca from "../../../../public/korca-image.jpg";
import vlora from "../../../../public/vlora-image.jpg";
import saranda from "../../../../public/saranda-image.jpg";
import dhermi from "../../../../public/dhermi.jpg";
import gjirokaster from "../../../../public/gjirokaster-image.jpg";
import berat from "../../../../public/berat-image.jpg";
import permet from "../../../../public/permet-image.jpg";
import tepelena from "../../../../public/Vjosa.jpg";

import Link from "next/link";
import { FaMapPin } from "react-icons/fa6";

interface CityCardProps {
  city: string | null;
}

const MapCityCard = ({ city }: CityCardProps) => {
  const cityInfo: any = {
    Tropoja: {
      text: "Tropoja",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: tropoje,
      href: "/explore-cities/tropoja",
      away: "247",
    },
    Theth: {
      text: "Theth",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: theth,
      href: "/explore-cities/theth",
      away: "177",
    },
    Shkoder: {
      text: "Shkodra",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: shkoder,
      href: "/explore-cities/shkodra",
      away: "101",
    },
    Lezhe: {
      text: "Lezha",
      imageUrl: lezhe,
      href: "/explore-cities/lezha",
      away: "65",
    },
    Kruje: {
      text: "Kruja",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: kruje,
      href: "/explore-cities/kruja",
      away: "35",
    },
    Tirane: {
      text: "Tirana",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: tirana,
      href: "/explore-cities/tirana",
    },
    Durres: {
      text: "Durres",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: durres,
      href: "/explore-cities/durres",
      away: "36",
    },
    Elbasan: {
      text: "Elbasan",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: elbasani,
      href: "/explore-cities/elbasan",
      away: "42 ",
    },
    Pogradec: {
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      text: "Pogradec",
      imageUrl: pogradec,
      href: "/explore-cities/pogradec",
      away: "126 ",
    },
    Korca: {
      text: "Korca",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: korca,
      href: "/explore-cities/korca",
      away: "166 ",
    },
    Berat: {
      text: "Berat",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: berat,
      href: "/explore-cities/berat",
      away: "101 ",
    },
    Vlora: {
      text: "Vlora",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: vlora,
      href: "/explore-cities/vlora",
      away: "160",
    },
    "Dhermi & Himara": {
      text: "Dhermi & Himara",
      imageUrl: dhermi,
      href: "/explore-cities/himara-dhermi",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      away: "240",
    },
    Tepelena: {
      text: "Tepelena",
      imageUrl: tepelena,
      href: "/explore-cities/tepelena",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      away: "205",
    },
    Saranda: {
      text: "Saranda",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      imageUrl: saranda,
      href: "/explore-cities/saranda",
      away: "265",
    },
    Gjirokaster: {
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      text: "Gjirokastra",
      href: "/explore-cities/gjirokastra",
      imageUrl: gjirokaster,
      away: "235",
    },
    Permet: {
      text: "Permet",
      imageUrl: permet,
      href: "/explore-cities/permet",
      alt: "Image of the Gjirokastër Castle, in focus is the Albanian flag",
      away: "248",
    },
  };

  const info = city ? cityInfo[city] : cityInfo["Tirane"];

  if (!info) {
    return null;
  }

  return (
    <div className="bg-sky-20 flex flex-col justify-center items-center rounded-md mb-10  scale-90 md:scale-100">
      <div className="relative  h-72 w-80 overflow-hidden">
        <Image
          src={info.imageUrl}
          alt={"Image of " + info.text}
          className="w-full rounded-md bg-center"
          layout="fill"
          objectFit="cover" // Ensures the image fits well
          priority={true}
          sizes="(min-width: 808px) 50vw, 100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black  opacity-35 rounded-md"></div>
      </div>
      <div className="relative  bottom-52  md:bottom-64 text-white px-3 text-sm flex gap-2 items-center">
        {info.text === "Tirane"
          ? `Just 30 km away from the airport`
          : `Just ${info.away} km away from Tirana`}

        <FaMapPin className=" text-red-600" />
      </div>
      <div className="relative bottom-16  font-bold text-white px-3 text uppercase  tracking-wider">
        Explore: {info.text}
      </div>
      <Link
        href={info.href}
        className=" bg-sky-500 py-1  w-60 text-xs  px-3 rounded-lg text-white cursor-pointer  active:scale-95 text-center"
      >
        Read more about {info.text}
      </Link>
    </div>
  );
};

export default MapCityCard;
