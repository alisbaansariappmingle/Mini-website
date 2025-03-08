import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-4">
            <div className="flex flex-col md:flex-row md:justify-center items-center gap-4">
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <div className="flex items-center space-x-2 border-r pr-4">
                        <LuPhoneCall className="text-gray-400 text-lg" />
                        <p className="text-sm">+91 9876543210</p>
                    </div>
                    <div className="flex items-center space-x-2 border-r pr-4">
                        <BsWhatsapp className="text-gray-400 text-lg" />
                        <p className="text-sm">+91 9876543210</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MdOutlineMarkEmailUnread className="text-gray-400 text-lg" />
                        <p className="text-sm">Hello@optimizaum.com</p>
                    </div>
                </div>
            </div>

            {/* Address Section */}
            <div className="flex flex-col md:flex-row items-center justify-center text-center mt-4">
                <GrLocation className="text-gray-500 text-lg mb-1 md:mb-0" />
                <p className="text-sm font-thin md:ml-2">Address: Noida, Sector-4 A-40 Basement, 201301, Uttar Pradesh</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-4"></div>

            <div className="text-center">
                <p className="text-gray-400 text-sm">© 2025 <a href="https://miniwebx.com" className="hover:text-yellow-500">MiniWebX</a>, Powered by
                    <a href="https://optimizaum.com/" className="text-yellow-500 font-semibold ml-1">Optimizaum.com</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
