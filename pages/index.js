import { client, urlFor } from '../lib/client'
import { HeroBanner, Testimonials, Features } from '../components'
import Link from 'next/link'
// import Features from '../components/Features'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useState } from 'react'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  }
}

const Home = () => {

  return (
    <div className='flex flex-col justify-between items-center'>
      {/* {t('nav.home')} */}
      <HeroBanner />
      <Features />
      {/* <Testimonials /> */}
    </div>
  )
}
export default Home
