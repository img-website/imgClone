import React from 'react'
import Header from "@/components/header/Header";
import Image from "next/image";
import Reward from '@/components/reward/Reward';
import Cta from '@/components/cta/Cta';
import Footer from '@/components/footer/Footer';
import Blog from '@/components/blog/Blog';
import Form from '@/components/contactForm/Form';



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
                <p className="max-md:text-2xl/tight pt-16 text-center max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white empty:hidden text-balance">
                    <span>Transparency, Dedication,  </span>
                    <span className="font-bold text-theme2"> and Impact</span>
                </p>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-4 py-6">
                    <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                        <svg className='size-10 bg-theme1 p-2 rounded-sm mb-2 text-white' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"></path></svg>
                        <div href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Ensuring Innovations that Matter</h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">A steadfast commitment to achieving maximum customer satisfaction, driven by integrity and passion.</p>

                    </div>
                    <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className='size-10 bg-theme1 p-1 rounded-sm mb-2 text-white' stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96ZM188,167l-56,32a8,8,0,0,1-7.94,0L68,167A8,8,0,0,1,64,160V96a8,8,0,0,1,4-7l56-32a8,8,0,0,1,7.94,0l56,32a8,8,0,0,1,4,7v64A8,8,0,0,1,188,167ZM88.12,96,128,118.79,167.88,96,128,73.21ZM80,155.36l40,22.85V132.64L80,109.79Zm96,0V109.79l-40,22.85v45.57Z"></path></svg>
                        <div href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Commit to Self-Improvement</h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Interactive workshops, mentorship, and community gatherings to enhance personal growth.</p>

                    </div>
                    <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

            <Blog/>

            <Form/>

            <Footer />

        </>
    )
}

export default about