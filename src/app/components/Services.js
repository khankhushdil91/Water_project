"use client";
import React from 'react'
import Image from 'next/image';
const Services = () => {
  return (
    <>
    <div className='w-full h-full flex-col items-center justify-center bg-white'>
        <div className="w-full text-center text-blue-900 text-[48.83px] font-semibold font-['Noto Sans'] leading-[78.13px] mt-8">Our Services</div>
        <div className="w-full text-center text-neutral-400 md:text-xl font-medium font-['Noto-Sans'] leading-loose max-sm:text-base">From sourcing to delivery, we offer a full range of water</div>
        <div className="w-full text-center text-neutral-400 md:text-xl font-medium font-['Noto-Sans'] leading-loose max-sm:text-base">services for sustainable supply in Saudi Arabia.</div>
    </div>
    <div className='flex items-center justify-center md:space-x-16 flex-wrap my-10 '>
        <div className=' flex-col items-center justify-center'><Image src="/images/waterTanker-2.png" width={387} height={285} alt="tanker image" /><p className="text-center text-sky-400 text-[25px] font-medium font-['Noto Sans'] leading-10 my-5">Home Delivery</p></div>
        <div className=' flex-col items-center justify-center'><Image src="/images/waterTanker-3.png" width={387} height={285} alt="tanker image" /><p className="text-center text-sky-400 text-[25px] font-medium font-['Noto Sans'] leading-10 my-5">Office Delivery</p></div>
        <div className=' flex-col items-center justify-center'><Image src="/images/waterTanker-4.png" width={387} height={285} alt="tanker image" /><p className="text-center text-sky-400 text-[25px] font-medium font-['Noto Sans'] leading-10 my-5">Random Delivery</p></div>
    </div>
    </>
  )
}

export default Services