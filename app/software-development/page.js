"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Cta from '@/components/cta/Cta';
import Cta2 from '@/components/cta2/Cta2';
import PortfolioSection from '@/components/portfolio/portfolio';
import Blog from '@/components/blog/Blog';
import Head from 'next/head';
import Accordion from '@/components/accordion/Accordion';
import Form from '@/components/contactForm/Form';





function softwareDevelopment() {
    const accordionItems = [
        {
            title: 'How to choose the best Software Development Services Company in India?',
            content: 'There are many factors and decisions to make before choosing the best software development services company in India. You need to check with the contractor before starting the work with them, as this is the crucial factor in deciding on your success. You can also contact the past company clients and get an idea of it. Once after the shortlist, you can continue the verification process.'
        },
        {
            title: "What are the top benefits of Outsourcing a Software Development Firm?",
            content: 'Outsourcing software development is an essential part of corporate strategies for different businesses. This is the working model used by other companies and also seeks more specialization, quality, and agility in every process. Besides the economics of cost control, time, and scale, many custom software development services provide the maximum benefits you should focus on. Developing a partnership with companies is also another significant benefit of outsourcing a software development firm. You can easily optimize the time for professionals and managers to expand the business in a structured way.'
        },
    ];

    return (
        <>
            <Header />
            {/* hero */}
            <div id="heroColor4" data-color="indigo">
                <span className="hidden before:from-theme1 before:via-theme1/50 before:to-theme1/80 from-theme1 via-theme1/50 to-theme1/80  text-indigo-700">
                    <span className="via-indigo-500 from-indigo-100 to-indigo-100 *:*:text-indigo-400"></span>
                    <span className="bg-theme1/50 hover:bg-indigo-700"></span>
                </span>
                <div className="flex w-full relative bg-slate-50  lg:h-dvh min-h-[650px]">
                    <div className="size-full relative !z-10">
                        <div className="colorApply1 flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply after:absolute after:rounded-b-2xl after:inset-0 after:bg-repeat   before:from-theme1 before:via-theme1/50 before:to-theme1/80">
                            <span className="colorApply2 absolute inset-0 bg-cover bg-right opacity-50 rounded-b-2xl bg-gradient-to-r mix-blend-multiply  from-theme1 via-theme1/50 to-theme1/80"></span>
                            <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]" width="1519" height="812" loading='lazy' src="/img/custom-software-development-1519w.webp" alt="Transform Your Ideas into Reality with Our Mobile App Development Expertise.
" />

                            <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between">
                                <div className="xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center">
                                    <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                        <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">Custom Software Development Services
                                        </span>
                                    </div>
                                    <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto">
                                        Innovation that goes beyond reimagining your enterprise business applications. Driven by values and fueled by innovation, Twin Power Software accelerates your business growth by delivering top-tier solutions.
                                    </div>

                                </div>
                                <div className="xl:w-1/3 lg:w-1/2 max-lg:mx-auto">
                                    <div className="colorApply4 w-full px-5 md:py-10 py-8 md:rounded-2xl rounded-xl  shadow-xl bg-white backdrop-blur-lg relative gap-6 flex flex-col before:absolute before:inset-4 md:hover:before:inset-1 before:duration-200 before:ease-in before:bg-white/5 before:backdrop-blur-2xl before:rounded-xl before: before:z-0 before:m-auto *:w-full *:z-10 ">
                                        <div>
                                            <div className="colorApply5 size-16 rounded-full mx-auto shadow-md shadow-white/5 bg-theme1  text-white">
                                                <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" className="size-full" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="lg:text-xl md:text-lg text-base text-theme1 text-center text-balance font-semibold">Get Top-Notch, Innovative Mobile App Solutions from Us.
                                        </div>
                                        <div className=" flex justify-center w-full">
                                            <button className="px-4 text-sm text-[white] rounded-full bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300">
                                                <span>Schedule a consultation</span>
                                                <span>
                                                    <svg className='size-5' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path></svg>
                                                </span>
                                            </button>
                                        </div>

                                        <div className="md:text-sm text-xs text-theme1 text-center text-balance">Complete the form below with your project specifications.</div>

                                    </div>
                                </div>
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
                                            <Image className="object-cover !w-[1216px] !h-auto md:mt-16 lg:mt-0 " width={'384'} height={'384'} src="/img/custom-software-development.webp" alt="image3" />


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
                                    <span className="font-normal">High-Quality Enterprise Software </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2">Development Company Process</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                    We employ an agile methodology for custom software development. Once the technical and visual designs are finalized, the development phase begins. Our developers use tools like WebStorm IDE, Visual Studio, Android Studio, XCode, and more. Code is committed daily to Bitbucket or GitHub, and it undergoes a thorough review once executed.
                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                    For continuous integration, we use the Jenkins process to automate builds. These builds are then continuously delivered for testing using advanced tools. Our testers install the release on devices, identifying any issues or bugs. These issues are added to the Jira backlog, and the process is repeated. This continuous testing and delivery ensure rapid and efficient software development.
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

            <Cta />

            <div className="relative isolate overflow-hidden py-6 md:py-8 lg:py-16 bg-gray-100">
                <div className="overflow-hidden">
                    <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10">
                        <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center
                first:*:font-normal
                last:*:font-bold last:*:text-theme2
            ">
                            <span>Technologies Provided by Our Enterprise</span>
                            <span> Software Development Company</span>

                        </p>
                        
                        <div className="flex flex-wrap mt-5 sm:mt-8 md:mt-10 items-center">
                            <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                                <div className="border-4 h-full text-center m-5 px-5 border-sky-500 flex flex-col rounded-t-full rounded-b-full bg-white py-20 items-center hover:shadow-2xl hover:shadow-sky-700 relative before:absolute before:w-full before:rounded-t-full before:h-1/2 before:bg-sky-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:rounded-b-full after:h-1/2 after:bg-sky-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                                    <div className="*:size-16 *:p-1 *:mt-2 text-sky-500">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path></svg>
                                    </div>
                                    <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-sky-500  px-2 py-1 rounded-lg">RPA</div>
                                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full"> We enable businesses to decrease human efforts by quickly developing software robots that perform a high-volume transaction and repetitive tasks.</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                                <div className="border-4 h-full text-center m-5 px-5 border-cyan-500 flex flex-col rounded-t-full rounded-b-full bg-white py-20 items-center hover:shadow-2xl hover:shadow-cyan-700 relative before:absolute before:w-full before:rounded-t-full before:h-1/2 before:bg-cyan-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:rounded-b-full after:h-1/2 after:bg-cyan-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                                    <div className="*:size-16 *:p-1 *:mt-2 text-cyan-500">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path></svg>
                                    </div>
                                    <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-cyan-500  px-2 py-1 rounded-lg">Internet of things</div>
                                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">We make use of the various IoT technologies and edge computing to develop connected apps that collect data, analyze, make use of the collected data to insights.</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                                <div className="border-4 h-full text-center m-5 px-5 border-blue-500 flex flex-col rounded-t-full rounded-b-full bg-white py-20 items-center hover:shadow-2xl hover:shadow-blue-700 relative before:absolute before:w-full before:rounded-t-full before:h-1/2 before:bg-blue-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:rounded-b-full after:h-1/2 after:bg-blue-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                                    <div className="*:size-16 *:p-1 *:mt-2 text-blue-500">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12C0 18.09 4.53 23.11 10.4 23.9V21.5A1.59 1.59 0 0 0 9.32 19.97A8.41 8.41 0 0 1 3.6 11.8A8.37 8.37 0 0 1 12.09 3.6A8.4 8.4 0 0 1 20.4 12.31L20.39 12.38A8.68 8.68 0 0 1 20.36 12.76C20.36 12.83 20.35 12.9 20.34 12.96C20.34 13.04 20.33 13.12 20.32 13.19L20.3 13.29C19.27 20.07 10.45 23.87 10.4 23.9C10.92 23.97 11.46 24 12 24C18.63 24 24 18.63 24 12S18.63 0 12 0Z"></path></svg>
                                    </div>
                                    <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-blue-500  px-2 py-1 rounded-lg">Alexa</div>
                                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">We develop Alexa skills for all types of businesses from start-ups and enterprises to quickly manage their task and improve the business process.</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                                <div className="border-4 h-full text-center m-5 px-5 border-indigo-500 flex flex-col rounded-t-full rounded-b-full bg-white py-20 items-center hover:shadow-2xl hover:shadow-indigo-700 relative before:absolute before:w-full before:rounded-t-full before:h-1/2 before:bg-indigo-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:rounded-b-full after:h-1/2 after:bg-indigo-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                                    <div className="*:size-16 *:p-1 *:mt-2 text-indigo-500">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></svg>
                                    </div>
                                    <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-indigo-500  px-2 py-1 rounded-lg">Computer Vision</div>
                                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">We have smart AI developers who develop AI-enabled applications with computer vision for start-ups and enterprises. </p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                                <div className="border-4 h-full text-center m-5 px-5 border-violet-500 flex flex-col rounded-t-full rounded-b-full bg-white py-20 items-center hover:shadow-2xl hover:shadow-violet-700 relative before:absolute before:w-full before:rounded-t-full before:h-1/2 before:bg-violet-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:rounded-b-full after:h-1/2 after:bg-violet-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                                    <div className="*:size-16 *:p-1 *:mt-2 text-violet-500">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Mobile_2"><g><circle cx="12" cy="17.937" r="1"></circle><path d="M16.727,21.937H7.273a2.384,2.384,0,0,1-2.239-2.5V4.563a2.384,2.384,0,0,1,2.239-2.5h9.454a2.384,2.384,0,0,1,2.239,2.5V19.437A2.384,2.384,0,0,1,16.727,21.937ZM7.273,3.063a1.39,1.39,0,0,0-1.239,1.5V19.437a1.39,1.39,0,0,0,1.239,1.5h9.454a1.39,1.39,0,0,0,1.239-1.5V4.563a1.39,1.39,0,0,0-1.239-1.5Z"></path></g></g></svg>
                                    </div>
                                    <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-violet-500  px-2 py-1 rounded-lg">Mobile Apps</div>
                                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">We develop scalable and smooth mobile applications that suit your brand and industry within a limited period.</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                                <div className="border-4 h-full text-center m-5 px-5 border-purple-500 flex flex-col rounded-t-full rounded-b-full bg-white py-20 items-center hover:shadow-2xl hover:shadow-purple-700 relative before:absolute before:w-full before:rounded-t-full before:h-1/2 before:bg-purple-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:rounded-b-full after:h-1/2 after:bg-purple-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                                    <div className="*:size-16 *:p-1 *:mt-2 text-purple-500">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path></svg>
                                    </div>
                                    <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-purple-500  px-2 py-1 rounded-lg">Blockchain</div>
                                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">We have worked on 30+ blockchain projects and help automate their operations. Enterprises incorporate security within their blockchain technology.</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                                <div className="border-4 h-full text-center m-5 px-5 border-fuchsia-500 flex flex-col rounded-t-full rounded-b-full bg-white py-20 items-center hover:shadow-2xl hover:shadow-fuchsia-700 relative before:absolute before:w-full before:rounded-t-full before:h-1/2 before:bg-fuchsia-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:rounded-b-full after:h-1/2 after:bg-fuchsia-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                                    <div className="*:size-16 *:p-1 *:mt-2 text-fuchsia-500">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M6,6 L6,5 C6,2 7.5,1 10,1 L14,1 C16.5,1 18,2.5 18,5 L18,6 C21,6 23,8 23,11 C23,14 21,16 18,16 M14,6 L6,6 C3,6 1,7.5 1,11 C1,14.5 3,16 6,16 M8,19 L16,19 L16,12 L8,12 L8,19 Z M12,19 L12,23 L12,19 Z M9,23 L15,23 L9,23 Z"></path></svg>
                                    </div>
                                    <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-fuchsia-500  px-2 py-1 rounded-lg">Web Application</div>
                                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">Our team of software developers offers backend and frontend development services who have experience in PHP, ReactJS, NodeJS, Python, and other programming languages.</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                                <div className="border-4 h-full text-center m-5 px-5 border-pink-500 flex flex-col rounded-t-full rounded-b-full bg-white py-20 items-center hover:shadow-2xl hover:shadow-pink-700 relative before:absolute before:w-full before:rounded-t-full before:h-1/2 before:bg-pink-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:rounded-b-full after:h-1/2 after:bg-pink-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                                    <div className="*:size-16 *:p-1 *:mt-2 text-pink-500">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 3m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M8 4l2 0"></path><path d="M9 17l0 .01"></path><path d="M21 6l-2 3l2 3l-2 3l2 3"></path></svg>
                                    </div>
                                    <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-pink-500  px-2 py-1 rounded-lg">Artficial Intelligence</div>
                                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">We influence the AI potential to develop business applications that include voice assistant systems, data analytics, automation, and more.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <PortfolioSection />

            {/* accordian start */}
            <div className='py-10'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <section className="lg:w-4/5 w-full mx-auto md:mt-16 mt-8">
                        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Your questions, answered</h2>
                                <p className="mt-1 text-gray-600">Answers to the most frequently asked questions.</p>
                            </div>
                            <Accordion items={accordionItems} />
                        </div>
                    </section>
                </div>
            </div>
            {/* accordian Ends */}
            <Blog />

            <Form />



            <Footer />
        </>
    )
}

export default softwareDevelopment
