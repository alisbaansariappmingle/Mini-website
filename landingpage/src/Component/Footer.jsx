import React, { useContext, useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { MyContext } from "../Context/MyContext";
import Skeleton from "./Skeleton";

const Footer = () => {
  const { getBusinessDetails, businessDetails, getVisitingCard, visitingCard } =
    useContext(MyContext);

    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBusinessDetails();
    getVisitingCard();
    setTimeout (() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return ( <>
  {isLoading ? "" :
    <footer className="bg-black text-white py-6 px-4">
      {/* Contact Info Section */}
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-y-4 md:gap-x-4">
          {/* Phone */}
          <div className="flex items-center space-x-2 md:border-r md:pr-4">
            <LuPhoneCall className="text-gray-400 text-lg" />
            <p className="text-sm">{businessDetails?.detail?.contactNumber}</p>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-2 md:border-r md:pr-4">
            <BsWhatsapp className="text-gray-400 text-lg" />
            <p className="text-sm">{businessDetails?.detail?.whatsAppNumber}</p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <MdOutlineMarkEmailUnread className="text-gray-400 text-lg" />
            <p className="text-sm">{visitingCard?.visitingCard?.email}</p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex flex-col items-center justify-center mt-4 md:flex-row">
        <GrLocation className="text-gray-500 text-lg mb-1 md:mb-0" />
        <p className="text-sm font-thin text-center md:text-left md:ml-2 max-w-[90%]">
          {businessDetails?.detail?.address}
        </p>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4">
        <p className="text-gray-400 text-xs md:text-sm">
          © 2025{" "}
          <a
            href="https://miniwebx.com"
            className="hover:text-yellow-500 block md:inline"
          >
            MiniWebX
          </a>
          , Powered by{" "}
          <a
            href="https://optimizaum.com/"
            className="text-yellow-500 font-semibold block md:inline"
          >
            Optimizaum.com
          </a>
        </p>
      </div>
    </footer>
}
  </>
  );
};


export default Footer;
