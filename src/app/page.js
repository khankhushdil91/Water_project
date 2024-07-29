'use client'
import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./contact/page";
import AboutUs from "./components/AboutUs";
const Page = () => {
  return (
    <div>
      <Hero/>
      <Services />
      <Contact />
      <AboutUs />
    </div>
  );
};
export default Page;
