import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import bg from '../assets/bg.svg'
import FooterBanner from './FooterBanner'
import wave from '../assets/wave.svg'
import Image from 'next/image'


const Layout = ({ children }) => {
  return (
    <div className=''>
      <Head>
        <title>FlySpin</title>
      </Head>
      <div
        className='flex flex-col justify-between items-center overflow-hidden  '
        style={{
          backgroundImage: `url('${bg.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
        }}
      >
        <header
          className='absolute top-0 w-full flex justify-center items-center'
          data-aos='fade-down'
          data-aos-duration='1000'
        >
          <Navbar />
        </header>
        <main className='flex justify-center items-center flex-col w-5/6 lg:w-4/5'>
          {children}
        </main>
        <div className='w-full'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={wave.src}
            alt='wave'
            // fill
            width={1920}
            height={100}
            className=' text-blue-600 opacity-30'
          />
        </div>
        <footer className='bg-blue-gem-900 backdrop-blur-lg  text-blue-200 bg-opacity-30 pt-10 w-full'>
          <FooterBanner />
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default Layout
