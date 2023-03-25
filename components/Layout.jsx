import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({ children }) => {

  return (
    <div className=''>
      <Head>
        <title>Heels shop</title>
      </Head>
      <div className='flex flex-col justify-between h-screen'>
        <header data-aos='fade-down' data-aos-duration='1000' >
          <Navbar />
        </header>
        <main className='w-full flex justify-center items-center flex-col'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default Layout
