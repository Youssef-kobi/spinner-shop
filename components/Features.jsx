import Image from 'next/image'
import React from 'react'
import Solid from '../assets/solid.png'
import Charge from '../assets/Charge.png'
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
    <div className=' flex flex-col items-center '>
      <h2
        data-aos='fade-down'
        className='text-7xl mb-14 text-blue-gem-50 italic font-extrabold p-4'
      >
        {t('features.headerTitle')}
      </h2>
      <div className='flex flex-col gap-32 w-full h-full my-14 pb-10 items-center justify-center overflow-auto'>
        {/* Map from here */}
        {/* // Styled box that holds the icon */}
        <div className='flex flex-col items-center h-full md:w-3/5 lg:flex-row lg:w-full lg:items-stretch'>
          <div className=' relative w-full h-64 rounded-t-3xl lg:w-1/4  lg:h-auto lg:rounded-none lg:rounded-l-3xl overflow-hidden drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] backdrop-blur-lg  '>
            <Image
              data-aos='fade-left'
              src={Charge}
              alt='icon'
              fill
              className='object-cover object-bottom lg:object-center'
            />
          </div>
          <div
            style={{
              backgroundImage: `url('${bg.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
            }}
            className='w-full lg:w-2/4 px-4 py-8 rounded-b-3xl lg:rounded-none lg:rounded-r-3xl drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] backdrop-blur-lg shadow-inner '
          >
            <h5
              data-aos-delay='200'
              data-aos-duration='1000'
              data-aos='fade-left'
              className='mb-2 text-5xl font-semibold  text-blue-gem-100'
            >
              {text[0].title}
            </h5>
            <p
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1500'
              className='my-4 text-lg  font-semibold  text-blue-gem-200 text-opacity-90'
            >
              {text[0].description}
            </p>
            <p className='text-xs text-neutral-500'>{text[0].updatedText}</p>
          </div>
        </div>

        <div className='flex flex-col items-center h-full md:w-3/5 lg:flex-row-reverse lg:w-full lg:items-stretch'>
          <div className=' relative w-full h-64 rounded-t-3xl lg:w-1/4  lg:h-auto lg:rounded-none lg:rounded-r-3xl overflow-hidden drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] backdrop-blur-lg  '>
            <Image
              data-aos='fade-left'
              src={Charge}
              alt='icon'
              fill
              className='object-cover object-bottom lg:object-center'
            />
          </div>
          <div
            style={{
              backgroundImage: `url('${bg.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
            }}
            className='w-full lg:w-2/4 px-4 py-8 rounded-b-3xl lg:rounded-none lg:rounded-l-3xl drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] backdrop-blur-lg shadow-inner '
          >
            <h5
              data-aos-delay='200'
              data-aos-duration='1000'
              data-aos='fade-left'
              className='mb-2 text-5xl font-semibold  text-blue-gem-100'
            >
              {text[0].title}
            </h5>
            <p
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1500'
              className='my-4 text-lg  font-semibold  text-blue-gem-200 text-opacity-90'
            >
              {text[0].description}
            </p>
            <p className='text-xs text-neutral-500'>{text[0].updatedText}</p>
          </div>
        </div>

        <div className='flex flex-col items-center h-full md:w-3/5 lg:flex-row lg:w-full lg:items-stretch'>
          <div className=' relative w-full h-64 rounded-t-3xl lg:w-1/4  lg:h-auto lg:rounded-none lg:rounded-l-3xl overflow-hidden drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] backdrop-blur-lg  '>
            <Image
              data-aos='fade-left'
              src={Charge}
              alt='icon'
              fill
              className='object-cover object-bottom lg:object-center'
            />
          </div>
          <div
            style={{
              backgroundImage: `url('${bg.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
            }}
            className='w-full lg:w-2/4 px-4 py-8 rounded-b-3xl lg:rounded-none lg:rounded-r-3xl drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] backdrop-blur-lg shadow-inner '
          >
            <h5
              data-aos-delay='200'
              data-aos-duration='1000'
              data-aos='fade-left'
              className='mb-2 text-5xl font-semibold  text-blue-gem-100'
            >
              {text[0].title}
            </h5>
            <p
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1500'
              className='my-4 text-lg  font-semibold  text-blue-gem-200 text-opacity-90'
            >
              {text[0].description}
            </p>
            <p className='text-xs text-neutral-500'>{text[0].updatedText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
