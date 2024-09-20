import React from 'react'
import Image from "next/image";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Reward from '@/components/reward/Reward';
import ClientVideo from '@/components/clientVideo/ClientVideo';
import Testimonial from '@/components/testimonial/testimonial';


function testimonial() {
    return (
        <>
            <Header />
            {/* hero section start */}
            <div className="flex w-full relative bg-slate-50 lg:h-dvh lg:min-h-[650px]">
                <div className="size-full relative !z-10">
                    <div className="flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply  shadow-theme1 before:from-theme1/30 before:via-theme1/30 before:to-theme1/40">
                        <span className="absolute inset-0 bg-cover bg-right opacity-80 rounded-b-2xl bg-theme1/30"></span>

                        <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1920/1200]" width="1920" height="1200" src="https://images.pexels.com/photos/8190804/pexels-photo-8190804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" sizes="100vw" alt="about img" />

                        <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-center">
                            <div className="xl:w-7/12 lg:w-1/2 grow-0 text-center">
                                <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                    <span className="font-bold text-gray-100 block pb-1 shadow-theme1 via-indigo-500 from-indigo-100 to-indigo-100 text-balance">Client Testimonials and Success Stories</span>
                                </div>
                                <p className='max-lg:text-sm text-base text-white text-pretty w-10/12 mx-auto'>
                                    Our international clients are a crucial part of our journey. We take great pride in providing outstanding service and ensuring client loyalty. Whether your project is large or small, we guarantee full commitment to meet and exceed your expectations. Here’s what our clients share about their experience with Twin Power Software.
                                </p>
                                <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 mx-auto"></div>

                                <div className="mt-10 flex gap-4 justify-center">
                                    <a href="javascript:;" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-theme1 text-white hover:bg-theme1/90">
                                        <span>
                                            <span className="inline-flex items-center gap-1">
                                                <span>
                                                    Claim Free Consultation
                                                </span>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero section Ends */}

            {/* about section start */}
            <Reward />
            {/* about section Ends */}

            {/* clien video start */}
            <ClientVideo/>
            {/* clien video Ends */}

            {/* testimonial section stat */}

            {/* <!-- Testimonials --> */}
            <Testimonial/>
            {/* testimonial section Ends */}
            <Footer />
        </>
    )
}

export default testimonial
