import React from "react";

function Hero() {
  return (
    <div className="w-screen min-h-[80vh] md:min-h-[55vh] relative flex items-center bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="w-[100%] text-white px-4 space-y-4 flex justify-center items-center">
          <div className="py-4 w-[80%] space-y-4 ">
            <h1 className="text-[32px] md:text-[38px] font-[700]">About Us</h1>
            <h4 className="text-[16px]">
              MovieMint is the first financing company built on the Blockchain
              and owned by fans. By tokenizing projects into NFTs, it allows
              movie enthusiasts to directly fund and profit from films as
              co-owners. Powered by Web3 technology allowing open participation
              and radical transparency, MovieMint represents tomorrow&apos;s
              entertainment model today. One where creators and audiences
              collectively greenlight inspired ideas without restrictive
              intermediaries.
            </h4>
            <div>
              <button
                className="px-8 py-2 bg-[#808080] hover:bg-gray-500 text-white txt-[18px] font-[600]
            duration-300 ease-in-out transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
