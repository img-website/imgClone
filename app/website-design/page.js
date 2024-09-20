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





function crossplatform() {
    const accordionItems = [
        {
          title: 'What Is the Cost of Developing a Website?',
          content: "There isn’t a simple answer to this question. The cost of a website hinges on various factors, including the development platform, desired features, design complexity, and more. We guarantee some of the most competitive prices available in the market."
        },
        {
          title: "Are Responsive Web Design and Development Services Included?",
          content: 'Custom software ensures that your business operations are specifically aligned with tailored features and can be easily integrated with existing systems. This is why choosing custom software development solutions is more beneficial than off-the-shelf alternatives.'
        },
        {
          title: 'Can I Choose My Preferred Web Design Team?',
          content: 'Absolutely! We have a dedicated website design team with extensive industry experience and expertise in the latest design trends, ensuring we meet your expectations effectively.'
        },
        {
          title: 'What Is the Timeline for Completing a Website?',
          content: "Again, the duration depends on several factors, including the functionalities and features you desire, as well as the programming language used. However, one thing is certain: we guarantee the fastest turnaround time."
        },
        {
          title: 'Are There Any Hidden Costs?',
          content: "There are no hidden fees; we provide a detailed quote, and that’s the final price. You can trust that our pricing is transparent and straightforward."
        },
      ];
    return (
        <>
            <Header />
   {/* hero */}
   <div className="relative">
        <div className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-tr  after:via-theme2/80 after:to-theme1/70 after:from-theme1/70 after:backdrop-blur-sm">
          <Image src="/img/website-design.webp" width={'1000'} height={'1000'} alt="" className='h-full w-full object-cover overflow-hidden object-top' />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
          <div className="w-full">
            <div className="max-w-5xl grow-0 text-center mx-auto text-balance">
              <div className="font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-6xl/tight tracking-[-0.04em]">
                <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                Creative Website Development Solutions in Jaipur
                </span>
              </div>
              <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
              We passionately craft mobile-first web designs using a refined and high-standard methodology


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
                                            <Image className="object-cover object-center !w-[1216px] !h-auto md:mt-16 lg:mt-0 " width={'2000'} height={'2000'} src="https://img.freepik.com/free-photo/business-meeting-with-cup-coffee_1098-3581.jpg?t=st=1726805280~exp=1726808880~hmac=b87a866a505e7876eea3dcaad9238ea979b3656fa4acb9d72e36ca82a9795310&w=740" alt="image3" />


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
                                    <span className="font-normal">    Website Design </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2">Services in Jaipur</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                Twin power is a rapidly growing and highly trusted company providing top-tier website design services. We specialize in turning your design concepts into fully realized digital experiences, making us one of the most reputable website design companies in Jaipur. Partnering with us ensures a rich, customized experience backed by a strong ethic of professionalism. Our approach focuses on using the right methodologies to deliver user-friendly websites that truly stand out.
                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                We create expressive designs that enhance user communication and engagement. Our websites are built to seamlessly connect users with your business, incorporating top-rated ideas and the latest technology. As a trusted website design company, we deliver innovative and reliable designs that meet the evolving demands of the market, ensuring all client requirements are fully met.                                </p>

                                <div className="mt-8 flex gap-4">
                                    <button className="px-4 text-sm text-[white] bg-theme1 rounded-full inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max hover:bg-theme1/80 duration-300">
                                        <span>Schedule Your Consultation</span>
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
           
            {/* strategy */}
            <div className="bg-theme1 relative overflow-hidden select-none py-6 md:py-8 lg:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8  z-40 relative">
    <div className="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/5 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <pattern id="pp0" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                          <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                      </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#pp0)"></rect>
              </svg>
          </div>
        <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center text-white">
            <span className="font-normal">Our Engaging and Interactive </span>
            <span className="font-bold text-white"> Website Design Strategy </span>
        </p>
        <div className="md:text-base text-sm text-center text-white opacity-70 mt-3 mb-lg-1 select-none">
        We build top-tier web applications for a wide range of industries and clients worldwide. Our commitment is to fully understand your industry and target markets before beginning the development process, ensuring tailored solutions that meet your specific needs.       
        </div>
 
        <div className="flex flex-col  pt-4">
            <div className="flex flex-wrap max-sm:gap-x-2 gap-5 py-5 justify-center text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto">
                <div className="group/db relative font-semibold text-md rounded-lg flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">
                    
                    Memory-Friendly UX
                </div>
                <div className="group/db relative font-semibold text-md rounded-lg flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">
                    
                    Mobile/Tab Compatible
                </div>
                <div className="group/db relative font-semibold text-md rounded-lg flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">
                    
                    Call To Action (CTA)
                </div>
                <div className="group/db relative font-semibold text-md rounded-lg flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">
                    
                    Visual Hierarchy
                </div>
                <div className="group/db relative font-semibold text-md rounded-lg flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">
                    
                    High Performance
                </div>   
                <div className="group/db relative font-semibold text-md rounded-lg flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">
                    
                    Browser Compatible
                </div> 
                <div className="group/db relative font-semibold text-md rounded-lg flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">
                    
                    SEO Friendly Structure
                </div>
                <div className="group/db relative font-semibold text-md rounded-lg flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">
                    
                    Cutomizable
                </div> 
                <div className="group/db relative font-semibold text-md rounded-lg flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">
                    
                    Fully Secure
                </div>           
            </div>
        </div>
    </div>
             </div>
            {/* strategy-end */}
           
           <Gallery/>

           {/* why-people opt-us-- */}

           <div className="relative isolate  py-6 md:py-8 lg:py-16">
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
            <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                first:*:font-normal

                last:*:font-bold last:*:text-theme2
            "><span>Why You Should </span> 
                <span> Opt for Us</span></p>
            
        </div>
    </div>
    <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
        <ul className="
            flex flex-wrap md:pt-8 text-center md:text-left gap-y-6 justify-center items-stretch
        ">
        <div className="lg:w-4/12 sm:w-1/2 w-full sm:p-6 sm:px-6 py-6">
            <div className="relative block h-full bg-white shadow-md rounded-lg rounded-br-none p-6 pt-10 group">
                <div className="font-bold text-slate-900 md:text-xl text-lg relative before:absolute before:left-0 before:top-[-16px] before:h-[4px] before:w-[40px] before:bg-gradient-to-r before:from-theme1 before:to-theme1/70 ">Fueled by Experienced Professionals</div>
                <div className="text-black text-sm mt-2 text-ellipsis line-clamp-4 ">Our team consists of expert designers who understand the value of your ideas and transform them into feature-rich realities. We have successfully delivered our services to thousands of clients, fostering long-term relationships along the way.</div>
                <div className="sm:h-16 sm:w-16 h-14 w-14 bg-white rounded-lg rounded-br-none absolute right-[30px] top-[-30px] p-3 shadow-md duration-300 group-hover:bg-slate-900/90 ">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-theme1 duration-700 group-hover:scale-90" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M6,9 C7.65685425,9 9,7.65685425 9,6 C9,4.34314575 7.65685425,3 6,3 C4.34314575,3 3,4.34314575 3,6 C3,7.65685425 4.34314575,9 6,9 Z M6,3 L6,0 M6,12 L6,9 M0,6 L3,6 M9,6 L12,6 M2,2 L4,4 M8,8 L10,10 M10,2 L8,4 M4,8 L2,10 M18,12 C19.6568542,12 21,10.6568542 21,9 C21,7.34314575 19.6568542,6 18,6 C16.3431458,6 15,7.34314575 15,9 C15,10.6568542 16.3431458,12 18,12 Z M18,6 L18,3 M18,15 L18,12 M12,9 L15,9 M21,9 L24,9 M14,5 L16,7 M20,11 L22,13 M22,5 L20,7 M16,11 L14,13 M9,21 C10.6568542,21 12,19.6568542 12,18 C12,16.3431458 10.6568542,15 9,15 C7.34314575,15 6,16.3431458 6,18 C6,19.6568542 7.34314575,21 9,21 Z M9,15 L9,12 M9,24 L9,21 M3,18 L6,18 M12,18 L15,18 M5,14 L7,16 M11,20 L13,22 M13,14 L11,16 M7,20 L5,22"></path></svg>
                </div>
            </div>
        </div>
        <div className="lg:w-4/12 sm:w-1/2 w-full sm:p-6 sm:px-6 py-6">
            <div className="relative block h-full bg-white shadow-md rounded-lg rounded-br-none p-6 pt-10 group">
                <div className="font-bold text-slate-900 md:text-xl text-lg relative before:absolute before:left-0 before:top-[-16px] before:h-[4px] before:w-[40px] before:bg-gradient-to-r before:from-theme1 before:to-theme1/70 ">Principles of Ethical Work</div>
                <div className="text-black text-sm mt-2 text-ellipsis line-clamp-4 ">We are dedicated to delivering work with honesty and integrity. We strive to make the design process enjoyable for our clients, ensuring they receive everything they need for their projects.</div>
                <div className="sm:h-16 sm:w-16 h-14 w-14 bg-white rounded-lg rounded-br-none absolute right-[30px] top-[-30px] p-3 shadow-md duration-300 group-hover:bg-slate-900/90 ">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="text-theme1 duration-700 group-hover:scale-90" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.6 9.6 0 0 1-5.016-1.416L11.28 17.7v-5.4L6.612 9.6v5.424l3.3 1.908-4.152 2.4A9.6 9.6 0 0 1 7.296 3.6v4.8L12 11.136 16.68 8.4 12 5.724 8.688 7.632V2.964a9.6 9.6 0 0 1 12.372 5.64A9.72 9.72 0 0 1 21.672 12v.084L17.352 9.6l-4.68 2.712v5.412l4.68-2.7v-3.816l4.14 2.4A9.6 9.6 0 0 1 12 21.6z"></path></svg>
                </div>
            </div>
        </div>
        <div className="lg:w-4/12 sm:w-1/2 w-full sm:p-6 sm:px-6 py-6">
            <div className="relative block h-full bg-white shadow-md rounded-lg rounded-br-none p-6 pt-10 group">
                <div className="font-bold text-slate-900 md:text-xl text-lg relative before:absolute before:left-0 before:top-[-16px] before:h-[4px] before:w-[40px] before:bg-gradient-to-r before:from-theme1 before:to-theme1/70 ">Value for Money</div>
                <div className="text-black text-sm mt-2 text-ellipsis line-clamp-4 ">Being a professional organization doesn’t mean we are expensive. We offer our services at affordable prices, helping you maintain your business's cash flow while providing competitive rates.</div>
                <div className="sm:h-16 sm:w-16 h-14 w-14 bg-white rounded-lg rounded-br-none absolute right-[30px] top-[-30px] p-3 shadow-md duration-300 group-hover:bg-slate-900/90 ">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="text-theme1 duration-700 group-hover:scale-90" xmlns="http://www.w3.org/2000/svg"><path d="M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm224 32c1.9 0 3.7-.5 5.6-.6 8.3-21.7 20.5-42.1 36.3-59.2 7.4-8 17.9-12.6 28.9-12.6 6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4 7-14.6 11.2-30.8 11.2-48 0-61.9-50.1-112-112-112S208 82.1 208 144c0 61.9 50.1 112 112 112zm105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-10.7-34.5 24.9-49.7 25.8-50.3-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1-3.3.2-6.5.6-9.8.6-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3v-9.2zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                </div>
            </div>
        </div>
        <div className="lg:w-4/12 sm:w-1/2 w-full sm:p-6 sm:px-6 py-6">
            <div className="relative block h-full bg-white shadow-md rounded-lg rounded-br-none p-6 pt-10 group">
                <div className="font-bold text-slate-900 md:text-xl text-lg relative before:absolute before:left-0 before:top-[-16px] before:h-[4px] before:w-[40px] before:bg-gradient-to-r before:from-theme1 before:to-theme1/70 ">Punctual Work Completion </div>
                <div className="text-black text-sm mt-2 text-ellipsis line-clamp-4 ">Our business has grown significantly, and we aim to maintain this momentum by delivering work on time. Every client who trusts us is our responsibility, and we strive to work effectively and efficiently to meet their needs.</div>
                <div className="sm:h-16 sm:w-16 h-14 w-14 bg-white rounded-lg rounded-br-none absolute right-[30px] top-[-30px] p-3 shadow-md duration-300 group-hover:bg-slate-900/90 ">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-theme1 duration-700 group-hover:scale-90" xmlns="http://www.w3.org/2000/svg"><path d="M318 123.645l-61.5 35.7-61.76-35.7 61.76-35.7zm93.68 54.19l-61.76 35.7 61.76 35.7 61.5-35.7zm-294.39 80.64l61.76 35.7 61.5-35.7-61.5-35.7zm139.52-80.57l-61.76 35.7 61.76 35.7 61.5-35.7zM31 298.365l62 35.69v-71l-62-35.65v71zm373-26l-62 35.69v70.94l62-35.66v-70.97zm-225.11-139.4l-61.76 35.7 61.76 35.7 61.5-35.7zM109 343.305l62 35.69v-70.94l-62-35.69v71zm225.41-120.45l-61.76 35.7 61.76 35.7 61.5-35.7zM249 353.055l-62-35.7v71l62 35.7v-71zm77-35.67l-61 35.67v70.94l61-35.66v-70.95zm8.07-184.5l-61.76 35.7 61.76 35.7 61.5-35.7zm-232.6 44.95l-61.77 35.7 61.76 35.7 61.5-35.7zM481 227.565l-61 35.66v70.94l61-35.66v-70.94zm-286.11 75.93l61.76 35.7 61.5-35.7-61.5-35.7z"></path></svg>
                </div>
            </div>
        </div>
        <div className="lg:w-4/12 sm:w-1/2 w-full sm:p-6 sm:px-6 py-6">
            <div className="relative block h-full bg-white shadow-md rounded-lg rounded-br-none p-6 pt-10 group">
                <div className="font-bold text-slate-900 md:text-xl text-lg relative before:absolute before:left-0 before:top-[-16px] before:h-[4px] before:w-[40px] before:bg-gradient-to-r before:from-theme1 before:to-theme1/70 ">Provide Genuine Value</div>
                <div className="text-black text-sm mt-2 text-ellipsis line-clamp-4 ">As a trusted and reputable website design company, we are committed to working honestly and delivering genuine value to our clients.</div>
                <div className="sm:h-16 sm:w-16 h-14 w-14 bg-white rounded-lg rounded-br-none absolute right-[30px] top-[-30px] p-3 shadow-md duration-300 group-hover:bg-slate-900/90 ">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-theme1 duration-700 group-hover:scale-90" xmlns="http://www.w3.org/2000/svg"><path d="M289.67 274.89a65.57 65.57 0 1 1-65.56-65.56 65.64 65.64 0 0 1 65.56 65.56zm139.55-5.05h-.13a204.69 204.69 0 0 0-74.32-153l-45.38 26.2a157.07 157.07 0 0 1 71.81 131.84C381.2 361.5 310.73 432 224.11 432S67 361.5 67 274.88c0-81.88 63-149.27 143-156.43v39.12l108.77-62.79L210 32v38.32c-106.7 7.25-191 96-191 204.57 0 111.59 89.12 202.29 200.06 205v.11h210.16V269.84z"></path></svg>
                </div>
            </div>
        </div>
        <div className="lg:w-4/12 sm:w-1/2 w-full sm:p-6 sm:px-6 py-6">
            <div className="relative block h-full bg-white shadow-md rounded-lg rounded-br-none p-6 pt-10 group">
                <div className="font-bold text-slate-900 md:text-xl text-lg relative before:absolute before:left-0 before:top-[-16px] before:h-[4px] before:w-[40px] before:bg-gradient-to-r before:from-theme1 before:to-theme1/70 ">Conduct Research and Honor Your Ideas</div>
                <div className="text-black text-sm mt-2 text-ellipsis line-clamp-4 ">We conduct thorough research based on your requirements and ideas, making the process of building your dream website smoother and more efficient.</div>
                <div className="sm:h-16 sm:w-16 h-14 w-14 bg-white rounded-lg rounded-br-none absolute right-[30px] top-[-30px] p-3 shadow-md duration-300 group-hover:bg-slate-900/90 ">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-theme1 duration-700 group-hover:scale-90" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48"></path><path d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z"></path></svg>
                </div>
            </div>
        </div>
        </ul>
    </div>
</div>
           {/* why-people-opt-us-end- */}
             
             <Cta/>
              
              <PortfolioSection/>
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
             <Blog/>
             <Form/>
            <Footer />
        </>
    )
}

export default crossplatform;
