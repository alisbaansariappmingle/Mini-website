import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/business-women.jpg";
import gsap from "gsap";
import SplitType from "split-type";
import axios from "axios";
const images = Array(24).fill({
  src: img1,
  bgColor: "bg-yellow-200",
  size: "w-full h-full"
});

const Gallery = () => {
  const headingRef = useRef(null);
  const BASE_URL=import.meta.env.VITE_APP_API_BASE_URL
  const [image,setImages]=useState([]);
  useEffect(() => {
    setTimeout(() => {
      const splitText = new SplitType(headingRef.current, { types: "chars" });

      gsap.fromTo(
        splitText.chars,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 1, ease: "power2.out" }
      );
    }, 100);
 async  function getFetchData() {
    try{
       const response = await axios.get(`${BASE_URL}/getAll-images/67cc3984626d90e6a28e6119`);
       setImages(response.data);
    }catch(err){
        console.error(err);
    }
 }
 getFetchData();
  }, []);

  return (
    <div className="w-full mt-[70px]">
      {/* 🔹 Animated Heading */}
      <h1
        id="gallery"
        ref={headingRef}
        className="text-4xl font-semibold text-center mt-5 font-poppins mb-[30px] "
      >
        Gallery
      </h1>

      {/* 🔹 Gallery Container */}
      <div className="relative bg-gradient-to-br from-blue-400 to-yellow-300 p-4 backdrop-blur-lg w-full max-w-[100%] mx-auto">
        {/* 🔹 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-2 ${image.bgColor} shadow-lg w-[230px] h-[230px] flex justify-center items-center`}
            >
              {/* 🔹 Image */}
              <img
                src={image.src}
                alt="Gallery"
                className="object-cover rounded-lg transition-transform duration-300 ease-out hover:scale-90 w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
