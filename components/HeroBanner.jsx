import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
// import { urlFor } from '../lib/client'
import spinnerImg from '../assets/spinner.png'

const HeroBanner = () => {
  return (
    <div className=' flex justify-center bg-gradient-to-br to-blue-gem-400 via-blue-gem-500 from-blue-gem-900'>
      <div className=' w-4/5 flex flex-col md:flex-row items-center justify-center h-screen'>
        <div className='w-full md:w-1/2'>
          <h1
            className='text-4xl sm:text-6xl md:text-8xl font-bold  text-gray-200 mb-4 '
            data-aos='fade-right'
            data-aos-mirror='true'
          >
            Get in the Spin of Things
          </h1>
          <p
            className='text-xl sm:text-2xl md:text-4xl italic text-blue-gem-300  mb-8'
            data-aos='fade-left'
            data-aos-delay='200'
          >
            Experience the Ultimate Relaxation with Our Spinner Toys
          </p>
          <button
            className='bg-violet-500 hover:bg-violet-600 hover:scale-110  duration-300 text-white font-bold py-4 px-6  rounded-full'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            Shop Now
          </button>
        </div>
        <div
          className='w-full md:w-1/2 flex items-center justify-center'
          data-aos='zoom-in-right'
          data-aos-delay='200'
        >
          <Image
            src={spinnerImg}
            alt='Spinner Image'
            width={800}
            height={800}
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
