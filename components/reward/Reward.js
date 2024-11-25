import React from 'react'
import Image from "next/image";


function Reward() {
  return (
    <>
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
            <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <p className="max-md:text-2xl/tight pt-16 text-center max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                        <span className='text-white'>Uncover More  </span>
                        <span className="font-bold text-theme2">  About Us</span>
                    </p>
                                <p 
                                    className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Our achievement story is a testament to teamwork and perseverance. Together, we've
                                    overcome challenges, celebrated victories, and created a narrative of progress and
                                    success.</p>
                            </div>
                        </div>
                        <div className="w-full flex-col justify-center items-start gap-6 flex">
                            <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div
                                    className="w-full h-full p-3.5 rounded-[20px] border hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 className=" text-2xl font-bold font-manrope leading-9 text-white">33+ Years</h4>
                                    <p className="text-gray-300 text-base font-normal leading-relaxed">Influencing Digital
                                        Landscapes Together</p>
                                </div>
                                <div
                                    className="w-full h-full p-3.5 rounded-[20px] border hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 className="text-white text-2xl font-bold font-manrope leading-9  ">125+ Projects
                                    </h4>
                                    <p className="text-gray-300 text-base font-normal leading-relaxed">Excellence Achieved
                                        Through Success</p>
                                </div>
                            </div>
                            <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div
                                    className="w-full p-3.5 rounded-[20px] border hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 className="text-white text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                    <p className="text-gray-300 text-base font-normal leading-relaxed">Our Dedication to
                                        Innovation Wins Understanding</p>
                                </div>
                                <div
                                    className="w-full h-full p-3.5 rounded-[20px] border hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 className="text-white text-2xl font-bold font-manrope leading-9">99% Happy
                                        Clients</h4>
                                    <p className="text-gray-300 text-base font-normal leading-relaxed">Mirrors our Focus on
                                        Client Satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="px-4 text-sm text-theme1 inline-flex items-center gap-2 font-semibold rounded-full py-3 border-theme1 overflow-hidden border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                    <span>View More</span>
                    <span>
                    <svg className='size-5' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg>
                    </span>
                    </button>
                </div>
                <div className="w-full lg:justify-start justify-center items-start flex">
                    <div
                        className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border relative">
                        <Image width={1000} height={10000} loading='lazy' quality={90} className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                            src="https://images.unsplash.com/photo-1521737451536-00a86f630f3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about Us image" />
                    </div>
                </div>
            </div>
        </div>
         </section>

         {/* work flow */}

         {/* work flow */}
    </>
  )
}

export default Reward