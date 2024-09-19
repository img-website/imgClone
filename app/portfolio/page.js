import React from "react";
import Form from "@/components/contactForm/Form";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";



function portfolio() {
    return (
        <>
            <Header />
         
            <div className="flex w-full relative bg-slate-50 select-none lg:h-dvh lg:min-h-[650px]">
    <div className="size-full relative !z-10">
        <div className="flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply  shadow-theme1 before:from-theme1/30 before:via-theme1/30 before:to-theme1/40">
            <span className="absolute inset-0 bg-cover bg-right opacity-80 rounded-b-2xl bg-theme1/30"></span>
            
            <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1920/1200]" width="1920" height="1200" src="https://img.freepik.com/free-photo/people-with-laptops-office_23-2147656717.jpg?t=st=1726721353~exp=1726724953~hmac=555a08cf6c9fe54c779974c3b93390f700cb8a39ab03adcabf836d5d098c258b&w=740" loading="lazy" quality={90} sizes="100vw" alt="about img"/>
            
            <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-center">
                <div className="xl:w-7/12 lg:w-1/2 grow-0 text-center">
                    <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                        <span className="font-bold text-gray-100 block pb-1 shadow-theme1 via-indigo-500 from-indigo-100 to-indigo-100 text-balance">"Discover Our Portfolio and Elevate Your Vision.
                        Preview our finest work and expect excellence." </span>
                    </div>
                    <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 mx-auto"></div>
                    
                   {/* <div className="w-full flex flex-wrap items-center justify-center lg:gap-4 py-8">
    <a target="_blank" title="Facebook" href="https://www.facebook.com/imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-blue-900 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-blue-900 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
    </a>
    <a target="_blank" title="Twitter" href="https://twitter.com/imgglobal" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-cyan-400 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-cyan-400 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
    </a>
    <a target="_blank" title="Instagram" href="https://www.instagram.com/imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-rose-500 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-rose-500 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
    </a>
    <a target="_blank" title="Youtube" href="https://www.youtube.com/@imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-red-700 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-red-700 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
    </a>
    <a target="_blank" title="Linkedin" href="https://www.linkedin.com/company/imgglobalinfotechpltd" className="inline-flex group/social justify-center items-center bg-white mx-[10px] text-center relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl shadow-white/20 border-[3px] border-white duration-300 w-10 md:w-14 h-10 md:h-14 text-base before:bg-sky-700 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-sky-700 p-2 lg:p-3 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
        <svg className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg>
    </a>
</div> */}
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

<div class="relative bg-gray-100 py-6 md:py-8 lg:py-16 select-none text-white">
    <div class="portfolioSwiper mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full">
        <div class="
            items-center py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5

            [&amp;_.swiper-slide]:rounded-2xl [&amp;_.swiper-slide]:overflow-hidden

            [&amp;_.swiperInner]:p-1 [&amp;_.swiperInner]:bg-gray-700 [&amp;_.swiperInner]:relative [&amp;_.swiperInner]:w-full [&amp;_.swiperInner]:rounded-2xl [&amp;_.swiperInner]:overflow-hidden
            
            [&amp;_img]:w-full [&amp;_img]:h-96 [&amp;_img]:overflow-hidden [&amp;_img]:rounded-xl [&amp;_img]:z-0 [&amp;_img]:duration-[3000ms] [&amp;_img]:object-cover

            [&amp;_.content]:mt-10 [&amp;_.content]:flex [&amp;_.content]:rounded-xl [&amp;_.content]:rounded-t-none [&amp;_.content]:items-center [&amp;_.content]:sm:justify-center [&amp;_.content]:absolute [&amp;_.content]:inset-1 [&amp;_.content]:top-auto [&amp;_.content]:z-[1] before:[&amp;_.content]:absolute before:[&amp;_.content]:inset-3 before:[&amp;_.content]:z-[1] before:[&amp;_.content]:bg-gradient-to-t before:[&amp;_.content]:backdrop-blur-xl before:[&amp;_.content]:rounded-xl [&amp;_.content]:py-8

            [&amp;_.contentInner]:w-full [&amp;_.contentInner]:relative [&amp;_.contentInner]:z-[3] [&amp;_.contentInner]:text-center
 
            [&amp;_.title]:text-base [&amp;_.title]:md:text-lg [&amp;_.title]:font-bold [&amp;_.title]:leading-6 [&amp;_.title]:tracking-tight

            [&amp;_.tagline]:mt-1 [&amp;_.tagline]:text-xs [&amp;_.tagline]:md:text-sm [&amp;_.tagline]:opacity-80
            ">
           
            <a href="javascript:;" target="_blank" class="swiper-slide block duration-300 md:hover:scale-95">
                <div class="swiperInner">
                    <div>
                        <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/kari-port.png"
                         alt="portfolio1"/>

                    </div>
                    <div class="content before:from-green-900/70 before:to-green-900/70">
                        <div class="contentInner">
                            <div class="title">Lorem Ipsum</div>
                            <div class="tagline font-semibold uppercase">Android</div>
                        </div>
                    </div>
                </div>
            </a>
         
          
            <a href="javascript:;" target="_blank" class="swiper-slide block duration-300 md:hover:scale-95">
                <div class="swiperInner">
                    <div>
                        <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png" alt="portfolio2"/>

                    </div>
                    <div class="content before:from-gray-900/70 before:to-gray-900/70">
                        <div class="contentInner">
                            <div class="title">Lorem Ipsum</div>
                            <div class="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="javascript:;" target="_blank" class="swiper-slide block duration-300 md:hover:scale-95">
                <div class="swiperInner">
                    <div>
                        <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/stock-daddy-port.png" alt="portfolio3"/>

                    </div>
                    <div class="content before:from-red-900/70 before:to-red-900/70">
                        <div class="contentInner">
                            <div class="title">Lorem Ipsum</div>
                            <div class="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="javascript:;" target="_blank" class="swiper-slide block duration-300 md:hover:scale-95">
                <div class="swiperInner">
                    <div>
                        <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/aampe-port.png" alt="portfolio4"/>

                    </div>
                    <div class="content before:from-blue-900/70 before:to-blue-900/70">
                        <div class="contentInner">
                            <div class="title">Lorem Ipsum</div>
                            <div class="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                        </div>
                    </div>
                </div>
            </a>
           
            <a href="javascript:;" target="_blank" class=" swiper-slide block duration-300 md:hover:scale-95">
                <div class="swiperInner">
                    <div>
                        <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/mploi-port.png" alt="portfolio5"/>

                    </div>
                    <div class="content before:from-amber-900/70 before:to-amber-900/70">
                        <div class="contentInner">
                            <div class="title">Lorem Ipsum</div>
                            <div class="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                        </div>
                    </div>
                </div>
            </a>
           
          
            <a href="javascript:;" target="_blank" class="swiper-slide block duration-300 md:hover:scale-95">
                <div class="swiperInner">
                    <div>
                        <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png"  alt="portfolio6"/>

                    </div>
                    <div class="content before:from-purple-900/70 before:to-purple-900/70">
                        <div class="contentInner">
                            <div class="title">Lorem Ipsum</div>
                            <div class="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                        </div>
                    </div>
                </div>
            </a>
           
            <a href="javascript:;" target="_blank" class="swiper-slide block duration-300 md:hover:scale-95">
                <div class="swiperInner">
                    <div>
                        <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/stock-daddy-port.png" alt="portfolio7"/>

                    </div>
                    <div class="content before:from-amber-900/70 before:to-amber-900/70">
                        <div class="contentInner">
                            <div class="title">Lorem Ipsum</div>
                            <div class="tagline font-semibold uppercase">WEBSITE | Laravel | php | html5 | css3</div>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="javascript:;" target="_blank" class="swiper-slide block duration-300 md:hover:scale-95">
                <div class="swiperInner">
                    <div>
                        <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/aampe-port.png" alt="portfolio8"/>

                    </div>
                    <div class="content before:from-amber-900/70 before:to-amber-900/70">
                        <div class="contentInner">
                            <div class="title">Lorem Ipsum</div>
                            <div class="tagline font-semibold uppercase">WEBSITE | React | html5 | css3</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="javascript:;" target="_blank" class="swiper-slide block duration-300 md:hover:scale-95">
                <div class="swiperInner">
                    <div>
                        <Image width="1000" height="1000" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/mploi-port.png"  alt="portfolio9"/>

                    </div>
                    <div class="content before:from-teal-500/70 before:to-teal-500/70">
                        <div class="contentInner">
                            <div class="title">Lorem Ipsum</div>
                            <div class="tagline font-semibold uppercase">WEBSITE | Laravel | PHP | Bootstrap</div>
                        </div>
                    </div>
                </div>
            </a>
           
           
        </div>
    </div>
</div>





{/* <div className="bg-white relative overflow-hidden py-6 md:py-8 lg:py-16 select-none">
    

    <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative">
        <p className="max-md:text-xl/tight max-xl:text-2xl/tight text-3xl/tight tracking-[-0.04em] text-black text-center">
            <span className="font-normal block pb-3">Stay Informed Of Latest Innovations and Trends With Our Blogs!</span>
            <span className="font-bold text-theme4"> Explore our insightful blogs to stay abreast of the latest innovations
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
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl rounded-br-none shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl rounded-br-none" width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/ares-port.png" alt="Dating App Development Cost" title="How Much Does It Cost To Develop A Dating App? "/>
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
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl rounded-br-none shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl rounded-br-none" width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/uber.png"
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
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl rounded-br-none shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl rounded-br-none" width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/ares-port.png" alt="Features of dating app" title="Top 30 Features of Dating Apps   "/>
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
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl rounded-br-none shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl rounded-br-none" width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png"
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
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl rounded-br-none shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl rounded-br-none" width="385" height="217" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png"
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
                        <a href="javascript:;" className="flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl rounded-br-none shadow-md shadow-gray-300">
                            <Image className="w-full aspect-[385/221] rounded-2xl rounded-br-none" width="385" height="217" 
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

            <Form />
            <Footer />
            </>
    )
}

export default portfolio;
