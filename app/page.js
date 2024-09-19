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
import Services from "@/components/services/Services";
import Cta from "@/components/cta/Cta";
import Gallery from "@/components/gallery/Gallery";


export default function Home() {
    const [services, setServices] = useState('Treanding Solution');
    return (
        <>
            <Header />
            {/* <LogoSlider/> */}
            {/* hero start */}
            <div className="flex w-full h-full bg-[] overflow-hidden relative">
                <Swiper className="swiper heroSwiper md:min-h-[600px] h-[500px] md:h-[calc(100dvh-80px)] lg:h-[calc(100dvh-128px)] w-full relative !z-10 max-h-[750px] [&_.swiper-button-prev]:max-lg:!hidden [&_.swiper-button-prev]:!top-[calc(100%-50%)] [&_.swiper-button-prev]:!right-auto [&_.swiper-button-prev]:!left-8 [&_.swiper-button-prev]:!bottom-8 [&_.swiper-button-prev]:!w-10 [&_.swiper-button-prev]:!h-10 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:flex [&_.swiper-button-prev]:items-center [&_.swiper-button-prev]:justify-center [&_.swiper-button-prev]:p-0 after:[&_.swiper-button-prev]:content-['prev'] after:[&_.swiper-button-prev]:text-lg after:[&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:duration-200 [&_.swiper-button-prev]:opacity-80 hover:[&_.swiper-button-prev]:opacity-100 [&_.swiper-button-prev]:bg-black
    
    [&_.swiper-button-next]:max-lg:!hidden [&_.swiper-button-next]:!top-[calc(100%-50%)] [&_.swiper-button-next]:!left-auto [&_.swiper-button-next]:!right-8 [&_.swiper-button-next]:!w-10 [&_.swiper-button-next]:!h-10 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:flex [&_.swiper-button-next]:items-center [&_.swiper-button-next]:justify-center [&_.swiper-button-next]:p-0 after:[&_.swiper-button-next]:content-['next'] after:[&_.swiper-button-next]:text-lg after:[&_.swiper-button-next]:text-white [&_.swiper-button-next]:duration-200 [&_.swiper-button-next]:opacity-80 hover:[&_.swiper-button-next]:opacity-100 [&_.swiper-button-next]:bg-black
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
                                    width="1920"
                                    height="460"
                                    quality="90"
                                    src="https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders"
                                />
                                <div className="relative p-10 flex flex-col my-auto h-full justify-center items-center overflow-hidden duration-150 z-10">
                                    <div className="duration-300 text-center font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-5xl/tight">
                                        <span className="block">Experience Custom App </span>
                                        <span className="font-bold text-white block">Development and Product Innovation with Us!</span>
                                    </div>
                                    <div className="max-md:text-sm/tight text-base/tight text-white/80 pt-5 block text-center max-w-5xl text-balance">Embark on a digital adventure with Twin Power and open the door to custom applications and innovative product breakthroughs. Discover the next generation of technology right at your fingertips!</div>
                                    <div className="mt-10 flex gap-4">
                                        <button className="px-4 text-sm text-white flex items-center gap-2 rounded-full before:rounded-full font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                    width="1920"
                                    height="460"
                                    quality="90"
                                    src="https://images.pexels.com/photos/5324921/pexels-photo-5324921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders"
                                />
                                <div className="relative p-10 flex flex-col my-auto h-full justify-center items-center overflow-hidden duration-150 z-10">
                                    <div className="duration-300 text-center font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-5xl/tight">
                                        <span className="block">Gain Entry to Custom Apps </span>
                                        <span className="font-bold text-white block">and Innovative Product Solutions with Us!</span>
                                    </div>
                                    <div className="max-md:text-sm/tight text-base/tight text-white/80 pt-5 block text-center max-w-5xl text-balance">Step into a digital journey with Twin Power and unlock the gateway to bespoke applications and groundbreaking product innovations. Experience the future of technology at your fingertips!</div>
                                    <div className="mt-10 flex gap-4">
                                        <button className="px-4 text-sm text-white flex items-center gap-2 rounded-full before:rounded-full font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                                    width="1920"
                                    height="460"
                                    quality="90"
                                    src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders"
                                />
                                <div className="relative p-10 flex flex-col my-auto h-full justify-center items-center overflow-hidden duration-150 z-10">
                                    <div className="duration-300 text-center font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-5xl/tight">
                                        <span className="block">Access Tailored Apps and Cutting-Edge </span>
                                        <span className="font-bold text-white block">Product Innovation with Us!</span>
                                    </div>
                                    <div className="max-md:text-sm/tight text-base/tight text-white/80 pt-5 block text-center max-w-5xl text-balance">Begin a digital adventure with Twin Power and open the doors to custom applications and revolutionary product innovations. Embrace the future of technology in your hands!</div>
                                    <div className="mt-10 flex gap-4">
                                        <button className="px-4 text-sm text-white flex items-center gap-2 rounded-full before:rounded-full font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
            {/* hero Ends */}


            <Services/>
            

            {/* About Start */}
            <div className="">
                <div className="relative bg-slate-50 py-6 md:py-8 lg:py-16 overflow-hidden ">
                    <div className="mx-auto max-w-7xl flex px-6 lg:px-8 w-full">
                        <div className="absolute order-2 inset-0 size-full pointer-events-none overflow-hidden">
                            {/* <div className="absolute inset-0 hidden w-full min-w-[1360px] bg-[url('https://www.imgglobalinfotech.com/public/tailwind/css/build/assets/beams1-c3cd2070.webp')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block pointer-events-none"></div> */}
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
                                        {/* <div className="z-0">
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-20 order-1 mx-auto lg:mx-0 lg:pr-4 md:py-6 md:md:py-8 h-auto md:sticky md:top-24 self-start shrink-1 grow-0 basis-auto w-full">
                                <p className="
                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                        first:*:font-normal

                        last:*:font-bold last:*:text-theme2
                    ">
                                    <span className="font-normal">An Inside Look at  </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2">Twin Power Software</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                    Explore the future of innovation and excellence with Twin Power Software! We offer cutting-edge services and high-quality development solutions that reshape the digital landscape. Our collaborative and dynamic work environment inspires creativity, driving forward groundbreaking ideas that push the boundaries of technology.
                                    </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                At Twin Power, we take pride in delivering projects on time and turning visions into reality. Whether it's mobile app development, custom software solutions, or hiring dedicated developers, we cater to businesses of all sizes. With competitive pricing and a commitment to exceeding expectations, Twin Power Software brings your digital dreams to life.
                                    </p>

                                <div className="mt-8 flex gap-4">
                                    <button className="px-4 text-sm text-[white] bg-theme1 rounded-full inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max hover:bg-theme1/80 duration-300">
                                        <span>Read More</span>
                                        <span>
                                            <svg className='w-5 h-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h9v2h-9zM13 15h9v2h-9zM16 11h6v2h-6zM13 12 8 7v4H2v2h6v4z"></path></svg>
                                        </span>
                                    </button>
                                    {/* <button className="px-4 text-sm text-theme1 inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        <span>Come for coffee</span>
                                        <span>
                                            <svg className='w-5 h-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A.998.998 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22zm10.418-11H6.582l-.429-3h11.693l-.428 3zm-9.551 9-.429-3h9.123l-.429 3H7.867zM7.618 4h8.764l1 2H6.618l1-2z"></path></svg>
                                        </span>
                                    </button> */}

                                </div>
                            </div>
                        </div>
                        {/* <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div> */}
                    </div>
                </div>
            </div>
            {/* About Ends */}



          {/* case study */}
            <section className="container mx-auto py-8 sm:py-16 relative bg-white [critical:this]">
                <div className="flex flex-col w-full max-w-7xl mx-auto pb-8 px-6 lg:px-8 text-center">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                        <span>Client Success Stories - </span>
                        <span className="font-bold text-theme2"> A Preview of Our Case Studies</span>
                    </p>
                    <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">
                    Dive into our client success stories and see how transformative journeys lead to success. Each case study highlights our impactful solutions, demonstrating innovation, dedication, and measurable outcomes.
                        </div>
                </div>
                <ul className="flex relative flex-col gap-y-8 lg:gap-y-64 flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100 overflow-hidden relative rounded-[20px]">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full gap-14 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] lg:w-[35rem] lg:h-[25rem] h-auto max-sm:mx-auto" width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/kunji-port.png" alt="TractorJunction" />
                                    </div>
                                    <div className="grow max-sm:w-full text-white flex ms-auto flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-base lg:text-lg font-semibold inline-block">Roccabox</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">
                                        Kunji is a finance platform to help people who want to invest in crypto.
                                        </div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100 rounded-[20px] overflow-hidden relative">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-base lg:text-lg font-semibold inline-block">The Lien Zone</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Build for a client in Florida, USA, The Lien Zone contains all the information about the holidays in Florida</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/coversure-port.png" alt="TractorJunction" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100 rounded-[20px] overflow-hidden relative">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full gap-14 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">

                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] object-contain lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/getsupp-port.png" />
                                    </div>
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-lg font-semibold inline-block">About Aavas Financiers</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">The success of Aavas is counted from zero to millions of satisfied customers across the country.</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100 rounded-[20px] overflow-hidden relative">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-lg font-semibold inline-block">About Klassbook</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">The Klassbook consists of hand-picked and best features to lead the educational transformation to meet the needs of present and future generations.</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/biocule-port.png" alt="MyFab11" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100 rounded-[20px] overflow-hidden relative">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full gap-14 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">

                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] lg:size-[25rem] object-contain h-auto max-sm:mx-auto" width="640" height="640" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/caratlane-port.png" alt="Fabindia" />
                                    </div>
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-lg font-semibold inline-block">About Laiqa</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Shop for Handwoven Garments & home fusnishings</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew Case Study
                                        
                                    </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100   overflow-hidden relative before:absolute before:inset-6 before:border-4 before:border-white  before: before:z-10">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
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
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
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
                    </li> */}
                </ul>
            </section>
          {/* case study */}

            <Gallery/>


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
                                            <Image className="aspect-video object-cover h-auto w-full z-0 duration-[3000ms] " width="256" height="320" src="https://www.imgglobalinfotech.com/public/tailwind/img/reviewLachlanJames-640w.webp?id=5bbafb05dac28bdcb2837a17fefa6f63" alt="Youtube Review" />
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
            <PortfolioSection/>
            <Cta/>
            <Form/>
            <Footer/>
        </>
    );
}
