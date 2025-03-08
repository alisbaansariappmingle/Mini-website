import React, { useEffect,useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
const services = [
  {
    title: "The Ultimate Platform for Hosting Analytics",
    description:
      "Unlock your podcast’s full potential with Acasta, the premier podcast hosting and monetization platform designed to elevate your content.",
  },
  {
    title: "The Ultimate Platform for Hosting Analytics",
    description:
      "Unlock your podcast’s full potential with Acasta, the premier podcast hosting and monetization platform designed to elevate your content.",
  },
  {
    title: "The Ultimate Platform for Hosting Analytics",
    description:
      "Unlock your podcast’s full potential with Acasta, the premier podcast hosting and monetization platform designed to elevate your content.",
  },
];

const OurServices = () => {  
  const headingRef = useRef(null);
  useEffect(()=>{
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
  })
  return (
  <div className=" w-[100%] m-auto p-[0px] pt-[10px] bg-linear-to-r from-orange-500 to-orange-500 to- mt-[15px] rounded-[10px]">
    <h1 id="services"  className="text-4xl font-semibold text-center  font-poppins mb-[20px] text-[#fff]">Our Services</h1>
      <div className=" p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 bg-[#fff] rounded-[10px]">
       
      {services.map((service, index) => (
        <div key={index} className="bg-gradient-to-br from-[#ffeaa9d6] to-white shadow-lg rounded-xl p-4">
          <h2 className="text-xl font-semibold text-black">{service.title}</h2>
          <p className="text-gray-700 mt-3">{service.description}</p>
          <button className="cursor-pointer mt-5 bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition">
            Call Now
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default OurServices;
