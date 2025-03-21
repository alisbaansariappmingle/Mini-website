import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import instagram from "../assets/instagram.jpg";
import { NavLink } from "react-router-dom";
import axios from 'axios'
const SocialMediaLinks = () => {
  const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL
  // const [formData, setFormData] = useState([
  //   {
  //     name: "Facebook",
  //     icon: <FaFacebook className="text-blue-500" />,
  //     borderColor: "#1877F2",
  //     link: "https://www.facebook.com/appminglemedia",
  //   },
  //   {
  //     name: "Instagram",
  //     icon: <img src={instagram} alt="" className="h-6 w-6" />,
  //     borderColor: "#E1306C",
  //     link: "https://www.instagram.com/appminglemedia/",
  //   },
  //   {
  //     name: "WhatsApp",
  //     icon: <SiWhatsapp className="text-green-400" />,
  //     borderColor: "#25D366",
  //     link: "https://www.whatsapp.com/channel/0029VaKDwikICVfjADCpAJ44",
  //   },
  //   {
  //     name: "LinkedIn",
  //     icon: <FaLinkedin className="text-blue-400" />,
  //     borderColor: "#0077B5",
  //     link: "https://www.linkedin.com/in/infinityinram/",
  //   },
  //   {
  //     name: "YouTube",
  //     icon: <FaYoutube className="text-red-500" />,
  //     borderColor: "#FF0000",
  //     link: "https://www.youtube.com/@AppMingleMedia",
  //   },
  //   {
  //     name: "Call",
  //     icon: <IoCall className="text-green-400" />,
  //     borderColor: "#34D399",
  //     link: "",
  //   },
  // ])

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    console.log(BASE_URL);
    async function getFetchData() {
      try {
        const response = await axios.get(`${BASE_URL}/get-SocialMediaUrl/67cecd498467537530c0c263`);
        console.log(response)
        const socialData = response.data;
        setFormData([
          {
            name: "Facebook",
            icon: <FaFacebook className="text-blue-500" />,
            borderColor: "#1877F2",
            link: socialData?.socialMediaUrl?.facebook_Url,
          },
          {
            name: "Instagram",
            icon: <img src={instagram} alt="" className="h-6 w-6" />,
            borderColor: "#E1306C",
            link: socialData?.socialMediaUrl?.instagram_Url,
          },
          {
            name: "WhatsApp",
            icon: <SiWhatsapp className="text-green-400" />,
            borderColor: "#25D366",
            link: socialData?.socialMediaUrl?.whatsApp_Url,
          },
          {
            name: "LinkedIn",
            icon: <FaLinkedin className="text-blue-400" />,
            borderColor: "#0077B5",
            link: socialData?.socialMediaUrl?.linkedln_Url,
          },
          {
            name: "YouTube",
            icon: <FaYoutube className="text-red-500" />,
            borderColor: "#FF0000",
            link: socialData?.socialMediaUrl?.youtube_Url,
          },
          {
            name: "Call",
            icon: <IoCall className="text-green-400" />,
            borderColor: "#34D399",
            link: socialData?.socialMediaUrl?.facebook_Url,
          },
        ])
      } catch (error) {
        console.log(error)
      }
    }
    getFetchData();
  }, [])

  return (
    <div id="social" className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  md:p-5 p-7 md:mx-auto mx-5 ">
      {formData.map((app, index) => (
        <NavLink
          to={app?.link}
          key={index}
          className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg border-l-4 border-r-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          style={{
            borderLeftColor: app.borderColor,
            borderRightColor: app.borderColor,
          }}
        >
          <span className="text-2xl">{app.icon}</span>
          <span className="font-medium">{app.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SocialMediaLinks;