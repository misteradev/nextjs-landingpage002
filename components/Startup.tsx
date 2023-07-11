import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Content
import { contents } from '@/data/content'

// React icon
import { HiOutlineArrowLongRight } from "react-icons/hi2";

type Props = {}

export default function Startup({}: Props) {
  return (
    <div className='my-10 mb-16'>
      <div className='container md:grid grid-cols-2'>
        <div className='group relative'>
          <div>
            <Image src={contents.startup.img} alt='startup'/>
            <div className='absolute inset-0 bg-blue2 opacity-60'></div>
          </div>
          <div className='absolute inset-0 md:p-20 px-5 py-10'>
            <div className='text-white'>
              <h4 className='md:text-6xl text-4xl font-medium'>{contents.startup.titleLeft}</h4>
              <p className='my-4'>{contents.startup.descLeft}</p>
            </div>
          </div>
        </div>
        <div className='bg-blue2 text-white md:px-24 px-5 py-16'>
          <h4 className='text-3xl font-medium'>{contents.startup.titleRight}</h4>
          <p className='my-5 text-gray3'>{contents.startup.descRight}</p>
          <div>
            <form>
              <div>
                <input className='w-full p-3 mb-4 rounded-md bg-blue2 border-[1px] border-gray3' type="text" placeholder='Your Name'/>
                <input className='w-full p-3 mb-4 rounded-md bg-blue2 border-[1px] border-gray3' type="email" placeholder='Email'/>
                <input className='w-full p-3 mb-4 rounded-md bg-blue2 border-[1px] border-gray3' type="text" placeholder='Posted your Figma design URL'/>
                <button className='text-center bg-yellow1 text-black p-4 rounded-full w-full font-medium'>
                  <Link href="/">Send an Inquily</Link>
                </button>
                <Link href="/" className='flex gap-8 justify-center mt-8 items-center hover:underline underline-offset-4'>
                  <p>Get in touch with us</p>
                  <HiOutlineArrowLongRight className='text-2xl'/>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}