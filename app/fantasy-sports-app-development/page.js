"use client"
import Accordion from '@/components/accordion/Accordion';
import React from 'react'
import Image from 'next/image'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Form from '@/components/contactForm/Form'
import Blog from '@/components/blog/Blog'
import Cta from '@/components/cta/Cta'
import Link from 'next/link'
import Cta2 from '@/components/cta2/Cta2'
import CaseStudy from '@/components/caseStudy/CaseStudy'
import PortfolioSection from '@/components/portfolio/portfolio'
import Testimonial from '@/components/testimonial/Testimonial'

function fantasysportsappdevelopment() {
  const accordionItems = [
    {
      title: 'How much cost does it take to build a fantasy sports app?',
      content: 'The factors which affect the development of fantasy sports apps are platform, app size and what type of features you wish to add. There are separate costs of building fantasy sports apps as you can choose either an android or iOS platform to launch your application. However, you can launch your app on both platforms but that will increase the cost of development.'
    },
    {
      title: "Why Choose Twin Power Software for building your fantasy sports app?",
      content: 'Our experts who are responsible for building your app have specialized in this field and have all the skills and knowledge of app structure and its relative platform. However, they are available for you to assist all the time. We not only build your app based on your customized needs but also deliver support after you have launched your app. Our experts never fail to deliver projects on time and we never compromise on project quality.'
    },
    {
      title: 'Why is the type of Fantasy sports App offered by Twin Power Software?',
      content: 'We have acquired excellence and success in delivering a varied quantity of projects to our multiple clients. We deliver apps of fantasy cricket, fantasy football, fantasy kabaddi and mainly customized based on the games you wish to add. You can consult with our experts and state your business needs and we will deliver the same with seamless Ui Experience.'
    },
    {
      title: 'Do Twin Power Software deliver support and maintenance service?',
      content: 'Yes, we deliver 24/7 support to our clients as per their requirements. Our team is always ready to give their best in analyzing your concerns and giving you solutions in time. You can put your app issues after launching to our team and we are available to assist you and to deliver maintenance service.'
    },
  ];

  return (
    <>
      <Header />
      {/* hero */}
      <div className="relative">
        <div className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full  after:w-full after:bg-gradient-to-tr  after:via-theme1/80 after:to-theme2/70 after:from-theme2/70 after:backdrop-blur-sm after:mix-blend-multiply">
          <Image src="/img/image4.webp" width={'1000'} height={'1000'} alt="" className='h-full w-full object-cover overflow-hidden object-top' />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
          <div className="w-full">
            <div className="max-w-5xl grow-0 text-center mx-auto text-balance">
              <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                  Fantasy Sports App Development Company
                </span>
              </div>

            </div>
            <div className=" lg:w-2/3 w-full mx-auto mix-blend-color-dodge mt-2 px-5 md:py-10 py-8 md:rounded-2xl rounded-xl !shadow-xl bg-white/5 relative gap-6 flex flex-col before:absolute before:inset-4 md:hover:before:inset-1 before:duration-200 before:ease-in before:bg-theme2/5 before:rounded-xl before:!before:z-0 before:m-auto *:w-full *:z-10 shadow-white/10">
              <div className="font-light text-white max-md:text-lg/tight max-xl:text-xl/tight text-2xl/tight tracking-[-0.04em] text-center px-8">
                <span className="font-medium text-gray-100 block pb-1 shadow-purple-950 via-purple-500 from-purple-100 to-purple-100">Choose the Game to <b className="font-semibold">Launch Your Fantasy Paltform</b></span>
              </div>

              <fieldset className="px-8 w-full overflow-hidden">
                <div className="mt-3 grid grid-cols-4 -mx-3 gap-4">
                  <div className="grow">
                    <Link href="javascript:;" className="text-gray-200 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 flex flex-col gap-2 items-center rounded-lg p-4 ring-1 ring-transparent border border-white/20 md:hover:border-white justify-center font-bold">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-12 mx-auto" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15a.996.996 0 0 0 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 0 0 0-1.41zM14.341 17.756l1.414-1.414 4.243 4.243-1.414 1.414z"></path><circle cx="18.5" cy="5.5" r="3.5"></circle></svg>
                      Cricket
                      <input name="payment_method" id="cricket" value="google" type="checkbox" className="hidden" />
                    </Link>
                  </div>
                  <div className="grow">
                    <Link href="javascript:;" className="text-gray-200 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 flex flex-col gap-2 items-center rounded-lg p-4 ring-1 ring-transparent border border-white/20 md:hover:border-white justify-center font-bold">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-12 mx-auto" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256c0 114.7 93.3 208 208 208 114.9 0 208-93.1 208-208 0-114.7-93.3-208-208-208zm127.3 80.7c8.5 8.5 16.1 17.7 22.6 27.5.7 1 .9 2.4.4 3.5L391.9 201c-.4 1-1.1 1.9-2.1 2.3l-57.5 26.2c-1.4.6-3 .4-4.2-.6l-56.6-47.6a4.1 4.1 0 0 1-1.4-3.1v-63.1c0-1.3.7-2.6 1.8-3.3l38.4-26.1c1-.7 2.3-.9 3.5-.5 25.8 8.9 49.6 23.6 69.5 43.5zm-73.9 297.6c-.4 1.2-1.4 2.1-2.6 2.4-16.3 4.8-33.4 7.2-50.8 7.2-17.5 0-34.5-2.5-50.8-7.2-1.2-.4-2.2-1.3-2.6-2.4l-16.4-43c-.4-1.1-.3-2.3.2-3.3l22.3-42.3c.7-1.3 2.1-2.1 3.5-2.1h87.5c1.5 0 2.8.8 3.5 2.1l22.3 42.3c.5 1 .6 2.2.2 3.3l-16.3 43zm-67.4-311v63.1c0 1.2-.5 2.3-1.4 3.1L183.9 229c-1.2 1-2.8 1.2-4.2.6l-57.5-26.2c-1-.5-1.8-1.3-2.1-2.3l-14.4-41.2c-.4-1.2-.3-2.5.4-3.5 6.5-9.8 14.1-19 22.6-27.5 19.9-19.9 43.7-34.6 69.6-43.3 1.2-.4 2.5-.2 3.5.5l38.4 26.1c1.1.5 1.8 1.7 1.8 3.1zM77.7 264.1l36.1-31.2c1.2-1 2.9-1.3 4.3-.6l52.4 23.8c1.1.5 1.9 1.5 2.2 2.7l14.6 57.3c.2 1 .1 2-.3 2.9l-23.2 43.9c-.7 1.3-2.1 2.2-3.6 2.1l-46-.6c-1.2 0-2.4-.6-3.2-1.6-20.5-27.7-32.5-60.6-34.7-95.4 0-1.3.5-2.5 1.4-3.3zm270.4 98.7L325 319c-.5-.9-.6-1.9-.3-2.9l14.6-57.3c.3-1.2 1.1-2.2 2.2-2.7l52.4-23.8c1.4-.6 3.1-.4 4.3.6l36.1 31.2c.9.8 1.5 2 1.4 3.3-2.1 34.8-14.2 67.6-34.7 95.4-.7 1-1.9 1.6-3.2 1.6l-46.1.6c-1.5-.1-2.9-.9-3.6-2.2z"></path></svg>
                      Football
                      <input name="payment_method" id="football" value="google" type="checkbox" className="hidden" />
                    </Link>
                  </div>
                  <div className="grow">
                    <Link href="javascript:;" className="text-gray-200 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 flex flex-col gap-2 items-center rounded-lg p-4 ring-1 ring-transparent border border-white/20 md:hover:border-white justify-center font-bold">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-12 mx-auto" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><circle cx="16.5" cy="2.38" r="2"></circle><path d="M24 11.88v-4.7l-5.05-2.14c-.97-.41-2.09-.06-2.65.84l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17.8-.42 1.52-.98 2.09-1.64l.6 3-1.16 1.1-.94.89v7.5h2v-6l2.1-2 1.8 8H23l-2.18-11-.62-3.1 1.8.7v3.4h2zM10.29 8.09c.22.15.47.24.72.29.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11.24-.1.47-.24.66-.44.49-.49.67-1.17.55-1.8-.07-.37-.25-.74-.55-1.03-.19-.19-.42-.34-.66-.44-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03-.14.02-.28.06-.41.11-.23.11-.46.26-.65.45-.3.29-.48.66-.55 1.03-.12.63.06 1.31.55 1.8.09.1.2.18.31.26z"></path><path d="m11.24 10.56-2-2c-.1-.1-.2-.18-.31-.26a1.93 1.93 0 0 0-.72-.28c-.13-.03-.25-.04-.38-.04-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54 0 .18.04.37.11.55l1.07 2.95-3.63 3.63L1.46 22l4.24-4.24v-2.22L7 16.75v5.13h2v-6l-2.12-2.12 2.36-2.36.71.71c1.29 1.26 2.97 2.04 5.03 2.04l-.14-2.07c-1.5-.02-2.7-.62-3.6-1.52z"></path></svg>
                      Kabaddi
                      <input name="payment_method" id="kabaddi" value="google" type="checkbox" className="hidden" />
                    </Link>
                  </div>
                  <div className="grow">
                    <Link href="javascript:;" className="text-gray-200 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 flex flex-col gap-2 items-center rounded-lg p-4 ring-1 ring-transparent border border-white/20 md:hover:border-white justify-center font-bold">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-12 mx-auto" xmlns="http://www.w3.org/2000/svg"><path d="M8.00488 5.00293H11.0049V14.0029H8.00488V17.0029H6.00488V14.0029H3.00488V5.00293H6.00488V2.00293H8.00488V5.00293ZM5.00488 7.00293V12.0029H9.00488V7.00293H5.00488ZM18.0049 10.0029H21.0049V19.0029H18.0049V22.0029H16.0049V19.0029H13.0049V10.0029H16.0049V7.00293H18.0049V10.0029ZM15.0049 12.0029V17.0029H19.0049V12.0029H15.0049Z"></path></svg>
                      Casino
                      <input name="payment_method" id="stock" value="google" type="checkbox" className="hidden" />
                    </Link>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
              As a leading fantasy sports app development company, we deliver market-leading solutions with amazing features. Which already 300+ sports apps delivered, Hire our expert app developers for next project.

            </div>
          </div>
        </div>


      </div>
      {/* hero */}

      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <p className="max-md:text-2xl/tight pt-16 max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                      <span>Expert Fantasy Sports App
                      </span>
                      <span className="font-bold text-theme2"> Development Services in India</span>
                    </p>
                    <p
                      className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Fantasy sports app development is an art mastered by our dedicated team of developers, who deliver robust and scalable solutions. You can trust our experts to provide full-time assistance for your fantasy sports app. With extensive experience and top-notch skills, our team is fully committed to bringing your vision to life</p>

                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      className="w-full h-full p-3.5 rounded-[20px] border hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">300+ Sports</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Apps Developed</p>
                    </div>
                    <div
                      className="w-full h-full p-3.5 rounded-[20px] border hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">11200+ Successful
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Projects Delivered</p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      className="w-full p-3.5 rounded-[20px] border hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">9 Years</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Of Industry Experience</p>
                    </div>
                    <div
                      className="w-full h-full p-3.5 rounded-[20px] border hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">98% Certified</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Expert Programmers.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="px-4 text-sm text-theme1 inline-flex items-center gap-2 font-semibold rounded-full py-3 border-theme1 overflow-hidden border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                <span>View More</span>
                <span>
                  <svg className='size-5' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg>
                </span>
              </button>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div
                className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border relative">
                <Image width={1000} height={10000} loading='lazy' quality={90} className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="https://img.freepik.com/premium-photo/dynamic-collage-athletes-various-sports-fencing-boxing-basketball-football-track-tennis-cycling-white-studio-background-team-individual-sports-concept-complete_880763-30980.jpg" alt="about Us image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* card */}
      <div className="relative py-6 md:py-8 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">

          <div className="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">

            <div className="w-full relative z-20 h-auto shrink-1 grow-0">
              <p className="
                      max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                      first:*:font-normal

                      last:*:font-bold last:*:text-theme2
                  ">
                <span>Next-Gen Fantasy App and </span> <span> Web Development Services</span>

              </p>
              <p className="md:text-base text-sm text-black/70 mt-3 text-balance text-center">Whether you're interested in building a mobile fantasy sports app for on-the-go users or want to connect with billions through a comprehensive fantasy sports website, our innovative fantasy sports software development services have you covered.</p>
            </div>

            <div className="w-full grid md:grid-cols-3 gap-8">
              
                         <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-sky-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl before:absolute before:h-12 before:w-4 before:bg-sky-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-sky-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-sky-500 ">
                                        Tailored Android App Solutions for Enterprises
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Looking to build an app similar to Dream11? As a premier fantasy sports app development company, we’re here to assist you.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-sky-500 rounded-full border-t-4 border-sky-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-sky-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-sky-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">01</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-amber-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl  before:absolute before:h-12 before:w-4 before:bg-amber-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-amber-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-amber-500 ">
                                        Development of Fantasy Sports Websites
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Reach billions of users with a dedicated fantasy sports website. Our Fantasy Sports Website Development services are available—get in touch with us today
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-amber-500 rounded-full border-t-4 border-amber-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-amber-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-amber-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">02</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-cyan-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl  before:absolute before:h-12 before:w-4 before:bg-cyan-700 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-cyan-700">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-cyan-600 ">
                                        Ready-made Fantasy Sports App Solutions
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        If you need a quick-to-launch fantasy sports app, our White Label Fantasy Sports Software is the perfect solution. Our team will tailor it to fit your specific requirements.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-cyan-600 rounded-full border-t-4 border-cyan-700 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-cyan-600 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute py-1 top-5 left-0 flex flex-col justify-center items-center size-max bg-cyan-600 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">03</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-rose-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl  before:absolute before:h-12 before:w-4 before:bg-rose-900 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-rose-900">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-rose-700 ">
                                        Fantasy Sports Software Development
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Twin Power Software provides comprehensive fantasy sports software development services, empowering businesses to build industry-leading solutions
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-rose-700 rounded-full border-t-4 border-rose-800 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-rose-700 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 left-0 flex flex-col justify-center items-center size-max bg-rose-700 px-5 py-1 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">04</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-sky-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl before:absolute before:h-12 before:w-4 before:bg-sky-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-sky-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-sky-500 ">
                                        Fantasy Sports Web App Development
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Experience the ultimate combination of performance and profitability with our high-speed fantasy sports web apps. Our expert team is ready to assist you in maximizing your revenue potential.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-sky-500 rounded-full border-t-4 border-sky-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-sky-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-sky-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">05</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-amber-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl  before:absolute before:h-12 before:w-4 before:bg-amber-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-amber-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-amber-500 ">
                                        Fantasy Scoring System Development
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Develop an accurate fantasy scoring system and seamlessly integrate it into your existing platform with the support of our skilled and experienced software developers.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-amber-500 rounded-full border-t-4 border-amber-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-amber-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-amber-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">06</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-cyan-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl  before:absolute before:h-12 before:w-4 before:bg-cyan-700 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-cyan-700">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-cyan-600 ">
                                        Social Fantasy Sports App
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Build a vibrant community of fantasy sports enthusiasts with your own social fantasy sports app. Boost your revenue and enhance user engagement like never before.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-cyan-600 rounded-full border-t-4 border-cyan-700 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-cyan-600 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute py-1 top-5 left-0 flex flex-col justify-center items-center size-max bg-cyan-600 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">07</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-rose-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl before:absolute before:h-12 before:w-4 before:bg-rose-900 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-rose-900">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-rose-700 ">
                                        Comprehensive Fantasy Sports Analytics Software
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Create fantasy sports analytics software and gain better insight into the fantasy industry. If this is what you want to create, we are here to help.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-rose-700 rounded-full border-t-4 border-rose-800 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-rose-700 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 left-0 flex flex-col justify-center items-center size-max bg-rose-700 px-5 py-1 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">08</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
                            <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-sky-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl before:absolute before:h-12 before:w-4 before:bg-sky-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-sky-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-sky-500 ">
                                        Fantasy Sports AR Solution
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Elevate your fantasy sports experience with augmented reality integration. Harness the power of virtual fantasy gaming to dominate the market and engage users like never before.
                                        </p>
                                    </div>
                                    <div class="flex absolute bottom-0 items-center justify-center">
                                        <div class="w-28 h-5 bg-sky-500 rounded-full border-t-4 border-sky-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-sky-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                    </div>
                                </div>
                                <div class="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-sky-500 px-5 rounded-r-full">
                                    <div class="text-4xl font-semibold text-white">09</div>
                                    {/* <div class="text-base -mt-1 font-semibold text-white">STEP</div> */}
                                </div>
                            </div>
            </div>
          </div>
        </div>


      </div>
      {/* card */}

      <div className="relative isolate overflow-hidden   py-6 md:py-8 lg:py-16 bg-theme2">
        <div className="overflow-hidden">

          <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10">
            <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white text-center
                first:*:font-normal
                last:*:font-bold last:*:text-white
            ">
              <span>The Gigantic Market size of </span>
              <span> the Fantasy Sports Industry</span>
            </p>
            <div className="md:text-base text-sm text-white mt-3 text-balance text-center">
              Investors, stakeholders, and customers are continually seeking to leverage the growth of the Fantasy Sports Industry. Joining this industry presents countless opportunities for revenue growth, expansion, and development.
            </div>
            <ul className="
                flex flex-row flex-wrap w-full relative z-40 items-stretch text-gray-800 pt-5 
                
                *:lg:w-1/3 *:md:w-1/2 *:h-auto *:p-3 *:text-center
                
                *:*:size-full *:*:bg-white *:*:rounded-[20px] *:*:p-6 *:*:relative *:*:shadow-lg *:*:duration-500 *:*:transition-all *:*:border-x-4 *:*:border-theme1
                
                [&_.icon]:text-3xl [&_.icon]:font-bold [&_.icon]:text-gray-700 
                
                [&_.icon>svg]:size-full 
                
                [&_.title]:text-base [&_.title]:text-gray-900 [&_.title]:py-3
                ">
              <li>
                <div>
                  <div className="icon">
                    13.9%
                  </div>
                  <div className="title">Potential Annual Growth Rate (CAGR)</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="icon">
                    $19B
                  </div>
                  <div className="title">Fantasy Sports Market Size in 2019</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="icon">
                    $49B
                  </div>
                  <div className="title">Fantasy Sports Market Size in 2027</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Cta />

      <section className="container mx-auto py-8 sm:py-16 relative   bg-gray-100">

        <div className="flex flex-col w-full max-w-7xl mx-auto pb-8 px-6 lg:px-8 text-center">
          <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
            <span>Our Fantasy Sports</span>
            <span className="font-bold text-theme2"> Platform Development Solution</span>
          </p>
          <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">TwinPower Software offers comprehensive development solutions for fantasy sports that can help you create a powerful platform to engage your users.</div>
        </div>
        <ul className="flex relative flex-col gap-y-8 lg:gap-y-64 flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-theme1 p-4 opacity-100 rounded-[20px] overflow-hidden relative">
              <div className="flex flex-col h-full relative z-50">
                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                  <div className="w-1/2 max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                    <span className="text-lg md:text-xl lg:text-2xl text-balance">Fantasy Cricket <span className="font-bold">App Development</span></span>
                    <div className="text-sm md:text-base text-balance">Our expert team will assist you in creating a customized fantasy cricket app with features like user registration, team creation, player selection, and more. Turn your vision into a reality with our reliable and innovative solutions. Contact us today for top-notch fantasy cricket app development services.</div>
                    <div className="px-1">
                      <Link href="javascript:;" className="inline-flex justify-center rounded-lg max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-cyan-900 bg-cyan-900/20 xl:hover:ring-cyan-700 duration-300 backdrop-blur-md shadow-sm shadow-cyan-900/50">View More</Link>
                    </div>
                  </div>
                  <div className="w-1/2 shrink-0 max-sm:w-full relative after:h-16 after:z-10 after:absolute after:bg-gradient-to-t after:from-theme1 after:via-theme1 after:to-transparent after:bottom-0 after:inset-x-0">
                    <Image width={'1000'} height={'1000'} quality={'90'} loading='lazy' src="/img/cricket-app.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-theme2  opacity-100 rounded-[20px] overflow-hidden relative">
              <div className="flex flex-col h-full relative z-50">
                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                  <div className="w-1/2 max-sm:w-full text-black flex flex-col max-sm:gap-y-4 gap-y-7 px-4">
                    <div className="text-lg md:text-xl lg:text-2xl text-balance">Fantasy Football <span className="font-bold">App Development</span></div>
                    <span className="text-sm md:text-base text-balance">TwinPower Software specializes in fantasy sports app development. With our expertise, we can create a custom fantasy football app that includes features like user registration, team creation, player selection, live scoring, and more. Transform your fantasy football app idea into a reality with our professional services. Contact us now for exceptional fantasy football app development solutions.</span>
                    <div className="px-1">
                      <Link href="javascript:;" className="inline-flex justify-center rounded-lg max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-cyan-900 bg-cyan-900/20 xl:hover:ring-cyan-700 duration-300 backdrop-blur-md shadow-sm shadow-cyan-900/50">View More</Link>
                    </div>
                  </div>
                  <div className="w-1/2 shrink-0 max-sm:w-full relative after:h-16 after:z-10 after:absolute after:bg-gradient-to-t after:from-theme2  after:via-theme2  after:to-transparent after:bottom-0 after:inset-x-0">
                    <Image width={'1000'} height={'1000'} quality={'90'} loading='lazy' src="/img/football-app.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-theme1 opacity-100 rounded-[20px] overflow-hidden relative p-6">
              <div className="flex flex-col h-full relative z-50">
                <div className="w-full gap-4 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                  <div className="order-2 w-1/2 max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                    <div className="text-lg md:text-xl lg:text-2xl text-balance">Fantasy Kabaddi <span className="font-bold">App Development</span></div>
                    <span className="text-sm md:text-base text-balance">With TwinPower Software, you can bring your fantasy kabaddi app idea to life. Our experienced team will guide you through the entire app development process, from conceptualization to launch. Create engaging features like user registration, team formation, player selection, live scoring, and more. Don't miss the opportunity to captivate kabaddi enthusiasts with your customized fantasy kabaddi app.</span>
                    <div className="px-1">
                      <Link href="javascript:;" className="inline-flex justify-center rounded-lg max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-cyan-900 bg-cyan-900/20 xl:hover:ring-cyan-700 duration-300 backdrop-blur-md shadow-sm shadow-cyan-900/50">View More</Link>
                    </div>
                  </div>
                  <div className="w-1/2 order-1 shrink-0 max-sm:w-full relative after:h-16 after:z-10 after:absolute after:bg-gradient-to-t after:from-theme1 after:via-theme1 after:to-transparent after:bottom-0 after:inset-x-0">
                    <Image width={'1000'} height={'1000'} quality={'90'} loading='lazy' src="/img/Kabaddi-app.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-theme2 opacity-100 rounded-[20px] overflow-hidden relative p-6">
              <div className="flex flex-col h-full relative z-50">
                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                  <div className="w-1/2 max-sm:w-full text-black flex flex-col max-sm:gap-y-4 gap-y-7">
                    <div className="text-lg md:text-xl lg:text-2xl text-balance">Fantasy Stock Market <span className="font-bold">App Development</span></div>
                    <span className="text-sm md:text-base text-balance">Ready to launch your fantasy stock app? TwinPower Software is your go-to partner for fantasy stock app development. Our skilled team will help you create a cutting-edge app with features like user registration, portfolio creation, virtual trading, real-time market data, and more. Step into the world of virtual stock trading with our reliable and innovative solutions.</span>
                    <div className="px-1">
                      <Link href="javascript:;" className="inline-flex justify-center rounded-lg max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-cyan-900 bg-cyan-900/20 xl:hover:ring-cyan-700 duration-300 backdrop-blur-md shadow-sm shadow-cyan-900/50">View More</Link>
                    </div>
                  </div>
                  <div className="w-1/2 shrink-0 max-sm:w-full relative after:h-16 after:z-10 after:absolute after:bg-gradient-to-t after:from-theme2 after:via-theme2 after:to-transparent after:bottom-0 after:inset-x-0">
                    <Image width={'1000'} height={'1000'} quality={'90'} loading='lazy' src="/img/fantasy-stock-app.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* features start */}
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
              <Image width={1000} height={1000} src="/img/image-fantasy-sports-user-panel.webp" alt="fantasy-sports-user-penal" className="img-fluid h-full w-full " />
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
              <Image width={1000} height={1000} loading='lazy' quality={90} src="/img/fantasy-sports-admin-penal.webp" alt="fantasy-sports-admin-penal" className="img-fluid h-full w-full " />
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
      {/* features Ends */}

      <Cta2 />

      <CaseStudy />

      <PortfolioSection />

      <Testimonial />

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

export default fantasysportsappdevelopment