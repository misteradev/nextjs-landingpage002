import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Content
import { contents } from '@/data/content'

// React icon
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {}

export default function Hero({ }: Props) {
    return (
        <section className='bg-blue2 py-28'>
            <div className='container md:grid grid-cols-2 gap-10'>
                <div className='text-white text-center md:text-start'>
                    <h2 className='text-5xl font-semibold'>{contents.hero.title}</h2>
                    <p className='text-gray3 pt-8'>{contents.hero.desc}</p>
                    <div className='flex gap-5 md:gap-10 my-5 md:my-10 items-center justify-center md:justify-start'>
                        <Link className='bg-yellow1 text-black font-semibold py-4 px-6 rounded-full' href="/about">View our work</Link>
                        <div className='flex gap-5 items-center'>
                            <Link href="/pricing">View pricing</Link>
                            <HiOutlineArrowNarrowRight className='text-3xl' />
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={contents.hero.heroimg} alt='hero' priority />
                </div>
            </div>
        </section>
    )
}