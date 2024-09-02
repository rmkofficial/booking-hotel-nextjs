import { ModeToggle } from "@/components/ModeToggle";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";
import UserToggle from "./UserToggle";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "@/constants";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className={"w-full z-20 items-center fixed"}>
      <div className="container mx-auto">
        <div className="px-4 py-6 flex items-center justify-center">
          <div className="w-24 py-4 px-3 rounded-xl bg-white">
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="flex-row lg:flex hidden items-center gap-9 ml-auto">
            {NavMenu.map((item) => (
              <NavItem key={item.title} title={item.title} url={item.url} />
            ))}
          </div>
          <div className="flex lg-flex items-center ml-auto gap-2">
            <UserToggle />
            <ModeToggle />
            <div className="lg:hidden flex flex-row items-center ml-auto gap-2">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
