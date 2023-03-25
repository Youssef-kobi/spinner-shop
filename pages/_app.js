import { Layout } from '../components'
import StateContext from '../Context/StateContext'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

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

export default MyApp
