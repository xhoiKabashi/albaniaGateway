import Image from "next/image";
import tropoje from "../../../../public/tropoje.jpg";

interface CityCardProps {
  city: string | null;
}

const MapCityCard = ({ city }: CityCardProps) => {
  const cityInfo: any = {
    Tropoja: {
      name: "Tropoja",
      image: tropoje,
    },
    Theth: {
      name: "Theth",
      image: tropoje,
    },
    Shkoder: {
      name: "Shkoder",
      image: tropoje,
    },
    Lezhe: {
      name: "Lezhe",
      image: tropoje,
    },
    Kruje: {
      name: "Kruje",
      image: tropoje,
    },
    Tirane: {
      name: "Tirane",
      image: tropoje,
    },
    Durres: {
      name: "Durres",
      image: tropoje,
    },
    Elbasan: {
      name: "Elbasan",
      image: tropoje,
    },
    Pogradec: {
      name: "Pogradec",
      image: tropoje,
    },
    Korca: {
      name: "Korca",
      image: tropoje,
    },
    Berat: {
      name: "Berat",
      image: tropoje,
    },
    Vlora: {
      name: "Vlora",
      image: tropoje,
    },
    "Dhermi & Himara": {
      name: "Dhermi & Himara",
      image: tropoje,
    },
    Tepelena: {
      name: "Tepelena",
      image: tropoje,
    },
    Saranda: {
      name: "Saranda",
      image: tropoje,
    },
    Gjirokaster: {
      name: "Gjirokaster",
      image: tropoje,
    },
    Permet: {
      name: "Permet",
      image: tropoje,
    },
  };

  const info = city ? cityInfo[city] : null;

  if (!info) {
    return null;
  }

  return (
    <div className="bg-sky-20 flex flex-col justify-center items-center">
      <Image
        src={info.image}
        alt={info.name}
        className="w-full"
        style={{ objectFit: "cover" }}
        priority={true}
        width={400}
        height={400}
        sizes="(min-width: 808px) 50vw, 100vw"
        placeholder="blur"
      />
      <div>{info.name}</div>
    </div>
  );
};

export default MapCityCard;
