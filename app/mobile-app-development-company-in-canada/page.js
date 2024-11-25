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
                                        <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/league-app.jpeg" alt="League11" className="block w-full object-contain aspect-[400/350]" />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">League11</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">League11 gives you the smoothest platform with the lowest platform fee 3% ever. Now you can play at your comfort zone in multiple games in 24*7 running matches and win the biggest cash prizes.</p>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/batball11-app.jpeg" alt="Batball11" className="block w-full object-contain aspect-[400/300]" />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">Batball11</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 ">BatBall11 is a dreamy ethereal platform for all the sports lovers to experience the most earnest sports and games experience, virtually!</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="flex flex-col md:w-1/2 w-full max-md:gap-y-8">
                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/fab11.jpeg" alt="Myfab11" className="block w-full object-contain aspect-[400/300]" />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">Myfab11</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">MyFab11 offers Sports Game formats for cricket, football games, among others, through the Platform. We have offered Sports Games through the Platform since 2018.</p>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/jeet11-app.jpeg" alt="Jeet11" className="block w-full object-contain aspect-[400/400]" />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">Jeet11</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 ">Jeet11 is India's Fastest growing fantasy platform. Use your gaming knowledge and win big!</p>
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

            <section className="container mx-auto py-8 sm:py-16 relative bg-white">
                <div className="flex flex-col w-full max-w-7xl mx-auto pb-8 px-6 lg:px-8 text-center">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                        <span>Our Mobile </span>
                        <span className="font-bold text-theme2"> Technology</span>
                    </p>
                    {/* <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eaque est animi tenetur alias natus rem, quia vel deleniti consectetur sequi nostrum exercitationem eveniet placeat sint quidem. Qui, nostrum voluptatibus?</div> */}
                </div>
                <ul className="flex relative flex-col gap-y-8 lg:gap-y-64 flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
                    <li className="size-full lg:sticky max-lg:relative lg:top-40 z-0 before:bg-gradient-to-br before:from-gray-700 before:via-slate-700 before:to-black before:absolute before:inset-0 before:rounded-xl before:m-auto before:z-0 before:rotate-2">
                        <div className="bg-gray-50 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-50"></div>
                            <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-gray-500/30 to-gray-500/30 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex flex-row-reverse max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center gap-6 lg:min-h-[385px]">
                                    <div className="grow max-sm:w-full text-black flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                                            <span>iOS App </span>
                                            <span className="font-bold text-gray-800">Developer</span>
                                        </p>
                                        <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">Hiring our experienced iOS app developers allows you to rapidly fill a skill gap in your development team. If you hire the right iOS developers, you can quickly get ongoing support, a bigger team for a specific project, or help in an emergency. We can promise that our highly skilled remote iOS developers will fit right in with your team and help your project be a success. We specialise in working to hire iOS app developer models, for a start-up, small, medium, or large company. We set a higher standard for providing value for money with cutting-edge iOS app development solutions. </div>
                                        <div>
                                            <a href="/ios-app-development" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-900 bg-gray-700 xl:hover:ring-gray-700 duration-300 backdrop-blur-md shadow-sm shadow-gray-700/50 text-white">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full max-md:h-52 text-gray-800">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky max-lg:relative lg:top-40 z-0 before:bg-gradient-to-br before:from-lime-700 before:via-green-700 before:to-lime-900 before:absolute before:inset-0 before:rounded-xl before:m-auto before:z-0 before:rotate-2">
                        <div className="bg-gray-50 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-50"></div>
                            <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-lime-500/30 to-lime-500/30 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center gap-6 lg:min-h-[385px]">
                                    <div className="grow max-sm:w-full text-black flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                                            <span>Android App </span>
                                            <span className="font-bold text-lime-800">Developer</span>
                                        </p>
                                        <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">Mobile phones have become indispensable in today's digital society. As a result, businesses that want to contact their customers' mobile apps are valuable assets. If you own a company and want to increase your revenue, now is the time to transform it. Then, it’s time to hire dedicated android developers to generate revenue from this trend. Concerned about finding a competent android app development company on such short notice? No worries. You can hire android developers in a variety of ways from Twin Power Software.
                                        </div>
                                        <div>
                                            <a href="/android-application-development" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-lime-900 bg-lime-700 xl:hover:ring-lime-700 duration-300 backdrop-blur-md shadow-sm shadow-lime-700/50 text-white">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full max-md:h-52 text-lime-600 relative">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path></svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky max-lg:relative lg:top-40 z-0 before:bg-gradient-to-br before:from-sky-700 before:via-sky-700 before:to-sky-900 before:absolute before:inset-0 before:rounded-xl before:m-auto before:z-0 before:rotate-2">
                        <div className="bg-gray-50 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-50"></div>
                            <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-sky-500/30 to-blue-500/30 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex flex-row-reverse max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center gap-6 lg:min-h-[385px]">
                                    <div className="grow max-sm:w-full text-black flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                                            <span>React Native App </span>
                                            <span className="font-bold text-sky-800">Developer</span>
                                        </p>
                                        <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">We create robust React Native applications for Android and iOS platforms. Hire our React Native app developers to attract consumers by offering top-notch UX and intuitive functionality. We provide exceptional React Native app development services. It is possible with assistance from our expert team of experienced developers, QA experts, UI/UX engineers, and many more. From conception to implementation, we provide everything you need to ensure the success of your development process.
                                        </div>
                                        <div>
                                            <a href="/react-native-app-development" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-sky-900 bg-sky-700 xl:hover:ring-sky-700 duration-300 backdrop-blur-md shadow-sm shadow-sky-700/50 text-white">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full max-md:h-52 text-sky-600 relative">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky max-lg:relative lg:top-40 z-0 before:bg-gradient-to-br before:from-cyan-700 before:via-cyan-700 before:to-cyan-900 before:absolute before:inset-0 before:rounded-xl before:m-auto before:z-0 before:rotate-2">
                        <div className="bg-gray-50 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
                            <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-50"></div>
                            <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center gap-6 lg:min-h-[385px]">
                                    <div className="grow max-sm:w-full text-black flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                                            <span>Flutter App </span>
                                            <span className="font-bold text-cyan-800">Developer</span>
                                        </p>
                                        <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">Google's Flutter is a ground-breaking platform that enables the creation of both iOS and Android apps. Flutter provides a top-notch native interface for creating mobile applications that run on various platforms. According to the needs of your project, you can employ Flutter app developers from Twin Power Software on a fixed-fee, full-time, or part-time basis. We have a group of top flutter developers supporting us who are skilled at creating cross-platform applications. We are able to focus on all of your business and technological requirements with our Flutter App Development services. All thanks to our prestigious years of experience in the mobile app development sector.
                                        </div>
                                        <div>
                                            <a href="/flutter-app-development" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-cyan-900 bg-cyan-700 xl:hover:ring-cyan-700 duration-300 backdrop-blur-md shadow-sm shadow-cyan-700/50 text-white">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full max-md:h-52 text-sky-600 relative">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="M13.5039 2.00098L3.50391 12.001L6.58724 15.0843L19.6673 2.00098H13.5039ZM13.4985 11.1989L8.12328 16.6199L13.4956 21.9998H19.6842L14.2975 16.5999L19.6856 11.1998L13.4985 11.1989Z"></path></svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>


                </ul>
            </section>

            <Blog />


            {/* accordian start */}
            <div className='py-10'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <section className="lg:w-4/5 w-full mx-auto md:mt-16 mt-8">
                        <div className="max-w-[85rem] sm:px-6 lg:px-8 mx-auto">
                            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Your questions, answered</h2>
                                <p className="mt-1 text-gray-300">Answers to the most frequently asked questions.</p>
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