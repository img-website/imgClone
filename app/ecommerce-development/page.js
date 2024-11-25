"use client"
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React, { useState } from 'react'
import Image from 'next/image'
import Cta from '@/components/cta/Cta'
import Cta2 from '@/components/cta2/Cta2'
import PortfolioSection from '@/components/portfolio/portfolio'
import Accordion from '@/components/accordion/Accordion';
import Blog from '@/components/blog/Blog'
import Form from '@/components/contactForm/Form'


function ecommerceDevelopment() {
  const tabs = [
    {
      id: 'inc',
      title: 'Dedicated Development Team',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?fit=crop&w=378&h=378&q=50',
      content: 'Our ecommerce app development services feature a team of skilled professionals dedicated to delivering tailored solutions. We ensure timely delivery and create seamless user experiences. With expertise in a variety of technologies, our team transforms your vision into a robust, high-performing ecommerce platform.',
    },
    {
      id: 'inn',
      title: 'Customized and Scalable Solutions',
      image: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?fit=crop&w=378&h=378&q=50',
      content: 'Our ecommerce app development services feature a team of skilled professionals dedicated to delivering tailored solutions. We ensure timely delivery and create seamless user experiences. With expertise in a variety of technologies, our team transforms your vision into a robust, high-performing ecommerce platform.',
    },
    {
      id: 'exp',
      title: 'Innovative Design and User Experience (UX)',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=378&h=378&q=50',
      content: 'Our ecommerce app development services focus on innovative design and exceptional user experience (UX). We recognize that an attractive and user-friendly design is essential for capturing the attention of potential customers and keeping them engaged. Connect with us today!',
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const accordionItems = [
    {
      title: 'Which Is The Best Ecommerce App Development Company?',
      content: "It's challenging to definitively state the best ecommerce app development company as it depends on specific requirements, budget constraints, and project complexity. However, Twin Power is presenting itself as a top-tier option, and you may want to consider expertise and discuss your business needs with the professionals. It's advisable to research and compare multiple companies, considering factors such as portfolio, client reviews, and the technologies used by the ecommerce developers."
    },
    {
      title: "How Much Does Ecommerce App Development Services Cost?",
      content: 'The average cost to develop an ecommerce app might range between $8,000 to $25,000. Still, the exact cost of ecommerce app development services varies widely based on factors like features, complexity, platform, and more.'
    },
    {
      title: 'How Long Does It Take To Develop An Ecommerce App?',
      content: 'The time it takes to develop an ecommerce app depends on its complexity, features, design, and testing requirements. Generally, it can take anywhere from a few weeks to several months. A simple app may be developed more quickly, while a complex app with advanced features will take longer.'
    },
    {
      title: 'How Do I Hire Dedicated Ecommerce App Developers Within My Budget?',
      content: 'To hire dedicated ecommerce app developers within your budget, consider outsourcing to a leading ecommerce application development company, define a clear scope of work, and prioritize essential features to streamline the development process and mobile app development costs.'
    },
  ];

  return (
    <>
      <Header />
      {/* hero */}
      <div className="relative">
        <div className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-tr  after:via-theme2/80 after:to-theme1/70 after:from-theme1/70 after:backdrop-blur-sm">
          <Image src="/img/ecommerce-hero.webp" width={'1000'} height={'1000'} alt="" className='h-full w-full object-cover overflow-hidden object-top' />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
          <div className="w-full">
            <div className="max-w-5xl grow-0 text-center mx-auto text-balance">
              <div className="font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-6xl/tight tracking-[-0.04em]">
                <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                  Grow Your Business with Our Next-Generation Ecommerce App Development Services
                </span>
              </div>
              <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
                Looking to build a strong brand presence for your small store? Turn to Twin Power Software's ecommerce app development solutions. Our expert team creates a user-friendly interface, secure payment gateways, and responsive design to ensure your business flourishes in the digital marketplace.
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

      {/* tabs section start */}
      <div className="relative bg-slate-50 py-6 md:py-8 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <p className="
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                ">
            <span className="font-normal">What Sets Our Ecommerce

            </span> <span className="font-bold text-theme2"> Development Services Apart?</span>

          </p>
          <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
            Experience a perfect combination of innovation and expertise with our ecommerce app development services. At Twin Power Software, our dedicated developers specialize in creating user-centric and feature-rich online ecommerce platforms. We prioritize cutting-edge technologies to ensure optimal performance and an engaging user experience. With our commitment to quality and client satisfaction, our ecommerce app development services stand out, delivering results that drive growth.
          </p>

          <div className="mt-8">
            <div className="flex gap-4 items-center overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 rounded text-nowrap ${activeTab === tab.id ? 'bg-slate-900 text-white' : 'bg-slate-200 text-black'}`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-col lg:flex-row">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex flex-wrap gap-y-5 items-center ${activeTab === tab.id ? 'block' : 'hidden'}`}
                >
                  <div className='w-full sm:w-2/5'>
                    <Image height={1000} width={1000} quality={90} loading='lazy' className="object-cover w-full aspect-[2/1.5] rounded-xl shadow-lg" src={tab.image} alt={tab.title} />

                  </div>
                  <div className="sm:pl-10 w-full sm:w-3/5">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-black">{tab.title}</h2>
                    <p className="md:mt-6 mt-3 text-sm md:text-base md:leading-8 text-slate-600">{tab.content}</p>
                    <a href="Javascript:;" className="mt-4 inline-flex rounded-lg bg-slate-900 text-white py-2 px-4 hover:bg-slate-700">
                      Book A Consultation →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* tabs section ends */}

      <Cta />

      {/* success start */}
      <div className="relative overflow-hidden bg-white py-6 md:py-8 lg:py-16">
        <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
          <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                first:*:font-normal

                last:*:font-bold last:*:text-theme2
            "><span>The Platforms We Use To Fuel </span>
            <span> Your E-Commerce Success </span></p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-gray-800 grid md:grid-cols-4 sm:grid-cols-2 overflow-x-auto items-stretch gap-4 pb-8 -mb-8 pt-5">
          <div className="grow p-4 rounded-xl *:w-full *:text-center shadow-xl shadow-black/20 relative border-2 hover:border-purple-950 before:absolute before:inset-x-0 before:-bottom-2 before:bg-gradient-to-b before:from-theme1 before:to-theme1/90 before:border-b-2 before:border-x-2 hover:before:border-gray-950 before:rounded-b-md before:h-2 before:w-1/2  before:mx-auto md:hover:grayscale duration-200">
            <div className="bg-theme1 mx-auto rounded-lg aspect-[1/1] p-2 !w-max flex items-center justify-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="size-10 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M445.7 127.9V384l-63.4 36.5V164.7L223.8 73.1 65.2 164.7l.4 255.9L2.3 384V128.1L224.2 0l221.5 127.9zM255.6 420.5L224 438.9l-31.8-18.2v-256l-63.3 36.6.1 255.9 94.9 54.9 95.1-54.9v-256l-63.4-36.6v255.9z"></path></svg>
            </div>
            <div className="flex flex-col gap-3 py-5">
              <div className="md:text-xl text-lg font-bold text-gray-800">Magento</div>
              <div className="md:text-sm text-xs text-gray-600">Magento leverages open-source technology to power its eCommerce platform.</div>
            </div>
          </div>
          <div className="grow p-4 rounded-xl *:w-full *:text-center shadow-xl shadow-black/20 relative border-2 hover:border-purple-950 before:absolute before:inset-x-0 before:-bottom-2 before:bg-gradient-to-b before:from-theme1 before:to-theme1/90 before:border-b-2 before:border-x-2 hover:before:border-gray-950 before:rounded-b-md before:h-2 before:w-1/2  before:mx-auto md:hover:grayscale duration-200">
            <div className="bg-theme1 mx-auto rounded-lg aspect-[1/1] p-2 !w-max flex items-center justify-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="size-10 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M2.227 4.857A2.228 2.228 0 000 7.094v7.457c0 1.236 1.001 2.237 2.237 2.237h9.253l4.229 2.355-.962-2.355h7.006c1.236 0 2.237-1 2.237-2.237V7.094c0-1.236-1-2.237-2.237-2.237zm8.08 1.311c.194.002.372.071.535.2a.769.769 0 01.304.56.851.851 0 01-.098.47c-.382.707-.696 1.894-.951 3.542-.246 1.6-.334 2.846-.275 3.739.02.245-.02.46-.118.647a.632.632 0 01-.52.353c-.255.02-.52-.098-.775-.362-.913-.933-1.639-2.326-2.169-4.18a184.085 184.085 0 00-1.413 2.825c-.578 1.11-1.069 1.678-1.481 1.708-.265.02-.49-.206-.687-.677-.5-1.286-1.04-3.768-1.619-7.448-.03-.255.02-.48.157-.657.137-.186.344-.284.618-.304.5-.04.785.196.854.706.304 2.051.638 3.788.991 5.21L5.809 8.41c.196-.373.441-.57.736-.589.431-.03.696.245.804.824.246 1.305.56 2.414.932 3.356.255-2.492.687-4.288 1.295-5.397.148-.274.363-.412.648-.431a.866.866 0 01.084-.004zm3.734 1.063c.167 0 .343.02.53.06.687.146 1.216.52 1.57 1.137.314.53.47 1.168.47 1.933 0 1.011-.254 1.933-.765 2.777-.588.981-1.354 1.472-2.305 1.472-.167 0-.344-.02-.53-.059-.697-.147-1.217-.52-1.57-1.138-.314-.54-.471-1.187-.471-1.943 0-1.01.255-1.933.765-2.767.599-.981 1.364-1.472 2.306-1.472zm6.152 0c.167 0 .343.02.53.06.696.146 1.216.52 1.57 1.137.314.53.47 1.168.47 1.933 0 1.011-.254 1.933-.765 2.777-.588.981-1.354 1.472-2.305 1.472-.167 0-.344-.02-.53-.059-.697-.147-1.217-.52-1.57-1.138-.314-.54-.471-1.187-.471-1.943 0-1.01.255-1.933.765-2.767.599-.981 1.364-1.472 2.306-1.472zm-6.107 1.645c-.307-.002-.606.201-.889.622a3.173 3.173 0 00-.52 1.168c-.05.225-.069.47-.069.716 0 .284.06.589.177.893.147.382.343.589.579.638.245.049.51-.06.795-.315.363-.323.608-.804.745-1.452.05-.225.069-.47.069-.726a2.49 2.49 0 00-.176-.893c-.148-.382-.344-.588-.58-.637a.714.714 0 00-.131-.014zm6.152 0c-.307-.002-.606.201-.889.622a3.173 3.173 0 00-.52 1.168c-.049.225-.069.47-.069.716 0 .284.06.589.177.893.147.382.344.589.579.638.245.049.51-.06.795-.315.363-.323.608-.804.745-1.452.04-.225.07-.47.07-.726a2.49 2.49 0 00-.177-.893c-.148-.382-.344-.588-.58-.637a.714.714 0 00-.131-.014Z"></path></svg>
            </div>
            <div className="flex flex-col gap-3 py-5">
              <div className="md:text-xl text-lg font-bold text-gray-800">Woo Commerce</div>
              <div className="md:text-sm text-xs text-gray-600">Transform your standard App into a dynamic eCommerce site using WooCommerce.</div>
            </div>
          </div>
          <div className="grow p-4 rounded-xl *:w-full *:text-center shadow-xl shadow-black/20 relative border-2 hover:border-purple-950 before:absolute before:inset-x-0 before:-bottom-2 before:bg-gradient-to-b before:from-theme1 before:to-theme1/90 before:border-b-2 before:border-x-2 hover:before:border-gray-950 before:rounded-b-md before:h-2 before:w-1/2  before:mx-auto md:hover:grayscale duration-200">
            <div className="bg-theme1 mx-auto rounded-lg aspect-[1/1] p-2 !w-max flex items-center justify-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="size-10 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"></path></svg>
            </div>
            <div className="flex flex-col gap-3 py-5">
              <div className="md:text-xl text-lg font-bold text-gray-800">Shopify</div>
              <div className="md:text-sm text-xs text-gray-600">For larger businesses, Shopify stands out as one of the premier eCommerce platforms.</div>
            </div>
          </div>
          <div className="grow p-4 rounded-xl *:w-full *:text-center shadow-xl shadow-black/20 relative border-2 hover:border-purple-950 before:absolute before:inset-x-0 before:-bottom-2 before:bg-gradient-to-b before:from-theme1 before:to-theme1/90 before:border-b-2 before:border-x-2 hover:before:border-gray-950 before:rounded-b-md before:h-2 before:w-1/2  before:mx-auto md:hover:grayscale duration-200">
            <div className="bg-theme1 mx-auto rounded-lg aspect-[1/1] p-2 !w-max flex items-center justify-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="size-10 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M12.645 13.663h3.027c.861 0 1.406-.474 1.406-1.235 0-.717-.545-1.234-1.406-1.234h-3.027c-.1 0-.187.086-.187.172v2.125c.015.1.086.172.187.172zm0 4.896h3.128c.961 0 1.535-.488 1.535-1.35 0-.746-.545-1.35-1.535-1.35h-3.128c-.1 0-.187.087-.187.173v2.34c.015.115.086.187.187.187zM23.72.053l-8.953 8.93h1.464c2.281 0 3.63 1.435 3.63 3 0 1.235-.832 2.14-1.722 2.541-.143.058-.143.259.014.316 1.033.402 1.765 1.48 1.765 2.742 0 1.78-1.19 3.202-3.5 3.202h-6.342c-.1 0-.187-.086-.187-.172V13.85L.062 23.64c-.13.13-.043.359.143.359h23.631a.16.16 0 0 0 .158-.158V.182c.043-.158-.158-.244-.273-.13z"></path></svg>
            </div>
            <div className="flex flex-col gap-3 py-5">
              <div className="md:text-xl text-lg font-bold text-gray-800">Big Commerce</div>
              <div className="md:text-sm text-xs text-gray-600">Experience 100% customizable Big Commerce development delivered by our expert team.</div>
            </div>
          </div>
        </div>
      </div>
      {/* success Ends */}

      {/* range section start */}
      <div className="relative isolate py-6 md:py-8 lg:py-16 bg-white">
        <div className="overflow-hidden">
          <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
            <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                first:*:font-normal

                last:*:font-bold last:*:text-theme2
            "><span>Comprehensive Ecommerce </span>
              <span> Solutions We Offer</span></p>
          </div>
        </div>
        <div className="container pt-5 md:p-5 sm:p-8 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
          <ul className="
            flex flex-wrap md:pt-8 text-center md:text-left gap-y-2 sm:gap-y-6 justify-center items-stretch
        ">

            <div className="md:w-1/2 p-3 w-full h-auto lg:w-1/2">
              <div className="w-full h-full">
                <div className="bg-theme1 opacity-100 rounded-3xl relative overflow-hidden w-full h-full">
                  <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-theme1"></div>
                  <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-[#FF4694] to-[#776FFF] w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                  </div>
                  <div className="flex flex-col px-[20px] h-full relative z-50">
                    <div className="h-[100px]"></div>
                    <div className="flex items-center py-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className=" w-[40px] h-[40px] text-white" xmlns="http://www.w3.org/2000/svg"><path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"></path></svg>
                      <div className="text-xl font-semibold text-white ps-3">B2B Ecommerce Solutions</div>
                    </div>
                    <div className="text-base text-white">
                      B2B online ecommerce platforms are targeted at businesses buying and selling products.
                    </div>
                    <div className="pt-5 pb-7">
                      <a href="javascript:;" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-3 w-full h-auto lg:w-1/2">
              <div className="w-full h-full">
                <div className="bg-theme1 opacity-100 rounded-3xl relative overflow-hidden w-full h-full">
                  <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-theme1"></div>
                  <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-[#FF4694] to-[#776FFF] w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                  </div>
                  <div className="flex flex-col px-[20px] h-full relative z-50">
                    <div className="h-[100px]"></div>
                    <div className="flex items-center py-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className=" w-[40px] h-[40px] text-white" xmlns="http://www.w3.org/2000/svg"><path d="M86.76 255a9.89 9.89 0 0 0 4.87-1.29 9.82 9.82 0 0 0 3.65-13.43c-16.46-28.56-17.81-52.12-7.45-70 14.26-24.57 53.61-33.65 105.27-24.29a9.86 9.86 0 0 0 11.45-7.9 9.84 9.84 0 0 0-7.93-11.44c-29.19-5.28-56-5.18-77.39.3-22.3 5.71-39 17.28-48.45 33.48-14 24.19-12.7 54.73 7.42 89.62a9.85 9.85 0 0 0 8.56 4.95zm274.85-111.27c32.24.42 52.61 9.31 62.79 26.86 14.21 24.48 2.52 62.81-31.27 102.52a9.82 9.82 0 0 0 7.51 16.18 9.88 9.88 0 0 0 7.52-3.46c19.12-22.47 32.35-45.54 38.25-66.71 6.14-22 4.43-42.21-5-58.38-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83 9.83 0 0 0-.12 19.66zm-35.14 271.16a9.88 9.88 0 0 0-13.5 3.35c-16.41 27.15-36.57 42.1-56.77 42.1-28.49 0-56-29.31-73.73-78.42a9.87 9.87 0 0 0-12.59-5.92 9.83 9.83 0 0 0-6 12.58c10 27.77 23.47 50.75 39 66.46 16.11 16.34 34.55 25 53.32 25 27.38 0 53.54-18.33 73.65-51.61a9.81 9.81 0 0 0-3.38-13.5zm105.23-76.35a32.14 32.14 0 0 0-29.9 44.33c-41.8 19.5-119.8 4.79-191.87-36.62-32.91-18.9-62.16-41.86-84.6-66.39a9.9 9.9 0 0 0-13.91-.65 9.8 9.8 0 0 0-.65 13.9c23.79 26 54.68 50.28 89.33 70.18 40.28 23.13 82.27 38.63 121.43 44.81a225.54 225.54 0 0 0 35 2.91c23.12 0 43-4.3 58.51-12.79a32.2 32.2 0 1 0 16.7-59.68zm0 44.66a12.6 12.6 0 0 1-7.82-2.72 10 10 0 0 0-2.2-2.21 12.61 12.61 0 1 1 10 4.93z"></path><path d="M82.09 338.59c.57-21.26 12.41-47 33.68-73.16 23.19-28.45 56.69-56 94.34-77.65 33.25-19.1 65.2-31.9 98.07-38.91a9.83 9.83 0 1 0-4.12-19.22c-34.85 7.43-68.78 21-103.79 41.09C116.09 219.09 59.9 289.88 62.46 343.9a32.32 32.32 0 1 0 19.63-5.31zM80.3 383.2a12.5 12.5 0 1 1 12.59-12.5 12.56 12.56 0 0 1-12.59 12.5z"></path><path d="M256.2 96.32a32.23 32.23 0 0 0 26.53-13.81c17.89 11.69 34 35 45.81 66.12 13 34.39 19.84 75.38 19.84 118.54 0 37.18-5.19 72.35-15 103.6a9.72 9.72 0 0 0 .66 7.49 9.82 9.82 0 0 0 5.8 4.84 9.89 9.89 0 0 0 12.34-6.44c10.42-33.14 15.93-70.34 15.93-109.49 0-47.17-7.77-91.77-22.47-129-14.41-36.48-34.13-62.4-57.14-75.16a32.3 32.3 0 1 0-32.3 33.31zm0-44.66a12.5 12.5 0 1 1-12.59 12.5 12.56 12.56 0 0 1 12.59-12.5zm-5.2 191.7a24.35 24.35 0 0 0 5.16 48.16 24.68 24.68 0 0 0 5.16-.55A24.36 24.36 0 1 0 251 243.36z"></path></svg>
                      <div className="text-xl font-semibold text-white ps-3">B2C Ecommerce Solutions</div>
                    </div>
                    <div className="text-base text-white">
                      B2C ecommerce platforms are specifically designed for businesses selling products or services directly to consumers.
                    </div>
                    <div className="pt-5 pb-7">
                      <a href="javascript:;" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-3 w-full h-auto lg:w-1/2">
              <div className="w-full h-full">
                <div className="bg-theme1 opacity-100 rounded-3xl relative overflow-hidden w-full h-full">
                  <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-theme1"></div>
                  <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-[#FF4694] to-[#776FFF] w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                  </div>
                  <div className="flex flex-col px-[20px] h-full relative z-50">
                    <div className="h-[100px]"></div>
                    <div className="flex items-center py-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className=" w-[40px] h-[40px] text-white" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"></path></svg>
                      <div className="text-xl font-semibold text-white ps-3">D2C Ecommerce Solutions </div>
                    </div>
                    <div className="text-base text-white">
                      A Direct-to-Consumer (D2C) Ecommerce app connects brands directly with customers. It offers a streamlined shopping experience by eliminating intermediaries.
                    </div>
                    <div className="pt-5 pb-7">
                      <a href="javascript:;" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-3 w-full h-auto lg:w-1/2">
              <div className="w-full h-full">
                <div className="bg-theme1 opacity-100 rounded-3xl relative overflow-hidden w-full h-full">
                  <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-theme1"></div>
                  <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-[#FF4694] to-[#776FFF] w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                  </div>
                  <div className="flex flex-col px-[20px] h-full relative z-50">
                    <div className="h-[100px]"></div>
                    <div className="flex items-center py-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className=" w-[40px] h-[40px] text-white" xmlns="http://www.w3.org/2000/svg"><path d="M20.738 14.341c-.419.265-.912.298-1.286.087-.476-.27-.738-.898-.738-1.774v-2.618c0-1.264-.5-2.164-1.336-2.407-1.416-.413-2.482 1.32-2.882 1.972l-2.498 4.05v-4.95c-.028-1.14-.398-1.821-1.1-2.027-.466-.135-1.161-.081-1.837.953l-5.597 8.987A9.875 9.875 0 0 1 2.326 12c0-5.414 4.339-9.818 9.672-9.818 5.332 0 9.67 4.404 9.67 9.818.004.018.002.034.003.053.05 1.049-.29 1.883-.933 2.29zm3.08-2.34-.001-.055C23.787 5.353 18.497 0 11.997 0 5.48 0 .177 5.383.177 12c0 6.616 5.303 12 11.82 12 2.991 0 5.846-1.137 8.037-3.2.435-.41.46-1.1.057-1.541a1.064 1.064 0 0 0-1.519-.059 9.56 9.56 0 0 1-6.574 2.618c-2.856 0-5.425-1.263-7.197-3.268l5.048-8.105v3.737c0 1.794.696 2.374 1.28 2.544.584.17 1.476.054 2.413-1.468.998-1.614 2.025-3.297 3.023-4.88v2.276c0 1.678.672 3.02 1.843 3.68 1.056.597 2.384.543 3.465-.14 1.312-.828 2.018-2.354 1.944-4.193z"></path></svg>
                      <div className="text-xl font-semibold text-white ps-3">Ecommerce Marketplace Solutions </div>
                    </div>
                    <div className="text-base text-white">
                      A Marketplace Ecommerce app serves as a digital platform where multiple sellers can showcase and sell their products. It offers a diverse range of choices.
                    </div>
                    <div className="pt-5 pb-7">
                      <a href="javascript:;" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      {/* range section Ends */}

     

      {/* soluction section start */}
      <div className="relative isolate bg-white py-6 md:py-8 lg:py-16 max-sm:overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-container gap-3 px-4 sm:px-6 md:flex lg:px-8 md:flex-col text-center">
            <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-gray-800 text-balance">
              <span className="font-normal">How Ecommerce App Development Solutions Function</span>
              <span className="font-bold text-theme2">Development Solutions Function? </span>
            </p>
            <div className="md:text-base text-sm text-gray-800 mt-3 mb-2 text-balance">
              Are you considering developing an ecommerce app and want to understand how it works? Here’s a breakdown of the process that highlights how an ecommerce app functions.
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:gap-5 gap-2 relative z-[1] mix-blend-darken">
            <Image className="size-full aspect-[1280/720] object-contain" width="1280" height="720" src="/img/demo.png" sizes="100vw" alt="How Ecommerce App Development Solutions Work?" />
          </div>
        </div>
      </div>
      {/* soluction section Ends */}

      <Cta2 />

      {/* specilised section start */}
      <div className="relative isolate bg-gray-100 py-6 md:py-8 lg:py-16 max-sm:overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl pointer-events-none" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-indigo-200 to-pink-200 opacity-20"></div>
          </div>
          <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu pointer-events-none" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-indigo-200 to-pink-200 opacity-20"></div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-container gap-3 px-4 sm:px-6 md:flex lg:px-8 md:flex-col text-center">
            <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-gray-800 text-balance">
              <span className="font-normal">Specialized Ecommerce Development </span>
              <span className="font-bold text-theme2"> Solutions to Optimize Business Processes </span>
            </p>
            <div className="md:text-base text-sm text-gray-800 mt-3 mb-2 text-balance">
              At Twin Power Software, we develop ecommerce platforms that can significantly enhance your business growth while automating all your processes.
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:gap-5 gap-2 relative z-[1] mix-blend-darken">
            <Image className="size-full aspect-[1281/476] hidden md:block object-contain" width="1281" height="476" src="/img/ecommerce-development-01.jpg" sizes="100vw" alt="Exclusive Ecommerce Development Solutions to Streamline Business Process" />
            <Image className="size-full  max-md:block hidden object-contain" width="544" height="1011" src="/img/ecommerce-development-01.jpg" sizes="100vw" alt="Exclusive Ecommerce Development Solutions to Streamline Business Process" />
          </div>
        </div>
      </div>
      {/* specilised section Ends */}

      {/* readyMade section start */}
      <section className="bg-gray-100">

        <div className="relative isolate py-6 md:py-8 lg:py-16">
          <div className="overflow-hidden">
            <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
              <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center text-balance

                first:*:font-normal

                last:*:font-bold last:*:text-theme2
            ">
                <span>Why Opt for Custom Ecommerce App Development </span>
                <span> Instead of Off-the-Shelf Solutions?</span>

              </p>
              <div className="md:text-base text-sm text-black/70 mt-3">

              </div>
            </div>
          </div>
          <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="
            flex flex-col overflow-x-auto md:pt-8

            [&_table]:table-auto [&_table]:border-separate [&_table]:border-spacing-4

            [&_thead]:md:text-sm [&_thead]:text-xs [&_thead]:uppercase

            [&_thead>tr>th]:text-gray-700 [&_thead>tr>th]:md:px-5 [&_thead>tr>th]:px-3 [&_thead>tr>th]:md:font-bold [&_thead>tr>th]:font-normal [&_thead>tr>th]:text-left first:[&_thead>tr>th]:rounded-l-xl last:[&_thead>tr>th]:rounded-r-xl [&_thead>tr>th]:text-nowrap

            [&_tbody]:md:text-base [&_tbody]:text-sm

            [&_tbody>tr>td]:bg-gray-100 [&_tbody>tr>td]:cursor-default [&_tbody>tr>td]:border-2 [&_tbody>tr>td]:border-black/5 [&_tbody>tr>td]:text-black [&_tbody>tr>td]:md:p-5 [&_tbody>tr>td]:p-3 [&_tbody>tr>td]:text-left [&_tbody>tr>td]:rounded-xl
            ">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Custom Solution</th>
                    <th scope="col">Ready-Made Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customization</td>
                    <td>Highly customizable to meet specific business needs and requirements.</td>
                    <td>Limited customization options, often adhering to pre-defined features and designs.</td>
                  </tr>
                  <tr>
                    <td>Scalability</td>
                    <td>Easily scalable to accommodate future growth and changes in business requirements.</td>
                    <td>May have limitations on scalability and may require additional modules for expansion.</td>
                  </tr>
                  <tr>
                    <td>Unique Features</td>
                    <td>Can include unique features and functionalities tailored to the business model.</td>
                    <td>Limited to pre-built features; difficult to incorporate unique or specialized features.</td>
                  </tr>
                  <tr>
                    <td>Integration</td>
                    <td>Seamless integration with existing systems, APIs, and third-party services.</td>
                    <td>Limited integration options; may require additional development for specific integrations.</td>
                  </tr>
                  <tr>
                    <td>Control Over Updates</td>
                    <td>Complete control over updates and maintenance schedules.</td>
                    <td>Dependent on the vendor for updates, which may not align with specific business timelines.</td>
                  </tr>
                  <tr>
                    <td>Ownership and Control</td>
                    <td>Full ownership and control over the source code and intellectual property.</td>
                    <td>Limited ownership and control as the solution is provided by a third-party vendor.</td>
                  </tr>
                  <tr>
                    <td>Cost Structure</td>
                    <td>Upfront development costs but potential long-term cost savings due to tailored features.</td>
                    <td>Lower upfront costs but may have hidden fees or ongoing subscription costs.</td>
                  </tr>
                  <tr>
                    <td>Time-to-Market</td>
                    <td>Longer development time but faster deployment of features that align with business needs.</td>
                    <td>Quick deployment, but may require compromises on specific business requirements.</td>
                  </tr>
                  <tr>
                    <td>Support and Maintenance</td>
                    <td>Customized support and maintenance plans to address specific needs.</td>
                    <td>Generalized support with limited flexibility to address specific concerns.</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div></section>
      {/* readyMade section Ends */}

      <PortfolioSection />

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

      <Blog/>

      <Form/>



      <Footer />
    </>
  )
}

export default ecommerceDevelopment