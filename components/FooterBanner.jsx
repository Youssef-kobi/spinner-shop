import React from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/client'

const FooterBanner = ({
  bannerData: { image, smallText, midText, largeText1, saleTime },
}) => {
  return (
    <div className='py-20 px-10 mt-24 bg-red-700 relative h-[580px] rounded-2xl text-base'>
      <div className='absolute -top-20 w-44 h-44 rotate-10'>
        <Image
          src={urlFor(image[0]).url()}
          alt='headphones'
          fill={true}
          draggable={false}
          sizes='500px'
          className='rounded-3xl'
        />
      </div>
      <div className='absolute z-10'>
        <p className='text-xl'>{smallText}</p>
        <h3 className='mt-1 text-6xl'>{midText}</h3>
        <h1 className='text-white-pure text-9xl uppercase -ml-6'>
          {largeText1}
        </h1>
        <p className='mt-4 px-2 text-xl font-extrabold'>{saleTime}</p>
      </div>
      <div>
        <div className='absolute bottom-0 opacity-80 right-0 w-44 h-44 rotate-10'>
          <Image
            src={urlFor(image[1]).url()}
            alt='headphones'
            fill={true}
            draggable={false}
            sizes='500px'
            className='rounded-3xl'
          />
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
