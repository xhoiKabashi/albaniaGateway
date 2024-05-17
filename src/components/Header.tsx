"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

import { HiBars4 } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import PopUp from "./organisms/mobile-menu/PopUp";

const Header = () => {
  return (
    <div className=" flex   justify-between lg:justify-center px-2 h-16  shadow-sm lg:gap-16 p-1 w-full  items-center fixed top-0 bg-white z-10">
      <Link href="/">
        <h1 className=" text-sky-500">Albania Gateway</h1>
      </Link>
      <Menubar className=" hidden lg:flex">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/visit-albania/why-visit-albania">Why Albania</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <h2>What to see & do</h2>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Coming soon </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Where to go</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Coming soon </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Visit Albania</MenubarTrigger>
          <MenubarContent>
            <Link href="/visit-albania/visit-albania-by-air">
              <MenubarItem>by air</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/visit-albania/visit-albania-by-sea">
              <MenubarItem> by sea</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/visit-albania/visit-albania-by-land">
              <MenubarItem> by land</MenubarItem>
            </Link>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Travel here & around</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Coming soon </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <PopUp />
    </div>
  );
};

export default Header;
