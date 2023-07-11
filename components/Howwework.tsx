import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

//Content
import { contents } from '@/data/content'

// React icon
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {}

export default function Howwework({ }: Props) {
    return (
        <section className='bg-gray1 py-10 md:py-40'>
            <div className='container md:grid grid-cols-3 gap-10'>
                <div>
                    <h4 className='text-5xl font-semibold text-center md:text-start'>{contents.work.title}</h4>
                    <p className='py-4'>{contents.work.desc}</p>
                    <div className='flex gap-8 justify-center md:justify-start items-center text-blue1 mt-2 md:mt-5'>
                        <Link href="/" className='font-medium flex gap-8 items-center'>Get in touch with us<HiOutlineArrowNarrowRight className='text-2xl'/></Link>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='md:grid grid-cols-2 gap-4 items-start'>
                        {contents.work.howwork.map((item, i) => (
                            <div key={i} className='text-center md:text-start my-4 md:my-0'>
                                <Image className='inline-block mx-auto' src={item.img} alt='work' />
                                <h4 className='my-2 md:my-3 text-2xl font-medium'>{item.title}</h4>
                                <p className='text-blue3'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}