import React from 'react'
import Image from "next/image";
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Cta from '@/components/cta/Cta';
import PortfolioSection from '@/components/portfolio/portfolio';
import Blog from '@/components/blog/Blog';
import Form from '@/components/contactForm/Form';

function websiteRedesigning() {
    return (
        <>
            <Header />
            {/* hero */}
            <div className="relative">
                <div className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-tr  after:via-theme2/80 after:to-theme1/70 after:from-theme1/70 after:backdrop-blur-sm">
                    <Image src="/img/website-redesigning-1519w.webp" width={'1000'} height={'1000'} alt="" className='h-full w-full object-cover overflow-hidden object-top' />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
                    <div className="w-full">
                        <div className="max-w-5xl grow-0 text-center mx-auto text-balance">
                            <div className="font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-6xl/tight tracking-[-0.04em]">
                                <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                                    Website Redesigning
                                </span>
                            </div>
                            <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
                                Our website redesign services focus on helping you achieve better business outcomes. With a fresh design, you'll experience increased traffic, more qualified leads, and higher revenue. At TwinPower Software, we prioritize delivering high-quality services that provide excellent value for your investment. By partnering with skilled professionals, we ensure that you receive top-notch solutions.
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

            {/* About Start */}
            <div className="">
                <div className="relative bg-slate-50 py-6 md:py-8 lg:py-16 overflow-hidden ">
                    <div className="mx-auto max-w-7xl flex px-6 lg:px-8 w-full">
                        <div className="absolute order-2 inset-0 size-full pointer-events-none overflow-hidden">
                        </div>
                        <div className="
                    mx-auto max-w-container gap-7 flex max-lg:flex-col group-[]/flip:flex-row-reverse group-[]/flip:max-lg:flex-col max-lg:gap-4  order-1

                    [&>*:first-child]:[&:has(.content1-img)]:lg:block 
                    [&:first-child]:hidden [&>*:last-child]:[&:has(.content1-img)]:max-w-3xl 
                    [&>*:last-child]:[&:has(.content1-img)]:lg:w-3xl
                ">
                            <div className="relative z-10 order-2 pointer-events-none h-auto lg:sticky lg:top-24 self-start mx-auto">
                                <div className="flex [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)]">
                                    <div className="relative flex-shrink-0 p-4 w-full">
                                        <div className="relative z-10 overflow-hidden *:rounded-[20px] [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)] [&~*]:[&:has(.mask)]:lg:hidden">
                                            <Image className="object-cover !w-[1216px] !h-auto md:mt-16 lg:mt-0 " width={'1000'} height={'1000'} src="https://img.freepik.com/free-psd/web-template-with-landing-page-traditional-italian-food-restaurant_23-2148526098.jpg?t=st=1726807900~exp=1726811500~hmac=165a89b8f88ffde291974abdcf35e6d38f8561d04451415306b25e3af9f0a63b&w=996" alt="image3" />


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="relative z-20 order-1 mx-auto lg:mx-0 lg:pr-4 md:py-6 md:md:py-8 h-auto md:sticky md:top-24 self-start shrink-1 grow-0 basis-auto w-full">
                                <p className="
                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                        first:*:font-normal

                        last:*:font-bold last:*:text-theme2
                    ">
                                    <span className="font-normal">Why Does Your Business </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2">Need a Website Redesign?</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                    There are numerous reasons why you might be considering a website redesign. Whether it's due to an outdated design, a non-responsive layout, content updates, or the need for better functionality, TwinPower Software is here to assist you throughout the entire process. We offer top-tier Website Redesign Services at highly competitive rates. Our team collaborates with you to understand your business goals and align them with your website's objectives, bringing your vision to life on the new platform.
                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                    Our primary focus during the redesign is to help boost your business success. The updated website will attract more visitors, generate more leads, and ultimately increase your revenue. At TwinPower Software, we prioritize professionalism and deliver the highest quality services, ensuring excellent value for your investment. We work alongside top experts to guarantee the best results.
                                </p>

                                <div className="mt-8 flex gap-4">
                                    <button className="px-4 text-sm text-[white] bg-theme1 rounded-full inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max hover:bg-theme1/80 duration-300">
                                        <span>Read More</span>
                                        <span>
                                            <svg className='w-5 h-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h9v2h-9zM13 15h9v2h-9zM16 11h6v2h-6zM13 12 8 7v4H2v2h6v4z"></path></svg>
                                        </span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Ends */}

            {/* benifits section start */}
            <div className="relative isolate py-6 md:py-8 lg:py-16">
                <div className="overflow-hidden">
                    <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
                        <p className=" max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                "><span>Benefits Of A  </span>
                            <span> Website Redesigning Include</span></p>
                        <div className="md:text-base text-sm text-center text-white opacity-70 mt-3 mb-lg-1">
                            When we redesign your website, our primary goal is to improve your bottom line. Your new site will get you more traffic, drive more leads, and ultimately increase your revenue.
                        </div>
                    </div>
                </div>
                <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 relative">
                        <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-sky-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-sky-400 before:duration-300">
                            <div className="*:size-16 *:p-1 *:mt-2 text-sky-400">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                            </div>
                            <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-sky-400  px-2 py-1 rounded-lg">
                                Increase Effective Communication
                            </div>
                            <div className="absolute w-6 h-28 bg-sky-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-sky-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-sky-400"></div>
                        </div>
                        <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-cyan-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-cyan-400 before:duration-300">
                            <div className="*:size-16 *:p-1 *:mt-2 text-cyan-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><g id="Location_On"><g><path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path><path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path></g></g></svg>
                            </div>
                            <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-cyan-400  px-2 py-1 rounded-lg">
                                Stay Relevant
                            </div>
                            <div className="absolute w-6 h-28 bg-cyan-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-cyan-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-cyan-400"></div>
                        </div>
                        <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-blue-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-blue-400 before:duration-300">
                            <div className="*:size-16 *:p-1 *:mt-2 text-blue-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"></path></svg>
                            </div>
                            <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-blue-400  px-2 py-1 rounded-lg">
                                Improve Usability
                            </div>
                            <div className="absolute w-6 h-28 bg-blue-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-blue-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-blue-400"></div>
                        </div>
                        <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-indigo-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-indigo-400 before:duration-300">
                            <div className="*:size-16 *:p-1 *:mt-2 text-indigo-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 5h-2V3h2v2zm-2 10v6l2.29-2.29 2.3 2.29L21 19.59l-2.29-2.29L21 15h-6zm4-6h2V7h-2v2zm0 4h2v-2h-2v2zm-8 8h2v-2h-2v2zM7 5h2V3H7v2zM3 17h2v-2H3v2zm2 4v-2H3c0 1.1.9 2 2 2zM19 3v2h2c0-1.1-.9-2-2-2zm-8 2h2V3h-2v2zM3 9h2V7H3v2zm4 12h2v-2H7v2zm-4-8h2v-2H3v2zm0-8h2V3c-1.1 0-2 .9-2 2z"></path></svg>
                            </div>
                            <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-indigo-400  px-2 py-1 rounded-lg">
                                Highlight New Products and Service
                            </div>
                            <div className="absolute w-6 h-28 bg-indigo-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-indigo-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-indigo-400"></div>
                        </div>
                        <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-violet-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-violet-400 before:duration-300">
                            <div className="*:size-16 *:p-1 *:mt-2 text-violet-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"></path></svg>
                            </div>
                            <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-violet-400  px-2 py-1 rounded-lg">
                                Use Technology That Your Audience
                            </div>
                            <div className="absolute w-6 h-28 bg-violet-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-violet-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-violet-400"></div>
                        </div>
                        <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-purple-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-purple-400 before:duration-300">
                            <div className="*:size-16 *:p-1 *:mt-2 text-purple-400">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M8 17v-3"></path></svg>
                            </div>
                            <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-purple-400  px-2 py-1 rounded-lg">
                                Increase Your Impact
                            </div>
                            <div className="absolute w-6 h-28 bg-purple-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-purple-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-purple-400"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* benifits section Ends */}

            {/* {/ strategy /} */}
            <div className="bg-theme1 relative overflow-hidden py-6 md:py-8 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  z-40 relative">
                    <div className="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/5 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="pp0" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                                    <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#pp0)"></rect>
                        </svg>
                    </div>
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center text-white">
                        <span className="font-normal">Features That Can Be Included in a  </span>
                        <span className="font-bold text-white"> Website Redesign </span>
                    </p>
                    <div className="md:text-base text-sm text-center text-white opacity-70 mt-3 mb-lg-1">
                        We develop exceptional web applications for a wide range of industries and clients around the world. Our commitment is to gain a deep understanding of your industry and target audience before we begin the development process.
                    </div>

                    <div className="flex flex-col  pt-4">
                        <div className="flex flex-wrap max-sm:gap-x-2 gap-5 py-5 justify-center text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto">
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Memory-Friendly UX
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Mobile/Tab Compatible
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Call To Action (CTA)
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Visual Hierarchy
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                High Performance
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Browser Compatible
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                SEO Friendly Structure
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Cutomizable
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Fully Secure
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {/ strategy-end /} */}

            {/* cta */}
            <Cta />
            <PortfolioSection />
            <Blog />
            <Form />

            <Footer />
        </>
    )
}

export default websiteRedesigning
