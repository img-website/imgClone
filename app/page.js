"use client"
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
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
import Form from "@/components/contactForm/Form";


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
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                        <button className="px-4 text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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

                        last:*:font-bold last:*:text-theme2
                    ">
                                    <span className="font-normal">A Quick Insight Into </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2">Twin Power Software</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">Discover innovation and excellence at Twin Power Software! Immerse yourself in cutting-edge services and high-quality development solutions that redefine the digital landscape. Our dynamic work environment fosters creativity and collaboration to fuel groundbreaking ideas.</p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">At IMG, we pride ourselves on timely delivery, transforming visions into reality. From mobile app development to custom software solutions and dedicated developer hiring, we cater to businesses of all scales. Experience top-notch development, reasonable prices, and a partnership that exceeds expectations - at Twin Power Software, we make digital dreams come true.</p>

                                <div className="mt-8 flex gap-4">
                                    <button className="px-4 text-sm text-[white] bg-theme1 inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max hover:bg-theme1/80 duration-300">
                                        <span>Read More</span>
                                        <span>
                                            <svg className='w-5 h-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h9v2h-9zM13 15h9v2h-9zM16 11h6v2h-6zM13 12 8 7v4H2v2h6v4z"></path></svg>
                                        </span>
                                    </button>
                                    <button className="px-4 text-sm text-theme1 inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        <span>Come for coffee</span>
                                        <span>
                                            <svg className='w-5 h-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A.998.998 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22zm10.418-11H6.582l-.429-3h11.693l-.428 3zm-9.551 9-.429-3h9.123l-.429 3H7.867zM7.618 4h8.764l1 2H6.618l1-2z"></path></svg>
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
                            <span className="font-bold text-theme2"> For You?</span>
                        </p>
                        <div className="md:text-base text-sm text-black/70 mt-3 text-center">
                            Experience a journey of innovation with us, where every pixel, code, and concept converges to transform your dreams into reality. Unveil a spectrum of top-notch development services that empower your business vision to thrive in the boundless realm of possibilities.
                        </div>
                    </div>
                </div>
                <div className="container py-5 bg-white text-center mt-[-126px] !pb-0 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-black font-bold lg:text-2xl md:text-xl sm:text-lg text-base mt-3">Avail Exclusive Development Services In Just A Click!</div>
                    <div className="md:text-base text-sm text-black/70 mt-3">
                        Discover your way to unparalleled growth and creativity while choosing IMG Global Inftechs growth-driven development services. Seamlessly transform your business ideas into reality with just a click, because innovation starts here.
                    </div>
                </div>
            <div className="bg-theme1 py-12 ">
                <div className="max-w-7xl px-6 lg:px-8 mx-auto ">
                    <div className="grid grid-cols-12 ">
                        <div className="md:col-span-3 max-md:flex max-md:overflow-hidden max-md:overflow-x-auto col-span-12  py-10">
                            <Link onClick={() => { setServices('Treanding Solution') }} href='/' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-theme1 md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Treanding Solution" ? "bg-white !text-theme1":""}`}>Treanding Solution</Link>
                            <Link onClick={() => { setServices('Mobile App Development') }} href='/' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-theme1 md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Mobile App Development" ? "bg-white !text-theme1":""}`}>Mobile App Development</Link>
                            <Link onClick={() => { setServices('Web Development') }} href='/' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-theme1 md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Web Development" ? "bg-white !text-theme1":""}`}>Web Development</Link>
                            <Link onClick={() => { setServices('eCommerce Solution') }} href='/' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-theme1 md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "eCommerce Solution" ? "bg-white !text-theme1":""}`}>eCommerce Solution</Link>
                            <Link onClick={() => { setServices('Software Development') }} href='/' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-theme1 md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Software Development" ? "bg-white !text-theme1":""}`}>Software Development</Link>
                            <Link onClick={() => { setServices('Blockchain Development') }} href='/' className={`text-nowrap text-sm font-semibold md:text-xl max-md:bg-white  md:bg-transprent max-md:text-theme1 md:text-white mx-2 mb-6 p-4 rounded-xl inline-block ${services === "Blockchain Development" ? "bg-white !text-theme1":""}`}>Blockchain Development</Link></div>
                        <div className="md:col-span-9 col-span-12 bg-[white] p-2 rounded-xl">
                            {
                                services === "Treanding Solution" &&
                                <div className="p-4">
                                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight">
                                        <span className="font-normal">Trending </span>
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-theme2"> Solutions</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Explore our trending ready-to-use applications, meticulously crafted to elevate your business instantly. From cutting-edge food delivery apps to innovative elearning platforms, our trending solutions are designed to streamline operations.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="/">Video Streaming App</Link>
                                            <Link href="/">Social Media App</Link>
                                            <Link href="/">Event Management App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/elearning-app-development.php">Elearning App</Link>
                                            <Link href="/">Travel App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/doctor-on-demand-app-development.php">Doctor on Demand App</Link>
                                            <Link href="/">Healthacare App</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
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
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-theme2"> Development</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Step into the future of digital interaction with our top-notch mobile app development services. Your ideas are the fuel, and we are the creators, transforming concepts into powerful mobile solutions that captivate users and elevate your digital footprint.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="/">Video Streaming App</Link>
                                            <Link href="/">Social Media App</Link>
                                            <Link href="/">Event Management App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/elearning-app-development.php">Elearning App</Link>
                                            <Link href="/">Travel App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
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
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-theme2"> Development</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  "> Step into the future of digital interaction with our top-notch mobile app development services. Your ideas are the fuel, and we are the creators, transforming concepts into powerful mobile solutions that captivate users and elevate your digital footprint.

                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            
                                            <Link href="/">Social Media App</Link>
                                            <Link href="/">Event Management App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/elearning-app-development.php">Elearning App</Link>
                                            <Link href="/">Travel App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
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
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-theme2"> Solutions</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Explore our trending ready-to-use applications, meticulously crafted to elevate your business instantly. From cutting-edge food delivery apps to innovative elearning platforms, our trending solutions are designed to streamline operations.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="/">Video Streaming App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/doctor-on-demand-app-development.php">Doctor on Demand App</Link>
                                            <Link href="/">Healthacare App</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
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
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-theme2"> Development </span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Explore our trending ready-to-use applications, meticulously crafted to elevate your business instantly. From cutting-edge food delivery apps to innovative elearning platforms, our trending solutions are designed to streamline operations.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                        <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/doctor-on-demand-app-development.php">Doctor on Demand App</Link>
                                            <Link href="/">Healthacare App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="/">Video Streaming App</Link>
                                            <Link href="/">Social Media App</Link>
                                            
                                            
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
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
                                        <span className="font-bold bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-theme2">  Development</span>
                                    </p>
                                    <div className="md:text-base text-sm mt-3 mb-lg-1 md:font-semibold  ">  Explore our trending ready-to-use applications, meticulously crafted to elevate your business instantly. From cutting-edge food delivery apps to innovative elearning platforms, our trending solutions are designed to streamline operations.
                                    </div>
                                    <div className="py-10   *:flex *:flex-wrap *:gap-3 *:md:font-semibold *:text-[12px] *:md:text-sm *:*:inline-block *:*:backdrop-blur-lg *:*:shadow-sm *:*:p-2 *:*:md:p-3 ">
                                        <div>
                                            <Link href="https://www.imgglobalinfotech.com/food-delivery-app-development.php">Food Delivery App Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/grocery-app-development.php">Grocery Delivery</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php">Fantasy sports App</Link>
                                            <Link href="/">Video Streaming App</Link>
                                            <Link href="/">Social Media App</Link>
                                            <Link href="/">Event Management App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/elearning-app-development.php">Elearning App</Link>
                                            <Link href="/">Travel App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/pharmacy-app-development.php">Medicine App</Link>
                                            <Link href="https://www.imgglobalinfotech.com/fashion-ecommerce-development.php">Fashion Development</Link>
                                            <Link href="https://www.imgglobalinfotech.com/doctor-on-demand-app-development.php">Doctor on Demand App</Link>
                                            <Link href="/">Healthacare App</Link>
                                        </div>
                                        <div className="sm:text-lg text-base font-bold 0 mt-10">Core Tech:</div>
                                        <div className="flex items-center flex-wrap overflow-hidden mt-5 gap-8  *:w-auto *:text-center *:gap-2 *:*:text-center">
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Node.Js</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Angular JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">React JS</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">Java</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>
                                                </div>
                                                <div className="sm:text-base text-sm font-semibold mt-1">PHP</div>
                                            </div>
                                            <div>
                                                <div className="md:size-10 size-8 mx-auto">
                                                    <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>
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
                        <span className="font-bold text-theme2"> Glimpse of Our Case Studies</span>
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
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                <div className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight text-white font-normal text-center empty:hidden">            Lets turn your <span className="font-bold bg-gradient-to-r from-gray-100 via-theme2 to-gray-100 bg-clip-text text-white">business idea into reality</span>
                                </div>
                                <p className="mt-6 text-base md:text-lg md:leading-8 text-gray-300 text-center empty:hidden">            Do you want to experience the best-in-class quality mobile apps? Send us your inquiry and one of our executives will catch you up in no time by Call, Email or Skype.
                                </p>
                                <div className="md:mt-10 mt-5 flex items-center justify-center gap-x-6 empty:hidden">
                                <button className="px-4 text-sm text-[white] bg-theme1 inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max hover:bg-theme1/80 duration-300">
                                        <span>Schedule a consultation</span>
                                        <span>
                                        <svg className="size-5" stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 13.72a3.158 3.158 0 0 0-3.462.124.632.632 0 0 1-.682.035l-3.137-1.81a.08.08 0 0 1 0-.137l3.12-1.8a.632.632 0 0 1 .685.036 3.158 3.158 0 0 0 3.47.139A3.194 3.194 0 0 0 22.442 6.1a3.158 3.158 0 0 0-5.924 1.773.633.633 0 0 1-.311.606l-3.136 1.811a.08.08 0 0 1-.118-.068V6.6a.632.632 0 0 1 .372-.573 3.158 3.158 0 1 0-2.64 0 .632.632 0 0 1 .373.573v3.622a.08.08 0 0 1-.119.068L7.804 8.48a.632.632 0 0 1-.311-.605 3.157 3.157 0 1 0-1.307 2.294.633.633 0 0 1 .687-.038l3.12 1.8a.08.08 0 0 1 0 .137L6.854 13.88a.632.632 0 0 1-.683-.035 3.158 3.158 0 0 0-3.461-.124 3.194 3.194 0 0 0-1.143 4.202 3.159 3.159 0 0 0 5.924-1.792.633.633 0 0 1 .31-.61l3.137-1.81a.08.08 0 0 1 .119.068V17.4a.632.632 0 0 1-.372.573 3.158 3.158 0 1 0 2.64 0 .633.633 0 0 1-.373-.573v-3.621a.08.08 0 0 1 .118-.069l3.137 1.812a.631.631 0 0 1 .31.609 3.159 3.159 0 0 0 5.924 1.792A3.194 3.194 0 0 0 21.3 13.72Z"></path></svg>
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
                        <span className="font-bold text-theme2"> Industries Across the Board!
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
                                            <span className="absolute inset-0 z-30 flex items-center justify-center *:size-16 *:rounded-full last:*:bg-white *:text-theme2 last:*:shadow-lg last:*:shadow-theme2 last:*:relative last:*:z-30 first:*:z-20 first:*:absolute first:*:inset-0 first:*:m-auto first:*:animate-ping">
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
            <Form/>
            
            <PortfolioSection/>
           <Footer/>
        </>
    );
}
