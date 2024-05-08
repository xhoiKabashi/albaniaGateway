"use client";
import { TypographyH2 } from "@/components/atoms/TypographyH2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HWTDnavbar() {
  const pathname = usePathname();

  // General style for all links
  const generalStyle = "hover:bg-gray-100 px-2 py-3  text-sm cursor-pointer";

  // Style to apply when the link is active
  const activeStyle = "bg-gray-100 hover:bg-slate-600";

  // Function to determine if a link is active
  const getLinkStyle = (path: string) => {
    return pathname === path ? `${generalStyle} ${activeStyle}` : generalStyle;
  };

  return (
    <div className=" flex flex-col justify-center  items-center ">
      <TypographyH2 text="What to see & do" />
      <div className=" flex gap-2">
        {/* <Link href="/" legacyBehavior passHref>
          <span className={getLinkStyle("/")}>In focus</span>
        </Link> */}

        {/* <Link href="/explore" legacyBehavior passHref>
          <span className={getLinkStyle("/explore")}>Activities</span>
        </Link> */}

        {/* <Link href="/about" legacyBehavior passHref>
          <span className={getLinkStyle("/about")}>Tourist attractions</span>
        </Link> */}
        {/* 
        <Link href="/contact" legacyBehavior passHref>
          <span className={getLinkStyle("/contact")}>Excursions</span>
        </Link> */}
      </div>
    </div>
  );
}
