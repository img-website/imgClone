import React from 'react'
import Image from "next/image";
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Cta from '@/components/cta/Cta';
import PortfolioSection from '@/components/portfolio/portfolio';
import Blog from '@/components/blog/Blog';
import Form from '@/components/contactForm/Form';

function responsiveWebDesigning() {
    return (
        <>
            <Header />
            {/* hero */}
            <div className="relative">
                <div className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-tr  after:via-theme2/80 after:to-theme1/70 after:from-theme1/70 after:backdrop-blur-sm">
                    <Image src="/img/website-redesigning-1519w.webp" width={'1000'} height={'1000'} alt="" className='h-full w-full object-cover overflow-hidden object-top' />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
                    <div className="w-full">
                        <div className="max-w-5xl grow-0 text-center mx-auto text-balance">
                            <div className="font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-6xl/tight tracking-[-0.04em]">
                                <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                                    Responsive Website Design
                                </span>
                            </div>
                            <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
                                Responsive web design has become a crucial component for anyone maintaining a digital presence. As the use of smartphones, tablets, and other mobile devices continues to rise, an increasing number of users are accessing websites on smaller screens.
                            </div>
                            <div className=" flex justify-center w-full mt-6">
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
            {/* hero */}

            {/* About Start */}
            <div className="">
                <div className="relative bg-slate-50 py-6 md:py-8 lg:py-16 overflow-hidden ">
                    <div className="mx-auto max-w-7xl flex px-6 lg:px-8 w-full">
                        <div className="absolute order-2 inset-0 size-full pointer-events-none overflow-hidden">
                        </div>
                        <div className="
                    mx-auto max-w-container gap-7 flex max-lg:flex-col group-[]/flip:flex-row-reverse group-[]/flip:max-lg:flex-col max-lg:gap-4  order-1

                    [&>*:first-child]:[&:has(.content1-img)]:lg:block 
                    [&:first-child]:hidden [&>*:last-child]:[&:has(.content1-img)]:max-w-3xl 
                    [&>*:last-child]:[&:has(.content1-img)]:lg:w-3xl
                ">
                            <div className="relative z-10 order-2 pointer-events-none h-auto lg:sticky lg:top-24 self-start mx-auto">
                                <div className="flex [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)]">
                                    <div className="relative flex-shrink-0 p-4 w-full">
                                        <div className="relative z-10 overflow-hidden *:rounded-[20px] [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)] [&~*]:[&:has(.mask)]:lg:hidden">
                                            <Image className="object-cover !w-[1216px] !h-auto md:mt-16 lg:mt-0 " width={'2000'} height={'2000'} src="https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg" alt="image3" />


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="relative z-20 order-1 mx-auto lg:mx-0 lg:pr-4 md:py-6 md:md:py-8 h-auto md:sticky md:top-24 self-start shrink-1 grow-0 basis-auto w-full">
                                <p className="
                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                        first:*:font-normal

                        last:*:font-bold last:*:text-theme2
                    ">
                                    <span className="font-normal">Why Your Business Requires a </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2">Responsive Website</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                    With the significant rise in smartphone users over the past few years, the market is flooded with a variety of smartphones, each featuring different screen sizes. Additionally, desktop screens come in numerous variations as well. Designing separate websites for each screen size is simply not feasible. TwinPower Software has a skilled and experienced team ready to create responsive websites for your business that adapt seamlessly to all screen sizes. This ensures that your customers won't encounter accessibility issues, keeping your business strong and competitive. Opting for a responsive website is a wise decision for the next generation.
                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                    Responsive web design has become a vital asset for anyone with an online presence. As smartphones, tablets, and other mobile devices become more prevalent, an increasing number of users are accessing websites on smaller screens. It’s crucial for your business's website to be adaptable and responsive across various screen sizes and types. TwinPower Software specializes in designing responsive websites tailored to meet the needs of any business.
                                </p>

                                <div className="mt-8 flex gap-4">
                                    <button className="px-4 text-sm text-[white] bg-theme1 rounded-full inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max hover:bg-theme1/80 duration-300">
                                        <span>Read More</span>
                                        <span>
                                            <svg className='w-5 h-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h9v2h-9zM13 15h9v2h-9zM16 11h6v2h-6zM13 12 8 7v4H2v2h6v4z"></path></svg>
                                        </span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Ends */}

            {/* benifits section start */}
            <div class="relative isolate select-none py-6 md:py-8 lg:py-16">
                <div class="overflow-hidden">

                    <div class="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
                        <p class=" max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme4
                "><span>Benefits Of A </span>
                            <span> Responsive Website Include</span></p>
                        <div class="md:text-base text-sm text-center text-white opacity-70 mt-3 mb-lg-1 select-none">
                            Responsive Web design has become an essential tool for anyone with a digital presence. With the growth of smartphones, tablets and other mobile computing devices, more people are using smaller-screens to view web pages.
                        </div>
                    </div>
                </div>
                <div class="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 relative">
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-sky-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-sky-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-sky-400">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"></path><path d="M20 21l2 -2l-2 -2"></path><path d="M17 17l-2 2l2 2"></path><path d="M11 4h2"></path><path d="M12 17v.01"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-sky-400  px-2 py-1 rounded-lg">
                                More Mobile Traffic
                            </div>
                            <div class="absolute w-6 h-28 bg-sky-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-sky-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-sky-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-cyan-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-cyan-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-cyan-400">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6.5"></path><path d="M11 4h2"></path><path d="M12 17v.01"></path><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19.001 15.5v1.5"></path><path d="M19.001 21v1.5"></path><path d="M22.032 17.25l-1.299 .75"></path><path d="M17.27 20l-1.3 .75"></path><path d="M15.97 17.25l1.3 .75"></path><path d="M20.733 20l1.3 .75"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-cyan-400  px-2 py-1 rounded-lg">
                                Faster Mobile Development at Lower Costs
                            </div>
                            <div class="absolute w-6 h-28 bg-cyan-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-cyan-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-cyan-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-blue-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-blue-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-blue-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.773 3.485l-.78-.184-2.108 2.096-1.194-1.216 2.056-2.157-.18-.792a4.42 4.42 0 0 0-1.347-.228 3.64 3.64 0 0 0-1.457.28 3.824 3.824 0 0 0-1.186.84 3.736 3.736 0 0 0-.875 1.265 3.938 3.938 0 0 0 0 2.966 335.341 335.341 0 0 0-6.173 6.234c-.21.275-.31.618-.284.963a1.403 1.403 0 0 0 .464.967c.124.135.272.247.437.328.17.075.353.118.538.127.316-.006.619-.126.854-.337 1.548-1.457 4.514-4.45 6.199-6.204.457.194.948.294 1.444.293a3.736 3.736 0 0 0 2.677-1.133 3.885 3.885 0 0 0 1.111-2.73 4.211 4.211 0 0 0-.196-1.378zM2.933 13.928a.31.31 0 0 1-.135.07.437.437 0 0 1-.149 0 .346.346 0 0 1-.144-.057.336.336 0 0 1-.114-.11c-.14-.143-.271-.415-.14-.568 1.37-1.457 4.191-4.305 5.955-6.046.1.132.21.258.328.376.118.123.245.237.38.341-1.706 1.75-4.488 4.564-5.98 5.994zm11.118-9.065c.002.765-.296 1.5-.832 2.048a2.861 2.861 0 0 1-4.007 0 2.992 2.992 0 0 1-.635-3.137A2.748 2.748 0 0 1 10.14 2.18a2.76 2.76 0 0 1 1.072-.214h.254L9.649 3.839v.696l1.895 1.886h.66l1.847-1.816v.258zM3.24 6.688h1.531l.705.717.678-.674-.665-.678V6.01l.057-1.649-.22-.437-2.86-1.882-.591.066-.831.849-.066.599 1.838 2.918.424.215zm-.945-3.632L4.609 4.58 4.57 5.703H3.494L2.002 3.341l.293-.285zm7.105 6.96l.674-.673 3.106 3.185a1.479 1.479 0 0 1 0 2.039 1.404 1.404 0 0 1-1.549.315 1.31 1.31 0 0 1-.437-.315l-3.142-3.203.679-.678 3.132 3.194a.402.402 0 0 0 .153.105.477.477 0 0 0 .359 0 .403.403 0 0 0 .153-.105.436.436 0 0 0 .1-.153.525.525 0 0 0 .036-.184.547.547 0 0 0-.035-.184.436.436 0 0 0-.1-.153L9.4 10.016z"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-blue-400  px-2 py-1 rounded-lg">
                                Lower Maintenance Needs
                            </div>
                            <div class="absolute w-6 h-28 bg-blue-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-blue-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-blue-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-indigo-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-indigo-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-indigo-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M128 416h256v48H128zM256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-3 0-6 .4-8.8 1.2l-66.7-48.7-4 3.5 48.9 66.7c-.9 2.9-1.4 6-1.4 9.3 0 17.7 14.3 32 32 32z"></path><path d="M256 48C141.1 48 48 141.1 48 256c0 48.3 16.5 92.7 44.1 128h58.8l4-4 22.1-22.1-22.9-22.9-22.1 22c-19.9-24.3-32.1-54-35.2-85H128v-32H96.8c3.1-31 15.3-60.7 35.2-85l22.1 22 22.9-22.9-22-22.1c24.3-19.9 54-32.1 85-35.2V128h32V96.8c31 3.1 60.7 15.3 85 35.2l-22 22.1 22.9 22.9 22.1-22c19.9 24.3 32.1 54 35.2 85H384v32h31.2c-3.1 31-15.3 60.7-35.2 85l-22.1-22-22.9 22.9 22.1 22.1 4 4h58.8c27.6-35.3 44.1-79.7 44.1-128 0-114.9-93.1-208-208-208z"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-indigo-400  px-2 py-1 rounded-lg">
                                Faster Webpages
                            </div>
                            <div class="absolute w-6 h-28 bg-indigo-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-indigo-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-indigo-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-violet-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-violet-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-violet-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"></path><path d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-violet-400  px-2 py-1 rounded-lg">
                                Improved SEO
                            </div>
                            <div class="absolute w-6 h-28 bg-violet-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-violet-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-violet-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-purple-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-purple-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-purple-400">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path><path d="M11 4h2"></path><path d="M12 17v.01"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-purple-400  px-2 py-1 rounded-lg">
                                Easier Analytics Reporting
                            </div>
                            <div class="absolute w-6 h-28 bg-purple-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-purple-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-purple-400"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* benifits section Ends */}

            {/* {/ strategy /} */}
            <div className="bg-theme1 relative overflow-hidden py-6 md:py-8 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  z-40 relative">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center text-white">
                        <span className="font-normal">Key Features of a </span>
                        <span className="font-bold text-white"> Responsive Website </span>
                    </p>
                    <div className="md:text-base text-sm text-center text-white opacity-70 mt-3 mb-lg-1">
                    We create high-quality web applications for a variety of industries and clients around the world. Our focus is on gaining a comprehensive understanding of your sector and target market before we start the development phase.
                    </div>

                    <div className="flex flex-col  pt-4">
                        <div className="flex flex-wrap max-sm:gap-x-2 gap-5 py-5 justify-center text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto">
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Memory-Friendly UX
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Mobile/Tab Compatible
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Call To Action (CTA)
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Visual Hierarchy
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                High Performance
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Browser Compatible
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                SEO Friendly Structure
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Cutomizable
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Fully Secure
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {/ strategy-end /} */}

            {/* cta */}
            <Cta />
            <PortfolioSection />
            <Blog />
            <Form />

            <Footer />
        </>
    )
}

export default responsiveWebDesigning
