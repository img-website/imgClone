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
import Accordion from '@/components/accordion/Accordion';






function crossplatform() {
    const accordionItems = [
        {
            title: 'What Is the Cost of Developing Cross-Platform Apps?',
            content: "The actual cost of developing a cross-platform app varies based on several factors, including technical integrations, platform support, project complexity, and specific requirements. Prices may differ depending on the development company you choose. In some cases, cross-platform app development can be more cost-effective than other development methods, as it is generally less expensive to build one app that works across multiple platforms rather than separate apps for each. Additionally, cross-platform development is typically faster and requires less effort for quality testing, thanks to the reuse of a single codebase."
        },
        {
            title: "Can Cross-Platform App Development Help My Existing Native Business App?",
            content: 'Cross-platform development can be utilized to enhance your current application by adding a single view, but it requires integration across all platforms. We recommend that business owners carefully consider the time and costs associated with integrating cross-platform capabilities into their existing solution before making an investment. We can help assess the viability based on your business priorities and guide you toward the best solution, including selecting the framework that aligns well with your ecosystem. Connect with our representative for a detailed discussion.'
        },
        {
            title: 'What Is the Timeline for Developing a Cross-Platform Application?',
            content: 'Cross-platform app development is typically faster than native app development and significantly quicker than creating separate apps for each platform. The speed of your project’s completion will depend on the complexity of your application and the number of platforms you plan to support.'
        },
        {
            title: 'How Is Data Protected in My Cross-Platform App?',
            content: "Security is an integral aspect of most app ecosystems, including iOS and Android. For example, Android apps run on separate virtual machines, preventing interaction between different apps, which enhances overall security. At Twin Power, we prioritize your app's security by ensuring that data remains protected from the start of your project through implementation and beyond. This includes considering robust security frameworks and employing comprehensive DevSecOps practices throughout the development process."
        },
        {
            title: "Will I Retain Ownership of the Cross-Platform App's Source Code?",
            content: 'The idea of "owning" source code can be somewhat misleading and complex. Much of app development relies on open-source code, which is freely available for developers to use. This code can be leveraged to enhance productivity and accelerate time to market for mobile applications. We ensure that your code is never hidden from you, and we make it easy to access or transfer to other providers if needed. By reaching out to us about your potential project, you can learn more about our collaborative approach and how we support our partners, including providing open access to your code.'
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
                            <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]" width="1519" height="812" src="/img/cross-platform-app-development-1519w.webp" alt="Transform Your Ideas into Reality with Our Mobile App Development Expertise." />

                            <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between">
                                <div className="xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center">
                                    <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                        <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">Cross-Platform App Development Solutions
                                        </span>
                                    </div>
                                    <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto">
                                        Cross-platform development offers a unified approach by using universal code and a common UI framework, streamlining the development process. We deliver mobile app solutions that meet client needs and function seamlessly on both Android and iOS devices.
                                    </div>

                                </div>
                                <div className="xl:w-1/3 lg:w-1/2 max-lg:mx-auto">
                                    <div className="colorApply4 w-full px-5 md:py-10 py-8 md:rounded-2xl rounded-xl  shadow-xl bg-white backdrop-blur-lg relative gap-6 flex flex-col before:absolute before:inset-4 md:hover:before:inset-1 before:duration-200 before:ease-in before:bg-white/5 before:backdrop-blur-2xl before:rounded-xl before: before:z-0 before:m-auto *:w-full *:z-10 ">
                                        <div>
                                            <div className="colorApply5 size-16 rounded-full mx-auto shadow-md shadow-white/5 bg-theme1  text-white">
                                                <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" className="size-full" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="lg:text-xl md:text-lg text-base text-theme1 text-center text-balance font-semibold">Get Top-Notch, Innovative Cross-Platform App Development Solutions from Us.
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
                                            <Image className="object-cover object-center !w-[1216px] !h-auto md:mt-16 lg:mt-0 " width={'2000'} height={'2000'} src="https://img.freepik.com/free-photo/staff-meeting-group-young-modern-people-smart-casual-wear-discussing-something-while-working-creative-office-business-time_496169-1626.jpg?t=st=1726745408~exp=1726749008~hmac=66cefe815f6984bd52856e20649de0a4f6c8c6a63fd01d6a5ee2f22a1c69e94f&w=740" alt="image3" />


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
                                    <span className="font-normal">Build Premium Hybrid Apps for All Platforms</span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2">Leveraging the Latest Technologies</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                    Cross-platform application development is the future for creating robust apps. It reduces both cost and development time. As industry pioneers, we pride ourselves on our expertise in cross-platform development, crafting apps with a focus on exceptional user experience.
                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                    Our products are highly regarded for their top-quality in the cross-platform sector. By leveraging advanced cross-platform technologies, we tailor solutions to meet specific business needs. Our experienced developers excel in using cutting-edge tools such as Ionic, Sencha, Cocos2d-X, PhoneGap, and Cordova. Our commitment, expertise, and experience set us apart from competitors, ensuring we deliver the best cross-platform applications available.                                </p>

                                <div className="mt-8 flex gap-4">
                                    <button className="px-4 text-sm text-[white] bg-theme1 rounded-full inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max hover:bg-theme1/80 duration-300">
                                        <span>Talk to Experts</span>
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

            {/* reasons to choose-- */}
            <div className="relative isolate   py-6 md:py-8 lg:py-16">
                <div className="overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/5 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
                    </div>
                    <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
                        <p className=" max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                "><span>Benefits of Opting for Cross  </span>
                            <span> Platform App Development</span></p>
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
                                <span class="text-2xl font-bold">Results-Driven Approach</span>
                                <p className="mt-10">
                                    Native mobile applications generally offer superior performance compared to hybrid apps, delivering faster and more efficient results.
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
                                <span class="text-2xl font-bold">Rapid Delivery</span>
                                <p className="mt-10">
                                    With an agile process, we involve our clients at every step. Count on timely delivery and cost-effective solutions designed to meet goals on schedule and within budget.
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
                                <span class="text-2xl font-bold">Skilled and Experienced Team</span>
                                <p className="mt-10">
                                    Our talented developers stay up-to-date with the latest technologies to deliver exceptional custom cross-platform solutions. They also focus on creating apps with unmatched UI/UX designs.
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
                                <span class="text-2xl font-bold">Diverse Technologies</span>
                                <p className="mt-10">
                                    Whether it’s developing cross-platform HTML5 apps or creating applications with PhoneGap or Titanium, we’ve got you covered.
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
                                <span class="text-2xl font-bold">Thorough Methodology</span>
                                <p className="mt-10">
                                    Our approach is both flexible and comprehensive, employing proven techniques to achieve outstanding results in mobile app development.
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
                                <span class="text-2xl font-bold">Demonstrated Success</span>
                                <p className="mt-10">
                                    We are recognized as a trusted industry partner on Clutch and Good Firms, showcasing our expertise in successful project execution. Our commitment to exceptional service and exceeding expectations ensures customer satisfaction and a proven track record.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* reasons to choose-- */}

            <Cta2 />

            <PortfolioSection />

            <Cta />

            <Reward />

            {/* accordian start */}
            <div className='py-10'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <section className="lg:w-4/5 w-full mx-auto md:mt-16 mt-8">
                        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
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

export default crossplatform;
