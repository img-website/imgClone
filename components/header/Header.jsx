"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";





const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`absolute ${isScrolled ? 'group/nav' : 'bg-transparent'} top-0 left-0 right-0 z-[1010] group-[]/ns:fixed group-[]/ns:animate-fixed-nav bg-theme1 text-white  group-[]/ns:animate-fixed-nav group-[]/ns:from-slate-950 group-[]/ns:to-theme1 group-[]/ons:from-theme1 group-[]/ons:to-theme1 group-[]/ons:rounded-b-2xl`}>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 drop-shadow-2xl">
              <Image
                className="h-8 md:h-12 w-auto"
                width="1000"
                height="1000"
                src="/img/logo.png"
                alt="Twin Power Logo"
                quality="90"
                priority="true"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <label
              htmlFor="sideToggle"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </label>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:gap-x-8 gap-y-5 ml-auto mr-0 items-end">
            <div className="flex gap-5 group-[]/ns:-mb-9 group-[]/ns:-z-10 group-[]/ns:opacity-0 relative duration-300">
              <Link
                href="mailto:"
                target="_blank"
                className="flex items-center opacity-70 font-semibold text-sm gap-1"
              >
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                  </svg>
                </span>
                <span></span>
              </Link>
              <Link
                href=""
                className="flex items-center opacity-70 font-semibold text-sm gap-1"
              >
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.05175,18.85575 C8.025,18.85575 6.22425,16.8765 6.22425,15.393 C6.22425,14.63175 6.786,14.0985 7.56,14.0985 C9.2835,14.0985 8.83725,16.57275 12.05175,16.57275 C13.69725,16.57275 14.60625,15.67875 14.60625,14.7645 C14.60625,14.21475 14.33475,13.605 13.251,13.338 L9.66975,12.444 C6.786,11.721 6.2625,10.16175 6.2625,8.69625 C6.2625,5.65275 9.1275,4.5105 11.8185,4.5105 C14.2965,4.5105 17.2185,5.88 17.2185,7.7055 C17.2185,8.48775 16.54125,8.943 15.76725,8.943 C14.2965,8.943 14.56725,6.9075 11.6055,6.9075 C10.1355,6.9075 9.32175,7.5735 9.32175,8.526 C9.32175,9.47625 10.48275,9.78 11.49,10.0095 L14.14125,10.59825 C17.0445,11.24475 17.78025,12.93975 17.78025,14.5365 C17.78025,17.00925 15.88275,18.85575 12.05175,18.85575 M23.15025,13.9695 C23.14275,14.0115 23.1375,14.05425 23.12925,14.09625 L23.08875,13.85475 C23.1105,13.89225 23.12925,13.93125 23.15025,13.9695 C23.274,13.29525 23.33925,12.60525 23.33925,11.91525 C23.33925,10.38525 23.03925,8.901 22.44825,7.50375 C21.87675,6.1545 21.06075,4.9425 20.019,3.9015 C18.97875,2.8605 17.766,2.04375 16.41675,1.473 C15.02025,0.882 13.536,0.58275 12.00675,0.58275 C11.28525,0.58275 10.563,0.65025 9.86025,0.78525 C9.85875,0.78525 9.85725,0.78525 9.855,0.786 C9.89475,0.807 9.9345,0.82575 9.9735,0.8475 L9.735,0.81 C9.77475,0.8025 9.81525,0.79425 9.855,0.786 C8.8905,0.27375 7.80675,0 6.70875,0 C4.917,0 3.23175,0.6975 1.965,1.965 C0.69825,3.23175 0,4.917 0,6.7095 C0,7.8495 0.29325,8.97075 0.84375,9.96225 C0.8505,9.921 0.85575,9.879 0.864,9.8385 L0.90525,10.07625 C0.8835,10.03875 0.86475,9.99975 0.84375,9.96225 C0.732,10.6035 0.67275,11.25975 0.67275,11.91525 C0.67275,13.44525 0.97275,14.9295 1.5645,16.32675 C2.1345,17.67675 2.952,18.888 3.99225,19.929 C5.03325,20.96925 6.2445,21.7875 7.59525,22.35675 C8.99175,22.94925 10.47675,23.2485 12.00675,23.2485 C12.672,23.2485 13.3395,23.18775 13.99125,23.07225 C13.953,23.05125 13.914,23.03175 13.87575,23.00925 L14.118,23.052 C14.076,23.0595 14.034,23.06475 13.99125,23.07225 C14.99475,23.64075 16.131,23.94225 17.29125,23.94225 C19.08375,23.94225 20.7675,23.2455 22.035,21.97725 C23.3025,20.71125 24,19.026 24,17.2335 C24,16.089 23.70525,14.964 23.15025,13.9695"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
            <div className="flex gap-5 items-center">
              <div className="hidden lg:flex lg:gap-x-6 ml-auto mr-0">
                <Link href="/"
                  className={`flex items-center gap-x-[2px] text-xs font-semibold leading-6 text-gray-50 hover:text-gray-300 duration-200 uppercase group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1] `}
                  aria-expanded="false"
                >
                  Home
                </Link>
                <div className="relative group/dd">
                  <button
                    type="button"
                    className={`flex items-center gap-x-[2px] text-xs font-semibold leading-6 text-gray-50 hover:text-gray-300 duration-200 uppercase group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1] ` }
                    aria-expanded="false"
                  >
                    Company
                    <svg
                      className={` h-5 w-5 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)] text-white`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="absolute left-1/2 right-0 max-w-md w-screen top-[58px] z-10 overflow-hidden bg-transparent rounded-[20px] transition ease-out duration-200 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                    <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-2 xl:p-4 items-stretch">
                      <div className="w-full flex flex-col p-2 rounded-[20px] bg-white xl:p-4 overflow-hidden  text-xs xl:text-sm leading-6 group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-6 *:rounded-lg *:p-2 *:xl:p-4">
                        <div className="group/db ">
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                            <svg
                              className="h-5 w-5 opacity-90 group-hover/db:opacity-80"
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                              <path d="M12 9v4"></path>
                              <path d="M12 16v.01"></path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/about-us"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 uppercase hoverLink text-slate-900"
                            >
                              About Us
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                            {/* <p className="xl:mt-1 opacity-60 relative z-0">Your IT Partner for Tomorrow's Solutions</p> */}
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                            <svg
                              className="h-5 w-5 opacity-90 group-hover/db:opacity-80"
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"></path>
                              <path d="M12 15l1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z"></path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/testimonial"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 uppercase hoverLink text-slate-900"
                            >
                              Testimonials
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                            {/* <p className="xl:mt-1 opacity-60 relative z-0">Hear What Our Clients Have to Say</p> */}
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                            <svg
                              className="h-5 w-5 opacity-90 group-hover/db:opacity-80"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/case-study"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 uppercase hoverLink text-slate-900"
                            >
                              Case Study
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                            {/* <p className="xl:mt-1 opacity-60 relative z-0">Success Stories that Speak Volumes</p> */}
                          </div>
                        </div>
                        {/* <div className="grid grid-cols-2 mt-2 divide-x rounded-b-xl divide-gray-900/5 bg-gray-950">
                      <Link href=".com/disclaimer.php" className="flex grow items-center justify-center gap-x-2.5 p-3 text-xs font-semibold leading-6 opacity-80 hover:opacity-90 duration-200 uppercase hover:bg-gray-600/30">
                        <svg className="h-5 w-5 flex-none text-gray-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path></svg>
                        Disclaimer
                      </Link>
                      <Link href=".com/sitemap.html" className="flex grow items-center justify-center gap-x-2.5 p-3 text-xs font-semibold leading-6 opacity-80 hover:opacity-90 duration-200 uppercase hover:bg-gray-600/30">
                        <svg className="h-5 w-5 flex-none text-gray-400" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"></path><path d="M12 9l0 3"></path></svg>
                        Sitemap
                      </Link>
                    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group/dd">
                  <button
                    type="button"
                    className={`flex items-center gap-x-[2px] text-xs font-semibold leading-6 text-gray-50 hover:text-gray-300 duration-200 uppercase group-hover/dd:before:absolute group-hover/dd:before:-bottom-0 group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1] `}
                    aria-expanded="false"
                  >
                    Services
                    <svg
                      className={` h-5 w-5 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)] text-white`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="absolute left-0 right-0 w-full top-[132px] group-hover/ns:top-24 z-10 overflow-hidden bg-transparentgroup-hover/ns:rounded-t-none  rounded-[20px] transition ease-out duration-200 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)] group-hover/dd:[transform:rotateX(0deg)]">
                    <div className="grid grid-cols-5 flex-wrap w-full gap-4 p-2 xl:p-4 items-stretch text-xs xl:text-sm xl:leading-6">
                      <div className="w-full flex flex-col p-2 rounded-[20px] bg-white xl:p-4 overflow-hidden  group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-5 *:rounded-lg *:px-2 *:xl:px-4 *:py-1 *:xl:py-2">
                        <div className="text-base md:text-lg font-bold px-2 xl:px-4 py-1 xl:py-2 text-slate-900">
                          Mobile App
                        </div>
                        <div className="group/db hover:bg-gray-600/30 text-sky-300">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/mobile-app-development "
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Mobile App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/android-application-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Android App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/ios-app-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              iOS App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/cross-platform"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Cross-Platform App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/flutter-app-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Flutter App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/react-native-app-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              React Native App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-col p-2 rounded-[20px] bg-white xl:p-4 overflow-hidden  group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-5 *:rounded-lg *:px-2 *:xl:px-4 *:py-1 *:xl:py-2">
                        <div className="text-base md:text-lg font-bold px-2 xl:px-4 py-1 xl:py-2 text-slate-900">
                          Web
                        </div>
                        <div className="group/db hover:bg-gray-600/30 text-sky-300">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                          <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/web-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Web Development
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/website-design"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Website Design
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/website-redesigning"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Website Redesign
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/responsive-web-designing"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Responsive Design
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-col p-2 rounded-[20px] bg-white xl:p-4 overflow-hidden  group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-5 *:rounded-lg *:px-2 *:xl:px-4 *:py-1 *:xl:py-2">
                        <div className="text-base md:text-lg font-bold px-2 xl:px-4 py-1 xl:py-2 text-slate-900">
                          Software
                        </div>
                        <div className="group/db hover:bg-gray-600/30 text-sky-300">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/bespoke-software-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Bespoke Software
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/saas-software-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              SaaS Software
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/inventory-management-software"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Inventory Management
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/gym-management-software"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              GYM Software
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/customer-relationship-management"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              CRM Software
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-col p-2 rounded-[20px] bg-white xl:p-4 overflow-hidden  group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-5 *:rounded-lg *:px-2 *:xl:px-4 *:py-1 *:xl:py-2">
                        <div className="text-base md:text-lg font-bold px-2 xl:px-4 py-1 xl:py-2 text-slate-900">
                          Sports
                        </div>
                        <div className="group/db hover:bg-gray-600/30 text-sky-300">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                          <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/fantasy-sports-app-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Fantasy Sports App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/fantasy-cricket-app-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Fantasy Cricket App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/fantasy-football-app-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Fantasy Football App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/fantasy-kabaddi-app-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Fantasy Kabaddi App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/sports-betting-app-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Sports Betting App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                        <div className="group/db hover:bg-gray-600/30">
                          <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                         <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                          </div>
                          <div className="flex-auto">
                            <Link
                              href="/casino-game-app-development"
                              className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                            >
                              Casino App
                              <span className="absolute inset-0 z-[1]"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-4">
                        <div className="w-full flex flex-col p-2 rounded-[20px] bg-white xl:p-4 overflow-hidden  group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-5 *:rounded-lg *:px-2 *:xl:px-4 *:py-1 *:xl:py-2">
                          <div className="text-base md:text-lg font-bold px-2 xl:px-4 py-1 xl:py-2 text-slate-900">
                            eCommerce
                          </div>
                          <div className="group/db hover:bg-gray-600/30 text-sky-300">
                            <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">
                            </path>
                            </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/ecommerce-development"
                                className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900"
                              >
                                eCommerce Development
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="group/dd">
              <button type="button" className="flex items-center gap-x-[2px] text-xs font-semibold leading-6 text-gray-50 hover:text-gray-300 duration-200 uppercase group-hover/dd:before:absolute group-hover/dd:before:-bottom-0 group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]" aria-expanded="false">
                Trending Solutions
                <svg className={` h-5 w-5 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)] text-gray-400`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 right-0 w-full top-[132px] group-hover/ns:top-24 z-10 overflow-hidden bg-transparentgroup-hover/ns:rounded-t-none  rounded-[20px] transition ease-out duration-200 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)] group-hover/dd:[transform:rotateX(0deg)]">
                <div className="grid grid-cols-3 flex-wrap w-full gap-4 p-2 xl:p-4 items-stretch text-xs xl:text-sm xl:leading-6">
                  <div className="w-full flex flex-col p-2 rounded-[20px] bg-white xl:p-4 overflow-hidden  group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-5 *:rounded-lg *:px-2 *:xl:px-4 *:py-1 *:xl:py-2">
                    <div className="text-base md:text-lg font-bold px-2 xl:px-4 py-1 xl:py-2 text-slate-900">On Demand Apps</div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/food-delivery-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Food Delivery App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/grocery-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Grocery Delivery App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/taxi-app-development-company.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Taxi Booking App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/home-service-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Home Services App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/laundry-services-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Laundry App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/medicine-delivery-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Medicine Delivery App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/fuel-delivery-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Fuel Delivery App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/doctor-on-demand-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Doctor App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/alcohol-delivery-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Alcohol Delivery App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/car-wash-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Car Wash App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col p-2 rounded-[20px] bg-white xl:p-4 overflow-hidden  group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-5 *:rounded-lg *:px-2 *:xl:px-4 *:py-1 *:xl:py-2">
                    <div className="text-base md:text-lg font-bold px-2 xl:px-4 py-1 xl:py-2 text-slate-900">Ready to Use Solutions</div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/school-management-software-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          School Management System
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/college-management-software-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          College Management System
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/university-management-software-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          University Management System
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/institute-management-software-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Institute Management System
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/mlm-software-development-company.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          MLM Software 
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/online-exam-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Online Exam App 
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hospital-management-software.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hospital Management System 
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href="/inventory-management-software" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Inventory Management Softwrae
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/nidhi-company-software.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Nidhi Software
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href="/customer-relationship-management" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          CRM Software
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col p-2 rounded-[20px] bg-white xl:p-4 overflow-hidden  group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-5 *:rounded-lg *:px-2 *:xl:px-4 *:py-1 *:xl:py-2">
                    <div className="text-base md:text-lg font-bold px-2 xl:px-4 py-1 xl:py-2 text-slate-900">Trending Apps</div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/healthcare-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Healthcare App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/diet-and-nutrition-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Diet and Nutrition App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/fitness-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Fitness App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/elearning-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Elearning App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/ott-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          OTT Platform App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/live-streaming-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Live Streaming App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/ar-vr-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          AR/VR App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/dating-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Dating App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/event-tickets-booking-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Event &amp; Ticket Booking App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/cryptocurrency-app-development.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Cryptocurrency App
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
                {/* <div className="group/dd">
              <button type="button" className="flex items-center gap-x-[2px] text-xs font-semibold leading-6 text-gray-50 hover:text-gray-300 duration-200 uppercase group-hover/dd:before:absolute group-hover/dd:before:-bottom-0 group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]" aria-expanded="false">
                Hire  <span className="max-xl:hidden">&nbsp;Developers</span>
                <svg className={` h-5 w-5 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)] text-gray-400`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute left-0 right-0 w-full top-[132px] group-hover/ns:top-24 z-10 overflow-hidden bg-transparentgroup-hover/ns:rounded-t-none  rounded-[20px] transition ease-out duration-200 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)] group-hover/dd:[transform:rotateX(0deg)]">
                <div className="flex flex-wrap w-full gap-4 p-2 xl:p-4 items-stretch text-xs xl:text-sm xl:leading-6">
                  <div className="grid grid-cols-4 w-full flex-col p-2 xl:p-4 overflow-hidden  group-[]/ns:to-sky-950 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5 *:relative *:flex *:items-center *:gap-x-5 *:rounded-lg *:px-2 *:xl:px-4 *:py-1 *:xl:py-2">
                    <div className="text-base md:text-lg font-bold px-2 xl:px-4 py-1 xl:py-2 text-slate-900">Hire Developers</div>
                    <div className="group/db hover:bg-gray-600/30 text-sky-300">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-2.5 xl:h-3 w-2.5 xl:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-mobile-app-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Mobile App Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-android-app-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Android App Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-ios-app-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire iOS App Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-react-native-app-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire React Native App Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-flutter-app-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Flutter App Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-php-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire PHP Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-python-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Python Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-web-designers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Website Designers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-mern-stack-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire MERN Stack Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-ui-ux-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire UI / UX Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-web-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Website Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Software Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-reactjs-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire React JS Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-full-stack-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Full Stack Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-java-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Java Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-angular-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Angularjs Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-mean-stack-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire MEAN Stack Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/db hover:bg-gray-600/30">
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 group-hover/db:bg-gray-950/90">
                        <svg className="h-1.5 xl:h-2 w-1.5 xl:w-2 group-hover/db:h-2.5 xl:group-hover/db:h-3 group-hover/db:w-2.5 xl:group-hover/db:w-3 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                      </div>
                      <div className="flex-auto">
                        <Link href=".com/hire-nodejs-developers.php" className="block font-semibold opacity-80 hover:opacity-90 duration-200 hoverLink text-slate-900">
                          Hire Node.js Developers
                          <span className="absolute inset-0 z-[1]"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

                <Link
                  href=".com/portfolio.php"
                  className={`text-xs font-semibold leading-6 text-gray-50 hover:text-gray-300 duration-200 uppercase `}
                >
                  Work
                </Link>
                <Link
                  href="/contact-us"
                  className={`text-xs font-semibold leading-6 text-gray-50 hover:text-gray-300 duration-200 uppercase `}
                >
                  Contact Us
                </Link>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <button className="px-4 rounded-full text-sm text-white flex items-center gap-2 font-semibold py-3 border-white border-2 w-max mx-auto before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:rounded-full before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                  <span>Ask for a Quote</span>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="200px"
                      className="w-5 h-5"
                      width="200px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <input
        type="checkbox"
        className="peer/sideToggle hidden"
        name="sideToggle"
        id="sideToggle"
      />
      <label
        htmlFor="sideToggle"
        className="fixed inset-0 -z-[1011] backdrop-blur-xl bg-sky-950/70 peer-checked/sideToggle:z-[1010] peer-checked/sideToggle:opacity-100 opacity-0 duration-100"
      ></label>
      <div className="fixed flex flex-col h-screen inset-y-0 right-0 z-[1011] w-full overflow-y-auto bg-theme1  text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 peer-checked/sideToggle:translate-x-0 peer-checked/sideToggle:opacity-100 translate-x-full opacity-0 duration-300">
        <div className="flex items-center justify-between">
          <Link href=".com/" className="-ml-1.5">
            <Image
              className="h-7 w-auto"
              width="1000"
              height="1000"
              src="/img/logo.png"
              alt="Twin Power Logo "
            />
          </Link>
          <label
            htmlFor="sideToggle"
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </label>
        </div>
        <div className="mt-6 flow-root flex-fill overflow-auto -mr-4 pr-4">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col w-full gap-y-5">
                <Link
                    href="/"
                    className="text-sm font-bold text-gray-50"
                  >
                    Home
                  </Link>
                  <div className="relative flex flex-col gap-y-3">
                    <input
                      className="peer/mm hidden"
                      type="checkbox"
                      name="mmMenu"
                      id="mmCompany"
                    />
                    <label
                      htmlFor="mmCompany"
                      className="flex items-center gap-x-[2px] text-sm font-bold text-gray-50"
                    >
                      Company
                      <svg
                        className="h-5 w-5 ml-auto flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </label>
                    <div className="w-full peer-checked/mm:block hidden">
                      <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                        <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                          <div>
                            <div className="flex h-4 w-4 flex-none">
                              <svg
                                className="h-3 w-3 opacity-90"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                ></path>
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 16v.01"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/about-us"
                                className="block font-semibold opacity-80"
                              >
                                About Us
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-4 w-4 flex-none">
                              <svg
                                className="h-3 w-3 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"></path>
                                <path d="M12 15l1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/testimonial"
                                className="block font-semibold opacity-80"
                              >
                                Testimonials
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-4 w-4 flex-none">
                              <svg
                                className="h-3 w-3 opacity-90"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/case-study"
                                className="block font-semibold opacity-80"
                              >
                                Case Study
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          {/* <div>
                            <div className="flex h-4 w-4 flex-none">
                              <svg
                                className="h-3 w-3 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/disclaimer.php"
                                className="block font-semibold opacity-80"
                              >
                                Disclaimer
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div> */}
                          {/* <div>
                            <div className="flex h-4 w-4 flex-none">
                              <svg
                                className="h-3 w-3 opacity-90"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                ></path>
                                <path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                                <path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                                <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"></path>
                                <path d="M12 9l0 3"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/sitemap.html"
                                className="block font-semibold opacity-80"
                              >
                                Sitemap
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-y-3">
                    <input
                      className="peer/mm hidden"
                      type="checkbox"
                      name="mmMenu"
                      id="mmServices"
                    />
                    <label
                      htmlFor="mmServices"
                      className="flex items-center gap-x-[2px] text-sm font-bold text-gray-50"
                    >
                      Services
                      <svg
                        className="h-5 w-5 ml-auto flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </label>
                    <div className="w-full peer-checked/mm:block hidden">
                      <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                        <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                          <div className="text-sm font-bold py-1 block">
                            Mobile App
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/mobile-app-development "
                                className="block font-semibold opacity-80"
                              >
                                Mobile App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/android-application-development"
                                className="block font-semibold opacity-80"
                              >
                                Android App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/ios-app-development"
                                className="block font-semibold opacity-80"
                              >
                                iOS App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/cross-platform"
                                className="block font-semibold opacity-80"
                              >
                                Cross-Platform App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/flutter-app-development"
                                className="block font-semibold opacity-80"
                              >
                                Flutter App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/react-native-app-development"
                                className="block font-semibold opacity-80"
                              >
                                React Native App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                          <div className="text-sm font-bold py-1 block">
                            Web
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/web-development"
                                className="block font-semibold opacity-80"
                              >
                                Web Development
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/website-design"
                                className="block font-semibold opacity-80"
                              >
                                Website Design
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/website-redesigning"
                                className="block font-semibold opacity-80"
                              >
                                Website Redesign
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/responsive-web-designing"
                                className="block font-semibold opacity-80"
                              >
                                Responsive Design
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                          <div className="text-sm font-bold py-1 block">
                            Software
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/bespoke-software-development"
                                className="block font-semibold opacity-80"
                              >
                                Bespoke Software
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/saas-software-development"
                                className="block font-semibold opacity-80"
                              >
                                SaaS Software
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/inventory-management-software"
                                className="block font-semibold opacity-80"
                              >
                                Inventory Management
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/gym-management-software"
                                className="block font-semibold opacity-80"
                              >
                                GYM Software
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/customer-relationship-management"
                                className="block font-semibold opacity-80"
                              >
                                CRM Software
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                          <div className="text-sm font-bold py-1 block">
                            Sports
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/fantasy-sports-app-development"
                                className="block font-semibold opacity-80"
                              >
                                Fantasy Sports App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/fantasy-cricket-app-development"
                                className="block font-semibold opacity-80"
                              >
                                Fantasy Cricket App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/fantasy-football-app-development"
                                className="block font-semibold opacity-80"
                              >
                                Fantasy Football App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/fantasy-kabaddi-app-development"
                                className="block font-semibold opacity-80"
                              >
                                Fantasy Kabaddi App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/sports-betting-app-development"
                                className="block font-semibold opacity-80"
                              >
                                Sports Betting App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/casino-game-app-development"
                                className="block font-semibold opacity-80"
                              >
                                Casino App
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                          <div className="text-sm font-bold py-1 block">
                            eCommerce
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href="/ecommerce-development"
                                className="block font-semibold opacity-80"
                              >
                                eCommerce Development
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="relative flex flex-col gap-y-3">
                <input className="peer/mm hidden" type="checkbox" name="mmMenu" id="mmTrending"/>
                <label htmlFor="mmTrending" className="flex items-center gap-x-[2px] text-sm font-bold text-gray-50">
                  Trending Solutions
                  <svg className="h-5 w-5 ml-auto flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                  </svg>
                </label>
                <div className="w-full peer-checked/mm:block hidden">
                  <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                    <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                      <div className="text-sm font-bold py-1 block">On Demand Apps</div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/food-delivery-app-development.php" className="block font-semibold opacity-80">
                            Food Delivery App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/grocery-app-development.php" className="block font-semibold opacity-80">
                            Grocery Delivery App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/taxi-app-development-company.php" className="block font-semibold opacity-80">
                            Taxi Booking App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/home-service-app-development.php" className="block font-semibold opacity-80">
                            Home Services App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/laundry-services-app-development.php" className="block font-semibold opacity-80">
                            Laundry App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/medicine-delivery-app-development.php" className="block font-semibold opacity-80">
                            Medicine Delivery App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/fuel-delivery-app-development.php" className="block font-semibold opacity-80">
                            Fuel Delivery App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/doctor-on-demand-app-development.php" className="block font-semibold opacity-80">
                            Doctor App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/alcohol-delivery-app-development.php" className="block font-semibold opacity-80">
                            Alcohol Delivery App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/car-wash-app-development.php" className="block font-semibold opacity-80">
                            Car Wash App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                      <div className="text-sm font-bold py-1 block">Ready to Use Solutions</div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/school-management-software-development.php" className="block font-semibold opacity-80">
                            School Management System
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/college-management-software-development.php" className="block font-semibold opacity-80">
                            College Management System
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/university-management-software-development.php" className="block font-semibold opacity-80">
                            University Management System
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/institute-management-software-development.php" className="block font-semibold opacity-80">
                            Institute Management System
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/mlm-software-development-company.php" className="block font-semibold opacity-80">
                            MLM Software
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/online-exam-app-development.php" className="block font-semibold opacity-80">
                            Online Exam App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/hospital-management-software.php" className="block font-semibold opacity-80">
                            Hospital Management System
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href="/inventory-management-software" className="block font-semibold opacity-80">
                            Inventory Management Softwrae
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/nidhi-company-software.php" className="block font-semibold opacity-80">
                            Nidhi Software
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href="/customer-relationship-management" className="block font-semibold opacity-80">
                            CRM Software
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                      <div className="text-sm font-bold py-1 block">Trending Apps</div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/healthcare-app-development.php" className="block font-semibold opacity-80">
                            Healthcare App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/diet-and-nutrition-app-development.php" className="block font-semibold opacity-80">
                            Diet and Nutrition App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/fitness-app-development.php" className="block font-semibold opacity-80">
                            Fitness App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/elearning-app-development.php" className="block font-semibold opacity-80">
                            Elearning App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/ott-app-development.php" className="block font-semibold opacity-80">
                            OTT Platform App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/live-streaming-app-development.php" className="block font-semibold opacity-80">
                            Live Streaming App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/ar-vr-app-development.php" className="block font-semibold opacity-80">
                            AR/VR App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/dating-app-development.php" className="block font-semibold opacity-80">
                            Dating App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/event-tickets-booking-app-development.php" className="block font-semibold opacity-80">
                            Event &amp; Ticket Booking App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex h-1.5 w-1.5 flex-none">
                          <svg className="h-1.5 w-1.5 opacity-90" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>
                        <div className="flex-auto">
                          <Link href=".com/cryptocurrency-app-development.php" className="block font-semibold opacity-80">
                            Cryptocurrency App
                            <span className="absolute inset-0 z-[1]"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                  {/* <div className="relative flex flex-col gap-y-3">
                    <input
                      className="peer/mm hidden"
                      type="checkbox"
                      name="mmMenu"
                      id="mmHire"
                    />
                    <label
                      htmlFor="mmHire"
                      className="flex items-center gap-x-[2px] text-sm font-bold text-gray-50"
                    >
                      Hire Developers
                      <svg
                        className="h-5 w-5 ml-auto flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </label>
                    <div className="w-full peer-checked/mm:block hidden">
                      <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                        <div className="w-full text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1 *:relative">
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-mobile-app-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Mobile App Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-android-app-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Android App Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-ios-app-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire iOS App Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-react-native-app-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire React Native App Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-flutter-app-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Flutter App Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-php-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire PHP Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-python-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Python Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-web-designers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Website Designers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-mern-stack-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire MERN Stack Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-ui-ux-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire UI / UX Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-web-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Website Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/"
                                className="block font-semibold opacity-80"
                              >
                                Hire Software Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-reactjs-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire React JS Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-full-stack-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Full Stack Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-java-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Java Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-angular-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Angularjs Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-mean-stack-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire MEAN Stack Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="flex h-1.5 w-1.5 flex-none">
                              <svg
                                className="h-1.5 w-1.5 opacity-90"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                              </svg>
                            </div>
                            <div className="flex-auto">
                              <Link
                                href=".com/hire-nodejs-developers.php"
                                className="block font-semibold opacity-80"
                              >
                                Hire Node.js Developers
                                <span className="absolute inset-0 z-[1]"></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <Link
                    href=".com/portfolio.php"
                    className="text-sm font-bold text-gray-50"
                  >
                    Work
                  </Link>
                  <Link
                    href="/contact-us"
                    className="text-sm font-bold text-gray-50"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="text-sm font-bold text-gray-50"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
