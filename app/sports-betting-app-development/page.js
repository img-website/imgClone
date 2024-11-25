"use client"
import Accordion from '@/components/accordion/Accordion';
import Blog from '@/components/blog/Blog'
import Form from '@/components/contactForm/Form'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import Image from 'next/image'
import Cta from '@/components/cta/Cta'
import CaseStudy from '@/components/caseStudy/CaseStudy'
import Cta2 from '@/components/cta2/Cta2'
import PortfolioSection from '@/components/portfolio/portfolio'

function sportsbettingappdevelopment() {

  const accordionItems = [
    {
      title: 'How do you make a sports betting app?',
      content: 'Developing a stunning sports betting app requires much effort and expertise. For developing it, our first step is requirement analysis, and we do it till analyzing the last point; then, we proceed with further processes like wireframing, designing, UI/UX development, backend development, testing, and launch.'
    },
    {
      title: "How much does it cost to start a sports betting app?",
      content: 'Exact prediction for sports betting app development cost is a challenge as multiple factors affect it. However, the approximate cost of developing a sports betting app varies between $ 12,000 and $20,000 for a single platform. If you need an advanced cost, then it may take more.'
    },
    {
      title: 'How do I start my own sports betting business?',
      content: 'The best idea for starting a sports betting business is to develop a mobile app. Due to the evolution of smartphone and internet technologies, most users prefer sports betting via mobile. Here, you can leverage our sports betting app development services.'
    },
    {
      title: 'How do sports betting apps make money?',
      content: 'Sports betting apps make money primarily through vigorish (the fee charged on bets), in-play betting (capitalizing on live odds changes), and promotions that attract new users. Many bettors wager more than their bonuses, contributing to profits. Additionally, data analytics help set accurate odds, minimizing risk, while loyalty programs enhance customer retention. Affiliate marketing also serves as an extra revenue stream.'
    },
  ];
  return (
    <>
      <Header />
      {/* hero */}
      <div className="relative">
        <div className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-tr  after:via-theme2/80 after:to-theme1/70 after:from-theme1/70 after:backdrop-blur-sm">
          <Image src="/img/sports-betting-app-development-1519w.webp" width={'1000'} height={'1000'} alt="" className='h-full w-full object-cover overflow-hidden object-top' />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
          <div className="w-full">
            <div className="max-w-5xl grow-0 text-center mx-auto text-balance">
              <div className="font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-6xl/tight tracking-[-0.04em]">
                <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                  Sports Betting App Development Company
                </span>
              </div>
              <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
                Elevate your sports betting business with Twin Power Software — your reliable partner in creating exceptional apps. We specialize in turning betting concepts into robust sports betting app solutions.
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

      {/* cta start */}
      <div className="py-6 md:py-8 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 group">
          <div className="relative isolate overflow-hidden bg-theme1 px-6 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 lg:flex lg:px-24 *:z-10">
            <div className="lg:mx-0 lg:flex-auto py-6 md:py-8 lg:py-16 text-center relative z-[1] md:after:absolute md:after:duration-700 md:after:border-l-4 md:after:border-t-4 md:after:border-[#9b9b9b] md:after:h-[50px] md:after:w-[50px] md:after:p-4 md:after:top-[23px] md:after:left-[-43px] md:before:z-[33] md:before:absolute md:before:duration-700 md:before:border-r-4 md:before:border-b-4 md:before:border-[#9b9b9b] md:before:h-[50px] md:before:w-[50px] md:before:p-4 md:before:bottom-[23px] md:before:right-[-43px] group-hover:md:before:w-[80px] group-hover:md:before:h-[80px] group-hover:md:after:w-[80px] group-hover:md:after:h-[80px]">
              <div className="max-sm:text-xl max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight text-white font-normal empty:hidden max-sm:text-center">
                The total revenue for casino games is projected to reach $14.19 billion by 2027, with the combined market size of casino and online betting standing at $262 billion.
                <span className="font-bold text-gray-100">If you have a vision, now is the perfect time to launch your casino software." </span></div>
            </div>
          </div>
        </div>
      </div>
      {/* cta Ends */}

      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <p className="max-md:text-2xl/tight pt-16 max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                      <span className='text-white'>Cutting-Edge Sports Betting
                      </span>
                      <span className="font-bold text-theme2"> App Development Using the Latest Tech</span>
                    </p>
                    <p
                      className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                      Step into the sports betting arena with a cutting-edge app that creates unforgettable experiences for all users.
                    </p>
                    <p
                      className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                      If you're looking to develop a distinctive sports betting app, Twin Power Software is your ideal choice. We blend expertise and innovation to deliver high-performing sports betting solutions. Our proficiency with the latest technologies, frameworks, and APIs allows us to tackle complex betting challenges with ease.
                    </p>
                    <p
                      className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our team of professional sports betting app developers has extensive experience in creating various software solutions and apps like Bet365, 1xBet, BetMGM, Parimatch, and more. We can also develop specialized apps, such as cricket betting and football betting apps. As a leading sports betting app development company, we are your one-stop shop for tech-driven and innovative sports betting app solutions.
                    </p>

                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">


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
                className="sm:w-[500px] w-full aspect-[1/.8] sm:h-auto  sm:bg-gray-100 rounded-3xl sm:border relative">
                <Image width={1000} height={10000} loading='lazy' quality={90} className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="https://img.freepik.com/premium-photo/dynamic-collage-athletes-various-sports-fencing-boxing-basketball-football-track-tennis-cycling-white-studio-background-team-individual-sports-concept-complete_880763-30980.jpg" alt="about Us image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />

      <div className="relative isolate overflow-hidden py-6 md:py-8 lg:py-16 bg-gray-100">
        <div className="overflow-hidden">
          <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10">
            <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center
                first:*:font-normal
                last:*:font-bold last:*:text-theme2
            ">
              <span>Objective-Focused Sports Betting Apps  </span>
              <span> for Endless Entertainment</span>
            </p>
            <div className="md:text-base text-sm text-black/70 mt-3 text-balance text-center">
              We offer tailored solutions for all kinds of betting challenges. Just share your requirements with us, and we'll transform them into an engaging sports betting app.
            </div>
            <div className="flex flex-wrap mt-5 sm:mt-8 md:mt-10 items-center">
              <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                <div className="border-4 h-full text-center m-5 px-5 border-sky-500 flex flex-col bg-white py-20 items-center hover:shadow-xl hover:shadow-sky-700 relative before:absolute before:w-full before:h-1/2 before:bg-sky-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:h-1/2 after:bg-sky-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                  <div className="*:size-16 *:p-1 *:mt-2 text-sky-500">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M255.7 106.6h-.2c-25 0-45.5-20.3-45.5-45.3 0-25 20.4-45.3 45.5-45.3S301 36.3 301 61.3c0 12.1-4.7 23.5-13.3 32-8.5 8.6-19.9 13.3-32 13.3zM221.2 496c-14.4 0-27-10.5-27-30.4l1-277.6h-10v105c0 9.3-3 15.1-6.4 18.3-4.3 4.1-9.1 6.4-15.2 6.4-6.2 0-10.9-2.3-15.2-6.4-3.4-3.2-6.4-8.9-6.4-18.3V171.4c0-13.8 4.4-27.8 13.8-38.4 10.4-11.6 23.6-18 39-18h122.3c15.4 0 28.6 6.4 39 18.1 9.4 10.6 13.8 24.5 13.8 38.3V293c0 7.3-1.7 13.8-6.6 18.3-4.4 4-9.3 6.2-15.5 6.2s-11.1-2.2-15.5-6.2c-4.9-4.5-6.6-11-6.6-18.3V188h-9v277.6c0 19.7-13.4 30.4-27.8 30.4-13.4 0-26.3-9.3-27.4-29.8V325h-12v140.9c-.7 19.7-13.8 30.1-28.3 30.1z"></path></svg>
                  </div>
                  <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-sky-500  px-2 py-1 rounded-lg">Singles</div>
                  <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">It is one of the perfect options for beginners to place their bets without risk, enjoy sports betting, and win real cash prizes. </p>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                <div className="border-4 h-full text-center m-5 px-5 border-cyan-500 flex flex-col bg-white py-20 items-center hover:shadow-xl hover:shadow-cyan-700 relative before:absolute before:w-full before:h-1/2 before:bg-cyan-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:h-1/2 after:bg-cyan-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                  <div className="*:size-16 *:p-1 *:mt-2 text-cyan-500">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 8 5 C 4.7 5 2 7.7 2 11 C 2 13 3 14.800781 4.5 15.800781 C 1.8 17.200781 0 19.9 0 23 L 2 23 C 2 19.7 4.7 17 8 17 C 11.3 17 14 19.7 14 23 L 16 23 C 16 19.8 18.600781 17.1 21.800781 17 L 22 17 C 24.5 17 26.6 15.500391 27.5 13.400391 C 27.5 13.400391 27.499609 13.300781 27.599609 13.300781 C 27.699609 13.200781 27.699219 13.000391 27.699219 12.900391 C 27.699219 12.800391 27.700781 12.799219 27.800781 12.699219 C 27.800781 12.599219 27.900391 12.400781 27.900391 12.300781 C 27.900391 12.200781 27.9 12.1 28 12 C 28 11.9 27.999609 11.799219 28.099609 11.699219 L 28.099609 11.199219 L 28.099609 11.099609 C 28.099609 7.7996094 25.399609 5.0996094 22.099609 5.0996094 C 18.799609 5.0996094 16.099609 7.7996094 16.099609 11.099609 C 16.099609 13.099609 17.099609 14.900391 18.599609 15.900391 C 17.099609 16.600391 15.899609 17.799219 15.099609 19.199219 C 14.299609 17.799219 13.099609 16.600391 11.599609 15.900391 C 12.999609 14.800391 14 13 14 11 C 14 7.7 11.3 5 8 5 z M 8 7 C 10.2 7 12 8.8 12 11 C 12 13.2 10.2 15 8 15 C 5.8 15 4 13.2 4 11 C 4 8.8 5.8 7 8 7 z M 22 7 C 24.2 7 26 8.8 26 11 C 26 13.2 24.2 15 22 15 C 19.8 15 18 13.2 18 11 C 18 8.8 19.8 7 22 7 z M 24.099609 18 L 24.099609 20.099609 C 23.499609 20.199609 22.900391 20.500781 22.400391 20.800781 L 20.900391 19.300781 L 19.5 20.699219 L 21 22.199219 C 20.6 22.699219 20.400781 23.3 20.300781 24 L 18 24 L 18 26 L 20.099609 26 C 20.199609 26.6 20.500781 27.200781 20.800781 27.800781 L 19.300781 29.300781 L 20.699219 30.699219 L 22.199219 29.199219 C 22.699219 29.499219 23.300391 29.800391 23.900391 29.900391 L 23.900391 32 L 25.900391 32 L 25.900391 29.900391 C 26.500391 29.800391 27.099609 29.499219 27.599609 29.199219 L 29.099609 30.699219 L 30.5 29.300781 L 29 27.800781 C 29.4 27.300781 29.599219 26.7 29.699219 26 L 32 26 L 32 24 L 29.900391 24 C 29.800391 23.4 29.499219 22.799219 29.199219 22.199219 L 30.699219 20.699219 L 29.300781 19.300781 L 27.800781 20.800781 C 27.300781 20.500781 26.699609 20.199609 26.099609 20.099609 L 26.099609 18 L 24.099609 18 z M 25 22 C 26.7 22 28 23.3 28 25 C 28 26.7 26.7 28 25 28 C 23.3 28 22 26.7 22 25 C 22 23.3 23.3 22 25 22 z M 25 24 C 24.875 24 24.75 24.03125 24.632812 24.085938 C 24.515625 24.140625 24.40625 24.21875 24.3125 24.3125 C 24.21875 24.40625 24.140625 24.515625 24.085938 24.632812 C 24.03125 24.75 24 24.875 24 25 C 24 25.125 24.03125 25.25 24.085938 25.367188 C 24.140625 25.484375 24.21875 25.59375 24.3125 25.6875 C 24.40625 25.78125 24.515625 25.859375 24.632812 25.914062 C 24.75 25.96875 24.875 26 25 26 C 25.5 26 26 25.5 26 25 C 26 24.5 25.5 24 25 24 z"></path></svg>
                  </div>
                  <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-cyan-500  px-2 py-1 rounded-lg">Head to Head</div>
                  <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">Head-to-head sports betting offers another level of excitement as users place their bets on the game's verdict, keeping them excited till the end. </p>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                <div className="border-4 h-full text-center m-5 px-5 border-blue-500 flex flex-col bg-white py-20 items-center hover:shadow-xl hover:shadow-blue-700 relative before:absolute before:w-full before:h-1/2 before:bg-blue-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:h-1/2 after:bg-blue-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                  <div className="*:size-16 *:p-1 *:mt-2 text-blue-500">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M911.7 385.3l-.3-1.5c-.2-1-.3-1.9-.6-2.9-.2-.6-.4-1.1-.5-1.7-.3-.8-.5-1.7-.9-2.5-.2-.6-.5-1.1-.8-1.7-.4-.8-.8-1.5-1.2-2.3-.3-.5-.6-1.1-1-1.6-.8-1.2-1.7-2.4-2.6-3.6-.5-.6-1.1-1.3-1.7-1.9-.4-.5-.9-.9-1.4-1.3-.6-.6-1.3-1.1-1.9-1.6-.5-.4-1-.8-1.6-1.2-.2-.1-.4-.3-.6-.4L531.1 117.8a34.3 34.3 0 0 0-38.1 0L127.3 361.3c-.2.1-.4.3-.6.4-.5.4-1 .8-1.6 1.2-.7.5-1.3 1.1-1.9 1.6-.5.4-.9.9-1.4 1.3-.6.6-1.2 1.2-1.7 1.9-1 1.1-1.8 2.3-2.6 3.6-.3.5-.7 1-1 1.6-.4.7-.8 1.5-1.2 2.3-.3.5-.5 1.1-.8 1.7-.3.8-.6 1.7-.9 2.5-.2.6-.4 1.1-.5 1.7-.2.9-.4 1.9-.6 2.9l-.3 1.5c-.2 1.5-.3 3-.3 4.5v243.5c0 1.5.1 3 .3 4.5l.3 1.5.6 2.9c.2.6.3 1.1.5 1.7.3.9.6 1.7.9 2.5.2.6.5 1.1.8 1.7.4.8.7 1.5 1.2 2.3.3.5.6 1.1 1 1.6.5.7.9 1.4 1.5 2.1l1.2 1.5c.5.6 1.1 1.3 1.7 1.9.4.5.9.9 1.4 1.3.6.6 1.3 1.1 1.9 1.6.5.4 1 .8 1.6 1.2.2.1.4.3.6.4L493 905.7c5.6 3.8 12.3 5.8 19.1 5.8 6.6 0 13.3-1.9 19.1-5.8l365.6-243.5c.2-.1.4-.3.6-.4.5-.4 1-.8 1.6-1.2.7-.5 1.3-1.1 1.9-1.6.5-.4.9-.9 1.4-1.3.6-.6 1.2-1.2 1.7-1.9l1.2-1.5 1.5-2.1c.3-.5.7-1 1-1.6.4-.8.8-1.5 1.2-2.3.3-.5.5-1.1.8-1.7.3-.8.6-1.7.9-2.5.2-.5.4-1.1.5-1.7.3-.9.4-1.9.6-2.9l.3-1.5c.2-1.5.3-3 .3-4.5V389.8c-.3-1.5-.4-3-.6-4.5zM546.4 210.5l269.4 179.4-120.3 80.4-149-99.6V210.5zm-68.8 0v160.2l-149 99.6-120.3-80.4 269.3-179.4zM180.7 454.1l86 57.5-86 57.5v-115zm296.9 358.5L208.3 633.2l120.3-80.4 149 99.6v160.2zM512 592.8l-121.6-81.2L512 430.3l121.6 81.2L512 592.8zm34.4 219.8V652.4l149-99.6 120.3 80.4-269.3 179.4zM843.3 569l-86-57.5 86-57.5v115z"></path></svg>
                  </div>
                  <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-blue-500  px-2 py-1 rounded-lg">Totals</div>
                  <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">It tests the user's sports betting skills by allowing them to predict total points, scores, runs, or goals scored by both teams combined. </p>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                <div className="border-4 h-full text-center m-5 px-5 border-indigo-500 flex flex-col bg-white py-20 items-center hover:shadow-xl hover:shadow-indigo-700 relative before:absolute before:w-full before:h-1/2 before:bg-indigo-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:h-1/2 after:bg-indigo-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                  <div className="*:size-16 *:p-1 *:mt-2 text-indigo-500">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="4" r="2"></circle><path d="M16.98 14.804A1 1 0 0 0 16 14h-4.133l-.429-3H16V9h-4.847l-.163-1.142A1 1 0 0 0 10 7H9a1.003 1.003 0 0 0-.99 1.142l.877 6.142A2.009 2.009 0 0 0 10.867 16h4.313l.839 4.196c.094.467.504.804.981.804h3v-2h-2.181l-.839-4.196z"></path><path d="M12.51 17.5c-.739 1.476-2.25 2.5-4.01 2.5A4.505 4.505 0 0 1 4 15.5a4.503 4.503 0 0 1 2.817-4.167l-.289-2.025C3.905 10.145 2 12.604 2 15.5 2 19.084 4.916 22 8.5 22a6.497 6.497 0 0 0 5.545-3.126l-.274-1.374H12.51z"></path></svg>
                  </div>
                  <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-indigo-500  px-2 py-1 rounded-lg">Handicaps</div>
                  <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">It takes sports betting excitement to the next level and allows users to place bets when a strong favorite team plays a match with a weaker team. </p>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                <div className="border-4 h-full text-center m-5 px-5 border-violet-500 flex flex-col bg-white py-20 items-center hover:shadow-xl hover:shadow-violet-700 relative before:absolute before:w-full before:h-1/2 before:bg-violet-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:h-1/2 after:bg-violet-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                  <div className="*:size-16 *:p-1 *:mt-2 text-violet-500">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
                  </div>
                  <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-violet-500  px-2 py-1 rounded-lg">Each Way</div>
                  <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">Following Each Way of sports betting, users place two bets: Win Bet and Place Bet. It is popular for sports like horse racing, golf, etc. </p>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                <div className="border-4 h-full text-center m-5 px-5 border-purple-500 flex flex-col bg-white py-20 items-center hover:shadow-xl hover:shadow-purple-700 relative before:absolute before:w-full before:h-1/2 before:bg-purple-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:h-1/2 after:bg-purple-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                  <div className="*:size-16 *:p-1 *:mt-2 text-purple-500">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M40,35v5H8v-5H4v5c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4v-5H40z"></path><g fill="currentColor"><polygon points="24,23.4 17,15 31,15"></polygon><rect x="22" y="4" width="4" height="14"></rect><path d="M31.5,26.9L30.8,28l3.5,1.9l0.6-1.2c1.6-3,2.6-4.7,3.5-5.2C39.3,23,41,23,44,23v-4 C36.3,19,35.6,19.4,31.5,26.9z"></path><polygon points="38.4,31 29.4,35 28,25"></polygon><path d="M16.5,26.9l0.6,1.2L13.6,30L13,28.8c-1.6-3-2.6-4.7-3.5-5.2C8.7,23,7,23,4,23v-4 C11.7,19,12.4,19.4,16.5,26.9z"></path><polygon points="20,25 18.6,35 9.6,31"></polygon></g></svg>
                  </div>
                  <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-purple-500  px-2 py-1 rounded-lg">Multiples</div>
                  <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">When a sports betting app users place their single bet with multiple wages called Multiples, it tests their risk-taking capabilities.</p>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                <div className="border-4 h-full text-center m-5 px-5 border-fuchsia-500 flex flex-col bg-white py-20 items-center hover:shadow-xl hover:shadow-fuchsia-700 relative before:absolute before:w-full before:h-1/2 before:bg-fuchsia-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:h-1/2 after:bg-fuchsia-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                  <div className="*:size-16 *:p-1 *:mt-2 text-fuchsia-500">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 7l-18 0"></path><path d="M18 10l3 -3l-3 -3"></path><path d="M6 20l-3 -3l3 -3"></path><path d="M3 17l18 0"></path></svg>
                  </div>
                  <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-fuchsia-500  px-2 py-1 rounded-lg">Double</div>
                  <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">It excites the users, allowing them to combine two bets into a single one, and users select two outcomes. If both selections win together, the bet is successful. </p>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full sm:p-4 sm:px-4 py-4">
                <div className="border-4 h-full text-center m-5 px-5 border-pink-500 flex flex-col bg-white py-20 items-center hover:shadow-xl hover:shadow-pink-700 relative before:absolute before:w-full before:h-1/2 before:bg-pink-500 before:-top-5 before:left-0 before:-z-50  before:duration-300 before:hover:inset-0 after:absolute after:w-full after:h-1/2 after:bg-pink-500 after:-bottom-5 after:left-0 after:-z-50 after:duration-300 after:hover:bottom-0">
                  <div className="*:size-16 *:p-1 *:mt-2 text-pink-500">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M40,35v5H8v-5H4v5c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4v-5H40z"></path><g fill="currentColor"><polygon points="24,23.4 17,15 31,15"></polygon><rect x="22" y="4" width="4" height="14"></rect><path d="M31.5,26.9L30.8,28l3.5,1.9l0.6-1.2c1.6-3,2.6-4.7,3.5-5.2C39.3,23,41,23,44,23v-4 C36.3,19,35.6,19.4,31.5,26.9z"></path><polygon points="38.4,31 29.4,35 28,25"></polygon><path d="M16.5,26.9l0.6,1.2L13.6,30L13,28.8c-1.6-3-2.6-4.7-3.5-5.2C8.7,23,7,23,4,23v-4 C11.7,19,12.4,19.4,16.5,26.9z"></path><polygon points="20,25 18.6,35 9.6,31"></polygon></g></svg>
                  </div>
                  <div className="md:text-xl mt-2 mb-4 sm:text-lg text-base font-medium leading-6 text-pink-500  px-2 py-1 rounded-lg">Treble</div>
                  <p className="mt-2 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center line-clamp-4 text-ellipsis w-full">It is more advanced than Doubles and allows users to make three selections with a single bet. When all three selections win, a high profit is generated. </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <CaseStudy />

      <Cta2 />

      <div className="relative py-6 md:py-8 lg:py-16 bg-gray-100">
        <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-2 relative pb-5">
          <p className="text-gray-800 max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center">
            <span className="font-normal">Our Process for Developing </span>
            <span className="font-bold text-theme2"> Sports Betting Apps</span>
          </p>
          <div className="md:text-base text-sm text-black/70 mt-3 text-center">
            Twin Power Software is committed to delivering an immersive experience in sports betting solutions, and our success lies in our online sports betting mobile app development process.
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 z-10">
          <div className="relative lg:py-20 md:py-16 py-10">
            <div className="flex flex-wrap w-full justify-center mx-2 max-md:mx-0">
              <ul className="list-none w-full relative *:-mt-20 max-md:*:mt-0">
                <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                  <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                    <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                      1
                    </div>
                    <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                      <div className="text-slate-900 font-bold text-xl">Planning</div>
                      <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Get-together requirements
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Aim of your app
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          SRS and SDD
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Assigning Teams
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                  <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                    <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                      2
                    </div>
                    <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                      <div className="text-slate-900 font-bold text-xl">Design UI/UX</div>
                      <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Creating Wireframe &amp; Prototyping
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          User-interface designing
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Design Implementation
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          UI/UX assessment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                  <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                    <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                      3
                    </div>
                    <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                      <div className="text-slate-900 font-bold text-xl">Development</div>
                      <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Back-end development
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Front-end development
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          API &amp; Cloud Integration
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Reviewing codes
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                  <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                    <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                      4
                    </div>
                    <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                      <div className="text-slate-900 font-bold text-xl">Testing</div>
                      <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Unit-code testing
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Debugging
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          QA and testing
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Quality Assessment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                  <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                    <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                      5
                    </div>
                    <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                      <div className="text-slate-900 font-bold text-xl">Deployment</div>
                      <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Feedback and User acceptance testing
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          App Deployment
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          App store launch
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Delivering the project
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400">
                  <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                    <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                      6
                    </div>
                    <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10">
                      <div className="text-slate-900 font-bold text-xl">Maintenance</div>
                      <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Fixing errors and bugs
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Performance Optimization
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Security Updates
                        </a>
                        <a href="javascript:;" className="group/db">
                          <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                          Analysis and Reporting
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PortfolioSection />

      <div className="relative py-6 md:py-8 lg:py-16 bg-gray-100">
        <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-2 relative pb-5">
          <p className="text-gray-800 max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center">
            <span className="font-normal">White Label Sports Betting App:  </span>
            <span className="font-bold text-theme2"> Transforming Ideas into Exceptional Apps</span>
          </p>
          <div className="md:text-base text-sm text-black/70 mt-3 text-center">
            If you're looking to launch your sports betting app, our white-label sports betting app development is the perfect solution. With a single white-label app, you'll gain numerous advantages for your business. It serves various purposes, from cost-effectiveness and scalability to custom fantasy sports app development and the integration of unique features.
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 z-10">
          <div className="flex flex-row flex-wrap w-full relative z-40 items-center text-gray-800">
            <div className="lg:w-1/4 w-full p-3 sm:w-1/2">
              <div className="block h-full shadow-md relative bg-white group p-7 overflow-hidden rounded-lg rounded-br-none">
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-b-2 border-theme2 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-white border-2 border-slate-900 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="duration-700 relative">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-slate-900 size-10" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6"></path><path d="M11 4h2"></path><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path><path d="M19 18v.01"></path><path d="M12 17v.01"></path></svg>
                  </div>
                </div>
                <div className="text-lg my-3 relative z-50 text-slate-900 font-semibold">
                  App Localization
                </div>
                <div className="text-base relative z-50 text-black ">
                  Reach your target audience fast with white-label sports betting app development and offer them a great betting experience.
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full p-3 sm:w-1/2">
              <div className="block h-full shadow-md relative bg-white group p-7 overflow-hidden rounded-lg rounded-br-none">
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-b-2 border-theme2 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-white border-2 border-slate-900 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="duration-700 relative">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" className="text-slate-900 size-10" xmlns="http://www.w3.org/2000/svg"><path d="M 21 3.03125 L 20.34375 3.75 C 18.875 5.367188 17.664063 6.089844 16.65625 6.5625 C 15.648438 7.035156 14.800781 7.175781 13.96875 7.8125 C 13.082031 8.492188 11.792969 9.796875 11.25 12.125 C 10.085938 12.378906 9.234375 12.824219 8.5625 13.40625 C 7.898438 13.980469 7.398438 14.632813 6.78125 15.34375 C 6.777344 15.351563 6.785156 15.367188 6.78125 15.375 C 5.898438 16.390625 5.125 17.484375 3.625 18.0625 L 3 18.3125 L 3 29 L 22.0625 29 C 23.15625 28.941406 23.914063 28.183594 24.375 27.4375 C 24.835938 26.691406 25.089844 25.882813 25.21875 25.21875 C 25.550781 23.527344 26.15625 18.65625 26.15625 18.65625 L 26.1875 18.5625 L 26.1875 18.46875 C 26.15625 17.792969 25.878906 17.21875 25.53125 16.6875 L 26.65625 13.34375 L 28.4375 10.65625 L 28.9375 9.9375 L 28.28125 9.34375 L 21.71875 3.65625 Z M 21.0625 5.78125 L 26.28125 10.3125 L 24.90625 12.34375 L 24.8125 12.4375 L 24.78125 12.59375 L 23.875 15.28125 C 23.402344 15.085938 22.914063 14.949219 22.375 14.96875 L 22.3125 14.96875 L 16 15 L 15 15 L 15 18.875 C 14.859375 19.964844 14.253906 20.386719 13.5 20.6875 C 13.25 20.789063 13.21875 20.734375 13 20.78125 L 13 14.96875 C 12.835938 11.261719 14.15625 10.195313 15.1875 9.40625 C 15.472656 9.1875 16.308594 8.933594 17.5 8.375 C 18.496094 7.90625 19.734375 7.066406 21.0625 5.78125 Z M 11.0625 14.375 C 11.058594 14.601563 10.988281 14.761719 11 15 C 11 15.011719 11 15.019531 11 15.03125 L 11 23 L 12 23 C 12 23 13.070313 22.988281 14.21875 22.53125 C 15.367188 22.074219 16.753906 21.003906 17 19.125 L 17 17 L 22.375 16.96875 L 22.40625 16.96875 C 23.328125 16.917969 24.09375 17.617188 24.15625 18.53125 C 24.152344 18.546875 24.105469 18.917969 24.09375 19 L 20 19 L 20 21 L 23.84375 21 C 23.738281 21.773438 23.640625 22.257813 23.53125 23 L 20 23 L 20 25 L 23.21875 25 C 23.113281 25.445313 22.902344 25.976563 22.65625 26.375 C 22.382813 26.820313 22.148438 26.988281 21.9375 27 L 5 27 L 5 19.53125 C 6.621094 18.671875 7.628906 17.433594 8.28125 16.6875 C 8.957031 15.914063 9.421875 15.328125 9.875 14.9375 C 10.171875 14.683594 10.636719 14.539063 11.0625 14.375 Z"></path></svg>
                  </div>
                </div>
                <div className="text-lg my-3 relative z-50 text-slate-900 font-semibold">
                  Cost-effectiveness
                </div>
                <div className="text-base relative z-50  text-black ">
                  If you are a startup looking to launch your sports betting app, then developing the white-label app is the right way.
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full p-3 sm:w-1/2">
              <div className="block h-full shadow-md relative bg-white group p-7 overflow-hidden rounded-lg rounded-br-none">
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-b-2 border-theme2 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-white border-2 border-slate-900 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="duration-700 relative">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-slate-900 size-10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 14H15v-1H2V0H1v13.5l.5.5zM3 11.5v-8l.5-.5h2l.5.5v8l-.5.5h-2l-.5-.5zm2-.5V4H4v7h1zm6-9.5v10l.5.5h2l.5-.5v-10l-.5-.5h-2l-.5.5zm2 .5v9h-1V2h1zm-6 9.5v-6l.5-.5h2l.5.5v6l-.5.5h-2l-.5-.5zm2-.5V6H8v5h1z"></path></svg>
                  </div>
                </div>
                <div className="text-lg my-3 relative z-50 text-slate-900 font-semibold">
                  Quick to The Market
                </div>
                <div className="text-base relative z-50 text-black ">
                  Leverage our sports betting app development expertise to launch your sports betting platform quickly to the market.
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full p-3 sm:w-1/2">
              <div className="block h-full shadow-md relative bg-white group p-7 overflow-hidden rounded-lg rounded-br-none">
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-b-2 border-theme2 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-white border-2 border-slate-900 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="duration-700 relative">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-slate-900 size-10" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12.501 20.93c-.866 .25 -1.914 -.166 -2.176 -1.247a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.074 .26 1.49 1.296 1.252 2.158"></path><path d="M19 22v-6"></path><path d="M22 19l-3 -3l-3 3"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path></svg>
                  </div>
                </div>
                <div className="text-lg my-3 relative z-50 text-slate-900 font-semibold">
                  Wide-Range
                </div>
                <div className="text-base relative z-50 text-black ">
                  We deal in various sports betting solutions for all major sports like cricket, football, basketball, and others.
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full p-3 sm:w-1/2">
              <div className="block h-full shadow-md relative bg-white group p-7 overflow-hidden rounded-lg rounded-br-none">
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-b-2 border-theme2 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-white border-2 border-slate-900 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="duration-700 relative">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-slate-900 size-10" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z"></path><path d="M6 8.25h8v1.5H6zM16.5 9.75H18v-1.5h-1.5V7H15v4h1.5zM10 12.25h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z"></path></svg>
                  </div>
                </div>
                <div className="text-lg my-3 relative z-50 text-slate-900 font-semibold">
                  Captivating Features
                </div>
                <div className="text-base relative z-50  text-black ">
                  The features work like the soul of an app, and we can provide you with the most captivating features your users will like.
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full p-3 sm:w-1/2">
              <div className="block h-full shadow-md relative bg-white group p-7 overflow-hidden rounded-lg rounded-br-none">
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-b-2 border-theme2 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-white border-2 border-slate-900 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="duration-700 relative">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-slate-900 size-10" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m17 4 4 4-4 4V9h-4V7h4V4zm-7 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm1 10h4v-2H7v-3l-4 4 4 4v-3zm7 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"></path></svg>
                  </div>
                </div>
                <div className="text-lg my-3 relative z-50  text-slate-900 font-semibold">
                  Immersive Interface
                </div>
                <div className="text-base relative z-50  text-black ">
                  We develop an immersive interface that engages and entertains users most. It creates the ultimate fun for sports betting
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full p-3 sm:w-1/2">
              <div className="block h-full shadow-md relative bg-white group p-7 overflow-hidden rounded-lg rounded-br-none">
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-b-2 border-theme2 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-white border-2 border-slate-900 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="duration-700 relative">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-slate-900 size-10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.773 3.485l-.78-.184-2.108 2.096-1.194-1.216 2.056-2.157-.18-.792a4.42 4.42 0 0 0-1.347-.228 3.64 3.64 0 0 0-1.457.28 3.824 3.824 0 0 0-1.186.84 3.736 3.736 0 0 0-.875 1.265 3.938 3.938 0 0 0 0 2.966 335.341 335.341 0 0 0-6.173 6.234c-.21.275-.31.618-.284.963a1.403 1.403 0 0 0 .464.967c.124.135.272.247.437.328.17.075.353.118.538.127.316-.006.619-.126.854-.337 1.548-1.457 4.514-4.45 6.199-6.204.457.194.948.294 1.444.293a3.736 3.736 0 0 0 2.677-1.133 3.885 3.885 0 0 0 1.111-2.73 4.211 4.211 0 0 0-.196-1.378zM2.933 13.928a.31.31 0 0 1-.135.07.437.437 0 0 1-.149 0 .346.346 0 0 1-.144-.057.336.336 0 0 1-.114-.11c-.14-.143-.271-.415-.14-.568 1.37-1.457 4.191-4.305 5.955-6.046.1.132.21.258.328.376.118.123.245.237.38.341-1.706 1.75-4.488 4.564-5.98 5.994zm11.118-9.065c.002.765-.296 1.5-.832 2.048a2.861 2.861 0 0 1-4.007 0 2.992 2.992 0 0 1-.635-3.137A2.748 2.748 0 0 1 10.14 2.18a2.76 2.76 0 0 1 1.072-.214h.254L9.649 3.839v.696l1.895 1.886h.66l1.847-1.816v.258zM3.24 6.688h1.531l.705.717.678-.674-.665-.678V6.01l.057-1.649-.22-.437-2.86-1.882-.591.066-.831.849-.066.599 1.838 2.918.424.215zm-.945-3.632L4.609 4.58 4.57 5.703H3.494L2.002 3.341l.293-.285zm7.105 6.96l.674-.673 3.106 3.185a1.479 1.479 0 0 1 0 2.039 1.404 1.404 0 0 1-1.549.315 1.31 1.31 0 0 1-.437-.315l-3.142-3.203.679-.678 3.132 3.194a.402.402 0 0 0 .153.105.477.477 0 0 0 .359 0 .403.403 0 0 0 .153-.105.436.436 0 0 0 .1-.153.525.525 0 0 0 .036-.184.547.547 0 0 0-.035-.184.436.436 0 0 0-.1-.153L9.4 10.016z"></path></svg>
                  </div>
                </div>
                <div className="text-lg my-3 relative z-50  text-slate-900 font-semibold">
                  Risk Management Tools
                </div>
                <div className="text-base relative z-50  text-black ">
                  We provide secure solutions, including risk management tools that help prevent fraud and mitigate financial risks.
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full p-3 sm:w-1/2">
              <div className="block h-full shadow-md relative bg-white group p-7 overflow-hidden rounded-lg rounded-br-none">
                <span className="absolute border-t-2 border-theme1 top-0 right-0 h-0 w-[30px]  group-hover:w-full duration-300 "></span>
                <span className="absolute border-b-2 border-theme2 bottom-0 left-0  h-full w-[30px] group-hover:w-full duration-300 "></span>
                <div className="bg-white border-2 border-slate-900 relative z-50 w-[60px] h-[60px] rounded-4xl overflow-hidden group-hover:rotate-0 group-hover:rounded-xl duration-700 flex justify-center items-center shadow-xl">
                  <div className="duration-700 relative">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-slate-900 size-10" xmlns="http://www.w3.org/2000/svg"><path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path></svg>
                  </div>
                </div>
                <div className="text-lg my-3 relative z-50  text-slate-900 font-semibold">
                  Post-Launch Support
                </div>
                <div className="text-base relative z-50  text-black ">
                  We don’t just deliver sports betting app development solutions; we’ll stay with you even after its launch. You can connect with us anytime.
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
                <p className="mt-1 text-gray-300">Answers to the most frequently asked questions.</p>
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

export default sportsbettingappdevelopment