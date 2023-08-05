import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Cart from './Cart'
import { useStateContext } from '../Context/StateContext'
import Image from 'next/image'
import logo from '../assets/Logo.svg'
import { CgShoppingCart } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import { useTranslation } from 'next-i18next'

import bg from '../assets/bg.svg'
const Navbar = () => {
  const { t } = useTranslation('common')
  const { totalQuantities, setShowCart, showCart } = useStateContext()
  const [spin, setSpin] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const Links = [
    { text: t('nav.home'), link: '/' },
    { text: t('nav.faq'), link: '/faq' },
    { text: t('nav.about'), link: '/about' },
    { text: t('nav.contact'), link: '/contact' },
  ]
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSpin(true)
    }, 1000)
    const timeoutId2 = setTimeout(() => {
      setSpin(false)
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(timeoutId2)
    }
  }, [])
  return false ? (
    <div className='h-screen w-screen bg-slate-800' />
  ) : (
    <nav className='flex items-center text-gray-200 justify-between p-4 rounded-b-3xl w-full lg:w-4/5 z-20'>
      {/* Hamburger */}
      <div
        className='lg:hidden'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onKeyDown={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FiMenu className={` w-6 h-6 ${isMenuOpen ? 'rotate-90' : ''}`} />
      </div>
      {/* Logo */}

      <div className='flex justify-center w-full lg:w-1/12 ml-4'>
        <Link className='flex items-center' href='/'>
          <Image
            src={logo}
            
            alt='logo'
            width={60}
            height={60}
            priority
            // onLoadingComplete={() => setIsLoading(false)}
            data-aos={{
              rotate: '-360',
              duration: 3000,
            }}
            className={`${
              spin ? 'animate-spin transition-all duration-3000 ease-out ' : ''
            } m-0`}
          />
          <h1 className='text-3xl mb-1 text-blue-gem-100 font-bold italic ml-1'>
            FlySpin
          </h1>
        </Link>
      </div>
      {/* Links */}
      <div className='hidden lg:flex items-center text-2xl text-blue-200 font-semibold '>
        {Links.map((link, index) => (
          <Link
            className='mx-4 hover:scale-110 duration-100 '
            key={index}
            href={link.link}
          >
            {link.text}
          </Link>
        ))}
      </div>
      {isMenuOpen && (
        <div
          className='fixed top-0  left-0  h-screen w-screen bg-black bg-opacity-60 transition-all duration-500 ease-in-out'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url('${bg.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
            }}
            className={`flex flex-col items-center  z-10 w-3/4 bg-blue-gem-200 shadow-lg justify-center h-full rounded-r-3xl ${
              isMenuOpen
                ? 'transform:translateX(0%);'
                : 'transform:translateX(-100%);'
            }`}
          >
            {/* Links */}
            {Links.map((link, index) => (
              <Link
                className='my-4 text-xl font-bold hover:scale-110 duration-100'
                key={index}
                href={link.link}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* Cart */}
      <button
        className='relative transition-transform duration-200 w-1/12 text-gray-500 hover:scale-110'
        onClick={() => setShowCart(true)}
      >
        <CgShoppingCart className='w-8 h-8 text-blue-gem-200' />
        <span className='absolute -top-2 left-4 text-blue-gem-200 bg-orange-700 w-5 h-5 rounded-full flex items-center justify-center text-sm font-semibold'>
          {totalQuantities}
        </span>
      </button>
      {showCart && <Cart />}
    </nav>
  )
}

export default Navbar
