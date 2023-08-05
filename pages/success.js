import Link from 'next/link'
import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  }
}
const Success = () => {
  const { t } = useTranslation('common')

  return (
    <div className='w-full mt-10 lg:mb-28 lg:mt-56 flex justify-center items-center'>
      <div className='p-4 lg:p-10 w-11/12 sm:w-3/4 lg:w-1/2 xl:w-1/3 rounded-2xl flex flex-col items-center justify-center bg-gray-900 bg-opacity-60 text-blue-gem-200'>
        <HiOutlineShoppingBag className='w-12 h-12 text-white' />
        <h2 className='text-white font-bold text-2xl mt-4 lg:mt-8'>
          {t('success.thankYou')}
        </h2>
        <p className='font-semibold text-sm text-white mt-4'>
          {t('success.checkEmail')}
        </p>
        <p className='font-bold text-base text-white mt-2'>
          {t('success.questions')}
          <span className='text-red-600'> {t('success.contactEmail')}</span>
        </p>

        <button
          type='button'
          className=' gradientButton relative overflow-hidden rounded bg-orange-600 hover:bg-orange-500 px-6 py-2 '
        >
          <Link href='/'>{t('success.continueShopping')}</Link>  
        </button>
      </div>
    </div>
  )
}

export default Success
