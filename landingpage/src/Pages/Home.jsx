import React, { useEffect, useRef, useState } from "react";
import { FaRupeeSign } from "react-icons/fa"; // Import icons
import Banner from "../Component/Banner";
import OurServices from "../Component/OurServices";
import Gallery from "../Component/Gallery";
import Contect from "../Component/Contect";
import SocialMediaLinks from "../Component/SocialMediaLinks ";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import graphiback from '../assets/imagegraphic.jpg'
import men from "../assets/men.webp"
import FinanceDashboard from "../Component/FinanceDashboard";
import PayNow from "../Component/PayNow";
import './home.css';
import gsap from "gsap";
import axios from "axios";

const Home = () => {

  const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
  // console.log("API base url ===>",BASE_URL)
  const [businessDetails, setBusinessDetails] = useState();

  const getBusinessDetails = () => {
    axios.get(`${BASE_URL}/business-detail/67cc3984626d90e6a28e6119`)
      .then((response) => {
        // console.log(response.data)
        setBusinessDetails(response.data.details);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getBusinessDetails();
  }, [BASE_URL]);

  const container = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const handlePay = () => {
    setIsOpen(true);
  };

  const handleClosePay = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    gsap.from(container.current, {
      y: -20, // Start position (slightly above)

      duration: 1.5,
      ease: "power2.out",
    });

    // Auto up-down movement (yoyo effect)
    gsap.to(container.current, {
      y: 20, // Moves down by 20px
      duration: 2,
      repeat: -1, // Infinite animation
      yoyo: true, // Moves up and down
      ease: "power1.inOut",
    });
  }, []);
  return (<>

    <div className="min-h-screen relative   ">

      <Banner />

      <OurServices />
      <FinanceDashboard home={true} />
      <Gallery />
      <Contect />

      <SocialMediaLinks />

      {/* Sticky Pay Now Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-orange-500 text-white flex items-center px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 space-x-2"
      >
        <FaRupeeSign className="text-xl" />
        <span className="font-semibold"
          onClick={handlePay}
        >Pay Now</span>
      </a>
      <a
        href="#"
        className="fixed contactus bottom-6 left-6 bg-orange-500 text-white flex items-center px-5 py-3 rounded-full shadow-lg  transition duration-300 space-x-2"
      >
        <div className="absolute call top-[0px] left-[0px] transition duration-[4s] opacity-0 border p-[10px] bg-blue-500 rounded-full">
          <FaPhone title="Call" className="text-white text-[25px]" />
        </div>
        <div className="absolute whatapp top-0 left-0  p-[10px] transition duration-[4s]  opacity-0 bg-green-500 rounded-full">
          <FaWhatsapp title="WhatsApp" className="text-white text-[25px]" />
        </div>
        <span className="font-semibold"> <MdContactPhone title="Contact" className="text-[25px] " /></span>
      </a>
      <div ref={container} className="bg-white absolute top-[150px] right-[60px] flex items-center   rounded-[30px] h-[250px] md:w-[32%] shadow-lg p-6 w-full"
        style={{ background: `url(${graphiback})`, backgroundSize: "cover" }}>
        <div className="mt-2 text-gray-700 w-full flex">
          <div className="ml-20 md:ml-0">
            <h1 className="md:text-[25px] text-md font-bold text-[#FF6900]">SHRIRAM SINGH</h1>
            <h5 className="md:text-[12px] text-sm font-bold text-[#FF6900]">CEO & FOUNDER</h5>
            <div className="md:w-[79%] w-[50%] mt-[5px] h-[1px] bg-orange-500"></div>
            <p className="mt-[15px]">📞 +1 234 567 890</p>
            <p className="mt-[8px]">📧 info@company.com</p>
            <p className="mt-[8px]">🌐 www.companywebsite.com</p>
            <p className="mt-[8px]">📍 123 Business St, New York, USA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-26 h-26 rounded-full">
              <img src={men} alt="company name" className="border-[#FF6900] rounded-full w-full h-full object-cover" />
            </div>
            <h1 className="mt-[20px] text-[18px] font-semibold text-[#FF6900]">Company Name</h1>
          </div>
        </div>
      </div>
      {isOpen && <PayNow onPayClose={handleClosePay} />}
    </div>
  </>);
};

export default Home;
