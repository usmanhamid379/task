import React from "react";
import Image from "next/image";
import { essentialData } from "@/constraints/data";

function EssentialFeatures() {
  return (
    <div className="py-16 bg-primary text-white">
      <div className="px-4 sm:px-8 max-w-7xl mx-auto">
        <h1 className="text-center pt-6 pb-12 text-[32px] font-[700]">
          Essential Features of our <br />
          <span className="text-[#7fb400]">NFT Marketplace</span>
        </h1>
        <div className="flex justify-center gap-5 flex-wrap">
          {essentialData?.map((ele: any, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-4 w-[100%] sm:w-[45%] lg:w-[30%] xl:w-[23%] px-2"
            >
              <Image src={ele?.icon} alt="Icon" />
              <h1 className="text-[18px] font-[600]">{ele?.title}</h1>
              <h4 className="text-[14px] font-[500]">{ele?.desc}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EssentialFeatures;
