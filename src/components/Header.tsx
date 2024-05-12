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
import { useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className=" flex   justify-between lg:justify-center px-2 h-16  lg:gap-16 p-1 w-full  items-center fixed top-0 bg-white z-10">
      <Link href="/">
        <h1 className=" text-violet-500">Albania Gateway</h1>
      </Link>
      <Menubar className=" hidden lg:flex">
        <MenubarMenu>
          <MenubarTrigger>
            <h2>Why Albania</h2>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/new-tab" legacyBehavior passHref>
                <h3>Why Albania</h3>
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/new-tab">
                <h3>Why Albania</h3>
              </Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/new-tab">
                <h3>Why Albania</h3>
              </Link>
            </MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <h2>What to see & do</h2>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <h3>Why Albania</h3>
            </MenubarItem>
            <MenubarItem>
              <h3>Why Albania</h3>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <h3>Why Albania</h3>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <h3>Why Albania</h3>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Where to go</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Where to stay</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Travel here & around</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Language</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              English <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Italian</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>German</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Spania</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className=" lg:hidden">
        <Sheet>
          <SheetTrigger>
            <HiBars4 className=" text-2xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
