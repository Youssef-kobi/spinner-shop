import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useStateContext } from '../Context/StateContext'
import { urlFor } from '../lib/client'

const Cart = () => {
  const cartRef = useRef()
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    showCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext()
  return (
    <div
      className={`h-screen flex  duration-700 ${
        showCart ? 'w-screen ' : 'w-0'
      }  top-0 right-0  fixed z-20`}
    >
      <div
        className={`fixed h-full flex flex-col justify-between w-3/4 duration-700 ease-in-out ${
          showCart ? 'translate-y-0 ' : 'translate-y-full'
        }  top-0 left-0 opacity-30 bg-gray-900 z-10 cursor-pointer`}
        onClick={()=> setShowCart(false)}
      />
      <div
        className={`fixed h-full flex flex-col justify-between w-1/4 duration-700 ease-in-out ${
          showCart ? 'translate-x-0 ' : 'translate-x-full'
        }  top-0 right-0 bg-white-pure border z-10`}
        ref={cartRef}
      >
        <div className='h-12 flex justify-between items-center p-2 border-b'>
          <button
            type='button'
            className='hover:scale-110 duration-300'
            onClick={() => setShowCart(false)}
          >
            <svg
              className='w-8 h-8'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <span className='font-bold text-lg'>Your Cart</span>
          <span className='text-red-800'>({totalQuantities} items)</span>
        </div>
        {cartItems.length < 1 && (
          <div className=' h-full flex flex-col justify-start mt-16 items-center'>
            <svg
              className='w-24 h-24'
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
            <span>Your Shopping bag is empty</span>
            <Link className='w-full flex justify-center' href={'/'}>
              <button
                type='button'
                className='font-semibold m-3 w-2/3 text-white-pure rounded-2xl bg-red-500 px-4 py-1 shadow-lg hover:bg-red-800'
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <ul className='h-full'>
          {cartItems.length >= 1 &&
            cartItems
              ?.sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((item, i) => {
                return (
                  <li className='flex h-40 items-center m-4' key={i}>
                    <div className='p-4 bg-gray-light  rounded-lg'>
                      <Image
                        key={i}
                        src={urlFor(item.image[0]).url()}
                        alt='headphones'
                        width={100}
                        height={100}
                        // onMouseEnter={() => setImageIndex(i)}
                        className={`rounded`}
                      />
                    </div>
                    <div className='flex flex-col justify-start w-full  ml-4 py-4'>
                      <div className=' flex justify-between items-center'>
                        <h4 className='text-2xl text-blue-dark font-bold'>
                          {item.name}
                        </h4>
                        <h5 className='text-xl text-blue-dark font-bold'>
                          {item.price} MAD
                        </h5>
                      </div>
                      <div>
                        <p className='text-sm text-gray-500'>
                          small desc color, size..
                        </p>
                      </div>
                      <div className='flex justify-between items-center'>
                        <p className='flex justify-center items-center px-2 py-1 mt-2 border w-fit select-none rounded-xl '>
                          <span
                            className='cursor-pointer'
                            onClick={() =>
                              toggleCartItemQuantity(item._id, 'dec')
                            }
                          >
                            <svg
                              className='w-8 h-8 hover:fill-slate-200'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                          </span>
                          <span className='font-bold text-lg px-2'>
                            {item.quantity}
                          </span>
                          <span
                            className='cursor-pointer'
                            onClick={() =>
                              toggleCartItemQuantity(item._id, 'inc')
                            }
                          >
                            <svg
                              className='w-8 h-8 hover:fill-slate-200'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                          </span>
                        </p>
                        <button
                          type='button'
                          onClick={() => onRemove(item)}
                          className='hover:scale-110 duration-300'
                        >
                          <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='red'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
        </ul>
        {cartItems.length >= 1 && (
          <div className='p-5 flex flex-col justify-between'>
            <div className='p-5 flex justify-between '>
              <h3 className='font-bold'>Subtotal:</h3>
              <h3 className='font-bold'>{totalPrice}MAD</h3>
            </div>
            <div className='text-center'>
              <Link href='/success'>
                <button
                  type='button'
                  className='w-2/4 m-2 bg-red-600 hover:bg-red-800 hover:scale-110 duration-300 py-2 px-5 rounded-2xl shadow-md shadow-black-faded text-lg font-bold text-white-light'
                >
                  Pay Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
