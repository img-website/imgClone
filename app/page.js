import Header from "@/components/header/Header";
import LogoSlider from "@/components/logo-slider/logoslider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      {/* <LogoSlider/> */}
      <div className="pt-24">
        <div class="relative bg-slate-50 py-6 md:py-8 lg:py-16 select-none ">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div class="absolute inset-0 size-full pointer-events-none overflow-hidden">
                <div class="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('https://www.imgglobalinfotech.com/public/tailwind/css/build/assets/beams1-c3cd2070.webp')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block pointer-events-none"></div>
            </div>
            <div class="
                    mx-auto max-w-container gap-7 flex max-lg:flex-col group-[]/flip:flex-row-reverse group-[]/flip:max-lg:flex-col max-lg:gap-4 

                    [&amp;>*:first-child]:[&amp;:has(.content1-img)]:lg:block 
                    [&amp;:first-child]:hidden [&amp;>*:last-child]:[&amp;:has(.content1-img)]:max-w-3xl 
                    [&amp;>*:last-child]:[&amp;:has(.content1-img)]:lg:w-3xl
                ">
                <div class="relative z-10 pointer-events-none h-auto lg:sticky lg:top-24 self-start mx-auto">
                    <div class="flex [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)]">
                        <div class="relative flex-shrink-0 p-4 w-full">
                            <div class="relative z-10 overflow-hidden *:rounded-xl [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)] [&amp;~*]:[&amp;:has(.mask)]:lg:hidden">
                                            <img class="object-cover w-full h-auto content1-img" width="384" height="384" src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?fit=crop&amp;crop=focalpoint&amp;w=750&amp;h=750&amp;q=60&amp;fm=webp" srcset="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?fit=crop&amp;crop=focalpoint&amp;w=384&amp;h=384&amp;q=60&amp;fm=webp 1x, https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?fit=crop&amp;crop=focalpoint&amp;w=750&amp;h=750&amp;q=60&amp;fm=webp 2x" data-src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?fit=crop&amp;crop=focalpoint&amp;w=750&amp;h=750&amp;q=60&amp;fm=webp" alt="image3"/>
                                        
                                
                            </div>
                            <div class="z-0">
                                <div class="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                <div class="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                <div class="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                <div class="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                <div class="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                                    <div class="flex -mb-px h-[2px] w-80 -scale-x-100">
                                        <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                        <div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative z-20 mx-auto lg:mx-0 lg:pr-4 md:py-6 md:md:py-8 h-auto md:sticky md:top-24 self-start shrink-1 grow-0 basis-auto w-full">
                    <p class="
                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

                        first:*:font-normal

                        last:*:font-bold last:*:text-[#064a77]
                    ">
                                    <span class="font-normal">A Quick Insight Into </span> <span class="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-[#064a77]">IMG Global Infotech</span>
                                
                    </p>
                                <p class="mt-4 text-sm md:text-base leading-7 text-slate-600">Discover innovation and excellence at IMG Global Infotech! Immerse yourself in cutting-edge services and high-quality development solutions that redefine the digital landscape. Our dynamic work environment fosters creativity and collaboration to fuel groundbreaking ideas.</p>
                <p class="mt-4 text-sm md:text-base leading-7 text-slate-600">At IMG, we pride ourselves on timely delivery, transforming visions into reality. From mobile app development to custom software solutions and dedicated developer hiring, we cater to businesses of all scales. Experience top-notch development, reasonable prices, and a partnership that exceeds expectations - at IMG Global Infotech, we make digital dreams come true.</p>
                            
                    <div class="mt-8 flex gap-4">
                                    <a href="https://www.imgglobalinfotech.com/about-us.php" class="inline-flex rounded-br-none justify-center rounded-lg text-sm font-semibold py-2 md:py-3 px-3 md:px-4 bg-slate-900 text-white hover:bg-slate-700"><span class="select-none">Read More <span aria-hidden="true" class="text-slate-400 sm:inline">→</span></span></a>
                <a class="inline-flex rounded-br-none justify-center rounded-lg text-sm font-semibold py-2 md:py-3 px-3 md:px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 " href="https://www.imgglobalinfotech.com/contact-us.php">
                    <span class="select-none">
                    Coffee With Us <span aria-hidden="true" class="text-black/25 sm:inline">→</span>
                    </span>
                </a>
                                
                    </div>
                </div>
            </div>
            <div class="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
        </div>
        </div>
      </div>

      <section class="container mx-auto py-8 sm:py-16 relative select-none bg-white [critical:this]">
    <div class="flex flex-col w-full max-w-7xl mx-auto pb-8 px-6 lg:px-8 text-center">
        <p class="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
            <span>Client Journeys to Success -</span> 
            <span class="font-bold text-[#064a77]"> Glimpse of Our Case Studies</span>
        </p>
        <div class="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">Explore our client success stories, witnessing transformative journeys to success. Each case study below reflects our impactful solutions, showcasing innovation, dedication, and tangible results.</div>
    </div>
    <ul class="flex relative flex-col gap-y-8 lg:gap-y-64 flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
        <li class="size-full lg:sticky lg:top-36">
            <div class="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
                <div class="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                <div class="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div class="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-sky-500 to-indigo-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                </div>
                <div class="flex flex-col p-10 h-full relative z-50">
                    <div class="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                        <div class="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                            <span class="duration-300 text-base lg:text-lg font-semibold inline-block">TractorJunction</span>
                            <div class="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">New Tractor, Tractor Prices, Compare Tractors, Buy &amp; Sell Used Tractors in India</div>
                            <div>
                                <a href="https://www.imgglobalinfotech.com/casestudy/tractorjunction.php" class="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                            </div>
                        </div>
                        <div class="grow-0 shrink-0 max-sm:w-full">
                            <img class="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://www.imgglobalinfotech.com/public/tailwind/img/case-study-tractor2x.webp?id=a2dfad5a5cdeb8e6f896ac5089c10f55" srcset="https://www.imgglobalinfotech.com/public/tailwind/img/case-study-tractor.webp?id=5088eff7501ea53e1016848554b9d924 1x, https://www.imgglobalinfotech.com/public/tailwind/img/case-study-tractor2x.webp?id=a2dfad5a5cdeb8e6f896ac5089c10f55 2x" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/case-study-tractor2x.webp?id=a2dfad5a5cdeb8e6f896ac5089c10f55" alt="TractorJunction"/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="size-full lg:sticky lg:top-36">
            <div class="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
                <div class="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                <div class="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                <div class="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-red-700 to-pink-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                
                </div>
                <div class="flex flex-col p-10 h-full relative z-50">
                    <div class="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                        <div class="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                            <span class="duration-300 text-base lg:text-lg font-semibold inline-block">Propira</span>
                            <div class="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Your Local Property Expert</div>
                            <div>
                                <a href="https://www.imgglobalinfotech.com/casestudy/propira.php" class="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                            </div>
                        </div>
                        <div class="grow-0 shrink-0 max-sm:w-full">
                            <img class="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://www.imgglobalinfotech.com/public/tailwind/img/Propira04.webp?id=5e203e371ca7f87a5c336c54488175a6" srcset="https://www.imgglobalinfotech.com/public/tailwind/img/Propira04.webp?id=5e203e371ca7f87a5c336c54488175a6 1x, https://www.imgglobalinfotech.com/public/tailwind/img/Propira04.webp?id=5e203e371ca7f87a5c336c54488175a6 2x" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/Propira04.webp?id=5e203e371ca7f87a5c336c54488175a6" alt="TractorJunction"/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="size-full lg:sticky lg:top-36">
            <div class="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
                <div class="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                <div class="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div class="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-lime-500 to-green-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                </div>
                <div class="flex flex-col p-10 h-full relative z-50">
                    <div class="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                        <div class="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                            <span class="duration-300 text-lg font-semibold inline-block">Hozzo - Car wash</span>
                            <div class="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Waterless car washing services across india</div>
                            <div>
                                <a href="https://www.imgglobalinfotech.com/casestudy/hozzo.php" class="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                            </div>
                        </div>
                        <div class="grow-0 shrink-0 max-sm:w-full">
                            <img class="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://www.imgglobalinfotech.com/public/tailwind/img/hozzo.webp?id=94b5bb03a3148d724b530d18126e938f" srcset="https://www.imgglobalinfotech.com/public/tailwind/img/hozzo.webp?id=94b5bb03a3148d724b530d18126e938f 1x, https://www.imgglobalinfotech.com/public/tailwind/img/hozzo2x.webp?id=2094170a829227c631c4ff58be20d783 2x" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/hozzo.webp?id=94b5bb03a3148d724b530d18126e938f" alt="Hozzo - Car wash"/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="size-full lg:sticky lg:top-36">
            <div class="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
                <div class="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                <div class="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div class="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-green-500 to-violet-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                </div>
                <div class="flex flex-col p-10 h-full relative z-50">
                    <div class="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                        <div class="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                            <span class="duration-300 text-lg font-semibold inline-block">MyFab11</span>
                            <div class="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Principle Partner of KKR. india's most trusted Fantasy Cricket App</div>
                            <div>
                                <a href="https://www.imgglobalinfotech.com/casestudy/myfab11.php" class="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                            </div>
                        </div>
                        <div class="grow-0 shrink-0 max-sm:w-full">
                            <img class="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://www.imgglobalinfotech.com/public/tailwind/img/fab11.webp?id=d3612b38cb59ffb1880f192851e2d346" srcset="https://www.imgglobalinfotech.com/public/tailwind/img/fab11.webp?id=d3612b38cb59ffb1880f192851e2d346 1x, https://www.imgglobalinfotech.com/public/tailwind/img/fab112x.webp?id=94c35714ebcb3541f9811f249030ab73 2x" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/fab11.webp?id=d3612b38cb59ffb1880f192851e2d346" alt="MyFab11"/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="size-full lg:sticky lg:top-36">
            <div class="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
                <div class="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                <div class="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div class="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-red-700 to-pink-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                </div>
                <div class="flex flex-col p-10 h-full relative z-50">
                    <div class="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                        <div class="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                            <span class="duration-300 text-lg font-semibold inline-block">Fabindia</span>
                            <div class="font-bold text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal mb-4 text-balance">Shop for Handwoven Garments &amp; home fusnishings</div>
                            <div>
                                <a href="https://www.imgglobalinfotech.com/casestudy/fabindia.php" class="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                            </div>
                        </div>
                        <div class="grow-0 shrink-0 max-sm:w-full">
                            <img class="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width="640" height="640" src="https://www.imgglobalinfotech.com/public/tailwind/img/fabindia.webp?id=57b0fd63e9d7b35d60824c5c5bd8bed2" srcset="https://www.imgglobalinfotech.com/public/tailwind/img/fabindia.webp?id=57b0fd63e9d7b35d60824c5c5bd8bed2 1x, https://www.imgglobalinfotech.com/public/tailwind/img/fabindia2x.webp?id=3e8a97b060c0f471ab3d560f66b3d845 2x" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/fabindia.webp?id=57b0fd63e9d7b35d60824c5c5bd8bed2" alt="Fabindia"/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="size-full lg:sticky lg:top-36">
            <div class="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative before:absolute before:inset-6 before:border-4 before:border-white before:rounded-3xl before:rounded-br-none before:z-10">
                <div class="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900"></div>
                <div class="blur-[60px] absolute top-[20%] left-[0%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div class="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-green-500 to-violet-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                </div>
                <div class="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div class="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-cyan-500 to-blue-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                </div>
                <div class="blur-[60px] absolute top-[70%] left-[70%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                    <div class="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-red-700 to-pink-500 w-[68.5625rem] [aspect-ratio:1097/845]"></div>
                </div>
                <div class="flex flex-col p-10 h-full relative z-50">
                    <div class="w-full flex max-sm:flex-col-reverse relative z-10 items-center text-center">
                        <div class="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-5">
                            <span class="duration-300 text-lg md:text-xl font-semibold inline-block">CaseStudy</span>
                            <div class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-balance max-w-lg mx-auto">Transforming Businesses Worldwide - 100+ Success Stories and Counting</div>
                            <div>
                                <a href="https://www.imgglobalinfotech.com/casestudy.php" class="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View All CaseStudy</a>
                            </div>
                        </div>
                        <div class="grow-0 shrink-0 w-[1px] overflow-hidden opacity-0">
                            <div class="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    </section>

    <div class="bg-white">
                                <div class="py-6 md:py-8 lg:py-16 select-none">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="relative isolate overflow-hidden text-center justify-center bg-gray-900 px-6 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24">
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 pointer-events-none" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#l2200)" fill-opacity="0.7"></circle>
                <defs>
                    <radialGradient id="l2200">
                        <stop offset="0.5" stop-color="#9333ea"></stop>
                        <stop offset="1" stop-color="#db2777"></stop>
                    </radialGradient>
                </defs>
            </svg>
            <div class="absolute inset-x-0 top-0 h-96 z-0 text-white/20 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
                <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="ryhhgfbyi" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                            <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ryhhgfbyi)"></rect>
                </svg>
            </div>
            <div class="mx-auto max-w-3xl lg:mx-0 lg:flex-auto py-6 md:py-8 lg:py-16 lg:text-left relative z-[1]">
                <div class="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight text-white font-normal text-center empty:hidden">            Let's turn your <span class="font-bold bg-gradient-to-r from-gray-100 via-sky-400 to-gray-100 bg-clip-text text-white">business idea into reality</span>
        </div>
                <p class="mt-6 text-base md:text-lg md:leading-8 text-gray-300 text-center empty:hidden">            Do you want to experience the best-in-class quality mobile apps? Send us your inquiry and one of our executives will catch you up in no time by Call, Email or Skype.
        </p>
                <div class="md:mt-10 mt-5 flex items-center justify-center gap-x-6 empty:hidden">
                                <a href="https://www.imgglobalinfotech.com/request-a-quote.php" class="rounded-md rounded-br-none bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Book A Discovery Call</a>
                        </div>
            </div>
        </div>
    </div>
</div>   
    </div>

    <div class="bg-white relative py-8 sm:pb-16 lg:pb-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
            <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ryhhgfby" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                        <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ryhhgfby)"></rect>
            </svg>
        </div>
        <p class="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance">
            <span class="font-normal">Wide Range of </span> 
            <span class="font-bold text-[#064a77]"> Industries Covered By Us!</span>
        </p>
        <div class="md:text-base text-sm text-black/70 mt-3 text-balance">
            Discover the endless possibilities with our versatile mobile app and web development solutions. From tech to healthcare, we cater to a diverse array of industries, ensuring innovation and excellence across every sector. Explore the major sector we deal in!
        </div>
        
        <div class="flex flex-row flex-wrap w-full gap3 pt-8 font-bold md:text-base text-sm uppercase text-white">
            <div class="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                <a href="https://www.imgglobalinfotech.com/fintech-software-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/bank-and-finance-800w.webp?id=06d3da2672e9cf65cfaf780fc2c457aa" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/bank-and-finance-480w.webp?id=c41a64b149fe95697a4802fbf63b3813 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/bank-and-finance-800w.webp?id=06d3da2672e9cf65cfaf780fc2c457aa 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/bank-and-finance-800w.webp?id=06d3da2672e9cf65cfaf780fc2c457aa" alt="Banking and Finance Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Banking and Finance</div>
                </a>
            </div>
            <div class="xl:w-1/3  md:w-1/3 w-1/2 p-1">
                <a href="https://www.imgglobalinfotech.com/fantasy-sports-app-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="297" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/fantasy-sports-800w.webp?id=c1505da5ca5aa41b8b7d4896210aa1e1" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/fantasy-sports-480w.webp?id=fc3c9146c814e9b7ffbabc3d1ef50be2 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/fantasy-sports-800w.webp?id=c1505da5ca5aa41b8b7d4896210aa1e1 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/fantasy-sports-800w.webp?id=c1505da5ca5aa41b8b7d4896210aa1e1" alt="Fantasy Sports Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Fantasy Sports</div>
                </a>
            </div>
            <div class="xl:w-1/6  md:w-1/3 w-1/2 p-1">
                <a href="https://www.imgglobalinfotech.com/healthcare-software-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="194" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/healthcare-800w.webp?id=900d85bf6a88cd96d2a7c01672d45160" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/healthcare-480w.webp?id=41b3deb7ab1af68405537848b8ab93fb 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/healthcare-800w.webp?id=900d85bf6a88cd96d2a7c01672d45160 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/healthcare-800w.webp?id=900d85bf6a88cd96d2a7c01672d45160" alt="Healthcare Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Healthcare</div>
                </a>
            </div>
            <div class="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                <a href="https://www.imgglobalinfotech.com/edtech-software-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/edTech-solution-800w.webp?id=7f2620bbc25e74fbf45283fc2b1644ba" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/edTech-solution-480w.webp?id=cd3e904b5d21c784b02778b44520019e 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/edTech-solution-800w.webp?id=7f2620bbc25e74fbf45283fc2b1644ba 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/edTech-solution-800w.webp?id=7f2620bbc25e74fbf45283fc2b1644ba" alt="EdTech Solution Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">EdTech Solution</div>
                </a>

            
            </div>
            <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full p-1">
                <a href="https://www.imgglobalinfotech.com/travel-app-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/travel-and-tourism-800w.webp?id=d42d53341e4cc3a7fe874747ad39e667" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/travel-and-tourism-480w.webp?id=77e6bd2cbc47771fc15598e425162e3d 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/travel-and-tourism-800w.webp?id=d42d53341e4cc3a7fe874747ad39e667 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/travel-and-tourism-800w.webp?id=d42d53341e4cc3a7fe874747ad39e667" alt="Travel and Tourism Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Travel and Tourism</div>
                </a>

            
            </div>
            <div class="xl:w-1/2 md:w-1/3 sm:w-1/2 w-full p-1">
                <a href="https://www.imgglobalinfotech.com/media-and-entertainment-app-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="600" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/media-and-entertainment-800w.webp?id=486432f05a2fbe2524bfad9eb7d157c4" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/media-and-entertainment-480w.webp?id=c8f898e3ef53641a4d501a369bd12356 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/media-and-entertainment-800w.webp?id=486432f05a2fbe2524bfad9eb7d157c4 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/media-and-entertainment-800w.webp?id=486432f05a2fbe2524bfad9eb7d157c4" alt="Media and Entertainment Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Media and Entertainment</div>
                </a>
            </div>
            <div class="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                <a href="https://www.imgglobalinfotech.com/" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/retail-and-ecommerce-app-800w.webp?id=ba8f291a2fdda0aadadeb13ed979aefd" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/retail-and-ecommerce-app-480w.webp?id=1f6606f21ca43e33cb6e645193dd0286 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/retail-and-ecommerce-app-800w.webp?id=ba8f291a2fdda0aadadeb13ed979aefd 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/retail-and-ecommerce-app-800w.webp?id=ba8f291a2fdda0aadadeb13ed979aefd" alt="Retail and eCommerce App Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Retail and eCommerce App</div>
                </a>
            </div>
            <div class="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                <a href="https://www.imgglobalinfotech.com/logistics-software-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/logistics-services-app-800w.webp?id=87e8b6c638d8678858b01caee9674f0f" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/logistics-services-app-480w.webp?id=ac373819b23bcb233346daaa1b589568 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/logistics-services-app-800w.webp?id=87e8b6c638d8678858b01caee9674f0f 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/logistics-services-app-800w.webp?id=87e8b6c638d8678858b01caee9674f0f" alt="Logistics Services App Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Logistics Services App</div>
                </a>

            
            </div>
            <div class="xl:w-1/6 md:w-1/3 w-1/2 p-1">
                <a href="https://www.imgglobalinfotech.com/social-media-app-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="194" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/social-app-800w.webp?id=78e85d77a33593c72dba3e043d0b3ea9" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/social-app-480w.webp?id=b616f315cc33a6848cbcc67b743f2d4c 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/social-app-800w.webp?id=78e85d77a33593c72dba3e043d0b3ea9 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/social-app-800w.webp?id=78e85d77a33593c72dba3e043d0b3ea9" alt="Social App Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Social App</div>
                </a>
            </div>
            <div class="xl:w-1/3 md:w-1/2 w-1/2 p-1">
                <a href="https://www.imgglobalinfotech.com/real-estate-app-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="397" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-3840w.webp?id=9434949139f29fbe1ec8ffa54333f45f" sizes="(min-width: 1280px) 397px, calc(49.17vw - 30px)" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-16w.webp?id=9ec5e395f5c741e3cab31a14faa66092 16w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-32w.webp?id=0cfea1b39afdbec82346b9cfad84f06b 32w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-48w.webp?id=bd1591510b8233a5a20823e6c8463527 48w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-64w.webp?id=711a1d09b62f8e57cc30f4c8ab975a73 64w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-96w.webp?id=c3b911348e4c0a66327d45851965676b 96w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-128w.webp?id=53058cfeee2b674831d8272b6d9c2209 128w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-256w.webp?id=5419707312197a1cc0679d854367fd19 256w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-384w.webp?id=29593a3d00f78d0eaa18fecc58bbad8a 384w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-640w.webp?id=08402ee833e23e516093b6b38b251660 640w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-750w.webp?id=02c792065589ccc09fe9d8fc23fa5a90 750w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-828w.webp?id=e0b0cd8386a215cff50277d1634b453c 828w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-1080w.webp?id=5c5f804c44dd60bc674ccb4c593224bc 1080w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-1200w.webp?id=d674870ff1f048b0b2657ffff993dc64 1200w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-1920w.webp?id=2d2e6bde161ec3b83a2e746526dbabb2 1920w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-2048w.webp?id=35ad83ca5e2cb85273854b3429760399 2048w, 
                        https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-3840w.webp?id=9434949139f29fbe1ec8ffa54333f45f 3840w
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/real-estate-3840w.webp?id=9434949139f29fbe1ec8ffa54333f45f" alt="Real Estate Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Real Estate</div>
                </a>
            </div>
            <div class="xl:w-1/4 md:w-1/2 sm:w-1/2 w-full p-1">
                <a href="https://www.imgglobalinfotech.com/event-app-development.php" class="relative text-decoration-none group flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                <img class="size-full object-cover duration-1000 group-hover:scale-150" width="296" height="222" src="https://www.imgglobalinfotech.com/public/tailwind/img/on-demand-800w.webp?id=9e6873892eb14e8d3200e7cfd74fdb4e" srcset="
                        https://www.imgglobalinfotech.com/public/tailwind/img/on-demand-480w.webp?id=876cacb5ddc4621f50667f4e9c8b70b1 1x,
                        https://www.imgglobalinfotech.com/public/tailwind/img/on-demand-800w.webp?id=9e6873892eb14e8d3200e7cfd74fdb4e 2x
                    " data-src="https://www.imgglobalinfotech.com/public/tailwind/img/on-demand-800w.webp?id=9e6873892eb14e8d3200e7cfd74fdb4e" alt="Event management Icon"/>

                    <div class="group absolute left-0 bottom-0 w-full h-16 group-hover:h-full flex items-center justify-center text-center duration-1000 group-hover:opacity-75 z-20">Event management</div>
                </a>
            </div>
        </div>
    </div>
    </div>

    <div class="relative bg-gray-900 py-6 md:py-8 lg:py-16 select-none text-white">
    <div class="w-full">
        <div class="flex max-md:flex-col-reverse max-w-7xl mx-auto px-6 lg:px-8 items-center">
            <div class="swiper reviewSwiper rounded-2xl md:w-1/2 w-full pb-7 swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper="{
                    &quot;slidesPerView&quot;: 1,
                    &quot;spaceBetween&quot;: 10,
                    &quot;speed&quot;: 500,
                    &quot;autoplay&quot;: {&quot;enabled&quot;: true, &quot;delay&quot;: 2500},
                    &quot;loop&quot;: true,
                    &quot;pagination&quot;: {
                        &quot;el&quot;: &quot;.swiper-pagination&quot;,
                        &quot;dynamicBullets&quot;: true
                    }
                }">
                <div class="swiper-wrapper" id="swiper-wrapper-6b587e02ae576dc0" aria-live="off">
                    <div class="swiper-slide p-8 pb-12 swiper-slide-active swiper-slide-next" role="group" aria-label="1 / 1" data-swiper-slide-index="0" style={{ width: '608px', marginRight: '10px' }}>
                        <a href="https://youtu.be/dTdXaPxCbZw?si=9M-Wpivc0aUJCvxA" class="p-1 bg-gray-700 relative w-full rounded-2xl aspect-video glightbox3 block" data-gallery="gallery1">
                            <div class="overflow-hidden rounded-2xl ring-2 ring-offset-8 ring-white ring-offset-gray-900">
                                <span class="absolute inset-0 z-30 flex items-center justify-center *:size-16 *:rounded-full last:*:bg-white *:text-[#064a77] last:*:shadow-lg last:*:shadow-[#064a77] last:*:relative last:*:z-30 first:*:z-20 first:*:absolute first:*:inset-0 first:*:m-auto first:*:animate-ping">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                                </span>
                                <img class="aspect-video object-cover h-auto w-full z-0 duration-[3000ms] rounded-2xl" width="256" height="320" src="https://www.imgglobalinfotech.com/public/tailwind/img/reviewLachlanJames-640w.webp?id=5bbafb05dac28bdcb2837a17fefa6f63" srcset="https://www.imgglobalinfotech.com/public/tailwind/img/reviewLachlanJames-256w.webp?id=1264a554fc0b9c3194e4ede2586c8055 1x, https://www.imgglobalinfotech.com/public/tailwind/img/reviewLachlanJames-640w.webp?id=5bbafb05dac28bdcb2837a17fefa6f63 2x" data-src="https://www.imgglobalinfotech.com/public/tailwind/img/reviewLachlanJames-640w.webp?id=5bbafb05dac28bdcb2837a17fefa6f63" alt="Youtube Review"/>
                            </div>
                            <div class="flex rounded-xl rounded-t-none items-center sm:justify-center absolute inset-x-1 -bottom-16 top-auto z-[1] before:absolute before:inset-6 before:z-[1] before:bg-gradient-to-t before:backdrop-blur-xl before:rounded-xl py-10 before:from-violet-900/70 before:to-violet-900/70 before:ring-8 before:ring-gray-900">
                                <div class="w-full relative z-[3] text-center">
                                    <div class="text-base md:text-lg font-bold leading-6 tracking-tight">Lachlan James</div>
                                    <div class="mt-1 text-sm md:text-sm opacity-80">Founder, Neuronomics (Austrlia)</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination !mb-0 *:!bg-white swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic swiper-pagination-lock" style={{ width: '40px' }}><span class="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main" aria-current="true" style={{ left: '0px' }}></span></div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            <div class="md:w-1/2 w-full">
                <div class="flex flex-col">
                    <p class="
                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white text-balance text-center
            
                        first:*:font-normal
            
                        last:*:font-bold last:*:text-white
                    "><span>What Our Clients Industries Covered By Us! </span> 
                        <span> And Elevate Your Expectations!</span></p>
                    <div class="md:text-base text-sm text-white/70 mt-3 text-balance text-center">Dive into the testimonials that paint a vivid picture of our journey with our potential client so far. Take a glimpse into our exceptional assistance and begin your success story with us today.</div>
                </div>
            </div>
        </div>
    </div>
   </div>
    </>
  );
}
