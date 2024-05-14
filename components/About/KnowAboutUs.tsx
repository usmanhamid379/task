import React from "react";
import know from "@/assets/images/know.jpg";
import Image from "next/image";

function KnowAboutUs() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="md:flex gap-4 items-center">
        <div className="w-[100%] md:w-[60%] flex flex-col gap-6">
          <h1 className="text-[42px] font-[700]">
            Know about the
            <br /> NFT Marketplace
          </h1>
          <h5 className="text-[14px] font-[500] w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
            uada mi elementum elementum. Nec sapien convallis vulputate rhoncus
            vel dui.
          </h5>
          <button className="px-6 w-fit py-[15px] rounded-3xl bg-[#7fb400] text-white font-[600] hover:bg-opacity-90">
            Read More
          </button>
        </div>
        <div className="w-[100%] md:w-[40%] h-[350px] mt-8 md:mt-0">
          <div className="w-full h-[300px]">
            <Image
              src={know}
              alt="Image"
              className="w-full h-full rounded-xl"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowAboutUs;
