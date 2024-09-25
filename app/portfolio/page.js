import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import Blog from "@/components/blog/Blog";



function portfolio() {
    return (
        <>
            <Header />


            <div className="flex w-full relative bg-slate-50 lg:h-dvh lg:min-h-[650px]">
                <div className="size-full relative !z-10">
                    <div className="flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply  shadow-theme1 before:from-theme1/30 before:via-theme1/30 before:to-theme1/40">
                        <span className="absolute inset-0 bg-cover bg-right opacity-80 rounded-b-2xl bg-theme1/30"></span>

                        <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1920/1200]" width="1920" height="1200" src="https://img.freepik.com/free-photo/people-with-laptops-office_23-2147656717.jpg?t=st=1726721353~exp=1726724953~hmac=555a08cf6c9fe54c779974c3b93390f700cb8a39ab03adcabf836d5d098c258b&w=740" loading="lazy" quality={90} sizes="100vw" alt="about img" />

                        <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-center">
                            <div className="xl:w-7/12 lg:w-1/2 grow-0 text-center">
                                <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                    <span className="font-bold text-gray-100 block pb-1 shadow-theme1 via-indigo-500 from-indigo-100 to-indigo-100 text-balance">Discover Our Portfolio and Elevate Your Vision
                                        Preview our finest work and expect excellence </span>
                                </div>
                                <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 mx-auto"></div>

                                <div className="mt-10 flex gap-4 justify-center">
                                    <a href="javascript:;" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-theme1 text-white hover:bg-theme1/90">
                                        <span>
                                            <span className="inline-flex items-center gap-1">
                                                <span>
                                                    See All Portfolio
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

            <div className="relative bg-gray-100 py-6 md:py-8 lg:py-16 text-white">
                <div className="portfolioSwiper mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full">
                    <div className="
            items-center py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5

            [&amp;_.swiper-slide]:rounded-2xl [&amp;_.swiper-slide]:overflow-hidden

            [&amp;_.swiperInner]:p-1 [&amp;_.swiperInner]:bg-gray-700 [&amp;_.swiperInner]:relative [&amp;_.swiperInner]:w-full [&amp;_.swiperInner]:rounded-2xl [&amp;_.swiperInner]:overflow-hidden
            
            [&amp;_img]:w-full [&amp;_img]:h-96 [&amp;_img]:overflow-hidden [&amp;_img]:rounded-xl [&amp;_img]:z-0 [&amp;_img]:duration-[3000ms] [&amp;_img]:object-cover

            [&amp;_.content]:mt-10 [&amp;_.content]:flex [&amp;_.content]:rounded-xl [&amp;_.content]:rounded-t-none [&amp;_.content]:items-center [&amp;_.content]:sm:justify-center [&amp;_.content]:absolute [&amp;_.content]:inset-1 [&amp;_.content]:top-auto [&amp;_.content]:z-[1] before:[&amp;_.content]:absolute before:[&amp;_.content]:inset-3 before:[&amp;_.content]:z-[1] before:[&amp;_.content]:bg-gradient-to-t before:[&amp;_.content]:backdrop-blur-xl before:[&amp;_.content]:rounded-xl [&amp;_.content]:py-8

            [&amp;_.contentInner]:w-full [&amp;_.contentInner]:relative [&amp;_.contentInner]:z-[3] [&amp;_.contentInner]:text-center
 
            [&amp;_.title]:text-base [&amp;_.title]:md:text-lg [&amp;_.title]:font-bold [&amp;_.title]:leading-6 [&amp;_.title]:tracking-tight

            [&amp;_.tagline]:mt-1 [&amp;_.tagline]:text-xs [&amp;_.tagline]:md:text-sm [&amp;_.tagline]:opacity-80
            ">

                        <a href="javascript:;" target="_blank" className="swiper-slide block duration-300 md:hover:scale-95">
                            <div className="swiperInner">
                                <div>
                                    <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/kari-port.png"
                                        alt="portfolio1" />

                                </div>
                                <div className="content before:from-green-900/70 before:to-green-900/70">
                                    <div className="contentInner">
                                        <div className="title">Lorem Ipsum</div>
                                        <div className="tagline font-semibold uppercase">Android</div>
                                    </div>
                                </div>
                            </div>
                        </a>


                        <a href="javascript:;" target="_blank" className="swiper-slide block duration-300 md:hover:scale-95">
                            <div className="swiperInner">
                                <div>
                                    <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png" alt="portfolio2" />

                                </div>
                                <div className="content before:from-gray-900/70 before:to-gray-900/70">
                                    <div className="contentInner">
                                        <div className="title">Lorem Ipsum</div>
                                        <div className="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:;" target="_blank" className="swiper-slide block duration-300 md:hover:scale-95">
                            <div className="swiperInner">
                                <div>
                                    <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/stock-daddy-port.png" alt="portfolio3" />

                                </div>
                                <div className="content before:from-red-900/70 before:to-red-900/70">
                                    <div className="contentInner">
                                        <div className="title">Lorem Ipsum</div>
                                        <div className="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:;" target="_blank" className="swiper-slide block duration-300 md:hover:scale-95">
                            <div className="swiperInner">
                                <div>
                                    <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/aampe-port.png" alt="portfolio4" />

                                </div>
                                <div className="content before:from-blue-900/70 before:to-blue-900/70">
                                    <div className="contentInner">
                                        <div className="title">Lorem Ipsum</div>
                                        <div className="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript:;" target="_blank" className=" swiper-slide block duration-300 md:hover:scale-95">
                            <div className="swiperInner">
                                <div>
                                    <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/mploi-port.png" alt="portfolio5" />

                                </div>
                                <div className="content before:from-amber-900/70 before:to-amber-900/70">
                                    <div className="contentInner">
                                        <div className="title">Lorem Ipsum</div>
                                        <div className="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                                    </div>
                                </div>
                            </div>
                        </a>


                        <a href="javascript:;" target="_blank" className="swiper-slide block duration-300 md:hover:scale-95">
                            <div className="swiperInner">
                                <div>
                                    <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png" alt="portfolio6" />

                                </div>
                                <div className="content before:from-purple-900/70 before:to-purple-900/70">
                                    <div className="contentInner">
                                        <div className="title">Lorem Ipsum</div>
                                        <div className="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript:;" target="_blank" className="swiper-slide block duration-300 md:hover:scale-95">
                            <div className="swiperInner">
                                <div>
                                    <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/stock-daddy-port.png" alt="portfolio7" />

                                </div>
                                <div className="content before:from-amber-900/70 before:to-amber-900/70">
                                    <div className="contentInner">
                                        <div className="title">Lorem Ipsum</div>
                                        <div className="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript:;" target="_blank" className="swiper-slide block duration-300 md:hover:scale-95">
                            <div className="swiperInner">
                                <div>
                                    <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/aampe-port.png" alt="portfolio8" />

                                </div>
                                <div className="content before:from-amber-900/70 before:to-amber-900/70">
                                    <div className="contentInner">
                                        <div className="title">Lorem Ipsum</div>
                                        <div className="tagline font-semibold uppercase">WEBSITE | React | html5 | css3</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:;" target="_blank" className="swiper-slide block duration-300 md:hover:scale-95">
                            <div className="swiperInner">
                                <div>
                                    <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/mploi-port.png" alt="portfolio9" />

                                </div>
                                <div className="content before:from-teal-500/70 before:to-teal-500/70">
                                    <div className="contentInner">
                                        <div className="title">Lorem Ipsum</div>
                                        <div className="tagline font-semibold uppercase">WEBSITE | Laravel | PHP | Bootstrap</div>
                                    </div>
                                </div>
                            </div>
                        </a>


                    </div>
                </div>
            </div>


            <Blog/>




            {/* <div className="bg-white relative overflow-hidden py-6 md:py-8 lg:py-16">
    

    <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative">
        <p className="max-md:text-xl/tight max-xl:text-2xl/tight text-3xl/tight tracking-[-0.04em] text-black text-center">
            <span className="font-normal block pb-3">Stay Informed Of Latest Innovations and Trends With Our Blogs!</span>
            <span className="font-bold text-theme2"> Explore our insightful blogs to stay abreast of the latest innovations
                and trends. Stay informed, stay ahead.</span>
        </p>
        <div className="mx-auto md:mt-10 flex gap-x-8 gap-y-16 pt-10 sm:pt-8 lg:mx-0">
            <div className="swiper blogsSwiper w-full swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper="{
                    &quot;slidesPerView&quot;: 2,
                    &quot;spaceBetween&quot;: 10,
                    &quot;speed&quot;: 1000,
                    &quot;loop&quot;: false,
                    &quot;effect&quot;: &quot;slide&quot;,
                    &quot;breakpoints&quot;: {
                        &quot;320&quot;: {&quot;slidesPerView&quot;: 1, &quot;spaceBetween&quot;: 30},
                        &quot;480&quot;: {&quot;slidesPerView&quot;: 1.2, &quot;spaceBetween&quot;: 20},
                        &quot;640&quot;: {&quot;slidesPerView&quot;: 2, &quot;spaceBetween&quot;: 30},
                        &quot;1024&quot;: {&quot;slidesPerView&quot;: 2.6, &quot;spaceBetween&quot;: 30},
                        &quot;1350&quot;: {&quot;slidesPerView&quot;: 3, &quot;spaceBetween&quot;: 30}
                    }
                }">
                <div className="swiper-wrapper flex items-center pb-8 -mb-8 " id="swiper-wrapper-d2640ed7db106104e4" aria-live="polite" style="transition-duration: 0ms; transform: translate3d(-1285.38px, 0px, 0px); transition-delay: 0ms;"> 

                                <div className="swiper-slide rounded-2xl group/blog p-3" style="width: 398.462px; margin-right: 30px;" role="group" aria-label="1 / 6">
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl   shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl  " width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/ares-port.png" alt="Dating App Development Cost" title="How Much Does It Cost To Develop A Dating App? "/>
                            <div className="w-full p-6">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time datetime="2024-5-24" className="text-gray-500">Sep 17, 2024</time>
                                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        MOBILE APP</div>
                                </div>
                                <div className="group relative">
                                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                                        How Much Does It Cost To Develop A Dating App?                                     </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Have you ever thought about making great dating apps like OkCupid, Tinder, Bumble, or Hinge? These apps provide useful f...</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image srcset="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740" 
                                    alt="lorem ipsum" className="h-10 w-10 rounded-full bg-gray-50"/>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">Written by</p>
                                        <p className="text-gray-600">lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>  
                                    <div className="swiper-slide rounded-2xl group/blog p-3" style="width: 398.462px; margin-right: 30px;" role="group" aria-label="2 / 6">
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl   shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl  " width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/uber.png"
                             alt="cost-to-develop-an-app-like-Uber" title="How Much Does It Cost to Develop A Bike Taxi App Like Rapido?"/>
                            <div className="w-full p-6">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time datetime="2024-5-24" className="text-gray-500">Sep 11, 2024</time>
                                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        MOBILE APP</div>
                                </div>
                                <div className="group relative">
                                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                                        How Much Does It Cost to Develop A Food Delivery App Like UberEats?                                    </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">In a world that's constantly on the move, convenience has become the holy grail of urban living. Whether it's a ...</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image srcset="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740" alt="lorem ipsum"
                                     className="h-10 w-10 rounded-full bg-gray-50"/>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">Written by</p>
                                        <p className="text-gray-600">lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>  
                                    <div className="swiper-slide rounded-2xl group/blog p-3 swiper-slide-prev" style="width: 398.462px; margin-right: 30px;" role="group" aria-label="3 / 6">
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl   shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl  " width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/ares-port.png" alt="Features of dating app" title="Top 30 Features of Dating Apps   "/>
                            <div className="w-full p-6">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time datetime="2024-5-24" className="text-gray-500">Sep 09, 2024</time>
                                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        MOBILE APP</div>
                                </div>
                                <div className="group relative">
                                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                                        Top 30 Features of Dating Apps                                       </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">The first personal ads were in a newspaper in the late 1600s and almost everybody saw that. And you know what, we do the...</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image srcset="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740" alt="lorem ipsum"
                                     className="h-10 w-10 rounded-full bg-gray-50"/>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">Written by</p>
                                        <p className="text-gray-600">lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>  
                                    <div className="swiper-slide rounded-2xl group/blog p-3 swiper-slide-active" style="width: 398.462px; margin-right: 30px;" role="group" aria-label="4 / 6">
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl   shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl  " width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png"
                             alt="taxi-booking-mobile-app-development" title="Taxi Booking Mobile App Development Cost &amp; Features 2024"/>
                            <div className="w-full p-6">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time datetime="2024-5-24" className="text-gray-500">Sep 05, 2024</time>
                                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        ON DEMAND</div>
                                </div>
                                <div className="group relative">
                                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                                        Taxi Booking Mobile App Development Cost &amp; Features 2024                                    </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">The changed scenes of the commutation make it quite convenient for the drivers and riders to connect. With Ola, Uber, an...</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image src="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740" 
                                     alt="lorem ipsum" className="h-10 w-10 rounded-full bg-gray-50"/>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">Written by</p>
                                        <p className="text-gray-600">lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>  
                                    <div className="swiper-slide rounded-2xl group/blog p-3 swiper-slide-next" style="width: 398.462px; margin-right: 30px;" role="group" aria-label="5 / 6">
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl   shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl  " width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png"
                             alt="Dating App Development Trends" title="Top 18 Trends in Dating App Development"/>
                            <div className="w-full p-6">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time datetime="2024-5-24" className="text-gray-500">Sep 03, 2024</time>
                                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        MOBILE APP</div>
                                </div>
                                <div className="group relative">
                                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                                        Top 18 Trends in Dating App Development                                    </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Remember how awkward it was to try to break the ice at parties? Or the awkward secret dates that friends set up? Thanks ...</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image srcset="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740" alt="lorem ipsum"
                                     className="h-10 w-10 rounded-full bg-gray-50"/>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">Written by</p>
                                        <p className="text-gray-600">lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>  
                                    <div className="swiper-slide rounded-2xl group/blog p-3" role="group" aria-label="6 / 6" style="width: 398.462px; margin-right: 30px;">
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl   shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl  " width="385" height="217" 
                            src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png"
                             alt="Top Dating Apps" title="Best 14 Dating Apps to Know in 2024"/>
                            <div className="w-full p-6">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time datetime="2024-5-24" className="text-gray-500">Aug 26, 2024</time>
                                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        MOBILE APP</div>
                                </div>
                                <div className="group relative">
                                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                                        Best 14 Dating Apps to Know in 2024                                    </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Popularity is not the only thing. Still, dating sites and apps depend somewhat heavily on this. On dating apps with the ...</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image srcset="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740" alt="lorem ipsum"
                                     className="h-10 w-10 rounded-full bg-gray-50"/>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">Written by</p>
                                        <p className="text-gray-600">lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>  
                    
                </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </div>
    </div>
</div> */}

            <Footer />
        </>
    )
}

export default portfolio;
