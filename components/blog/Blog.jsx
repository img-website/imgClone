"use client";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Blog = () => {
  return (
    <section className="relative py-6 md:py-8 lg:py-16 text-white mt-12">
      <div className="mx-auto max-w-7xl lg:px-8 px-6">
        <div className="mx-auto px-4 sm:px-6 md:max-w-4xl md:px-4 lg:px-2 relative pb-5">
          <p class="max-md:text-xl/tight max-xl:text-2xl/tight text-3xl/tight tracking-[-0.04em] text-black text-center">
            <span class="font-normal block pb-3">
              Follow Our Blogs for the Latest Innovations and Industry Trends!
            </span>
            <span class="font-bold text-theme1">
              {" "}
              Discover our informative blogs to keep up with the latest
              innovations and trends. Stay updated, stay ahead.
            </span>
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 2.3, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper [&_.swiper-slide]:rounded-2xl [&_.swiper-slide]:h-auto [&_.swiper-slide]:overflow-hidden

            [&_.swiperInner]:p-1 [&_.swiperInner]:bg-gray-700 [&_.swiperInner]:relative [&_.swiperInner]:size-full [&_.swiperInner]:rounded-[20px] [&_.swiperInner]:overflow-hidden
            
            [&_img]:w-full [&_img]:aspect-[4/5] [&_img]:overflow-hidden [&_img]:rounded-[20px] [&_img]:z-0 [&_img]:duration-[3000ms]

            [&_.content]:mt-10 [&_.content]:flex [&_.content]:rounded-[20px] [&_.content]:rounded-t-none [&_.content]:items-center [&_.content]:sm:justify-center [&_.content]:absolute [&_.content]:inset-1 [&_.content]:top-auto [&_.content]:z-[1] before:[&_.content]:absolute before:[&_.content]:inset-3 before:[&_.content]:z-[1] before:[&_.content]:bg-gradient-to-t before:[&_.content]:backdrop-blur-xl before:[&_.content]:rounded-xl [&_.content]:py-8

            [&_.contentInner]:w-full [&_.contentInner]:relative [&_.contentInner]:z-[3] [&_.contentInner]:text-center
 
            [&_.title]:text-base [&_.title]:md:text-lg [&_.title]:font-bold [&_.title]:leading-6 [&_.title]:tracking-tight

            [&_.tagline]:mt-1 [&_.tagline]:text-sm [&_.tagline]:md:text-sm [&_.tagline]:opacity-80"
        >
          <SwiperSlide>
            <div className="swiperInner">
              <a
                href="javascript:;"
                className="flex max-w-xl flex-col items-start justify-between h-full bg-white rounded-[20px] shadow-md shadow-gray-300"
              >
                <Image
                  className="w-full !aspect-[385/221] rounded-[20px]"
                  width="1000"
                  height="1000"
                  src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/ares-port.png"
                  alt="Features of dating app"
                  title="Top 30 Features of Dating Apps   "
                />
                <div className="w-full p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time datetime="2024-5-24" className="text-gray-500">
                      Sep 09, 2024
                    </time>
                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      MOBILE APP
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                      Top 30 Features of Dating Apps{" "}
                    </div>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      The first personal ads were in a newspaper in the late
                      1600s and almost everybody saw that. And you know what, we
                      do the...
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Image
                      srcset="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740"
                      alt="lorem ipsum"
                      className="!size-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">Written by</p>
                      <p className="text-gray-600">lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperInner">
              <a
                href="javascript:;"
                className="flex max-w-xl flex-col items-start justify-between h-full bg-white rounded-2xl shadow-md shadow-gray-300"
              >
                <Image
                  className="w-full !aspect-[385/221] rounded-2xl"
                  width="1000"
                  height="1000"
                  src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/ares-port.png"
                  alt="Dating App Development Cost"
                  title="How Much Does It Cost To Develop A Dating App? "
                />
                <div className="w-full p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time datetime="2024-5-24" className="text-gray-500">
                      Sep 17, 2024
                    </time>
                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      MOBILE APP
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                      How Much Does It Cost To Develop A Dating App?{" "}
                    </div>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Have you ever thought about making great dating apps like
                      OkCupid, Tinder, Bumble, or Hinge? These apps provide
                      useful f...
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Image
                      srcset="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740"
                      alt="lorem ipsum"
                      className="!size-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">Written by</p>
                      <p className="text-gray-600">lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperInner">
              <a
                href="javascript:;"
                className="flex max-w-xl flex-col items-start justify-between h-full bg-white rounded-[20px] shadow-md shadow-gray-300"
              >
                <Image
                  className="w-full !aspect-[385/221] rounded-[20px]"
                  width="1000"
                  height="1000"
                  src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/uber.png"
                  alt="cost-to-develop-an-app-like-Uber"
                  title="How Much Does It Cost to Develop A Bike Taxi App Like Rapido?"
                />
                <div className="w-full p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time datetime="2024-5-24" className="text-gray-500">
                      Sep 11, 2024
                    </time>
                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      MOBILE APP
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                      How Much Does It Cost to Develop A Food Delivery App Like
                      UberEats?{" "}
                    </div>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      In a world that's constantly on the move, convenience has
                      become the holy grail of urban living. Whether it's a ...
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Image
                      srcset="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740"
                      alt="lorem ipsum"
                      className="!size-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">Written by</p>
                      <p className="text-gray-600">lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiperInner">
              <a
                href="javascript:;"
                className="flex max-w-xl flex-col items-start justify-between h-full bg-white rounded-[20px] shadow-md shadow-gray-300"
              >
                <Image
                  className="w-full !aspect-[385/221] rounded-[20px]"
                  width="1000"
                  height="1000"
                  src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/portfolio/axle-port.png"
                  alt="taxi-booking-mobile-app-development"
                  title="Taxi Booking Mobile App Development Cost &amp; Features 2024"
                />
                <div className="w-full p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time datetime="2024-5-24" className="text-gray-500">
                      Sep 05, 2024
                    </time>
                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      ON DEMAND
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                      Taxi Booking Mobile App Development Cost &amp; Features
                      2024{" "}
                    </div>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      The changed scenes of the commutation make it quite
                      convenient for the drivers and riders to connect. With
                      Ola, Uber, an...
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Image
                    width="1000"
                    height="1000"
                    quality="90"
                    loading="lazy"
                      src="https://img.freepik.com/free-photo/portrait-handsome-smiling-businessman-office_1163-5471.jpg?t=st=1726723720~exp=1726727320~hmac=7fdb287f8849da8fdc20ab87806f4753bde40ee7f4bdf453132123ab1f8021f4&w=740"
                      alt="lorem ipsum"
                      className="!size-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">Written by</p>
                      <p className="text-gray-600">lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
