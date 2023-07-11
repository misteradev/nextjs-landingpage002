import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

//Import section
import Hero from '@/components/Hero'
import Howwework from '@/components/Howwework'
import Project from '@/components/Project'
import Feature from '@/components/Feature'
import Client from '@/components/Client'
import Questions from '@/components/Questions'
import Startup from '@/components/Startup'
import Blog from '@/components/Blog'

type Props = {}

export default function index({ }: Props) {
   return (
      <>
         <Head>
            <title>HomePage | misteradev</title>
            <meta name='homepage' content='myhomepage' />
         </Head>
         <section>
            <Hero />
            <Howwework />
            <Project />
            <Feature />
            <Client />
            <Questions />
            <Startup />
            <Blog />
         </section>
      </>
   )
}