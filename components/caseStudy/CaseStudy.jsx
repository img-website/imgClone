import React from 'react'
import Image from "next/image";


function CaseStudy() {
    return (
        <div>
            <section className="container mx-auto py-8 sm:py-16 relative bg-white [critical:this]">
                <div className="flex flex-col w-full max-w-7xl mx-auto pb-8 px-6 lg:px-8 text-center">
                    <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                        <span>Client Success Stories - </span>
                        <span className="font-bold text-theme2"> A Preview of Our Case Studies</span>
                    </p>
                    <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">
                        Dive into our client success stories and see how transformative journeys lead to success. Each case study highlights our impactful solutions, demonstrating innovation, dedication, and measurable outcomes.
                    </div>
                </div>
                <ul className="flex relative flex-col gap-y-8 lg:gap-y-64 flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100 overflow-hidden relative rounded-[20px]">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full gap-14 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] lg:w-[35rem] lg:h-[25rem] h-auto max-sm:mx-auto object-contain" width="1000" height="1000" src="https://www.hyperlinkinfosystem.com/assets/case-study/parkquik/client-requirements.png" alt="TractorJunction" />
                                    </div>
                                    <div className="grow max-sm:w-full text-white flex ms-auto flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-base lg:text-lg font-semibold inline-block">Roccabox</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">
                                            Kunji is a finance platform to help people who want to invest in crypto.
                                        </div>
                                        <div>
                                            <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                                VIew Case Study

                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme2 opacity-100 rounded-[20px] overflow-hidden relative">
                            <div className="absolute inset-0 opacity-100 bg-theme2"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-base lg:text-lg font-semibold inline-block">The Lien Zone</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Build for a client in Florida, USA, The Lien Zone contains all the information about the holidays in Florida</div>
                                        <div>
                                            <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme2 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                                VIew Case Study

                                            </button>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/coversure-port.png" alt="TractorJunction" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100 rounded-[20px] overflow-hidden relative">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full gap-14 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">

                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] object-contain lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/getsupp-port.png" />
                                    </div>
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-lg font-semibold inline-block">About Aavas Financiers</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">The success of Aavas is counted from zero to millions of satisfied customers across the country.</div>
                                        <div>
                                            <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                                VIew Case Study

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme2 opacity-100 rounded-[20px] overflow-hidden relative">
                            <div className="absolute inset-0 opacity-100 bg-theme2"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-lg font-semibold inline-block">About Klassbook</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">The Klassbook consists of hand-picked and best features to lead the educational transformation to meet the needs of present and future generations.</div>
                                        <div>
                                            <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme2 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                                VIew Case Study

                                            </button>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/biocule-port.png" alt="MyFab11" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100 rounded-[20px] overflow-hidden relative">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">

                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full gap-14 flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">

                                    <div className="grow-0 shrink-0 max-sm:w-full">
                                        <Image className="size-[20rem] lg:size-[25rem] object-contain h-auto max-sm:mx-auto" width="640" height="640" src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/caratlane-port.png" alt="Fabindia" />
                                    </div>
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                                        <span className="duration-300 text-lg font-semibold inline-block">About Laiqa</span>
                                        <div className="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Shop for Handwoven Garments & home fusnishings</div>
                                        <div>
                                            <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                                VIew Case Study

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className="size-full lg:sticky lg:top-36">
                        <div className="bg-theme1 opacity-100   overflow-hidden relative before:absolute before:inset-6 before:border-4 before:border-white  before: before:z-10">
                            <div className="absolute inset-0 opacity-100 bg-theme1"></div>
                            <div className="blur-[100px] absolute top-[20%] left-[0%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-green-500 to-violet-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="blur-[100px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-cyan-500 to-blue-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="blur-[100px] absolute top-[70%] left-[70%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-red-700 to-pink-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                            </div>
                            <div className="flex flex-col p-10 h-full relative z-50">
                                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center text-center">
                                    <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-5">
                                        <span className="duration-300 text-lg md:text-xl font-semibold inline-block">CaseStudy</span>
                                        <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-balance max-w-lg mx-auto">Transforming Businesses Worldwide - 100+ Success Stories and Counting</div>
                                        <div>
                                        <button className="px-4 text-sm text-white inline-flex items-center gap-2 font-semibold rounded-full py-3 border-white border-2 w-max  before:-z-10 relative before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:bg-theme1 before:md:hover:h-full before:duration-300 md:hover:text-white duration-300 before:md:hover:top-0">
                                        VIew all Casestudy
                                        
                                    </button>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 w-[1px] overflow-hidden opacity-0">
                                        <div className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> */}
                </ul>
            </section>
        </div>
    )
}

export default CaseStudy
