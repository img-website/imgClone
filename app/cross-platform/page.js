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





function crossplatform() {
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
                            <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]" width="1519" height="812" src="/img/ecommerce-hero.webp" alt="Transform Your Ideas into Reality with Our Mobile App Development Expertise." />

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
            <div className="relative isolate select-none py-6 md:py-8 lg:py-16">
        <div className="overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/5 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="ED433" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                            <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ED433)"></rect>
                </svg>
            </div>
            <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
                <p className=" max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme4
                "><span>Lorem ipsum dolor sit amet consectetur   </span> 
                    <span>adipisicing elit. Sit temporibus ipsum  </span></p>                 
            </div>
        </div>
        <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 relative">
                <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-sky-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-sky-400 before:duration-300">
                    <div className="*:size-16 *:p-1 *:mt-2 text-sky-400">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h2"></path><path d="M8 17h2"></path><path d="M14 13h2"></path><path d="M14 17h2"></path></svg>
                    </div>
                    <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-sky-400  px-2 py-1 rounded-lg">
                    Results-Driven Approach
                    </div> 
                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                    Native mobile applications generally offer superior performance compared to hybrid apps, delivering faster and more efficient results.
                    </p>                         
                    <div className="absolute w-6 h-28 bg-sky-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-sky-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-sky-400"></div>
                </div>
                <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-cyan-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-cyan-400 before:duration-300">
                    <div className="*:size-16 *:p-1 *:mt-2 text-cyan-400">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><g id="Delivery_Truck"><g><path d="M21.47,11.185l-1.03-1.43a2.5,2.5,0,0,0-2.03-1.05H14.03V6.565a2.5,2.5,0,0,0-2.5-2.5H4.56a2.507,2.507,0,0,0-2.5,2.5v9.94a1.5,1.5,0,0,0,1.5,1.5H4.78a2.242,2.242,0,0,0,4.44,0h5.56a2.242,2.242,0,0,0,4.44,0h1.22a1.5,1.5,0,0,0,1.5-1.5v-3.87A2.508,2.508,0,0,0,21.47,11.185ZM7,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7,18.935Zm6.03-1.93H9.15a2.257,2.257,0,0,0-4.3,0H3.56a.5.5,0,0,1-.5-.5V6.565a1.5,1.5,0,0,1,1.5-1.5h6.97a1.5,1.5,0,0,1,1.5,1.5ZM17,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,17,18.935Zm3.94-2.43a.5.5,0,0,1-.5.5H19.15a2.257,2.257,0,0,0-4.3,0h-.82v-7.3h4.38a1.516,1.516,0,0,1,1.22.63l1.03,1.43a1.527,1.527,0,0,1,.28.87Z"></path><path d="M18.029,12.205h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"></path></g></g></svg>
                    </div>
                    <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-cyan-400  px-2 py-1 rounded-lg">
                    Rapid Delivery
                    </div>      
                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                    With an agile process, we involve our clients at every step. Count on timely delivery and cost-effective solutions designed to meet goals on schedule and within budget.
                    </p>                    
                    <div className="absolute w-6 h-28 bg-cyan-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-cyan-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-cyan-400"></div>
                </div>
                 <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-blue-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-blue-400 before:duration-300">
                    <div className="*:size-16 *:p-1 *:mt-2 text-blue-400">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M17 10h2a2 2 0 0 1 2 2v1"></path><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path></svg>
                    </div>
                    <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-blue-400  px-2 py-1 rounded-lg">
                    Skilled and Experienced Team
                    </div>    
                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                    Our talented developers stay up-to-date with the latest technologies to deliver exceptional custom cross-platform solutions. They also focus on creating apps with unmatched UI/UX designs.
                    </p>                       
                    <div className="absolute w-6 h-28 bg-blue-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-blue-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-blue-400"></div>
                </div>
                <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-indigo-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-indigo-400 before:duration-300">
                    <div className="*:size-16 *:p-1 *:mt-2 text-indigo-400">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"></path></svg>
                     </div>
                    <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-indigo-400  px-2 py-1 rounded-lg">
                    Diverse Technologies
                    </div>             
                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                    Whether it’s developing cross-platform HTML5 apps or creating applications with PhoneGap or Titanium, we’ve got you covered.
                    </p>          
                    <div className="absolute w-6 h-28 bg-indigo-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-indigo-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-indigo-400"></div>
                </div>
                <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-violet-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-violet-400 before:duration-300">
                    <div className="*:size-16 *:p-1 *:mt-2 text-violet-400">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M259.664 27.143l-120.826 69.76V236.42l120.826 69.758 120.824-69.758V96.902l-120.824-69.76zm0 21.58l97.207 56.125-94.868 54.77-97.21-56.12 94.872-54.775zm.79 47.554c-16.622 0-31.888 5.78-43.923 15.426l46.052 26.58 43.564-25.11c-12.29-10.524-28.24-16.896-45.69-16.896zM157.528 120.88l93.96 54.25v104.747l-93.96-54.246V120.88zm204.274 2.7v102.05l-91.624 52.9V176.48l91.625-52.9zm-171.216 35.252c-.28 2.547-.436 5.13-.436 7.752 0 29.456 18.122 54.667 43.82 65.13v-47.876l-43.384-25.006zm139.94 2.24l-42.83 24.516v45.826c25.3-10.644 43.068-35.66 43.068-64.83 0-1.857-.095-3.69-.237-5.512zM116.57 227.39l-91.615 52.895V419.8l120.826 69.76 111.548-64.404 111.547 64.403L489.7 419.8V280.287l-86.944-50.2v19.48l-1.818 1.05 65.146 37.613L371.214 343l-65.148-37.613-18.69 10.79 73.323 42.332V463.26l-93.962-54.248v-80.916l-7.074 4.084-11.746-6.782v83.614l-91.625 52.9v-102.05l75.66-43.68-18.69-10.79L148.12 343 50.91 286.88l65.66-37.91v-21.58zm30.002 52.268c-16.623 0-31.888 5.783-43.924 15.428l46.05 26.578 43.566-25.11c-12.29-10.524-28.242-16.896-45.692-16.896zm223.094 0c-16.623 0-31.887 5.783-43.922 15.428l46.05 26.578 43.565-25.11c-12.29-10.524-28.244-16.896-45.694-16.896zm-326.02 24.606l93.958 54.248V463.26l-93.96-54.248V304.264zm427.366 2.7V409.01L379.39 461.91V359.86l91.622-52.897zm-394.31 35.25c-.28 2.546-.436 5.13-.436 7.75 0 29.457 18.12 54.668 43.818 65.13V367.22L76.7 342.212zm223.093 0c-.28 2.546-.436 5.13-.436 7.75 0 29.456 18.122 54.665 43.818 65.128V367.22l-43.383-25.007zm-83.152 2.24l-42.83 24.517v45.825c25.3-10.644 43.066-35.66 43.066-64.83 0-1.857-.096-3.69-.237-5.512zm223.095 0l-42.83 24.517v45.825c25.3-10.644 43.065-35.66 43.065-64.83 0-1.857-.093-3.69-.235-5.512z"></path></svg>
                    </div>
                    <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-violet-400  px-2 py-1 rounded-lg">
                    Thorough Methodology
                    </div>   
                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                    Our approach is both flexible and comprehensive, employing proven techniques to achieve outstanding results in mobile app development.
                    </p>                    
                    <div className="absolute w-6 h-28 bg-violet-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-violet-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-violet-400"></div>
                </div>
                <div className="bg-white m-3 shadow-2xl rounded-xl flex flex-col items-center py-10 px-4 relative before:absolute before:h-full before:w-full before:bg-purple-400 before:top-5 before:rounded-xl before:-left-4 before:-z-10 before:hover:shadow-2xl before:hover:shadow-purple-400 before:duration-300">
                    <div className="*:size-16 *:p-1 *:mt-2 text-purple-400">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zM12 12l3 1.73-1 1.73-3-1.73V17H9v-3.27l-3 1.73-1-1.73L8 12l-3-1.73 1-1.73 3 1.73V7h2v3.27l3-1.73 1 1.73L12 12z"></path></svg>
                    </div>
                    <div className="md:text-xl mt-2 mb-4 text-center sm:text-lg text-base font-medium leading-6 text-purple-400  px-2 py-1 rounded-lg">
                    Demonstrated Success
                    </div>   
                    <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center w-full">
                    We are recognized as a trusted industry partner on Clutch and Good Firms, showcasing our expertise in successful project execution. Our commitment to exceptional service and exceeding expectations ensures customer satisfaction and a proven track record.
                    </p>                    
                    <div className="absolute w-6 h-28 bg-purple-400 -left-3 bottom-10 after:absolute after:size-5 after:-z-0 after:-bottom-2 after:rotate-45 after:bg-purple-400 before:absolute before:size-5 before:-top-2 before:left-0 before:rotate-45 before:bg-purple-400"></div>
                </div>
            </div>
        </div>
    </div>
            {/* reasons to choose-- */}
             
             <Cta2/>
              
        
              <PortfolioSection/>
              <Cta/>
              <Reward/>
             <Blog/>
             <Form/>
            <Footer />
        </>
    )
}

export default crossplatform;
