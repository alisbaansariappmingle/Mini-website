import React, { useState } from "react";
import { FaRupeeSign, FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa"; // Import icons
import Banner from "../Component/Banner";
import OurServices from "../Component/OurServices";
import Gallery from "../Component/Gallery";
import Contect from "../Component/Contect";
import SocialMediaLinks from "../Component/SocialMediaLinks ";

const Home = () => {
  

  return (
    <div className="min-h-screen">
      <Banner />
      <OurServices />
      <Gallery />
      <Contect />
      <SocialMediaLinks />

      {/* Sticky Pay Now Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-orange-500 text-white flex items-center px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 space-x-2"
      >
        <FaRupeeSign className="text-xl" />
        <span className="font-semibold">Pay Now</span>
      </a>
    
     
    </div>
  );
};

export default Home;
