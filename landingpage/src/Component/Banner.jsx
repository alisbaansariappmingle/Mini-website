import React, { useContext, useEffect, useRef } from "react";
import img from "../assets/bannerimg.jpg";
import { IoCall } from "react-icons/io5";
import gsap from "gsap";
import SplitType from "split-type";
import { MyContext } from "../Context/MyContext";

const Banner = () => {
    const { getBusinessDetails, businessDetails, API_BASE_URL, getAboutUs, aboutUs } = useContext(MyContext)
    const headingRef = useRef(null);
    const buttonRef = useRef(null);

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
        <div className="relative  h-[650px] md:h-[500px] md:w-full w-full ">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 flex lg:items-center top-36 md:inset-0 md:justify-start justify-center h-full px-20 max-w-3xl md:max-w-4xl md:mt-5">
                <div className="text-white w-full">
                    <h1 ref={headingRef} className="text-lg md:text-xl font-semibold uppercase leading-tight">
                        {businessDetails?.detail?.tagLine.slice(0, 97)}
                    </h1>
                    <div className="w-16 h-1 bg-yellow-500 my-3"></div>
                    <p className="text-md mb-5">
                        {aboutUs?.about?.aboutUs.slice(0, 97)}
                    </p>

                    <button onClick={() => window.location.href = `tel:${businessDetails?.detail?.contactNumber}`} ref={buttonRef} className="cursor-pointer bg-yellow-500 translate-y-[210px] md:translate-y-[10px] text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition">
                        <IoCall className="text-xl" /> Call Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
