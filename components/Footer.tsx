import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { contents } from '@/data/content';
import Link from 'next/link';

type Props = {}

export default function Footer({ }: Props) {
   return (
      <footer>
         <div className='bg-blue2 lg:pt-24 pt-10 pb-5 md:pb-0'>
            <div className='container text-white md:grid grid-cols-2 gap-10 text-center md:text-start'>
               <div>
                  <div>
                     <h2 className='text-2xl font-semibold'>
                        Misteradev
                     </h2>
                     <p className='text-gray3'>
                        We are always open to discuss your project and improve your online presence.
                     </p>
                  </div>
                  <div className='md:flex gap-6 bg-yellow1 p-8 text-black mt-10'>
                     <div>
                        <h4 className='font-semibold'>Email me at</h4>
                        <p>contact@website.com</p>
                     </div>
                     <div className='mt-4 md:mt-0'>
                        <h4 className='font-semibold'>Call us</h4>
                        <p>01234 5678 28525</p>
                     </div>
                  </div>
               </div>
               <div className='px-20 mt-4 md:mt-0'>
                  <h3 className='text-4xl font-semibold'>Lets Talk!</h3>
                  <p className='text-gray3 mt-5'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                  <div className='flex gap-4 my-4 justify-center md:justify-start text-xl'>
                     <Link href="/"><FaFacebook /></Link>
                     <Link href="/"><FaTwitter /></Link>
                     <Link href="/"><FaInstagram /></Link>
                  </div>
               </div>
            </div>
         </div>
         <div className='container md:flex justify-between my-8 text-center md:text-start text-sm md:text-base'>
            <div>
               <p>Copyright 2022, Misteradev</p>
            </div>
            <div className='flex justify-center md:justify-start gap-2 md:gap-8 mt-4 md:mt-0'>
               {contents.navmenu.links.map(({ path, label }) => (
                  <ul key={label}>
                     <li><Link href={path}>{label}</Link></li>
                  </ul>
               ))}
            </div>
         </div>
      </footer>
   )
}