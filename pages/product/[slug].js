import { useState } from 'react'
import Image from 'next/image'
import ImageMagnify from '../../components/ImageMagnify'
import { useStateContext } from '../../Context/StateContext'
import {
  HiOutlineMinusCircle,
  HiOutlinePlusCircle,
  HiOutlineStar,
} from 'react-icons/hi2'
import { CgShoppingCart } from 'react-icons/cg'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ProductDetails = ({ product }) => {
  const { t } = useTranslation('common')
  console.log(product.data)
  const { name, description, Color } = product.data[0].attributes
  const images = product.data[0].attributes.images.data
  const [imageIndex, setImageIndex] = useState(images[0].id)
  const [selected, setSelected] = useState(Color[0])
  console.log(selected)

  const { incQty, decQty, qty, onAdd } = useStateContext()
  return (
    <div className='grid lg:grid-cols-2 gap-4 justify-between items-center mt-28'>
      <div className='flex flex-col-reverse justify-center items-center  h-full '>
        <div className='flex items-center'>
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.attributes.url}
              alt='headphones'
              width={100}
              height={100}
              onMouseEnter={() => setImageIndex(image.id)}
              className={`${
                imageIndex === image.id && 'border-2 border-red-600'
              } rounded m-1 hover:scale-125 duration-500`}
            />
          ))}
        </div>
        <div className='flex justify-center lg:w-2/3 shadow-inner drop-shadow-xl items-center aspect-square bg-blue-gem-200 bg-opacity-10 lg:drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] rounded-3xl p-6 overflow-hidden'>
          <ImageMagnify
            src={
              images.length &&
              images.filter((image) => image.id === imageIndex)[0].attributes
                .url
            }
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
      <div className=' w-full'>
        <h1 className='text-4xl text-blue-gem-200 italic '>{name}</h1>
        <div className='flex items-center my-3'>
          <p className='text-3xl font-bold text-orange-600'>
            {selected.price} MAD
          </p>
          <span className='text-xl text-gray-400 mx-4 '>|</span>
          <div className='flex'>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <HiOutlineStar
                key={i}
                className='text-sm w-8 h-8 fill-orange-600 text-orange-600 '
              />
            ))}
          </div>
          <p>(20)</p>
        </div>
        <div className='whitespace-pre-wrap mb-4 bg-blue-gem-200 bg-opacity-60 p-4 lg:drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-3xl'>
          <h4 className='font-bold text-4xl italic text-blue-gem-200'>
            {t('product.Description')}
          </h4>
          <p className='font-medium text-lg  '>{description}</p>
        </div>
        <div className='flex  justify-between'>
          <div className='w-1/2'>
            <h3 className='font-bold text-3xl italic text-blue-gem-200'>
              {t('product.Colors')}
            </h3>
            <div className='flex items-center px-2 py-1 mt-2 select-none rounded-xl gap-2 w-1/2 '>
              <span
                className='cursor-pointer'
                onClick={() => {
                  setImageIndex(images[0].id)
                  setSelected(Color[2])
                }}
              >
                <div
                  className={`w-12 h-12 hover:scale-110 duration-300 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] shadow-inner bg-blue-700 rounded-xl ${
                    selected.sku === 'FLYSPINBLUE' && 'border'
                  }`}
                />
              </span>
              <span
                className='cursor-pointer'
                onClick={() => {
                  setImageIndex(images[1].id)
                  setSelected(Color[0])
                }}
              >
                <div
                  className={`w-12 h-12 hover:scale-110 duration-300 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] bg-red-700 rounded-xl ${
                    selected.sku === 'FLYSPINRED' && 'border'
                  }`}
                />
              </span>
              <span
                className='cursor-pointer'
                onClick={() => {
                  setImageIndex(images[0].id)
                  setSelected(Color[1])
                }}
              >
                <div
                  className={`w-12 h-12 hover:scale-110 duration-300 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] bg-gray-900 rounded-xl ${
                    selected.sku === 'FLYSPINBLACK' && 'border'
                  }`}
                />
              </span>
            </div>
          </div>
          <div className='w-1/2'>
            <h3 className='font-bold text-3xl italic text-blue-gem-200'>
              {t('product.Quantity')}
            </h3>
            <div className='flex items-center px-2 py-1 mt-2 select-none '>
              <span className='cursor-pointer' onClick={() => decQty()}>
                <HiOutlineMinusCircle className='w-10 h-10 hover:scale-110 duration-300 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] text-red-700' />
              </span>
              <span className='font-bold text-blue-gem-200 text-2xl px-2'>
                {qty}
              </span>
              <span className='cursor-pointer' onClick={() => incQty()}>
                <HiOutlinePlusCircle className='w-10 h-10 text-green-700 hover:scale-110 duration-300 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]' />
              </span>
            </div>
          </div>
        </div>
        <div className='flex mt-6 text-blue-gem-100'>
          <button
            type='button'
            className=' flex items-center rounded  hover:bg-orange-200 border-orange-600 text-orange-600 border  px-6 py-2 m-3 ml-0'
            onClick={() => onAdd(selected, qty)}
          >
            <CgShoppingCart className='w-6 h-6 mb-1' />
            {t('product.AddToCart')}
          </button>
          {/* <Link href={'/success'}> */}
          <button
            type='button'
            className=' gradientButton relative overflow-hidden rounded bg-orange-600 hover:bg-orange-500 px-6 py-2 m-3'
          >
            {t('product.BuyNow')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
export const getStaticPaths = async () => {
  const res = await fetch(
    `https://e4f0-105-66-135-100.eu.ngrok.io/api/products`
  )
  const products = await res.json()
  // console.log(products)

  const paths = products.data.map((product) => ({
    params: { slug: product.attributes.slug },
  }))

  return { paths, fallback: false }
}
export async function getStaticProps({ params, locale }) {
  const { slug } = params
  const res = await fetch(
    `https://e4f0-105-66-135-100.eu.ngrok.io/api/products/?${slug}&populate=images,Color.image`
  )
  const product = await res.json()
  // console.log(product)

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      product,
    },
  }
}
