import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
// import { urlFor } from '../lib/client'
import spinnerImg from '../assets/spinner.svg'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const HeroBanner = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <section id='heroBanner' className='flex justify-center '>
      <div className=' flex flex-col-reverse lg:flex-row items-center justify-center h-screen'>
        <div className='w-full lg:w-1/2 mt-24 '>
          <h1
            className='text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold  text-gray-200 mb-4 '
            data-aos='fade-right'
            data-aos-mirror='true'
          >
            {t('heroBanner.title')}
          </h1>
          <p
            className=' text-base sm:text-lg md:text-xl italic text-blue-gem-300  mb-8'
            data-aos='fade-left'
            data-aos-delay='200'
          >
            {t('heroBanner.subtitle')}
          </p>
          <button
            className='gradientButton relative overflow-hidden  bg-[#ff6900] bg-opacity-90 hover:bg-violet-600 hover:scale-110  duration-300 text-white font-bold py-4 px-8 rounded-full shadow-inner drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]'
            data-aos='fade-left'
            onClick={() => {
              router.push('/product/flying-spinner')
            }}
          >
            {t('heroBanner.button')}
          </button>
        </div>
        <div
          className='flex items-center justify-center w-full lg:w-1/2'
          data-aos='zoom-in-down'
        >
          <Image
            src={spinnerImg}
            alt='Spinner Image'
            priority
            // fill={true}
            // po
            width={800}
            height={800}
            className=' drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)]'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
