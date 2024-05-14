"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-primaryLight flex justify-center text-white">
      <div className="w-full max-w-[1340px] pt-[30px] pb-[80px]">
        <div className="flex  justify-center px-5 lg:px-12">
          <div className="w-full h-full  text-white max-w-[1340px]">
            <div className="flex justify-center   text-[18px] font-400">
              <div className=" w-full sm:flex sm:flex-wrap py-12">
                <div className="mt-8 sm:mt-[60px] lg:mt-[80px] w-[100%] sm:w-[50%] md:w-[34%]  flex flex-col sm:items-center md:items-start space-y-2">
                  <Link href={"/"} className="flex text-white">
                    LOGO
                  </Link>
                  <p className="text-white">
                    Our Blockchain platform seamlessly connects Independent
                    Creators and Passionate Supporters.
                  </p>
                </div>
                <div className="mt-8 sm:mt-[60px] lg:mt-[80px] w-[100%] sm:w-[50%] md:w-[33%]  flex flex-col sm:items-center space-y-2">
                  <div>
                    <div className="mt-2">
                      <Link href="/about-us">About us</Link>
                    </div>
                  </div>
                </div>

                <div className="mt-8 lg:mt-[80px] w-[100%] sm:w-[50%] md:w-[33%]  flex flex-col md:items-center text-[16px] space-y-2">
                  <div>
                    <div className="flex gap-2 items-center sm:items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#7fb401"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      <div>
                        1 cobblestone way N, Terre Haute,
                        <br />
                        INDIANA, 47802
                      </div>
                    </div>
                    <div className="flex gap-2 items-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#7fb401"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                      <span>support@gmail.com</span>
                    </div>
                    <div className="flex gap-2 items-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#7fb401"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                        />
                      </svg>

                      <span>+92334 5811 1 11</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
