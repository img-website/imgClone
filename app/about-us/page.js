import React from 'react'
import Header from "@/components/header/Header";
import Image from "next/image";
import Reward from '@/components/reward/Reward';
import Cta from '@/components/cta/Cta';
import Footer from '@/components/footer/Footer';



function about() {
    return (
        <>
            <Header />
            {/* hero */}
            <div className="flex w-full relative bg-slate-50  lg:h-dvh lg:min-h-[650px]">
                <div className="size-full relative !z-10">
                    <div className="flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply  shadow-theme1 before:from-theme1/30 before:via-theme1/30 before:to-theme1/40">
                        <span className="absolute inset-0 bg-cover bg-right opacity-80 rounded-b-2xl bg-theme1/30"></span>

                        <Image width={1000} height={1000} quality={90} loading='lazy' className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1920/1200]" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" sizes="100vw" alt="about img" />

                        <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-center">
                            <div className="xl:w-7/12 lg:w-1/2 grow-0 text-center">
                                <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                    <span className="font-bold text-gray-100 block pb-1 shadow-theme1 via-theme1 from-lime-100 to-lime-100 text-balance">Transforming Businesses with Innovative Web and Mobile Applications</span>
                                </div>
                                <p className='max-lg:text-sm text-base text-white text-pretty w-10/12 mx-auto'>
                                    A top-tier mobile app development company, backed by a team of seasoned professionals, delivering exceptional business solutions worldwide.
                                </p>
                                <div className="max-lg:text-sm text-base text-white/80  text-pretty w-10/12 mx-auto"></div>

                                {/* <div className="w-full flex flex-wrap items-center justify-center lg:gap-4 py-8">
    <div target="_blank" title="Facebook" href="https://www.facebook.com/imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-[20px] lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-blue-900 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-blue-900 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
    </div>
    <div target="_blank" title="Twitter" href="https://twitter.com/imgglobal" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-[20px] lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-lime-400 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-lime-400 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
    </div>
    <div target="_blank" title="Instagram" href="https://www.instagram.com/imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-[20px] lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-theme1 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-theme1 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
    </div>
    <div target="_blank" title="Youtube" href="https://www.youtube.com/@imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-[20px] lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-red-700 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-red-700 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
    </div>
    <div target="_blank" title="Linkedin" href="https://www.linkedin.com/company/imgglobalinfotechpltd" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-[20px] lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-sky-700 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-sky-700 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg>
    </div>
</div> */}
                                <div className="mt-10 flex gap-4 justify-center">
                                    <div href="javascript:;" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-theme1 text-white hover:bg-theme1/90">
                                        <span>
                                            <span className="inline-flex items-center gap-1">
                                                <span>
                                                    Claim Free Consultation
                                                </span>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                            </span>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero */}

            {/* our value */}

            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                <p className="max-md:text-2xl/tight pt-16 text-center max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                    <span>Transparency, Dedication,  </span>
                    <span className="font-bold text-theme2"> and Impact</span>
                </p>
                <div className="grid grid-cols-3 gap-4 py-6">
                    <div className="max-w-sm hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                        <svg className='size-10 bg-theme1 p-2 rounded-sm mb-2 text-white' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"></path></svg>
                        <div href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Ensuring Innovations that Matter</h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">A steadfast commitment to achieving maximum customer satisfaction, driven by integrity and passion.</p>

                    </div>
                    <div className="max-w-sm hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className='size-10 bg-theme1 p-1 rounded-sm mb-2 text-white' stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96ZM188,167l-56,32a8,8,0,0,1-7.94,0L68,167A8,8,0,0,1,64,160V96a8,8,0,0,1,4-7l56-32a8,8,0,0,1,7.94,0l56,32a8,8,0,0,1,4,7v64A8,8,0,0,1,188,167ZM88.12,96,128,118.79,167.88,96,128,73.21ZM80,155.36l40,22.85V132.64L80,109.79Zm96,0V109.79l-40,22.85v45.57Z"></path></svg>
                        <div href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Commit to Self-Improvement</h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Interactive workshops, mentorship, and community gatherings to enhance personal growth.</p>

                    </div>
                    <div className="max-w-sm hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className='size-10 bg-theme1 p-1 rounded-sm mb-2 text-white' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M404.5 162.5c-26.1 0-47 20.9-47 47s20.9 47 47 47 47-20.9 47-47-20.9-47-47-47zm72.2 89.1l-447.99 176 6.58 16.8 448.01-176-6.6-16.8zM121.2 287l-87.28 35 29 72.4 87.28-35-29-72.4zM256 383l-78 104h156l-78-104z"></path></svg>
                        <div href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Achieve Balanced Work-Life Integration</h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Up-to-date infrastructure, flexible working hours, and other benefits designed for a healthy lifestyle.    </p>

                    </div>
                </div>
            </div>
            
            {/* our value */}

            <Reward />

            <Cta />

            {/* workflow */}
            <section className=" pb-8 py-6 md:py-8 lg:py-16 overflow-hidden">
                <div className="flex flex-wrap w-full max-w-7xl mx-auto px-6 lg:px-8 max-lg:gap-y-8">
                    <div className="w-full lg:pl-8">
                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance text-center">
                            <span>Our</span>
                            <span className="font-bold text-theme2"> Procedure</span>
                        </p>
                        <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 text-center"> A structured team, empowered by vast experience and state-of-the-art infrastructure.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap w-full px-6 lg:px-8 max-lg:gap-y-8">
                    <div className="w-full pt-8">
                        <div className="flex max-md:flex-col overflow-x-auto py-16 px-8 -my-10">
                            <div className="
                    relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-theme1 duration-300
                    
                    md:before:rounded-b-[50px] max-md:before:rounded-l-[50px] before:absolute before:inset-0 md:before:top-1/4 before:z-10 md:before:border-l-4 md:before:border-b-4 max-md:before:right-1/4 max-md:before:border-l-4 max-md:before:border-t-4 before:border-theme1
                    
                    md:after:rounded-b-[50px] max-md:after:rounded-l-[50px] after:absolute after:inset-0 md:after:top-1/2 after:z-10 md:after:border-r-4 md:after:border-b-4 max-md:after:right-1/2 max-md:after:border-l-4 max-md:after:border-b-4 after:border-theme1
                    ">
                                <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                        
                        before:absolute md:before:left-[1.5px] md:before:top-1/4 md:before:-translate-x-1/2 md:before:-translate-y-full max-md:before:top-[1.5px] max-md:before:right-1/4 max-md:before:-translate-y-1/2 max-md:before:translate-x-full before:z-20 before:text-theme1 before:bg-white before:content-['Start'] md:before:font-extrabold max-md:before:font-semibold md:before:text-sm max-md:before:text-xs before:uppercase before:rounded-full md:before:ring-4 max-md:before:ring-2 before:ring-theme1 before:ring-offset-4 md:before:[writing-mode:tb]
                        
                        after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:m-auto md:after:translate-x-[calc(50%-2px)] md:after:-translate-y-[calc(50%-2px)] max-md:after:bottom-[1.5px] max-md:after:right-1/2 max-md:after:translate-x-1/2 max-md:after:translate-y-1/2 after:z-20 after:size-4 after:ring-4 after:ring-theme1 after:bg-white
                        ">
                                    <div className="w-full pb-3">
                                        <Image width={1000} height={1000} quality={90} loading='lazy' className="size-20 mx-auto" src="/img/workflow-1.svg" alt="design process research" />
                                    </div>
                                    <div className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Research</div>
                                    <div className="w-full md:text-base text-sm font-semibold pb-3">We begin by conducting thorough research to understand your target audience, market trends, and competition, ensuring the development of outstanding software.</div>
                                </div>
                            </div>
                            <div className="
                    relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-theme2 duration-300
                    
                    md:before:rounded-t-[50px] max-md:before:rounded-r-[50px] before:absolute before:inset-0 md:before:bottom-1/2 max-md:before:left-1/2 before:z-10 md:before:border-l-4 md:before:border-t-4 max-md:before:border-b-4 max-md:before:border-r-4 before:border-theme2
                    
                    md:after:rounded-t-[50px] max-md:after:rounded-r-[50px] after:absolute after:inset-0 md:after:bottom-1/2 max-md:after:left-1/2 after:z-10 md:after:border-r-4 md:after:border-t-4 max-md:after:border-r-4 max-md:after:border-t-4 after:border-theme2
                    ">
                                <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                        
                        before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:right-1/2 max-md:before:-translate-y-1/2 max-md:before:translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-theme2 before:bg-white
                        
                        after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:my-auto md:after:translate-x-[calc(50%-2px)] md:after:translate-y-[calc(-50%+2px)] max-md:after:bottom-[1.5px] max-md:after:left-1/2 max-md:after:translate-y-1/2 max-md:after:-translate-x-1/2 after:z-20 after:size-4 after:ring-4 after:ring-theme2 after:bg-white
                        ">
                                    <div className="w-full pb-3">
                                        <Image width={1000} height={1000} quality={90} loading='lazy' className="size-20 mx-auto" src="/img/workflow-2.svg" alt="design process plan" />
                                    </div>
                                    <div className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Plan</div>
                                    <div className="w-full md:text-base text-sm font-semibold pb-3">Based on the research findings, we collaborate with you to define the app’s goals, features, and functionalities, ensuring the creation of outstanding software.</div>
                                </div>
                            </div>
                            <div className="
                    relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-theme1 duration-300
                    
                    md:before:rounded-b-[50px] max-md:before:rounded-l-[50px] before:absolute before:inset-0 md:before:top-1/2 max-md:before:right-1/2 before:z-10 md:before:border-l-4 md:before:border-b-4 max-md:before:border-l-4 max-md:before:border-b-4 before:border-theme1
                    
                    md:after:rounded-b-[50px] max-md:after:rounded-l-[50px] after:absolute after:inset-0 md:after:top-1/2 max-md:after:right-1/2 after:z-10 md:after:border-r-4 md:after:border-b-4 max-md:after:border-l-4 max-md:after:border-t-4 after:border-theme1
                    ">
                                <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                        
                        before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:left-1/2 max-md:before:-translate-y-1/2 max-md:before:-translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-theme1 before:bg-white
                        
                        after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:my-auto md:after:translate-x-[calc(50%-2px)] md:after:translate-y-[calc(-50%+2px)] max-md:after:bottom-[1.5px] max-md:after:left-1/2 max-md:after:translate-y-1/2 max-md:after:-translate-x-1/2 after:z-20 after:size-4 after:ring-4 after:ring-theme1 after:bg-white
                        ">
                                    <div className="w-full pb-3">
                                        <Image width={1000} height={1000} quality={90} loading='lazy' className="size-20 mx-auto" src="/img/workflow-3.svg" data-src="" alt="design process implement" />
                                    </div>
                                    <div className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Implement</div>
                                    <div className="w-full md:text-base text-sm font-semibold pb-3">Our skilled development team starts the implementation phase, building the app’s architecture, database, and backend infrastructure.

                                    </div>
                                </div>
                            </div>
                            <div className="
                    relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-theme2 duration-300
                    
                    md:before:rounded-t-[50px] max-md:before:rounded-r-[50px] before:absolute before:inset-0 md:before:bottom-1/2 max-md:before:left-1/2 before:z-10 md:before:border-l-4 md:before:border-t-4 max-md:before:border-r-4 max-md:before:border-t-4 before:border-theme2
                    
                    md:after:rounded-t-[50px] max-md:after:rounded-r-[50px] after:absolute after:inset-0 md:after:bottom-1/2 max-md:after:left-1/2 after:z-10 md:after:border-r-4 md:after:border-t-4 max-md:after:border-r-4 max-md:after:border-b-4 after:border-theme2
                    ">
                                <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                        
                        before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:left-1/2 max-md:before:-translate-y-1/2 max-md:before:-translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-theme2 before:bg-white
                        
                        after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:my-auto md:after:translate-x-[calc(50%-2px)] md:after:translate-y-[calc(-50%+2px)] max-md:after:bottom-[1.5px] max-md:after:left-1/2 max-md:after:translate-y-1/2 max-md:after:-translate-x-1/2 after:z-20 after:size-4 after:ring-4 after:ring-theme2 after:bg-white
                        ">
                                    <div className="w-full pb-3">
                                        <Image width={1000} height={1000} quality={90} loading='lazy' className="size-20 mx-auto" src="img/workflow-4.svg" data-src="" alt="design process testing" />
                                    </div>
                                    <div className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Testing</div>
                                    <div className="w-full md:text-base text-sm font-semibold pb-3">Quality assurance is a critical step in our process. We perform comprehensive tests, including functional, usability, and performance testing.

                                    </div>
                                </div>
                            </div>
                            <div className="
                    relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-theme1 duration-300
                    
                    md:before:rounded-b-[50px] max-md:before:rounded-l-[50px] before:absolute before:inset-0 md:before:top-1/2 max-md:before:right-1/2 before:z-10 md:before:border-l-4 md:before:border-b-4 max-md:before:border-l-4 max-md:before:border-t-4 before:border-theme1
                    
                    md:after:rounded-b-[50px] max-md:after:rounded-l-[50px] after:absolute after:inset-0 md:after:top-1/4 max-md:after:right-1/4 after:z-10 md:after:border-r-4 md:after:border-b-4 max-md:after:border-l-4 max-md:after:border-b-4 after:border-theme1
                    ">
                                <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                        
                        before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:right-1/2 max-md:before:-translate-y-1/2 max-md:before:translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-theme1 before:bg-white
                        
                        after:absolute md:after:right-[1.5px] md:after:top-1/4 md:after:translate-x-1/2 md:after:-translate-y-full max-md:after:bottom-[1.5px] max-md:after:right-1/4 max-md:after:translate-y-1/2 max-md:after:translate-x-full after:z-20 after:text-theme1 after:bg-white after:content-['End'] md:after:font-extrabold max-md:after:font-semibold md:after:text-sm max-md:after:text-xs after:uppercase after:rounded-full md:after:ring-4 max-md:after:ring-2 after:ring-theme1 after:ring-offset-4 md:after:[writing-mode:tb]
                        ">
                                    <div className="w-full pb-3">
                                        <Image width={1000} height={1000} quality={90} loading='lazy' className="size-20 mx-auto" src="/img/workflow-5.svg" data-src="" alt="design process Optimize" />
                                    </div>
                                    <div className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Optimize</div>
                                    <div className="w-full md:text-base text-sm font-semibold pb-3">We continually optimize the app to enhance its performance, speed, and user experience, ensuring outstanding software.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* workflow */}
            <Footer />

        </>
    )
}

export default about