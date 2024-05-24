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

import PopUp from "./organisms/mobile-menu/PopUp";

const Header = () => {
  return (
    <div className=" flex   justify-between lg:justify-center px-2 h-16 lg:gap-16 p-1 w-full  items-center fixed top-0 bg-white z-10">
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
          <MenubarTrigger>Useful information</MenubarTrigger>
          <MenubarContent>
            <Link href="/visit-albania/e-transport">
              <MenubarItem>eTransport</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/visit-albania/visit-albania-by-air">
              <MenubarItem>Visit by air</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/visit-albania/visit-albania-by-sea">
              <MenubarItem>Visit by sea</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/visit-albania/visit-albania-by-land">
              <MenubarItem>Visit by land</MenubarItem>
            </Link>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/blog">Blog</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <PopUp />
    </div>
  );
};

export default Header;
