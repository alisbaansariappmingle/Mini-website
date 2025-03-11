import React, { useContext, useEffect, useRef, useState } from "react";
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
import { MyContext } from "../Context/MyContext";

const Home = () => {

  const { getBusinessDetails, businessDetails } = useContext(MyContext)

  // const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
  // console.log("API base url ===>",BASE_URL)
  // const [businessDetails, setBusinessDetails] = useState();

  // const getBusinessDetails = () => {
  //   axios.get(`${BASE_URL}/business-detail/67cecd498467537530c0c263`)
  //     .then((response) => {
  //       // console.log(response.data)
  //       setBusinessDetails(response.data.details);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   getBusinessDetails();
  // }, []);

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
      <div ref={container} className="bg-white absolute md:top-[150px] top-[380px] md:right-[60px] right-[90px] flex items-center  max-w-[450px]  md:rounded-[30px] rounded-[10px] md:h-[250px] h-[150px] md:w-[32%] shadow-lg p-6 w-[68%] "
        style={{ background: `url(${graphiback})`, backgroundSize: "cover" }}>
        <div className="mt-2 text-gray-700 w-full flex justify-center">
          <div className="">
            <h1 className="md:text-[25px] text-[13px] font-bold text-[#FF6900]">shriram</h1>
            <h5 className="md:text-[12px] text-[10px] font-bold text-[#FF6900]">CEO & FOUNDER</h5>
            <div className="w-[60%] md:w-[79%] mt-[5px] h-[1px] bg-orange-500"></div>
            <p className="mt-[15px] md:text-[15px] text-[9px] md:font-semibold font-bold">📞 +1 234 567 890</p>
            <p className="mt-[8px] md:text-[15px]  text-[9px] md:font-semibold font-bold">📧 info@company.com</p>
            <p className="mt-[8px] md:text-[15px]  text-[9px] md:font-semibold font-bold">🌐 www.companywebsite.com</p>
            <p className="mt-[6px] md:text-[15px]  text-[9px] md:font-semibold font-bold">📍 123 Business St, New York, USA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="md:w-26 md:h-26 w-10 h-10 rounded-full">
              <img src={men} alt="Company" className="border-[#FF6900] rounded-full w-full h-full object-cover" />
            </div>
            <h1 className="mt-[20px] md:text-[18px] text-[12px]  font-semibold text-[#FF6900]">Company Name</h1>
          </div>
        </div>
      </div>
      {isOpen && <PayNow onPayClose={handleClosePay} />}
    </div>
  </>);
};

export default Home;
