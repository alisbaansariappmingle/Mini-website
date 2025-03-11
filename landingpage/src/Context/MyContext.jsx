import axios from "axios";
import React, { createContext, useState } from "react";

export const MyContext = createContext();
const MyContextProvider = (props) => {

    const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
    const businessId = "67cecd498467537530c0c263";
    const [businessDetails, setBusinessDetails] = useState();

    const getBusinessDetails = () => {
        axios
            .get(`${API_BASE_URL}/business-detail/${businessId}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                console.log("bussines result ---> hello sunny rajbhar", result);

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
                setAllServices(result.data)
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

    const [visitingCard, setVisitingCard] = useState();

    const getVisitingCard = () => {
        axios.get(`${API_BASE_URL}/get-visitingCard/${businessId}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((result) => {
                console.log("Visiting Card --->", result);
                setVisitingCard(result.data);
            })
            .catch((err) => {
                console.error("Error fetching Visiting Card:", err);
            })
    }

    const [payment, setPayment] = useState();

    const getPayment = () => {
        axios.get(`${API_BASE_URL}/get_paymentDetail/${businessId}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((result) => {
            console.log("Payment --->", result);
            setPayment(result.data);
        })
        .catch((err) => {
            console.error("Error fetching Payment:", err)
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
        allSocialMediaUrl,
        getVisitingCard,
        visitingCard,
        getPayment,
        payment
    }
    return (
        <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
    );
};

export default MyContextProvider;