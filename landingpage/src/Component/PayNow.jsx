import React from "react";
import qr from "../assets/scan_me_qr_code.jpg";
import { FaDownload } from "react-icons/fa6";
import p_pay from "../assets/phonepay (2).png";
import gpay from "../assets/gpay (2).png";
import upi from "../assets/upi.png";
import { MdContentCopy } from "react-icons/md";
import paytm from "../assets/Paytm (2).png";
import "../Component/PayNow.css";

const PayNow = ({ onPayClose }) => {
    return (
        <div className="fixed pb-5 bg-[rgba(0,0,0,0.9)] inset-0 flex justify-center items-center bg-opacity-[0.2px] z-50  rounded-lg mt-20 md:mt-0 ">
            {/* Modal */}
            <div className="relative bg-white px-7 w-96 text-center rounded-md shadow-lg pb-5 rounded-lg animated-border">

                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-lg font-semibold bg-red-500 text-white py-1 px-3 rounded-xl"
                    onClick={onPayClose}
                >
                    ✕
                </button>
                <div className="mt-4 rounded-lg flex justify-center">
                    <img src={qr} alt="Scan" className="w-42 h-42" />
                </div>

                <p className="flex font-bold text-center justify-center">
                    Download QR <FaDownload className="mt-1 mx-1" />
                </p>

                <div className="mt-4 w-full">
                    <div className="grid grid-cols-3 gap-4 text-left">
                        {[
                            { img: upi, name: "upiid", id: "upiName", imgWidth: "w-15" },
                            { img: p_pay, name: "Amit Kumar", id: "8976545677765", imgWidth: "w-20" },
                            { img: gpay, name: "Amit Kumar", id: "8976545677765", imgWidth: "w-15" },
                            { img: paytm, name: "Amit Kumar", id: "8976545677765", imgWidth: "w-15" }
                        ].map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="flex items-center">
                                    <img src={item.img} alt="" className={`${item.imgWidth}`} />
                                </div>
                                <div className="text-center font-bold">{item.name}</div>
                                <div className="text-right">{item.id}</div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Account Details */}
                <div className="mt-4 border p-2 rounded-lg">
                    <p className="font-bold text-left">Account Details</p>
                    <label className="block text-gray-700 font-medium text-left gap-3">
                        <p className="font-bold">Account Name:</p>
                        <p>Account Holder Name:</p>
                        <p>IFSC Code:</p>
                    </label>
                    <div className="flex justify-end">
                        <MdContentCopy className="text-orange-500 font-bold" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayNow;
