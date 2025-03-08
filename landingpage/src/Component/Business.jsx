function BusinessCard(){
    return <>
         <div className="bg-white flex items-center relative rounded-[30px] h-[250px] shadow-lg p-6 w-1/2"
                                style={{ background: `url(${graphiback})`, backgroundSize: "cover" }}>
                                <div className="mt-2 text-gray-700 w-full flex">
                                    <div>
                                        <h1 className="text-[25px] font-bold text-[#FF6900]">SHRIRAM SINGH</h1>
                                        <h5 className="text-[12px] font-bold text-[#FF6900]">CEO & FOUNDER</h5>
                                        <div className="w-[79%] mt-[5px] h-[1px] bg-orange-500"></div>
                                        <p className="mt-[15px]">📞 +1 234 567 890</p>
                                        <p className="mt-[8px]">📧 info@company.com</p>
                                        <p className="mt-[8px]">🌐 www.companywebsite.com</p>
                                        <p className="mt-[8px]">📍 123 Business St, New York, USA</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-26 h-26 rounded-full">
                                            <img src={men} alt="company name" className="border-[#FF6900] rounded-full w-full h-full object-cover" />
                                        </div>
                                        <h1 className="mt-[20px] text-[18px] font-semibold text-[#FF6900]">Company Name</h1>
                                    </div>
                                </div>
                            </div>
    </>
}

export default BusinessCard;