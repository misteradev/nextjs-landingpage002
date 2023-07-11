import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


//Content
import { contents } from '@/data/content'

// React icon
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type Props = {}

export default function Client({}: Props) {
  return (
    <>
    <section className='md:py-20 py-10 bg-gray1'>
        <div className='container md:grid grid-cols-3 gap-10 items-center'>
            <div className='text-center lg:text-start'>
                <h4 className='text-3xl font-semibold'>{contents.client.title}</h4>
                <p className='text-blue3'>{contents.client.desc}</p>
            </div>
            <div className='col-span-2 md:px-16 px-10 text-center mt-5 md:mt-0'>
                <h4 className='text-2xl font-medium'>{contents.client.subtitle}</h4>
                <div className='md:py-10 py-5 px-5'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".button-prev-slide",
                            prevEl: ".button-next-slide"
                          }}
                    >
                        <SwiperSlide>
                            <div className='md:flex gap-2 items-center text-center md:text-start'>
                                <Image className='w-14 inline-block rounded-full' src={contents.client.icon} alt='image1'/>
                                <div>
                                    <h4>{contents.client.name1}</h4>
                                    <p>{contents.client.dep1}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='md:flex gap-2 items-center text-center md:text-start'>
                                <Image className='w-14 inline-block rounded-full' src={contents.client.icon} alt='image1'/>
                                <div>
                                    <h4>{contents.client.name2}</h4>
                                    <p>{contents.client.dep2}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className='lg:block hidden'>
                            <HiChevronLeft className='button-next-slide top-[20%] lg:block absolute group-hover:left-0 text-4xl text-gray-800 duration-500 z-10 lg:left-[80%] bg-gray-200 hover:text-white hover:bg-blue2 p-1 md:p-2 rounded-full'/>
                            <HiChevronRight className='button-prev-slide top-[20%] absolute group-hover:right-0 text-4xl text-gray-800 bg-gray-200 p-1 md:p-2 rounded-full duration-500 z-10 right-2 hover:text-white hover:bg-blue2'/>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>  
    </>
  )
}