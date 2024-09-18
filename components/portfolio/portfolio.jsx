"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const PortfolioSection = () => {

  return (
    <section className='relative bg-gray-900 py-6 md:py-8 lg:py-16 text-white'>
      <div className="mx-auto max-w-7xl lg:px-8 px-6">
        <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-2 relative pb-5">
          <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white text-balance text-center">
            <span>Get a Glimpse of Our Portfolio </span>
            <span> and Raise Your Expectations!</span>
          </p>
          <div className="md:text-base text-sm text-white/70 mt-3 text-balance text-center">
            {/* {/ Add any text or content here if needed /} */}
          </div>
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
    
           className="mySwiper [&_.swiper-slide]:rounded-2xl [&_.swiper-slide]:overflow-hidden

            [&_.swiperInner]:p-1 [&_.swiperInner]:bg-gray-700 [&_.swiperInner]:relative [&_.swiperInner]:w-full [&_.swiperInner]:rounded-2xl [&_.swiperInner]:overflow-hidden
            
            [&_img]:w-full [&_img]:aspect-[4/5] [&_img]:overflow-hidden [&_img]:rounded-xl [&_img]:z-0 [&_img]:duration-[3000ms]

            [&_.content]:mt-10 [&_.content]:flex [&_.content]:rounded-xl [&_.content]:rounded-t-none [&_.content]:items-center [&_.content]:sm:justify-center [&_.content]:absolute [&_.content]:inset-1 [&_.content]:top-auto [&_.content]:z-[1] before:[&_.content]:absolute before:[&_.content]:inset-3 before:[&_.content]:z-[1] before:[&_.content]:bg-gradient-to-t before:[&_.content]:backdrop-blur-xl before:[&_.content]:rounded-xl [&_.content]:py-8

            [&_.contentInner]:w-full [&_.contentInner]:relative [&_.contentInner]:z-[3] [&_.contentInner]:text-center
 
            [&_.title]:text-base [&_.title]:md:text-lg [&_.title]:font-bold [&_.title]:leading-6 [&_.title]:tracking-tight

            [&_.tagline]:mt-1 [&_.tagline]:text-sm [&_.tagline]:md:text-sm [&_.tagline]:opacity-80"
      >
        <SwiperSlide>
          <div className="swiperInner">
                <div>
                    <Image width="1000" height="1000" src="https://images.pexels.com/photos/5835018/pexels-photo-5835018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Guidely" />
                </div>
                <div className="content before:from-fuchsia-900/70 before:to-fuchsia-900/70">
                    <div className="contentInner">
                        <div className="title">Getondoor</div>
                        <div className="tagline">grocery delevery App</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperInner">
                <div>
                    <Image width="1000" height="1000" src="https://images.pexels.com/photos/6238039/pexels-photo-6238039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Guidely" />
                </div>
                <div className="content before:from-fuchsia-900/70 before:to-fuchsia-900/70">
                    <div className="contentInner">
                        <div className="title">Guidely</div>
                        <div className="tagline">Exam Preparation App</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperInner">
                <div>
                    <Image width="1000" height="1000" src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Guidely" />
                </div>
                <div className="content before:from-fuchsia-900/70 before:to-fuchsia-900/70">
                    <div className="contentInner">
                        <div className="title">Musculier</div>
                        <div className="tagline">Gym mangment app App</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="swiperInner">
                <div>
                    <Image width="1000" height="1000" src="https://images.pexels.com/photos/1324990/pexels-photo-1324990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Guidely" />
                </div>
                <div className="content before:from-fuchsia-900/70 before:to-fuchsia-900/70">
                    <div className="contentInner">
                        <div className="title">Taximo</div>
                        <div className="tagline">taxi management App</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

export default PortfolioSection;