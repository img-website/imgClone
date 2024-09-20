import React from 'react'
import Image from "next/image";
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Cta from '@/components/cta/Cta';
import PortfolioSection from '@/components/portfolio/portfolio';
import Blog from '@/components/blog/Blog';
import Form from '@/components/contactForm/Form';
import Gallery from '@/components/gallery/Gallery';

function customerRelationshipManagement() {
    return (
        <>
            <Header />
            {/* hero */}
            <div className="relative">
                <div className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-tr  after:via-theme2/80 after:to-theme1/70 after:from-theme1/70 after:backdrop-blur-sm">
                    <Image src="/img/customer-relationship-management-1519w.webp" width={'1000'} height={'1000'} alt="" className='h-full w-full object-cover overflow-hidden object-top' />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
                    <div className="w-full">
                        <div className="max-w-5xl grow-0 text-center mx-auto text-balance">
                            <div className="font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-6xl/tight tracking-[-0.04em]">
                                <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                                    Customer Relationship Management Software
                                </span>
                            </div>
                            <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
                                LeadSquared is a cloud-based, highly scalable marketing automation and CRM solution designed for businesses of all sizes. This software helps manage customer relationships effectively. The significance of LeadSquared CRM lies in its ability to meet customer needs efficiently and conveniently. It offers comprehensive customer information to enhance sales and marketing efforts.
                            </div>
                            <div className=" flex justify-center w-full mt-6">
                                <button className="px-4 text-sm text-[white] rounded-full bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300">
                                    <span>Schedule a consultation</span>
                                    <span>
                                        <svg className='size-5' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path></svg>
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* hero */}


            {/* benifits sec start */}
            <div className="relative bg-gray-100 py-6 md:py-8 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">

                    <div className="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">

                        <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                            <p className="
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                ">
                                <span>Benefits Customer </span> <span> Relationship Management Software</span>

                            </p>

                        </div>
                        <div className="w-full grid md:grid-cols-3 gap-8">
                            <div className="border-2 p-5 group rounded-3xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-3xl before:border-fuchsia-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-fuchsia-700/40 duration-300">
                                <div className="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl h-full">
                                    <div className="flex p-3 flex-col gap-3">
                                        <div className="lg:text-6xl md:text-4xl text-3xl font-bold text-fuchsia-500 *:size-full">
                                            01
                                        </div>
                                        <div className="md:text-lg sm:text-base text-sm leading-6 capitalize font-bold">
                                            EASY TO USE
                                        </div>
                                        <div className="mt-2 sm:text-base text-sm leading-6">
                                            The time and effort needed to learn this software should be minimal. It is user-friendly and fulfills all the requirements specified by customers.
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                                <div className="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                            </div>
                            <div className="border-2 p-5 group rounded-3xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-3xl before:border-pink-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-pink-700/40 duration-300">
                                <div className="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl h-full">
                                    <div className="flex p-3 flex-col gap-3">
                                        <div className="lg:text-6xl md:text-4xl text-3xl font-bold text-pink-500 *:size-full">
                                            02
                                        </div>
                                        <div className="md:text-lg sm:text-base text-sm leading-6 capitalize font-bold">
                                            SECURE ENVIRONMENT
                                        </div>
                                        <div className="mt-2 sm:text-base text-sm leading-6">
                                            In today’s world, security threats are on the rise. This software does not negatively impact data or hardware. It is essential to implement proper measures to ensure data security.
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                                <div className="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                            </div>
                            <div className="border-2 p-5 group rounded-3xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-3xl before:border-rose-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-rose-700/40 duration-300">
                                <div className="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl h-full">
                                    <div className="flex p-3 flex-col gap-3">
                                        <div className="lg:text-6xl md:text-4xl text-3xl font-bold text-rose-500 *:size-full">
                                            03
                                        </div>
                                        <div className="md:text-lg sm:text-base text-sm leading-6 capitalize font-bold">
                                            INTEROPERABILITY
                                        </div>
                                        <div className="mt-2 sm:text-base text-sm leading-6">
                                            The software can easily exchange information with other applications and make use of the information transparently.
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                                <div className="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* benifits sec Ends */}

            {/* service start */}
            <div className="bg-theme1 relative overflow-hidden select-none py-6 md:py-8 lg:py-16">

                <div className="mx-auto max-w-7xl px-6 lg:px-8  z-40 relative">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center text-white">
                        <span className="font-normal">Additional On-Demand App Development </span>
                        <span className="font-bold text-white"> Services We Provide</span>
                    </p>
                    <div className="md:text-base text-sm opacity-70 mt-3 mb-lg-1 text-center text-white">
                        As we said, we strive to offer everything you need for your business under one roof for higher quality and faster delivery.
                    </div>
                    <div className="mx-auto md:mt-10 flex gap-x-8 gap-y-16 pt-10 sm:pt-8 lg:mx-0">
                        <div className="flex flex-row flex-wrap w-fullrelative z-40 justify-center">
                            <div className="lg:w-1/3 sm:w-1/2 w-full lg:p-5 md:p-4 p-3">
                                <a href="javascript:;" className="h-full cursor-pointer group duration-300 md:hover:scale-105 flex items-center overflow-hidden w-full bg-white p-6 rounded-lg rounded-br-none shadow-md">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" className="text-gray-950 text-xl lg:w-12 lg:h-12 md:w-10 md:h-10 size-8 text-center" xmlns="http://www.w3.org/2000/svg"><path d="M 18.740234 6 C 18.218234 6 12.780203 6.0222031 12.283203 6.0332031 C 11.288203 6.0332031 10.576109 6.0228906 11.287109 6.8378906 C 11.689109 7.2828906 23.845578 21.083203 24.142578 21.408203 C 24.829578 22.180203 25.221187 22.038516 25.742188 21.853516 C 25.907187 21.799516 31.723797 19.594297 31.841797 19.529297 C 32.255797 19.323297 31.758609 18.736156 31.474609 18.410156 C 31.367609 18.302156 20.848469 6.739375 20.730469 6.609375 C 20.232469 6.033375 19.996234 6 18.740234 6 z M 13.455078 13 C 13.455078 13 12.854797 13.077375 12.216797 13.734375 C 11.762797 14.172375 0.19104688 24.617078 0.12304688 24.705078 C -0.22895313 25.187078 0.20420312 25.033969 0.90820312 24.792969 C 0.94220313 24.792969 5.6503906 23.310547 5.6503906 23.310547 C 5.6843906 23.277547 5.6495938 23.299344 5.6835938 23.277344 C 5.6615938 23.036344 5.6496719 22.030844 5.6386719 21.964844 C 5.6046719 21.712844 5.7424688 21.635109 5.9804688 21.537109 L 11.515625 19.582031 C 11.549625 19.549031 15.921 16.141453 16 16.064453 L 16 16.009766 L 13.455078 13 z M 15.775391 20 C 15.624391 20.011 15.288922 20.044578 15.044922 20.142578 C 14.801922 20.240578 7.6807813 22.375891 7.4257812 22.462891 C 7.1707813 22.560891 6.8454219 22.637266 6.8574219 22.822266 C 6.8694219 22.942266 6.9625625 22.954047 7.1015625 22.998047 C 7.2285625 23.030047 22.362656 26.644703 22.722656 26.720703 C 23.511656 26.872703 24.670547 27.221875 25.435547 26.796875 C 25.551547 26.741875 31.722172 22.723203 31.826172 22.658203 C 32.093172 22.462203 32.045422 22.332578 31.732422 22.267578 C 31.616422 22.256578 30.492594 22.12 29.808594 22 C 29.808594 22 23.974703 24.328813 23.845703 24.382812 C 23.034703 24.731813 22.477234 24.228594 21.990234 23.683594 L 19.091797 20.447266 C 18.812797 20.404266 16.030391 19.989 15.775391 20 z"></path></svg>
                                    <div className="text-slate-900 text-center font-semibold ms-3 capitalize  text-bas ">Daily Customer Records</div>
                                </a>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 w-full lg:p-5 md:p-4 p-3">
                                <a href="javascript:;" className="h-full cursor-pointer group duration-300 md:hover:scale-105 flex items-center overflow-hidden w-full bg-white p-6 rounded-lg rounded-br-none shadow-md">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-gray-950 text-xl lg:w-12 lg:h-12 md:w-10 md:h-10 size-8 text-center" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path></svg>

                                    <div className="text-slate-900 text-center font-semibold ms-3"> Follow Up Details Facility</div>
                                </a>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 w-full lg:p-5 md:p-4 p-3">
                                <a href="javascript:;" className="h-full cursor-pointer group duration-300 md:hover:scale-105 flex items-center overflow-hidden w-full bg-white p-6 rounded-lg rounded-br-none shadow-md">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-gray-950 text-xl lg:w-12 lg:h-12 md:w-10 md:h-10 size-8 text-center" xmlns="http://www.w3.org/2000/svg"><path d="M13 21V23.5L10 21.5L7 23.5V21H6.5C4.567 21 3 19.433 3 17.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V20C21 20.5523 20.5523 21 20 21H13ZM7 19V17H13V19H19V16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19H7ZM7 5V7H9V5H7ZM7 8V10H9V8H7ZM7 11V13H9V11H7Z"></path></svg>

                                    <div className="text-slate-900 text-center font-semibold ms-3">Customized Dynamic Reports</div>
                                </a>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 w-full lg:p-5 md:p-4 p-3">
                                <a href="javascript:;" className="h-full cursor-pointer group duration-300 md:hover:scale-105 flex items-center overflow-hidden w-full bg-white p-6 rounded-lg rounded-br-none shadow-md">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-gray-950 text-xl lg:w-12 lg:h-12 md:w-10 md:h-10 size-8 text-center" xmlns="http://www.w3.org/2000/svg"><path d="M189.6 19.18C162 46.06 150.9 71.02 149 94.29c-1.7 21.21 4.3 41.51 14.6 60.81 11.2-2.8 23.2-2.7 34.7.9 4.5-19.1 10.5-38.6 24.3-56 14.4-18.06 36.9-33.1 72.5-43.47-22-16.95-48.1-28.2-75.9-33.63-10.2-1.99-20.1-3.23-29.6-3.72zm-25.1.41c-31.6 2.76-58.5 14.19-80.27 31.83-16.52 13.36-30.19 30.44-40.65 50.28l1.38-.2c6.28 45 31.59 70.4 75.44 83.6 7-9.9 16.1-17.9 26.3-23.4-10.8-20.9-17.6-44.1-15.6-68.86 1.9-23.76 12.1-48.51 33.4-73.25zm146.8 51.25c-40 9.69-61.5 23.99-74.6 40.36-12 15.2-17.2 32.8-21.6 52.2 7.3 4.2 12.9 9.2 17.1 14.8 4 5.4 6.6 11.2 8.6 17.1 33.4-15.7 76.2-33.2 118-30.1-7-39.3-24-70.81-47.5-94.36zM32.5 127c-4.83 13.6-8.37 28.1-10.52 43.3-4.54 32-.31 67.5 10.98 99.9 29.71 2.9 53.76-2.6 72.74-21.8-.6-5.5-.8-11.1-.7-16.7.2-11 2.5-21.4 6.4-30.7-38.71-12.9-66.7-37.3-78.9-74zm318 55.9h-2.6l-6.6.3c-2.2.2-4.3.4-6.4.6-33.3 3.8-68.3 19-96.1 32.3l-7.2 3.4c-1 .9-2.1 1.8-3.1 2.8 0 0-23-18.1-55.1-24.7-23.1-4.7-16.4 33.5 1.5 49 18.9 16.5 36.8 16.3 36.8 16.3-11 20.3-20.3 38.2-28.8 54.6 23 5.7 53.9 4.7 94.9-7.4l11.7-3.5-.2 12.2c-.4 27.5-25.9 53.7-61.9 68.3-24.5 9.9-54.6 14-86.5 7.5-18.2 29.9-39.9 60.1-74.15 99.4H355.9c-.1-10.3.2-20.8.6-31.6l10.9 5.3-8.5-29.1 15.6 4.2-17-55.4c-.8-13.2-2.5-26.1-5.6-38.5 43.9 10.3 98.5 24.3 126 17.4 8-2 21.1-27.6 17.7-43.9-5.3-25.9-40.3-36.3-58.4-52.4 0 0-12.5-29-22.7-43.2-11.7-16.3-32.7-34.1-41.7-41.5l-4.8-.8c-5.7-1-11.5-1.6-17.5-1.6zm3 40.8c20.3 3.4 43.2 9.7 39.4 38.7-24.7-1.9-48.8-3.6-39.4-38.7zM109.6 269c-19.61 15.2-43.6 20.6-69.25 19.6 14.27 31.5 35.56 58.1 62.05 72.8 18.3-11 30.4-32.9 26-56.4-8.9-10.5-15.1-22.9-18.8-36zm37.4 52.6c-1.9 19.2-11.7 36.6-25.9 48.5 23.9 9.2 46.9 11.3 67.5 8.6 8.8-15.7 8.2-28.3 2.7-41.4-17.5-2.3-32.2-7.8-44.3-15.7zm120.7 9.6c-21.2 5.2-40.3 7.6-57.2 7.4 3 11.2 3.2 23.2-.5 35.6 3.6-1.2 7.2-2.4 10.6-3.8 23.6-9.5 40.2-25.4 47.1-39.2z"></path></svg>
                                    <div className="text-slate-900 text-center font-semibold ms-3">Support/Vendor/Partner Relationship</div>
                                </a>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 w-full lg:p-5 md:p-4 p-3">
                                <a href="javascript:;" className="h-full cursor-pointer group duration-300 md:hover:scale-105 flex items-center overflow-hidden w-full bg-white p-6 rounded-lg rounded-br-none shadow-md">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-gray-950 text-xl lg:w-12 lg:h-12 md:w-10 md:h-10 size-8 text-center" xmlns="http://www.w3.org/2000/svg"><path d="M386.539 111.485l15.096 248.955-10.979-.275c-36.232-.824-71.64 8.783-102.657 27.997-31.016-19.214-66.424-27.997-102.657-27.997-45.564 0-82.07 10.705-123.516 27.723L93.117 129.6c28.546-11.803 61.484-18.115 92.226-18.115 41.173 0 73.836 13.175 102.657 42.544 27.723-28.271 59.013-41.721 98.539-42.544zM569.07 448c-25.526 0-47.485-5.215-70.542-15.645-34.31-15.645-69.993-24.978-107.871-24.978-38.977 0-74.934 12.901-102.657 40.623-27.723-27.723-63.68-40.623-102.657-40.623-37.878 0-73.561 9.333-107.871 24.978C55.239 442.236 32.731 448 8.303 448H6.93L49.475 98.859C88.726 76.626 136.486 64 181.775 64 218.83 64 256.984 71.685 288 93.095 319.016 71.685 357.17 64 394.225 64c45.289 0 93.049 12.626 132.3 34.859L569.07 448zm-43.368-44.741l-34.036-280.246c-30.742-13.999-67.248-21.41-101.009-21.41-38.428 0-74.385 12.077-102.657 38.702-28.272-26.625-64.228-38.702-102.657-38.702-33.761 0-70.267 7.411-101.009 21.41L50.298 403.259c47.211-19.487 82.894-33.486 135.045-33.486 37.604 0 70.817 9.606 102.657 29.644 31.84-20.038 65.052-29.644 102.657-29.644 52.151 0 87.834 13.999 135.045 33.486z"></path></svg>
                                    <div className="text-slate-900 text-center font-semibold ms-3">Tracks Leads and Other Details</div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* service Ends */}

            <Cta/>

            <Blog/>

            <Form/>



            <Footer />
        </>
    )
}

export default customerRelationshipManagement
