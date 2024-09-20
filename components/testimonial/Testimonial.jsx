import React from 'react'
import Image from "next/image";


function Testimonial() {
    return (
        <>
            <div className="overflow-hidden bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative py-10 sm:px-6 lg:py-14">
                    <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
                        <div className="flex flex-col">
                            <p className="
                        max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white
            
                        first:*:font-normal
            
                        last:*:font-bold last:*:text-theme2
                    "><span>Loved by business and  </span>
                                <span> individuals across the globe!</span></p>
                            <div className="md:text-base text-sm text-white/70 mt-3">
                                Delve into the Testimonials that vividly showcase our partnership with esteemed clients. Experience the exceptional service we offer, and let your success story begin with us today.
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex h-auto">
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className="flex-auto p-4 md:p-6">
                                    <p className="text-base italic md:text-lg text-gray-800">
                                        " With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience. "
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                                    <div className="flex items-center gap-x-3">
                                        <div className="shrink-0">
                                            <Image width="1000" height="1000" quality="90" loading='lazy' className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                        </div>

                                        <div className="grow">
                                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                                                Josh Tyson
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Product Manager | Capsule
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-auto">
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className="flex-auto p-4 md:p-6">
                                    <p className="text-base italic md:text-lg text-gray-800">
                                        " In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team. "
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                                    <div className="flex items-center gap-x-3">
                                        <div className="shrink-0">
                                            <Image width="1000" height="1000" quality="90" loading='lazy' className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                        </div>

                                        <div className="grow">
                                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                                                Luisa
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Senior Director of Operations | Fitbit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-auto">
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className="flex-auto p-4 md:p-6">
                                    <p className="text-base italic md:text-lg text-gray-800">
                                        " Refreshing and Thought provoking design and it changes my view about how I design the websites. Great typography, modern clean white design, nice tones of the color. "
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                                    <div className="flex items-center gap-x-3">
                                        <div className="shrink-0">
                                            <Image width="1000" height="1000" quality="90" loading='lazy' className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar" />
                                        </div>

                                        <div className="grow">
                                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                                                Alisa Williams
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Entrepreneur | Happy customer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 justify-center">
                        <div className='text-center'>
                            <h4 className="text-lg sm:text-xl font-semibold text-white">Accuracy rate</h4>
                            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">99.95%</p>
                            <p className="mt-1 text-gray-400">in fulfilling orders</p>
                        </div>

                        <div className='text-center'>
                            <h4 className="text-lg sm:text-xl font-semibold text-white">Startup businesses</h4>
                            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">2,000+</p>
                            <p className="mt-1 text-gray-400">partner with Preline</p>
                        </div>

                        <div className='text-center'>
                            <h4 className="text-lg sm:text-xl font-semibold text-white">Happy customer</h4>
                            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">85%</p>
                            <p className="mt-1 text-gray-400">this year alone</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Testimonial
