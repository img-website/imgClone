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



function bespokeSoftwareDevelopment() {
  const accordionItems = [
    {
      title: 'What Does Bespoke Software Development Mean?',
      content: "Bespoke software is tailored specifically to meet a client’s needs, providing a perfect fit compared to off-the-shelf solutions. It is scalable, seamlessly adapts to existing workflows, integrates easily with other systems, and has no limitations."
    },
    {
      title: "Advantages of Bespoke Software Compared to Off-the-Shelf Solutions",
      content: 'Bespoke software ensures that your business operations are perfectly aligned with its tailored features and can be seamlessly integrated with existing systems. This is why you should choose bespoke software development solutions over off-the-shelf alternatives.'
    },
    {
      title: 'What is the Timeline for Bespoke Software Development?',
      content: 'There is no fixed timeline for bespoke software development; the duration depends on project features, complexity, and other factors. For an accurate time estimation, connect with the experts at Twin Power.'
    },
    {
      title: 'What Technologies Are You Proficient In for Custom Software Development?',
      content: "Our expertise spans a wide range of technologies, including but not limited to Java, Python, .NET, JavaScript, and frameworks such as Angular, React, and Vue.js. This ensures we select the optimal stack for your project's specific requirements."
    },
    {
      title: 'What is the Cost of Custom Software Development?',
      content: "The cost of developing custom software is influenced by several factors, including the project's size, complexity, required features, and the number of development hours. For an accurate estimate of bespoke software development costs, connect with the experts at Twin Power."
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
                  Adaptive Software Development Company
                </span>
              </div>
              <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
                Are you looking for solutions specifically designed to help your business grow? Twin Power, a leading bespoke software development company, provides custom software solutions tailored to meet your unique needs.


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

      {/* Custom Software Development-- */}

      <div className="relative isolate overflow-hidden  py-6 md:py-8 lg:py-16 bg-gray-100">
        <div className="overflow-hidden">

          <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10">
            <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center
                first:*:font-normal
                last:*:font-bold last:*:text-theme1
            ">
              <span>Elevate Your Digital Presence Using  </span>
              <span> Our Custom Software Development</span>
            </p>
            <div className="md:text-base text-sm text-black/70 mt-3 text-balance text-center">
              Our custom software development services guarantee optimal performance and seamless integration tailored to your unique business needs. With the support of an experienced development team, we specialize in creating innovative software solutions designed to enhance your company’s success in today’s competitive landscape. Whether you need data analytics platforms or customized CRM systems, we deliver scalable solutions to meet your evolving business demands.
            </div>
            <div className="flex flex-wrap mt-5 sm:mt-8 md:mt-10">
              <div className="w-full lg:w-[40%]">
                <div className="pb-5">
                  <p className="max-md:text-2xl/tight max-xl:text-2xl/tight text-2xl/tight tracking-[-0.04em] text-black lg:text-left text-center">
                    <span>Tailored Software  <i className="text-theme1 font-bold">Development Company Committed</i>  to User </span>
                  </p>
                </div>
                <Image className="lg:w-full mx-auto   object-contain " width="336" height="487"
                  src="https://img.freepik.com/free-photo/website-development-links-seo-webinar-cyberspace-concept_53876-120953.jpg?t=st=1726811713~exp=1726815313~hmac=e717a27194d2fb526383232e7352488c08d038de34130205752e807b1917d044&w=740" alt="image" />
              </div>
              <div className="w-full lg:w-[60%]">
                <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10

                            *:flex *:w-full *:flex-wrap *:gap-y-8

                            *:*:w-full *:*:sm:w-1/2 *:*:p-10 hover:*:*:md:bg-white hover:*:*:md:shadow-lg *:*:shadow-gray-50 *:*:duration-200 *:*:rounded-xl
                            
                            *:*:*:md:max-w-xs *:*:*:mx-auto

                            [&amp;_svg]:mb-3 [&amp;_svg]:text-theme1

                            [&amp;_.font-medium text-lg leading-7 py-2]:font-medium [&amp;_.font-medium text-lg leading-7 py-2]:text-xl [&amp;_.font-medium text-lg leading-7 py-2]:text-gray-900

                            [&amp;_.text-slate-400 leading-[125%]]:text-base [&amp;_.text-slate-400 leading-[125%]]:mt-2 [&amp;_.text-slate-400 leading-[125%]]:text-gray-600
                        ">
                  <ul>
                    <li>
                      <div>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25 9.0712C26.527 7.34116 28.7611 6.25 31.25 6.25C35.8524 6.25 39.5833 9.98096 39.5833 14.5833C39.5833 19.1857 35.8524 22.9167 31.25 22.9167C28.7611 22.9167 26.527 21.8255 25 20.0955M31.25 43.75H6.25V41.6667C6.25 34.7631 11.8464 29.1667 18.75 29.1667C25.6536 29.1667 31.25 34.7631 31.25 41.6667V43.75ZM31.25 43.75H43.75V41.6667C43.75 34.7631 38.1536 29.1667 31.25 29.1667C28.9732 29.1667 26.8386 29.7754 25 30.8389M27.0833 14.5833C27.0833 19.1857 23.3524 22.9167 18.75 22.9167C14.1476 22.9167 10.4167 19.1857 10.4167 14.5833C10.4167 9.98096 14.1476 6.25 18.75 6.25C23.3524 6.25 27.0833 9.98096 27.0833 14.5833Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="font-medium text-lg leading-7 py-2">SMBs</p>
                        <p className="text-slate-400 leading-[125%]">We develop software solutions that focus on process optimization, productivity enhancement, and resource efficiency. Each solution is specifically designed to address the unique needs and challenges faced by small and medium-sized businesses.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.33301 12.5C8.33301 10.1988 10.1985 8.33334 12.4997 8.33334H16.6663C18.9675 8.33334 20.833 10.1988 20.833 12.5V16.6667C20.833 18.9679 18.9675 20.8333 16.6663 20.8333H12.4997C10.1985 20.8333 8.33301 18.9679 8.33301 16.6667V12.5Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M29.1663 12.5C29.1663 10.1988 31.0318 8.33334 33.333 8.33334H37.4997C39.8009 8.33334 41.6663 10.1988 41.6663 12.5V16.6667C41.6663 18.9679 39.8009 20.8333 37.4997 20.8333H33.333C31.0318 20.8333 29.1663 18.9679 29.1663 16.6667V12.5Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M8.33301 33.3333C8.33301 31.0322 10.1985 29.1667 12.4997 29.1667H16.6663C18.9675 29.1667 20.833 31.0322 20.833 33.3333V37.5C20.833 39.8012 18.9675 41.6667 16.6663 41.6667H12.4997C10.1985 41.6667 8.33301 39.8012 8.33301 37.5V33.3333Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M29.1663 33.3333C29.1663 31.0322 31.0318 29.1667 33.333 29.1667H37.4997C39.8009 29.1667 41.6663 31.0322 41.6663 33.3333V37.5C41.6663 39.8012 39.8009 41.6667 37.4997 41.6667H33.333C31.0318 41.6667 29.1663 39.8012 29.1663 37.5V33.3333Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="font-medium text-lg leading-7 py-2">Start-ups</p>
                        <p className="text-slate-400 leading-[125%]">The goal of our custom software development services is to provide startups with the affordable solutions they need. Our bespoke software solutions help drive growth and give them a competitive edge in the market.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.33301 10.4167C8.33301 9.26608 9.26575 8.33334 10.4163 8.33334H39.583C40.7336 8.33334 41.6663 9.26608 41.6663 10.4167V14.5833C41.6663 15.7339 40.7336 16.6667 39.583 16.6667H10.4163C9.26575 16.6667 8.33301 15.7339 8.33301 14.5833V10.4167Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M8.33301 27.0833C8.33301 25.9327 9.26575 25 10.4163 25H22.9163C24.0669 25 24.9997 25.9327 24.9997 27.0833V39.5833C24.9997 40.7339 24.0669 41.6667 22.9163 41.6667H10.4163C9.26575 41.6667 8.33301 40.7339 8.33301 39.5833V27.0833Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M33.333 27.0833C33.333 25.9327 34.2657 25 35.4163 25H39.583C40.7336 25 41.6663 25.9327 41.6663 27.0833V39.5833C41.6663 40.7339 40.7336 41.6667 39.583 41.6667H35.4163C34.2657 41.6667 33.333 40.7339 33.333 39.5833V27.0833Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="font-medium text-lg leading-7 py-2">Enterprises</p>
                        <p className="text-slate-400 leading-[125%]">Obtain custom software solutions tailored to meet the complex and diverse needs of large-scale enterprises. At Twin Power, we prioritize scalability, security, integration, and performance to drive digital transformation.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25 9.0712C26.527 7.34116 28.7611 6.25 31.25 6.25C35.8524 6.25 39.5833 9.98096 39.5833 14.5833C39.5833 19.1857 35.8524 22.9167 31.25 22.9167C28.7611 22.9167 26.527 21.8255 25 20.0955M31.25 43.75H6.25V41.6667C6.25 34.7631 11.8464 29.1667 18.75 29.1667C25.6536 29.1667 31.25 34.7631 31.25 41.6667V43.75ZM31.25 43.75H43.75V41.6667C43.75 34.7631 38.1536 29.1667 31.25 29.1667C28.9732 29.1667 26.8386 29.7754 25 30.8389M27.0833 14.5833C27.0833 19.1857 23.3524 22.9167 18.75 22.9167C14.1476 22.9167 10.4167 19.1857 10.4167 14.5833C10.4167 9.98096 14.1476 6.25 18.75 6.25C23.3524 6.25 27.0833 9.98096 27.0833 14.5833Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="font-medium text-lg leading-7 py-2">Industries</p>
                        <p className="text-slate-400 leading-[125%]">No matter your business domain, we can be your solution. With Twin Power assistance, you can access custom software development solutions tailored to your needs. Our bespoke software development services are specifically designed to meet the requirements of businesses of all sizes.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Software Development--end */}

      <Cta />
      <Gallery />

      {/* benefits-of-personalized  */}

      <div className="relative py-6 md:py-8 lg:py-16  bg-gray-100">
        <div className="mx-auto px-4 sm:px-6 md:max-w-5xl md:px-4 lg:px-2 relative pb-5">
          <p className="text-gray-800 max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center">
            <span className="font-normal">Benefits of </span>
            <span className="font-bold text-theme1"> Personalized Software Development Solutions</span>
          </p>
          <div className="md:text-base text-sm text-black/70 mt-3 text-center">
            Take Advantage of Bespoke Software Development Services to unlock tailored solutions for your company. Enjoy seamless integration, increased productivity, and scalability as our professionals create custom software solutions designed to meet your specific needs. Custom software developed exclusively for your business can provide a competitive edge and streamline operations. Enhance your business today with custom development.
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 z-10">
          <div className="flex flex-row flex-wrap w-full relative z-40 items-center text-gray-800">
            <div className="lg:w-1/3 w-full h-auto p-3 sm:w-1/2">
              <div className="h-full shadow-4xl relative bg-gray-300 group backdrop-blur-[12px] p-7 before:transition-all  after:transition-all before:absolute before:top-[-20%] before:right-[-20%] before-z-0  before:h-[200px] before:w-[200px] before:rounded-full before:bg-gray-200 overflow-hidden">
                <span className="absolute border-l-2 border-theme1  left-0 top-0 h-0 w-0  group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-r-2 border-theme1 right-0  bottom-0 h-0 w-0 group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-b-2 border-theme1 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-gray-200 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rounded-br-none  group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="text-3xl duration-700 relative z-50  font-bold text-slate-500">
                    01
                  </div>
                </div>
                <div className="text-lg my-3  relative z-50  text-slate-500 font-semibold">
                  Personalized Solutions
                </div>
                <div className="text-base relative z-50  text-black ">
                  Personalized software development delivers solutions specifically designed to meet your unique business requirements, boosting productivity and efficiency.
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full h-auto p-3 sm:w-1/2">
              <div className="h-full shadow-4xl relative bg-gray-300 group backdrop-blur-[12px] p-7 before:transition-all  after:transition-all before:absolute before:top-[-20%] before:right-[-20%] before-z-0  before:h-[200px] before:w-[200px] before:rounded-full before:bg-gray-200 overflow-hidden">
                <span className="absolute border-l-2 border-theme1  left-0 top-0 h-0 w-0  group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-r-2 border-theme1 right-0  bottom-0 h-0 w-0 group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-b-2 border-theme1 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-gray-200 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rounded-br-none  group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="text-3xl duration-700 relative z-50  font-bold text-slate-500">
                    02
                  </div>
                </div>
                <div className="text-lg my-3  relative z-50  text-slate-500 font-semibold">
                  Elevation
                </div>
                <div className="text-base relative z-50  text-black ">
                  Custom software can be designed to evolve with your company, effortlessly adapting to changing needs as it grows.
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full h-auto p-3 sm:w-1/2">
              <div className="h-full shadow-4xl relative bg-gray-300 group backdrop-blur-[12px] p-7 before:transition-all  after:transition-all before:absolute before:top-[-20%] before:right-[-20%] before-z-0  before:h-[200px] before:w-[200px] before:rounded-full before:bg-gray-200 overflow-hidden">
                <span className="absolute border-l-2 border-theme1  left-0 top-0 h-0 w-0  group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-r-2 border-theme1 right-0  bottom-0 h-0 w-0 group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-b-2 border-theme1 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-gray-200 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rounded-br-none  group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="text-3xl duration-700 relative z-50  font-bold text-slate-500">
                    03
                  </div>
                </div>
                <div className="text-lg my-3  relative z-50  text-slate-500 font-semibold">
                  Robust Security
                </div>
                <div className="text-base relative z-50  text-black ">
                  With bespoke software, you gain greater control over security protocols, reducing vulnerabilities and protecting vital data.
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full h-auto p-3 sm:w-1/2">
              <div className="h-full shadow-4xl relative bg-gray-300 group backdrop-blur-[12px] p-7 before:transition-all  after:transition-all before:absolute before:top-[-20%] before:right-[-20%] before-z-0  before:h-[200px] before:w-[200px] before:rounded-full before:bg-gray-200 overflow-hidden">
                <span className="absolute border-l-2 border-theme1  left-0 top-0 h-0 w-0  group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-r-2 border-theme1 right-0  bottom-0 h-0 w-0 group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-b-2 border-theme1 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-gray-200 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rounded-br-none  group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="text-3xl duration-700 relative z-50  font-bold text-slate-500">
                    04
                  </div>
                </div>
                <div className="text-lg my-3  relative z-50  text-slate-500 font-semibold">
                  Enhanced Integration
                </div>
                <div className="text-base relative z-50  text-black ">
                  Bespoke software can be seamlessly integrated with existing workflows and systems, enhancing overall functionality and optimizing processes.
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full h-auto p-3 sm:w-1/2">
              <div className="h-full shadow-4xl relative bg-gray-300 group backdrop-blur-[12px] p-7 before:transition-all  after:transition-all before:absolute before:top-[-20%] before:right-[-20%] before-z-0  before:h-[200px] before:w-[200px] before:rounded-full before:bg-gray-200 overflow-hidden">
                <span className="absolute border-l-2 border-theme1  left-0 top-0 h-0 w-0  group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-r-2 border-theme1 right-0  bottom-0 h-0 w-0 group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-b-2 border-theme1 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-gray-200 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rounded-br-none  group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="text-3xl duration-700 relative z-50  font-bold text-slate-500">
                    05
                  </div>
                </div>
                <div className="text-lg my-3  relative z-50  text-slate-500 font-semibold">
                  Extended Cost-efficiency
                </div>
                <div className="text-base relative z-50  text-black ">
                  Although the initial investment may be higher, bespoke software often proves to be more cost-effective over time due to lower maintenance and licensing costs.
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full h-auto p-3 sm:w-1/2">
              <div className="h-full shadow-4xl relative bg-gray-300 group backdrop-blur-[12px] p-7 before:transition-all  after:transition-all before:absolute before:top-[-20%] before:right-[-20%] before-z-0  before:h-[200px] before:w-[200px] before:rounded-full before:bg-gray-200 overflow-hidden">
                <span className="absolute border-l-2 border-theme1  left-0 top-0 h-0 w-0  group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-r-2 border-theme1 right-0  bottom-0 h-0 w-0 group-hover:h-full duration-300 delay-300"></span>
                <span className="absolute border-b-2 border-theme1 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-gray-200 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rounded-br-none  group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="text-3xl duration-700 relative z-50  font-bold text-slate-500">
                    06
                  </div>
                </div>
                <div className="text-lg my-3  relative z-50  text-slate-500 font-semibold">
                  Edge Over Competitors
                </div>
                <div className="text-base relative z-50  text-black ">
                  Our on-demand software solutions can help you excel in today's highly competitive market. Get ready to differentiate your company with our exclusive bespoke software services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* benefits-of-personalized-end  */}

      <Cta2 />
      <PortfolioSection />




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

export default bespokeSoftwareDevelopment;