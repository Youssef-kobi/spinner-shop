import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Cart from './Cart'
import { useStateContext } from '../Context/StateContext'
import Image from 'next/image'
import logo from '../assets/Logo.svg'
const Navbar = () => {
  const { totalQuantities, setShowCart, showCart } = useStateContext()
  const [spin, setSpin] = useState(false)

  useEffect(() => {
    // Add the animate-spin class after 1 second
    const timeoutId = setTimeout(() => {
      setSpin(true)
    }, 1000)

    // Remove the animate-spin class after 3 seconds
    const timeoutId2 = setTimeout(() => {
      setSpin(false)
    }, 3000)

    // Clean up the timeouts when the component unmounts
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(timeoutId2)
    }
  }, [])
  return (
    <nav className='flex items-center p-4 rounded-b-3xl w-full bg-white bg-opacity-60 absolute'>
      <p className='w-1/12 ml-4'>
        <Link className='flex' href='/'>
          <Image
            src={logo}
            alt='logo'
            width={60}
            height={60}
            data-aos={{
              rotate: '-360',
              duration: 3000,
            }}
            className={
              `${spin ? 'animate-spin transition-all duration-3000 ease-out ': ''} m-0`
            }
          />
        </Link>
      </p>
      <div className='flex items-center w-5/6 text-xl  font-semibold '>
        <p className='mr-6 hover:scale-110 duration-100 '>
          <Link href='/'>Home</Link>
        </p>
        <p className='mr-6 hover:scale-110 duration-100'>
          <Link href='/Faq'>FAQ</Link>
        </p>
        <p className='mr-6 hover:scale-110 duration-100'>
          <Link href='/'>About us</Link>
        </p>
        <p className='mr-6 hover:scale-110 duration-100'>
          <Link href='/'>Contact</Link>
        </p>
      </div>
      <button
        className='relative transition-transform duration-200 text-gray-500 hover:scale-110'
        onClick={() => setShowCart(true)}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
          />
        </svg>
        <span className='absolute -top-2 left-4 text-white-pure bg-orange-700 w-5 h-5 rounded-full flex items-center justify-center text-sm font-semibold'>
          {totalQuantities}
        </span>
      </button>
      {showCart && <Cart />}
    </nav>
  )
}

export default Navbar
