"use client"

import React, { useState, useEffect } from "react";
import { TbAirBalloon } from "react-icons/tb";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void
}

const navLinks = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About", url: "/about" },
  { id: 3, label: "Destination", url: "/destination" },
  { id: 4, label: "Blog", url: "/blog" },
  { id: 5, label: "Dashboard", url: "/dashboard" },
  { id: 6, label: "Contact", url: "/contact" },
];

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
  <div className={`fixed w-full h-[12vh] z-[1000] transition-all duration-200 ${
  navBg ? "bg-blue-950 shadow-md" : ""
}`}>

      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">

        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Tripi
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="relative text-white text-base font-medium w-fit block
                after:block after:content-[''] after:absolute after:h-[3px] 
                after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-100 
                after:transition after:duration-300 after:origin-right"
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* BUTTON & HAMBURGER */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Book Now
          </button>
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
        </div>

      </div>
    </div>
  );
};

export default Nav;
