import { Layout } from '../components'
import StateContext from '../Context/StateContext'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MyApp = ({ Component, pageProps }) => {
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
