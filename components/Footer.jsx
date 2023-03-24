import React from 'react'
import Link from 'next/link'

const Footer = () => {
 // create a footer using tailwindcss

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='flex'>
        @ 2022 Crafted with
        <svg
          className='w-6 h-6 fill-rose-800'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
            clipRule='evenodd'
          />
        </svg>
        by Youssef ELKOBI
      </p>
      <div className='flex text-blue-dark'>
        <Link href='instagram.com'>
          <svg
            className='text-blue-dark'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 25 25'
            strokeWidth='2'
            stroke='#324d67'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <rect x='4' y='4' width='16' height='16' rx='4'></rect>
            <circle cx='12' cy='12' r='3'></circle>
            <line x1='16.5' y1='7.5' x2='16.5' y2='7.501'></line>
          </svg>
        </Link>
        <Link href='twitter.com'>
          <svg
            fill='#324d67'
            width='30'
            height='30'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Footer
