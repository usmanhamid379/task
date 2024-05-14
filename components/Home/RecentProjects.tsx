/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { projectData } from "@/constraints/data";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="h-[40px] hidden lg:block w-[40px]  p-2 shadow-lg hover:scale-105 duration-500 absolute right-0 top-[45%] cursor-pointer"
    >
      <svg className="flickity-button-icon " viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          className="arrow"
          transform="translate(100, 100) rotate(180) "
        ></path>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="h-[40px] hidden lg:block w-[40px] p-2 shadow-lg absolute hover:scale-105 duration-500 left-0 z-50 top-[45%] cursor-pointer"
    >
      <svg className="flickity-button-icon rotate-180 " viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          className="arrow"
          transform="translate(100, 100) rotate(180) "
        ></path>
      </svg>
    </div>
  );
}

export default function RecentProjects() {
  var settings: any = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" w-full flex justify-center bg-primaryLight py-[50px] md:py-[120px] px-4">
      <div className=" w-full max-w-6xl    xl:px-0">
        <div className="flex items-center justify-center">
          {" "}
          <h1
            className="text-[white] font-bold text-[30px] text-center uppercase
           max-w-[700px] leading-tight tracking-wider"
          >
            Now Available: the Complete Collection of NFTs
          </h1>
        </div>
        <p className="text-center mt-1 font-[300] text-[18px] text-[white]">
          These are some of our recent posts
        </p>
        <div className=" mt-3">
          <Slider {...settings}>
            {projectData?.map((item: any, index: any) => (
              <div key={index} className="px-3">
                <div className=" bg-white px-5 pt-5 pb-5 border-[1px] rounded-md hover:border-secondary">
                  <div className="h-[250px] w-full  overflow-hidden">
                    <Image
                      src={item?.image}
                      alt="Product_Image"
                      className="h-full w-full object-cover hover:scale-125 duration-300 ease-in-out transition-all"
                    />
                  </div>
                  <h1 className="text-[#6d6d6d] mt-4 font-bold text-[30px] text-center  leading-none tracking-wider">
                    {item?.title}
                  </h1>
                  <p className="text-center text-[#6d6d6d] my-2 text-[18px] font-[300]">
                    {item?.desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
