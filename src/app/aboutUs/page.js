import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <>
    <div className='flex items-center justify-start max-md:flex-col w-full'>
        <div>
            <Image src="/images/tanker.png" width={684} height={604} alt="tanker"/>
        </div>
        <div className='mx-auto max-sm:px-1'>
            <div className="text-blue-900 lg:ml-10 text-[48.83px] max-sm:text-[38px] font-semibold font-['Noto Sans'] leading-[78.13px] w-full text-center">About Us</div>
            <div className="md:w-[488px] lg:ml-10 text-neutral-400 text-xl max-sm:text-lg font-medium font-['Noto Sans'] leading-loose  max-sm:w-[3675x]">Discover our mission, values, and commitment to providing clean, sustainable water solutions in Saudi Arabia. Learn more about the team behind our vision for a better future.</div>
        </div>
    </div>
    </>
  )
}

export default AboutUs