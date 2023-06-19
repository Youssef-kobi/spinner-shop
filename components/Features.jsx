import Image from 'next/image'
import React from 'react'
import Charge from '../assets/Charge.png'
import Solid from '../assets/Solid.png'
import AI from '../assets/AI.png'
import { useTranslation } from 'next-i18next'
import bg from '../assets/bg.svg'

const Features = () => {
  const { t } = useTranslation('common')
  const text = [
    {
      title: t('features.title1'),
      description: t('features.description1'),
      updatedText: t('features.subText1'),
    },
    {
      title: t('features.title2'),
      description: t('features.description2'),
      updatedText: t('features.subText2'),
    },
    {
      title: t('features.title3'),
      description: t('features.description3'),
      updatedText: t('features.subText3'),
    },
  ]
  return (
    <div className=' flex flex-col items-center mb-32'>
      <h2
        data-aos='fade-down'
        className='text-5xl mb-14 text-center text-blue-gem-50 italic font-extrabold p-4'
      >
        {t('features.headerTitle')}
      </h2>
      <div className='flex flex-col gap-32 w-full h-full  items-center justify-center'>
        {/* Map from here */}
        {/* // Styled box that holds the icon */}
        <div
          data-aos='fade-right'
          className='flex flex-col items-center h-full md:w-3/5 lg:flex-row lg:w-full lg:items-stretch'
        >
          <div className=' relative w-full h-64 lg:w-1/4  lg:h-auto drop-shadow-[0_20px_15px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)]  backdrop-blur-lg z-10   '>
            <Image
              src={Solid}
              alt='icon'
              fill
              className='object-cover  lg:object-center rounded-t-3xl lg:rounded-none lg:rounded-l-3xl'
            />
          </div>
          <div
            style={{
              backgroundImage: `url('${bg.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // height: '100%',
            }}
            className='w-full lg:w-2/4 px-6 py-8 rounded-b-3xl lg:rounded-none lg:rounded-r-3xl drop-shadow-[0_20px_15px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] backdrop-blur-lg shadow-inner lg:h-[300px] '
          >
            <h5
              data-aos-duration='1000'
              data-aos='fade-right'
              className='mb-2 text-4xl font-bold text-gray-300'
            >
              {text[0].title}
            </h5>
            <p
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1000'
              className='my-4 text-xl font-medium text-gray-300 text-opacity-90'
            >
              {text[0].description}
            </p>
            <p
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='1000'
              className='text-sm text-neutral-300'
            >
              {text[0].updatedText}
            </p>
          </div>
        </div>

        <div
          data-aos='fade-left'
          className='flex flex-col items-center h-full md:w-3/5 lg:flex-row-reverse lg:w-full lg:items-stretch'
        >
          <div className=' relative w-full h-64  lg:w-1/4  lg:h-auto  drop-shadow-[0_20px_15px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)]  backdrop-blur-lg z-10 '>
            <Image
              src={Charge}
              alt='icon'
              fill
              className='object-cover object-bottom lg:object-center rounded-t-3xl lg:rounded-none lg:rounded-r-3xl'
            />
          </div>
          <div
            style={{
              backgroundImage: `url('${bg.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // height: '100%',
            }}
            className='w-full lg:w-2/4 px-6 py-8 rounded-b-3xl lg:rounded-none lg:rounded-l-3xl drop-shadow-[0_20px_15px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] backdrop-blur-lg shadow-inner lg:h-[300px]'
          >
            <h5
              data-aos-duration='1000'
              data-aos='fade-left'
              className='mb-2 text-4xl font-bold text-gray-300'
            >
              {text[1].title}
            </h5>
            <p
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1000'
              className='my-4 text-xl font-medium text-gray-300 text-opacity-90'
            >
              {text[1].description}
            </p>
            <p
              data-aos='fade-left'
              data-aos-delay='400'
              data-aos-duration='1000'
              className='text-sm text-neutral-300'
            >
              {text[1].updatedText}
            </p>
          </div>
        </div>

        <div
          data-aos='fade-right'
          className='flex flex-col items-center h-full md:w-3/5 lg:flex-row lg:w-full lg:items-stretch'
        >
          <div className=' relative w-full h-64  lg:w-1/4  lg:h-auto  drop-shadow-[0_20px_15px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)]  backdrop-blur-lg  z-10 '>
            <Image
              src={AI}
              alt='icon'
              fill
              className='object-cover object-bottom lg:object-center rounded-t-3xl lg:rounded-none lg:rounded-l-3xl'
            />
          </div>
          <div
            style={{
              backgroundImage: `url('${bg.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // height: '100%',
            }}
            className='w-full lg:w-2/4 px-6 py-8 rounded-b-3xl lg:rounded-none lg:rounded-r-3xl drop-shadow-[0_20px_15px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] backdrop-blur-lg shadow-inner lg:h-[300px] '
          >
            <h5
              data-aos-duration='1000'
              data-aos='fade-right'
              className='mb-2 text-4xl font-bold text-gray-300'
            >
              {text[2].title}
            </h5>
            <p
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1000'
              className='my-4 text-xl font-medium text-gray-300 text-opacity-90'
            >
              {text[2].description}
            </p>
            <p
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='1000'
              className='text-sm text-neutral-300'
            >
              {text[2].updatedText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
