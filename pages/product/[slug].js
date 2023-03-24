import { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import Image from 'next/image'
import { Product } from '../../components'
import ImageMagnify from '../../components/ImageMagnify'
import { useStateContext } from '../../Context/StateContext'
import Link from 'next/link'

const ProductDetails = ({ productData, productsData }) => {
  const { image, name, details, price } = productData
  const [imageIndex, setImageIndex] = useState(0)
  const { incQty, decQty, qty, onAdd } = useStateContext()
  return (
    <div className='flex justify-between flex-wrap text-blue-dark mt-10'>
      <div className='flex justify-end pr-10 items-center w-1/2'>
        <div className='mr-4 flex flex-col'>
          {image?.map((image, i) => (
            <Image
              key={i}
              src={urlFor(image).url()}
              alt='headphones'
              width={100}
              height={100}
              onMouseEnter={() => setImageIndex(i)}
              className={`${
                imageIndex === i && 'border-2 border-red-600'
              } rounded m-1 hover:scale-125 duration-500`}
            />
          ))}
        </div>
        <div className='flex justify-center w-2/3 shadow-inner drop-shadow-xl items-center bg-gray-light rounded-3xl p-8 overflow-hidden'>
          <ImageMagnify
            src={urlFor(image && image[imageIndex]).url()}
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
      <div className=' w-1/2 font-bold'>
        <h1 className='text-2xl mt-8'>{name}</h1>
        <div className='flex items-center'>
          <p className='text-lg w-24'>{price} MAD</p>
          <span className='font-bold text-xl text-gray-400 mx-4 '>|</span>
          <div className='flex'>
            <svg
              className='w-6 h-6'
              fill='#ea580c'
              stroke='#ea580c
            }'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
              />
            </svg>
            <svg
              className='w-6 h-6'
              fill='#ea580c'
              stroke='#ea580c'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
              />
            </svg>
            <svg
              className='w-6 h-6'
              fill='#ea580c'
              stroke='#ea580c'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
              />
            </svg>
            <svg
              className='w-6 h-6'
              fill='#ea580c'
              stroke='#ea580c'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
              />
            </svg>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
              />
            </svg>
          </div>
          <p>(20)</p>
        </div>
        <h4 className='mt-4 font-bold'>Details: </h4>
        <p className='font-normal mb-4'>{details}</p>
        <div>
          <h3>Quantity:</h3>
          <p className='flex justify-center items-center px-2 py-1 mt-2 border w-fit select-none rounded-xl '>
            <span className='cursor-pointer' onClick={() => decQty()}>
              <svg
                className='w-8 h-8 hover:fill-slate-200'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
            <span className='font-bold text-lg px-2'>{qty}</span>
            <span className='cursor-pointer' onClick={() => incQty()}>
              <svg
                className='w-8 h-8 hover:fill-slate-200'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </p>
          <div className='flex mt-6 text-white-pure'>
            <button
              type='button'
              className='flex items-center rounded bg-white-pure hover:bg-orange-200 border-orange-600 border text-orange-600 px-6 py-2 m-3'
              onClick={() => onAdd(productData, qty)}
            >
              <svg
                className='w-4 h-4 mx-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              Add To Cart
            </button>
            <Link href={'/success'}>
              <button
                type='button'
                className='rounded bg-orange-600 hover:bg-orange-500 px-6 py-2 m-3'
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center  w-full mt-6'>
        <div className='text-center my-6 text-blue-dark'>
          <h2 className='text-3xl font-extrabold'>You May Also Like</h2>
          <p className='text-base font-extralight'>Based On Your Taste</p>
        </div>
        <div className='flex my-6 w-full p-10 justify-center'>
          {productsData?.slice(1, 5).map((product) => (
            <Product
              setImageIndex={setImageIndex}
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

export const getStaticPaths = async () => {
  const query = `*[_type== "product"] {
    slug {
      current
    }
  }`
  const products = await client.fetch(query)
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const productQuery = `*[_type== "product" && slug.current == '${slug}'][0]`
  const productData = await client.fetch(productQuery)
  const productsQuery = '*[_type== "product"]'
  const productsData = await client.fetch(productsQuery)
  return {
    props: { productsData, productData },
  }
}
