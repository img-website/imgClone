import Header from '@/components/header/Header'
import React from 'react'
import Image from 'next/image'
import Cta from '@/components/cta/Cta'
import Blog from '@/components/blog/Blog'
import Form from '@/components/contactForm/Form'
import Footer from '@/components/footer/Footer'

function gymmanagementoftware() {
  return (
    <>
    <Header/>
      

      {/* hero */}
      <div className="relative">
        <div className="h-[calc(100vh_-_10px)] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-tr  after:via-theme2/80 after:to-theme1/70 after:from-theme1/70 after:backdrop-blur-sm">
          <Image src="/img/gym-mamagement.webp" width={'1000'} height={'1000'} alt="" className='h-full w-full object-cover overflow-hidden object-top' />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center px-8 sm:px-12 md:px-16 h-full text-white mx-auto w-full">
          <div className="w-full">
            <div className="max-w-5xl grow-0 text-center mx-auto text-balance">
              <div className="font-light text-white max-md:text-2xl/tight max-xl:text-4xl/tight text-6xl/tight tracking-[-0.04em]">
                <span className="colorApply3 font-bold text-gray-100 block pb-1  via-indigo-500 from-indigo-100 to-indigo-100">
                Gym Management Software
                </span>
              </div>
              <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
              Fitness ERP is fitness management software that manages all aspects of your fitness business. This is the most effective way to manage your business and to make your daily work easier. This is a smart marketing tool to expand your customer base and is easy to implement, manage and use.


              </div>
              <div className=" flex justify-center w-full mt-6">
                <button className="px-4 text-sm text-[white] rounded-full bg-[#0E508A] inline-flex items-center gap-2 font-semibold py-3 border-[#0E508A] border-2 w-max hover:bg-[#0E508A]/80 duration-300">
                  <span>Start A Project</span>
                  <span className='*:size-5'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6-1.41 1.41zM2 6v12h2V6H2z"></path></svg>
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
                <div className="relative  py-6 md:py-8 lg:py-16 overflow-hidden ">
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
                                            <Image className="object-cover !w-[1216px] !h-auto md:mt-16 lg:mt-0 " width={'1000'} height={'1000'} src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image3" />


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
                                    <span className="font-normal">Premier Fitness App    </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2"> Development Solutions in India</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                Fitness software is an innovative solution that automates tasks, streamlines operations, and elevates your business to the next level. Catering to small and medium-sized gyms and fitness centers, it offers a comprehensive range of solutions that save gym owners time. This allows them to focus less on managing member records and more on building strong relationships with their gym members
                                </p>
                               
                                <div className="mt-8 flex gap-4">
                                    <button className="px-4 text-sm text-[white] bg-theme1 rounded-full inline-flex items-center gap-2 font-semibold py-3 border-theme1 border-2 w-max hover:bg-theme1/80 duration-300">
                                        <span>Read More</span>
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

       <Cta/>

       <div class="relative isolate select-none py-6 md:py-8 lg:py-16 ">
    <div class="overflow-hidden">
        
        <div class="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
            <p class="
                max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                first:*:font-normal

                last:*:font-bold last:*:text-theme2
            "><span>Why Choose a   </span> 
                <span>  Fitness Centre?</span></p>
           
        </div>
    </div>
    <div class="container pt-5 md:p-5 sm:p-8 p-5 mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex">
        <ul class="
            flex flex-wrap md:pt-8 text-center md:text-left gap-y-6 justify-center items-stretch
        ">
            <div class="lg:w-1/3 md:w-1/2 p-3 size-auto">
                <div class="size-full border border-theme2 rounded-3xl bg-white group p-4 relative before:absolute before:top-1/2 before:-translate-y-1/2  before:-z-10 before:-left-3 before:duration-500 md:before:hover:rotate-180 md:hover:border-theme4 duration-500 md:before:hover:bg-theme4 before:rounded-3xl before:size-3/4 before:bg-theme2 ">
                    <div class="text-lg text-theme2 md:group-hover:text-theme4 duration-500 font-semibold">
                    Membership Management
                    </div>
                    <div class="text-sm text-slate-500 pt-2">
                    Searching for member details manually using paperwork can be complex and time-consuming. However, with a fitness software solution, you can easily access all member information with just one click, retrieving their details in seconds
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 p-3 size-auto">
                <div class="size-full border border-theme2 rounded-3xl bg-white group p-4 relative before:absolute before:top-1/2 before:-translate-y-1/2  before:-z-10 before:-left-3 before:duration-500 md:before:hover:rotate-180 md:hover:border-theme4 duration-500 md:before:hover:bg-theme4 before:rounded-3xl before:size-3/4 before:bg-theme2 ">
                    <div class="text-lg text-theme2 md:group-hover:text-theme4 duration-500 font-semibold">
                    Virtual Scheduling and Presence Tracking

                    </div>
                    <div class="text-sm text-slate-500 pt-2">
                    With our software, online scheduling and attendance tracking becomes effortless. Simply type in a member's name to instantly access their details, including attendance history, scheduled arrivals, and recorded absences.
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 p-3 size-auto">
                <div class="size-full border border-theme2 rounded-3xl bg-white group p-4 relative before:absolute before:top-1/2 before:-translate-y-1/2  before:-z-10 before:-left-3 before:duration-500 md:before:hover:rotate-180 md:hover:border-theme4 duration-500 md:before:hover:bg-theme4 before:rounded-3xl before:size-3/4 before:bg-theme2 ">
                    <div class="text-lg text-theme2 md:group-hover:text-theme4 duration-500 font-semibold">
                    Time Optimization

                    </div>
                    <div class="text-sm text-slate-500 pt-2">
                    The primary advantage of using software in a fitness center is its ability to save time. With software, administrative paperwork is significantly reduced, allowing staff to focus more on member engagement and service
                    </div>
                </div>
            </div>
        </ul>
    </div>
       </div>

       {/* strategy  */}
            <div className="bg-theme1 relative overflow-hidden py-6 md:py-8 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  z-40 relative">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center text-white">
                        <span className="font-normal">Highlighting Our   </span>
                        <span className="font-bold text-white"> Best Features </span>
                    </p>
                    <div className="md:text-base text-sm text-center text-white opacity-70 mt-3 mb-lg-1">
                    We built best Web Applications for various industries and clients across the globe. We are committed to thoroughly understanding your industry and target markets before initiating the programming process.
                    </div>

                    <div className="flex flex-col  pt-4">
                        <div className="flex flex-wrap max-sm:gap-x-2 gap-5 py-5 justify-center text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto">
                           
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                            Quick Links To Module Using Menu Bar
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                            Customized Dynamic Reports
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                            Multiple Package Assignment To Single Mmber
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                            package (membership + Discount)
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                            Setup A Class/Schedule Of Any Type And Timing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* strategy-end  */}
             <Blog/>
             <Form/>
             <Footer />
    
    </>
  )
}

export default gymmanagementoftware