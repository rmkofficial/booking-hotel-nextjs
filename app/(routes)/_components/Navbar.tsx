import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import React from "react";

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
            Home About
          </div>
          <div className="flex lg-flex items-center ml-auto gap-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
