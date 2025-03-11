import React from "react";

function Skeleton() {
    return (
        <>
            {/* Hero Section Skeleton */}
            <div className="w-screen min-h-[80vh] bg-gray-400 px-6 md:px-20 animate-pulse flex flex-col md:flex-row items-center justify-between">
                {/* Left Section - Text Placeholder */}
                <div className="w-full md:w-[40vw] max-w-4xl space-y-4">
                    <div className="h-10 md:h-14 w-4/5 bg-gray-300 rounded-md"></div>
                    <div className="h-10 md:h-14 w-3/4 bg-gray-300 rounded-md"></div>
                    <div className="w-16 h-1 bg-gray-400 mt-3"></div>

                    {/* Paragraph Placeholder */}
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-300 rounded-md"></div>
                        <div className="h-4 w-5/6 bg-gray-300 rounded-md"></div>
                        <div className="h-4 w-4/6 bg-gray-300 rounded-md"></div>
                    </div>

                    {/* Button Placeholder */}
                    <div className="h-10 w-40 bg-gray-300 rounded-lg"></div>
                </div>

                {/* Right Section - Card Placeholder */}
                <div className="w-full md:w-[35%] h-[40vh] bg-gray-300 rounded-[30px] overflow-hidden mt-6 md:mt-0"></div>
            </div>

            {/* Services Section Skeleton */}
            <div className="w-full mx-auto pt-[10px] bg-gray-200 mt-[15px] rounded-[10px] animate-pulse">
                {/* Title Placeholder */}
                <h1 className="text-4xl font-semibold text-center mb-[20px] bg-gray-300 rounded-md h-10 w-48 mx-auto"></h1>

                {/* Cards Placeholder */}
                <div className="grid grid-cols-1 p-[20px] sm:grid-cols-2 md:grid-cols-3 gap-5 bg-white rounded-[10px]">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-300 shadow-lg rounded-xl p-4 space-y-4"
                        >
                            <div className="h-6 w-3/4 bg-gray-400 rounded-md"></div>
                            <div className="h-4 w-full bg-gray-400 rounded-md"></div>
                            <div className="h-4 w-5/6 bg-gray-400 rounded-md"></div>
                            <div className="h-4 w-2/3 bg-gray-400 rounded-md"></div>
                            <div className="h-10 w-28 bg-gray-400 rounded-full mt-4"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Section Skeleton */}
            <div className="w-full md:mt-[70px] animate-pulse">
                <h1 className="text-4xl font-semibold text-center mt-5 mb-[30px] bg-gray-300 rounded-md h-10 w-52 mx-auto"></h1>
                <div className="relative bg-gray-200 md:p-4 px-10 w-full max-w-[100%] md:mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl p-2 bg-gray-300 shadow-lg w-[230px] h-[230px] flex justify-center items-center"
                            >
                                <div className="w-full h-full bg-gray-400 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skeleton;