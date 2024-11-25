'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Cta from '@/components/cta/Cta'
import PortfolioSection from '@/components/portfolio/portfolio'
import Blog from '@/components/blog/Blog'
import Accordion from '@/components/accordion/Accordion'
import Form from '@/components/contactForm/Form'

function taxiAppDevelopmentCompany() {
    const accordionItems = [
        {
            title: 'Which Is The Best Taxi Booking App Development Company?',
            content: "Twin Power Software distinguishes itself as a premier taxi booking app development company, featuring a team of proficient and dedicated mobile app developers. We excel in creating a variety of mobile apps and websites spanning diverse domains. Feel free to initiate a conversation with our experts to tailor solutions to meet your unique business needs."
        },
        {
            title:
                'What Are The Benefits Of On-Demand Taxi Booking App Development?',
            content: "On-demand taxi app development offers convenience, efficiency, and real-time services. Benefits include improved user experience, reduced waiting times, and increased business opportunities for taxi service providers."
        },
        {
            title: 'How Much Does It Cost To Develop A Taxi Booking App?',
            content: "The cost of developing a taxi booking app varies based on features, complexity, and the development team's rates. On average, it can range from $8,000 to $25,000 or more."
        },
        {
            title: 'How Long Does It Take To Create A Taxi Booking App?',
            content: "The time to create a taxi booking app depends on features and complexity. Typically, it takes 3 to 6 months, considering design, development, testing, and deployment phases."
        },
    ]

    return (
        <>
            <Header />
            {/* hero */}
            <div id='heroColor4' data-color='indigo'>
                <span className='hidden before:from-theme1 before:via-theme1/50 before:to-theme1/80 from-theme1 via-theme1/50 to-theme1/80  text-indigo-700'>
                    <span className='via-indigo-500 from-indigo-100 to-indigo-100 *:*:text-indigo-400'></span>
                    <span className='bg-theme1/50 hover:bg-indigo-700'></span>
                </span>
                <div className='flex w-full relative bg-slate-50  lg:h-dvh min-h-[650px]'>
                    <div className='size-full relative !z-10'>
                        <div className='colorApply1 flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply after:absolute after:rounded-b-2xl after:inset-0 after:bg-repeat   before:from-theme1 before:via-theme1/50 before:to-theme1/80'>
                            <span className='colorApply2 absolute inset-0 bg-cover bg-right opacity-50 rounded-b-2xl bg-gradient-to-r mix-blend-multiply  from-theme1 via-theme1/50 to-theme1/80'></span>
                            <Image
                                className='size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]'
                                width='1519'
                                height='812'
                                loading='lazy'
                                src='/img/taxi-booking-2048w.webp'
                                alt='Transform Your Ideas into Reality with Our Mobile App Development Expertise.
'
                            />

                            <div className='flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between'>
                                <div className='xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center'>
                                    <div className='font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]'>
                                        <span className='colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100'>
                                            Taxi Booking App Development Company
                                        </span>
                                    </div>
                                    <div className='max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto'>
                                        Enhance your online presence with our Online Taxi Booking App development solutions. Twin Power Software is a leading taxi booking app development company that specializes in building intuitive, reliable apps that seamlessly connect passengers with drivers. Let’s collaborate to create something exceptional.
                                    </div>
                                </div>
                                <div className='xl:w-1/3 lg:w-1/2 max-lg:mx-auto'>
                                    <div className='colorApply4 w-full px-5 md:py-10 py-8 md:rounded-2xl rounded-xl  shadow-xl bg-white backdrop-blur-lg relative gap-6 flex flex-col before:absolute before:inset-4 md:hover:before:inset-1 before:duration-200 before:ease-in before:bg-white/5 before:backdrop-blur-2xl before:rounded-xl before: before:z-0 before:m-auto *:w-full *:z-10 '>
                                        <div>
                                            <div className='colorApply5 size-16 rounded-full mx-auto shadow-md shadow-white/5 bg-theme1  text-white'>
                                                <svg
                                                    stroke='currentColor'
                                                    fill='none'
                                                    stroke-width='1.5'
                                                    viewBox='0 0 24 24'
                                                    aria-hidden='true'
                                                    className='size-full'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='lg:text-xl md:text-lg text-base text-theme1 text-center text-balance font-semibold'>
                                            Get Top-Notch, Innovative Mobile App Solutions from Us.
                                        </div>
                                        <div className=' flex justify-center w-full'>
                                            <button className='px-4 text-sm text-[white] rounded-full bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300'>
                                                <span>Schedule a consultation</span>
                                                <span>
                                                    <svg
                                                        className='size-5'
                                                        stroke='currentColor'
                                                        fill='currentColor'
                                                        stroke-width='0'
                                                        viewBox='0 0 1024 1024'
                                                        height='200px'
                                                        width='200px'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                        <path d='M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z'></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>

                                        <div className='md:text-sm text-xs text-theme1 text-center text-balance'>
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
            <div className='relative bg-slate-50 py-6 md:py-8 lg:py-16'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8 w-full'>
                    <div className='absolute inset-0 size-full pointer-events-none overflow-hidden'>
                        <div className='absolute inset-y-0 hidden w-full min-w-[1360px] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block pointer-events-none'></div>
                    </div>
                    <div
                        className='
                mx-auto max-w-container gap-7 flex max-lg:flex-col group-[]/flip:flex-row-reverse group-[]/flip:max-lg:flex-col max-lg:gap-4 

                [&>*:first-child]:[&:has(.content1-img)]:lg:block 
                [&:first-child]:hidden [&>*:last-child]:[&:has(.content1-img)]:max-w-3xl 
                [&>*:last-child]:[&:has(.content1-img)]:lg:w-3xl
            '
                    >
                        <div className='relative z-10 pointer-events-none h-auto lg:sticky lg:top-24 self-start mx-auto'>
                            <div className='flex [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)]'>
                                <div className='relative flex-shrink-0 p-4 w-full'>
                                    <div className='relative z-10 overflow-hidden *:rounded-xl [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)] [&~*]:[&:has(.mask)]:lg:hidden'>
                                        <Image
                                            className='object-cover w-full h-auto md:w-[336px] content1-img'
                                            width={'384'}
                                            height={'384'}
                                            src='/img/taxi-booking-app.webp'
                                            alt='image3'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-20 mx-auto lg:mx-0 lg:pr-4 md:py-6 md:md:py-8 h-auto md:sticky md:top-24 self-start shrink-1 grow-0 basis-auto w-full'>
                            <p
                                className='
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                '
                            >
                                <span className='font-normal'>
                                    Create a Leading Ride-Sharing
                                </span>
                                <span className='font-bold'> App Like Uber and Lyft</span>
                            </p>
                            <p className='mt-4 text-sm md:text-base leading-7 text-slate-600'>
                                The taxi app market is vast, and users appreciate the comfort and convenience of traveling with a taxi booking app. If you envision making millions in this industry, you're just a click away. We specialize in offering custom mobile app development services that compete with major players like Uber, Lyft, and Ola, making us one of the top taxi booking app development companies.
                            </p>
                            <p className='mt-4 text-sm md:text-base leading-7 text-slate-600'>
                                At Twin Power Software, we have skilled taxi booking app developers ready to turn your vision into reality. This means your dream taxi booking app is just a message away. If you’re prepared to transform the transportation industry with your app, hire our taxi booking app developers today. Together, we can create a taxi booking app that revolutionizes urban mobility.
                            </p>

                            <div className='mt-8 flex gap-4'>
                                <button className='px-4 text-sm text-theme1 inline-flex items-center gap-2 font-semibold rounded-full py-3 border-theme1 overflow-hidden border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0'>
                                    <span>View More</span>
                                    <span>
                                        <svg
                                            className='size-5'
                                            stroke='currentColor'
                                            fill='currentColor'
                                            stroke-width='0'
                                            viewBox='0 0 24 24'
                                            height='200px'
                                            width='200px'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path fill='none' d='M0 0h24v24H0z'></path>
                                            <path d='M16.01 11H4v2h12.01v3L20 12l-3.99-4z'></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]'></div>
                </div>
            </div>
            {/* About Ends */}

            <Cta />

            {/* flow-chart second */}
            <div className="relative md:py-16 py-12 overflow-hidden">
                <div className="mx-auto max-w-7xl px-5 z-10">
                    <div className="relative container mx-auto max-w-7xl md:px-6 lg:px-8 z-10">
                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center">
                            <span className="font-normal text-center text-white">How Does Taxi Booking </span>
                            <span className="font-bold text-theme2">App Work?</span>
                        </p>
                    </div>

                    <div className="flex flex-row flex-wrap w-full mt-5 relative z-40 items-center gap-2">
                        <div className="md:w-[30%] w-full lg:p-4 md:p-3 p-2">
                            <Image width={1000} height={1000} quality={90} loading='lazy' className="w-full " src="/img/taxi.webp" alt="image3" />
                        </div>
                        <div className="md:w-[33%] w-full lg:p-4 md:p-3 p-2">
                            <div className=" my-5 bg-sky-50 h-auto relative overflow-hidden rounded-xl hover:before:rounded-xl hover:after:rounded-xl after:rounded-tl-xl p-5 flex-col group after:absolute after:duration-700 after:hover:w-full after:hover:h-full after:h-[50px] after:w-[50px] after:p-4 after:top-0 after:left-0 before:z-[33]  before:absolute before:duration-700 before:hover:w-full before:hover:h-full before:h-[50px] before:w-[50px] before:p-4 before:bottom-0 before:right-0">
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] top-[-27%] opacity-0 group-hover:opacity-100 duration-700 left-[-17%]  rotate-45"></span>
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] bottom-[-27%] opacity-0 group-hover:opacity-100 duration-700 -z-0 right-[-17%]  rotate-45"></span>
                                <div className="flex items-center gap-x-3 pb-3">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="h-[50px] w-[50px] text-gray-300 group-hover:text-[#051626c2] duration-700" xmlns="http://www.w3.org/2000/svg"><title></title>
                                        <path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"></path></svg>
                                    <div className="text-lg text-[#051626c2] font-semibold">
                                        User Registration
                                    </div>
                                </div>
                                <div className="text-base text-ellipsis line-clamp-3 text-gray-800">
                                    Users download the app, create an account, and provide necessary details, including payment information.
                                </div>
                            </div>
                            <div className=" my-5 bg-sky-50 h-auto relative overflow-hidden rounded-xl hover:before:rounded-xl hover:after:rounded-xl after:rounded-tl-xl p-5 flex-col group after:absolute after:duration-700 after:hover:w-full after:hover:h-full after:h-[50px] after:w-[50px] after:p-4 after:top-0 after:left-0 before:z-[33]  before:absolute before:duration-700 before:hover:w-full before:hover:h-full before:h-[50px] before:w-[50px] before:p-4 before:bottom-0 before:right-0">
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] top-[-27%] opacity-0 group-hover:opacity-100 duration-700 left-[-17%]  rotate-45"></span>
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] bottom-[-27%] opacity-0 group-hover:opacity-100 duration-700 -z-0 right-[-17%]  rotate-45"></span>
                                <div className="flex items-center gap-x-3 pb-3">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="h-[50px] w-[50px] text-gray-300 group-hover:text-[#051626c2] duration-700" xmlns="http://www.w3.org/2000/svg"><title></title>
                                        <path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"></path></svg>
                                    <div className="text-lg text-[#051626c2] font-semibold">
                                        Location Sharing
                                    </div>
                                </div>
                                <div className="text-base text-ellipsis line-clamp-3 text-gray-800">
                                    Users input their current location or enable GPS for the app to determine their position, facilitating efficient cab allocation.
                                </div>
                            </div>
                            <div className=" my-5 bg-sky-50 h-auto relative overflow-hidden rounded-xl hover:before:rounded-xl hover:after:rounded-xl after:rounded-tl-xl p-5 flex-col group after:absolute after:duration-700 after:hover:w-full after:hover:h-full after:h-[50px] after:w-[50px] after:p-4 after:top-0 after:left-0 before:z-[33]  before:absolute before:duration-700 before:hover:w-full before:hover:h-full before:h-[50px] before:w-[50px] before:p-4 before:bottom-0 before:right-0">
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] top-[-27%] opacity-0 group-hover:opacity-100 duration-700 left-[-17%]  rotate-45"></span>
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] bottom-[-27%] opacity-0 group-hover:opacity-100 duration-700 -z-0 right-[-17%]  rotate-45"></span>
                                <div className="flex items-center gap-x-3 pb-3">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="h-[50px] w-[50px] text-gray-300 group-hover:text-[#051626c2] duration-700" xmlns="http://www.w3.org/2000/svg"><title></title>
                                        <path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"></path></svg>
                                    <div className="text-lg text-[#051626c2] font-semibold">
                                        Cab Selection
                                    </div>
                                </div>
                                <div className="text-base text-ellipsis line-clamp-3 text-gray-800">
                                    Users choose the type of cab they need based on factors like size, comfort, and price, presented through the app's interface.
                                </div>
                            </div>
                        </div>

                        <div className="md:w-[33%] w-full lg:p-4 md:p-3 p-2">
                            <div className=" my-5 bg-sky-50 h-auto relative overflow-hidden rounded-xl hover:before:rounded-xl hover:after:rounded-xl after:rounded-tl-xl p-5 flex-col group after:absolute after:duration-700 after:hover:w-full after:hover:h-full after:h-[50px] after:w-[50px] after:p-4 after:top-0 after:left-0 before:z-[33]  before:absolute before:duration-700 before:hover:w-full before:hover:h-full before:h-[50px] before:w-[50px] before:p-4 before:bottom-0 before:right-0">
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] top-[-27%] opacity-0 group-hover:opacity-100 duration-700 left-[-17%]  rotate-45"></span>
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] bottom-[-27%] opacity-0 group-hover:opacity-100 duration-700 -z-0 right-[-17%]  rotate-45"></span>
                                <div className="flex items-center gap-x-3 pb-3">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="h-[50px] w-[50px] text-gray-300 group-hover:text-[#051626c2] duration-700" xmlns="http://www.w3.org/2000/svg"><title></title>
                                        <path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"></path></svg>
                                    <div className="text-lg text-[#051626c2] font-semibold">
                                        Ride Confirmation
                                    </div>
                                </div>
                                <div className="text-base text-ellipsis line-clamp-3 text-gray-800">
                                    After selecting a cab, users confirm the ride, and the app assigns the nearest available driver based on real-time location data.
                                </div>
                            </div>
                            <div className=" my-5 bg-sky-50 h-auto relative overflow-hidden rounded-xl hover:before:rounded-xl hover:after:rounded-xl after:rounded-tl-xl p-5 flex-col group after:absolute after:duration-700 after:hover:w-full after:hover:h-full after:h-[50px] after:w-[50px] after:p-4 after:top-0 after:left-0 before:z-[33]  before:absolute before:duration-700 before:hover:w-full before:hover:h-full before:h-[50px] before:w-[50px] before:p-4 before:bottom-0 before:right-0">
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] top-[-27%] opacity-0 group-hover:opacity-100 duration-700 left-[-17%]  rotate-45"></span>
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] bottom-[-27%] opacity-0 group-hover:opacity-100 duration-700 -z-0 right-[-17%]  rotate-45"></span>
                                <div className="flex items-center gap-x-3 pb-3">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="h-[50px] w-[50px] text-gray-300 group-hover:text-[#051626c2] duration-700" xmlns="http://www.w3.org/2000/svg"><title></title>
                                        <path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"></path></svg>
                                    <div className="text-lg text-[#051626c2] font-semibold">
                                        Real-Time Tracking
                                    </div>
                                </div>
                                <div className="text-base text-ellipsis line-clamp-3 text-gray-800">
                                    Users can track the cab's movement on a map in real time, estimating its arrival time and ensuring transparency throughout.
                                </div>
                            </div>
                            <div className=" my-5 bg-sky-50 h-auto relative overflow-hidden rounded-xl hover:before:rounded-xl hover:after:rounded-xl after:rounded-tl-xl p-5 flex-col group after:absolute after:duration-700 after:hover:w-full after:hover:h-full after:h-[50px] after:w-[50px] after:p-4 after:top-0 after:left-0 before:z-[33]  before:absolute before:duration-700 before:hover:w-full before:hover:h-full before:h-[50px] before:w-[50px] before:p-4 before:bottom-0 before:right-0">
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] top-[-27%] opacity-0 group-hover:opacity-100 duration-700 left-[-17%]  rotate-45"></span>
                                <span className="absolute w-[100px] h-[100px] bg-[#05162659] bottom-[-27%] opacity-0 group-hover:opacity-100 duration-700 -z-0 right-[-17%]  rotate-45"></span>
                                <div className="flex items-center gap-x-3 pb-3">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="h-[50px] w-[50px] text-gray-300 group-hover:text-[#051626c2] duration-700" xmlns="http://www.w3.org/2000/svg"><title></title>
                                        <path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"></path></svg>
                                    <div className="text-lg text-[#051626c2] font-semibold">
                                        Payment and Feedback
                                    </div>
                                </div>
                                <div className="text-base text-ellipsis line-clamp-3 text-gray-800">
                                    Upon reaching the destination, the app charges the user's linked payment method, and users can provide feedback based on their overall experience.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Flow-Chart second ends */}

            {/* wide range section */}
            <div className="relative bg-gray-900 py-8 sm:py-16 text-white">
                <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-2 relative pb-5">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center">
                        <span className="font-normal">Our Wide Range of On-demand </span>
                        <span className="font-bold text-theme2">Taxi Booking Models</span>
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-5 z-10">
                    <div className="flex flex-row flex-wrap w-full mt-5 relative z-40 items-strentch">
                        <div className="lg:w-1/3 overflow-hidden w-full h-auto relative -z-10 sm:w-1/2 p-3">
                            <div className="bg-white w-full p-4  h-full relative before:absolute before:-z-40 before:h-[80px] before:w-[80px] before:duration-700 before:bg-theme1 before:top-[-3px] before:left-[-3px] before:hover:w-[100%] before:hover:h-[100%] after:w-[80px] after:h-[80px] after:absolute after:bottom-[-3px] after:right-[-3px] before:rounded-2xl after:rounded-2xl after: rounded-2xl after:bg-theme2 after:-z-20 after:duration-700 after:hover:w-full after:hover:h-full ">
                                <div className="flex gap-x-3 items-center">
                                    <div className="h-[50px] w-[50px] rounded-full roundedrt-3xl bg-blue-100 flex justify-center items-center">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-[30px] h-[50px] text-gray-800" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path></svg>
                                    </div>
                                    <div className="text-lg font-semibold text-gray-800">
                                        User-Centric Taxi Model
                                    </div>
                                </div>
                                <div className="text-sm text-black mt-2 ">
                                    The user-focused model of a taxi booking application emphasizes providing a smooth experience for passengers. It features an easy-to-navigate mobile interface for quick bookings, real-time GPS tracking, and various payment options. Moreover, collecting user feedback and ratings helps uphold the quality of the taxi booking service, ensuring high levels of customer satisfaction.
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 overflow-hidden w-full h-auto relative -z-10 sm:w-1/2 p-3">
                            <div className="bg-white w-full p-4  h-full relative before:absolute before:-z-40 before:h-[80px] before:w-[80px] before:duration-700 before:bg-theme1 before:top-[-3px] before:left-[-3px] before:hover:w-[100%] before:hover:h-[100%] after:w-[80px] after:h-[80px] after:absolute after:bottom-[-3px] after:right-[-3px] before:rounded-2xl after:rounded-2xl after: rounded-2xl after:bg-theme2 after:-z-20 after:duration-700 after:hover:w-full after:hover:h-full ">
                                <div className="flex gap-x-3 items-center">
                                    <div className="h-[50px] w-[50px] rounded-full roundedrt-3xl bg-blue-100 flex justify-center items-center">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-[30px] h-[50px] text-gray-800" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path></svg>
                                    </div>
                                    <div className="text-lg font-semibold text-gray-800">
                                        Driver-Centric Taxi Model
                                    </div>
                                </div>
                                <div className="text-sm text-black mt-2 ">
                                    This model emphasizes driver satisfaction, offering a user-friendly driver app with straightforward navigation and effective route optimization. Fair compensation plans, fast payment processing, and incentives for highly rated drivers foster a committed and skilled workforce, improving overall service reliability and quality.
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 overflow-hidden w-full h-auto relative -z-10 sm:w-1/2 p-3">
                            <div className="bg-white w-full p-4  h-full relative before:absolute before:-z-40 before:h-[80px] before:w-[80px] before:duration-700 before:bg-theme1 before:top-[-3px] before:left-[-3px] before:hover:w-[100%] before:hover:h-[100%] after:w-[80px] after:h-[80px] after:absolute after:bottom-[-3px] after:right-[-3px] before:rounded-2xl after:rounded-2xl after: rounded-2xl after:bg-theme2 after:-z-20 after:duration-700 after:hover:w-full after:hover:h-full ">
                                <div className="flex gap-x-3 items-center">
                                    <div className="h-[50px] w-[50px] rounded-full roundedrt-3xl bg-blue-100 flex justify-center items-center">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-[30px] h-[50px] text-gray-800" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path></svg>
                                    </div>
                                    <div className="text-lg font-semibold text-gray-800">
                                        Dynamic Taxi Pricing Model
                                    </div>
                                </div>
                                <div className="text-sm text-black mt-2 ">
                                    Adopting a dynamic pricing model enables flexible fare calculations based on demand and supply. During peak times or when demand is high, prices can adjust to encourage more drivers to be available, ensuring prompt responses to user requests. Clear communication regarding pricing changes fosters trust among both drivers and passengers.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* wide range section ends*/}

            <PortfolioSection />

            {/* why choose us start */}
            <section className="bg-gray-100">

                <div className="relative isolate py-6 md:py-8 lg:py-16">
                    <div className="overflow-hidden">
                        <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
                            <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center text-balance

                first:*:font-normal

                last:*:font-bold last:*:text-theme2
            ">
                                <span>Why Opt for a Custom Taxi Booking App </span>
                                <span> Development Solution Instead of a Pre-Made Option?</span>

                            </p>
                            <div className="md:text-base text-sm text-black/70 mt-3">

                            </div>
                        </div>
                    </div>
                    <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="
            flex flex-col overflow-x-auto md:pt-8

            [&_table]:table-auto [&_table]:border-separate [&_table]:border-spacing-4

            [&_thead]:md:text-sm [&_thead]:text-xs [&_thead]:uppercase

            [&_thead>tr>th]:text-gray-700 [&_thead>tr>th]:md:px-5 [&_thead>tr>th]:px-3 [&_thead>tr>th]:md:font-bold [&_thead>tr>th]:font-normal [&_thead>tr>th]:text-left first:[&_thead>tr>th]:rounded-l-xl last:[&_thead>tr>th]:rounded-r-xl [&_thead>tr>th]:text-nowrap

            [&_tbody]:md:text-base [&_tbody]:text-sm

            [&_tbody>tr>td]:bg-gray-100 [&_tbody>tr>td]:cursor-default [&_tbody>tr>td]:border-2 [&_tbody>tr>td]:border-black/5 [&_tbody>tr>td]:text-black [&_tbody>tr>td]:md:p-5 [&_tbody>tr>td]:p-3 [&_tbody>tr>td]:text-left [&_tbody>tr>td]:rounded-xl
            ">
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">Feature</th>
                                        <th scope="col">Custom Solution</th>
                                        <th scope="col">Ready-Made Solution</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Customization</td>
                                        <td>Highly customizable to meet specific business needs and requirements.</td>
                                        <td>Limited customization options, often adhering to pre-defined features and designs.</td>
                                    </tr>
                                    <tr>
                                        <td>Scalability</td>
                                        <td>Easily scalable to accommodate future growth and changes in business requirements.</td>
                                        <td>May have limitations on scalability and may require additional modules for expansion.</td>
                                    </tr>
                                    <tr>
                                        <td>Unique Features</td>
                                        <td>Can include unique features and functionalities tailored to the business model.</td>
                                        <td>Limited to pre-built features; difficult to incorporate unique or specialized features.</td>
                                    </tr>
                                    <tr>
                                        <td>Integration</td>
                                        <td>Seamless integration with existing systems, APIs, and third-party services.</td>
                                        <td>Limited integration options; may require additional development for specific integrations.</td>
                                    </tr>
                                    <tr>
                                        <td>Control Over Updates</td>
                                        <td>Complete control over updates and maintenance schedules.</td>
                                        <td>Dependent on the vendor for updates, which may not align with specific business timelines.</td>
                                    </tr>
                                    <tr>
                                        <td>Ownership and Control</td>
                                        <td>Full ownership and control over the source code and intellectual property.</td>
                                        <td>Limited ownership and control as the solution is provided by a third-party vendor.</td>
                                    </tr>
                                    <tr>
                                        <td>Cost Structure</td>
                                        <td>Upfront development costs but potential long-term cost savings due to tailored features.</td>
                                        <td>Lower upfront costs but may have hidden fees or ongoing subscription costs.</td>
                                    </tr>
                                    <tr>
                                        <td>Time-to-Market</td>
                                        <td>Longer development time but faster deployment of features that align with business needs.</td>
                                        <td>Quick deployment, but may require compromises on specific business requirements.</td>
                                    </tr>
                                    <tr>
                                        <td>Support and Maintenance</td>
                                        <td>Customized support and maintenance plans to address specific needs.</td>
                                        <td>Generalized support with limited flexibility to address specific concerns.</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div></section>
            {/* why choose us Ends */}



            {/* accordian start */}
            <div className='py-10'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <section className='lg:w-4/5 w-full mx-auto md:mt-16 mt-8'>
                        <div className='max-w-[85rem] sm:px-6 lg:px-8 mx-auto'>
                            <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
                                <h2 className='text-2xl font-bold md:text-4xl md:leading-tight'>
                                    Your questions, answered
                                </h2>
                                <p className='mt-1 text-gray-300'>
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
    )
}

export default taxiAppDevelopmentCompany
