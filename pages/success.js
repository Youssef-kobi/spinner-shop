import Link from 'next/link'
import React from 'react'

const success = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-gray-300 p-10 w-2/4 rounded-2xl flex flex-col items-center justify-center'>
        <svg
          className='w-12 h-12'
          fill='#16a34a'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
            clipRule='evenodd'
          />
        </svg>
        <h2 className='text-blue-dark font-bold text-2xl'>
          Thank You For your Purchase
        </h2>
        <p className='font-semibold text-sm '>
          check your email address for receipt
        </p>
        <p className='mt-6 font-bold text-base '>
          if you have any questions, please email
          <span className='text-red-600'> orders@yel-kobi.com</span>
        </p>
        <Link href='/'>
          <button
            type='button'
            className='uppercase mt-6 rounded-xl text-white-pure font-light bg-red-600 hover:bg-red-800 py-2 px-4 '
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default success
