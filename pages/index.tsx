import React from 'react'
import Head from 'next/head'

type Props = {}

export default function index({}: Props) {
  return (
    <>
    <Head>
      <title>HomePage | misteradev</title>
      <meta name='homepage' content='myhomepage'/>
    </Head>
    <div>index</div>
    </>
  )
}