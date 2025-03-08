import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
import logo from "../assets/optimizaum.png";
import FinanceDashboard from "./FinanceDashboard";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseMenu = (e) => {
        if (e.target.id === "mobile-menu") {
            setIsOpen(false);
        }
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); 
    };
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="bg-white shadow-md py-3 px-8 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">

                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <span className="text-lg font-semibold mx-5 hidden md:flex">Business Name</span>
                </div>

                <div className="hidden md:flex items-center space-x-10">
                    <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="text-black hover:text-blue-700 font-semibold">
                        Services
                    </a>
                    <a href="#payment" onClick={(e) => handleNavClick(e, "payment")} className="text-black hover:text-blue-700 font-semibold">
                        Payment & Visiting Card
                    </a>
                    <a href="#gallery" onClick={(e) => handleNavClick(e, "gallery")} className="text-black hover:text-blue-700 font-semibold">
                        Gallery
                    </a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="text-black hover:text-blue-700 font-semibold">
                        Contact Us
                    </a>
                    <a href="#social" onClick={(e) => handleNavClick(e, "social")} className="text-black hover:text-blue-700 font-semibold">
                        Social Media
                    </a>
                </div>

                <div className="hidden md:flex items-center">
                    <a href="#"
                        onClick={handleOpenModal}
                        className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition space-x-2">
                        <CiCreditCard1 className="text-xl font-bold" />
                        <span>Visiting</span>
                    </a>
                </div>

                <div className="flex items-center md:hidden">
                    <a href="#"
                        onClick={handleOpenModal}
                        className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition space-x-2 mr-4">
                        <CiCreditCard1 className="text-xl font-bold" />
                        <span>Visiting</span>
                    </a>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className={`fixed inset-0 bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={handleCloseMenu}>
                <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

                    <button className="absolute top-4 right-4 text-2xl" onClick={() => setIsOpen(false)}>
                        <IoClose />
                    </button>

                    <div className="flex mt-4">
                        <span className="text-xl font-semibold text-green-800 flex">
                            <FaBusinessTime className="mx-3 text-black" size={25} />Business Name
                        </span>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex flex-col mt-8 space-y-4 px-6">
                        <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="text-black hover:text-blue-700 font-semibold py-2">
                            Services
                        </a>
                        <a href="#gallery" onClick={(e) => handleNavClick(e, "gallery")} className="text-black hover:text-blue-700 font-semibold py-2">
                            Gallery
                        </a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="text-black hover:text-blue-700 font-semibold py-2">
                            Contact Us
                        </a>
                        <a href="#social" onClick={(e) => handleNavClick(e, "social")} className="text-black hover:text-blue-700 font-semibold py-2">
                            Social Media
                        </a>
                    </div>
                </div>
            </div>
            {isModalOpen && <FinanceDashboard onClose={handleCloseModal} />}
        </nav>
    );
};

export default Header;
