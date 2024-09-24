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
            content: "While numerous grocery delivery app development companies exist, IMG Global Infotech stands out as the top choice. With years of expertise in crafting grocery delivery app solutions, we've played a pivotal role in elevating various businesses to new heights. Join us to become the next market leader in the grocery industry."
        },
        {
            title:
                "How Much Does Grocery Delivery App Development Services Cost?",
            content: "Determining the precise cost of developing an on-demand grocery delivery app is challenging. For accurate estimates and reliable development services, turn to IMG Global Infotech. Our experts will analyze your requirements and deliver the best solutions."
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
            <div class="relative bg-gray-100 py-6 md:py-8 lg:py-16">
                <div class="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">

                    <div class="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">

                        <div class="w-full relative z-20 h-auto shrink-1 grow-0">
                            <p class="
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                ">
                                <span>Shopify Development </span> <span> Services We Provide</span>

                            </p>
                            <p class="md:text-base text-sm text-black/70 mt-3 text-balance text-center">
                                We provide comprehensive Shopify services that enhance functionality, track performance, optimize sales channels, manage inventory, and much more.
                            </p>
                        </div>

                        <div class="w-full grid md:grid-cols-3 gap-8">
                            <div class="border-2 p-5 group rounded-3xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-3xl before:border-sky-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-sky-700/40 duration-300">
                                <div class="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl h-full">
                                    <div class="flex p-3 flex-col gap-3">
                                        <div class="lg:text-6xl md:text-4xl text-3xl font-bold text-sky-500 *:size-full">
                                            01
                                        </div>
                                        <div class="md:text-lg sm:text-base text-sm leading-6 font-bold">
                                            Shopify eCommerce Development Services
                                        </div>
                                        <div class="mt-2 sm:text-base text-sm leading-6">Our skilled developers have 6 years of experience in building sales-driven online stores running on Shopify. Shopify is easy and lets you truly focus on your business and not worry about the tech part. Leverage on our team to solve all tech challenges. We provide a wide range of custom Shopify design and development services for businesses in various niches.</div>
                                    </div>
                                </div>
                                <div class="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                                <div class="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                            </div>
                            <div class="border-2 p-5 group rounded-3xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-3xl before:border-blue-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-blue-700/40 duration-300">
                                <div class="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl h-full">
                                    <div class="flex p-3 flex-col gap-3">
                                        <div class="lg:text-6xl md:text-4xl text-3xl font-bold text-blue-500 *:size-full">
                                            02
                                        </div>
                                        <div class="md:text-lg sm:text-base text-sm leading-6 font-bold">
                                            Shopify Theme Customisation
                                        </div>
                                        <div class="mt-2 sm:text-base text-sm leading-6">With a team of creative UI/UX designers and proficient Shopify developers, we curate responsive, user-friendly and interactive themes from scratch, which works well with major browsers and multiple devices. Our customshopify web development services Shopify themes best include your business vision and increases functionality.</div>
                                    </div>
                                </div>
                                <div class="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                                <div class="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                            </div>
                            <div class="border-2 p-5 group rounded-3xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-3xl before:border-indigo-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-indigo-700/40 duration-300">
                                <div class="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl h-full">
                                    <div class="flex p-3 flex-col gap-3">
                                        <div class="lg:text-6xl md:text-4xl text-3xl font-bold text-indigo-500 *:size-full">
                                            03
                                        </div>
                                        <div class="md:text-lg sm:text-base text-sm leading-6 font-bold">
                                            Shopify Theme Development &amp; Design
                                        </div>
                                        <div class="mt-2 sm:text-base text-sm leading-6">No matter how complex your website interface requirements, our team can develop custom themes from scratch that conform to different web and mobile devices and screen sizes. Our experienced Shopify web developers design eye-catching websites that offer an enriched user-experience and consistent with your brand.</div>
                                    </div>
                                </div>
                                <div class="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                                <div class="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                            </div>
                            <div class="border-2 p-5 group rounded-3xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-3xl before:border-violet-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-violet-700/40 duration-300">
                                <div class="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl h-full">
                                    <div class="flex p-3 flex-col gap-3">
                                        <div class="lg:text-6xl md:text-4xl text-3xl font-bold text-violet-500 *:size-full">
                                            04
                                        </div>
                                        <div class="md:text-lg sm:text-base text-sm leading-6 font-bold">
                                            Shopify App Development
                                        </div>
                                        <div class="mt-2 sm:text-base text-sm leading-6">Our team of experts can create or customise your Shopify app to serve your business in the long run. The world goes mobile, so we offer Shopify app development services to connect to your store to more valuable and cutting-edge features. Our Shopify app development company also can increase your store’s functionality with 3rd party systems such as CRM and ERP systems.</div>
                                    </div>
                                </div>
                                <div class="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                                <div class="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                            </div>
                            <div class="border-2 p-5 group rounded-3xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-3xl before:border-purple-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-purple-700/40 duration-300">
                                <div class="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl h-full">
                                    <div class="flex p-3 flex-col gap-3">
                                        <div class="lg:text-6xl md:text-4xl text-3xl font-bold text-purple-500 *:size-full">
                                            05
                                        </div>
                                        <div class="md:text-lg sm:text-base text-sm leading-6 font-bold">
                                            Shopify API Integration
                                        </div>
                                        <div class="mt-2 sm:text-base text-sm leading-6">Our proficient Shopify development company handles all types of integrations, whether payment gateways, adding custom functionalities, third-party apps or APIs. In order to transform your store into an infinitely scalable one, we help you connect your e-shop to other systems and applications that help you increase profits by automating manual data entry tasks. Leverage our team to integrate your site with ERP and CRM systems, third-party modules, multiple payment gateways like Amazon pay, PayPal, etc.</div>
                                    </div>
                                </div>
                                <div class="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                                <div class="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                            </div>
                            <div class="border-2 p-5 group rounded-3xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-3xl before:border-fuchsia-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-fuchsia-700/40 duration-300">
                                <div class="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl h-full">
                                    <div class="flex p-3 flex-col gap-3">
                                        <div class="lg:text-6xl md:text-4xl text-3xl font-bold text-fuchsia-500 *:size-full">
                                            06
                                        </div>
                                        <div class="md:text-lg sm:text-base text-sm leading-6 font-bold">
                                            Shopify Upgrade and Maintenance
                                        </div>
                                        <div class="mt-2 sm:text-base text-sm leading-6">We provide various types of Shopify upgrade and maintenance services to a diversified range of online businesses of all sizes. Let our team provide the support that ensures your online store is constantly upgraded and stay on top of Shopify website updates as well as free from all the bugs. Our developers are continually working to stay ahead with Magento and Shopify.</div>
                                    </div>
                                </div>
                                <div class="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                                <div class="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Flow-Chart ends */}


            <PortfolioSection />

            <Gallery />

            <div class="relative isolate py-6 md:py-8 lg:py-16">
                <div class="overflow-hidden">
                    <div class="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
                        <p class=" max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                "><span>Reasons to Opt for Shopify</span>
                            <span> Platform App Development </span></p>
                    </div>
                </div>
                <div class="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 relative">
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-sky-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-sky-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-sky-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-sky-400  px-2 py-1 rounded-lg">
                                Safety and Reliability
                            </div>
                            <p class="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                                Shopify is an incredibly safe platform that guarantees online data security. And our Shopify eCommerce development services ensure the high performance of your website.
                            </p>
                            <div class="absolute w-6 h-28 bg-sky-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-sky-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-sky-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-cyan-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-cyan-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-cyan-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M 5.25 2.75 L 4.6875 3.28125 L 3.28125 4.6875 L 2.75 5.25 L 3.15625 5.90625 L 5.25 9.40625 L 5.53125 9.90625 L 8.46875 9.90625 L 12.46875 13.875 C 8.894531 17.464844 4.347656 22.027344 4.1875 22.1875 C 2.621094 23.753906 2.617188 26.320313 4.21875 27.8125 C 5.78125 29.355469 8.328125 29.394531 9.8125 27.8125 C 9.824219 27.800781 9.832031 27.792969 9.84375 27.78125 L 16 21.59375 L 22.1875 27.8125 L 22.28125 27.875 C 23.851563 29.355469 26.347656 29.375 27.8125 27.8125 L 27.8125 27.78125 L 27.84375 27.78125 C 29.375 26.214844 29.390625 23.667969 27.8125 22.1875 L 27.78125 22.15625 L 22.5625 16.96875 C 26.074219 16.640625 28.824219 13.675781 28.875 10.09375 L 28.90625 10.09375 C 28.910156 10.074219 28.90625 10.050781 28.90625 10.03125 C 28.90625 10.019531 28.90625 10.011719 28.90625 10 C 29.003906 8.84375 28.753906 7.738281 28.15625 6.78125 L 27.46875 5.71875 L 22.8125 10.375 L 21.40625 8.90625 L 26.15625 4.15625 L 24.78125 3.59375 C 23.976563 3.25 23.046875 3 22 3 C 18.15625 3 15 6.15625 15 10 C 15 10.417969 15.089844 10.78125 15.15625 11.15625 C 14.71875 11.59375 14.390625 11.953125 13.875 12.46875 L 9.90625 8.5 L 9.90625 5.53125 L 9.40625 5.25 L 5.90625 3.15625 Z M 22 5 C 22.140625 5 22.238281 5.082031 22.375 5.09375 L 18.59375 8.875 L 19.28125 9.59375 L 22.09375 12.5 L 22.78125 13.21875 L 26.75 9.25 C 26.769531 9.480469 26.933594 9.648438 26.90625 9.90625 L 26.90625 10 C 26.90625 12.753906 24.660156 15 21.90625 15 C 21.539063 15 21.09375 14.914063 20.59375 14.8125 L 20.0625 14.71875 L 19.6875 15.09375 L 8.40625 26.40625 L 8.375 26.40625 L 8.375 26.4375 C 7.664063 27.214844 6.421875 27.234375 5.59375 26.40625 L 5.59375 26.375 L 5.5625 26.375 C 4.785156 25.664063 4.765625 24.421875 5.59375 23.59375 C 5.972656 23.214844 13.3125 15.8125 16.90625 12.21875 L 17.3125 11.8125 L 17.15625 11.25 C 17.074219 10.925781 17 10.367188 17 10 C 17 7.246094 19.246094 5 22 5 Z M 5.5625 5.25 L 7.90625 6.6875 L 7.90625 7.6875 L 7.6875 7.90625 L 6.6875 7.90625 L 5.25 5.5625 Z M 20.1875 17.40625 L 26.40625 23.59375 L 26.40625 23.625 L 26.4375 23.625 C 27.214844 24.335938 27.234375 25.578125 26.40625 26.40625 L 26.375 26.40625 L 26.375 26.4375 C 25.664063 27.214844 24.421875 27.234375 23.59375 26.40625 L 17.40625 20.1875 Z"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-cyan-400  px-2 py-1 rounded-lg">
                                Strong Marketing Tool
                            </div>
                            <p class="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                                Numerous effective Shopify marketing solutions and Shopify custom development (custom apps) aid in increasing traffic and conversions.
                            </p>
                            <div class="absolute w-6 h-28 bg-cyan-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-cyan-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-cyan-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-blue-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-blue-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-blue-400">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M11 4h2"></path><path d="M12 17v.01"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-blue-400  px-2 py-1 rounded-lg">
                                Mobile Adaptivity
                            </div>
                            <p class="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                                To attract more customers, our Shopify eCommerce development company will add to your store a must-have mobile-friendly design.
                            </p>
                            <div class="absolute w-6 h-28 bg-blue-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-blue-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-blue-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-indigo-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-indigo-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-indigo-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-indigo-400  px-2 py-1 rounded-lg">
                                Shopify App Development
                            </div>
                            <p class="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                                Integrating an app makes it easier to grow an online store and achieve any challenging objective.
                            </p>
                            <div class="absolute w-6 h-28 bg-indigo-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-indigo-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-indigo-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-violet-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-violet-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-violet-400">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M6 4v4"></path><path d="M6 12v8"></path><path d="M13.199 14.399a2 2 0 1 0 -1.199 3.601"></path><path d="M12 4v10"></path><path d="M12 18v2"></path><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M18 4v1"></path><path d="M18 9v2.5"></path><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19.001 15.5v1.5"></path><path d="M19.001 21v1.5"></path><path d="M22.032 17.25l-1.299 .75"></path><path d="M17.27 20l-1.3 .75"></path><path d="M15.97 17.25l1.3 .75"></path><path d="M20.733 20l1.3 .75"></path></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-violet-400  px-2 py-1 rounded-lg">
                                Suitable for SEO
                            </div>
                            <p class="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                                Shopify provides robust SEO capabilities to rank highly in search results.
                            </p>
                            <div class="absolute w-6 h-28 bg-violet-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-violet-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-violet-400"></div>
                        </div>
                        <div class="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-purple-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-purple-400 before:duration-300">
                            <div class="*:size-16 *:p-1 *:mt-2 text-purple-400">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
                            </div>
                            <div class="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-purple-400  px-2 py-1 rounded-lg">
                                Simple to Use
                            </div>
                            <p class="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                                The Shopify dashboard's straightforward and user-friendly layout improves the simple store administration.
                            </p>
                            <div class="absolute w-6 h-28 bg-purple-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-purple-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-purple-400"></div>
                        </div>
                    </div>
                </div>
            </div>

            <Cta2/>

            {/* accordian start */}
            <div className="py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <section className="lg:w-4/5 w-full mx-auto md:mt-16 mt-8">
                        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                                    Your questions, answered
                                </h2>
                                <p className="mt-1 text-gray-600">
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
