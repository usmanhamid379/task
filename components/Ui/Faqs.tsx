"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

function Faqs() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = (accordionNumber: any) => {
    if (accordionNumber === 1) {
      setIsOpen1(!isOpen1);
      setIsOpen2(false);
      setIsOpen3(false);
    } else if (accordionNumber === 2) {
      setIsOpen2(!isOpen2); // Corrected isOpen2
      setIsOpen1(false); // Also, reset isOpen1
      setIsOpen3(false);
    } else if (accordionNumber === 3) {
      setIsOpen3(!isOpen3); // Corrected isOpen3
      setIsOpen1(false); // Also, reset isOpen1
      setIsOpen2(false); // Also, reset isOpen2
    }
  };

  return (
    <div className="w-full bg-primary py-24 px-4">
      {/* Faq Accordion */}
      <h3 className="text-[32px] font-[700] text-white text-center py-4">
        <span className="text-secondary">Frequently</span> Asked Questions
      </h3>

      <div
        id="accordionExample5"
        className="space-y-2 max-w-6xl mx-auto px-5 lg:px-0"
      >
        <div className="">
          <h2 className="mb-0" id="">
            <button
              className="group  relative flex justify-between w-full items-center bg-white pl-5 text-left text-base text-neutral-800 transition "
              type="button"
              onClick={() => toggleAccordion(1)}
            >
              <p className="text-black font-semibold text-[14px] group-hover:text-secondry">
                Will movies be preLaunched in the market
              </p>

              <div className="flex items-center justify-center bg-white h-[45px] w-[45px] cursor-pointer">
                {!isOpen1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="black"
                    className="w-6 h-6 transition-transform duration-500 transform rotate-90"
                    style={{ transitionTimingFunction: "ease-in-out" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="black"
                    className="w-6 h-6 transition-transform duration-500 transform rotate-180"
                    style={{ transitionTimingFunction: "ease-in-out" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                )}
              </div>
            </button>
          </h2>
          <div
            className={`border transition-all   duration-700  ${
              isOpen1
                ? "h-auto opacity-1 "
                : " h-0 opacity-0 border-0 overflow-hidden"
            } `}
          >
            <div className="px-5 py-4 text-[14px] text-[#878787]">
              <p>depends on the creator</p>
            </div>
          </div>
        </div>
        <div className="   ">
          <h2 className="mb-0" id="">
            <button
              className="group  relative flex justify-between w-full items-center
                 bg-white pl-5 text-left text-base text-neutral-800 transition
                  "
              type="button"
              onClick={() => toggleAccordion(2)}
            >
              <p className="text-black font-semibold text-[14px] group-hover:text-secondry">
                Will movies be preLaunched in the market
              </p>

              <div className="flex items-center justify-center bg-white h-[45px] w-[45px] cursor-pointer">
                {!isOpen2 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="black"
                    className="w-6 h-6 transition-transform duration-500 transform rotate-90"
                    style={{ transitionTimingFunction: "ease-in-out" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="black"
                    className="w-6 h-6 transition-transform duration-500 transform rotate-180"
                    style={{ transitionTimingFunction: "ease-in-out" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                )}
              </div>
            </button>
          </h2>
          <div
            className={`  border   transition-all  duration-700  ${
              isOpen2
                ? "h-auto  opacity-1 "
                : " h-0 opacity-0 border-0   overflow-hidden"
            } `}
          >
            <div className="px-5 py-4 text-[14px] text-[#878787]">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam ea quod aperiam ullam vitae labore doloremque tempora
                quia nemo perferendis?
              </p>

              <ol className="list-decimal list-inside mt-5">
                <li>
                  <span className="font-bold"> Raw Resin:</span>
                </li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                soluta ullam laboriosam! Quia perferendis laborum tenetur
                praesentium magni ea. Asperiores, quibusdam. Vitae officia sequi
                similique est non saepe rerum, dignissimos libero deleniti
                voluptas voluptatibus consequatur?
                <li>
                  <span className="font-bold"> Lorem, ipsum dolor. </span>
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Lorem ipsum dolor sit amet.
                  </span>
                </li>
              </ol>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus architecto quae veniam, recusandae modi eveniet
                pariatur molestias in aspernatur illum.
              </p>
              <ul className="list-disc list-inside mt-5">
                <li>
                  <span className="font-bold"> Consultation:</span> Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Explicabo
                  blanditiis accusantium, facere ipsa sunt quibusdam at soluta
                  voluptatem perspiciatis aut?
                </li>

                <li>
                  <span className="font-bold"> Hydration:</span> Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Temporibus libero
                  cum facilis ipsam impedit eos doloribus dolor? Beatae, aperiam
                  et.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="mb-0" id="headingThree5">
            <button
              className="group  relative flex justify-between w-full items-center   bg-white pl-5 text-left text-base text-neutral-800 transition "
              type="button"
              onClick={() => toggleAccordion(3)}
            >
              <p className="text-black font-semibold text-[14px] group-hover:text-secondry">
                Will movies be preLaunched in the market
              </p>
              <div className="flex items-center justify-center bg-white h-[45px] w-[45px] cursor-pointer">
                {!isOpen3 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="black"
                    className="w-6 h-6 transition-transform duration-500 transform rotate-90"
                    style={{ transitionTimingFunction: "ease-in-out" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="black"
                    className="w-6 h-6 transition-transform duration-500 transform rotate-180"
                    style={{ transitionTimingFunction: "ease-in-out" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                )}
              </div>
            </button>
          </h2>
          <div
            className={`  border   transition-all  duration-700  ${
              isOpen3
                ? "h-auto  opacity-1 "
                : " h-0 opacity-0 border-0   overflow-hidden"
            } `}
          >
            <div className="px-5 py-4 text-[14px] text-[#878787]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam veritatis cupiditate aut deserunt quas magnam beatae
                repellat libero labore quam, dolorum eius odio optio odit saepe
                incidunt quo. Ut, aut.
              </p>

              <ol className="list-decimal list-inside">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam veritatis cupiditate aut deserunt quas magnam beatae
                  repellat libero labore quam, dolorum eius odio optio odit
                  saepe incidunt quo. Ut, aut.
                </li>
                <li>
                  <span className="font-bold">Dosage:</span> Excessive intake of
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam veritatis cupiditate aut deserunt quas magnam beatae
                  repellat libero labore quam, dolorum eius odio optio odit
                  saepe incidunt quo. Ut, aut.
                </li>
                <li>
                  <span className="font-bold"> Individual Sensitivity: </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam veritatis cupiditate aut deserunt quas magnam beatae
                  repellat libero labore quam, dolorum eius odio optio odit
                  saepe incidunt quo. Ut, aut.
                </li>
                <li>
                  <span className="font-bold">Media Conditions:</span> Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                  veritatis cupiditate aut deserunt quas magnam beatae repellat
                  libero labore quam, dolorum eius odio optio odit saepe
                  incidunt quo. Ut, aut.
                </li>
              </ol>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam veritatis cupiditate aut deserunt quas magnam beatae
                repellat libero labore quam, dolorum eius odio optio odit saepe
                incidunt quo. Ut, aut.
              </p>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam veritatis cupiditate aut deserunt quas magnam beatae
                repellat libero labore quam, dolorum eius odio optio odit saepe
                incidunt quo. Ut, aut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
