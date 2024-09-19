import React from "react";
import Form from "@/components/contactForm/Form";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";


function blog() {
    return (
        <div className="text-theme2">
            <Header />
            {/* hero section start */}
            <div id="heroColor" data-color="blue">
                <span className="hidden before:from-blue-950 before:via-blue-900 before:to-blue-800 from-blue-950 via-blue-900 to-blue-800 shadow-blue-950 text-blue-700">
                    <span className="via-blue-500 from-blue-100 to-blue-100 *:*:text-blue-400"></span>
                    <span className="bg-blue-900 hover:bg-blue-700"></span>
                </span>
                <div className="flex w-full relative bg-slate-50 select-none">
                    <div className="size-full relative !z-10">
                        <div className="colorApply1 flex size-full items-center justify-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply after:absolute after:rounded-b-2xl after:inset-0 after:bg-repeat shadow-blue-950 before:from-blue-950 before:via-blue-900 before:to-blue-800">
                            <span className="colorApply2 absolute inset-0 bg-cover bg-right opacity-50 rounded-b-2xl bg-gradient-to-r mix-blend-multiply shadow-blue-950 from-blue-950 via-blue-900 to-blue-800"></span>
                            <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]" width="1519" height="812" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?cs=tinysrgb&amp;fit=crop&amp;q=80&amp;w=2048&amp;h=720" sizes="100vw" alt="hero1"/>

                                <div className="relative overflow-hidden z-10 text-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full lg:pt-40 sm:pt-32 pt-28 pb-12">
                                    <div className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight font-light text-white">

                                        <span className="colorApply3 font-bold block text-balance pb-1 shadow-blue-950 via-blue-500">    <div className="w-full mx-auto max-w-2xl">
                                            <label for="searchBlog" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                                            <form className="relative searchBlogForm" novalidate="">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none max-md:hidden">
                                                    <svg className="size-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                                                    </svg>
                                                </div>
                                                <input type="search" value="" id="searchBlog" className="block w-full p-4 md:ps-10 pe-24 text-sm text-gray-900 border border-gray-300 rounded-lg rounded-br-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search App, Web, Fantasy..." required=""/>
                                                    <div className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg rounded-br-none text-sm px-4 py-2">
                                                        <svg className="size-4 text-gray-100 md:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                                                        </svg>
                                                        <span className="max-md:hidden">Search</span>
                                                    </div>
                                            </form>
                                        </div>
                                        </span>
                                    </div>
                                    <div className="max-md:text-sm text-base text-white pt-5 text-balance mx-auto w-10/12 empty:hidden"></div>
                                    <div className="flex flex-col pt-4">
                                        <div className="flex flex-wrap justify-center gap-2 py-5 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                            <a href="javascript:;" className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin !rounded-full overflow-hidden !size-2.5" stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                                MOBILE APP
                                            </a>
                                            <a href="javascript:;" className="group/db">
                                                <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin !rounded-full overflow-hidden !size-2.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z">
                                                    </path>
                                                </svg>
                                                FANTASY SPORTS
                                            </a>
                                            <a href="javascript:;" className="group/db">
                                                <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin !rounded-full overflow-hidden !size-2.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z">
                                                    </path>
                                                </svg>
                                                ON DEMAND
                                            </a>
                                            <a href="javascript:;" className="group/db">
                                                <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin !rounded-full overflow-hidden !size-2.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z">
                                                    </path>
                                                </svg>
                                                ECOMMERCE
                                            </a>
                                            <a href="javascript:;" className="group/db">
                                                <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin !rounded-full overflow-hidden !size-2.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z">
                                                    </path>
                                                </svg>
                                                SOFTWARE
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex gap-4 justify-center empty:hidden"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero section Ends */}





            <Form />
            <Footer />
        </div>
    )
}

export default blog;
