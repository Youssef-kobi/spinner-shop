import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  }
}

const About = () => {
  const { t } = useTranslation('common')

  return (
    <section className='flex flex-col items-center justify-center mt-32 bg-white bg-opacity-30 p-4 rounded-3xl'>
      <h1 className='text-4xl font-bold my-8'>{t('aboutUs.title')}</h1>
      <p
        className='text-lg lg:text-xl text-left mb-8 whitespace-pre-wrap'
      >
        {t('aboutUs.description')}
      </p>
    </section>
  )
}

export default About
