import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ setImageIndex, product: { image, name, slug, price } }) => {
  return (
    <Link
      href={`/product/${slug.current}`}
      onClick={() => setImageIndex(0)}
      className='w-56 h-72 m-6 border text-blue-dark rounded-xl overflow-auto hover:scale-110 hover:duration-500 duration-500 flex flex-col'
    >
      <div className='relative w-full h-60'>
        <Image
          src={urlFor(image && image[0]).url()}
          alt='headphones'
          fill={true}
          sizes={'100%'}
          className='mx-auto w-full'
        />
      </div>
      <div className='mx-2'>
        <p className=''>{name}</p>
        <p className='font-bold'>{price} MAD</p>
      </div>
    </Link>
  )
}

export default Product
