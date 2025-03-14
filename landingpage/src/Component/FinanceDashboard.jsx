import React, { useContext, useEffect } from "react";
import QRcode from '../assets/ORCODE.png';
import { FaDownload, FaShareAlt } from "react-icons/fa";

import graphiback from '../assets/imagegraphic.jpg'
import men from "../assets/men.webp"


import { FaRegCopy } from "react-icons/fa";
// Ensure these imports are correct
import upi from "../assets/upi.png";
import p_pay from "../assets/phonepe.png";
import gpay from "../assets/gpay.png";
import paytm from "../assets/paytm.png";
import { MyContext } from "../Context/MyContext";

const FinanceDashboard = ({ onClose, home }) => {

    const { getVisitingCard, visitingCard, getPayment, payment } = useContext(MyContext);

    useEffect(() => {
        getVisitingCard();
        getPayment();
    }, []);





    console.log(home);

    const payments = [
        { img: upi, name: "upi@id", id: "UPI ID", imgWidth: "w-15" },
        { img: p_pay, name: "Amit Kumar", id: "8976545677765", imgWidth: "w-20" },
        { img: gpay, name: "Amit Kumar", id: "8976545677765", imgWidth: "w-15" },
        { img: paytm, name: "Amit Kumar", id: "8976545677765", imgWidth: "w-15" }
    ];

    return (<>
        {home ? (<><h1 id="payment" className={`md:text-4xl text-2xl font-semibold text-center  font-poppins mb-[10px] text-[#000] mt-[50px] `}> Payment Details and Visiting Card</h1>
            <div className={`w-[100%] inset-0 p-5 ml-[18px]  mx-auto  ${home ? "bg-[#fff]" : "bg-[rgba(0,0,0,0.3)]"} flex justify-center items-center z-50 md:mt-[10px]  ${home ? "" : "fixed"}`}>

                <div className="relative p-6 rounded-lg shadow-lg w-[95%]">
                    {/* Close Button */}
                    {!home && (
                        <button
                            className="absolute top-4 -right-4 text-lg font-semibold text-white py-1 px-3 rounded-xl"
                            onClick={onClose}
                        >
                            ✕
                        </button>
                    )}

                    <div className="relative md:flex gap-4 grid grid-cols-1  bg-gray-100 p-6 rounded-[30px] items-center">
                        {/* Profile Card */}
                        <div className="flex flex-col gap-4 w-full md:w-[25%] text-left">
                            <h2 className="border-2 py-[3px] text-center rounded-[30px] bg-orange-500 text-[#fff] font-poppins"> ₹ Payment Details</h2>
                            {payments.map((payment, index) => (
                                <div key={index} className="flex items-center justify-between   gap-4">
                                    <div className={`flex items-center ${payment.imgWidth}`}>
                                        <img src={payment.img} alt={payment.name} className="w-full h-auto" />
                                    </div>
                                    <div>
                                        <div className={`text-right font-bold `}>{payment.id}</div>
                                        <div className={`text-right text-[14px] d  ${payment.id == "" ? "font-bold " : "text-gray-500"}`}>{payment.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* QR Code Section */}
                        <div className="bg-white rounded-[30px] shadow-lg p-5 w-[100%] md:w-[25%]">
                            <h4 className="text-[20px] text-center my-[10px] font-bold">Scan to Pay </h4>
                            <div className="w-[80%] h-[70%] overflow-hidden flex items-center justify-center m-auto">
                                <img src={QRcode} alt="QR Code" className="w-full h-full object-cover" />
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col justify-center gap-4 w-full md:w-1/4">
                            <button className="bg-orange-500 text-white px-4 py-4 rounded-[30px] flex items-center">
                                <FaDownload className="mr-2" /> Download Visiting Card
                            </button>
                            <button className="bg-[#fff] text-black px-4 py-4 rounded-[30px] flex items-center border border-gray-300">
                                <FaShareAlt className="text-blue-500 mr-2" /> Share Visiting Card
                            </button>
                            <button className="bg-green-500 text-white px-4 py-4 rounded-[30px] flex items-center">
                                <FaShareAlt className="mr-2" /> Share Payment Details
                            </button>
                        </div>

                        {/* Business Card */}
                        <div
                            className="bg-white flex max-w-[450px] items-center relative rounded-[30px] md:h-[250px] h-[180px] shadow-lg  w-full"
                            style={{ backgroundImage: `url(${graphiback})`, backgroundSize: "cover" }}
                        >
                            <div className="mt-2 text-gray-700 w-full flex justify-center gap-10 items-center">
                                <div className=" ">
                                    <h1 className="md:text-[25px] text-[13px] font-bold text-[#FF6900]">{visitingCard?.visitingCard?.name}</h1>
                                    <h5 className="md:text-[12px] text-[10px] font-bold text-[#FF6900]">{visitingCard?.visitingCard?.position}</h5>
                                    <div className="w-[79%] mt-[5px] h-[1px] bg-orange-500"></div>
                                    <p className="mt-[15px] md:text-[15px] text-[13px] md:font-semibold font-bold">📞 {visitingCard?.visitingCard?.contactNumber}</p>
                                    <p className="mt-[8px] md:text-[15px]  text-[13px] md:font-semibold font-bold">📧 {visitingCard?.visitingCard?.email}</p>
                                    <p className="mt-[8px] md:text-[15px]  text-[13px] md:font-semibold font-bold">🌐 {visitingCard?.visitingCard?.website}</p>
                                    <p className="mt-[6px] md:text-[15px]  text-[13px] md:font-semibold font-bold">📍 {visitingCard?.visitingCard?.address}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="md:w-26 md:h-26 w-10 h-10 rounded-full">
                                        <img src={men} alt="Company" className="border-[#FF6900] rounded-full w-full h-full object-cover" />
                                    </div>
                                    <h1 className="mt-[20px] md:text-[18px] text-[12px]  font-semibold text-[#FF6900]">{visitingCard?.visitingCard?.companyName}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>) : (<div className="fixed inset-0 bg-opacity-1 bg-[rgba(0,0,0,0.9)] flex justify-center items-center z-50 ">
                <div className="relative  p-6 rounded-lg shadow-lg w-[93%] lg:w-[70%]">
                    {/* Close Button */}
                    <button
                        className="absolute top-4 -right-4 text-lg font-semibold bg-red-500 text-white py-1 px-3 rounded-xl"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                    <div className="relative lg:flex grid grid-cols-1 gap-4 bg-gray-100 p-6 md:p-28 rounded-[30px]">
                        {/* Profile Card */}
                        <div className="bg-white p-6 rounded-[30px] shadow-lg flex flex-col items-center w-full md:w-[80%] lg:w-1/4">
                            <div className="w-30 h-30 rounded-full overflow-hidden flex items-center justify-center">
                                <img src={men} alt="image" className="w-full h-full object-cover" />
                            </div>
                            <button className="bg-orange-500 mt-[30px] text-white px-4 py-3 rounded-[30px] flex items-center">
                                {visitingCard?.visitingCard?.companyName}
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col justify-center gap-4 w-full md:w-[80%] lg:w-1/4">
                            <button className="bg-orange-500 text-white px-4 py-4 rounded-[30px] flex items-center">
                                <FaDownload className="mr-2" /> Download Visiting Card
                            </button>
                            <button className="bg-white text-[#000] px-4 py-4 rounded-[30px] flex items-center">
                                <FaShareAlt className="mr-2 text-blue" /> Share Visiting Card
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-4 rounded-[30px] flex items-center">
                                <FaRegCopy className="mr-2" />  Save as Contact
                            </button>
                        </div>

                        {/* Business Card */}
                        <div className="bg-white flex items-center relative rounded-[30px] md:h-[250px] h-[24vh] shadow-lg p-6 w-full md:w-[80%] lg:w-1/2"
                            style={{ background: `url(${graphiback})`, backgroundSize: "cover" }}>
                            <div className="mt-2 text-gray-700 w-full flex gap-10 items-center">
                                <div>
                                    <h1 className="md:text-[25px] text-[11px] font-bold text-[#FF6900]">{visitingCard?.visitingCard?.name}</h1>
                                    <h5 className="md:text-[12px] text-[11px] font-bold text-[#FF6900]">{visitingCard?.visitingCard?.position}</h5>
                                    <div className="w-[79%] mt-[5px] h-[1px] bg-orange-500"></div>
                                    <p className="mt-[15px] md:text-[15px] text-[11px] md:font-semibold font-bold">📞 {visitingCard?.visitingCard?.contactNumber}</p>
                                    <p className="mt-[8px] md:text-[15px] text-[11px] md:font-semibold font-bold">📧 {visitingCard?.visitingCard?.email}</p>
                                    <p className="mt-[8px] md:text-[15px] text-[11px] md:font-semibold font-bold">🌐 {visitingCard?.visitingCard?.website}</p>
                                    <p className="mt-[8px] md:text-[15px] text-[11px] md:font-semibold font-bold">📍 {visitingCard?.visitingCard?.address}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-26 h-26 rounded-full">
                                        <img src={men} alt="company name" className="border-[#FF6900] rounded-full w-full h-full object-cover" />
                                    </div>
                                    <h1 className="mt-[20px] text-[18px] font-semibold text-[#FF6900]">{visitingCard?.visitingCard?.companyName}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
    </>);
};

export default FinanceDashboard;
