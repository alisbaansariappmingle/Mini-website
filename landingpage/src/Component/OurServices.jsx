import React from "react";

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
  return (
  <div className="  ">
    <h1 id="services" className="text-3xl font-semibold text-center mt-5">Our Services</h1>
      <div className=" p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
       
      {services.map((service, index) => (
        <div key={index} className="bg-gradient-to-br from-[#ffeaa9d6] to-white shadow-lg rounded-xl p-4">
          <h2 className="text-xl font-semibold text-black">{service.title}</h2>
          <p className="text-gray-700 mt-3">{service.description}</p>
          <button className="mt-5 bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition">
            Call Now
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default OurServices;
