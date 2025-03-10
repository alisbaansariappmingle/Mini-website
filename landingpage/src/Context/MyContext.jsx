import axios from "axios";
import React, { createContext, useState } from "react";

export const MyContext = createContext();
const MyContextProvider = (props) => {

    const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
    const businessId = "67ce9146bf0d3e0c4b9bd8c9";
    const [businessDetails, setBusinessDetails] = useState();

    const getBusinessDetails = () => {
        axios
            .get(`${API_BASE_URL}/business-detail/${businessId}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                console.log("bussines result --->", result);

                setBusinessDetails(result.data);
            })
            .catch((err) => {
                console.error("Error fetching business details:", err);
            });
    };

    const [aboutUs, setAboutUs] = useState();

    const getAboutUs = () => {
        axios
            .get(`${API_BASE_URL}/get-aboutUs/${businessId}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                console.log("About result --->", result);
                setAboutUs(result.data);
            })
            .catch((err) => {
                console.error("Error fetching about us:", err);
            });
    }

    const [allBusinessDetails, setAllBusinessDetails] = useState();
    const getAllBusinessDetails = () => {
        axios
            .get(`${API_BASE_URL}/getAll-businessdetail`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                console.log("All business result --->", result);
                setAllBusinessDetails(result.data);
            })
            .catch((err) => {
                console.error("Error fetching all business details:", err);
            });
    }

    const [allImages, setAllImages] = useState();

    const getAllImage = () => {
        axios.get(`${API_BASE_URL}/getAll-images/${businessId}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((result) => {
                console.log("All Images --->", result);
                setAllImages(result.data);
            })
            .catch((err) => {
                console.error("Error fetching all Images:", err)
            });
    }

    const [allServices, setAllServices] = useState();

    const getAllServices = () => {
        axios.get(`${API_BASE_URL}/getAll-services/${businessId}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((result) => {
                setAllImages(result.data)
                console.log("All Services --->", result);
            })
    }

    const [allSocialMediaUrl, setAllSocialMediaUrl] = useState();

    const getAllSocialMediaUrl = () => {
        axios.get(`${API_BASE_URL}/get-SocialMediaUrl/${businessId}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((result) => {
                console.log("All Social Media Url --->", result);
                setAllSocialMediaUrl(result.data);
            })
            .catch((err) => {
                console.error("Error fetching all Social Media Url:", err);
            })
    }



    const value = {
        API_BASE_URL,

        getBusinessDetails,
        businessDetails,
        getAboutUs,
        aboutUs,
        getAllBusinessDetails,
        allBusinessDetails,
        getAllImage,
        allImages,
        getAllServices,
        allServices,
        getAllSocialMediaUrl,
        allSocialMediaUrl
    }
    return (
        <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
    );
};

export default MyContextProvider;