import React from 'react'
import grl from "../assets/callgrl.png";

const Contact = () => {
    return (
        <div id="contact" className="bg-white w-full min-h-screen  mt-[70px]">

            <div className="flex w-full justify-center">
                <div className="md:flex grid grid-cols-1 justify-end w-full rounded-b-xl bg-gradient-to-t from-amber-100 to-white mt-10 items-center px-6 md:px-16 lg:px-32">
                    <div className="p-6 w-full md:w-1/2">
                        <div className="md:flex md:flex-col items-start space-y-4 md:space-y-0">
                            <h1 className="text-4xl font-semibold text-center md:text-left">
                            Can't find what you're looking for?
                            <br/> 
                            Don't worry we're here to help.
                            </h1>
                        </div>
                        <form className="w-full mt-[40px]">
                        <div className='flex  justify-between'>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="p-2 border-b text-[20px] border-gray-200 outline-none focus:border-gray-400 mt-2 rounded w-full"
                                />
                            </div>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="p-2 border-b text-[20px] border-gray-200 outline-none focus:border-gray-400 mt-2 rounded w-full"
                                />
                            </div>
                            </div>
                            <div className='flex  justify-between mt-[30px]'>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    className="p-2 border-b border-gray-200 text-[20px] outline-none focus:border-gray-400 mt-2 rounded w-full"
                                />
                            </div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    placeholder="City" 
                                    className="p-2 border-b border-gray-200  text-[20px] outline-none focus:border-gray-400 mt-2 rounded w-full"
                                />
                            </div>
                            </div>
                        
                            <div className="mt-[30px]">
                                <textarea
                                    placeholder="Message"
                                    className="p-2 border-b border-gray-200  text-[20px] outline-none focus:border-gray-400 mt-2 rounded w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-4 cursor-pointer py-2 w-full rounded-full text-[20px] text-md font-bold bg-amber-300 hover:bg-amber-400 transition duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                         
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center  w-[38%]  ">
                        <img
                            src={grl}
                            alt="Contact Illustration"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
