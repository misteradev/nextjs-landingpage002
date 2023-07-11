import React from 'react'
import Image from 'next/image';

//Content
import { contents } from '@/data/content'

type Props = {}

export default function Feature({}: Props) {
  return (
    <section className='bg-gray1 py-16'>
        <div className='container'>
            <div className='text-center lg:mx-96'>
              <h4 className='text-sm font-medium mt-5'>{contents.features.title1}</h4>
              <h3 className='text-4xl font-semibold mt-4'>{contents.features.title2}</h3>
            </div>
            <div className='md:grid grid-cols-3 gap-4 mt-8'>
              {contents.features.card.map((item, i) =>(
                <div key={i} className='bg-white shadow-sm mt-4 md:mt-0 px-6 py-8 rounded-lg text-center md:text-start'>
                  <Image className='inline-block mx-auto' src={item.icon} alt='icon'/>
                  <h4 className='font-medium text-xl py-3'>{item.title}</h4>
                  <p className='text-blue3'>{item.desc}</p>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}