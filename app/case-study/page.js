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
                    <a href="javascript:;"  className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
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
                        <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case7.webp" loading="lazy" quality={90} sizes="100vw"  alt="image"/>
                    </div>
                    <div className="lg:w-1/2 h-full md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                        <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case8.webp"  loading="lazy" quality={90} sizes="100vw"  alt="image"/>
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
                    <a href="javascript:;"  className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
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
                        <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case1.webp" loading="lazy" quality={90} sizes="100vw"  alt="image"/>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                        <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case2.webp"  loading="lazy" quality={90} sizes="100vw"  alt="image"/>
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
                    <a href="javascript:;"  className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
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
                        <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case3.webp" loading="lazy" quality={90} sizes="100vw"  alt="image"/>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                        <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case4.webp"  loading="lazy" quality={90} sizes="100vw"  alt="image"/>
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
                    <a href="javascript:;"  className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
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
                        <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case5.webp" loading="lazy" quality={90} sizes="100vw"  alt="image"/>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                        <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case6.webp"  loading="lazy" quality={90} sizes="100vw"  alt="image"/>
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
                    <a href="javascript:;"  className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
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
                        <Image className="size-full aspect-[2000/2000]  object-cover" width="2000" height="2000" src="/img/case9.webp" loading="lazy" quality={90} sizes="100vw"  alt="image"/>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                        <Image className="size-full aspect-[3000/3000]  object-cover object-top" width="3000" height="3000" src="/img/case10.webp"  loading="lazy" quality={90} sizes="100vw"  alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* ---main-section-case-study-end */}




     <Blog/>
      <Form />
      <Footer />
    </>
  )
}

export default casestudy;
