import React from "react";
import img from "../assets/bannerimg.jpg";
import { IoCall } from "react-icons/io5";


const Banner = () => {
    return (
        <div className="relative w-full h-[500px]">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${img})`,

                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 flex items-center justify-start h-full px-20 max-w-3xl">
                <div className="text-white">

                    <h1 className="text-3xl font-semibold uppercase leading-tight">
                        Get a Special Offer for Your <br /> Special Occasion
                    </h1>


                    <div className="w-16 h-1 bg-yellow-500 my-3"></div>


                    <p className="text-md mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        penatibus et magnis dis parturient montes.
                    </p>


                    <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition">
                        <IoCall className="text-xl" /> Call Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
