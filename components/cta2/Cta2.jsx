import React from 'react'

function Cta2() {
    return (
        <div>
            <section class="relative overflow-hidden lg:h-dvh lg:min-h-[600px] w-full z-50">
                <div
                    class=" absolute inset-0 !h-full size-full lg:before:absolute lg:before:inset-y-[-200px] lg:before:right-0 lg:before:w-full lg:before:mx-auto lg:before:bg-gradient-to-r lg:before:from-black/80 lg:before:via-black/10 lg:before:to-black/0 lg:before:transform lg:before:z-10">
                    <video id="home-hero-video"
                        class="per-video__video fadein max-sm:w-full w-full max-sm:object-cover max-sm:h-full xl:w-full md:object-cover md:h-full"
                        src="/img/cta.mp4" autoplay="autoplay" loop="loop" muted></video>
                </div>
                <div class="h-full !z-20 relative">
                    <div class="h-full relative z-50">
                        <div
                            class="!transition-all h-full relative z-50 lg:py-20 md:py-16 py-10 before:backdrop-grayscale before:absolute before:inset-y-[-200px] lg:before:-right-80 before:right-0 before:w-full lg:before:w-[78%] before:mx-auto before:bg-gradient-to-r before:from-black/40 lg:before:from-black/10 before:via-black/40 lg:before:via-black/30 before:to-black/40 lg:before:to-black/20 before:transform lg:before:skew-x-[25deg] before:z-10">
                            <div
                                class="mx-auto max-2xl:max-w-7xl 2xl:px-24 3xl:px-36  overflow-hidden h-full px-6 lg:px-8 w-full relative z-10 text-white">
                                <div class="grid grid-cols-12 size-full">
                                    <div class="lg:col-span-6 col-span-12 lg:block hidden">
                                        <div class="size-full"></div>
                                    </div>
                                    <div class="lg:col-span-6 col-span-12">
                                        <div class="size-full flex flex-col justify-center text-right">
                                            <div
                                                class="2xl:text-[75px] 3xl:text-[100px] lg:text-7xl !leading-[110%] md:text-6xl text-4xl font-bold"
                                                data-aos="zoom-in-right" data-aos-duration="2000">
                                                Let's Talk About How We
                                                <span
                                                    class="[-webkit-text-fill-color:transparent] lg:[-webkit-text-stroke-width:2px] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:white]">Could
                                                    Work Together</span>
                                            </div>
                                            <div class="pb-1 pt-20" data-aos="zoom-in-right" data-aos-duration="2000">
                                                <a href="javascript:;"
                                                    class="inline-flex items-center gap-3 md:text-lg 2xl:text-2xl  text-sm text-white relative ps-6 2xl:ps-8 3xl:ps-10 2xl:py-3  py-2 pr-6 transition-all duration-500 before:absolute before:border-2 before:border-white md:before:min-w-[42px] 2xl:before:size-12 3xl:before:size-14  before:size-10 before:top-1/2 before:-translate-y-1/2 before:left-0  before:rounded-full before:transition-all before:duration-500 hover:before:min-w-[100%]">
                                                    <span>
                                                        <img src="./assets/img/arrow.svg" alt="arrow" class="filter invert" />
                                                    </span>
                                                    Contact HPIT
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cta2
