import React from "react";
import graphiback from '../assets/imagegraphic.jpg'
import men from "../assets/men.webp"
import { FaDownload } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
const FinanceDashboard = () => {
  return (
    <div className="flex gap-4 bg-gray-100 p-6 rounded-[30px] w-[70%] m-auto">
      {/* Balance Card */}
      <div className="bg-white p-6 rounded-[30px] relative  shadow-lg flex flex-col items-center w-1/4">
      <div className="absolute top-0 left-0 w-10 h-10 border-t-6 border-l-6 border-orange-500 rounded-tl-[30px]"></div>

{/* Bottom-right border */}
<div className="absolute bottom-0 right-0 w-10 h-10 border-b-6 border-r-6 border-orange-500 rounded-br-[30px]"></div>
        <div className="w-30 h-30 rounded-full  overflow-hidden flex items-center justify-center">

          <img src={men} alt="image" className="w-full h-full object-cover" />

        </div>

        <button className="bg-orange-500  mt-[30px] cursor-pointer text-white px-7  py-3 shadow-md  text-[14px] rounded-[30px] flex items-center justify-center">
        <FaRegCopy className="mr-2" /> Save as Contact
        </button>
      </div>

      {/* Transactions */}
      <div className="flex flex-col justify-center gap-4 w-1/4">

        <button className="bg-orange-500  cursor-pointer text-white px-4  py-4 shadow-md  text-[20px] rounded-[30px] flex items-center justify-center">
          <FaDownload className="mr-2" /> Download
        </button>



        <button className="bg-blue-500 cursor-pointer text-white px-4  py-4 shadow-md  rounded-[30px] flex text-[20px] items-center justify-center">
          <FaShareAlt className="mr-2" /> Share
        </button>


      </div>

      {/* Credit Card */}
      <div className={`bg-white flex  items-center relative rounded-[30px] h-[250px] shadow-lg p-6 w-1/2 `} style={{ background: `url(${graphiback})`, backgroundSize: "cover" }}   >
        {/* Top-left border */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-6 border-l-6 border-orange-500 rounded-tl-[30px]"></div>

        {/* Bottom-right border */}
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-6 border-r-6 border-orange-500 rounded-br-[30px]"></div>
        <div className="mt-2 text-gray-700  h-[100%] w-[100%] flex">
        <div>
        <h1 className="text-[25px] font-bold text-[#FF6900] font-poppins tracking-[1px]">SHRIRAM SINGH</h1>
        <h5 className="text-[12px] font-bold text-[#FF6900] font-poppins tracking-[1px]">CEO & FOUNDER</h5>
        <div className="w-[79%] mt-[5px] h-[1px] bg-orange-500"></div>
    <p className="flex items-center text-[16px] mt-[15px]">
      📞 <span className="ml-2">+1 234 567 890</span>
    </p>
    <p className="flex items-center text-[16px] mt-[8px]">
      📧 <span className="ml-2">info@company.com</span>
    </p>
    <p className="flex items-center text-[16px] mt-[8px]">
      🌐 <span className="ml-2">www.companywebsite.com</span>
    </p>
    <p className="flex items-center text-[16px] mt-[8px]">
      📍 <span className="ml-2">123 Business St, New York, USA</span>
    </p>
    </div>
    <div className="flex  flex-col items-center">
      <div className="w-26 h-26 rounded-full ">
           <img src={men} alt="company name" className="border-[#FF6900] order-2 rounded-full w-[100%] h-[100%] object-cover"/>
      </div>
      <h1 className="mt-[20px] text-[18px] font-poppins font-semibold text-[#FF6900] tracking-[1px] ">company Name</h1>
    
    </div>
  </div>
        
     
      </div>

    </div>
  );
};



export default FinanceDashboard;
