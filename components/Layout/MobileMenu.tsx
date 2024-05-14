/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import Link from "next/link";
const navLinks = [
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

export default function MainNavigation() {
  const [open, setState] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setState(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [setState]);
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event?.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  return (
    <div className=" ">
      <div className="h-[50px] w-[50px] rounded-full bg-[#7fb401] flex items-center justify-center lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 16"
          fill="black"
          className="cursor-pointer lg:hidden p-2 rounded-md  w-11   "
          onClick={toggleDrawer(true)}
        >
          <rect width="30" height="3"></rect>
          <rect y="7" width="20" height="3"></rect>
          <rect y="14" width="30" height="3"></rect>
        </svg>
      </div>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        style={{ zIndex: 50 }}
        sx={{ position: "relative", width: "600px !important," }}
      >
        <Box
          sx={{
            height: 1,
            backgroundColor: "white",
            width: "100%",
            position: "relative",
          }}
        >
          <ul>
            <li className="flex justify-end border-b-[1px]">
              <div
                onClick={toggleDrawer(false)}
                className="h-12 w-12 bg-black    z-50 top-0 flex items-center justify-center md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="white"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </li>
            {navLinks.map((item: any, index: any) => (
              <li
                key={index}
                className="border-b-[1px] py-3 px-4 w-[300px]"
                onClick={toggleDrawer(false)}
              >
                <Link href={item.link}>
                  <h3 className="cursor-pointer hover:text-pink-300">
                    {item.name}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Drawer>
    </div>
  );
}
