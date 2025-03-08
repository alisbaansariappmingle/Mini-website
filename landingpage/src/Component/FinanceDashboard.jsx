import React from "react";
import graphiback from '../assets/imagegraphic.jpg'
import men from "../assets/men.webp"
import { FaDownload } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
const FinanceDashboard = ({ onClose }) => {
    return (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative  p-6 rounded-lg shadow-lg w-[70%]">
                {/* Close Button */}
                <button
                    className="absolute top-4 -right-4 text-lg font-semibold bg-red-500 text-white py-1 px-3 rounded-xl"
                    onClick={onClose}
                >
                    ✕
                </button>

                <div className="relative flex gap-4 bg-gray-100 p-6 rounded-[30px]">
                    {/* Profile Card */}
                    <div className="bg-white p-6 rounded-[30px] shadow-lg flex flex-col items-center w-1/4">
                        <div className="w-30 h-30 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={men} alt="image" className="w-full h-full object-cover" />
                        </div>
                        <button className="bg-orange-500 mt-[30px] text-white px-7 py-3 rounded-[30px] flex items-center">
                            <FaRegCopy className="mr-2" /> Save as Contact
                        </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col justify-center gap-4 w-1/4">
                        <button className="bg-orange-500 text-white px-4 py-4 rounded-[30px] flex items-center">
                            <FaDownload className="mr-2" /> Download
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-4 rounded-[30px] flex items-center">
                            <FaShareAlt className="mr-2" /> Share
                        </button>
                    </div>

                    {/* Business Card */}
                    <div className="bg-white flex items-center relative rounded-[30px] h-[250px] shadow-lg p-6 w-1/2"
                        style={{ background: `url(${graphiback})`, backgroundSize: "cover" }}>
                        <div className="mt-2 text-gray-700 w-full flex">
                            <div>
                                <h1 className="text-[25px] font-bold text-[#FF6900]">SHRIRAM SINGH</h1>
                                <h5 className="text-[12px] font-bold text-[#FF6900]">CEO & FOUNDER</h5>
                                <div className="w-[79%] mt-[5px] h-[1px] bg-orange-500"></div>
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
                </div>
            </div>
        </div>
    );
};

export default FinanceDashboard;
