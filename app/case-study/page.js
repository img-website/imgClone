import React from "react";
import Form from "@/components/contactForm/Form";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import Blog from "@/components/blog/Blog";



function casestudy() {
    return (
        <>
            <Header />

            {/* ----hero */}

            <div className="flex w-full relative bg-slate-50   lg:h-dvh lg:min-h-[650px]">
                <div className="size-full relative !z-10">
                    <div className="flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply  shadow-theme1 before:from-theme1/30 before:via-theme1/30 before:to-theme1/40">
                        <span className="absolute inset-0 bg-cover bg-right opacity-80 rounded-b-2xl bg-theme1/30"></span>

                        <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1920/1200]" width="1920" height="1200" src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?t=st=1726728736~exp=1726732336~hmac=7cfb31c0ed5e7793dad62d36c20919fd7a19cfecdd7d2d4c89a062e778f02433&w=740" loading="lazy" quality={90} sizes="100vw" alt="about img" />

                        <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-center">
                            <div className="xl:w-7/12 lg:w-1/2 grow-0 text-center">
                                <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                    <span className="font-bold text-gray-100 block pb-1 shadow-theme1 via-indigo-500 from-indigo-100 to-indigo-100 text-balance">
                                        Transforming Businesses Globally – Over 100 Success Stories and Growing </span>
                                </div>
                                <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 mx-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----hero-end */}

            {/* ---main-section-case-study */}
            <div className="relative py-6 md:py-8 lg:py-16  px-10 max-sm:px-4 lg:mt-10 mt-20" id="allCaseStudy">
                <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-theme1/60 bg-theme1 rounded-3xl *:relative *:z-10 relative">
                    <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                        <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                            <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                                <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                </div>
                                <div className="w-full">
                                    <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">Lorem Ipsum</div>
                                    <div className="w-full">
                                        <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem &amp; lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-sm md:text-base opacity-80 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae est nesciunt aperiam. Ullam dolore minima blanditiis tempora architecto rem</div>
                            <div className="flex gap-3 pt-5">
                                <a href="javascript:;" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                    <span>
                                        <span className="inline-flex items-center gap-1">
                                            <span>
                                                View All Screens
                                            </span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                        </span>
                                    </span>
                                </a>
                                <a href="javascript:;" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                    <span className="flex items-center gap-1">
                                        Contact Us
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                            <div className="flex gap-10 max-sm:gap-8 max-sm:justify-center">
                                <div className="xl:w-1/2 lg:w-2/3 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-red-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                    <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case7.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                                <div className="lg:w-1/2 h-full md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                                    <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case8.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-6 md:py-8 lg:py-16  px-10 max-sm:px-4 lg:mt-10 mt-20" id="allCaseStudy">
                <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-theme1/60 bg-theme1 rounded-3xl *:relative *:z-10 relative">
                    <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                        <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                            <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                                <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                </div>
                                <div className="w-full">
                                    <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">Lorem Ipsum</div>
                                    <div className="w-full">
                                        <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem &amp; lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-sm md:text-base opacity-80 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae est nesciunt aperiam. Ullam dolore minima blanditiis tempora architecto rem</div>
                            <div className="flex gap-3 pt-5">
                                <a href="javascript:;" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                    <span>
                                        <span className="inline-flex items-center gap-1">
                                            <span>
                                                View All Screens
                                            </span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                        </span>
                                    </span>
                                </a>
                                <a href="javascript:;" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                    <span className="flex items-center gap-1">
                                        Contact Us
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                            <div className="flex gap-10 max-sm:gap-8 max-sm:justify-center">
                                <div className="xl:w-1/2 lg:w-2/3 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-red-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                    <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case1.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                                <div className="lg:w-1/2 md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                                    <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case2.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative py-6 md:py-8 lg:py-16  px-10 max-sm:px-4 lg:mt-10 mt-20" id="allCaseStudy">
                <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-theme1/60 bg-theme1 rounded-3xl *:relative *:z-10 relative">
                    <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                        <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                            <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                                <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                </div>
                                <div className="w-full">
                                    <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">Lorem Ipsum</div>
                                    <div className="w-full">
                                        <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem &amp; lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-sm md:text-base opacity-80 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae est nesciunt aperiam. Ullam dolore minima blanditiis tempora architecto rem</div>
                            <div className="flex gap-3 pt-5">
                                <a href="javascript:;" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                    <span>
                                        <span className="inline-flex items-center gap-1">
                                            <span>
                                                View All Screens
                                            </span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                        </span>
                                    </span>
                                </a>
                                <a href="javascript:;" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                    <span className="flex items-center gap-1">
                                        Contact Us
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                            <div className="flex gap-10 max-sm:gap-8 max-sm:justify-center">
                                <div className="xl:w-1/2 lg:w-2/3 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-red-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                    <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case3.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                                <div className="lg:w-1/2 md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                                    <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case4.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative py-6 md:py-8 lg:py-16  px-10 max-sm:px-4 lg:mt-10 mt-20" id="allCaseStudy">
                <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-theme1/60 bg-theme1 rounded-3xl *:relative *:z-10 relative">
                    <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                        <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                            <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                                <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                </div>
                                <div className="w-full">
                                    <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">Lorem Ipsum</div>
                                    <div className="w-full">
                                        <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem &amp; lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-sm md:text-base opacity-80 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae est nesciunt aperiam. Ullam dolore minima blanditiis tempora architecto rem</div>
                            <div className="flex gap-3 pt-5">
                                <a href="javascript:;" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                    <span>
                                        <span className="inline-flex items-center gap-1">
                                            <span>
                                                View All Screens
                                            </span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                        </span>
                                    </span>
                                </a>
                                <a href="javascript:;" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                    <span className="flex items-center gap-1">
                                        Contact Us
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                            <div className="flex gap-10 max-sm:gap-8 max-sm:justify-center">
                                <div className="xl:w-1/2 lg:w-2/3 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-red-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                    <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case5.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                                <div className="lg:w-1/2 md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                                    <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case6.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative py-6 md:py-8 lg:py-16  px-10 max-sm:px-4 lg:mt-10 mt-20" id="allCaseStudy">
                <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-theme1/60 bg-theme1 rounded-3xl *:relative *:z-10 relative">
                    <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                        <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                            <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                                <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                </div>
                                <div className="w-full">
                                    <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">Lorem Ipsum</div>
                                    <div className="w-full">
                                        <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem &amp; lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                            <a href="javascript:;" className="">
                                                <svg className="  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                lorem ipsum
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-sm md:text-base opacity-80 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae est nesciunt aperiam. Ullam dolore minima blanditiis tempora architecto rem</div>
                            <div className="flex gap-3 pt-5">
                                <a href="javascript:;" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                    <span>
                                        <span className="inline-flex items-center gap-1">
                                            <span>
                                                View All Screens
                                            </span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                        </span>
                                    </span>
                                </a>
                                <a href="javascript:;" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                    <span className="flex items-center gap-1">
                                        Contact Us
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                            <div className="flex gap-10 max-sm:gap-8 max-sm:justify-center">
                                <div className="xl:w-1/2 lg:w-2/3 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-red-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                    <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case9.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                                <div className="lg:w-1/2 md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                                    <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case10.webp" loading="lazy" quality={90} sizes="100vw" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---main-section-case-study-end */}




            <Blog />
            <Form />
            <Footer />
        </>
    )
}

export default casestudy;
