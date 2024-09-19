import React from 'react'
import Image from "next/image";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Reward from '@/components/reward/Reward';
import ClientVideo from '@/components/clientVideo/ClientVideo';


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
            <div class="overflow-hidden bg-gray-800">
                <div class="mx-auto max-w-7xl px-6 lg:px-8 w-full relative py-10 sm:px-6 lg:py-14">
                    <div class="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
                        <div class="flex flex-col">
                            <p class="
                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white
            
                        first:*:font-normal
            
                        last:*:font-bold last:*:text-theme2
                    "><span>Loved by business and  </span>
                                <span> individuals across the globe!</span></p>
                            <div class="md:text-base text-sm text-white/70 mt-3">
                                Delve into the testimonials that vividly showcase our partnership with esteemed clients. Experience the exceptional service we offer, and let your success story begin with us today.
                            </div>
                        </div>
                    </div>

                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="flex h-auto">
                            <div class="flex flex-col bg-white rounded-xl">
                                <div class="flex-auto p-4 md:p-6">
                                    <p class="text-base italic md:text-lg text-gray-800">
                                        " With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience. "
                                    </p>
                                </div>

                                <div class="p-4 bg-gray-100 rounded-b-xl md:px-7">
                                    <div class="flex items-center gap-x-3">
                                        <div class="shrink-0">
                                            <Image width="1000" height="1000" quality="90" loading='lazy' class="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                        </div>

                                        <div class="grow">
                                            <p class="text-sm sm:text-base font-semibold text-gray-800">
                                                Josh Tyson
                                            </p>
                                            <p class="text-xs text-gray-500">
                                                Product Manager | Capsule
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex h-auto">
                            <div class="flex flex-col bg-white rounded-xl">
                                <div class="flex-auto p-4 md:p-6">
                                    <p class="text-base italic md:text-lg text-gray-800">
                                        " In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team. "
                                    </p>
                                </div>

                                <div class="p-4 bg-gray-100 rounded-b-xl md:px-7">
                                    <div class="flex items-center gap-x-3">
                                        <div class="shrink-0">
                                            <Image width="1000" height="1000" quality="90" loading='lazy' class="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                        </div>

                                        <div class="grow">
                                            <p class="text-sm sm:text-base font-semibold text-gray-800">
                                                Luisa
                                            </p>
                                            <p class="text-xs text-gray-500">
                                                Senior Director of Operations | Fitbit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex h-auto">
                            <div class="flex flex-col bg-white rounded-xl">
                                <div class="flex-auto p-4 md:p-6">
                                    <p class="text-base italic md:text-lg text-gray-800">
                                        " Refreshing and Thought provoking design and it changes my view about how I design the websites. Great typography, modern clean white design, nice tones of the color. "
                                    </p>
                                </div>

                                <div class="p-4 bg-gray-100 rounded-b-xl md:px-7">
                                    <div class="flex items-center gap-x-3">
                                        <div class="shrink-0">
                                            <Image width="1000" height="1000" quality="90" loading='lazy' class="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar" />
                                        </div>

                                        <div class="grow">
                                            <p class="text-sm sm:text-base font-semibold text-gray-800">
                                                Alisa Williams
                                            </p>
                                            <p class="text-xs text-gray-500">
                                                Entrepreneur | Happy customer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 justify-center">
                        <div className='text-center'>
                            <h4 class="text-lg sm:text-xl font-semibold text-white">Accuracy rate</h4>
                            <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">99.95%</p>
                            <p class="mt-1 text-gray-400">in fulfilling orders</p>
                        </div>

                        <div className='text-center'>
                            <h4 class="text-lg sm:text-xl font-semibold text-white">Startup businesses</h4>
                            <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">2,000+</p>
                            <p class="mt-1 text-gray-400">partner with Preline</p>
                        </div>

                        <div className='text-center'>
                            <h4 class="text-lg sm:text-xl font-semibold text-white">Happy customer</h4>
                            <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">85%</p>
                            <p class="mt-1 text-gray-400">this year alone</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* testimonial section Ends */}
            <Footer />
        </>
    )
}

export default testimonial
