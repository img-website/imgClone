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

function DoctorDemand() {
    const accordionItems = [
        {
            title: "What is the benefit of having a doctor's appointment app?",
            content: "Building a doctor's appointment app for your business can improve efficiency and simplify appointment processes. Furthermore, it improves management capabilities and eliminates errors." 
        },
        {
            title:
                "How long does it take to develop a doctor's appointment app?",
            content: "Developing a doctor's appointment app can take from 14 days to 20 days. However, this could vary depending on the features and custom requirements added to the app." 
        },
        {
            title: "Why should I opt Twin Power Software doctor's appointment app?",
            content: "With our years of experience in the field of app development, we ensure to provide quality solutions that best suit our client businesses. We also provide readymade and on-demand applications to cater to all the needs of our clients." 
        }
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
                                src='/img/doctor-on-demand-2048w.webp'
                                alt='Transform Your Ideas into Reality with Our Mobile App Development Expertise.
'
                            />

                            <div className='flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between'>
                                <div className='xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center'>
                                    <div className='font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]'>
                                        <span className='colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100'>
                                            Doctor On-Demand App Development Company
                                        </span>
                                    </div>
                                    <div className='max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto'>
                                        If you're looking to develop a platform that seamlessly connects healthcare providers and patients, we’re here to assist you. Twin Power Software is a leading Doctor On-Demand App Development Company, equipped with top professionals to turn your vision into reality. Your vision, our expertise!
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
                                            src='/img/doctor-on-demand-app-development-company.webp'
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
                                    Get Your Online Doctor Appointment App
                                </span>
                                <span className='font-bold'> Development Solution from Us</span>
                            </p>
                            <p className='mt-4 text-sm md:text-base leading-7 text-slate-600'>
                                As mobile platforms continue to rise, developing a doctor-on-demand app can be a strategic decision. The integration of easy scheduling, high-quality care, and secure payment options is driving market growth. Are you ready to move forward? If so, take advantage of our Doctor-on-Demand app development services to enhance your business.
                            </p>
                            <p className='mt-4 text-sm md:text-base leading-7 text-slate-600'>
                                Our talented team of doctor-on-demand app developers, with extensive experience, can create and launch a user-friendly solution tailored to your needs. As one of the leading companies in Doctor-on-Demand app development, we have a dedicated team passionate about delivering an exceptional user experience and ensuring smooth operations.
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

            {/* benifit section start */}
            <div className="relative py-6 md:py-8 lg:py-16 bg-gray-100">
                <p className="
        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center
        first:*:font-normal
        last:*:font-bold last:*:text-theme2
    ">
                    <span>The Advantages of Creating a </span>
                    <span> Doctor Appointment App </span>
                </p>
                <div className="md:text-base text-sm text-black/70 mt-3 text-balance text-center">
                    Doctor appointment booking apps provide numerous advantages for both patients and healthcare providers. Here are some of the primary benefits:
                </div>
                <div className="mx-auto max-w-7xl px-5 z-10 pt-10">
                    <ul className="
        flex flex-row flex-wrap w-full relative z-40 items-stretch text-gray-800

        *:lg:w-1/2 *:h-auto *:p-3 md:*:p-5 *:md:hover:*:scale-105

        *:*:flex *:*:bg-white *:*:h-full *:*:relative *:*:p-6 md:*:*:p-10 *:*:flex-nowrap *:*:border-b-4 md:hover:*:*:border-gray-800 *:*:duration-300 *:*:rounded-xl *:* *:*:shadow-xl

        first:*:*:*:flex first:*:*:*:grow-0

        [&_.icon]:md:w-[60px] [&_.icon]:md:h-[60px] [&_.icon]:h-[50px] [&_.icon]:w-[50px] [&_.icon]:bg-gray-200 [&_.icon]:rounded-l-3xl [&_.icon]:rounded-r-4xl [&_.icon]:rounded-full [&_.icon]:flex [&_.icon]:items-center [&_.icon]:justify-center

        [&_.icon>svg]:size-8 [&_.icon>svg]:text-gray-900

        last:*:*:*:grow last:*:*:*:flex last:*:*:*:flex-col last:*:*:*:items-start last:*:*:*:justify-center last:*:*:*:pl-5

        [&_.title]:text-left [&_.title]:md:text-lg [&_.title]:text-base [&_.title]:font-semibold [&_.title]:duration-300 [&_.title]:leading-6 [&_.title]:text-gray-700 [&_.title]:line-clamp-2 [&_.title]:pb-4

        [&_.tagline]:text-base [&_.tagline]:text-gray-700
        ">
                        <li>
                            <div>
                                <div className="icons">
                                    <div className="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="title">Convenience</div>
                                    <div className="tagline">Doctor appointment booking apps provide patients with the convenience of booking appointments anytime and anywhere, without the need to make phone calls or visit a healthcare facility in person.</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="icons">
                                    <div className="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M145.61 464h220.78c19.8 0 35.55-16.29 33.42-35.06C386.06 308 304 310 304 256s83.11-51 95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8 0-35.37 16.28-33.41 35.06C124.89 205 208 201 208 256s-82.06 52-95.8 172.94c-2.14 18.77 13.61 35.06 33.41 35.06z"></path><path d="M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.23 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="title">Time-saving</div>
                                    <div className="tagline">Booking appointments through the app saves time for both patients and healthcare providers by reducing the need for phone calls and administrative tasks.</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="icons">
                                    <div className="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256.65 38.984l-49.697 100.702-111.13 16.146 80.413 78.385-18.982 110.68 99.396-52.256 99.397 52.256-18.983-110.68 80.413-78.384-111.127-16.146-49.7-100.702zM112 308.826l-26.674 54.05-59.646 8.665 43.16 42.073-10.188 59.403L112 444.97l53.348 28.046-10.188-59.403 43.16-42.072-59.646-8.665L112 308.825zm288 0l-26.674 54.05-59.646 8.665 43.16 42.073-10.188 59.403L400 444.97l53.348 28.046-10.188-59.403 43.16-42.072-59.646-8.665L400 308.825z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="title">Improved patient experience</div>
                                    <div className="tagline">Doctor appointment booking apps help to reduce wait times and improve the overall patient experience by providing faster and more efficient appointment scheduling.</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="icons">
                                    <div className="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143Zm-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"></path><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="title">Increased accessibility</div>
                                    <div className="tagline">Doctor appointment booking apps increase accessibility to healthcare by providing patients with a wider range of healthcare providers and services.</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="icons">
                                    <div className="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="title">Better appointment management</div>
                                    <div className="tagline">Healthcare providers can manage their appointments more efficiently through the app by reducing no-shows and ensuring that patients show up at the correct time.</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="icons">
                                    <div className="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path><path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="title">Improved communication</div>
                                    <div className="tagline">Doctor appointment booking apps enable patients to communicate with healthcare providers through messaging, which can improve patient engagement and satisfaction.</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="icons">
                                    <div className="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="title">Personalization</div>
                                    <div className="tagline">Doctor appointment booking apps can offer personalized recommendations and reminders based on a patient's medical history, preferences, and habits.</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="icons">
                                    <div className="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="title">Health tracking</div>
                                    <div className="tagline">Doctor appointment booking apps can also help patients track their health by providing access to medical records, test results, and other health information. Overall, doctor appointment booking apps offer many benefits for patients and healthcare providers by providing a more efficient and convenient way to manage healthcare appointments.</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* benifit section Ends */}

            {/* multiple users */}
            <div className="relative isolate py-6 md:py-8 lg:py-16">
                <div className="overflow-hidden">
                    <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
                        <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                first:*:font-normal

                last:*:font-bold last:*:text-theme2
            "><span>On Demand Doctor App  </span>
                            <span> For Various Users</span></p>
                        <div className="md:text-base text-sm text-black/70 mt-3 text-balance">
                            We provide comprehensive, tailored Doctor On-Demand app solutions for clinics, doctors, and hospitals, facilitating virtual consultations and appointments.
                        </div>
                    </div>
                </div>
                <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
                    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5 sm:mt-8 md:mt-10 ">
                        <div className="multiple-user flex  flex-col items-start justify-between bg-white rounded-2xl shadow-xl shadow-gray-300">
                            <a href="javascript:;" className='flex w-full'>
                                <Image className="size-full aspect-[385/221] object-cover rounded-2xl" width="385" height="217" src="/img/hospital-user.webp" alt="Hospitals" />
                            </a>
                            <div className="w-full p-6 text-center">
                                <div className="group relative text-center">
                                    <div className="md:text-2xl text-lg line-clamp-2 font-semibold">
                                        Hospitals
                                    </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">The hospitals can use the on-demand doctor app to provide online Telemedicine Services.</p>
                                </div>
                                <div className="mt-8 flex gap-4 justify-center">
                                    <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 md:py-3 px-3 md:px-4 bg-slate-900 text-white hover:bg-slate-700" href="/contact-us">
                                        <span className=" ">
                                            Get In Touch <span aria-hidden="true" className="">→</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="multiple-user flex flex-col items-start justify-between bg-white rounded-2xl shadow-xl shadow-gray-300">
                            <a href="/" className='flex w-full'>
                                <Image className="size-full aspect-[385/221] object-cover rounded-2xl" width="385" height="217" src="/img/dactor-user.webp" alt="Doctors" />
                            </a>
                            <div className="w-full p-6 text-center">
                                <div className="group relative text-center">
                                    <div className="md:text-2xl text-lg line-clamp-2 font-semibold">
                                        Doctors
                                    </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Doctors can provide virtual consultations anytime, anywhere, and can manage and schedule their online appointments.</p>
                                </div>
                                <div className="mt-8 flex gap-4 justify-center">
                                    <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 md:py-3 px-3 md:px-4 bg-slate-900 text-white hover:bg-slate-700" href="/contact-us">
                                        <span className=" ">
                                            Get In Touch <span aria-hidden="true" className="">→</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="multiple-user flex  flex-col items-start justify-between bg-white rounded-2xl shadow-xl shadow-gray-300">
                            <a href="/" className='flex w-full'>
                                <Image className="size-full aspect-[385/221] object-cover rounded-2xl" width="385" height="217" src="/img/pharmacy-user.webp" alt="Pharmacy/Labs" />
                            </a>
                            <div className="w-full p-6 text-center">
                                <div className="group relative text-center">
                                    <div className="md:text-2xl text-lg line-clamp-2 font-semibold">
                                        Pharmacy/Labs
                                    </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">The pharmacy and Laboratories can access the patient-doctor medical reports and other valuable data.</p>
                                </div>
                                <div className="mt-8 flex gap-4 justify-center">
                                    <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 md:py-3 px-3 md:px-4 bg-slate-900 text-white hover:bg-slate-700" href="/contact-us">
                                        <span className=" ">
                                            Get In Touch <span aria-hidden="true" className="">→</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* multiple users */}

            {/* flow-chart */}
            <div className="relative isolate py-6 md:py-8 lg:py-16">
                <div className="overflow-hidden">
                    <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
                        <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                first:*:font-normal

                last:*:font-bold last:*:text-theme2
            "><span>How Does a Doctor Appointment 
            </span>
                            <span> Booking Application Function?</span></p>
                        <div className="md:text-base text-sm text-black/70 mt-3 text-balance">
                        Here’s a brief summary of how your application will operate. When you reach out to our doctor app development team, they will design an interface that ensures your customers can easily access your services at competitive prices.
                        </div>
                    </div>
                </div>
                <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
                    <div className="flex flex-wrap mt-5 sm:mt-8 md:mt-10 items-stretch justify-center">
                        <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                            <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-[20px] flex items-center justify-center flex-col relative">
                                <div className="md:text-2xl text-lg text-cyan-500 line-clamp-2 font-semibold">Search for healthcare providers</div>
                                <div className="text-center text-sm line-clamp-6">Patients can search for healthcare providers by location, specialty, insurance accepted, availability, and other relevant factors.</div>
                                <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                                    <div className="size-14 md:group-hover:bg-cyan-500 border border-cyan-500 z-50 bg-white text-cyan-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative duration-300">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29 448 448"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                            <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-[20px] flex items-center justify-center flex-col relative">
                                <div className="md:text-2xl text-lg text-rose-500 line-clamp-2 font-semibold">Select a provider and appointment time</div>
                                <div className="text-center text-sm line-clamp-6">Patients can browse through the list of available providers and choose the one that meets their requirements. They can then select an available appointment time that suits their schedule.</div>
                                <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                                    <div className="size-14 md:group-hover:bg-rose-500 border border-rose-500 z-50 bg-white text-rose-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative duration-300">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M256 456c-110.3 0-200-89.7-200-200 0-54.8 21.7-105.9 61.2-144 6.4-6.2 16.6-6 22.7.4 6.2 6.4 6 16.6-.4 22.7-33.1 32-51.3 74.9-51.3 120.9 0 92.5 75.3 167.8 167.8 167.8S423.8 348.5 423.8 256c0-87.1-66.7-159-151.8-167.1v62.6c0 8.9-7.2 16.1-16.1 16.1s-16.1-7.2-16.1-16.1V72.1c0-8.9 7.2-16.1 16.1-16.1 110.3 0 200 89.7 200 200S366.3 456 256 456z"></path><path d="M175.9 161.9l99.5 71.5c13.5 9.7 16.7 28.5 7 42s-28.5 16.7-42 7c-2.8-2-5.2-4.4-7-7l-71.5-99.5c-3.2-4.5-2.2-10.8 2.3-14 3.6-2.6 8.3-2.4 11.7 0z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                            <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-[20px] flex items-center justify-center flex-col relative">
                                <div className="md:text-2xl text-lg text-green-500 line-clamp-2 font-semibold">Provide patient information</div>
                                <div className="text-center text-sm line-clamp-6">Patients are required to provide their personal and medical information when booking an appointment, such as name, age, gender, medical history, and reason for the appointment.</div>
                                <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                                    <div className="size-14 md:group-hover:bg-green-500 border border-green-500 z-50 bg-white text-green-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative duration-300">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9-3h2v5h-2V4zm9 16H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11zm-9-4H9v2H7v-2H5v-2h2v-2h2v2h2v2zm2-1.5V13h6v1.5h-6zm0 3V16h4v1.5h-4z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                            <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-[20px] flex items-center justify-center flex-col relative">
                                <div className="md:text-2xl text-lg text-violet-500 line-clamp-2 font-semibold">Confirm the appointment</div>
                                <div className="text-center text-sm line-clamp-6">Once the patient has selected the provider, appointment time, and provided their information, they can confirm the appointment.</div>
                                <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                                    <div className="size-14 md:group-hover:bg-violet-500 border border-violet-500 z-50 bg-white text-violet-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative duration-300">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                            <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-[20px] flex items-center justify-center flex-col relative">
                                <div className="md:text-2xl text-lg text-amber-500 line-clamp-2 font-semibold">Receive appointment reminders</div>
                                <div className="text-center text-sm line-clamp-6">Patients receive reminders via the app, email, or text message to ensure that they do not forget their appointment.</div>
                                <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                                    <div className="size-14 md:group-hover:bg-amber-500 border border-amber-500 z-50 bg-white text-amber-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative duration-300">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                            <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-[20px] flex items-center justify-center flex-col relative">
                                <div className="md:text-2xl text-lg text-fuchsia-500 line-clamp-2 font-semibold">Reschedule or cancel appointments</div>
                                <div className="text-center text-sm line-clamp-6">If patients need to change their appointment time, they can reschedule or cancel it through the app.</div>
                                <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                                    <div className="size-14 md:group-hover:bg-fuchsia-500 border border-fuchsia-500 z-50 bg-white text-fuchsia-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative duration-300">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                            <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-[20px] flex items-center justify-center flex-col relative">
                                <div className="md:text-2xl text-lg text-teal-500 line-clamp-2 font-semibold">Check-in for the appointment</div>
                                <div className="text-center text-sm line-clamp-6">Patients can check-in for their appointment through the app, which helps to reduce waiting times and improve the overall patient experience.</div>
                                <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                                    <div className="size-14 md:group-hover:bg-teal-500 border border-teal-500 z-50 bg-white text-teal-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative before:absolute before:bg-white before:opacity-0 md:group-hover:before:opacity-100 before:h-5 before:w-2 before:bottom-1 before:right-1 before:duration-300 duration-300 md:group-hover:before:bg-cyan-500">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Flow-Chart ends */}

            <PortfolioSection />


            {/* accordian start */}
            <div className='py-10'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <section className='lg:w-4/5 w-full mx-auto md:mt-16 mt-8'>
                        <div className='max-w-[85rem] sm:px-6 lg:px-8 mx-auto'>
                            <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
                                <h2 className='text-2xl font-bold md:text-4xl md:leading-tight'>
                                    Your questions, answered
                                </h2>
                                <p className='mt-1 text-gray-600'>
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

export default DoctorDemand
