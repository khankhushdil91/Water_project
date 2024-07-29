"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" w-full h-screen">
      <div className="bg-[url('/images/waterTanker-1.png')] bg-cover bg-center w-full h-screen flex flex-col justify-center items-start">
        <div className=" md:ml-24 max-md:px-4">
          <div className="text-white lg:text-7xl md:text-4xl max-md:text-3xl max-sm:text-2xl font-semibold font-['Noto Sans'] leading-[100px] my-10">
            Supply fresh & regular Water
            <br />
            for a Sustainable Future
          </div>
          <p
            className=" my-5 text-white text-xl max-md:text-base max-sm:text-xs font-medium font-['NotoSans'] leading-loose"
          >
            Explore our commitment to providing clean, sustainable water
            solution <br /> that support a better tomorrow for Saudi Arabia and
            beyond.
          </p>

          <button className="bg-[#2EA3F2] rounded-md md:px-14 max-md:px-5 md:py-3 max-md:py-1 text-white text-xl font-medium font-['NotoSans'] leading-loose">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
