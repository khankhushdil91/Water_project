'use client'

import React, {useState} from "react";
import { useAmp } from "next/amp";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full py-1 drop-shadow-2xl bg-white text-gra- flex flex-row justify-start relative">
        
        <div class="text-sky-400 text-2xl font-bold font-['Noto Sans'] leading-[38.40px] md:ml-12 p-3 w-full">
        <Link href="/">
          WATER SUPPLY
          </Link>
          </div>
        
        <div className="md:hidden flex items-center" onClick={openNav}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </div>

      <div className="flex justify-center items-center space-x-4 w-full max-md:hidden">
        <div className=" md:text-base lg:text-xl text-[#AAAAAA] font-medium">
          <Link href="./services"> Our Services</Link>
        </div>
        <div className=" md:text-base lg:text-xl p-2 text-[#AAAAAA] font-medium">
          <Link href="./aboutUs"> About Us</Link>
        </div>
        <div className=" p-2 md:text-base lg:text-xl  text-[#AAAAAA] font-medium">
          <Link href="./contact"> Contact Us</Link>
        </div>
      </div>
      <div
      className={`h-screen w-64 max-md:w-52 absolute bg-white transition-transform duration-500 transform flex-col items-center justify-center ${ isOpen ? 'translate-x-0' : '-translate-x-full'}
   
      `}>
          {/* sidebar close cross icon */}
      <div className="cursor-pointer flex items-center justify-between pr-2"  >
      <div class="text-sky-400 text-base font-bold font-['Noto Sans'] leading-[38.40px] md:ml-12 p-3 w-full">
        <Link href="/">
          WATER SUPPLY
          </Link>
          </div>
          <div className="text-sky-400 font-semibold text-xl" onClick={closeNav}>X</div>
      </div>

      {/* sidebar content */}
      <div className="text-xl  text-[#AAAAAA] font-medium hover:text-gray-400 w-full text-center my-3">
      Our Services 
      </div>
      <div className="text-xl  text-[#AAAAAA] font-medium hover:text-gray-400 w-full text-center my-3">
      About Us
      </div>
      <div className="text-xl  text-[#AAAAAA] font-medium hover:text-gray-400 w-full text-center my-3">
      Contact Us
      </div>
     
    </div>
    </div>
  );
};

export default Header;
