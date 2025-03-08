import React from "react";
import img1 from "../assets/business-women.jpg";

const images = [
    { src: img1, bgColor: "bg-orange-200", size: "w-34 h-40" },
    { src: img1, bgColor: "bg-yellow-200", size: "w-34 h-40" },
    { src: img1, bgColor: "bg-green-200", size: "w-34 h-40" },
    { src: img1, bgColor: "bg-orange-200", size: "w-34 h-40" },
    { src: img1, bgColor: "bg-gray-200", size: "w-34 h-40" },
    { src: img1, bgColor: "bg-yellow-200", size: "w-34 h-40" },
];

const Gallery = () => {
    return (
        <div>
            <h1 id="gallery" className="text-2xl font-bold text-center">Gallery</h1>
            <div className="relative flex bg-gradient-to-br from-blue-40 to-yellow-50 p-10 backdrop-blur-lg w-full max-w-[100%]">

                <div className="grid grid-cols-1 max-full md:w-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-5 w-full max-w-[100%]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-4 ${image.bgColor} shadow-lg flex justify-center items-center ${index % 2 === 0 ? " w-full md:w-45 md:h-48 " : ""
                                }`}
                        >
                            <img
                                src={image.src}
                                alt="Gallery"
                                className={`object-cover rounded-xl ${image.size} transition-transform duration-300 ease-out hover:scale-90 w-full md:w-34 h-40`}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Gallery;
