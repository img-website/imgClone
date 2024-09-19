import React from "react";
import Image from "next/image";


function ClientVideo() {
    return (
        <>
            <div className="relative bg-gray-900 py-6 md:py-8 lg:py-16 text-white">
                <div className="w-full">
                    <div className="flex max-md:flex-col-reverse max-w-7xl mx-auto px-6 lg:px-8 items-center">
                        <div className="rounded-2xl md:w-1/2 w-full pb-7 swiper-initialized swiper-horizontal swiper-backface-hidden">
                            <div className="">
                                <div className="p-8 pb-12">
                                    <a
                                        href="javascipt:;"
                                        className="p-1 bg-gray-700 relative w-full rounded-2xl aspect-video glightbox3 block"
                                        data-gallery="gallery1"
                                    >
                                        <div className="overflow-hidden rounded-2xl ring-2 ring-offset-8 ring-white ring-offset-gray-900">
                                            <span className="absolute inset-0 z-30 flex items-center justify-center *:size-16 *:rounded-full last:*:bg-white *:text-theme1 last:*:shadow-lg last:*:shadow-theme4 last:*:relative last:*:z-30 first:*:z-20 first:*:absolute first:*:inset-0 first:*:m-auto first:*:animate-ping">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 512 512"
                                                    height="200px"
                                                    width="200px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                                                </svg>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 512 512"
                                                    height="200px"
                                                    width="200px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                                                </svg>
                                            </span>
                                            <Image
                                                className="aspect-video object-cover h-auto w-full z-0 duration-[3000ms] rounded-2xl"
                                                width="1000"
                                                height="1000"
                                                src="https://images.pexels.com/photos/1251832/pexels-photo-1251832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt="Youtube Review"
                                            />
                                        </div>
                                        <div className="flex rounded-xl rounded-t-none items-center sm:justify-center absolute inset-x-1 -bottom-16 top-auto z-[1] before:absolute before:inset-6 before:z-[1] before:bg-gradient-to-t before:backdrop-blur-xl before:rounded-xl py-10 before:from-violet-900/70 before:to-violet-900/70 before:ring-8 before:ring-gray-900">
                                            <div className="w-full relative z-[3] text-center">
                                                <div className="text-base md:text-lg font-bold leading-6 tracking-tight">
                                                    Elven James
                                                </div>
                                                <div className="mt-1 text-sm md:text-sm opacity-80">
                                                    Founder, Robotics (London)
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="flex flex-col">
                                <p
                                    className="
                                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white text-balance text-center

                                        first:*:font-normal

                                        last:*:font-bold last:*:text-theme2
    "
                                >
                                    <span>
                                        Client Industries and Our Commitment to Excellence{" "}
                                    </span>
                                    <span> Commitment to Excellence!</span>
                                </p>
                                <div className="md:text-base text-sm text-white/70 mt-3 text-balance text-center">
                                    Explore the testimonials that beautifully illustrate our
                                    journey with valued clients. Discover the outstanding support
                                    we provide and start writing your own success story with us
                                    today.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientVideo;
