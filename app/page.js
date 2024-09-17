"use client"
import Header from "@/components/header/Header";
import Image from "next/image";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Link from "next/link";
import PortfolioSection from "@/components/portfolio/portfolio";


export default function Home() {
    const [services, setServices] = useState('Treanding Solution');
    return (
        <>
            <Header />
            {/* <LogoSlider/> */}

            <div className="flex w-ful h-fulll pt-10 md:pt-28 lg:pt-24 bg-[] overflow-hidden relative">
                <Swiper className="swiper heroSwiper md:min-h-[500px] h-[500px] md:h-[calc(100dvh-80px)] lg:h-[calc(100dvh-128px)] w-full relative !z-10 max-h-[750px] [&_.swiper-button-prev]:max-lg:!hidden [&_.swiper-button-prev]:!top-[calc(100%-50%)] [&_.swiper-button-prev]:!right-auto [&_.swiper-button-prev]:!left-8 [&_.swiper-button-prev]:!bottom-8 [&_.swiper-button-prev]:!w-10 [&_.swiper-button-prev]:!h-10 [&_.swiper-button-prev]:rounded-lg [&_.swiper-button-prev]:flex [&_.swiper-button-prev]:items-center [&_.swiper-button-prev]:justify-center [&_.swiper-button-prev]:p-0 after:[&_.swiper-button-prev]:content-['prev'] after:[&_.swiper-button-prev]:text-lg after:[&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:duration-200 [&_.swiper-button-prev]:opacity-80 hover:[&_.swiper-button-prev]:opacity-100 [&_.swiper-button-prev]:bg-black
    
    [&_.swiper-button-next]:max-lg:!hidden [&_.swiper-button-next]:!top-[calc(100%-50%)] [&_.swiper-button-next]:!left-auto [&_.swiper-button-next]:!right-8 [&_.swiper-button-next]:!w-10 [&_.swiper-button-next]:!h-10 [&_.swiper-button-next]:rounded-lg [&_.swiper-button-next]:flex [&_.swiper-button-next]:items-center [&_.swiper-button-next]:justify-center [&_.swiper-button-next]:p-0 after:[&_.swiper-button-next]:content-['next'] after:[&_.swiper-button-next]:text-lg after:[&_.swiper-button-next]:text-white [&_.swiper-button-next]:duration-200 [&_.swiper-button-next]:opacity-80 hover:[&_.swiper-button-next]:opacity-100 [&_.swiper-button-next]:bg-black
    "
                    modules={[Navigation]}
                    navigation={true}

                >
                    <div className="swiper-wrapper *:py-5 *:*:flex *:*:h-full *:*:items-center *:*:justify-center *:*:w-full *:*:relative *:*:aspect-[860/460] *:*:overflow-hidden *:*:duration-500 *:*:shadow-lg *:*:before:absolute *:*:before:inset-0 *:*:before:bg-cover *:*:before:bg-right  *:*:before:bg-gradient-to-r *:*:before:mix-blend-multiply *:*:after:absolute *:*:after:inset-0 *:*:after:bg-repeat *:*:after:[background-image:url(https://www.imgglobalinfotech.com/public/tailwind/css/build/assets/grid-97c1b4f1.svg]">
                        <SwiperSlide className=" group flex justify-center items-center !h-full">
                            <div className="group-[.-active]:z-10 shadow-sky-950 before:from-sky-950 before:via-sky-900/80 before:to-sky-900/70 h-full relative after:absolute after:size-full after:inset-0 after:bg-black/60" >
                                <Image
                                    className="size-full object-cover object-right absolute inset-0 -z-[1]  aspect-[1377/460]  "
                                    loading="lazy"
                                    width="1377"
                                    height="460"
                                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60"
                                    alt="Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders"
                                />
                                <div className="relative p-10 flex flex-col my-auto h-full justify-center items-center overflow-hidden duration-150 z-10">
                                    <div className="duration-300 text-center font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-5xl/tight">
                                        <span className="block">Unlock Access to Bespoke</span>
                                        <span className="font-bold text-white block">Apps And Product Innovation with Us!</span>
                                    </div>
                                    <div className="max-md:text-sm/tight text-base/tight text-white/80 pt-5 block text-center max-w-5xl">Step into a digital journey with Twin Power and unlock the gateway to bespoke applications and groundbreaking product innovations. Experience the future of technology at your fingertips!</div>
                                    <div className="mt-10 flex gap-4">
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                            <span>Ask for a Quote</span>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" className='w-5 h-5' width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"></path></svg>
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=" group flex justify-center items-center !h-full">
                            <div className="group-[.-active]:z-10 shadow-sky-950 before:from-sky-950 before:via-sky-900/80 before:to-sky-900/70 h-full relative after:absolute after:size-full after:inset-0 after:bg-black/60" >
                                <Image
                                    className="size-full object-cover object-right absolute inset-0 -z-[1]  aspect-[1377/460]  "
                                    loading="lazy"
                                    width="1377"
                                    height="460"
                                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60"
                                    alt="Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders"
                                />
                                <div className="relative p-10 flex flex-col my-auto h-full justify-center items-center overflow-hidden duration-150 z-10">
                                    <div className="duration-300 text-center font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-5xl/tight">
                                        <span className="block">Unlock Access to Bespoke</span>
                                        <span className="font-bold text-white block">Apps And Product Innovation with Us!</span>
                                    </div>
                                    <div className="max-md:text-sm/tight text-base/tight text-white/80 pt-5 block text-center max-w-5xl">Step into a digital journey with Twin Power and unlock the gateway to bespoke applications and groundbreaking product innovations. Experience the future of technology at your fingertips!</div>
                                    <div className="mt-10 flex gap-4">
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                            <span>Ask for a Quote</span>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" className='w-5 h-5' width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"></path></svg>
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=" group flex justify-center items-center !h-full">
                            <div className="group-[.-active]:z-10 shadow-sky-950 before:from-sky-950 before:via-sky-900/80 before:to-sky-900/70 h-full relative after:absolute after:size-full after:inset-0 after:bg-black/60" >
                                <Image
                                    className="size-full object-cover object-right absolute inset-0 -z-[1]  aspect-[1377/460]  "
                                    loading="lazy"
                                    width="1377"
                                    height="460"
                                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60"
                                    alt="Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders"
                                />
                                <div className="relative p-10 flex flex-col my-auto h-full justify-center items-center overflow-hidden duration-150 z-10">
                                    <div className="duration-300 text-center font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-5xl/tight">
                                        <span className="block">Unlock Access to Bespoke</span>
                                        <span className="font-bold text-white block">Apps And Product Innovation with Us!</span>
                                    </div>
                                    <div className="max-md:text-sm/tight text-base/tight text-white/80 pt-5 block text-center max-w-5xl">Step into a digital journey with Twin Power and unlock the gateway to bespoke applications and groundbreaking product innovations. Experience the future of technology at your fingertips!</div>
                                    <div className="mt-10 flex gap-4">
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                            <span>Ask for a Quote</span>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" className='w-5 h-5' width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"></path></svg>
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=" group flex justify-center items-center !h-full">
                            <div className="group-[.-active]:z-10 shadow-sky-950 before:from-sky-950 before:via-sky-900/80 before:to-sky-900/70 h-full relative after:absolute after:size-full after:inset-0 after:bg-black/60" >
                                <Image
                                    className="size-full object-cover object-right absolute inset-0 -z-[1]  aspect-[1377/460]  "
                                    loading="lazy"
                                    width="1377"
                                    height="460"
                                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60"
                                    alt="Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders"
                                />
                                <div className="relative p-10 flex flex-col my-auto h-full justify-center items-center overflow-hidden duration-150 z-10">
                                    <div className="duration-300 text-center font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-5xl/tight">
                                        <span className="block">Unlock Access to Bespoke</span>
                                        <span className="font-bold text-white block">Apps And Product Innovation with Us!</span>
                                    </div>
                                    <div className="max-md:text-sm/tight text-base/tight text-white/80 pt-5 block text-center max-w-5xl">Step into a digital journey with Twin Power and unlock the gateway to bespoke applications and groundbreaking product innovations. Experience the future of technology at your fingertips!</div>
                                    <div className="mt-10 flex gap-4">
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                            <span>Ask for a Quote</span>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" className='w-5 h-5' width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"></path></svg>
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=" group flex justify-center items-center !h-full">
                            <div className="group-[.swiper-slide-active]:z-10 shadow-sky-950 before:from-sky-950 before:via-sky-900/80 before:to-sky-900/70 h-full relative after:absolute after:size-full after:inset-0 after:bg-black/60" >
                                <Image
                                    className="size-full object-cover object-right absolute inset-0 -z-[1]  aspect-[1377/460]  "
                                    loading="lazy"
                                    width="1377"
                                    height="460"
                                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60"
                                    alt="Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders"
                                />
                                <div className="relative p-10 flex flex-col my-auto h-full justify-center items-center overflow-hidden duration-150 z-10">
                                    <div className="duration-300 text-center font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-5xl/tight">
                                        <span className="block">Unlock Access to Bespoke</span>
                                        <span className="font-bold text-white block">Apps And Product Innovation with Us!</span>
                                    </div>
                                    <div className="max-md:text-sm/tight text-base/tight text-white/80 pt-5 block text-center max-w-5xl">Step into a digital journey with Twin Power and unlock the gateway to bespoke applications and groundbreaking product innovations. Experience the future of technology at your fingertips!</div>
                                    <div className="mt-10 flex gap-4">
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                            <span>Ask for a Quote</span>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" className='w-5 h-5' width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"></path></svg>
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>

                    {/* <Link className="swiper-button-prev swiper-button-prevHero [&.swiper-button-disabled]:!hidden max-lg:!hidden !top-[calc(100%-50%)] !right-auto !left-8 !w-10 !h-10 rounded-full flex items-center justify-center p-0 after:hidden duration-200 opacity-80 hover:opacity-100" area-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="size-full" viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z"/><path fill="currentColor" stroke="none" d="m12 2 .324.001.318.004.616.017.299.013.579.034.553.046c4.785.464 6.732 2.411 7.196 7.196l.046.553.034.579c.005.098.01.198.013.299l.017.616L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.464 4.785-2.411 6.732-7.196 7.196l-.553.046-.579.034c-.098.005-.198.01-.299.013l-.616.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.785-.464-6.732-2.411-7.196-7.196l-.046-.553-.034-.579a28.058 28.058 0 0 1-.013-.299l-.017-.616C2.002 12.432 2 12.218 2 12l.001-.324.004-.318.017-.616.013-.299.034-.579.046-.553c.464-4.785 2.411-6.732 7.196-7.196l.553-.046.579-.034c.098-.005.198-.01.299-.013l.616-.017c.21-.003.424-.005.642-.005zm1.707 6.293a1 1 0 0 0-1.414 0l-3 3-.083.094a1 1 0 0 0 .083 1.32l3 3 .094.083a1 1 0 0 0 1.32-.083l.083-.094a1 1 0 0 0-.083-1.32L11.415 12l2.292-2.293.083-.094a1 1 0 0 0-.083-1.32z" className="fill-white"/></svg>
        </Link>
        <Link className="swiper-button-next swiper-button-nextHero [&.swiper-button-disabled]:!hidden max-lg:!hidden !top-[calc(100%-50%)] !right-8 !left-auto !w-10 !h-10 rounded-full flex items-center justify-center p-0 after:hidden duration-200 opacity-80 hover:opacity-100" area-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="size-full" viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z"/><path fill="currentColor" stroke="none" d="M12 2c-.218 0-.432.002-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579c-.005.098-.01.198-.013.299l-.017.616-.004.318L2 12c0 .218.002.432.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034c.098.005.198.01.299.013l.616.017L12 22l.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579c.005-.098.01-.198.013-.299l.017-.616L22 12l-.005-.642-.017-.616-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017-.318-.004L12 2zm-1.707 6.293a1 1 0 0 1 1.32-.083l.094.083 3 3a1 1 0 0 1 .083 1.32l-.083.094-3 3a1 1 0 0 1-1.497-1.32l.083-.094L12.585 12l-2.292-2.293a1 1 0 0 1-.083-1.32l.083-.094z" className="fill-white"/></svg>
        </Link> */}

                </Swiper>

            </div>

            <div className="">
                <div className="relative bg-slate-50 py-6 md:py-8 lg:py-16 overflow-hidden ">
                    <div className="mx-auto max-w-7xl flex px-6 lg:px-8 w-full">
                        <div className="absolute order-2 inset-0 size-full pointer-events-none overflow-hidden">
                            <div className="absolute inset-0 hidden w-full min-w-[1360px] bg-[url('https://www.imgglobalinfotech.com/public/tailwind/css/build/assets/beams1-c3cd2070.webp')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block pointer-events-none"></div>
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
                                        <div className="relative z-10 overflow-hidden *:rounded-xl [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)] [&~*]:[&:has(.mask)]:lg:hidden">
                                            <img className="object-contain w-full h-auto " width="384" height="384" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image3" />


                                        </div>
                                        <div className="z-0">
                                            <div className="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                            <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                            <div className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                            <div className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                            <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                                                <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                                                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-20 order-1 mx-auto lg:mx-0 lg:pr-4 md:py-6 md:md:py-8 h-auto md:sticky md:top-24 self-start shrink-1 grow-0 basis-auto w-full">
                                <p className="
                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                        first:*:font-normal

                        last:*:font-bold last:*:text-[#C10913]
                    ">
                                    <span className="font-normal">A Quick Insight Into </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-[#C10913]">Twin Power Software</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">Discover innovation and excellence at Twin Power Software! Immerse yourself in cutting-edge services and high-quality development solutions that redefine the digital landscape. Our dynamic work environment fosters creativity and collaboration to fuel groundbreaking ideas.</p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">At IMG, we pride ourselves on timely delivery, transforming visions into reality. From mobile app development to custom software solutions and dedicated developer hiring, we cater to businesses of all scales. Experience top-notch development, reasonable prices, and a partnership that exceeds expectations - at Twin Power Software, we make digital dreams come true.</p>

                                <div className="mt-8 flex gap-4">
                                    <button className="px-4 text-sm text-[white] bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300">
                                        <span>Read More</span>
                                        <span>
                                            <svg className='w-5 h-5' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h9v2h-9zM13 15h9v2h-9zM16 11h6v2h-6zM13 12 8 7v4H2v2h6v4z"></path></svg>
                                        </span>
                                    </button>
                                    <button className="px-4 text-sm text-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        <span>Come for coffee</span>
                                        <span>
                                            <svg className='w-5 h-5' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A.998.998 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22zm10.418-11H6.582l-.429-3h11.693l-.428 3zm-9.551 9-.429-3h9.123l-.429 3H7.867zM7.618 4h8.764l1 2H6.618l1-2z"></path></svg>
                                        </span>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
                    </div>
                </div>
            </div>

            <div className="relative isolate overflow-hidden pb-8 sm:pb-16 [critical:this]">
                <div className="overflow-hidden bg-gradient-to-b from-white to-slate-200 pt-6 md:pt-16 pb-36 sm:ps-0 ps-5 sm:pr-0 pr-5">
                    <div className="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="pp0" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                                    <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#pp0)"></rect>
                        </svg>
                    </div>
                    <div className="relative container mx-auto max-w-7xl md:px-6 lg:px-8 z-10">
                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center">
                            <span className="font-normal">What We Can Do</span>
                            <span className="font-bold text-[#C10913]"> For You?</span>
                        </p>
                        <div className="md:text-base text-sm text-black/70 mt-3 text-center">
                            Experience a journey of innovation with us, where every pixel, code, and concept converges to transform your dreams into reality. Unveil a spectrum of top-notch development services that empower your business vision to thrive in the boundless realm of possibilities.
                        </div>
                    </div>
                </div>
                <div className="container py-5 bg-white text-center mt-[-126px] !pb-0 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-black font-bold lg:text-2xl md:text-xl sm:text-lg text-base mt-3">Avail Exclusive Development Services In Just A Click!</div>
                    <div className="md:text-base text-sm text-black/70 mt-3">
                        Discover your way to unparalleled growth and creativity while choosing IMG Global Inftech's growth-driven development services. Seamlessly transform your business ideas into reality with just a click, because innovation starts here.
                    </div>
                </div>
            <div className="bg-[#0E508A] py-12 ">
                <div className="max-w-7xl px-6 lg:px-8 mx-auto ">
                    <div className="grid grid-cols-12 ">
                        <div className="md:col-span-3 max-md:flex max-md:overflow-hidden max-md:overflow-x-auto col-span-12  py-10">
                            <Link onClick={() => { setServices('Treanding Solution') }} href='javascript:;' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-[#0E508A] md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Treanding Solution" ? "bg-white !text-[#0E508A]":""}`}>Treanding Solution</Link>
                            <Link onClick={() => { setServices('Mobile App Development') }} href='javascript:;' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-[#0E508A] md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Mobile App Development" ? "bg-white !text-[#0E508A]":""}`}>Mobile App Development</Link>
                            <Link onClick={() => { setServices('Web Development') }} href='javascript:;' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-[#0E508A] md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Web Development" ? "bg-white !text-[#0E508A]":""}`}>Web Development</Link>
                            <Link onClick={() => { setServices('eCommerce Solution') }} href='javascript:;' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-[#0E508A] md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "eCommerce Solution" ? "bg-white !text-[#0E508A]":""}`}>eCommerce Solution</Link>
                            <Link onClick={() => { setServices('Software Development') }} href='javascript:;' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-[#0E508A] md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Software Development" ? "bg-white !text-[#0E508A]":""}`}>Software Development</Link>
                            <Link onClick={() => { setServices('Blockchain Development') }} href='javascript:;' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-[#0E508A] md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Blockchain Development" ? "bg-white !text-[#0E508A]":""}`}>Blockchain Development</Link></div>
                        <div className="md:col-span-9 col-span-12 bg-[white] p-2 rounded-xl">
                            {
                                services === "Treanding Solution" &&
                                <div className="p-4">
                                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight">
                                        <span className="font-normal">Trending </span>
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-[#C10913]"> Solutions</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Explore our trending ready-to-use applications, meticulously crafted to elevate your business instantly. From cutting-edge food delivery apps to innovative elearning platforms, our trending solutions are designed to streamline operations.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="javascript:;">Video Streaming App</Link>
                                            <Link href="javascript:;">Social Media App</Link>
                                            <Link href="javascript:;">Event Management App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/elearning-app-development.php">Elearning App</Link>
                                            <Link href="javascript:;">Travel App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/doctor-on-demand-app-development.php">Doctor on Demand App</Link>
                                            <Link href="javascript:;">Healthacare App</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Flutter</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                services === "Mobile App Development" &&
                                <div className="p-4">
                                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight">
                                        <span className="font-normal">Mobile App </span>
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-[#C10913]"> Development</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Step into the future of digital interaction with our top-notch mobile app development services. Your ideas are the fuel, and we are the creators, transforming concepts into powerful mobile solutions that captivate users and elevate your digital footprint.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="javascript:;">Video Streaming App</Link>
                                            <Link href="javascript:;">Social Media App</Link>
                                            <Link href="javascript:;">Event Management App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/elearning-app-development.php">Elearning App</Link>
                                            <Link href="javascript:;">Travel App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Flutter</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                services === "Web Development" &&
                                <div className="p-4">
                                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight">
                                        <span className="font-normal">Web  </span>
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-[#C10913]"> Development</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  "> Step into the future of digital interaction with our top-notch mobile app development services. Your ideas are the fuel, and we are the creators, transforming concepts into powerful mobile solutions that captivate users and elevate your digital footprint.

                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            
                                            <Link href="javascript:;">Social Media App</Link>
                                            <Link href="javascript:;">Event Management App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/elearning-app-development.php">Elearning App</Link>
                                            <Link href="javascript:;">Travel App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Flutter</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                services === "eCommerce Solution" &&
                                <div className="p-4">
                                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight">
                                        <span className="font-normal">eCommerce </span>
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-[#C10913]"> Solutions</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Explore our trending ready-to-use applications, meticulously crafted to elevate your business instantly. From cutting-edge food delivery apps to innovative elearning platforms, our trending solutions are designed to streamline operations.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="javascript:;">Video Streaming App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/doctor-on-demand-app-development.php">Doctor on Demand App</Link>
                                            <Link href="javascript:;">Healthacare App</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Flutter</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                services === "Software Development" &&
                                <div className="p-4">
                                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight">
                                        <span className="font-normal">Software </span>
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-[#C10913]"> Development </span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Explore our trending ready-to-use applications, meticulously crafted to elevate your business instantly. From cutting-edge food delivery apps to innovative elearning platforms, our trending solutions are designed to streamline operations.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                        <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/doctor-on-demand-app-development.php">Doctor on Demand App</Link>
                                            <Link href="javascript:;">Healthacare App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="javascript:;">Video Streaming App</Link>
                                            <Link href="javascript:;">Social Media App</Link>
                                            
                                            
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Flutter</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                services === "Blockchain Development" &&
                                <div className="p-4">
                                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight">
                                        <span className="font-normal">"Blockchain </span>
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-[#C10913]">  Development</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Explore our trending ready-to-use applications, meticulously crafted to elevate your business instantly. From cutting-edge food delivery apps to innovative elearning platforms, our trending solutions are designed to streamline operations.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="javascript:;">Video Streaming App</Link>
                                            <Link href="javascript:;">Social Media App</Link>
                                            <Link href="javascript:;">Event Management App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/elearning-app-development.php">Elearning App</Link>
                                            <Link href="javascript:;">Travel App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/doctor-on-demand-app-development.php">Doctor on Demand App</Link>
                                            <Link href="javascript:;">Healthacare App</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Flutter</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </div>
            </div>

          {/* case study */}
          <section className="container mx-auto py-8 sm:py-16 relative bg-white [critical:this]">
                <div className="flex flex-col w-full max-w-7xl mx-auto pb-8 px-6 lg:px-8 text-center">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                        <span>Client Journeys to Success -</span>
                        <span className="font-bold text-[#C10913]"> Glimpse of Our Case Studies</span>
                    </p>
                    <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">Explore our client success stories, witnessing transformative journeys to success. Each case study below reflects our impactful solutions, showcasing innovation, dedication, and tangible results.</div>
                </div>
                <ul className="flex relative flex-col gap-y-8 lg:gap-y-64 flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-gray-900 opacity-100   overflow-hidden relative">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full gap-14 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <img className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://appicsoftwares.com/images/rocca_box_mobile.png" alt="TractorJunction" />
                                    </div>
                                    <div className="grow max-sm:w-full text-white flex ms-auto flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-base lg:text-lg font-semibold inline-block">Roccabox</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Rocca Box is a real estate mobile appltion that makes the property searching process a lot smoother.</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-gray-900 opacity-100   overflow-hidden relative">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-base lg:text-lg font-semibold inline-block">The Lien Zone</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Build for a client in Florida, USA, The Lien Zone contains all the information about the holidays in Florida</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <img className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://appicsoftwares.com/images/lien-frame-1.png" alt="TractorJunction" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-gray-900 opacity-100   overflow-hidden relative">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full gap-14 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">

                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <img className="size-[20rem] object-contain lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://appicsoftwares.com/images/aavas_fin_home.png" />
                                    </div>
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-lg font-semibold inline-block">About Aavas Financiers</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">The success of Aavas is counted from zero to millions of satisfied customers across the country.</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-gray-900 opacity-100   overflow-hidden relative">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-lg font-semibold inline-block">About Klassbook</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">The Klassbook consists of hand-picked and best features to lead the educational transformation to meet the needs of present and future generations.</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <img className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://appicsoftwares.com/images/klass_group_category_images.png" alt="MyFab11" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-gray-900 opacity-100   overflow-hidden relative">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full gap-14 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">

                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <img className="size-[20rem] lg:size-[25rem] object-contain h-auto max-sm:mx-auto" width="640" height="640" src="https://appicsoftwares.com/images/laiqa-laptop1.png" alt="Fabindia" />
                                    </div>
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-lg font-semibold inline-block">About Laiqa</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Shop for Handwoven Garments & home fusnishings</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-gray-900 opacity-100   overflow-hidden relative before:absolute before:inset-6 before:border-4 before:border-white  before: before:z-10">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                            <div className="blur-[100px] absolute top-[20%] left-[0%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-green-500 to-violet-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-cyan-500 to-blue-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="blur-[100px] absolute top-[70%] left-[70%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-red-700 to-pink-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center text-center">
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-5">
                                        <span className="duration-300 text-lg md:text-xl font-semibold inline-block">CaseStudy</span>
                                        <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-balance max-w-lg mx-auto">Transforming Businesses Worldwide - 100+ Success Stories and Counting</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-[#0E508A] before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew all Casestudy
                                        
                                    </button>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 w-[1px] overflow-hidden opacity-0">
                                        <div className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
          {/* case study */}

            <div className="bg-white">
                <div className="py-6 md:py-8 lg:py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="relative isolate overflow-hidden text-center justify-center bg-gray-900 px-6 shadow-2xl  sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24">
                            <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 pointer-events-none" aria-hidden="true">
                                <circle cx="512" cy="512" r="512" fill="url(#l2200)" fillOpacity="0.7"></circle>
                                <defs>
                                    <radialGradient id="l2200">
                                        <stop offset="0.5" stopColor="#9333ea"></stop>
                                        <stop offset="1" stopColor="#db2777"></stop>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <div className="absolute inset-x-0 top-0 h-96 z-0 text-white/20 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none bg-gray-500">
                                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="ryhhgfbyi" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                                            <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#ryhhgfbyi)"></rect>
                                </svg>
                            </div>
                            <div className="mx-auto max-w-3xl lg:mx-0 lg:flex-auto py-6 md:py-8 lg:py-16 lg:text-left relative z-[1]">
                                <div className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight text-white font-normal text-center empty:hidden">            Let's turn your <span className="font-bold bg-gradient-to-r from-gray-100 via-[#C10913] to-gray-100 bg-clip-text text-white">business idea into reality</span>
                                </div>
                                <p className="mt-6 text-base md:text-lg md:leading-8 text-gray-300 text-center empty:hidden">            Do you want to experience the best-in-class quality mobile apps? Send us your inquiry and one of our executives will catch you up in no time by Call, Email or Skype.
                                </p>
                                <div className="md:mt-10 mt-5 flex items-center justify-center gap-x-6 empty:hidden">
                                <button className="px-4 text-sm text-[white] bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300">
                                        <span>Schedule a consultation</span>
                                        <span>
                                        <svg className="size-5" stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 13.72a3.158 3.158 0 0 0-3.462.124.632.632 0 0 1-.682.035l-3.137-1.81a.08.08 0 0 1 0-.137l3.12-1.8a.632.632 0 0 1 .685.036 3.158 3.158 0 0 0 3.47.139A3.194 3.194 0 0 0 22.442 6.1a3.158 3.158 0 0 0-5.924 1.773.633.633 0 0 1-.311.606l-3.136 1.811a.08.08 0 0 1-.118-.068V6.6a.632.632 0 0 1 .372-.573 3.158 3.158 0 1 0-2.64 0 .632.632 0 0 1 .373.573v3.622a.08.08 0 0 1-.119.068L7.804 8.48a.632.632 0 0 1-.311-.605 3.157 3.157 0 1 0-1.307 2.294.633.633 0 0 1 .687-.038l3.12 1.8a.08.08 0 0 1 0 .137L6.854 13.88a.632.632 0 0 1-.683-.035 3.158 3.158 0 0 0-3.461-.124 3.194 3.194 0 0 0-1.143 4.202 3.159 3.159 0 0 0 5.924-1.792.633.633 0 0 1 .31-.61l3.137-1.81a.08.08 0 0 1 .119.068V17.4a.632.632 0 0 1-.372.573 3.158 3.158 0 1 0 2.64 0 .633.633 0 0 1-.373-.573v-3.621a.08.08 0 0 1 .118-.069l3.137 1.812a.631.631 0 0 1 .31.609 3.159 3.159 0 0 0 5.924 1.792A3.194 3.194 0 0 0 21.3 13.72Z"></path></svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white relative py-8 sm:pb-16 lg:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="ryhhgfby" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                                    <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#ryhhgfby)"></rect>
                        </svg>
                    </div>
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center">
                        <span className="font-normal">Serving Multiple  </span>
                        <span className="font-bold text-[#C10913]"> Industries Across the Board!
                        </span>
                    </p>
                    <div className="md:text-base text-center text-sm text-black/70 mt-3 text-balance">
                        Discover the endless possibilities with our versatile mobile app and web development solutions. From tech to healthcare, we cater to a diverse array of industries, ensuring innovation and excellence across every sector. Explore the major sector we deal in!
                    </div>

                    <div className="flex flex-row flex-wrap w-full gap3 pt-8 font-bold md:text-base text-sm uppercase text-white">
                        <div className="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                            <Link href="https://www.imgglobalinfotech.com/fintech-software-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://images.unsplash.com/photo-1553801613-9b225d58f429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFua2luZ3xlbnwwfDB8MHx8fDA%3D" alt="Banking and Finance Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Banking and Finance</div>
                            </Link>
                        </div>
                        <div className="xl:w-1/3  md:w-1/3 w-1/2 p-1">
                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="297" height="222" src="https://images.unsplash.com/photo-1601106711560-ffeb65211600?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fantasy Sports Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Fantasy Sports</div>
                            </Link>
                        </div>
                        <div className="xl:w-1/6  md:w-1/3 w-1/2 p-1">
                            <Link href="https://www.imgglobalinfotech.com/healthcare-software-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="194" height="222" src="https://images.unsplash.com/photo-1666886573559-6ad307474d01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Healthcare Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Healthcare</div>
                            </Link>
                        </div>
                        <div className="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                            <Link href="https://www.imgglobalinfotech.com/edtech-software-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="EdTech Solution Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">EdTech Solution</div>
                        <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full p-1">
                            <Link href="https://www.imgglobalinfotech.com/travel-app-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/travel-and-tourism-800w.webp?id=d42d53341e4cc3a7fe874747ad39e667" alt="Travel and Tourism Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Travel and Tourism</div>
                            </Link>


                        </div>
                            </Link>


                        </div>
                        <div className="xl:w-1/2 md:w-1/3 sm:w-1/2 w-full p-1">
                            <Link href="https://www.imgglobalinfotech.com/media-and-entertainment-app-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/70 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="600" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/media-and-entertainment-800w.webp?id=486432f05a2fbe2524bfad9eb7d157c4" alt="Media and Entertainment Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Media and Entertainment</div>
                            </Link>
                        </div>
                        <div className="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                            <Link href="https://www.imgglobalinfotech.com/logistics-software-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logistics Services App Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Services App</div>
                            </Link>


                        </div>
                        <div className="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                            <Link href="https://www.imgglobalinfotech.com/logistics-software-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://images.unsplash.com/photo-1644352442473-57f4cd0873c3?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logistics Services App Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Logistics Services App</div>
                            </Link>


                        </div>
                        <div className="xl:w-1/6 md:w-1/3 w-1/2 p-1">
                            <Link href="https://www.imgglobalinfotech.com/social-media-app-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="194" height="222" src="https://images.unsplash.com/photo-1643503640904-75c1a2093570?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Social App Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Social App</div>
                            </Link>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-1/2 p-1">
                            <Link href="https://www.imgglobalinfotech.com/real-estate-app-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="397" height="222" src="https://images.unsplash.com/photo-1509081258900-a15e84ae6953?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Real Estate Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Real Estate</div>
                            </Link>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 sm:w-1/2 w-full p-1">
                            <Link href="https://www.imgglobalinfotech.com/event-app-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Event management Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Event management</div>
                            </Link>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 sm:w-1/2 w-full p-1">
                            <Link href="https://www.imgglobalinfotech.com/event-app-development.php" className=" pointer-events-none relative text-decoration-none group flex items-center  overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-red-500/70 after:via-red-500/60 after:to-transparent after:duration-700 duration-300">
                                <img className="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://images.unsplash.com/photo-1637666067348-7303e7007363?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Event management Icon" />

                                <div className="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Gym management software</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="relative bg-gray-900 py-6 md:py-8 lg:py-16 text-white">
                <div className="w-full">
                    <div className="flex max-w-7xl mx-auto px-6 lg:px-8 items-center">
                        <div className="swiper order-2 reviewSwiper  md:w-1/2 w-full pb-7 swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper="{
                    slidesPerView: 1,
                    spaceBetween: 10,
                    speed: 500,
                    autoplay: {enabled: true, delay: 2500},
                    loop: true,
                    pagination: {
                        el: .swiper-pagination,
                        dynamicBullets: true
                    }
                }">
                            <div className="swiper-wrapper" id="swiper-wrapper-6b587e02ae576dc0" aria-live="off">
                                <div className="swiper-slide p-8 pb-12 swiper-slide-active swiper-slide-next" role="group" aria-label="1 / 1" data-swiper-slide-index="0" style={{ width: '608px', marginRight: '10px' }}>
                                    <Link href="https://youtu.be/dTdXaPxCbZw?si=9M-Wpivc0aUJCvxA" className="p-1 bg-gray-700 relative w-full  aspect-video glightbox3 block" data-gallery="gallery1">
                                        <div className="overflow-hidden  ring-2 ring-offset-8 ring-white ring-offset-gray-900">
                                            <span className="absolute inset-0 z-30 flex items-center justify-center *:size-16 *:rounded-full last:*:bg-white *:text-[#C10913] last:*:shadow-lg last:*:shadow-[#C10913] last:*:relative last:*:z-30 first:*:z-20 first:*:absolute first:*:inset-0 first:*:m-auto first:*:animate-ping">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                                            </span>
                                            <img className="aspect-video object-cover h-auto w-full z-0 duration-[3000ms] " width="256" height="320" src="https://www.imgglobalinfotech.com/public/tailwind/img/reviewLachlanJames-640w.webp?id=5bbafb05dac28bdcb2837a17fefa6f63" alt="Youtube Review" />
                                        </div>
                                        <div className="flex rounded-xl rounded-t-none items-center sm:justify-center absolute inset-x-1 -bottom-16 top-auto z-[1] before:absolute before:inset-6 before:z-[1] before:bg-gradient-to-t before:backdrop-blur-xl before:rounded-xl py-10 before:from-red-500/70 before:to-red-600/70 before:ring-8 before:ring-gray-900">
                                            <div className="w-full relative z-[3] text-center">
                                                <div className="text-base md:text-lg font-bold leading-6 tracking-tight">Lachlan James</div>
                                                <div className="mt-1 text-sm md:text-sm opacity-80">Founder, Neuronomics (Austrlia)</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="swiper-pagination !mb-0 *:!bg-white swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic swiper-pagination-lock" style={{ width: '40px' }}><span className="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main" aria-current="true" style={{ left: '0px' }}></span></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        <div className="md:w-1/2 w-full order-1">
                            <div className="flex flex-col">
                                <p className="
                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white text-balance text-center
            
                        first:*:font-normal
            
                        last:*:font-bold last:*:text-white
                    "><span>What Our Clients Industries Covered By Us! </span>
                                    <span> And Elevate Your Expectations!</span></p>
                                <div className="md:text-base text-sm text-white/70 mt-3 text-balance text-center">Dive into the testimonials that paint a vivid picture of our journey with our potential client so far. Take a glimpse into our exceptional assistance and begin your success story with us today.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="relative bg-gradient-to-b my-16 via-gray-800 from-gray-900 py-6 md:py-8 lg:py-16">
                <div className="text-black/20">
                    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                        <defs>
                            <pattern id="rtrtfh" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" patternTransform="translate(0 80)">
                                <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#rtrtfh)"></rect>
                    </svg>
                </div>
                <div className="mx-auto text-center max-w-7xl px-6 lg:px-8 z-[1] relative">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white">
                        <span className="font-normal">Turn Your Vision  </span>
                        <span className="font-bold text-gray-100"> into Reality</span>
                    </p>
                    <div className="md:text-base text-sm opacity-70 mt-3 mb-lg-1 text-white">
                        Are you looking for skilled professionals who can bring your business vision into life? Twin Power Software can be your one-stop destination. Connect with us today!
                    </div>
                    <div className="relative flex flex-wrap items-stretch pt-6 md:pt-8 lg:pt-16">
                        <div className="w-full !h-auto lg:w-1/2 p-8 md:p-16 bg-cyan-800 relative text-white  ">
                            <div className="absolute inset-x-0 bottom-0 h-96 z-0 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,white)] pointer-events-none">
                                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="ryhhgfbyyui" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                                            <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#ryhhgfbyyui)"></rect>
                                </svg>
                            </div>
                            <div className="w-full text-lg md:text-xl lg:text-2xl font-bold">What can we help you with?</div>
                            <div className="w-full text-sm md:text-base pt-2">Our Consultants Will Reply Back To You Within 8 Hours Or Less</div>
                            <div className="flex flex-wrap items-center justify-between py-8">
                                <div className="w-auto group/ba">
                                    <div className="w-full">
                                        <img className="w-14 md:w-20 h-14 md:h-20 rounded-full mx-auto grayscale group-hover/ba:grayscale-0 duration-300 shadow-xl shadow-gray-900" width="80" height="80" src="https://images.unsplash.com/photo-1664195455972-53827f75bad4?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of evelyn" />
                                    </div>
                                    <div className="w-full text-center text-sm md:text-base pt-2">Evelyn</div>
                                </div>
                                <div className="w-auto group/ba">
                                    <div className="w-full">
                                        <img className="w-14 md:w-20 h-14 md:h-20 rounded-full mx-auto grayscale group-hover/ba:grayscale-0 duration-300 shadow-xl shadow-gray-900" width="80" height="80" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of Yeshi S." />
                                    </div>
                                    <div className="w-full text-center text-sm md:text-base pt-2">Josph S.</div>
                                </div>
                                <div className="w-auto group/ba">
                                    <div className="w-full">
                                        <img className="w-14 md:w-20 h-14 md:h-20 rounded-full mx-auto grayscale group-hover/ba:grayscale-0 duration-300 shadow-xl shadow-gray-900" width="80" height="80" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of Mohd. Nizam" />
                                    </div>
                                    <div className="w-full text-center text-sm md:text-base pt-2">Md. Adil</div>
                                </div>
                                <div className="w-auto group/ba">
                                    <div className="w-full">
                                        <img className="w-14 md:w-20 h-14 md:h-20 rounded-full mx-auto grayscale group-hover/ba:grayscale-0 duration-300 shadow-xl shadow-gray-900" width="80" height="80" src="https://images.unsplash.com/photo-1508908324153-d1a219719814?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of Kapil Sharma" />
                                    </div>
                                    <div className="w-full text-center text-sm md:text-base pt-2">Robert</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap sm:items-center gap-y-8 py-5">
                                <div className="w-1/2 flex max-sm:flex-col gap-y-3">
                                    <div className="w-8 md:w-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="52" viewBox="0 0 20 20" fill="none">
                                            <path d="M11.7478 19H3.67778C3.304 19 3 18.696 3 18.3222V2.67778C3 2.304 3.304 2 3.67778 2H11.7478C12.1216 2 12.4256 2.304 12.4256 2.67778V6.33267C12.4256 6.46156 12.3211 6.566 12.1922 6.566C12.0633 6.566 11.9589 6.46156 11.9589 6.33267V2.67778C11.9589 2.56133 11.8642 2.46667 11.7478 2.46667H3.67778C3.56133 2.46667 3.46667 2.56133 3.46667 2.67778V18.3222C3.46667 18.4387 3.56133 18.5333 3.67778 18.5333H11.7478C11.8642 18.5333 11.9589 18.4387 11.9589 18.3222V14.6673C11.9589 14.5384 12.0633 14.434 12.1922 14.434C12.3211 14.434 12.4256 14.5384 12.4256 14.6673V18.3222C12.4256 18.696 12.1216 19 11.7478 19Z" fill="white"></path>
                                            <path d="M12.1922 4.34069H3.23333C3.10444 4.34069 3 4.23625 3 4.10736C3 3.97847 3.10444 3.87402 3.23333 3.87402H12.1922C12.3211 3.87402 12.4256 3.97847 12.4256 4.10736C12.4256 4.23625 12.3211 4.34069 12.1922 4.34069ZM12.1922 16.5891H3.23333C3.10444 16.5891 3 16.4847 3 16.3558C3 16.2269 3.10444 16.1225 3.23333 16.1225H12.1922C12.3211 16.1225 12.4256 16.2269 12.4256 16.3558C12.4256 16.4847 12.3211 16.5891 12.1922 16.5891Z" fill="white"></path>
                                            <path d="M8.72059 17.7997H6.70892C6.58003 17.7997 6.47559 17.6952 6.47559 17.5663C6.47559 17.4375 6.58003 17.333 6.70892 17.333H8.72059C8.84947 17.333 8.95392 17.4375 8.95392 17.5663C8.95392 17.6952 8.84947 17.7997 8.72059 17.7997Z" fill="white"></path>
                                            <path d="M12.1913 14.9017C12.1472 14.9017 12.1033 14.8893 12.0651 14.8646C11.9983 14.8217 11.958 14.7477 11.958 14.6684V10.0021C11.958 9.91081 12.0113 9.82781 12.0945 9.78981L16.115 7.95558C16.1872 7.9227 16.2712 7.9287 16.338 7.97159C16.4048 8.01447 16.4451 8.08847 16.4451 8.16781V12.834C16.4451 12.9254 16.3918 13.0084 16.3087 13.0464L12.2881 14.8806C12.2572 14.8947 12.2242 14.9017 12.1913 14.9017ZM12.4246 10.1521V14.3054L15.9785 12.684V8.53081L12.4246 10.1521Z" fill="#36E079"></path>
                                            <path d="M12.1923 14.9016C12.1594 14.9016 12.1263 14.8946 12.0955 14.8806L8.07492 13.0464C7.99181 13.0085 7.93848 12.9255 7.93848 12.8341V8.16785C7.93848 8.08841 7.97881 8.01452 8.04559 7.97163C8.11237 7.92874 8.19637 7.92263 8.26859 7.95563L12.2891 9.78985C12.3723 9.82774 12.4256 9.91074 12.4256 10.0022V14.6684C12.4256 14.7479 12.3853 14.8217 12.3185 14.8646C12.2803 14.8891 12.2364 14.9016 12.1923 14.9016ZM8.40514 12.6841L11.959 14.3054V10.1521L8.40514 8.53074V12.6841Z" fill="#36E079"></path>
                                            <path d="M16.2127 8.40107C16.1802 8.40107 16.1473 8.39429 16.116 8.37996L12.1923 6.58996L8.26867 8.37996C8.15145 8.4334 8.013 8.38174 7.95956 8.26451C7.90611 8.14729 7.95778 8.00885 8.075 7.9554L12.0956 6.12118C12.1571 6.09307 12.2278 6.09307 12.2892 6.12118L16.3098 7.9554C16.427 8.00885 16.4787 8.14729 16.4252 8.26451C16.386 8.35029 16.3012 8.40107 16.2127 8.40107Z" fill="#36E079"></path>
                                            <path d="M9.56653 9.03783C9.47798 9.03783 9.3932 8.98716 9.35409 8.90128C9.30065 8.78405 9.35231 8.64561 9.46953 8.59216L13.4909 6.75839C13.6081 6.70494 13.7465 6.75661 13.8 6.87383C13.8534 6.99105 13.8018 7.1295 13.6845 7.18294L9.6632 9.01672C9.63176 9.03105 9.59887 9.03783 9.56653 9.03783ZM10.7363 9.5715C10.6478 9.5715 10.563 9.52083 10.5239 9.43494C10.4704 9.31772 10.5221 9.17928 10.6393 9.12583L14.6606 7.29205C14.7779 7.23861 14.9163 7.29028 14.9698 7.4075C15.0232 7.52472 14.9715 7.66317 14.8543 7.71661L10.833 9.55039C10.8016 9.56472 10.7688 9.5715 10.7363 9.5715Z" fill="#36E079"></path>
                                            <path d="M10.736 10.6454C10.7031 10.6454 10.67 10.6384 10.6392 10.6244L9.46945 10.0907C9.38634 10.0528 9.33301 9.9698 9.33301 9.87836V8.80413C9.33301 8.67525 9.43745 8.5708 9.56634 8.5708C9.69523 8.5708 9.79967 8.67525 9.79967 8.80413V9.72825L10.5028 10.049V9.3378C10.5028 9.20891 10.6072 9.10447 10.7361 9.10447C10.865 9.10447 10.9695 9.20891 10.9695 9.3378V10.412C10.9695 10.4915 10.9291 10.5654 10.8623 10.6082C10.8239 10.6328 10.7801 10.6454 10.736 10.6454Z" fill="#36E079"></path>
                                        </svg>
                                    </div>
                                    <div className="grow sm:pl-3">
                                        <div className="w-full text-base md:text-lg font-bold">1000 +</div>
                                        <div className="w-full text-sm md:text-base font-semibold">Apps Delivered</div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex max-sm:flex-col gap-y-3">
                                    <div className="w-8 md:w-12">
                                        <svg width="48" height="52" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.9375 17.5H9.0625C8.97962 17.5 8.90013 17.5329 8.84153 17.5915C8.78292 17.6501 8.75 17.7296 8.75 17.8125C8.75 17.8954 8.78292 17.9749 8.84153 18.0335C8.90013 18.0921 8.97962 18.125 9.0625 18.125H10.9375C11.0204 18.125 11.0999 18.0921 11.1585 18.0335C11.2171 17.9749 11.25 17.8954 11.25 17.8125C11.25 17.7296 11.2171 17.6501 11.1585 17.5915C11.0999 17.5329 11.0204 17.5 10.9375 17.5Z" fill="#36E079"></path>
                                            <path d="M4.0625 2.5C3.54562 2.5 3.125 2.92062 3.125 3.4375V6.47C3.125 7.40688 3.72063 8.23937 4.6075 8.54062L6.73437 9.265C7.19957 9.78885 7.78361 10.1935 8.4375 10.445V10.9375C8.4375 11.3444 8.69938 11.6881 9.0625 11.8175V15H8.4375C7.92062 15 7.5 15.4206 7.5 15.9375V16.25H7.1875C6.67062 16.25 6.25 16.6706 6.25 17.1875V19.6875C6.25 19.7704 6.28292 19.8499 6.34153 19.9085C6.40013 19.9671 6.47962 20 6.5625 20H13.4375C13.5204 20 13.5999 19.9671 13.6585 19.9085C13.7171 19.8499 13.75 19.7704 13.75 19.6875V17.1875C13.75 16.6706 13.3294 16.25 12.8125 16.25H12.5V15.9375C12.5 15.4206 12.0794 15 11.5625 15H10.9375V11.8175C11.3006 11.6881 11.5625 11.3444 11.5625 10.9375V10.445C12.2162 10.1931 12.8001 9.78848 13.2656 9.265L15.3925 8.54062C15.825 8.39368 16.2006 8.11493 16.4665 7.74353C16.7324 7.37214 16.8752 6.92677 16.875 6.47V3.4375C16.875 2.92062 16.4544 2.5 15.9375 2.5H14.375V1.8175C14.7381 1.68812 15 1.34438 15 0.9375C15 0.420625 14.5794 0 14.0625 0H5.9375C5.42062 0 5 0.420625 5 0.9375C5 1.34438 5.26188 1.68812 5.625 1.8175V2.5H4.0625ZM4.80875 7.94937C4.49991 7.84419 4.23175 7.64497 4.04188 7.37966C3.852 7.11435 3.74994 6.79626 3.75 6.47V3.4375C3.75 3.35462 3.78292 3.27513 3.84153 3.21653C3.90013 3.15792 3.97962 3.125 4.0625 3.125H5.625V6.36375C5.625 7.09875 5.80938 7.79063 6.13063 8.39938L4.80875 7.94937ZM13.125 17.1875V19.375H6.875V17.1875C6.875 17.1046 6.90792 17.0251 6.96653 16.9665C7.02513 16.9079 7.10462 16.875 7.1875 16.875H12.8125C12.8954 16.875 12.9749 16.9079 13.0335 16.9665C13.0921 17.0251 13.125 17.1046 13.125 17.1875ZM11.875 15.9375V16.25H8.125V15.9375C8.125 15.8546 8.15792 15.7751 8.21653 15.7165C8.27513 15.6579 8.35462 15.625 8.4375 15.625H11.5625C11.6454 15.625 11.7249 15.6579 11.7835 15.7165C11.8421 15.7751 11.875 15.8546 11.875 15.9375ZM9.6875 15V11.875H10.3125V15H9.6875ZM10.9375 10.9375C10.9375 11.0204 10.9046 11.0999 10.846 11.1585C10.7874 11.2171 10.7079 11.25 10.625 11.25H9.375C9.29212 11.25 9.21263 11.2171 9.15403 11.1585C9.09542 11.0999 9.0625 11.0204 9.0625 10.9375V10.6431C9.67726 10.8031 10.3227 10.8031 10.9375 10.6431V10.9375ZM11.195 9.915C11.1756 9.91875 11.1556 9.915 11.1363 9.9225C10.9994 9.97625 10.8587 10.0094 10.7187 10.0425C10.2441 10.1356 9.75589 10.1356 9.28125 10.0425C9.14063 10.0088 9 9.97563 8.86375 9.9225C8.845 9.915 8.825 9.91813 8.805 9.915C7.32188 9.41438 6.25 8.01313 6.25 6.36375V1.875H13.75V6.36375C13.75 8.01313 12.6781 9.41438 11.195 9.915ZM15.9375 3.125C16.0204 3.125 16.0999 3.15792 16.1585 3.21653C16.2171 3.27513 16.25 3.35462 16.25 3.4375V6.47C16.2501 6.79626 16.148 7.11435 15.9581 7.37966C15.7682 7.64497 15.5001 7.84419 15.1912 7.94937L13.8694 8.39938C14.2015 7.77226 14.3751 7.07339 14.375 6.36375V3.125H15.9375ZM5.9375 0.625H14.0625C14.1454 0.625 14.2249 0.657924 14.2835 0.716529C14.3421 0.775134 14.375 0.85462 14.375 0.9375C14.375 1.02038 14.3421 1.09987 14.2835 1.15847C14.2249 1.21708 14.1454 1.25 14.0625 1.25H5.9375C5.85462 1.25 5.77513 1.21708 5.71653 1.15847C5.65792 1.09987 5.625 1.02038 5.625 0.9375C5.625 0.85462 5.65792 0.775134 5.71653 0.716529C5.77513 0.657924 5.85462 0.625 5.9375 0.625Z" fill="white"></path>
                                            <path d="M11.3323 5.02674L10.6055 4.92111L10.2798 4.26236C10.1748 4.04861 9.82422 4.04861 9.71985 4.26236L9.39422 4.92111L8.66735 5.02674C8.60955 5.03486 8.55519 5.05908 8.51049 5.09662C8.46579 5.13416 8.43255 5.18351 8.41456 5.23904C8.39657 5.29457 8.39456 5.35404 8.40876 5.41066C8.42296 5.46728 8.45279 5.51876 8.49485 5.55924L9.02047 6.07174L8.8961 6.79611C8.88615 6.85359 8.89249 6.9127 8.9144 6.96676C8.93631 7.02082 8.9729 7.06767 9.02005 7.102C9.0672 7.13634 9.12302 7.1568 9.1812 7.16106C9.23937 7.16532 9.29757 7.15322 9.34922 7.12611L9.99985 6.78424L10.6505 7.12611C10.7022 7.15288 10.7603 7.16478 10.8183 7.16047C10.8763 7.15617 10.9321 7.13584 10.9792 7.10174C11.0264 7.06747 11.0631 7.02069 11.085 6.96668C11.107 6.91267 11.1134 6.85359 11.1036 6.79611L10.9792 6.07174L11.5049 5.55924C11.5469 5.51876 11.5767 5.46728 11.5909 5.41066C11.6051 5.35404 11.6031 5.29457 11.5851 5.23904C11.5671 5.18351 11.5339 5.13416 11.4892 5.09662C11.4445 5.05908 11.3902 5.03486 11.3323 5.02674ZM10.4261 5.73986C10.3898 5.77518 10.3626 5.81875 10.3469 5.86686C10.3311 5.91496 10.3272 5.96617 10.3355 6.01611L10.3805 6.27799L10.1449 6.15424C10.1002 6.13065 10.0504 6.11832 9.99985 6.11832C9.94931 6.11832 9.89954 6.13065 9.85485 6.15424L9.61922 6.27799L9.66423 6.01611C9.67274 5.96617 9.66894 5.9149 9.65315 5.86676C9.63736 5.81861 9.61005 5.77506 9.5736 5.73986L9.3836 5.55424L9.64673 5.51549C9.69682 5.50829 9.7444 5.489 9.78534 5.45926C9.82629 5.42953 9.85938 5.39026 9.88172 5.34486L9.99985 5.10611L10.1173 5.34424C10.1623 5.43611 10.2511 5.50049 10.3523 5.51486L10.6155 5.55361L10.4261 5.73986Z" fill="#36E079"></path>
                                        </svg>
                                    </div>
                                    <div className="grow sm:pl-3">
                                        <div className="w-full text-base md:text-lg font-bold">100 +</div>
                                        <div className="w-full text-sm md:text-base font-semibold">Awards In Last 11 Years</div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex max-sm:flex-col gap-y-3">
                                    <div className="w-8 md:w-12">
                                        <svg width="48" height="52" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.89001 9.85101C5.49461 9.85158 5.11557 10.0089 4.83602 10.2885C4.55647 10.5682 4.39922 10.9473 4.39876 11.3427V12.5916C4.39876 13.0189 4.61562 13.3909 4.90102 13.6535C4.91309 13.6647 4.93034 13.6613 4.94284 13.6721C4.9312 13.6777 3.71414 14.2812 2.61823 14.8787C2.29403 15.0408 2 15.359 2 15.7703V16.0807C2 16.1379 2.02271 16.1927 2.06314 16.2332C2.10356 16.2736 2.15839 16.2963 2.21556 16.2963C2.27273 16.2963 2.32756 16.2736 2.36799 16.2332C2.40841 16.1927 2.43112 16.1379 2.43112 16.0807V15.7703C2.43112 15.5828 2.60357 15.3685 2.8118 15.2642C2.81398 15.2628 2.81614 15.2613 2.81827 15.2599C3.58737 14.8441 4.36335 14.4413 5.1459 14.0514L5.35887 13.9462C5.50028 14.0014 5.65462 14.0756 5.89088 14.0829C5.89849 14.0833 5.90611 14.0833 5.91373 14.0829C6.17844 14.0635 6.31553 13.9898 6.45608 13.9398L6.6462 14.0324L6.62034 14.0173C6.68371 14.0605 6.73243 14.0799 6.8359 14.1308C6.93937 14.1821 7.07948 14.2502 7.25365 14.3364C7.30494 14.3618 7.36418 14.3656 7.41835 14.3473C7.47252 14.3289 7.51718 14.2898 7.54251 14.2385C7.56783 14.1873 7.57175 14.128 7.5534 14.0738C7.53504 14.0196 7.49592 13.975 7.44464 13.9497C7.26917 13.863 7.12777 13.7945 7.02645 13.7445C6.92428 13.6945 6.84366 13.6483 6.86263 13.6608C6.8678 13.6565 6.87556 13.6565 6.8803 13.6531C7.16527 13.3909 7.38213 13.0189 7.38213 12.5916V11.3427C7.38144 10.9473 7.22407 10.5683 6.94447 10.2887C6.66487 10.0091 6.28585 9.85169 5.89045 9.85101H5.89001ZM5.89001 10.2821C6.48151 10.2821 6.95101 10.752 6.95101 11.3427V12.5916C6.95101 12.871 6.80442 13.1374 6.58843 13.3362C6.37373 13.5332 6.0948 13.6483 5.89519 13.6501H5.89433C5.8857 13.6501 5.8801 13.644 5.87148 13.6432C5.67316 13.6371 5.40328 13.5293 5.19289 13.3358C4.97733 13.1375 4.82989 12.871 4.82989 12.5916V11.3427C4.82897 11.2031 4.85578 11.0648 4.90875 10.9358C4.96172 10.8067 5.03981 10.6894 5.13847 10.5907C5.23714 10.4921 5.35442 10.4139 5.4835 10.361C5.61259 10.308 5.75091 10.2812 5.89045 10.2821H5.89001ZM13.5916 9.85101C13.1961 9.85146 12.817 10.0087 12.5373 10.2884C12.2577 10.568 12.1004 10.9472 12.0999 11.3427V12.5916C12.0999 13.0189 12.3172 13.3909 12.6022 13.6535C12.6142 13.6647 12.6319 13.6613 12.644 13.6721C12.6353 13.6764 12.4543 13.7664 12.1585 13.916C12.133 13.9287 12.1103 13.9462 12.0916 13.9677C12.0729 13.9891 12.0587 14.014 12.0497 14.041C12.0407 14.0679 12.0371 14.0964 12.0392 14.1248C12.0412 14.1532 12.0489 14.1808 12.0617 14.2062C12.0745 14.2316 12.0921 14.2543 12.1137 14.2728C12.1353 14.2913 12.1603 14.3054 12.1874 14.3142C12.2144 14.323 12.2429 14.3264 12.2713 14.3241C12.2996 14.3219 12.3272 14.314 12.3525 14.3011C12.6535 14.1484 12.8457 14.0527 12.8462 14.0527L13.06 13.9475C13.2014 14.0027 13.3558 14.076 13.5924 14.0838C13.5999 14.0841 13.6074 14.0841 13.6149 14.0838C13.88 14.0644 14.0167 13.9906 14.1572 13.9406L14.3478 14.0333L14.3223 14.0191C14.3913 14.0648 14.4508 14.0893 14.5784 14.1519C14.7056 14.2148 14.8789 14.2998 15.0945 14.4071C15.6782 14.6986 16.2552 15.0033 16.825 15.3211C17.0233 15.4452 17.0893 15.6134 17.0893 15.9027V16.1005C17.0893 16.1577 17.112 16.2125 17.1524 16.2529C17.1928 16.2934 17.2477 16.3161 17.3048 16.3161C17.362 16.3161 17.4168 16.2934 17.4573 16.2529C17.4977 16.2125 17.5204 16.1577 17.5204 16.1005V15.9022C17.5204 15.5267 17.3867 15.1629 17.0531 14.9546C17.0501 14.9525 17.0471 14.9505 17.044 14.9486C16.4656 14.6258 15.8798 14.3163 15.2872 14.0204C15.0699 13.9118 14.8949 13.8259 14.7685 13.7634C14.6435 13.7022 14.5487 13.6501 14.5642 13.6608C14.5689 13.6565 14.5758 13.6565 14.581 13.6531C14.8655 13.3905 15.0828 13.0184 15.0828 12.5912V11.3427C15.0825 10.9471 14.9252 10.5679 14.6456 10.2881C14.3659 10.0084 13.9867 9.85104 13.5911 9.85059L13.5916 9.85101ZM13.5916 10.2821C13.7311 10.2813 13.8693 10.3081 13.9984 10.3611C14.1274 10.4141 14.2447 10.4922 14.3433 10.5909C14.4419 10.6896 14.5199 10.8068 14.5729 10.9359C14.6258 11.0649 14.6526 11.2032 14.6517 11.3427V12.5916C14.6517 12.871 14.5051 13.1374 14.2896 13.3362C14.0749 13.5336 13.7951 13.6488 13.5955 13.6501H13.5946C13.5873 13.6501 13.5817 13.6449 13.5748 13.644C13.376 13.6384 13.1048 13.5298 12.894 13.3358C12.6785 13.1375 12.5314 12.871 12.5314 12.5916V11.3427C12.5305 11.2032 12.5573 11.0649 12.6103 10.9359C12.6632 10.8068 12.7413 10.6896 12.8399 10.5909C12.9385 10.4922 13.0557 10.4141 13.1848 10.3611C13.3138 10.3081 13.4521 10.2813 13.5916 10.2821Z" fill="#36E079"></path>
                                            <path d="M9.81708 8.7139C9.3591 8.71413 8.91994 8.89612 8.5961 9.21996C8.27226 9.5438 8.09023 9.98299 8.09 10.441V11.921C8.09 12.4138 8.34049 12.8436 8.67202 13.1488C8.70004 13.1747 8.73539 13.1863 8.76428 13.2105L8.72677 13.2299C8.72648 13.2299 8.7262 13.2299 8.72591 13.2299C8.72591 13.2299 7.26311 13.9542 5.95897 14.6655C5.58562 14.8522 5.24805 15.2195 5.24805 15.686V16.0546C5.24805 16.0829 5.25362 16.1109 5.26446 16.1371C5.27529 16.1632 5.29117 16.187 5.31118 16.207C5.3312 16.227 5.35496 16.2429 5.38112 16.2537C5.40727 16.2646 5.4353 16.2702 5.46361 16.2702C5.49192 16.2702 5.51995 16.2646 5.5461 16.2537C5.57225 16.2429 5.59602 16.227 5.61603 16.207C5.63605 16.187 5.65193 16.1632 5.66276 16.1371C5.67359 16.1109 5.67917 16.0829 5.67917 16.0546V15.686C5.67917 15.4428 5.89387 15.1799 6.15168 15.0509C6.15386 15.0496 6.15602 15.0481 6.15815 15.0466C7.06962 14.5541 7.98934 14.0769 8.9169 13.6153L9.17988 13.486C9.38725 13.5843 9.60281 13.6472 9.81708 13.6472H9.81967C9.82713 13.6476 9.83462 13.6476 9.84208 13.6472C9.91365 13.6421 9.93046 13.6196 9.98953 13.6084C10.1477 13.5873 10.3042 13.5567 10.4569 13.4838C10.4663 13.4795 10.4827 13.4778 10.4922 13.4743L10.7306 13.5908L10.7052 13.5765C10.7785 13.6252 10.8526 13.6571 11.0035 13.7313C11.1544 13.8054 11.3614 13.9059 11.6166 14.0335C12.3087 14.3795 12.993 14.7412 13.6687 15.1182C13.9166 15.2734 14.0007 15.4903 14.0007 15.8416V16.0753C14.0007 16.1325 14.0234 16.1873 14.0638 16.2277C14.1042 16.2681 14.1591 16.2908 14.2162 16.2908C14.2734 16.2908 14.3282 16.2681 14.3687 16.2277C14.4091 16.1873 14.4318 16.1325 14.4318 16.0753V15.8416C14.4318 15.404 14.2792 14.991 13.8968 14.7518C13.8937 14.75 13.8905 14.7482 13.8873 14.7466C13.2028 14.3645 12.5097 13.9981 11.8084 13.6476C11.5511 13.5192 11.3437 13.4174 11.1937 13.3437C11.0441 13.2704 10.9307 13.2079 10.9445 13.2174C10.9366 13.2121 10.9284 13.2074 10.9199 13.2032L10.8966 13.1915C10.9173 13.1743 10.9427 13.1661 10.963 13.148C11.2941 12.8427 11.545 12.4129 11.545 11.9202V10.4396C11.5444 9.98167 11.3622 9.54263 11.0382 9.21891C10.7142 8.89519 10.2751 8.71323 9.81708 8.713V8.7139ZM9.81708 9.14502C9.98759 9.14399 10.1566 9.17679 10.3144 9.24154C10.4721 9.30629 10.6154 9.40172 10.7361 9.52225C10.8567 9.64279 10.9522 9.78604 11.017 9.94374C11.0819 10.1014 11.1148 10.2704 11.1139 10.441V11.921C11.1139 12.2659 10.9328 12.591 10.6707 12.8324C10.4107 13.0721 10.0727 13.2126 9.82268 13.2144H9.82182C9.81234 13.2144 9.80544 13.2083 9.79595 13.2075C9.54763 13.2006 9.21954 13.0674 8.96389 12.8324C8.70177 12.591 8.52113 12.2655 8.52113 11.921V10.4405C8.52015 10.2701 8.55301 10.1011 8.6178 9.94348C8.68259 9.78583 8.77802 9.64265 8.89856 9.52215C9.0191 9.40165 9.16235 9.30622 9.32002 9.24149C9.47769 9.17675 9.64664 9.14399 9.81708 9.14502ZM11.5812 4C11.2965 4.0008 11.0238 4.11431 10.8226 4.31574C10.6214 4.51716 10.5082 4.79009 10.5077 5.07478V7.2045C10.5082 7.4891 10.6214 7.76193 10.8226 7.96322C11.0238 8.16451 11.2966 8.27789 11.5812 8.27846H12.0356L12.0684 9.18465C12.07 9.22802 12.0847 9.2699 12.1105 9.3048C12.1363 9.3397 12.172 9.36601 12.213 9.38026C12.254 9.39452 12.2984 9.39605 12.3402 9.38468C12.3821 9.37332 12.4196 9.3496 12.4478 9.31658L13.3402 8.27846H16.0339C16.3185 8.27789 16.5913 8.16461 16.7926 7.96343C16.9939 7.76226 17.1074 7.48958 17.1082 7.20497V5.07478C17.1075 4.79001 16.9941 4.51709 16.7928 4.31568C16.5915 4.11428 16.3186 4.0008 16.0339 4H11.5812ZM11.5812 4.43112H16.0339C16.3938 4.43112 16.6771 4.71479 16.6771 5.07478V7.2045C16.6771 7.56448 16.3934 7.84734 16.0339 7.84734H13.2415C13.2105 7.84734 13.1798 7.85402 13.1516 7.86697C13.1234 7.87991 13.0983 7.8988 13.0781 7.92233L12.4797 8.61775L12.4594 8.05553C12.4575 7.99964 12.434 7.94671 12.3938 7.90786C12.3535 7.86901 12.2998 7.84731 12.2439 7.84734H11.5812C11.2212 7.84734 10.9389 7.56453 10.9389 7.20497V5.07478C10.9389 4.71479 11.2212 4.43112 11.5812 4.43112Z" fill="white"></path>
                                            <path d="M4.76758 6.00977C4.36103 6.00977 4.02734 6.34347 4.02734 6.75002V8.05375C4.02734 8.4603 4.36103 8.79396 4.76758 8.79396H6.37653L6.89819 9.39927C6.92652 9.43169 6.96391 9.45487 7.00555 9.46585C7.04719 9.47682 7.09116 9.47509 7.13179 9.46085C7.17243 9.44661 7.20786 9.42052 7.23354 9.38596C7.25922 9.35139 7.27395 9.30993 7.27585 9.26692L7.29352 8.79353H7.49055C7.8971 8.79353 8.23078 8.45987 8.23078 8.05375V6.75002C8.23078 6.40081 7.96521 6.14775 7.63799 6.07144C7.63574 6.06909 7.63344 6.0668 7.63109 6.06455C7.62571 6.05982 7.6201 6.05536 7.61428 6.05118C7.59687 6.03863 7.57769 6.02876 7.55737 6.02187C7.5503 6.01949 7.5431 6.01745 7.53581 6.01582C7.52098 6.01221 7.50581 6.01017 7.49055 6.00977H4.76758ZM4.76758 6.44089H7.49055C7.66601 6.44089 7.79966 6.57498 7.79966 6.75002V8.05375C7.79966 8.22879 7.66601 8.36283 7.49055 8.36283H7.08529C7.02944 8.3628 6.97576 8.38443 6.93555 8.4232C6.89534 8.46196 6.87174 8.51484 6.86973 8.57066L6.86542 8.70128L6.63865 8.43746C6.61837 8.41388 6.59323 8.39494 6.56495 8.38199C6.53667 8.36904 6.50593 8.36236 6.47482 8.36241H4.76758C4.72681 8.36317 4.68631 8.35571 4.6485 8.34047C4.61068 8.32523 4.57632 8.30255 4.54747 8.27374C4.51862 8.24492 4.49587 8.21059 4.48057 8.1728C4.46528 8.135 4.45776 8.09452 4.45847 8.05375V6.75002C4.45847 6.57498 4.59211 6.44089 4.76758 6.44089Z" fill="#36E079"></path>
                                        </svg>
                                    </div>
                                    <div className="grow sm:pl-3">
                                        <div className="w-full text-base md:text-lg font-bold">100 %</div>
                                        <div className="w-full text-sm md:text-base font-semibold">Client Satisfaction</div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex max-sm:flex-col gap-y-3">
                                    <div className="w-8 md:w-12">
                                        <svg width="48" height="52" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3102 11.8541V11.0518C17.309 11.0429 17.3072 11.0341 17.305 11.0254C17.6674 10.8161 17.9578 10.5017 18.1378 10.1239L18.1419 10.1161C18.2734 9.84318 18.3427 9.54445 18.3447 9.24148C18.3465 8.77179 18.188 8.31553 17.8955 7.94804C17.603 7.58055 17.1939 7.3238 16.7358 7.22018C16.2777 7.11656 15.7979 7.17227 15.3757 7.3781C14.9535 7.58394 14.6142 7.9276 14.4137 8.35234C14.4095 8.35855 14.4069 8.36527 14.4033 8.37148C14.181 8.83811 14.1442 9.37179 14.3004 9.86452C14.4566 10.3572 14.7942 10.7722 15.2449 11.0254C15.2432 11.0342 15.242 11.043 15.2412 11.0518V11.9875C15.1757 12.0232 15.1134 12.0646 15.055 12.1111L13.4687 13.3794H12.1378C11.8634 13.3794 11.6003 13.4884 11.4063 13.6824C11.2123 13.8764 11.1033 14.1395 11.1033 14.4139C11.1043 14.596 11.1539 14.7746 11.2471 14.9311H8.89055C8.98372 14.7746 9.03336 14.596 9.03435 14.4139C9.03435 14.1395 8.92536 13.8764 8.73135 13.6824C8.53735 13.4884 8.27423 13.3794 7.99987 13.3794H6.669L5.08262 12.1117C5.02432 12.0649 4.96201 12.0233 4.89642 11.9875V11.0518C4.89518 11.0429 4.89346 11.0341 4.89124 11.0254C5.342 10.7722 5.67968 10.3571 5.83593 9.8643C5.99218 9.37145 5.95531 8.83765 5.7328 8.37096C5.72918 8.36476 5.72659 8.35803 5.72297 8.35234C5.48914 7.85781 5.06844 7.47641 4.55341 7.29206C4.03838 7.10771 3.47121 7.1355 2.97668 7.36933C2.48214 7.60315 2.10074 8.02385 1.91639 8.53888C1.82511 8.7939 1.78495 9.0644 1.79821 9.33494C1.81147 9.60547 1.87788 9.87075 1.99366 10.1156L1.9978 10.1234C2.17827 10.5017 2.4694 10.8163 2.83262 11.0254C2.83041 11.0341 2.82869 11.0429 2.82745 11.0518V11.8541C2.53546 11.9137 2.27302 12.0723 2.08452 12.3031C1.89602 12.5339 1.79303 12.8228 1.79297 13.1208V16.7415C1.79297 16.8101 1.82022 16.8759 1.86872 16.9244C1.91722 16.9729 1.983 17.0001 2.05159 17.0001H18.0861C18.1547 17.0001 18.2204 16.9729 18.2689 16.9244C18.3174 16.8759 18.3447 16.8101 18.3447 16.7415V13.1208C18.3446 12.8228 18.2416 12.5339 18.0531 12.3031C17.8646 12.0723 17.6022 11.9137 17.3102 11.8541ZM16.2757 7.68976C16.6873 7.68976 17.082 7.85324 17.373 8.14425C17.664 8.43525 17.8275 8.82994 17.8275 9.24148C17.8257 9.41809 17.7935 9.59307 17.7323 9.75872H17.3102V8.98286C17.3102 8.92324 17.2896 8.86545 17.2519 8.81926C17.2142 8.77308 17.1617 8.74134 17.1033 8.72941L15.0343 8.31976C15.1776 8.125 15.3645 7.96654 15.5801 7.85713C15.7957 7.74772 16.034 7.69039 16.2757 7.68976ZM14.724 9.24148C14.7261 9.09134 14.7504 8.94233 14.7959 8.79924L16.793 9.19493V10.0173C16.793 10.0859 16.8202 10.1517 16.8687 10.2002C16.9172 10.2487 16.983 10.276 17.0516 10.276H17.424C17.2152 10.5102 16.94 10.6753 16.6351 10.7494C16.3302 10.8235 16.0099 10.8031 15.7169 10.6908C15.4239 10.5785 15.1719 10.3797 14.9946 10.1209C14.8172 9.86199 14.7229 9.55528 14.724 9.24148ZM16.793 11.237V11.8277H15.8619C15.8268 11.8277 15.7926 11.8339 15.7585 11.8365V11.237C16.0964 11.3349 16.4551 11.3349 16.793 11.237ZM12.1378 13.8967H12.655V14.9311H12.1378C12.0006 14.9311 11.8691 14.8766 11.7721 14.7796C11.675 14.6826 11.6206 14.5511 11.6206 14.4139C11.6206 14.2767 11.675 14.1452 11.7721 14.0481C11.8691 13.9511 12.0006 13.8967 12.1378 13.8967ZM7.48262 13.8967H7.99987C8.13705 13.8967 8.26861 13.9511 8.36561 14.0481C8.46261 14.1452 8.51711 14.2767 8.51711 14.4139C8.51711 14.5511 8.46261 14.6826 8.36561 14.7796C8.26861 14.8766 8.13705 14.9311 7.99987 14.9311H7.48262V13.8967ZM2.31021 9.24148C2.3092 8.91517 2.4114 8.5969 2.60219 8.33217C2.79297 8.06745 3.06258 7.86983 3.37246 7.76757C3.68233 7.66531 4.0166 7.66365 4.32748 7.76283C4.63835 7.862 4.90991 8.05694 5.10331 8.31976L3.03435 8.72941C2.97593 8.74134 2.92343 8.77308 2.88573 8.81926C2.84803 8.86545 2.82744 8.92324 2.82745 8.98286V9.75872H2.40538C2.34411 9.59307 2.31191 9.41809 2.31021 9.24148ZM2.71366 10.276H3.08607C3.15466 10.276 3.22044 10.2487 3.26894 10.2002C3.31745 10.1517 3.34469 10.0859 3.34469 10.0173V9.19493L5.34176 8.79924C5.38729 8.94233 5.41152 9.09134 5.41366 9.24148C5.4148 9.55528 5.32042 9.86199 5.14308 10.1209C4.96573 10.3797 4.7138 10.5785 4.42077 10.6908C4.12775 10.8031 3.80749 10.8235 3.50257 10.7494C3.19765 10.6753 2.92249 10.5102 2.71366 10.276ZM4.37918 11.237V11.8365C4.34452 11.8339 4.31038 11.8277 4.27573 11.8277H3.34469V11.237C3.51326 11.2835 3.68709 11.3082 3.86193 11.3104C4.03678 11.3082 4.21061 11.2835 4.37918 11.237ZM4.37918 15.1898V16.4829H2.31021V13.1208C2.31021 12.915 2.39195 12.7177 2.53745 12.5722C2.68296 12.4267 2.8803 12.3449 3.08607 12.3449H4.27573C4.45191 12.345 4.62284 12.405 4.76038 12.5151L6.41555 13.8408C6.46175 13.8774 6.51905 13.8971 6.57797 13.8967H6.96538V14.9311H6.2759L4.27573 13.4311C4.24856 13.4108 4.21764 13.3959 4.18474 13.3875C4.15184 13.3791 4.1176 13.3772 4.08398 13.382C4.05036 13.3868 4.01801 13.3982 3.98879 13.4155C3.95957 13.4328 3.93404 13.4557 3.91366 13.4829C3.89328 13.51 3.87845 13.5409 3.87003 13.5738C3.8616 13.6067 3.85973 13.641 3.86453 13.6746C3.86934 13.7082 3.88071 13.7406 3.89802 13.7698C3.91532 13.799 3.93821 13.8246 3.96538 13.8449L5.41366 14.9311H4.6378C4.56921 14.9311 4.50342 14.9584 4.45492 15.0069C4.40642 15.0554 4.37918 15.1212 4.37918 15.1898ZM15.2412 16.4829H4.89642V15.4484H15.2412V16.4829ZM17.8275 16.4829H15.7585V15.1898C15.7585 15.1212 15.7312 15.0554 15.6827 15.0069C15.6342 14.9584 15.5685 14.9311 15.4999 14.9311H14.724L16.1723 13.8449C16.1994 13.8246 16.2223 13.799 16.2396 13.7698C16.2569 13.7406 16.2683 13.7082 16.2731 13.6746C16.2779 13.641 16.2761 13.6067 16.2676 13.5738C16.2592 13.5409 16.2444 13.51 16.224 13.4829C16.2036 13.4557 16.1781 13.4328 16.1489 13.4155C16.1196 13.3982 16.0873 13.3868 16.0537 13.382C16.0201 13.3772 15.9858 13.3791 15.9529 13.3875C15.92 13.3959 15.8891 13.4108 15.8619 13.4311L13.8618 14.9311H13.1723V13.8967H13.5597C13.6185 13.8968 13.6756 13.8769 13.7216 13.8403L15.3768 12.5146C15.5147 12.4048 15.6857 12.345 15.8619 12.3449H17.0516C17.2574 12.3449 17.4547 12.4267 17.6002 12.5722C17.7457 12.7177 17.8275 12.915 17.8275 13.1208V16.4829Z" fill="white"></path>
                                            <path d="M6.39042 6.84321L6.65104 5.10573L5.41309 3.84607L7.15056 3.58544L7.95414 2L8.75772 3.58544L9.3224 3.67232" stroke="#36E079" strokeWidth="0.434368" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M11.4287 3.71578L12.0585 3.60718L12.8621 2.04346L13.6657 3.60718L15.4032 3.88952L14.1652 5.12747L14.4259 6.88667" stroke="#36E079" strokeWidth="0.434368" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M10.365 4.02002L11.3206 5.90952L13.4273 6.25702L11.9288 7.75559L12.2545 9.86227L10.365 8.88495L8.47553 9.86227L8.80131 7.75559L7.30273 6.25702L9.3877 5.90952L10.365 4.02002Z" stroke="#36E079" strokeWidth="0.434368" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div className="grow sm:pl-3">
                                        <div className="w-full text-base md:text-lg font-bold">150 +</div>
                                        <div className="w-full text-sm md:text-base font-semibold">Startups We Worked With</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full !h-auto lg:w-1/2 relative overflow-hidden ">

                            <div className="relative z-10 h-full w-full max-w-3xl bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] p-5 shadow-lg sm:mx-0">
                                <div className="flex max-md:flex-col gap-5 items-center relative">
                                    <div className="w-full shrink-0">
                                        <form method="post" id="feedInput" encType="multipart/form-data" name="connectForm" className=" flex flex-col px-5 py-8 needs-validation has-[button:disabled]:pointer-events-none" noValidate="" />
                                        <input type="hidden" name="_token" value="B5M06lEni5AskJimdNgrulNkfQep810nhyk3UBXB" />                                <input type="hidden" id="ajxURL" value="https://www.imgglobalinfotech.com/contact_action" />
                                        <input type="hidden" id="reUrl" value="https://www.imgglobalinfotech.com/thankyou.php" />
                                        <input type="hidden" id="countrycodeformFooter" name="phonecode" value="+91" />
                                        <div className="relative mb-8">
                                            <input type="text" id="contactname" name="contactname" required="" className="block rounded-t-lg pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm bg-gray-700 border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-gray-500 focus:outline-none focus:ring-0 peer [&:user-invalid]:border-red-500" placeholder=" " />
                                            <label htmlFor="contactname" className="absolute text-sm text-gray-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Full Name <span className="text-red-500 font-bold">*</span></label>
                                            <span className="absolute start-3 top-[1.45rem] text-gray-200 peer-placeholder-shown:top-[1.15rem] peer-focus:top-[1.45rem] duration-300 *:w-4 *:h-4">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
                                            </span>
                                            <span className="text-red-500 text-sm origin-left peer-[:user-invalid:focus]:scale-100 scale-0 peer-[:user-invalid:focus]:h-5 h-0 overflow-hidden block transition-all">Please Enter Full Name.</span>
                                        </div>

                                        <div className="relative mb-8">
                                            <input type="email" id="useremail" name="contactemail" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" className="block rounded-t-lg pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm bg-gray-700 border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-gray-500 focus:outline-none focus:ring-0 peer [&:user-invalid]:border-red-500" placeholder=" " />
                                            <label htmlFor="useremail" className="absolute text-sm text-gray-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Email ID</label>
                                            <span className="absolute start-3 top-[1.45rem] text-gray-200 peer-placeholder-shown:top-[1.15rem] peer-focus:top-[1.45rem] duration-300 *:w-4 *:h-4">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>
                                            </span>
                                            <span className="text-red-500 text-sm origin-left peer-[:user-invalid:focus]:scale-100 scale-0 peer-[:user-invalid:focus]:h-5 h-0 overflow-hidden block transition-all">Please enter a valid email id.</span>
                                        </div>
                                        <div className="relative mb-8">
                                            <input type="text" id="usernumber" name="contactemail" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" className="block rounded-t-lg pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm bg-gray-700 border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-gray-500 focus:outline-none focus:ring-0 peer [&:user-invalid]:border-red-500" placeholder=" " />
                                            <label htmlFor="useremail" className="absolute text-sm text-gray-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Phone number</label>
                                            <span className="absolute start-3 top-[1.45rem] text-gray-200 peer-placeholder-shown:top-[1.15rem] peer-focus:top-[1.45rem] duration-300 *:w-4 *:h-4">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m17.38 10.79-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.35-.12.75-.03 1.02.24l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59z"></path></svg>
                                            </span>
                                            <span className="text-red-500 text-sm origin-left peer-[:user-invalid:focus]:scale-100 scale-0 peer-[:user-invalid:focus]:h-5 h-0 overflow-hidden block transition-all">Please enter a valid email id.</span>
                                        </div>
                                        <div className="relative mb-8">
                                            <select id="app" value="Project Type" name="requirement" required="" className="block rounded-t-lg pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm bg-gray-700 border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-gray-500 focus:outline-none focus:ring-0 peer [&:user-invalid]:border-red-500" placeholder=" ">
                                                <option value="" selected="" disabled="">Project Type</option>
                                                <option value="Mobile App Development">Mobile App Development</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Custom Software Development">Custom Software Development</option>
                                                <option value="E-commerce Solution">E-commerce Solution</option>
                                                <option value="On-demand Solutions">On-demand Solutions</option>
                                                <option value="Readymade solutions">Readymade solutions</option>
                                                <option value="Fantasy Sports App Development">Fantasy Sports App Development</option>
                                                <option value="Hire Dedicated Developers">Hire Dedicated Developers</option>
                                                <option value="Other Services">Other Services</option>
                                            </select>
                                            <label htmlFor="app" className="absolute text-sm text-gray-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Looking For <span className="text-red-500 font-bold">*</span></label>
                                            <span className="absolute start-3 top-[1.45rem] text-gray-200 peer-placeholder-shown:top-[1.15rem] peer-focus:top-[1.45rem] duration-300 *:w-4 *:h-4">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="m7.854 10.854 3.792 3.792a.5.5 0 0 0 .708 0l3.793-3.792a.5.5 0 0 0-.354-.854H8.207a.5.5 0 0 0-.353.854Z"></path><path d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path></svg>
                                            </span>
                                            <span className="text-red-500 text-sm origin-left peer-[:user-invalid:focus]:scale-100 scale-0 peer-[:user-invalid:focus]:h-5 h-0 overflow-hidden block transition-all">Please select a valid value.</span>
                                        </div>
                                        <div className="relative mb-8">
                                            <textarea id="requirements" name="mmessage" minlength="10" maxlength="2000" className="block rounded-t-lg pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm bg-gray-700 border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-gray-500 focus:outline-none focus:ring-0 peer [&:user-invalid]:border-red-500" placeholder=" "></textarea>
                                            <label htmlFor="requirements" className="absolute text-sm text-gray-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Your Message / Requirements</label>
                                            <span className="absolute start-3 top-[1.45rem] text-gray-200 peer-placeholder-shown:top-[1.15rem] peer-focus:top-[1.45rem] duration-300 *:w-4 *:h-4">
                                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                            </span>
                                            <span className="text-red-500 text-sm origin-left peer-[:user-invalid:focus]:scale-100 scale-0 peer-[:user-invalid:focus]:h-5 h-0 overflow-hidden block transition-all">Please enter your query.</span>
                                        </div>
                                        <button type="submit" className="inline-flex justify-center rounded-lg  text-sm font-semibold py-2 px-3 bg-slate-600 text-white [&:not(:disabled)]:hover:bg-slate-500 mt-6 w-full group/submit">
                                            <span className="group-[:disabled]/submit:hidden">Submit</span>
                                            <span className="group-[:disabled]/submit:flex items-center hidden">
                                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                                                </svg>
                                                Loading...
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 pointer-events-none" aria-hidden="true">
                                <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-pink-600 to-purple-600 opacity-30" style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    width: '300px', // Customize the width and height
                                    height: '300px',
                                    backgroundColor: 'lightblue', // Customize the background color
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioSection/>
            <footer className="relative !overflow-hidden bg-gradient-to-br from-[#0E508A] via-sky-950 to-gray-950 py-8 sm:py-16 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative">
                    <div className="w-full flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-5 ">
                        <div className="w-auto">
                            <div className="w-full inline-flex items-center gap-1 justify-center">
                                <span className="size-5 inline-block text-sm">
                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                                </span>

                                <span>4.9/5</span>
                            </div>
                            <div className="w-full h-12 -mt-1">
                                <img className="size-full object-contain" loading="lazy" width="110" height="48" src="https://www.imgglobalinfotech.com/public/tailwind/img/hidden.webp?id=4df173c235873ed3ff8684e03934b9a3" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/footer-clutch.webp?id=ad8850c948c5fd1b904a4a5acae571f4" alt="footer clutch" />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex flex-shrink-0 items-center justify-center"><Link target="_blank" href="https://www.goodfirms.co/company/img-global-infotech-pvt-ltd"><img style={{ width: '150px', height: '150px' }} src="https://assets.goodfirms.co/badges/color-badge/app-development.svg" title="Top Mobile App Development Company" alt="Top Mobile App Development Company on GoodFirms" /></Link></div>
                                <div className="flex flex-shrink-0 items-center justify-center"><iframe width="130" height="130" src="https://shareables.clutch.co/share/badges/237597/5993?utm_source=clutch_top_company_badge&utm_medium=image_embed" title="Top Clutch E-commerce Developers Jaipur 2024"></iframe></div>

                            </div>
                            <div className="flex items-center justify-center mx-auto">
                                <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
                                <div className="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="7" data-height="65" data-nofollow="true" data-expandifr="true" data-scale="100" data-clutchcompany-id="237597"><iframe id="iframe-0.678276882042331" width="100%" src="https://widget.clutch.co/widgets/get/7?ref_domain=www.imgglobalinfotech.com&uid=237597&rel_nofollow=true&ref_path=/" height="65px" scrolling="no" style={{ border: 'none', overflow: 'hidden', display: 'block' }} title="Twin Power Software Pvt. Ltd Clutch Review Widget 7"></iframe></div>
                            </div>

                        </div>
                        <div className="w-auto">
                            <div className="w-full flex flex-wrap items-center justify-center gap-6 lg:gap-12">
                                <div className="w-auto">
                                    <div className="w-full inline-flex items-center gap-1 justify-center">
                                        <span className="size-5 inline-block text-sm">
                                            <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                                        </span>
                                        <span>4.9/5</span>
                                    </div>
                                    <div className="w-full h-12 -mt-1">
                                        <img className="size-full object-contain" loading="lazy" width="110" height="48" src="https://www.imgglobalinfotech.com/public/tailwind/img/hidden.webp?id=4df173c235873ed3ff8684e03934b9a3" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/footer-clutch.webp?id=ad8850c948c5fd1b904a4a5acae571f4" alt="footer clutch" />
                                    </div>
                                </div>
                                <div className="w-auto">
                                    <div className="w-full inline-flex items-center gap-1 justify-center">
                                        <span className="size-5 inline-block text-sm">
                                            <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                                        </span>
                                        <span>4.6/5</span>
                                    </div>
                                    <div className="w-full h-12 -mt-1">
                                        <img className="size-full object-contain" width="110" height="48" src="https://www.imgglobalinfotech.com/public/tailwind/img/google.webp?id=305718ba3103d02f222f73fcac606da6" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/google.webp?id=305718ba3103d02f222f73fcac606da6" alt="google" />
                                    </div>
                                </div>
                                <div className="w-auto">
                                    <div className="w-full inline-flex items-center gap-1 justify-center">
                                        <span className="size-5 inline-block text-sm">
                                            <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                                        </span>
                                        <span>4.8/5</span>
                                    </div>
                                    <div className="w-full h-12 -mt-1">
                                        <img className="size-full object-contain" width="110" height="48" src="https://www.imgglobalinfotech.com/public/tailwind/img/mobileapp.webp?id=e639b97f37086c1eaba7c56a63a65639" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/mobileapp.webp?id=e639b97f37086c1eaba7c56a63a65639" alt="mobileapp" />
                                    </div>
                                </div>
                                <div className="w-auto">
                                    <div className="w-full inline-flex items-center gap-1 justify-center">
                                        <span className="size-5 inline-block text-sm">
                                            <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                                        </span>
                                        <span>4.4/5</span>
                                    </div>
                                    <div className="w-full h-12 -mt-1">
                                        <img className="size-full object-contain" width="110" height="48" src="https://www.imgglobalinfotech.com/public/tailwind/img/trustpilot.webp?id=a464c168c6ed424da5be652905d10589" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/trustpilot.webp?id=a464c168c6ed424da5be652905d10589" alt="trustpilot" />
                                    </div>
                                </div>
                                <div className="w-auto">
                                    <div className="w-full inline-flex items-center gap-1 justify-center">
                                        <span className="size-5 inline-block text-sm">
                                            <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                                        </span>
                                        <span>4.6/5</span>
                                    </div>
                                    <div className="w-full h-12 -mt-1">
                                        <img className="size-full object-contain" width="110" height="48" src="https://www.imgglobalinfotech.com/public/tailwind/img/bussinesapp.webp?id=bd2c2e4a03aac75f542932a099947da3" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/bussinesapp.webp?id=bd2c2e4a03aac75f542932a099947da3" alt="bussinesapp" />
                                    </div>
                                </div>

                            </div>
                            <div className="w-full flex flex-wrap items-center justify-center lg:gap-4 pt-8">
                                <Link target="_blank" title="Facebook" href="https://www.facebook.com/imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg: shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-blue-900 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-blue-900 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
                                    <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                </Link>
                                <Link target="_blank" title="Twitter" href="https://twitter.com/imgglobal" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg: shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-cyan-400 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-cyan-400 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
                                    <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                </Link>
                                <Link target="_blank" title="Instagram" href="https://www.instagram.com/imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg: shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-rose-500 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-rose-500 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
                                    <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                </Link>
                                <Link target="_blank" title="Youtube" href="https://www.youtube.com/@imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg: shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-red-700 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-red-700 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
                                    <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                                </Link>
                                <Link target="_blank" title="Linkedin" href="https://www.linkedin.com/company/imgglobalinfotechpltd" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg: shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-sky-700 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-sky-700 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
                                    <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap py-12 my-8 gap-y-10 border-y border-white/20">
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
                            <div className="flex flex-col w-full px-3 text-sm lg:text-base">
                                <div className="w-full font-bold text-base lg:text-lg pb-4">Corporate Office</div>
                                <div className="w-full opacity-80 pb-1">Andhari, Mumbai</div>
                                <div className="w-full opacity-80">Phone : +91-0989786785</div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
                            <div className="flex flex-col w-full px-3 text-sm lg:text-base">
                                <div className="w-full font-bold text-base lg:text-lg pb-4">Regional Office</div>
                                <div className="w-full opacity-80 pb-1">1090, gandhi Nagar, nehru Marg, Near , , Delhi - 302019</div>
                                <div className="w-full opacity-80">Phone :+91-0987654321 , +91-0987654321 </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
                            <div className="flex flex-col w-full px-3 text-sm lg:text-base">
                                <div className="w-full font-bold text-base lg:text-lg pb-4">Regional Office</div>
                                <div className="w-full opacity-80 pb-1">203 Schm No.2 near city park, Kolkata</div>
                                <div className="w-full opacity-80">Phone : +91-0987654321</div>

                            </div>
                        </div>
                    </div>       
                     <div className="w-full flex flex-wrap py-8 gap-y-10 text-sm lg:text-base">
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="flex flex-col w-full px-3">
                                <div className="w-full font-bold text-base lg:text-lg pb-4">Quick Links</div>
                                <Link href="https://www.imgglobalinfotech.com/about-us.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>About Us</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/testimonials.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Testimonials</span>
                                </Link>
                                <Link href="https://www.flickr.com/photos/imgglobalinfotech" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Life @IMG</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/career.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Career</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/blog" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Blog</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/contact-us.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="flex flex-col w-full px-3">
                                <div className="w-full font-bold text-base lg:text-lg pb-4">Our Exclusive Services</div>
                                <Link href="https://www.imgglobalinfotech.com/web-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Web Development Company</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>eCommerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/software-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Software Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Blockchain App</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Trending Solution</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Hire Dedicated Developers</span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="flex flex-col w-full px-3">
                                <div className="w-full font-bold text-base lg:text-lg pb-4">On Demand Solutions</div>
                                <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Food Delivery App</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Grocery Delivery App</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/medicine-delivery-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Medicine Delivery App</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/home-services-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Home Services</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/alcohol-delivery-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Alcohol Delivery App</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/fuel-delivery-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fuel Delivery App</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/taxi-app-development-company.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Taxi App</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/doctor-on-demand-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Doctor On-Demand App</span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="flex flex-col w-full px-3">
                                <div className="w-full font-bold text-base lg:text-lg pb-4">Cost and Features</div>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Software development cost</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile app development cost</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Website development cost</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Blockchain app development cost</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>eCommerce app development cost</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fintech software development cost</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>E-wallet app development cost</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Social media app development cost</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fantasy sports app development cost</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Marketplace development cost</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-full flex flex-wrap py-8 gap-y-10 text-sm lg:text-base">
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="flex flex-col w-full px-3">
                                <div className="w-full font-bold text-base lg:text-lg pb-4">All Others</div>
                                <Link href="https://www.imgglobalinfotech.com/media-and-entertainment-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Media and Entertainment App Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/logistics-software-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Logistics Software Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/fantasy-cricket-app-development-company-in-india.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fantasy Cricket App Development Company in India</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/web-development-company-in-delhi.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Web Development Company in Delhi</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/mobile-app-development-company-in-uk.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile App Company in UK</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/mobile-app-development-company-in-canada.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile App Company in Canada</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/digital-marketing-services.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Digital Marketing Services</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/shopify-ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Shopify Ecoomerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/casino-game-app-development-company-in-india.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Casino Game App Development Company in India</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/hire-dedicated-developers.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Hire Dedicated Developers</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/launch-your-online-ecommerce-store.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Launch Your Online Ecommerce Store</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/progressive-web-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Progressive Web App Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/iot-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>IOT App Development</span>
                                </Link>

                                <Link href="https://www.imgglobalinfotech.com/mobile-app-development-in-jaipur.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile App Development in Jaipur</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/services.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Services</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/website-designing-company-in-alwar.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Website Designing Company in Alwar</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/web-development-company-in-alwar.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Web Development Company in Alwar</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/web-development-company-in-jaipur.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Web Development Company in Jaipur </span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/web-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Web App Development </span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/web-development-company-in-delhi.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Web Development Company in Delhi </span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/ecommerce-website-development-company-in-alwar.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Ecommerce Website Development Company in Alwar </span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/cms-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>CMS Development</span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="flex flex-col w-full px-3">
                                <div className="w-full font-bold text-base lg:text-lg pb-4 invisible max-md:hidden">Our Exclusive Services
                                </div>
                                <Link href="https://www.imgglobalinfotech.com/mobile-app-development-company-in-dubai-uae.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile App Company in Dubai UAE</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/seo-services.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>SEO Services</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/healthcare-software-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Healthcare Software Development</span>
                                </Link>

                                <Link href="https://www.imgglobalinfotech.com/fantasy-football-app-development-company-in-india.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fantasy Football App Development Company in India</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/biometric-attendance-software.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Biometric Attendence Software</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/gps-tracking-software.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>GPS Tracking Software</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/matrimonial-portal-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Matrimonial Portal Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/news-portal-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>News Portal Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/opencart-website-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Opencart Website Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/wordpress-website-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Wordpress Website Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/mobile-app-development-company-in-alwar.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile App Development Company in Alwar</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/mobile-app-development-company-in-jaipur.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile App Development Company in Jaipur</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/mobile-app-development-company-in-delhi.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile App Development Company in Delhi</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/ecommerce-development-company-in-alwar.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Ecommerce Development Company in Alwar</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/ecommerce-development-company-in-jaipur.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Ecommerce Development Company in Jaipur</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/ecommerce-development-company-in-delhi.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Ecommerce Development Company in Delhi</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/real-estate-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Real Estate App Development </span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/edtech-software-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span> Edtech Sofware Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/fintech-software-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fintech Software Development </span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/logistics-software-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span> Logistics Software Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/travel-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span> Travel App Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/event-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Event App Development </span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/social-media-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Social Media App Development </span>
                                </Link>

                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="flex flex-col w-full px-3">
                                <div className="w-full font-bold text-base lg:text-lg pb-4 invisible max-md:hidden">On Demand Solutions</div>
                                <Link href="https://www.imgglobalinfotech.com/jewellery-ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Jewellery Ecommerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/mission-and-vision.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mission and Vision</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development-company.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fantasy Sports App Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/mobile-app-development-company-in-new-york-usa.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile App Company in New York USA</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/woocommerce-website-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Woocommerce Website Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/industrial-erp-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Industrial ERP Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/credit-cooperative-society-software.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Credit Cooperative Society Software</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/payroll-management-software.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Payroll Management Software</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development-company-in-india.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fantasy Sports App Development Companhy in India</span>
                                </Link>

                                <Link href="https://www.imgglobalinfotech.com/furniture-ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Furniture Ecommerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/gift-ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Gift Ecommerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fashion Ecommerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/b2b-ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>B2B Ecommerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/b2c-ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>B2C Ecommerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/d2c-ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>D2C Ecommerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/market-place-ecommerce-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Market Place Ecommerce Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span> Pharmacy App Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/mobile-app-development-company.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Mobile App Development Company </span>
                                </Link>

                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="flex flex-col w-full px-3">
                                <div className="w-full font-bold text-base lg:text-lg pb-4 invisible max-md:hidden">Cost and Features</div>
                                <Link href="https://www.imgglobalinfotech.com/fantasy-kabaddi-app-development-company-in-india.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fantasy Kabaddi App Development Company in India</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/fantasy-movie-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Fantasy Movie App Development</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/sports-betting-app-development-company-in-india.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Sports Betting App Development Company in India</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/rfid-attendance-system-india.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>RFID Attendence System India</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/salon-app-development.php" className=" pointer-events-none w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Salon App Development </span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/ui-ux-design-services.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>UI UX Design Services</span>
                                </Link>
                                <Link href="https://www.imgglobalinfotech.com/hotel-management-software.php" className="w-full opacity-80 hover:text-cyan-500 duration-200 py-4 md:py-1 hoverLink flex items-center gap-2">
                                    <svg className="w-2.5 h-2.5 opacity-60" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z">
                                        </path>
                                    </svg>
                                    <span>Hotel Management Software</span>
                                </Link>


                            </div>
                        </div>
                    </div> */}
                    {/* <div className="w-full flex flex-wrap items-center gap-x-10 gap-y-5 justify-center pt-8 lg:pt-14 lg:mt-8 border-t border-white/20 text-xs lg:text-sm">
                        <div className="w-auto opacity-80">©2014 - 2024 Twin Power Software. All rights Reserved</div>
                        <div className="w-auto inline-flex flex-wrap gap-2 items-center">
                            <Link href="https://www.imgglobalinfotech.com/privacy-policy.php" className="w-auto opacity-80 hover:text-cyan-500 duration-200 hoverLink flex items-center gap-2">Privacy Policy</Link>
                            <div className="border-l border-white/20 h-4 w-[1px]"></div>
                            <Link href="https://www.imgglobalinfotech.com/terms-and-conditions.php" className="w-auto opacity-80 hover:text-cyan-500 duration-200 hoverLink flex items-center gap-2">Terms & Conditions</Link>
                            <div className="border-l border-white/20 h-4 w-[1px]"></div>
                            <Link href="https://www.imgglobalinfotech.com/disclaimer.php" className="w-auto opacity-80 hover:text-cyan-500 duration-200 hoverLink flex items-center gap-2">Disclaimer</Link>
                            <div className="border-l border-white/20 h-4 w-[1px]"></div>
                            <Link href="https://www.imgglobalinfotech.com/sitemap.html" className="w-auto opacity-80 hover:text-cyan-500 duration-200 hoverLink flex items-center gap-2">Sitemap</Link>
                        </div>
                    </div> */}
                </div>
            </footer>
        </>
    );
}
