import { HeroBanner, Testimonials, Features } from '../components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
    <div className='flex flex-col justify-between items-center w-full'>
      {/* {t('nav.home')} */}
      <HeroBanner />
      <Features />
      <Testimonials />
    </div>
  )
}
export default Home
