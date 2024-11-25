"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Cta from "@/components/cta/Cta";
import Cta2 from "@/components/cta2/Cta2";
import PortfolioSection from "@/components/portfolio/portfolio";
import Blog from "@/components/blog/Blog";
import Head from "next/head";
import Accordion from "@/components/accordion/Accordion";
import Form from "@/components/contactForm/Form";
import Gallery from "@/components/gallery/Gallery";

function shopifyEcommerceDevelopment() {
    const accordionItems = [
        {
            title:
                "Which is the Best Grocery Delivery App Development Company?",
            content: "While numerous grocery delivery app development companies exist, Twin Power Software stands out as the top choice. With years of expertise in crafting grocery delivery app solutions, we've played a pivotal role in elevating various businesses to new heights. Join us to become the next market leader in the grocery industry."
        },
        {
            title:
                "How Much Does Grocery Delivery App Development Services Cost?",
            content: "Determining the precise cost of developing an on-demand grocery delivery app is challenging. For accurate estimates and reliable development services, turn to Twin Power Software. Our experts will analyze your requirements and deliver the best solutions."
        },
        {
            title:
                "How Can A Grocery Delivery App Benefit My Business?",
            content: "A grocery delivery app enhances customer convenience, boosts sales, and expands your market reach. We offer a seamless online shopping experience to businesses worldwide."
        },
        {
            title:
                "Can I Customize the App According to My Business Needs?",
            content: "Yes, our grocery delivery app development services offer customization options. We tailor the app as per your specific business requirement. Apps developed by us ensure a unique and branded experience."
        },
        {
            title:
                "What Support & Maintenance Services Do You Provide Post-launch?",
            content: "We offer ongoing mobile app support and maintenance to address any issues, updates, or enhancements. Our goal is to ensure your grocery delivery app operates seamlessly and stays current with evolving market trends."
        },
    ];

    return (
        <>
            <Header />
            {/* hero */}
            <div id="heroColor4" data-color="indigo">
                <span className="hidden before:from-theme1 before:via-theme1/50 before:to-theme1/80 from-theme1 via-theme1/50 to-theme1/80  text-indigo-700">
                    <span className="via-indigo-500 from-indigo-100 to-indigo-100 *:*:text-indigo-400"></span>
                    <span className="bg-theme1/50 hover:bg-indigo-700"></span>
                </span>
                <div className="flex w-full relative bg-slate-50  lg:h-dvh min-h-[650px]">
                    <div className="size-full relative !z-10">
                        <div className="colorApply1 flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply after:absolute after:rounded-b-2xl after:inset-0 after:bg-repeat   before:from-theme1 before:via-theme1/50 before:to-theme1/80">
                            <span className="colorApply2 absolute inset-0 bg-cover bg-right opacity-50 rounded-b-2xl bg-gradient-to-r mix-blend-multiply  from-theme1 via-theme1/50 to-theme1/80"></span>
                            <Image
                                className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]"
                                width="1519"
                                height="812"
                                loading="lazy"
                                src="/img/food-delivery-1519w.webp"
                                alt="Transform Your Ideas into Reality with Our Mobile App Development Expertise.
"
                            />

                            <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between">
                                <div className="xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center">
                                    <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                        <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                                            Shopify Development Services
                                        </span>
                                    </div>
                                    <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto">
                                        Enhance and elevate eCommerce experiences for your customers worldwide with our tailored Shopify development services. Our Shopify eCommerce solutions enable your business—whether a startup, SME, or enterprise—to compete with global eCommerce leaders, driving growth and success.
                                    </div>
                                </div>
                                <div className="xl:w-1/3 lg:w-1/2 max-lg:mx-auto">
                                    <div className="colorApply4 w-full px-5 md:py-10 py-8 md:rounded-2xl rounded-xl  shadow-xl bg-white backdrop-blur-lg relative gap-6 flex flex-col before:absolute before:inset-4 md:hover:before:inset-1 before:duration-200 before:ease-in before:bg-white/5 before:backdrop-blur-2xl before:rounded-xl before: before:z-0 before:m-auto *:w-full *:z-10 ">
                                        <div>
                                            <div className="colorApply5 size-16 rounded-full mx-auto shadow-md shadow-white/5 bg-theme1  text-white">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-width="1.5"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="size-full"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="lg:text-xl md:text-lg text-base text-theme1 text-center text-balance font-semibold">
                                            Get Top-Notch, Innovative Mobile App Solutions from Us.
                                        </div>
                                        <div className=" flex justify-center w-full">
                                            <button className="px-4 text-sm text-[white] rounded-full bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300">
                                                <span>Schedule a consultation</span>
                                                <span>
                                                    <svg
                                                        className="size-5"
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        stroke-width="0"
                                                        viewBox="0 0 1024 1024"
                                                        height="200px"
                                                        width="200px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>

                                        <div className="md:text-sm text-xs text-theme1 text-center text-balance">
                                            Complete the form below with your project specifications.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero */}


            {/* About Start */}
            <div className="relative bg-slate-50 py-6 md:py-8 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
                    <div className="absolute inset-0 size-full pointer-events-none overflow-hidden">
                        <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block pointer-events-none"></div>
                    </div>
                    <div
                        className="
                mx-auto max-w-container gap-7 flex max-lg:flex-col group-[]/flip:flex-row-reverse group-[]/flip:max-lg:flex-col max-lg:gap-4 

                [&>*:first-child]:[&:has(.content1-img)]:lg:block 
                [&:first-child]:hidden [&>*:last-child]:[&:has(.content1-img)]:max-w-3xl 
                [&>*:last-child]:[&:has(.content1-img)]:lg:w-3xl
            "
                    >
                        <div className="relative z-10 pointer-events-none h-auto lg:sticky lg:top-24 self-start mx-auto">
                            <div className="flex [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)]">
                                <div className="relative flex-shrink-0 p-4 w-full">
                                    <div className="relative z-10 overflow-hidden *:rounded-xl [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)] [&~*]:[&:has(.mask)]:lg:hidden">
                                        <Image
                                            className="object-cover w-full h-auto md:w-[336px] content1-img"
                                            width={"384"}
                                            height={"384"}
                                            src="/img/grocery-delivery-app.webp"
                                            alt="image3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-20 mx-auto lg:mx-0 lg:pr-4 md:py-6 md:md:py-8 h-auto md:sticky md:top-24 self-start shrink-1 grow-0 basis-auto w-full">
                            <p
                                className="
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme1
                "
                            >
                                <span className="font-normal">
                                    Provide Exceptional Shopping
                                </span>{" "}
                                <span className="font-bold text-theme2">
                                    Experiences with Our Shopify Services
                                </span>
                            </p>
                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                Looking for online grocery delivery app development solutions? Your search ends here! At Twin Power Software, we provide comprehensive door-to-door grocery delivery app solutions, making us a leading on-demand grocery delivery app development firm. Our services are user-friendly and aligned with the latest industry trends, ensuring the best experience for both businesses and consumers.
                            </p>
                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                Our skilled team of grocery app developers can create a top-notch grocery ordering app to help you grow your customer base daily. So, why wait? Choose Twin Power Software, the best grocery delivery app development company, and let us redefine your grocery delivery experience. Your convenience is our priority. Share your requirements with us, and let our expert developers craft a solution similar to Blinkit or BigBasket, tailored to your needs.
                            </p>

                            <div className="mt-8 flex gap-4">
                                <button className="px-4 text-sm text-theme1 inline-flex items-center gap-2 font-semibold rounded-full py-3 border-theme1 overflow-hidden border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                    <span>View More</span>
                                    <span>
                                        <svg
                                            className="size-5"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="200px"
                                            width="200px"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
                </div>
            </div>
            {/* About Ends */}

            <Cta />

            {/* flow-chart */}
            <div className="relative  py-6 md:py-8 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">

                    <div className="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">

                        <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                            <p className="
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                ">
                                <span className="text-white">Shopify Development </span> <span> Services We Provide</span>

                            </p>
                            <p className="md:text-base text-sm text-black/70 mt-3 text-balance text-center">
                                We provide comprehensive Shopify services that enhance functionality, track performance, optimize sales channels, manage inventory, and much more.
                            </p>
                        </div>

                        <div className="w-full grid md:grid-cols-3 gap-8">
                       

                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-sky-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl before:absolute before:h-12 before:w-4 before:bg-sky-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-sky-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg w-full text-base font-medium leading-6 text-sky-500 ">
                                         Shopify eCommerce Development Services
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Our skilled developers have 6 years of experience in building sales-driven online stores running on Shopify. Shopify is easy and lets you truly focus on your business and not worry about the tech part. Leverage on our team to solve all tech challenges. We provide a wide range of custom Shopify design and development services for businesses in various niches.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-sky-500 rounded-full border-t-4 border-sky-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-sky-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-sky-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">01</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-amber-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl  before:absolute before:h-12 before:w-4 before:bg-amber-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-amber-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg w-full text-base font-medium leading-6 text-amber-500 ">
                                        Shopify Theme Customisation
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        With a team of creative UI/UX designers and proficient Shopify developers, we curate responsive, user-friendly and interactive themes from scratch, which works well with major browsers and multiple devices. Our customshopify web development services Shopify themes best include your business vision and increases functionality.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-amber-500 rounded-full border-t-4 border-amber-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-amber-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-amber-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">02</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-cyan-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl  before:absolute before:h-12 before:w-4 before:bg-cyan-700 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-cyan-700">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg w-full text-base font-medium leading-6 text-cyan-600 ">
                                        Shopify Theme Development &amp; Design
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        No matter how complex your website interface requirements, our team can develop custom themes from scratch that conform to different web and mobile devices and screen sizes. Our experienced Shopify web developers design eye-catching websites that offer an enriched user-experience and consistent with your brand.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-cyan-600 rounded-full border-t-4 border-cyan-700 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-cyan-600 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute py-1 top-5 left-0 flex flex-col justify-center items-center size-max bg-cyan-600 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">03</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-rose-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl  before:absolute before:h-12 before:w-4 before:bg-rose-900 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-rose-900">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg w-full text-base font-medium leading-6 text-rose-700 ">
                                        Shopify App Development
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Our team of experts can create or customise your Shopify app to serve your business in the long run. The world goes mobile, so we offer Shopify app development services to connect to your store to more valuable and cutting-edge features. Our Shopify app development company also can increase your store’s functionality with 3rd party systems such as CRM and ERP systems.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-rose-700 rounded-full border-t-4 border-rose-800 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-rose-700 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 left-0 flex flex-col justify-center items-center size-max bg-rose-700 px-5 py-1 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">04</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-sky-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl before:absolute before:h-12 before:w-4 before:bg-sky-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-sky-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg w-full text-base font-medium leading-6 text-sky-500 ">
                                        Shopify API Integration
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Our proficient Shopify development company handles all types of integrations, whether payment gateways, adding custom functionalities, third-party apps or APIs. In order to transform your store into an infinitely scalable one, we help you connect your e-shop to other systems and applications that help you increase profits by automating manual data entry tasks. Leverage our team to integrate your site with ERP and CRM systems, third-party modules, multiple payment gateways like Amazon pay, PayPal, etc.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-sky-500 rounded-full border-t-4 border-sky-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-sky-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-sky-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">05</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-amber-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl  before:absolute before:h-12 before:w-4 before:bg-amber-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-amber-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="md:text-xl mt-4 sm:text-lg w-full text-base font-medium leading-6 text-amber-500 ">
                                        Shopify Upgrade and Maintenance
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        We provide various types of Shopify upgrade and maintenance services to a diversified range of online businesses of all sizes. Let our team provide the support that ensures your online store is constantly upgraded and stay on top of Shopify website updates as well as free from all the bugs. Our developers are continually working to stay ahead with Magento and Shopify.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-amber-500 rounded-full border-t-4 border-amber-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-amber-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-amber-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">06</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* Flow-Chart ends */}


            <PortfolioSection />

            <Gallery />

            <div className="relative isolate py-6 md:py-8 lg:py-16">
                <div className="overflow-hidden">
                    <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
                        <p className=" max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                "><span className="text-white">Reasons to Opt for Shopify</span>
                            <span> Platform App Development </span></p>
                    </div>
                </div>
                <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 relative">
                        <div class="duration-500 group overflow-hidden relative rounded-xl bg-neutral-800 text-neutral-50 p-8 flex flex-col"
                        >
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
                            ></div>
                            <div class="z-10 flex flex-col w-full h-full">
                                <span class="text-2xl font-bold">Safety and Reliability</span>
                                <p className="mt-10">
                                Shopify is an incredibly safe platform that guarantees online data security. And our Shopify eCommerce development services ensure the high performance of your website.
                                </p>
                            </div>
                        </div>
                        <div  class="duration-500 group overflow-hidden relative rounded-xl bg-neutral-800 text-neutral-50 p-8 flex flex-col"
                        >
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
                            ></div>
                            <div class="z-10 flex flex-col w-full h-full">
                                <span class="text-2xl font-bold"> Strong Marketing Tool</span>
                                <p className="mt-10">
                                Numerous effective Shopify marketing solutions and Shopify custom development (custom apps) aid in increasing traffic and conversions.
                                </p>
                            </div>
                        </div>
                        <div
                            class="duration-500 group overflow-hidden relative rounded-xl bg-neutral-800 text-neutral-50 p-8 flex flex-col"
                        >
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
                            ></div>
                            <div class="z-10 flex flex-col w-full h-full">
                                <span class="text-2xl font-bold">     Mobile Adaptivity</span>
                                <p className="mt-10">
                                To attract more customers, our Shopify eCommerce development company will add to your store a must-have mobile-friendly design.
                                </p>
                            </div>
                        </div>
                        <div
                            class="duration-500 group overflow-hidden relative rounded-xl bg-neutral-800 text-neutral-50 p-8 flex flex-col"
                        >
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
                            ></div>
                            <div class="z-10 flex flex-col w-full h-full">
                                <span class="text-2xl font-bold">  Shopify App Development</span>
                                <p className="mt-10">
                                Integrating an app makes it easier to grow an online store and achieve any challenging objective.
                                </p>
                            </div>
                        </div>
                        <div
                            class="duration-500 group overflow-hidden relative rounded-xl bg-neutral-800 text-neutral-50 p-8 flex flex-col"
                        >
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
                            ></div>
                            <div class="z-10 flex flex-col w-full h-full">
                                <span class="text-2xl font-bold">Suitable for SEO</span>
                                <p className="mt-10">
                                Shopify provides robust SEO capabilities to rank highly in search results.
                                </p>
                            </div>
                        </div>
                        <div
                            class="duration-500 group overflow-hidden relative rounded-xl bg-neutral-800 text-neutral-50 p-8 flex flex-col"
                        >
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                            ></div>
                            <div
                                class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
                            ></div>
                            <div class="z-10 flex flex-col w-full h-full">
                                <span class="text-2xl font-bold">Simple to Use</span>
                                <p className="mt-10">
                                The Shopify dashboard's straightforward and user-friendly layout improves the simple store administration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Cta2/>

            {/* accordian start */}
            <div className="py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <section className="lg:w-4/5 w-full mx-auto md:mt-16 mt-8">
                        <div className="max-w-[85rem] sm:px-6 lg:px-8 mx-auto">
                            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                                    Your questions, answered
                                </h2>
                                <p className="mt-1 text-gray-300">
                                    Answers to the most frequently asked questions.
                                </p>
                            </div>
                            <Accordion items={accordionItems} />
                        </div>
                    </section>
                </div>
            </div>
            {/* accordian Ends */}
            <Blog />

            <Form />

            <Footer />
        </>
    );
}

export default shopifyEcommerceDevelopment;
