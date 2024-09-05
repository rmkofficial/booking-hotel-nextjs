"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { User } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import UserToggle from "./UserToggle";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "@/constants";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes"; 

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = isScrolled
    ? theme === "dark"
      ? "bg-black"
      : "bg-black bg-opacity-75"
    : "bg-transparent";

  return (
    <div
      className={`w-full z-30 fixed top-0 left-0 transition-all duration-300 ${backgroundColor}`}
    >
      <div className="container mx-auto">
        <div className="px-4 py-6 flex items-center justify-center">
          <div className="w-24 py-4 px-3 rounded-xl bg-white">
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-full"
              priority
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
