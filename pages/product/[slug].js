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

import { useRouter } from 'next/router'

const ProductDetails = ({ product }) => {
  const { t } = useTranslation('common')
  const { name, description, Color } = product.data[0].attributes
  // const images = product.data[0].attributes.images.data
  const [selected, setSelected] = useState(Color[0])
  // Main product images
  const images = product.data[0].attributes.images.data?.map((image) => ({
    id: image.id,
    ...image.attributes,
  }))

  // Color variant images
  const colorImages = product.data[0].attributes.Color.map((color) => ({
    id: color.id,
    ...color.image.data.attributes,
  }))

  // Combine all images
  const allImages = [...images, ...colorImages]
  const [imageIndex, setImageIndex] = useState(allImages[0].id)
  const { incQty, decQty, qty, onAdd } = useStateContext()
  const router = useRouter()
  return (
    <div className='grid lg:grid-cols-2 gap-4 justify-between items-center mt-28'>
      <h1 className='text-4xl lg:hidden text-blue-gem-200 italic '>{name}</h1>
      <div className='flex flex-col-reverse justify-center items-center  h-full '>
        {/* <div className='absolute h-full overflow-hidden w-full top-0 left-0 z-0'>
          <Image
            src={Solid.src}
            layout='fill'
            className=' object-fill '
            alt='bg-solid'
          />
        </div> */}
        <div className='flex items-center overflow-x-auto no-scrollbar flex-nowrap'>
          {allImages.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt='headphones'
              width={100}
              height={100}
              onMouseEnter={() => setImageIndex(image.id)}
              className={`${
                imageIndex === image.id ? 'border-2 border-red-600' : ''
              } rounded m-1 hover:scale-110 duration-500`}
            />
          ))}
        </div>

        <div className='flex justify-center lg:w-2/3  whitespace-pre-wrap mb-4 bg-white bg-opacity-5  px-4 py-6 shadow-xl items-center aspect-square  lg:drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] drop-shadow-[0_50px_15px_rgba(0,0,0,0.25)] rounded-3xl p-6 overflow-hidden'>
          <ImageMagnify
            src={
              allImages.length &&
              allImages.filter((image) => image.id === imageIndex)[0].url
            }
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
      <div className=' w-full'>
        <h1 className='text-4xl hidden lg:block text-blue-gem-200 italic '>
          {name}
        </h1>
        <div className='flex items-center my-3 bg-gray-900 bg-opacity-60 drop-shadow-2xl  p-4 rounded-3xl shadow-lg'>
          <p className='text-3xl font-bold text-orange-600 '>
            {selected.price} MAD
          </p>
          <span className='text-xl text-gray-100 mx-4 '>|</span>
          <div className='flex'>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <HiOutlineStar
                key={i}
                className='text-sm w-8 h-8 fill-orange-400 text-orange-600 '
              />
            ))}
          </div>
          <p className='text-gray-700'>(20)</p>
        </div>

        <div className='whitespace-pre-wrap mb-4 rounded-3xl bg-gray-900 bg-opacity-60 drop-shadow-2xl backdrop-blur px-4 py-6 shadow-xl'>
          <h4 className='font-bold text-4xl italic text-blue-gem-200 mb-4'>
            {t('product.Description')}
          </h4>
          <p
            className='font-medium text-lg  text-blue-gem-200'
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            {description}
          </p>
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
                  setImageIndex(Color[1].id)
                  setSelected(Color[1])
                }}
              >
                <div
                  className={`w-12 h-12 hover:scale-110 duration-300 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] shadow-inner bg-blue-700 rounded-xl ${
                    selected.sku.includes('Blue') && 'border'
                  }`}
                />
              </span>
              <span
                className='cursor-pointer'
                onClick={() => {
                  setImageIndex(Color[2].id)
                  setSelected(Color[2])
                }}
              >
                <div
                  className={`w-12 h-12 hover:scale-110 duration-300 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] bg-red-700 rounded-xl ${
                    selected.sku.includes('Red') && 'border'
                  }`}
                />
              </span>
              <span
                className='cursor-pointer'
                onClick={() => {
                  setImageIndex(Color[0].id)
                  setSelected(Color[0])
                }}
              >
                <div
                  className={`w-12 h-12 hover:scale-110 duration-300 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]  bg-gray-900 rounded-xl ${
                    selected.sku.includes('Black') && 'border '
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
            onClick={() => {
              onAdd(selected, qty)
              router.push('/checkout')
            }}
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
    `https://flyspin-strapi-s6drp.ondigitalocean.app/api/products`
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
    `https://flyspin-strapi-s6drp.ondigitalocean.app/api/products/?${slug}&populate=images,Color.image`
  )
  const product = await res.json()

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      product,
    },
  }
}
