"use client";
import React, { useRef, useState } from "react";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form: any = useRef(null);
  const handeSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="h-full w-full">
      {/* Contact Us Form */}
      <div className="w-full h-full flex justify-center ">
        <div className="w-[100%] flex items-center lg:items-start flex-col-reverse lg:flex-row gap-8 ">
          <form className="w-full" ref={form} onSubmit={handeSubmit}>
            {/* Name */}
            <label className="text-[#878787] text-[14px] ">
              Your Name (required){" "}
            </label>
            <br />
            <input
              name="user_name"
              type="text"
              className="h-[42px] mt-1 w-full border-[1px] border-[#878787] focus:border-[black] focus:ring-0 focus:border-[1px] focus:outline-none px-4 text-[14px] text-[#878787]"
              required
            />
            {/* Email */}
            <div className="mt-5">
              <label className="text-[#878787] text-[14px] ">
                Your Email (required){" "}
              </label>
              <br />
              <input
                name="user_email"
                type="email"
                className="h-[42px] mt-1 w-full border-[1px] border-[#878787] focus:border-[black] focus:ring-0 focus:border-[1px] focus:outline-none px-4 text-[14px] text-[#878787]"
                required
              />
            </div>
            {/* Message */}
            <div className="mt-5">
              {" "}
              <label className="text-[#878787] text-[14px] ">
                Your Message
              </label>
              <br />
              <textarea
                name="user_message"
                className=" w-full py-2 mt-1 border-[1px] border-[#878787] focus:border-[black] focus:ring-0 focus:border-[1px] focus:outline-none px-4 text-[14px] text-[#878787]"
                rows={8}
                required
              />
            </div>
            {/* Submit Button */}
            <button
              disabled={isLoading}
              className="mt-4 px-8 py-4 rounded-full font-semibold  hover:bg-opacity-90 bg-secondary text-white"
              type="submit"
            >
              {!isLoading ? (
                <> Send Message</>
              ) : (
                <div className="h-[20px] w-[20px] rounded-full bg-transparent border-black animate-spin border-r-blue-400 border-[1.5px] "></div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
