import Header from '@/components/header/Header'
import React from 'react'
import Image from "next/image";
import Cta from '@/components/cta/Cta';
import PortfolioSection from '@/components/portfolio/portfolio';
import Footer from '@/components/footer/Footer';
import Blog from '@/components/blog/Blog';
import Form from '@/components/contactForm/Form';


function webdevelopment() {
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
                Web Development Company
                </span>
              </div>
              <div className="max-lg:text-sm text-base text-center text-white pt-5 text-balance max-lg:mx-auto">
              At  Twin Power Software, we specialize in turning websites into highly effective communication platforms that deliver impactful results and drive online growth. We provide tailored web development solutions that meet your goals within the expected timeframe and budget.


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
                                            <Image className="object-cover !w-[1216px] !h-auto md:mt-16 lg:mt-0 " width={'384'} height={'384'} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image3" />


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
                                    <span className="font-normal">Innovative and User-Focused Web Development   </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme2">Company Delivering Impactful Results</span>

                                </p>
                                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                                Twin Power Software is a leading custom web development company with a strong presence in India, the USA, and the UK. Our team of experienced developers creates high-quality B2C and B2B websites, catering to businesses of all sizes across various industry verticals, including data analysis, eLearning, adtech, healthcare, eCommerce, and finance.
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

            {/* costum services */}
            <div className="bg-theme1 py-16 mt-0">
            <div className='max-w-7xl mx-auto px-6 lg:px-8 '>
           <p className="max-md:text-2xl/tight pb-10 text-center max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                        <span className='text-white'>Website Updates  </span>
                        <span className="font-bold text-theme2"> and Migrations</span>
                    </p>
              <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-y-5 gap-x-3 lg:gap-x-5">
              
              <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            
                    <div href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Driving Meaningful Innovations"</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">"From crafting simple web pages to developing complex solutions, our team specializes in delivering top-notch results. Leveraging the latest tools and technologies, we provide industry-leading custom web and application development services. Become the next market leader—let your business website or application captivate users at first glance."</p>
                   
                </div>
                <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                    <div href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Personalized Web Development Strategies</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">"If you have a vision for a custom website and need professional guidance to bring it to life, we're here to assist you. Our team will work with you to assess your business goals and requirements, ensuring project feasibility and success. With our web development consulting services, turn your small business idea into a thriving opportunity."

</p>
                   
                </div>
                <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                    <div href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Innovative Frontend Development Solutions
                        </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">"Our customized frontend web development solutions are designed to be both tailored and easy to maintain. With a team of dedicated frontend developers, we deliver exceptional custom web development services. Start your online journey with one of the leading custom web development companies in the USA."    </p>
                   
                </div>
                <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            
                    <div href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">"Expert Custom Backend Development"
                        </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      Here’s a polished version of your message for clarity and impact:

                      "The backend code of a website or application may be invisible, but it powers the entire operation. Our skilled backend developers understand this crucial role and are dedicated to delivering robust and custom backend development. Share your requirements for a business website, and let our experts handle the rest."</p>
                   
                </div>
                <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                    <div href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">UX/UI Designing Services</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Besides developing a custom website, focusing on the design details is a must to ensure project success. So, we have a team of creative heads who put their 100% effort into creating unique business applications and websites that are enough to steal your customers' hearts. Seek UX/UI designing services for your custom web development solutions.</p>
                   
                </div>
                <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                    <div href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Personalized Website Support & Maintenance</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Developing a fully customized website is just the beginning for business owners. Timely maintenance of your application or website is essential for smooth operation and to remain competitive. With our custom web support and maintenance services, we ensure your business website stays updated with the latest market trends.   </p>
                   
                </div>
                <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            
                    <div href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Custom Web Migration & Upgradation</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Business apps and websites need constant upgradation to reinvigorate digital experiences. With our custom web migration and upgradation services, you can make your existing business solutions result-driven and successful. Upgrade your business website to the newest industry standards and give your customers an amazing web experience.</p>
                   
                </div>
                <div className=" hover:shadow-2xl hover:-translate-y-1 duration-500 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                    <div href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">"Comprehensive API Development Solutions"
                        </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">At Dev Technosys, we collaborate with you to integrate external systems seamlessly with your web app. Our specially designed APIs enhance the functionality and capabilities of your business website. Take advantage of our custom web development solutions and enjoy complimentary API development services as well.</p>
                   
                </div>
              </div>
            </div>
            </div>
            {/* costum services */}
             <Cta/>

             <PortfolioSection />
            {/* {/ {/ strategy /} /} */}
            <div className="bg-theme2 relative overflow-hidden py-6 md:py-8 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8  z-40 relative">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center text-white">
                        <span className="font-normal">Why Choose Twin Power Software  </span>
                        <span className="font-bold text-white"> for Custom Software Development? </span>
                    </p>
                    <div className="md:text-base text-sm text-center text-white opacity-70 mt-3 mb-lg-1">
                    We deliver comprehensive and customized solutions tailored to our clients' needs. Our developers are dedicated to providing exceptional services around the clock, addressing diverse business requirements. Here are a few reasons to choose TwinPower Software for your software development consulting services.
                    </div>

                    <div className="flex flex-col  pt-4">
                        <div className="flex flex-wrap max-sm:gap-x-2 gap-5 py-5 justify-center text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto">
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                               9+Years in Buisness
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">                  
                              Experienced And Talented Coders
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">Cost-Effective Solutions </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Visual Hierarchy
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                High Performance
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Browser Compatible
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                SEO Friendly Structure
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Cutomizable
                            </div>
                            <div className="rounded-lg group/db relative font-semibold text-md flex backdrop-blur-xl text-white/80 border-2 border-white/10 hover:border-white/20 items-center gap-x-2  md:pr-4 pr-4 pl-4 py-2">

                                Fully Secure
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {/ {/ strategy-end /} /} */}
          <Blog/>
          <Form/>
          <Footer />
    </>
  )
}

export default webdevelopment