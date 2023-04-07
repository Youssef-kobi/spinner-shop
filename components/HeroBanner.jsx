import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
// import { urlFor } from '../lib/client'
import spinnerImg from '../assets/spinner.svg'
import { useTranslation } from 'next-i18next'


const HeroBanner = () => {
  
  const { t } = useTranslation('common')
  return (
    <section id='heroBanner' className='flex justify-center '>
      <div className=' flex flex-col-reverse lg:flex-row items-center justify-center h-screen'>
        <div className='w-fit'>
          <h1
            className='text-4xl lg:text-7xl font-bold  text-gray-200 mb-4 '
            data-aos='fade-right'
            data-aos-mirror='true'
          >
            {t('heroBanner.title')}
          </h1>
          <p
            className=' text-lg lg:text-xl  italic text-blue-gem-300  mb-8'
            data-aos='fade-left'
            data-aos-delay='200'
          >
            {t('heroBanner.subtitle')}
          </p>
          <button
            className='gradientButton relative overflow-hidden bg-[#ff6900] bg-opacity-90 hover:bg-violet-600 hover:scale-110  duration-300 text-white font-bold py-4 px-6  rounded-full shadow-inner drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            {t('heroBanner.button')}
          </button>
        </div>
        <div
          className='flex items-center justify-center w-full'
          data-aos='zoom-in-down'
          // data-aos-offset='-1500'
          data-aos-delay='200'
          data-aos-duration='8000'
        >
          <Image
            src={spinnerImg}
            alt='Spinner Image'
            width={800}
            height={800}
            className='drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)]'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
