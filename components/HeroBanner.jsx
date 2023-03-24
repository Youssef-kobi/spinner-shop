import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ bannerData }) => {
  return (
    <div className='py-20 px-10 relative h-[580px] rounded-2xl text-base'>
      <div className='absolute z-10'>
        <p className='text-xl'>{bannerData.smallText}</p>
        <h3 className='mt-1 text-6xl'>{bannerData.midText}</h3>
        <h1 className='text-white-pure text-9xl uppercase -ml-6'>
          {bannerData.largeText1}
        </h1>
        <Link href={`/product/${bannerData.product}`}>
          <button
            className=' rounded-2xl py-2 px-4 bg-red-500 text-white-pure border-none mt-10 text-lg font-medium'
            type='button'
          >
            {bannerData.buttonText}
          </button>
        </Link>
      </div>
      {/* <video className='' autoPlay playsInline muted loop>
        <source src='/heels.mp4' type='video/mp4' />
      </video> */}
      <Image
        src={urlFor(bannerData.image[0]).url()}
        alt='headphones'
        fill={true}
        draggable={false}
        sizes='100vw'
        className='rounded-3xl'
      />
      <div>
        <div className='absolute right-[10%] bottom-[5%] w-3/4 flex flex-col text-blue-dark'>
          <h5 className='mb-3 font-bold text-base text-black-faded self-end '>
            Description
          </h5>
          <p className='font-thin text-gray-base text-right '>
            {bannerData.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
