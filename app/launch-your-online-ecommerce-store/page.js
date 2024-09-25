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



function launchyouronlineecommercestore() {
  const accordionItems = [
      {
          title: 'What is the Cost of Developing a  Ecommerce Marketplace?',
          content: "The cost of developing an e-commerce marketplace depends on your project’s complexity and requirements. On average, prices start at $10,000 and can increase with more advanced features."
      },
      {
          title: "What are the best strategies to generate revenue from an e-commerce marketplace?",
          content: "The best strategies to generate revenue from an e-commerce marketplace include charging transaction fees, subscription plans, and listing fees. You can also monetize through advertising, premium services, and lead generation."
      },
      {
          title: 'What advantages does an e-commerce marketplace offer?',
          content: 'An e-commerce marketplace provides wider reach and access to diverse products for customers while offering sellers a platform to increase sales without heavy infrastructure costs. It also fosters competition, leading to better prices and choices.'
      },
      {
          title: 'Do you sign an NDA?',
          content: "Absolutely! We prioritize client confidentiality and always sign a Non-Disclosure Agreement (NDA) before starting any project. You can trust that your information will be handled with the utmost care and professionalism."
      },
      {
          title: 'Do you offer support services after the development is completed?',
          content: 'Yes, we provide continuous support for our clients. If you encounter any issues, feel free to reach out, and we’ll do our best to resolve them promptly.'
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
              <span className=" absolute inset-0 bg-cover bg-right opacity-50 rounded-b-2xl bg-gradient-to-r mix-blend-multiply  from-theme1 via-theme1/50 to-theme1/80"></span>
              <Image
                className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]"
                width="1519"
                height="812"
                loading="lazy"
                src="/img/launch-online-ecommerce-marketplace.webp"
                alt="image.
"
              />

              <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between">
                <div className="xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center">
                  <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                    <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                    Kickstart Your Ecommerce Marketplace Today!

                    </span>
                  </div>
                  <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto">
                  Eager to become the next big name in the ecommerce space? Create an impressive ecommerce marketplace and capture the hearts of online shoppers. Choose Twin Power as your trusted partner!
                  </div>
                </div>
                <div className="xl:w-1/3 lg:w-1/2 max-lg:mx-auto">
                  <div className="colorApply4 w-full px-5 md:py-10 py-8 md:rounded-2xl rounded-xl  shadow-xl bg-white backdrop-blur-lg relative gap-6 flex flex-col before:absolute before:inset-4 md:hover:before:inset-1 before:duration-200 before:ease-in before:bg-white/5 before:backdrop-blur-2xl before:rounded-xl before: before:z-0 before:m-auto *:w-full *:z-10 ">
                    <div>
                      <div className="colorApply5 size-16 rounded-full mx-auto shadow-md shadow-white/5 bg-theme1  text-white">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="size-full"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="lg:text-xl md:text-lg text-base text-theme1 text-center text-balance font-semibold">
                      Get Top-Notch, Innovative Mobile App Solutions from Us.
                    </div>
                    <div className=" flex justify-center w-full">
                      <button className="px-4 text-sm text-[white] rounded-full bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300">
                        <span>Schedule a consultation</span>
                        <span>
                          <svg
                            className="size-5"
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            height="200px"
                            width="200px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div className="md:text-sm text-xs text-theme1 text-center text-balance">
                      Complete the form below with your project specifications.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


           

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
            <Form />
            <Footer />

</>
    )
}

export default launchyouronlineecommercestore;