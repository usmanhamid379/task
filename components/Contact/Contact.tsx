"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ContactForm from "./ContactForm";

const data = [
  {
    title: "Location",
    desc: "69, Washington square new york NY 10012, United States",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Support",
    desc: "+8 123 456 9870",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    desc: "support@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

function Contact() {
  const router = useRouter();
  return (
    <>
      <div className="py-16 max-w-7xl mx-auto space-y-2 px-4">
        <div className="flex flex-col items-center py-12">
          <h5 className="text-[22px] font-[600] text-secondary text-center">
            LET&apos;S TALK
          </h5>
          <h1 className="text-[38px] font-[700] text-center">
            Contact us for more information
          </h1>
        </div>
        <div className="py-16 px-4 sm:px-8 flex flex-col lg:flex-row gap-6 lg:gap-4 lg:items-start lg:justify-between">
          <div className="w-[100%] lg:w-[30%] space-y-16">
            {data?.map((ele: any, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] bg-gray-200 rounded-full flex justify-center items-center shrink-0">
                  {ele?.icon}
                </div>
                <div className="space-y-2">
                  <h1 className="text-[26px] font-[700]">{ele?.title}</h1>
                  <h3 className="text-[14px] font-[600] text-gray-400">
                    {ele?.desc}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[100%] lg:w-[69%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
