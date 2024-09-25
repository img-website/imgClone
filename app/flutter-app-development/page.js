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





function flutterappdevelopment() {
    const accordionItems = [
        {
            title: 'Why should I create native apps instead of using Flutter?',
            content: 'Native apps offer optimized performance and deeper integration with platform-specific features, which can lead to better user experiences and access to advanced capabilities. While Flutter provides a cross-platform solution, native development ensures the highest level of customization and efficiency for each individual platform.'
        },
        {
            title: 'What kinds of applications may be made with Flutter?',
            content: 'Flutter can be used to create mobile apps for iOS and Android, web apps, desktop apps for Windows, macOS, and Linux, and embedded applications for IoT devices.'
        },
        {
            title: 'Is creating an application in Flutter too expensive?',
            content: 'Creating an application in Flutter can be cost-effective due to its single codebase for multiple platforms, which reduces development time and effort. However, costs can vary depending on the apps complexity and features.'
        },
        {
            title: 'How long does it take to create an application using the Flutter framework?',
            content: 'The time to create an application using Flutter varies based on complexity and features. Simple apps can take a few weeks, while more complex applications with advanced functionality may take several months. Generally, Flutters efficiency can accelerate the development process compared to building separate native apps'
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
                            <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]" width={'1000'} height={'1000'} quality={'90'} loading='lazy' src="/img/flutter-hero.webp" alt="Transform Your Ideas into Reality with Our Mobile App Development Expertise.
" />

                            <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between">
                                <div className="xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center">
                                    <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                        <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">Premier Flutter App Development Company
                                        </span>
                                    </div>
                                    <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto">
                                    We turn your digital product ideas into reality. With our Flutter app developers, you can create cross-platform digital experiences efficiently. Flutter’s innovative and expressive framework enables rapid development of next-generation iOS and Android apps from a single codebase.
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
                                            <Image className="object-cover !w-[1216px] !h-auto md:mt-16 lg:mt-0 " width={'384'} height={'384'} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image3" />


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
                                    <span className="font-normal">Expert Flutter App  </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2">Development Solutions</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                We offer Flutter cross-platform development services to create interactive mobile applications with adaptable UI designs and native performance. As a leading Flutter app development provider, we turn your concepts into successful, fully-featured apps. Our team brings extensive experience in Flutter architecture, ensuring high-performance, agile apps with engaging user interfaces. With our rich experience and global reach, we deliver top-notch Flutter app development solutions.
                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                We provide Flutter cross-platform development services to create interactive mobile applications with adaptable UI designs and native performance. Leveraging Flutter, we transform your concepts into successful, fully-featured applications. As a leading Flutter app development service, our team boasts extensive experience in Flutter architecture, delivering apps with engaging UIs and high performance. With our deep expertise and global reach, we offer comprehensive Flutter app development solutions.


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
           
             {/* card */}
             <div className="relative py-6 md:py-8 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">

                    <div className="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">

                        <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                            <p className="
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                ">
                                <span>Android App</span> <span> Development Services</span>

                            </p>
                            <p className="md:text-base text-sm text-black/70 mt-3 text-balance text-center">Next-Gen Android App Development Beside Professional Excellence</p>
                        </div>

                        <div class="grid lg:grid-cols-3 gap-y-8 sm:grid-cols-2 gap-3 mx-auto px-4  relative">
                            <div class="h-full md:group md:hover:shadow-2xl md:hover:shadow-sky-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl relative before:absolute before:h-12 before:w-4 before:bg-sky-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-sky-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg text-base font-medium w-full leading-6 text-sky-500 ">
                                        Personalized Flutter Application Development
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        This service involves building custom mobile applications using the Flutter framework.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-sky-500 rounded-full border-t-4 border-sky-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-sky-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-sky-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">01</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>

                            <div class="h-full md:group md:hover:shadow-2xl md:hover:shadow-amber-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl relative before:absolute before:h-12 before:w-4 before:bg-amber-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-amber-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg text-base font-medium w-full leading-6 text-amber-500 ">
                                        Server-Side Development

                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Businesses commonly use iOS apps to support internal functions and refine their business processes.

                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-amber-500 rounded-full border-t-4 border-amber-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-amber-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-amber-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">02</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>

                            <div class="h-full md:group md:hover:shadow-2xl md:hover:shadow-cyan-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl relative before:absolute before:h-12 before:w-4 before:bg-cyan-700 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-cyan-700">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg text-base font-medium w-full leading-6 text-cyan-600 ">
                                        Flutter API Development
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                            Flutter is Google's SDK for creating beautiful, high-performance user experiences across mobile, web, and desktop from a single codebase.

                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-cyan-600 rounded-full border-t-4 border-cyan-700 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-cyan-600 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute py-1 top-5 left-0 flex flex-col justify-center items-center size-max bg-cyan-600 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">03</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>

                            <div class="h-full md:group md:hover:shadow-2xl md:hover:shadow-rose-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl relative before:absolute before:h-12 before:w-4 before:bg-rose-900 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-rose-900">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg text-base font-medium w-full leading-6 text-rose-700 ">
                                        Custom Flutter Development for Android Apps

                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Flutter provides a cross-platform solution for building applications compatible with both Android and iOS.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-rose-700 rounded-full border-t-4 border-rose-800 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-rose-700 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 left-0 flex flex-col justify-center items-center size-max bg-rose-700 px-5 py-1 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">04</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>

                            <div class="h-full md:group md:hover:shadow-2xl md:hover:shadow-sky-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl relative before:absolute before:h-12 before:w-4 before:bg-sky-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-sky-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg text-base font-medium w-full leading-6 text-sky-500 ">
                                        Flutter Development for iOS application
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                            
                                            Create Flutter apps for iOS with a focus on achieving compatibility, excellent performance, and compliance with Apple’s guidelines.

                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-sky-500 rounded-full border-t-4 border-sky-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-sky-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-sky-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">05</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>

                            <div class="h-full md:group md:hover:shadow-2xl md:hover:shadow-amber-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl relative before:absolute before:h-12 before:w-4 before:bg-amber-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-amber-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg text-base font-medium w-full leading-6 text-amber-500 ">
                                        Comprehensive Flutter Cross-Platform Development Services

                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Developers can create applications that run on both iOS and Android devices using a single codebase.

                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-amber-500 rounded-full border-t-4 border-amber-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-amber-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-amber-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">06</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>

                            <div class="h-full md:group md:hover:shadow-2xl md:hover:shadow-cyan-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl relative before:absolute before:h-12 before:w-4 before:bg-cyan-700 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-cyan-700">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg text-base font-medium w-full leading-6 text-cyan-600 ">
                                        UI/UX Design

                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        UI/UX design to create visually appealing and user-friendly interfaces for your application.

                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-cyan-600 rounded-full border-t-4 border-cyan-700 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-cyan-600 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute py-1 top-5 left-0 flex flex-col justify-center items-center size-max bg-cyan-600 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">07</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>

                            <div class=" h-full md:group md:hover:shadow-2xl md:hover:shadow-rose-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl relative before:absolute before:h-12 before:w-4 before:bg-rose-900 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-rose-900">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg text-base font-medium w-full leading-6 text-rose-700 ">
                                        User Interface Development

                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        This service encompasses the development of the frontend components of your Flutter application
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-rose-700 rounded-full border-t-4 border-rose-800 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-rose-700 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 left-0 flex flex-col justify-center items-center size-max bg-rose-700 px-5 py-1 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">08</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            {/* card */}


            <Cta2 />

            <PortfolioSection />
            <Blog />
            <Form />

                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <section className="lg:w-4/5 w-full mx-auto md:mt-16 mt-8">
                        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                            <p className="
                                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                                first:*:font-normal

                                last:*:font-bold last:*:text-theme2
                            ">
                             <span>Your Questions, </span> <span> Answered</span>

                            </p>
                                <p className="mt-1 text-gray-600">Answers to the most frequently asked questions.</p>
                            </div>
                            <Accordion items={accordionItems} />
                        </div>
                    </section>
                </div>
                
            <Footer />
        </>
    )
}

export default flutterappdevelopment
