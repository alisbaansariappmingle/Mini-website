import React, { useContext, useState } from 'react'
import grl from "../assets/callgrl.png";
import axios from 'axios';
import { MyContext } from '../Context/MyContext';

const Contact = () => {
    const { API_BASE_URL, businessId } = useContext(MyContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [city, setCity] = useState();
    const [message, setMessage] = useState();

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = { name, email, phone, city, message };

        axios
            .post(`${API_BASE_URL}/user-form/${businessId}`, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                console.log(result.data);
                alert("Data Submitted Successfully!");
                setName("");
                setEmail("");
                setPhone("");
                setCity("");
                setMessage("");
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to submit data.");
            });
    };


    return (
        <div id="contact" className="bg-white w-full min-h-[78vh]  mt-[70px] md:mx-auto mx-8">

            <div className="flex w-full justify-center">
                <div className="md:flex grid grid-cols-1 justify-end w-full rounded-b-xl bg-gradient-to-t from-amber-100 to-white mt-10 items-center px-6 md:px-16 lg:px-32 ">
                    <div className="p-6 w-full md:w-1/2">
                        <div className="md:flex md:flex-col items-start space-y-4 md:space-y-0">
                            <h1 className="text-4xl font-semibold text-center md:text-left">
                            Can't find what you're looking for?
                            <br/> 
                            Don't worry we're here to help.
                            </h1>
                        </div>
                        <form className="w-full mt-[40px]" onSubmit={handleSubmit}>
                        <div className='flex  justify-between'>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name='name'
                                    className="p-2 border-b text-[20px] border-gray-200 outline-none focus:border-gray-400 mt-2 rounded w-full"
                                />
                            </div>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name='email'
                                    className="p-2 border-b text-[20px] border-gray-200 outline-none focus:border-gray-400 mt-2 rounded w-full"
                                />
                            </div>
                            </div>
                            <div className='flex  justify-between mt-[30px]'>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    name='phone'
                                    className="p-2 border-b border-gray-200 text-[20px] outline-none focus:border-gray-400 mt-2 rounded w-full"
                                />
                            </div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    placeholder="City" 
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    name='city'
                                    className="p-2 border-b border-gray-200  text-[20px] outline-none focus:border-gray-400 mt-2 rounded w-full"
                                />
                            </div>
                            </div>
                        
                            <div className="mt-[30px]">
                                <textarea
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name='message'
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
                    <div className="flex justify-center items-center  w-[38%] mx-auto  ">
                        <img
                            src={grl}
                            alt="Contact Illustration"
                            className="max-w-full h-auto mt-5 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
