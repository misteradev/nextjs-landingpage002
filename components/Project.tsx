import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

//Content
import { contents } from '@/data/content'

// React icon
import { HiOutlineArrowLongRight } from "react-icons/hi2";

type Props = {}

export default function Project({}: Props) {
  return (
    <section>
        <div className='container py-24'>
            <div className='flex justify-between'>
                <h3 className='text-4xl font-semibold'>{contents.project.title}</h3>
                <div className='flex gap-8 items-center'>
                    <Link className='font-medium' href="/project">View more</Link>
                    <HiOutlineArrowLongRight className='text-3xl'/>
                </div>
            </div>
            <div className='lg:grid grid-row-2 grid-flow-col gap-5 mt-14'>
                <div className='group relative row-span-2'>
                    <Image className='h-full w-full object-cover' src={contents.project.img1} alt='image1'/>
                    <div className='absolute inset-0'>
                        <div className='flex absolute left-0 px-8 bg-blue2 h-full md:w-96 opacity-90 items-center'>
                            <div>
                                <h4 className='text-white text-4xl font-semibold'>{contents.project.title1}</h4>
                                <p className='text-white my-4'>{contents.project.desc1}</p>
                                <div className='flex gap-8 text-yellow1 hover:underline underline-offset-4'>
                                    <Link href="/project">View project</Link>
                                    <HiOutlineArrowLongRight className='text-3xl'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='group relative mt-2 lg:mt-0'>
                    <Image className='h-full w-full object-cover' src={contents.project.img2} alt='image2'/>
                    <div className='absolute inset-0'>
                        <div className='flex absolute left-0 px-20 bg-blue2 h-full w-full opacity-80 items-center'>
                            <div>
                                <h4 className='text-white text-4xl font-semibold mb-4'>{contents.project.title2}</h4>
                                <div className='flex gap-8 text-yellow1 hover:underline underline-offset-4'>
                                    <Link href="/project">View portfolio</Link>
                                    <HiOutlineArrowLongRight className='text-3xl'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-2 lg:mt-0'>
                    <Image className='h-full w-full' src={contents.project.img3} alt='image3'/>
                </div>
            </div>
        </div>
    </section>
  )
}