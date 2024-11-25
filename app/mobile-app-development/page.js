import Header from '@/components/header/Header'
import Reward from '@/components/reward/Reward'
import React from 'react'
import Image from "next/image";
import Cta2 from '@/components/cta2/Cta2';
import Footer from '@/components/footer/Footer';
import Form from '@/components/contactForm/Form';
import Blog from '@/components/blog/Blog';
import Gallery from '@/components/gallery/Gallery';
import Link from "next/link";
import Cta from '@/components/cta/Cta';
import CaseStudy from '@/components/caseStudy/CaseStudy';


function page() {
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
                            <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]" width="1519" height="812" src="/img/ecommerce-hero.webp" alt="Transform Your Ideas into Reality with Our Mobile App Development Expertise.
" />

                            <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between">
                                <div className="xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center">
                                    <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                        <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">Transform Your Ideas into Reality with Our Mobile App Development Expertise.

                                        </span>
                                    </div>
                                    <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto">Elevate your business with our comprehensive mobile app development services. We specialize in both native and cross-platform solutions, integrating advanced IoT, AR/VR, and AI features to create secure, feature-rich mobile applications.
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
            <Reward />
            <Cta />

            {/* case study */}
                <CaseStudy/>
            {/* case study */}
            
            <Gallery />
            <section>
                <div className="relative py-6 md:py-8 lg:py-16">
                    <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-2 relative pb-5">
                        <p className="text-gray-800 max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center">
                            <span className="font-normal text-white">The Mobile
                            </span>
                            <span className="font-bold text-theme2"> App Development Journey</span>
                        </p>
                        <div className="md:text-base text-sm text-black/70 mt-3 text-center">
                            We believe our employees are our greatest strength, and our goals can only be achieved with full team alignment. That’s why we prioritize our team in everything we do.
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-5 z-10">
                        <div className="relative lg:py-20 md:py-16 py-10">
                            <div className="flex flex-wrap w-full justify-center mx-2 max-md:mx-0">
                                <ul className="list-none w-full relative *:-mt-20 max-md:*:mt-0">
                                    <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                                        <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                            <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-white flex items-center justify-center md:border-4 border-2 border-theme1 shadow-md text-theme1 md:text-lg text-base font-bold">
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                                        <div className="text-lg text-theme1 p-2 rounded-full bg-gray-200 border-4 border-gray-200 rotate-180 border-t-0  size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-theme1 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-theme1 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                            1
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full p-8 bg-white mx-auto shadow-md rounded-[20px] relative z-10 border-4 border-theme1 ">
                                                <div className="text-black font-bold text-xl">Project Requirements Documentation
                                                </div>
                                                <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Requirements Identification and Evaluation

                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Identifying and Evaluating Requirements
                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Recommend the latest and most fitting solutions.
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                                        <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                            <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-white flex items-center justify-center md:border-4 border-2 border-theme1 shadow-md text-theme1 md:text-lg text-base font-bold">
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                                        <div className="text-lg text-theme1 p-2 rounded-full bg-gray-200 border-4 border-gray-200 rotate-180 border-t-0  size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-theme1 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-theme1 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                            2
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full p-8 bg-white mx-auto shadow-md rounded-[20px] relative z-10 border-4 border-theme1 ">
                                                <div className="text-slate-900 font-bold text-xl">App Wireframing Process
                                                </div>
                                                <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Design a visual blueprint of the app’s layout and user interface.

                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Include app flow and navigation.                                            </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                                        <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                            <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                                        <div className="text-lg text-theme1 p-2 rounded-full bg-gray-200 border-4 border-gray-200 rotate-180 border-t-0  size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-theme1 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-theme1 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                            3
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full p-8 bg-white mx-auto shadow-md rounded-[20px]  relative z-10 border-4 border-theme1">
                                                <div className="text-slate-900 font-bold text-xl">Resource Management Strategy
                                                </div>
                                                <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Determine the necessary resources for the project, including hardware and software.

                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Establish a plan for resource identification and effective management.

                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                                        <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                            <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                                        <div className="text-lg text-theme1 p-2 rounded-full bg-gray-200 border-4 border-gray-200 rotate-180 border-t-0  size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-theme1 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-theme1 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                            4
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full p-8 bg-white mx-auto shadow-md rounded-[20px]  relative z-10 border-4 border-theme1">
                                                <div className="text-slate-900 font-bold text-xl">Designing and Creating Prototypes
                                                </div>
                                                <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Create a mobile app design, including UI elements, color schemes, and more.

                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Design a functional prototype of the app using sophisticated tools.

                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Submit the prototype for final approval before moving forward with development.

                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                                        <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                            <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                                        <div className="text-lg text-theme1 p-2 rounded-full bg-gray-200 border-4 border-gray-200 rotate-180 border-t-0  size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-theme1 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-theme1 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                            5
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full p-8 bg-white mx-auto shadow-md rounded-[20px]  relative z-10 border-4 border-theme1">
                                                <div className="text-slate-900 font-bold text-xl">Database System Architecture
                                                </div>
                                                <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Develop and implement a database for app data management.

                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                                        <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                            <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                                        <div className="text-lg text-theme1 p-2 rounded-full bg-gray-200 border-4 border-gray-200 rotate-180 border-t-0  size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-theme1 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-theme1 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                            6
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full p-8 bg-white mx-auto shadow-md rounded-[20px]  relative z-10 border-4 border-theme1">
                                                <div className="text-slate-900 font-bold text-xl">Development</div>
                                                <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Write and integrate the code for the application.

                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Develop and integrate app features and functionalities.
                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Leverage technology and tools to enhance app performance.
                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Forward for feedback before finalizing.
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                                        <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                            <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                                        <div className="text-lg text-theme1 p-2 rounded-full bg-gray-200 border-4 border-gray-200 rotate-180 border-t-0  size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-theme1 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-theme1 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                            7
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full p-8 bg-white mx-auto shadow-md rounded-[20px]  relative z-10 border-4 border-theme1">
                                                <div className="text-slate-900 font-bold text-xl">UAT</div>
                                                <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Perform app testing to confirm it meets requirements and functions as intended.
                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Troubleshoot and resolve any potential issues.
                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Move ahead with final approval from clients.
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                                        <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                            <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center">
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                                        <div className="text-lg text-theme1 p-2 rounded-full bg-gray-200 border-4 border-gray-200 rotate-180 border-t-0  size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-theme1 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-theme1 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                            8
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full p-8 bg-white mx-auto shadow-md rounded-[20px]  relative z-10 border-4 border-theme1">
                                                <div className="text-slate-900 font-bold text-xl">Deployment and Go-Live Process</div>
                                                <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Publish the app to an app store or distribution platform.
                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Distribute the app to users.
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[0px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                                        <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                            <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center">
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                                        <div className="text-lg text-theme1 p-2 rounded-full bg-gray-200 border-4 border-gray-200 rotate-180 border-t-0  size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-theme1 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-theme1 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                            9
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full p-8 bg-white mx-auto shadow-md rounded-[20px]  relative z-10 border-4 border-theme1">
                                                <div className="text-slate-900 font-bold text-xl">Ongoing Maintenance and Updates</div>
                                                <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>

                                                        Perform regular maintenance and updates on the app.
                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Provide ongoing support with regular checks and inspections.
                                                    </Link>
                                                    <Link href="javascript:;" className="group/db">
                                                        <svg className="group-hover/db:opacity-80 !size-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
                                                        Ensure app compatibility with operating systems and new devices.
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cta2 />
            <Blog />
            <Form />
            <Footer />
        </>
    )
}

export default page