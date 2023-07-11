import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
    children: any
}

export default function Layout({children}: Props) {
  return (
    <div>
        <Navbar/>
            {children}
        <Footer/>
    </div>
  )
}