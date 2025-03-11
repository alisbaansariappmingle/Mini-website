import React, { useContext, useEffect, useRef } from "react";
import img from "../assets/bannerimg.jpg";
import { IoCall } from "react-icons/io5";
import gsap from "gsap";
import SplitType from "split-type";
import { MyContext } from "../Context/MyContext";

const Banner = () => {
    const { getBusinessDetails, businessDetails, API_BASE_URL, getAboutUs, aboutUs } = useContext(MyContext)
    const headingRef = useRef(null);
    const buttonRef=useRef(null);

    useEffect(() => {
        getBusinessDetails();
    }, []);
    useEffect(() => {
        getAboutUs();
    }, []);
    useEffect(() => {
        // Ensure SplitType runs after the component renders
        setTimeout(() => {
            const splitText = new SplitType(headingRef.current, { types: "chars" });
   
            gsap.fromTo(
                splitText.chars,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, stagger: 0.05, duration: 1, ease: "power2.out" }
            );
        }, 100); // Slight delay to ensure the DOM is ready
     
        return () => {
            if (headingRef.current) {
                new SplitType(headingRef.current).revert(); // Cleanup split text when unmounted
            }
        };
    }, []);

    return (
        <div className="relative w-full h-[500px]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 flex items-center justify-start h-full px-20 max-w-3xl">
                <div className="text-white">
                    <h1 ref={headingRef} className="text-lg md:text-xl font-semibold uppercase leading-tight">
                        {businessDetails?.detail?.tagLine}
                    </h1>
                    <div className="w-16 h-1 bg-yellow-500 my-3"></div>
                    <p className="text-md mb-5">
                        {aboutUs?.about?.aboutUs}
                    </p>
                    <button ref={buttonRef} className="cursor-pointer bg-yellow-500 translate-y-[10px] text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition">
                        <IoCall className="text-xl" /> Call Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
