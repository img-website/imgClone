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
                                                <button className="px-4 text-sm text-[white] rounded-full bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300">
                                                    <span>Schedule a consultation</span>
                                                    <span>
                                                        <svg className='size-5' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path></svg>
                                                    </span>
                                                </button>
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
