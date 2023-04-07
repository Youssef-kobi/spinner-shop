import { Layout } from '../components'
import StateContext from '../Context/StateContext'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1500,
        // once: true,
        easing: 'ease-in-out',
        mirror: true

      })
    }
  }, [])
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     setIsLoading(false)
    //   }, 4000)

    //   return () => {
    //     clearTimeout(timeout)
    //   }
    // }, [])
    // if (isLoading) {
    //   // render your loading page
    //   return (
    //     <div className=' flex absolute box-border z-50 bg-slate-400 top-0 left-0 w-screen h-screen' />
    //   )
    // }
  return (
    <StateContext>
      
      <Layout>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default appWithTranslation(MyApp)
