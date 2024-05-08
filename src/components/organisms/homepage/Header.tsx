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

const Header = () => {
  return (
    <div className=" flex   justify-between lg:justify-center px-2 h-16  lg:gap-16 p-1 w-full  items-center fixed top-0 bg-white z-10">
      <h1 className=" text-violet-500">Albania Gateway</h1>
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

      <div className=" lg:hidden">Hamburger</div>
    </div>
  );
};

export default Header;
