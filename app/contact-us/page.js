import Header from '@/components/header/Header'
import React from 'react'
import Image from "next/image";
import Form from '@/components/contactForm/Form';
import Footer from '@/components/footer/Footer';

function page() {
  return (
    <>
      <Header />
      <div id="heroColor" data-color="blue">
        <span className="hidden before:from-blue-950 before:via-blue-900 before:to-blue-800 from-blue-950 via-blue-900 to-blue-800 shadow-blue-950 text-blue-700">
          <span className="via-blue-500 from-blue-100 to-blue-100 *:*:text-blue-400"></span>
          <span className="bg-blue-900 hover:bg-blue-700"></span>
        </span>
        <div className="flex w-full relative bg-slate-50  ">
          <div className="size-full relative !z-10">
            <div className="colorApply1 flex size-full items-center justify-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply  shadow-blue-950 before:from-blue-950 before:via-blue-900 before:to-blue-800">
              <span className="colorApply2 absolute inset-0 bg-cover bg-right opacity-50 rounded-b-2xl bg-gradient-to-r mix-blend-multiply shadow-blue-950 from-blue-950 via-blue-900 to-blue-800"></span>
              <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]" width="1519" height="812" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?cs=tinysrgb&fit=crop&q=80&w=1100&h=387" sizes="100vw" alt="hero1" />

              <div className="relative overflow-hidden z-10 text-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full lg:pt-40 sm:pt-32 pt-28 pb-12">
                <div className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight font-light text-white">

                  <span className="colorApply3 font-bold block text-balance pb-1 shadow-blue-950 via-blue-500"><div className="">Bring Your Business Vision to Life!</div>
                  </span>
                </div>
                <div className="max-md:text-sm text-base text-white pt-5 text-balance mx-auto w-10/12 empty:hidden"></div>
                <div className="mt-10 flex gap-4 justify-center empty:hidden"></div>
              </div>
            </div>
          </div>
        </div></div>
      <Form />
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 rounded-xl shadow-xl bg-gray-100 pb-10 -mt-10 max-lg:text-center flex flex-wrap py-12 my-8 gap-y-10 border-y border-white/20 text-black">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
          <div className="flex flex-col w-full px-3 text-sm lg:text-base">
            <div className="w-full font-bold text-base lg:text-lg pb-4">Corporate Office</div>
            <div className="w-full opacity-80 pb-1">Andhari, Mumbai</div>
            <div className="w-full opacity-80">Phone : +91-1234567890</div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
          <div className="flex flex-col w-full px-3 text-sm lg:text-base">
            <div className="w-full font-bold text-base lg:text-lg pb-4">Regional Office</div>
            <div className="w-full opacity-80 pb-1">1090, gandhi Nagar, nehru Marg, Near , Delhi - 302019</div>
            <div className="w-full opacity-80">Phone : +91-1234567890, +91-1234567890</div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
          <div className="flex flex-col w-full px-3 text-sm lg:text-base">
            <div className="w-full font-bold text-base lg:text-lg pb-4">Regional Office</div>
            <div className="w-full opacity-80 pb-1">203 Schm No.2 near city park, Kolkata</div>
            <div className="w-full opacity-80">Phone : +91-1234567890</div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page