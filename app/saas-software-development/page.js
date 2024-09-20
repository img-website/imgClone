import React from 'react'
import Image from "next/image";
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Cta from '@/components/cta/Cta';
import PortfolioSection from '@/components/portfolio/portfolio';
import Blog from '@/components/blog/Blog';
import Form from '@/components/contactForm/Form';
import Gallery from '@/components/gallery/Gallery';

function saasSoftwareDevelopment() {
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
                                    SaaS Software Development Company
                                </span>
                            </div>
                            <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
                                Are you seeking high-quality SaaS software development services? TwinPower Software is your ideal partner. We have a wealth of experience in developing SaaS applications and can deliver intuitive, secure, and scalable solutions tailored to your needs.
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
            <div class="relative isolate overflow-hidden py-6 md:py-8 lg:py-16 bg-gray-100">
                <div class="overflow-hidden">

                    <div class="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10">
                        <p class="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center
                first:*:font-normal
                last:*:font-bold last:*:text-theme2
            ">
                            <span>Enhance Your Online Presence with </span>
                            <span> Our Saas Software Development Services </span>
                        </p>
                        <div class="md:text-base text-sm text-black/70 mt-3 text-balance text-center">
                            Embrace the future of SaaS software solutions! TwinPower Software is a premier SaaS development company dedicated to creating customized platforms that align perfectly with your specific business requirements. From initial concept to final execution, our skilled SaaS team works collaboratively to provide intuitive and innovative software. Unlock your potential with our exceptional custom SaaS services.
                        </div>
                        <ul class="flex flex-row flex-wrap w-full relative z-40 items-stretch text-gray-800 pt-5 *:lg:w-1/3 *:md:w-1/2 *:h-auto *:p-3 *:*:size-full *:*:bg-white *:*:rounded-3xl *:*:p-6 *:*:relative *:*:shadow-lg *:*:duration-500 *:*:transition-all [&_.icon]:size-10 [&_.icon]:text-gray-700 [&_.icon>svg]:size-full [&_.title]:text-lg [&_.title]:font-semibold [&_.title]:text-gray-900 [&_.title]:py-3 [&_.tagline]:text-base [&_.tagline]:text-gray-600">
                            <li>
                                <div>
                                    <div class="icon">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="m9 9 5 12 1.774-5.226L21 14 9 9z"></path><path d="m16.071 16.071 4.243 4.243"></path><path d="m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"></path></svg>
                                    </div>
                                    <div class="title">Integration of Enterprise Resource Planning (ERP) Systems</div>
                                    <div class="tagline">
                                        Aligning your business operations is essential. Our ERP integration solution seamlessly consolidates data activities, bringing various systems into one cohesive platform. This integration provides your business with real-time insights and streamlined workflows.

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19z"></path></svg>
                                    </div>
                                    <div class="title">Business Intelligence and Data Analytics Platforms</div>
                                    <div class="tagline">
                                        In today’s digital era, data is the new currency, crucial for achieving lasting success. Our data analytics solutions enable you to fully leverage your data assets, transforming raw data into valuable insights. Reach out to us today!
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="icon">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9.183 6.117a6 6 0 1 0 4.511 3.986"></path><path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954"></path></svg>
                                    </div>
                                    <div class="title">CRM Solutions for Enhanced Customer Engagement</div>
                                    <div class="tagline">
                                        Establishing strong connections with customers is essential. Engaging with them effectively boosts their loyalty and drives revenue. Our customized CRM solutions, from lead generation to sales automation, empower you to deliver personalized experiences. Take advantage of our outstanding services today!
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="flex flex-wrap mt-5 sm:mt-8 md:mt-10">
                            <div class="w-full lg:w-[40%]">
                                <div class="pb-5">
                                    <p class="max-md:text-2xl/tight max-xl:text-2xl/tight text-2xl/tight tracking-[-0.04em] text-black lg:text-left text-center">
                                        <span>User-Centric <i class="text-theme2 font-bold">User-Focused SaaS Development </i> Company at Your Service </span>
                                    </p>
                                </div>
                                <Image class="lg:w-full mx-auto rounded-[20px] [-webkit-mask-size:contain] [-webkit-mask-position:center_center] [-webkit-mask-repeat:no-repeat] mask content1-img" width="336" height="487" src="https://images.unsplash.com/photo-1581093206409-01076de81a1b?cs=tinysrgb&fit=crop&q=80&w=400&h=400" alt="User-Centric SaaS Software Development Company That Serve" />
                            </div>
                            <div class="w-full lg:w-[60%]">
                                <div class="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10

                            *:flex *:w-full *:flex-wrap

                            *:*:w-full *:*:sm:w-1/2 *:*:px-10 *:*:py-7 md:hover:*:*:md:bg-white md:hover:*:*:md:shadow-lg *:*:shadow-gray-50 *:*:duration-200 *:*:rounded-xl
                            
                            *:*:*:md:max-w-xs *:*:*:mx-auto

                            [&_svg]:mb-3 [&_svg]:text-theme2

                            [&_.title]:font-medium [&_.title]:text-xl [&_.title]:text-gray-900

                            [&_.tagline]:text-base [&_.tagline]:mt-2 [&_.tagline]:text-gray-600
                        ">
                                    <ul>
                                        <li>
                                            <div>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"></path></svg>
                                                <p class="title">SMBs</p>
                                                <p class="tagline">
                                                    Our SaaS development services provide customized solutions designed to optimize operations and enhance productivity. We deliver tailored approaches that specifically address the challenges and requirements faced by businesses.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6-1.41 1.41zM2 6v12h2V6H2z"></path></svg>
                                                <p class="title"> Start-ups</p>
                                                <p class="tagline">
                                                    We offer tailored software development services aimed at empowering startups with scalable and budget-friendly solutions. Our objective is to accelerate growth, helping you improve operational efficiency and gain a competitive edge in the marketplace.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg>
                                                <p class="title">Enterprises</p>
                                                <p class="tagline">
                                                    We provide complete, customized software solutions that cater to the complex and diverse needs of large enterprises. Our emphasis is on scalability, security, integration, and performance, supporting your digital transformation efforts.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M 20 5 L 20 10.46875 L 17 12.25 L 17 9.21875 L 15.5 10.15625 L 12 12.25 L 12 9.21875 L 10.5 10.15625 L 5.5 13.15625 L 5 13.4375 L 5 27 L 27 27 L 27 5 Z M 22 7 L 25 7 L 25 25 L 7 25 L 7 14.53125 L 10 12.75 L 10 15.78125 L 11.5 14.84375 L 15 12.75 L 15 15.78125 L 16.5 14.84375 L 21.5 11.84375 L 22 11.5625 Z M 9 17 L 9 19 L 11 19 L 11 17 Z M 13 17 L 13 19 L 15 19 L 15 17 Z M 17 17 L 17 19 L 19 19 L 19 17 Z M 21 17 L 21 19 L 23 19 L 23 17 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 13 21 L 13 23 L 15 23 L 15 21 Z M 17 21 L 17 23 L 19 23 L 19 21 Z M 21 21 L 21 23 L 23 23 L 23 21 Z"></path></svg>
                                                <p class="title">Industries</p>
                                                <p class="tagline">
                                                    We cater to diverse industries and make sure to deliver the best SaaS software development services. We leverage industry-specific expertise and technologies. We can help you deliver robust and tailored solutions to optimize workflows.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Ends */}

            <Cta />

            <Gallery />

            {/* development section start */}
            <div class="relative py-6 md:py-8 lg:py-16 bg-gray-100">
                <p class="
            max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center
            first:*:font-normal
            last:*:font-bold last:*:text-theme2
        ">
                    <span>Our SaaS </span>
                    <span> Development Solutions</span>
                </p>
                <div class="md:text-base text-sm text-black/70 mt-3 text-balance text-center">
                    Discover our SaaS development services, designed to deliver scalable and effective solutions tailored to your business requirements. From ideation to deployment, we excel in creating innovative software products that drive progress and improve user experiences. Join us as a partner for transformative SaaS solutions.
                </div>
                <div class="mx-auto max-w-7xl px-5 z-10 pt-10">
                    <ul class="
            flex flex-row flex-wrap w-full relative z-40 items-stretch text-gray-800

            *:lg:w-1/2 *:h-auto *:p-3 md:*:p-5 *:md:hover:*:scale-105

            *:*:flex *:*:bg-white *:*:h-full *:*:relative *:*:p-6 md:*:*:p-10 *:*:flex-nowrap *:*:border-b-4 md:hover:*:*:border-gray-800 *:*:duration-300 *:*:rounded-xl *:*:rounded-br-none *:*:shadow-xl

            first:*:*:*:flex first:*:*:*:grow-0

            [&_.icon]:md:w-[60px] [&_.icon]:md:h-[60px] [&_.icon]:h-[50px] [&_.icon]:w-[50px] [&_.icon]:bg-gray-200 [&_.icon]:rounded-l-3xl [&_.icon]:rounded-r-4xl [&_.icon]:rounded-full [&_.icon]:flex [&_.icon]:items-center [&_.icon]:justify-center

            [&_.icon>svg]:size-10 [&_.icon>svg]:text-gray-900

            last:*:*:*:grow last:*:*:*:flex last:*:*:*:flex-col last:*:*:*:items-start last:*:*:*:justify-center last:*:*:*:pl-5

            [&_.title]:text-left [&_.title]:md:text-lg [&_.title]:text-base [&_.title]:font-semibold [&_.title]:duration-300 [&_.title]:leading-6 [&_.title]:text-gray-700 [&_.title]:line-clamp-2 [&_.title]:pb-4

            [&_.tagline]:text-base [&_.tagline]:text-gray-700
            ">
                        <li>
                            <div>
                                <div class="icons">
                                    <div class="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM18 13h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="title">Tailored SaaS Development Services</div>
                                    <div class="tagline">
                                        Custom solutions designed to meet your specific needs, guaranteeing scalability, security, and smooth integration with your existing systems. Take advantage of our tailored SaaS development services today.
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div class="icons">
                                    <div class="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.4183 7.5827 20 12.001 20ZM13.3345 12C14.1629 12 14.8345 11.3284 14.8345 10.5C14.8345 9.67157 14.1629 9 13.3345 9H10.501V12H13.3345ZM13.3345 7C15.2675 7 16.8345 8.567 16.8345 10.5C16.8345 12.433 15.2675 14 13.3345 14H10.501V17H8.50098V7H13.3345Z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="title">SaaS Product Improvement Services</div>
                                    <div class="tagline">
                                        Upgrade your current SaaS product by adding new features. Achieve enhanced user experience and optimized performance. Stay competitive in the market with our SaaS development services. Get ready to access the best solutions in the industry.
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div class="icons">
                                    <div class="icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M6,9 C7.65685425,9 9,7.65685425 9,6 C9,4.34314575 7.65685425,3 6,3 C4.34314575,3 3,4.34314575 3,6 C3,7.65685425 4.34314575,9 6,9 Z M6,3 L6,0 M6,12 L6,9 M0,6 L3,6 M9,6 L12,6 M2,2 L4,4 M8,8 L10,10 M10,2 L8,4 M4,8 L2,10 M18,12 C19.6568542,12 21,10.6568542 21,9 C21,7.34314575 19.6568542,6 18,6 C16.3431458,6 15,7.34314575 15,9 C15,10.6568542 16.3431458,12 18,12 Z M18,6 L18,3 M18,15 L18,12 M12,9 L15,9 M21,9 L24,9 M14,5 L16,7 M20,11 L22,13 M22,5 L20,7 M16,11 L14,13 M9,21 C10.6568542,21 12,19.6568542 12,18 C12,16.3431458 10.6568542,15 9,15 C7.34314575,15 6,16.3431458 6,18 C6,19.6568542 7.34314575,21 9,21 Z M9,15 L9,12 M9,24 L9,21 M3,18 L6,18 M12,18 L15,18 M5,14 L7,16 M11,20 L13,22 M13,14 L11,16 M7,20 L5,22"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="title">SaaS Transition Services</div>
                                    <div class="tagline">
                                        Effortlessly migrate your on-premises software and integrate legacy systems into the cloud. Take advantage of modern technologies for improved flexibility, reliability, and cost-effectiveness. Are you prepared for migration? Contact us for our SaaS migration services.
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div class="icons">
                                    <div class="icon">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="title">SaaS Support and Maintenance Services</div>
                                    <div class="tagline">
                                        Get Round-the-clock support and maintenance services. Now ensure your SaaS applications operate smoothly, with timely updates, and bug fixes. Add more worth to your business solution with our SaaS maintenance and support services.
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* development section Ends */}

            <PortfolioSection/>

            <Blog/>
            
                <Form/>

                <Footer />
            </>
            )
}

            export default saasSoftwareDevelopment
