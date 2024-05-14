"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-[100px] bg-[#070709] w-full sticky top-0 z-50 flex items-center justify-center px-4 lg:px-10`}
    >
      <div className=" h-full w-full  max-w-[1340px] flex items-center justify-between">
        <div className="text-white font-[700]">LOGO</div>
        {/* Navigation Bar */}
        <div className=" items-center  hidden lg:flex h-full">
          {navLinks.map((item: any, index: any) => (
            <div
              key={index}
              className="relative group h-full flex items-center cursor-pointer"
            >
              <div className="h-2 w-full scale-0  group-hover:scale-105 duration-300 rounded-b-full absolute bg-secondary top-0"></div>

              <a
                href={item.link}
                className="text-white text-[16px]  px-5 relative "
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div
          className="py-2 px-5  hidden lg:flex items-center justify-center 
        text-white rounded-full text-[16px] bg-secondary cursor-pointer"
        >
          Connect
        </div>
        {/* Mobile Menu */}
        <div className=" lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
