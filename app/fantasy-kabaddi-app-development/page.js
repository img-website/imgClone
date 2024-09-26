"use client"
import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import Blog from "@/components/blog/Blog";
import Form from "@/components/contactForm/Form";
import Cta from "@/components/cta/Cta";
import Cta2 from "@/components/cta2/Cta2";
import PortfolioSection from "@/components/portfolio/portfolio";
import Reward from "@/components/reward/Reward";
import Gallery from "@/components/gallery/Gallery";
import Accordion from '@/components/accordion/Accordion';
import CaseStudy from "@/components/caseStudy/CaseStudy";
import Testimonial from "@/components/testimonial/Testimonial";



function fantasyKabaddi() {
    const accordionItems = [
        {
            title: 'Process of Creating a Fantasy kabaddi Application?',
            content: "Creating a successful fantasy Kabaddi app for both web and mobile platforms requires a comprehensive approach, ensuring an appealing design and the integration of essential features. It's important to develop a detailed monetization strategy and select the right framework to support a seamless user experience across platforms."
        },
        {
            title: "How to Create an App Like Dream11",
            content: 'Let Twin Power handle this for you, as we have developed numerous fantasy apps inspired by Dream11. You can trust us to create a successful app tailored to your needs as well.'
        },
        {
            title: 'What Is the Cost of Developing a Fantasy kabaddi App?',
            content: 'The rough estimate for developing a fantasy kabaddi app is around $800 for both operating systems. For the most competitive pricing, contact Twin Power to discuss your specific requirements and receive a tailored estimate.'
        },
        {
            title: 'What Is the Timeline for Developing a Fantasy kabaddi App?',
            content: "There isn’t a straightforward answer to this question. However, one thing is certain: we will adhere to the agreed-upon deadline, no matter what."
        },
        {
            title: 'What Programming Languages Are Used for Developing Fantasy kabaddi Apps?',
            content: "We utilize Java and Kotlin to develop interactive Android fantasy kabaddi apps. For iOS, we use Swift to build a seamless and engaging fantasy app experience."
        },
    ];
    return (
        <>

            <Header />


            {/* hero----  */}
            <div className="relative">
                <div className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:mix-blend-multiply after:left-0 after:h-full after:w-full after:bg-gradient-to-tr  after:via-theme1/80 after:to-theme2/70 after:from-theme2/70 after:backdrop-blur-sm">
                    <Image src="/img/fantasy-kabaddi-1100.webp" width={'1000'} height={'1000'} alt="" className='h-full w-full object-cover overflow-hidden object-top' />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
                    <div className="w-full">
                        <div className="max-w-5xl grow-0 text-center mx-auto text-balance">
                            <div className="font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-6xl/tight tracking-[-0.04em]">
                                <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                                    Fantasy Kabaddi App Development Company
                                </span>
                            </div>
                            <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
                                Are you ready to step into the world of online gaming? Take the leap with Twin Power, the leader in the market, and watch your business grow with the best Fantasy Kabaddi platform available. Our expert team of developers, with years of experience, is prepared to elevate your platform to the next level.
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
            {/* hero---end */}

            {/* ---award-winning fantasy-- */}
            <div className="relative bg-gray-100 py-6 md:py-8 lg:py-16  overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 xl:-my-10 lg:-my-8 md:-my-6 w-full">
                    <div className="mx-auto max-w-container gap-7 flex md:flex-row-reverse flex-col max-lg:gap-4 items-center">

                        <div className="flex max-md:flex-col overflow-hidden xl:-mx-10 lg:-mx-8 md:-mx-6 max-md:gap-y-8">
                            <div className="flex flex-col md:w-1/2 w-full max-md:gap-y-8">
                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden">
                                    <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance">
                                            <span>We develop world-class, </span> <span className="font-bold text-theme1">award-winning fantasy kabaddi apps that set the standard in the industry.</span>
                                        </p>
                                        <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 text-balance">Twin Power is a renowned, multi-award-winning tech company in India, operating since 2010. With three offices across India, a team of over 150 professionals, and more than 2000 successfully completed projects, we proudly maintain a 99% success rate.</p>
                                    </div>
                                </div>

                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image src="/img/dream11.png" alt="11 Challengers" className="block w-full object-contain aspect-[1/0.8]" width={400} height={350} />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">MyTeam11</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">MyTeam11 is an outstanding platform dedicated to providing top-tier services and facilities to its customers, ensuring a superior fantasy sports experience.</p>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image src="/img/play11.png" alt="MPL" className="block w-full object-contain aspect-[1/0.8]" width={400} height={300} />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">BalleBaazi</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 ">Since its inception in January 2018, BalleBaazi has successfully made a significant impact in the fantasy cricket space. </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="flex flex-col md:w-1/2 w-full max-md:gap-y-8">
                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image src="/img/mpl.png" alt="My11Circle" className="block w-full object-contain aspect-[1/0.8]" width={400} height={300} />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">Pro Kabaddi League</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">Pro Kabaddi is a ground-breaking initiative by Mashal Sports Pvt. Ltd and Disney Star. Ever since its inception in 2014.</p>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="xl:m-10 lg:m-8 md:m-6 overflow-hidden rounded-xl md:rounded-2xl !  shadow-xl shadow-indigo-900/10 md:hover:-translate-y-2 duration-300">
                                    <figure className="relative">
                                        <Image src="/img/cycircle11-app.webp" alt="MyTeam11" className="block w-full object-contain aspect-[1/0.8]" width={400} height={400} />
                                        <figcaption className="w-full block p-10 bg-gradient-to-t from-white via-white to-transparent from-75% relative z-[1] -mt-20">
                                            <div className="lg:text-2xl md:text-xl text-lg text-indigo-950 text-balance font-semibold">My11Circle</div>
                                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 ">My11Circle.com, part of Games24x7, delivers top-notch fantasy games right at your fingertips.</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---award-winning fantasy-end-- */}


            <Cta />

            {/* ------ Unleash the Power of Fantasy ---- */}

            <div className="mx-auto max-w-7xl px-6 lg:px-8  z-[1] relative py-10 overflow-hidden">
                <div className="mx-auto max-w-container gap-3 px-4 sm:px-6 md:flex lg:px-8 md:flex-col text-center">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-gray-800 text-balance">
                        <span className="font-normal">Unleash the Power of Fantasy Football: </span>
                        <span className="font-bold  text-theme1">Experience cutting-edge features and endless excitement! </span>
                    </p>
                </div>
                <div className="flex flex-wrap mt-10 ">
                    <div className="lg:w-1/4 sm:w-1/2 w-full md:p-3 py-6">
                        <div className="relative block h-full p-8 group duration-300 md:shadow-none shadow-lg">
                            <div className="pb-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-11 text-black" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M22 13v3c0 1.1-.9 2-2 2h-3l1 1v2H6v-2l1-1H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8v2H4v11h16v-3h2zm-7 2-5-5h4V3h2v7h4l-5 5z"></path>
                                </svg>
                            </div>
                            <div className="font-bold text-black md:text-xl text-lg relative">Real-Time Score Updates</div>
                            <div className="text-gray-800 sm:text-base text-sm leading-6 font-normal mt-2 text-ellipsis line-clamp-4">All match scores are automatically updated through API integration.</div>

                        </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/2 w-full md:p-3 py-6">
                        <div className="relative block h-full p-8 group duration-300 md:shadow-none shadow-lg">
                            <div className="pb-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-11 text-black" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                                </svg>
                            </div>
                            <div className="font-bold text-black md:text-xl text-lg relative">KYC Verification & Secure Payment Withdrawals</div>
                            <div className="text-gray-800 sm:text-base text-sm leading-6 font-normal mt-2 text-ellipsis line-clamp-4">Simple KYC Approval and Hassle-Free Payment Withdrawals.</div>

                        </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/2 w-full md:p-3 py-6">
                        <div className="relative block h-full p-8 group duration-300 md:shadow-none shadow-lg">
                            <div className="pb-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="size-11 text-black" xmlns="http://www.w3.org/2000/svg"><path d="M11 20c-.801 0-1.555-.312-2.121-.879l-4-4c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.133 3.109-1.133 4.242 0l1.188 1.188 3.069-5.523c.526-.952 1.533-1.544 2.624-1.544.507 0 1.012.131 1.456.378.7.39 1.206 1.028 1.427 1.798.221.771.127 1.581-.263 2.282l-5 9c-.454.818-1.279 1.384-2.206 1.514-.139.019-.277.029-.416.029zm-4-8c-.268 0-.518.104-.707.293s-.293.439-.293.707.104.518.293.707l4 4c.223.221.523.33.844.283.312-.043.586-.232.737-.504l5-9c.13-.233.161-.503.088-.76-.073-.257-.243-.47-.478-.6-.473-.264-1.101-.078-1.357.388l-4.357 7.841-3.062-3.062c-.19-.189-.44-.293-.708-.293z"></path></svg>
                            </div>
                            <div className="font-bold text-black md:text-xl text-lg relative">One-Click Settlement</div>
                            <div className="text-gray-800 sm:text-base text-sm leading-6 font-normal mt-2 text-ellipsis line-clamp-4">Settle Payments with a Single Click.</div>

                        </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/2 w-full md:p-3 py-6">
                        <div className="relative block h-full p-8 group duration-300 md:shadow-none shadow-lg">
                            <div className="pb-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-11 text-black" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                    <path fill="none" d="M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path><path d="M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41z"></path>
                                </svg>
                            </div>
                            <div className="font-bold text-black md:text-xl text-lg relative">Match Cancellation Policy</div>
                            <div className="text-gray-800 sm:text-base text-sm leading-6 font-normal mt-2 text-ellipsis line-clamp-4">Automatic match cancellations are managed through API integration.</div>

                        </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/2 w-full md:p-3 py-6">
                        <div className="relative block h-full p-8 group duration-300 md:shadow-none shadow-lg">
                            <div className="pb-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-11 text-black" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682v.766Zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0Zm-2.238 9.488c-.04 0-.08 0-.12-.002a5.19 5.19 0 0 0 .381-2.07V6.306a1.692 1.692 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.598 2.598 0 0 1-2.598 2.598h-.013Z"></path><path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.682.682 0 0 1-.682.682H.682A.682.682 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945h1.363Z"></path>
                                </svg>
                            </div>
                            <div className="font-bold text-black md:text-xl text-lg relative">
                                Join Multiple Teams</div>
                            <div className="text-gray-800 sm:text-base text-sm leading-6 font-normal mt-2 text-ellipsis line-clamp-4">You can join multiple teams in a contest.</div>

                        </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/2 w-full md:p-3 py-6">
                        <div className="relative block h-full p-8 group duration-300 md:shadow-none shadow-lg">
                            <div className="pb-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-11 text-black" xmlns="http://www.w3.org/2000/svg"><g id="Settings"><g><path d="M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z"></path><path d="M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path></g></g></svg>
                            </div>
                            <div className="font-bold text-black md:text-xl text-lg relative">Match Fixture</div>
                            <div className="text-gray-800 sm:text-base text-sm leading-6 font-normal mt-2 text-ellipsis line-clamp-4">Automatically retrieve all upcoming matches through API integration.</div>

                        </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/2 w-full md:p-3 py-6">
                        <div className="relative block h-full p-8 group duration-300 md:shadow-none shadow-lg">
                            <div className="pb-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-11 text-black" xmlns="http://www.w3.org/2000/svg"><path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path></svg>
                            </div>
                            <div className="font-bold text-black md:text-xl text-lg relative">Team Lineup</div>
                            <div className="text-gray-800 sm:text-base text-sm leading-6 font-normal mt-2 text-ellipsis line-clamp-4">Obtain a report of players participating in the currently joined match.</div>

                        </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/2 w-full md:p-3 py-6">
                        <div className="relative block h-full p-8 group duration-300 md:shadow-none shadow-lg">
                            <div className="pb-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-11 text-black" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.105 4.561l-3.43 3.427-1.134-1.12 2.07-2.08h-4.8a2.4 2.4 0 1 0 0 4.8h.89v1.6h-.88a4 4 0 0 1 0-7.991h4.8L6.54 1.13 7.675 0l3.43 3.432v1.13zM16.62 24h-9.6l-.8-.8V10.412l.8-.8h9.6l.8.8V23.2l-.8.8zm-8.8-1.6h8V11.212h-8V22.4zm5.6-20.798h9.6l.8.8v12.786l-.8.8h-4v-1.6h3.2V3.2h-8v4.787h-1.6V2.401l.8-.8zm.8 11.186h-4.8v1.6h4.8v-1.6zm-4.8 3.2h4.8v1.6h-4.8v-1.6zm4.8 3.2h-4.8v1.6h4.8v-1.6zm1.6-14.4h4.8v1.6h-4.8v-1.6zm4.8 6.4h-1.6v1.6h1.6v-1.6zm-3.338-3.176v-.024h3.338v1.6h-1.762l-1.576-1.576z"></path>
                                </svg>
                            </div>
                            <div className="font-bold text-black md:text-xl text-lg relative">Refer and Earn</div>
                            <div className="text-gray-800 sm:text-base text-sm leading-6 font-normal mt-2 text-ellipsis line-clamp-4">You can refer friends and earn referral money when they join.</div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ------ Unleash the Power of Fantasy-end ---- */}

            <Cta2 />

            {/* ---features start */}

            <div className='container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10'>
                <div className="relative container mx-auto max-w-7xl md:px-6 lg:px-8 z-10 text-center">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance">
                        <span className="font-normal">Core </span>
                        <span className="font-bold text-theme2">Features List</span>
                    </p>
                    <div className="md:text-base text-sm text-black/70 mt-3 text-balance">
                        We provide a wide array of features for Fantasy Cricket apps, ranging from basic to advanced options, along with innovative new features. You can select the perfect combination to build the ultimate Fantasy Sports app.
                    </div>
                </div>
                <div className="flex flex-wrap mt-10 py-10 px-5 items-center bg-theme1 rounded-[20px]">
                    <div className="lg:w-2/6 w-full">
                        <div className="mobileImg sm:w-64 w-52 sm:h-auto h-96 mx-auto">
                            <Image width={1000} height={1000} src="/img/image-fantasy-sports-user-panel.webp" alt="fantasy-sports-user-penal" className=" h-full w-full " />
                        </div>
                    </div>
                    <div className="lg:w-4/6 w-full">
                        <div className="flex flex-wrap items-stretch">
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">User Authentication</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis"> With the user authentication feature, the users will be required to fill their certain basic details.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Search, List and Filter Matches</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis"> Users can search for their favourite matches and apply filters to the matches of their favourite team.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Join Tournaments</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Users can join the tournaments of their favourite sports of their own choice.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Contests</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Enjoy playing free practice contests, paid contests and private contests.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Create Multiple Team</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Users can create multiple teams in the contest to enhance their winning chances.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Invite and Earn</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Users can refer to the app and earn the referral amount that can be used to play.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Easy Withdraw Earnings</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Get your winning amount transferred to your bank account instantly with fewer formalities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Live Score &amp; Updates</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Aware your users of the live streaming of matches and the latest updates about the sports.</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mt-10 items-center bg-theme2 rounded-[20px]">
                    <div className="lg:w-2/6 w-full">
                        <div className="mobileImg sm:w-64 w-52 sm:h-auto h-96 mx-auto">
                            <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/fantasy-sports-admin-penal.webp" alt="fantasy-sports-admin-penal" className=" h-full w-full " />
                        </div>
                    </div>
                    <div className="lg:w-4/6 w-full">
                        <div className="flex flex-wrap items-stretch">
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Admin Login</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">With an admin login, the security and privacy of the fantasy sports app will be maintained.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Admin Dashboard</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Admin dashboard to overlook the number of matches, participants and their earnings etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Users Management</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Admin will manage the users by verifying the details filled in by them.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">League Management</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Admin can activate or deactivate any contest or league as per requirements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Match Management</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">The matches or the national, international or local tournaments of different sports will be listed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Revenue Management</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Admin can generate reports regarding the total revenue generation and prize money distribution.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Reward Points</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Admin will manage the reward points that have been awarded to the users.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full md:p-4 p-3">
                                <div className="sm:p-4 group/db p-3 backdrop-blur-xl   relative duration-500 bg-white/5 shadow-md shadow-white/5 border-4 border-white/5 rounded-xl hover:scale-95 h-full">
                                    <div className="">
                                        <div className="md:text-xl sm:text-lg text-base font-medium leading-6 text-white">Push Notification</div>
                                        <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-white/70 line-clamp-4 text-ellipsis">Via push notification, send alerts and updates to users regarding apps and contests.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---features Ends  */}
            <CaseStudy />

            {/* Genre We Develop---- */}
            <div className=" border bg-theme1 py-10 relative overflow-hidden  ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
                    <div className="relative container mx-auto max-w-7xl md:px-6 lg:px-8 z-10">
                        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white">
                            <span className="font-normal">Other Fantasy Sports </span>
                            <span className="font-bold">Genre We Develop</span>
                        </p>
                        <div className="md:text-base text-sm text-white mt-3">
                            Explore the future of pharmaceutical services with our on-demand pharmacy delivery app development. Effortlessly connect patients with pharmacies to ensure timely and convenient medication deliveries. Get ready to revolutionize healthcare accessibility with our innovative app designed for pharmacies of all sizes. Here’s a glimpse of the top features highlighted by our pharmacy delivery app development experts.
                        </div>
                    </div>
                </div>
                <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex justify-center">
                    <ul className="
            flex flex-wrap md:pt-8 text-center md:text-left gap-y-6 justify-center items-stretch
        ">
                        <div className="p-4 h-auto lg:w-1/3">
                            <a href="">
                                <div className="group rounded-full overflow-hidden lg:h-[350px] lg:w-[350px] h-[250px] w-[250px] bg-white/5 backdrop-blur-sm text-center flex justify-center items-center flex-col border-[1px] border-solid border-[white]/10 group duration-300 sm:hover:scale-95 sm:hover:border-pink-100">
                                    <Image src="/img/cricket.webp" alt="Cricket" className=" mx-auto lg:size-40 size-32 group-hover:md:animate-bounce" width={350} height={250} />
                                    <div className="font-bold text-white md:text-xl text-lg relative mt-3">Cricket</div>
                                </div>
                            </a>
                        </div>
                        <div className="p-4 h-auto lg:w-1/3">
                            <a href="">
                                <div className="group rounded-full overflow-hidden lg:h-[350px] lg:w-[350px] h-[250px] w-[250px] bg-white/5 backdrop-blur-sm text-center flex justify-center items-center flex-col border-[1px] border-solid border-[white]/10 group duration-300 sm:hover:scale-95 sm:hover:border-pink-100">
                                    <Image src="/img/kabaddi.webp" alt="Kabaddi" className=" mx-auto lg:size-40 size-32 group-hover:md:animate-bounce" width={350} height={250} />
                                    <div className="font-bold text-white md:text-xl text-lg relative mt-3">Kabaddi</div>
                                </div>
                            </a>
                        </div>
                        <div className="p-4 h-auto lg:w-1/3">
                            <a href="">
                                <div className="group rounded-full overflow-hidden lg:h-[350px] lg:w-[350px] h-[250px] w-[250px] bg-white/5 backdrop-blur-sm text-center flex justify-center items-center flex-col border-[1px] border-solid border-[white]/10 group duration-300 sm:hover:scale-95 sm:hover:border-pink-100">
                                    <Image src="/img/stock.webp" alt="Stock Market" className=" mx-auto lg:size-40 size-32 group-hover:md:animate-bounce" width={350} height={250} />
                                    <div className="font-bold text-white md:text-xl text-lg relative mt-3">Stock Market</div>
                                </div>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
            {/* Genre We Develop-end--- */}

            <Testimonial />

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
            <Blog />
            <Form />
            <Footer />


        </>
    )
}

export default fantasyKabaddi;