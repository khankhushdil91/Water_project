'use client'
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex items-center justify-around my-10 max-sm:flex-col">
      <div className="text-neutral-400 md:text-base max-sm:text-base font-medium font-['Noto Sans']">Follow us on social media for updates and news.</div>
      <div className="text-neutral-400 md:text-base max-sm:text-base font-medium font-['Noto Sans']">© {currentYear} Safan Contracting Est.</div>
   
    </div>
  );
};
export default Footer;
