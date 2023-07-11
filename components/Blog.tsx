import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//contents
import { contents } from '@/data/content'

//Icon
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {

}

export default function Blog({}: Props) {
  return (
    <div className='my-5'>
        <div className='container'>
            <h4 className='text-4xl font-semibold'>{contents.blog.title}</h4>
            <div className='md:grid grid-cols-3 gap-10 my-10 mb-20'>
                {contents.blog.blogCard.map((card, i) => (
                    <div key={i}>
                        <Image className='w-full mt-5 md:mt-0 shadow-md' src={card.img} alt={card.alt}/>
                        <p className='mt-5 text-blue3 font-semibold'>{card.date}</p>
                        <h4 className='md:my-5 my-2 text-xl font-semibold'>{card.title}</h4>
                        <p className='text-blue3'>{card.desc}</p>
                        <button className='md:mt-5 text-blue3 font-medium flex gap-5 items-center hover:underline underline-offset-4'>
                            <Link className='lg:block hidden' href={card.path}>Read more</Link>
                            <HiOutlineArrowNarrowRight className='text-2xl lg:block hidden'/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}