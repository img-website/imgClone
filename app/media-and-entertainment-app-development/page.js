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


function mediaandentertainmentappdevelopment() {
  const accordionItems = [
      {
          title: 'What Lies Ahead for the Media and Entertainment Industry in App Development?',
          content: "The media and entertainment industry’s future in app development looks bright, fueled by advancing technologies and changing user expectations. Customized content, immersive experiences, and the incorporation of AR/VR will play key roles in transforming this ever-evolving sector."
      },
      {
          title: "What Is the Typical Timeline for Developing Media and Entertainment Solutions?",
          content: "The timeline for developing media and entertainment solutions depends on the complexity of the project, typically spanning several months. Basic apps might be completed in 3 to 6 months, whereas more advanced solutions could take a year or longer."
      },
      {
          title: 'What is the estimated cost of creating a media and entertainment app?',
          content: 'The price of building a media and entertainment app can vary greatly, typically ranging between $15,000 and $30,000. The final cost is influenced by factors like the app’s features, the platforms it will run on, and the overall complexity of the project. For a precise estimate, it’s crucial to outline the specific requirements of your app.'
      },
      {
          title: 'Is it advisable to invest in the development of a video streaming or OTT app?',
          content: "Deciding to invest in video streaming or OTT app development hinges on your intended audience and the type of content you plan to offer. OTT platforms generally provide greater control over content distribution but can come with higher costs. In contrast, video streaming may allow for a wider reach. It's important to assess your objectives and understand your audience's preferences before making a decision."
      },
      {
          title: 'What advantages come with outsourcing media and entertainment app development services?',
          content: 'Outsourcing media and entertainment app development offers several advantages, including reduced costs, access to specialized expertise, quicker time-to-market, and enhanced scalability. This approach enables you to concentrate on your core strengths while experts manage the app development process, resulting in a high-quality final product.'
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
                                src="/img/live-streaming-app-development-1100w.webp"
                                alt="image.
"
                            />

                            <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-between">
                                <div className="xl:w-7/12 lg:w-1/2 grow-0 max-lg:text-center">
                                    <div className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                        <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                                        Development of Media and Entertainment Apps
                                        </span>
                                    </div>
                                    <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 max-lg:mx-auto">
                                    Twin Power stands out as a premier media and entertainment app company, transforming the industry with its innovative technological solutions. Our exceptional media and entertainment app development services ensure an engaging and seamless user experience, ultimately propelling your business toward success.
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
            {/* hero */}
              {/* About Start */}
              <div className="relative bg-slate-50 py-6 md:py-8 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
                    <div className="absolute inset-0 size-full pointer-events-none overflow-hidden">
                        <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block pointer-events-none"></div>
                    </div>
                    <div
                        className="
                mx-auto max-w-container gap-7 flex max-lg:flex-col group-[]/flip:flex-row-reverse group-[]/flip:max-lg:flex-col max-lg:gap-4 

                [&>*:first-child]:[&:has(.content1-img)]:lg:block 
                [&:first-child]:hidden [&>*:last-child]:[&:has(.content1-img)]:max-w-3xl 
                [&>*:last-child]:[&:has(.content1-img)]:lg:w-3xl
            "
                    >
                        <div className="relative z-10 pointer-events-none h-auto lg:sticky lg:top-24 self-start mx-auto">
                            <div className="flex [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)]">
                                <div className="relative flex-shrink-0 p-4 w-full">
                                    <div className="relative z-10 overflow-hidden *:rounded-xl [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)] [&~*]:[&:has(.mask)]:lg:hidden">
                                        <Image
                                            className="object-cover w-full h-auto md:w-[336px] content1-img"
                                            width={"384"}
                                            height={"384"}
                                            src="/img/food-delivery-336w.webp"
                                            alt="image3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-20 mx-auto lg:mx-0 lg:pr-4 md:py-6 md:md:py-8 h-auto md:sticky md:top-24 self-start shrink-1 grow-0 basis-auto w-full">
                            <p
                                className="
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                "
                            >
                                <span className="font-normal">
                                On-Demand Entertainment  {" "}
                                </span>{" "}
                                <span className="font-bold text-theme2">
                                App Development Company 
                                </span>
                            </p>
                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                            Twin Power specializes in creating innovative applications that enhance user experiences. By leveraging digital technologies to boost audience engagement, streamline live broadcasting, manage online talent, and develop tailored advertising platforms, we are reshaping the media and entertainment landscape. Our comprehensive software and mobile app development services for the media and entertainment sector focus on performance enhancement through advanced analytics, exceptional user experiences, content creation, and seamless omnichannel distribution.
                            </p>
                            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                            So whether you belong to any of the media, publishing, entertainment studios, multiplexes, theaters, and more, Twin Power delivers edge-cutting media and entertainment app development services. We bring imaginative ideas to life by making it simple to access fascinating multimedia material. With a dedication to excellence, we enable companies to prosper in the dynamic media and entertainment industry.
                            </p>

                            <div className="mt-8 flex gap-4">
                                <button className="px-4 text-sm text-theme1 inline-flex items-center gap-2 font-semibold rounded-full py-3 border-theme1 overflow-hidden border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                    <span>View More</span>
                                    <span>
                                        <svg
                                            className="size-5"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="200px"
                                            width="200px"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
                </div>
            </div>
            {/* About Ends */}

            {/* Entertainment Clone Solutions--- */}

            <div className="relative bg-white py-6 md:py-8 lg:py-16 ">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">
      
        <div className="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">
            <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                <p className="
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                ">
                    <span>We Provide Media &amp;  </span> <span className="text-theme2" > Entertainment Clone Solutions</span>
                    
                </p>
                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 text-center text-balance"> 
                Hire Media and Entertainment developers from Twin Power to create popular apps like Netflix, Gaana, or Vimeo. We offer feature-rich Media and Entertainment clone app solutions with a quick time-to-market, helping businesses build a large customer base and maximize profits.</p>
            </div>
            <div className="w-full grid lg:grid-cols-12  place-content-center place-items-center gap-8">
                <div className="lg:col-span-4 md:col-span-6 col-span-12 overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-slate-900 before:content drop-shadow-2xl">
                    <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px]  flex flex-col m-3 items-center overflow-hidden justify-center relative ">
                       <div className="*:h-14 overflow-hidden ">
                        <Image src="/img/logo-netflix.webp" className=" qaspect-square"  width={56} height={56}  alt=" image"/>
                       </div>
                      <div className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                        App Like Netflix
                      </div>
                        <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                        Did you know that in 2022, Netflix generated $29.7 billion in revenue, marking a 6.5% increase from 2021? If you're looking to create a successful app like Netflix and make your mark in the media and entertainment industry, connect with our expert developers today!
                        </div>
                     </div>
                   <div className="size-4 bg-slate-900 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                   <div className="size-4 bg-slate-900 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                  
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-blue-900 before:content drop-shadow-2xl">
                    <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px]  flex flex-col m-3 items-center overflow-hidden justify-center relative ">
                        <div className="*:h-14 overflow-hidden ">
                            <Image src="/img/logo-hotstar.webp" className=" aspect-square"  width={56} height={56}  alt=" image"/>
                           </div>
                      <div className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                        App Like Hotstar
                      </div>
                      <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                      In the fiscal year 2022 (FY22), Hotstar generated INR 32.59 billion ($415 million), making it India's top OTT platform. If you're aiming to create an app like Hotstar and bring your vision to life, hire dedicated developers today!
                      </div>
                     </div>
                   <div className="size-4 bg-blue-900 absolute bottom-[56px] left-[3px] rotate-45 -z-10">
                    
                   </div>
                   <div className="size-4 bg-blue-900 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-pink-700 before:content drop-shadow-2xl">
                    <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px]  flex flex-col m-3 items-center overflow-hidden justify-center relative ">
                        <div className="*:h-14 overflow-hidden ">
                            <Image src="/img/logo-inshot.webp" className=" aspect-square"  width={56} height={56} alt="image"/>
                           </div>
                      <div className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                        App Like InShot
                      </div>
                      <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                      Start developing a top-notch video editing app similar to InShot with our expertise. We specialize in creating intuitive interfaces, robust editing tools, and seamless user experiences that guarantee a standout app. Partner with us to build an innovative platform that enables users to unleash their creativity in video editing.
                      </div>
                     </div>
                   <div className="size-4 bg-pink-700 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                   <div className="size-4 bg-pink-700 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                </div>
                <div className="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-red-500 before:content drop-shadow-2xl">
                    <div className="bg-white pb-24 md:group-hover:-tranred-y-2 duration-300 px-10 pt-10 rounded-t-[40px]  flex flex-col m-3 items-center overflow-hidden justify-center relative">
                        <div className="*:h-14 overflow-hidden ">
                            <Image src="/img/logo-gaana.webp" className=" aspect-square"  width={56} height={56}  alt=" image"/>
                           </div>
                      <div className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                        App Like Gaana
                      </div>
                      <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                      Dive into the world of music streaming by developing an app similar to Gaana. We excel at designing smooth interfaces, extensive music libraries, personalized playlists, and immersive user experiences. Partner with us to reshape the music streaming landscape, enabling users to discover and enjoy their favorite tracks effortlessly.
                      </div>
                     </div>
                   <div className="size-4 bg-red-600 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                   <div className="size-4 bg-red-600 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-sky-500 before:content drop-shadow-2xl">
                    <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px]  flex flex-col m-3 items-center overflow-hidden justify-center relative ">
                        <div className="*:h-14 overflow-hidden ">
                            <Image src="/img/logo-vimeo.webp"  className=" aspect-square"  width={56} height={56} alt=" image"/>
                           </div>
                      <div className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                        App Like Vimeo
                      </div>
                      <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                           Create a video-sharing app like Vimeo with our expertise. Our team specializes in developing sleek interfaces, advanced video hosting capabilities, high-quality video playback, and robust community engagement features to elevate the user experience.
                      </div>
                     </div>
                   <div className="size-4 bg-sky-600 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                   <div className="size-4 bg-sky-600 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                </div>
            </div>
            <div className="mt-8 flex gap-4 justify-center">
                <a className="inline-flex justify-center rounded-full text-sm font-semibold py-2 md:py-3 px-3 md:px-4 bg-slate-900 text-white hover:bg-slate-700" href="javascript:;">
                    <span className="">
                        Discuss Your Requirements <span aria-hidden="true" className="">→</span>
                    </span>
                </a>
            </div>

        </div>
    </div>


            </div>

            {/* Entertainment Clone Solutions-end-- */}


            {/* Why Should Companies Choose---- */}

            <div className="relative isolate  py-6 md:py-8 lg:py-16 bg-white">
    <div className="overflow-hidden">
       
        <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
            <p className="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                first:*:font-normal

                last:*:font-bold last:*:text-theme2
            "><span>Why Should Companies Choose  </span> 
                <span>Media and Entertainment App Development Today?</span></p>
            
        </div>
    </div>
    <div className="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
         <div className="flex flex-wrap mt-5 sm:mt-8 md:mt-10 items-center justify-center">
            <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-lg flex items-center justify-center flex-col relative ">
                    <div className="md:text-2xl text-lg text-green-500 line-clamp-2 font-semibold">Enhancing Consumer Engagement and Interaction</div>
                    <div className="text-center text-sm line-clamp-6">
                    Mobile applications in the media and entertainment sector provide businesses with a direct communication channel to their target audience. By incorporating features such as social sharing, interactive experiences, and personalized content recommendations, companies can foster stronger connections with users, ultimately boosting customer retention and brand loyalty.
                    </div>
                    <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                        <div className="size-14 md:group-hover:bg-green-500 border border-green-500 z-50 bg-white text-green-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative before:absolute before:bg-white before:opacity-0 md:group-hover:before:opacity-100 before:h-5 before:w-2 before:bottom-1 before:right-1 before:duration-300 duration-300 md:group-hover:before:bg-green-500">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-full" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.04 1.361l.139-.057H21.32l.14.057 1.178 1.179.057.139V16.82l-.057.14-1.179 1.178-.139.057H14V18a1.99 1.99 0 0 0-.548-1.375h7.673V2.875H7.375v7.282a5.73 5.73 0 0 0-1.571-.164V2.679l.057-.14L7.04 1.362zm9.531 9.452l-2.809 2.8a2 2 0 0 0-.348-.467l-.419-.42 2.236-2.235-3.606-3.694.813-.833 4.133 4.133v.716zM9.62 14.82l1.32-1.32L12 14.56l-1.72 1.72.22.22V18H12v1.45h-1.5v.1a5.888 5.888 0 0 1-.41 1.45L12 22.94 10.94 24l-1.65-1.65A4.308 4.308 0 0 1 6 24a4.31 4.31 0 0 1-3.29-1.65L1.06 24 0 22.94 1.91 21a5.889 5.889 0 0 1-.41-1.42v-.08H0V18h1.5v-1.5l.22-.22L0 14.56l1.06-1.06 1.32 1.32a3.73 3.73 0 0 1 7.24 0zm-2.029-.661A2.25 2.25 0 0 0 3.75 15.75h4.5a2.25 2.25 0 0 0-.659-1.591zm.449 7.38A3.33 3.33 0 0 0 9 19.5v-2.25H3v2.25a3.33 3.33 0 0 0 3 3 3.33 3.33 0 0 0 2.04-.96z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-lg flex items-center justify-center flex-col relative ">
                    <div className="md:text-2xl text-lg text-emerald-500 line-clamp-2 font-semibold">
                      Monetization Opportunities
                     </div>
                    <div className="text-center text-sm line-clamp-6">
                      Media and entertainment apps offer a range of monetization strategies, such as in-app purchases, subscription models, and advertising. By adopting the right approach, businesses can tap into new revenue streams and capitalize on the increasing demand for digital content consumption.
                    </div>
                    <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                        <div className="size-14 md:group-hover:bg-emerald-500 border border-emerald-500 z-50 bg-white text-emerald-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative before:absolute before:bg-white before:opacity-0 md:group-hover:before:opacity-100 before:h-5 before:w-2 before:bottom-1 before:right-1 before:duration-300 duration-300 md:group-hover:before:bg-emerald-500">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="M0 448c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128H0v320zm448-208c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-32zm0 120c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H456c-4.42 0-8-3.58-8-8v-16zM64 264c0-4.42 3.58-8 8-8h304c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm0 96c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zM624 32H16C7.16 32 0 39.16 0 48v48h640V48c0-8.84-7.16-16-16-16z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-lg flex items-center justify-center flex-col relative ">
                    <div className="md:text-2xl text-lg text-teal-500 line-clamp-2 font-semibold">Worldwide Reach and Accessibility</div>
                    <div className="text-center text-sm line-clamp-6">
                    With app development, businesses can access a global audience without geographic constraints. This expanded reach not only broadens the potential customer base but also allows companies to tailor their content to the diverse cultural preferences of their audience, facilitating entry into international markets.
                    </div>
                    <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                        <div className="size-14 md:group-hover:bg-teal-500 border border-teal-500 z-50 bg-white text-teal-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative before:absolute before:bg-white before:opacity-0 md:group-hover:before:opacity-100 before:h-5 before:w-2 before:bottom-1 before:right-1 before:duration-300 duration-300 md:group-hover:before:bg-teal-500">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-lg flex items-center justify-center flex-col relative ">
                    <div className="md:text-2xl text-lg text-cyan-500 line-clamp-2 font-semibold">
                    Insights Driven by Data
                      </div>
                    <div className="text-center text-sm line-clamp-6">
                    Media and entertainment apps generate valuable user data that can guide strategic decisions. By analyzing user behavior, preferences, and engagement patterns, businesses can gain crucial insights to enhance user experiences, refine content strategies, and optimize marketing efforts.
                    </div>
                    <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                        <div className="size-14 md:group-hover:bg-cyan-500 border border-cyan-500 z-50 bg-white text-cyan-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative before:absolute before:bg-white before:opacity-0 md:group-hover:before:opacity-100 before:h-5 before:w-2 before:bottom-1 before:right-1 before:duration-300 duration-300 md:group-hover:before:bg-cyan-500">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12c0 1.33.26 2.61.74 3.77L8 10.5l3.3 2.78L14.58 10H13V8h5v5h-2v-1.58L11.41 16l-3.29-2.79-4.4 4.4A9.996 9.996 0 0 0 12 22h8c1.1 0 2-.9 2-2v-8c0-5.52-4.48-10-10-10zm7.5 18.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pr-10 md:p-10 p-5 lg:w-1/2 md:w-1/2 w-full">
                <div className="w-full text-center bg-gray-200 h-full group p-8 cursor-pointer shadow-lg rounded-lg flex items-center justify-center flex-col relative ">
                    <div className="md:text-2xl text-lg text-sky-500 line-clamp-2 font-semibold">
                    Technological Innovation and Differentiation
                    </div>
                    <div className="text-center text-sm line-clamp-6">
                    In the digital age, constant innovation is essential for staying competitive. By developing media and entertainment apps, businesses can leverage advanced technologies such as augmented reality, virtual reality, and artificial intelligence to craft immersive and unique experiences for users.
                    </div>
                    <div className="size-20 bg-gray-200 absolute flex justify-center items-center rounded-full -inset-6 shadow-lg text-white">
                        <div className="size-14 md:group-hover:bg-sky-500 border border-sky-500 z-50 bg-white text-sky-500 md:group-hover:text-white rounded-full max-w-16 p-3 relative before:absolute before:bg-white before:opacity-0 md:group-hover:before:opacity-100 before:h-5 before:w-2 before:bottom-1 before:right-1 before:duration-300 duration-300 md:group-hover:before:bg-sky-500">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="size-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            
         </div>
     </div>
           </div>
   
            {/* Why Should Companies Choose-end--- */}

           <Cta/>

           {/* Entertainment App Development----- */}

           <div className="relative py-6 md:py-8 lg:py-16   bg-gray-100">
        <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-2 relative pb-5">
            <p className="text-gray-800 max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center">
                <span className="font-normal">Our Process for Media and</span> 
                <span className="font-bold text-theme2 "> Entertainment App Development</span>
            </p>
            <div className="md:text-base text-sm text-black/70 mt-3 text-center">
            We believe that our employees are our greatest asset, and we cannot achieve our goals without their support. That’s why we prioritize our team in all our endeavors.
            </div>
        </div>
    
        <div className="mx-auto max-w-7xl px-5 z-10">
            <div className="relative lg:py-20 md:py-16 py-10">
                <div className="flex flex-wrap w-full justify-center mx-2 max-md:mx-0">
                    <ul className="list-none w-full relative *:-mt-20 max-md:*:mt-0">
                        <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                            <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-white flex items-center justify-center md:border-4 border-2 border-sky-900 shadow-md text-sky-900 md:text-lg text-base font-bold">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                            <div className="text-lg text-sky-500 p-2 rounded-full bg-gray-200 border-4 rotate-180 border-t-0 border-gray-300 size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-sky-900 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-sky-500 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                1 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10 border-4 border-sky-900 ">
                                    <div className="text-sky-900 font-bold text-xl">Requirement Documentation</div>
                                    <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">  
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                        <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Requirements gathering and analysis
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Define the project scope, identify user needs, and outline features and functionalities.
                                        </a>      
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Suggest appropriate and up-to-date solutions.
                                        </a>     
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                            <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-white flex items-center justify-center md:border-4 border-2 border-sky-800 shadow-md text-sky-800 md:text-lg text-base font-bold">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                            <div className="text-lg text-sky-500 p-2 rounded-full bg-gray-200 border-4 rotate-180 border-t-0 border-gray-300 size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-sky-900 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-sky-500 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                2 
                                            </div>
                            
                                        </div>
                            
                                    </div>
                                </div>
                                <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg relative z-10 border-4 border-sky-800 ">
                                    <div className="text-slate-900 font-bold text-xl">Wireframing</div>
                                    <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">  
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Develop a visual representation of the app's layout and user interface design.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Incorporate the app flow and navigation structure.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                            <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                            <div className="text-lg text-sky-500 p-2 rounded-full bg-gray-200 border-4 rotate-180 border-t-0 border-gray-300 size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-sky-900 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-sky-500 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                3 
                                            </div>
                            
                                        </div>
                            
                                    </div>
                                </div>
                                <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg  relative z-10 border-4 border-sky-700">
                                    <div className="text-slate-900 font-bold text-xl">Resource Planning</div>
                                    <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">  
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Determine the necessary resources for the project, including hardware and software requirements.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Develop a strategy for sourcing and effectively managing resources.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                            <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                            <div className="text-lg text-sky-500 p-2 rounded-full bg-gray-200 border-4 rotate-180 border-t-0 border-gray-300 size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-sky-900 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-sky-500 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                4
                                            </div>
                            
                                        </div>
                            
                                    </div>
                                </div>
                                <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg  relative z-10 border-4 border-sky-600">
                                    <div className="text-slate-900 font-bold text-xl">Design And Prototyping</div>
                                    <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">  
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Design the mobile app, incorporating UI elements, color schemes, and other visual aspects.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Develop a functional prototype of the app utilizing advanced tools and technologies.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Present the prototype for approval prior to commencing development.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                            <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                            <div className="text-lg text-sky-500 p-2 rounded-full bg-gray-200 border-4 rotate-180 border-t-0 border-gray-300 size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-sky-900 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-sky-500 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                5 
                                            </div>
                            
                                        </div>
                            
                                    </div>
                                </div>
                                <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg  relative z-10 border-4 border-sky-500">
                                    <div className="text-slate-900 font-bold text-xl">Database Architecture</div>
                                    <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">  
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Design and establish a database for the effective storage of app data.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                            <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                            <div className="text-lg text-sky-500 p-2 rounded-full bg-gray-200 border-4 rotate-180 border-t-0 border-gray-300 size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-sky-900 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-sky-500 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                6
                                            </div>
                            
                                        </div>
                            
                                    </div>
                                </div>
                                <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg  relative z-10 border-4 border-sky-400">
                                    <div className="text-slate-900 font-bold text-xl">Development</div>
                                    <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">  
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Develop the app by writing the necessary code.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Integrate the app features and functionalities.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Implement tools and technologies to enhance functionality.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Share the project in advance to gather feedback.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                            <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center md:border-4 border-2 border-white shadow-md text-white md:text-lg text-base font-bold">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                            <div className="text-lg text-sky-500 p-2 rounded-full bg-gray-200 border-4 rotate-180 border-t-0 border-gray-300 size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-sky-900 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-sky-500 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                7 
                                            </div>
                            
                                        </div>
                            
                                    </div>
                                </div>
                                <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg  relative z-10 border-4 border-sky-300">
                                    <div className="text-slate-900 font-bold text-xl">UAT</div>
                                    <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">  
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Perform app testing to verify that it meets requirements and functions as intended.
                                        </a> 
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Identify and resolve any issues that arise.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Proceed with obtaining final approval from clients.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-row-reverse items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[2px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400 ">
                            <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pl-20">
                                <div className="absolute md:top-1/2 top-[-20px] z-30 md:left-[-33px] max-md:left-1/2 max-md:mx-auto  md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                            <div className="text-lg text-sky-500 p-2 rounded-full bg-gray-200 border-4 rotate-180 border-t-0 border-gray-300 size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-sky-900 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-sky-500 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                8 
                                            </div>
                            
                                        </div>
                            
                                    </div>
                                </div>
                                <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg  relative z-10 border-4 border-sky-200">
                                    <div className="text-slate-900 font-bold text-xl">Deployment And Live</div>
                                    <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">  
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Launch the app on an app store or distribution platform.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Make the app accessible to users.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center relative md:pb-5 pb-10 before:absolute before:h-1/2 before:top-0 before:w-[2px] before:[transform:translateX(-50%)] before:left-1/2 before:bg-gray-400 after:absolute after:h-1/2 after:w-[0px] after:[transform:translateX(-50%)] after:left-1/2 after:bottom-0 after:bg-gray-400">
                            <div className="leftdiv relative flex-1 items-center md:max-w-[50%] w-full md:pr-20">
                                <div className="absolute md:top-1/2 top-[-20px] z-30 md:right-[-33px] max-md:left-1/2 max-md:mx-auto md:size-16 size-10 md:transform md:-translate-y-1/2 max-md:transform max-md:-translate-x-1/2 rounded-full bg-gray-600 flex items-center justify-center">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-100 rounded-full border-2 border-gray-200 rotate-180 drop-shadow-2xl shadow-white p-2">
                                            <div className="text-lg text-sky-500 p-2 rounded-full bg-gray-200 border-4 rotate-180 border-t-0 border-gray-300 size-12 md:size-16 flex items-center justify-center drop-shadow-2xl before:absolute before:size-full before:border-2 before:border-t-0 before:border-sky-900 before:rounded-full before:inset-0 before:z-0 before:shadow-2xl before:shadow-sky-500 after:absolute after:border-t-4 after:border-white after:rounded-full after:size-full after:inset-0">
                                                9 
                                            </div>
                            
                                        </div>
                            
                                    </div>
                                </div>
                                <div className="w-full p-8 bg-white mx-auto shadow-md rounded-lg  relative z-10 border-4 border-sky-100">
                                    <div className="text-slate-900 font-bold text-xl">Maintenance And Updates</div>
                                    <div className="grid gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:inline-flex *:text-gray-900/80 *:items-center *:gap-x-2 *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">  
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Provide ongoing maintenance and updates for the app.
                                        </a> 
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Offer continuous support through regular checks and inspections.
                                        </a>
                                        <a href="javascript:;" className="group/db flex items-center">
                                        <div className="">
                                            <svg className="group-hover/db:opacity-80  !rounded-full overflow-hidden !size-3" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"></path></svg>
                                        </div>
                                            Ensure the app is compatible with various operating systems and new devices.
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
           {/* Entertainment App Development-end---- */}
               
                 <PortfolioSection/>


           {/* benefits-Entertainment App Development----- */}


                 <div className="relative bg-gray-100 py-6 md:py-8 lg:py-16  ">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">
        <div className="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">
            <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                <p className="
                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                    first:*:font-normal

                    last:*:font-bold last:*:text-theme2
                ">
                    <span>Benefits of Media and  </span> <span> Entertainment App Development</span>
                    
                </p>
                
            </div>
            <div className="w-full grid md:grid-cols-3 gap-8">
                 
                          <div class="relative h-full md:group md:hover:shadow-2xl md:hover:shadow-sky-300 duration-300 bg-white p-4 pb-0 m-2 rounded-lg shadow-2xl before:absolute before:h-12 before:w-4 before:bg-sky-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-sky-600">
                                <div class="flex flex-col justify-center items-center mt-12">
                                    <div class="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                        <div class="w-full md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-sky-500 ">
                                        Widespread Market Reach
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Media and entertainment app development provides business owners with a means to engage with a global audience. Through these apps, content can be distributed anywhere, granting businesses access to diverse markets and various consumer demographics.
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
                                        Monetization Opportunities
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        Business owners can generate revenue from their media and entertainment apps through various methods, such as in-app purchases, subscriptions, and advertising. This approach creates multiple revenue streams, improving the overall financial performance of the venture.
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
                                        Enhanced User Engagement
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        The interactive features and personalized content delivery of media and entertainment apps significantly boost user engagement. By offering tailored experiences, entrepreneurs can cultivate a loyal user base, improving user retention and fostering brand loyalty.
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
                                        Insights Driven by Data
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        By leveraging the valuable user data collected from media and entertainment apps, entrepreneurs can gain crucial insights into user preferences, behaviors, and trends. Utilizing analytics allows business owners to refine content strategies, make informed decisions, and continuously improve the performance of their apps.
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
                                        Increased Brand Visibility and Recognition
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        By developing a unique and visually appealing media and entertainment app, businesses can significantly enhance their brand visibility and recognition. Entrepreneurs have the opportunity to establish a distinctive brand identity, differentiate themselves from competitors, and become leaders in their industry.
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
                                        Innovation and Flexibility
                                        </div>
                                        <p class="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 line-clamp-6 text-ellipsis w-full">
                                        The media and entertainment industry demands ongoing innovation due to its ever-changing landscape. Through app development, entrepreneurs can remain agile, adapt to market trends, and quickly implement updates and new features. This flexibility ensures that the app remains competitive and relevant in the market.
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
            </div>
        </div>
    </div>
</div>
  

           {/* benefits-Entertainment App Development-en----- */}

           <Cta2/>
          <Gallery/>

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

export default mediaandentertainmentappdevelopment;