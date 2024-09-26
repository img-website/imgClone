"use client"
import Header from '@/components/header/Header'
import Reward from '@/components/reward/Reward'
import React from 'react'
import Image from "next/image";
import Cta2 from '@/components/cta2/Cta2';
import Footer from '@/components/footer/Footer';
import Form from '@/components/contactForm/Form';
import Blog from '@/components/blog/Blog';
import Gallery from '@/components/gallery/Gallery';
import Cta from '@/components/cta/Cta';
import CaseStudy from '@/components/caseStudy/CaseStudy';
import Accordion from '@/components/accordion/Accordion';



function MobileAppDevelopmentcanada() {
    const accordionItems = [
        {
            title: 'What is the Difference Between Cross-Platform and Native App Development ?',
            content: "Cross-platform app development refers to development that runs on various platforms, like iOS and Android. It's built using a single codebase that can be used across various platforms, despite having to write codes separately for every platform. Native app development refers to app development that is specifically built to run on a single platform, like Android or iOS. Such apps are written in specific programming languages and frameworks for that particular platform, like Java or Kotlin for Android."
        },
        {
            title: "How much does it cost to develop a mobile app?",
            content: "The cost of mobile app development, on average, may start from $10,000 and go up depending on the app complexity, type of app, number of features you want to include, and more factors."
        },
        {
            title: 'How long will it take to build and launch my app ?',
            content: "The time to develop and launch a mobile app may vary depending on the app's complexity, development team size, and resources available to the team. A basic mobile app holding minimal functionality and features may take a few months, while a complex app may take a year or even more."
        },
        {
            title: 'Do you provide ongoing support, maintenance, and updates ?',
            content: "Yes, we offer ongoing support, maintenance, and updates post-deployment of your app. Such a service will help to keep your app up-to-date with the latest security updates and technology and resolve the issues, if any, on time." 
        }
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
                            <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]" width="1519" height="812" src="/img/ecommerce-hero.webp" alt="Transform Your Ideas into Reality with Our Mobile App Development Expertise.
" />

                            <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between">
                                <div className="xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center">
                                    <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                        <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">Custom Mobile App Development Company in Canada
                                        </span>
                                    </div>
                                    <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto">
                                        Elevate your business with our comprehensive mobile app development services in Canada. Turn your unique app concept into reality with captivating user experiences and high-performance functionality.
                                    </div>

                                </div>
                                <div className="xl:w-1/3 lg:w-1/2 max-lg:mx-auto">
                                    <div className="colorApply4 w-full px-5 md:py-10 py-8 md:rounded-2xl rounded-xl  shadow-xl bg-white backdrop-blur-lg relative gap-6 flex flex-col before:absolute before:inset-4 md:hover:before:inset-1 before:duration-200 before:ease-in before:bg-white/5 before:backdrop-blur-2xl before:rounded-xl before: before:z-0 before:m-auto *:w-full *:z-10 ">
                                        <div>
                                            <div className="colorApply5 size-16 rounded-full mx-auto shadow-md shadow-white/5 bg-theme1  text-white">
                                                <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" className="size-full" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="lg:text-xl md:text-lg text-base text-theme1 text-center text-balance font-semibold">Get Top-Notch, Innovative Mobile App Solutions from Us.
                                        </div>
                                        <div className=" flex justify-center w-full">
                                            <button className="px-4 text-sm text-[white] rounded-full bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300">
                                                <span>Schedule a consultation</span>
                                                <span>
                                                    <svg className='size-5' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path></svg>
                                                </span>
                                            </button>
                                        </div>

                                        <div className="md:text-sm text-xs text-theme1 text-center text-balance">Complete the form below with your project specifications.</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero */}

            <Reward />

            {/* about Section start */}
            <div className="relative bg-gray-100 py-6 md:py-8 lg:py-16 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 xl:-my-10 lg:-my-8 md:-my-6 w-full">
                    <div className="mx-auto max-w-container gap-7 flex md:flex-row-reverse flex-col max-lg:gap-4 items-center">

                        <div className="flex max-md:flex-col overflow-hidden xl:-mx-10 lg:-mx-8 md:-mx-6 max-md:gap-y-8">
                            <div className="flex flex-col md:w-1/2 w-full max-md:gap-y-8">
                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden">
                                    <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance">
                                            <span>We create world-class, </span> <span className="font-bold text-theme2">award-winning mobile applications.</span>
                                        </p>
                                        <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 text-balance">
                                            Since 2014, Twin Power Software has been an internationally award-winning tech company based in Canada, with three offices across India. With a team of over 100 professionals, we've successfully completed 1,200+ projects, achieving a 98% success rate.
                                        </p>
                                    </div>
                                </div>

                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/dream11.png" alt="League11" className=" block w-full object-contain aspect-[400/350]" />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">Dream11</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">Dream11 gives you the smoothest platform with the lowest platform fee 3% ever. Now you can play at your comfort zone in multiple games in 24*7 running matches and win the biggest cash prizes.</p>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/players11.png" alt="players-11" className=" block w-full object-contain aspect-[400/300]" />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">players-11</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 ">players-11 is a dreamy ethereal platform for all the sports lovers to experience the most earnest sports and games experience, virtually!</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="flex flex-col md:w-1/2 w-full max-md:gap-y-8">
                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/mpl.png" alt="Myfab11" className=" block w-full object-contain aspect-[400/300]" />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">MPL </div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">MPL  offers Sports Game formats for cricket, football games, among others, through the Platform. We have offered Sports Games through the Platform since 2018.</p>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/play11.png" alt="play-11" className=" block w-full object-contain aspect-[400/300]" />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">play-11</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 ">play-11 is India's Fastest growing fantasy platform. Use your gaming knowledge and win big!</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about Section Ends */}


            <Cta />

            {/* case study */}
            <CaseStudy />
            {/* case study */}

            <Gallery />

            <div className="relative py-6 md:py-8 lg:py-16 bg-gray-100">
                <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-2 relative pb-5">
                    <p className="text-gray-800 max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center">
                        <span className="font-normal">Mobile App </span>
                        <span className="font-bold text-theme2"> Development Workflow</span>
                    </p>
                    <div className="md:text-base text-sm text-black/70 mt-3 text-center">
                        Client satisfaction is our foremost priority. To ensure the same, we follow a streamlined and transparent mobile app development approach. Here’s a defined process that we follow to create a mobile app.
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-5 z-10">
                    <div className="relative lg:py-20 md:py-16 py-10">
                        <div className="flex flex-wrap w-full justify-center mx-2 max-md:mx-0">
                            <ul className="list-none w-full relative *:-mt-20 max-md:*:mt-0">
                                <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                                    <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                        <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                            1
                                        </div>
                                        <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                                            <div className="text-slate-900 font-bold text-xl">Project Analysis</div>
                                            <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Identify project goals
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Assess resources and constraint
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Understand client requirements
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Define project scope
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Establish timelines and milestones
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                                    <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                        <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                            2
                                        </div>
                                        <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                                            <div className="text-slate-900 font-bold text-xl">Market Research</div>
                                            <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Identify target audience
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Analyze competitors
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Determine market trends
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Identify potential opportunities
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Gather insights for product positioning
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                                    <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                        <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                            3
                                        </div>
                                        <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                                            <div className="text-slate-900 font-bold text-xl">Planning &amp; Wireframing</div>
                                            <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Create project roadmap
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Define features and functionalities
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Develop wireframes for user interface
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Establish user flow
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Validate concepts with stakeholders
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                                    <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                        <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                            4
                                        </div>
                                        <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                                            <div className="text-slate-900 font-bold text-xl">UX/UI Designing</div>
                                            <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Develop visual design elements
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Create user-friendly interfaces
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Ensure intuitive navigation
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Focus on user experience
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Incorporate branding elements
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                                    <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                        <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                            5
                                        </div>
                                        <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                                            <div className="text-slate-900 font-bold text-xl">Prototyping</div>
                                            <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Build interactive prototypes
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Test usability and functionality
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Gather feedback from stakeholders
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Iterate design based on feedback
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Prepare for development phase
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                                    <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                        <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                            6
                                        </div>
                                        <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                                            <div className="text-slate-900 font-bold text-xl">Mobile App Development</div>
                                            <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Code application functionalities
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Implement backend infrastructure
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Integrate design elements
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Ensure cross-platform compatibility
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Test code for bugs and errors
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                                    <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                        <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                            7
                                        </div>
                                        <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                                            <div className="text-slate-900 font-bold text-xl">App Testing &amp; Launch</div>
                                            <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Conduct thorough testing
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Fix bugs and issues
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Optimize performance
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Prepare for app store submission
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Execute launch strategy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 ">
                                    <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                        <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                            8
                                        </div>
                                        <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                                            <div className="text-slate-900 font-bold text-xl">Mobile App Maintenance</div>
                                            <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Monitor app performance
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Update features and functionalities
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Address user feedback
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Fix bugs and issues promptly
                                                </a>
                                                <a href="javascript:;" className="group/db">
                                                    <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                                    Ensure compatibility with new OS versions
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Cta2 />

           

            <Blog />


            {/* accordian start */}
            <div className='py-10'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <section className="lg:w-4/5 w-full mx-auto md:mt-16 mt-8">
                        <div className="max-w-[85rem] sm:px-6 lg:px-8 mx-auto">
                            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Your questions, answered</h2>
                                <p className="mt-1 text-gray-600">Answers to the most frequently asked questions.</p>
                            </div>
                            <Accordion items={accordionItems} />
                        </div>
                    </section>
                </div>
            </div>
            {/* accordian Ends */}

            <Form />

            <Footer />
        </>
    )
}

export default MobileAppDevelopmentcanada