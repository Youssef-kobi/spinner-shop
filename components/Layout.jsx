import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Head>
        <title>Heels shop</title>
      </Head>
      <div className='flex flex-col justify-between h-screen'>
        <header>
          <Navbar />
        </header>
        <main className=' max-w-screen-2xl m-auto w-full'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default Layout
