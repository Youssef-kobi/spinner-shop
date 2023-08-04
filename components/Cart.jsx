import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useStateContext } from '../Context/StateContext'

import bg from '../assets/bg.svg'
import { FaChevronRight } from 'react-icons/fa'
import {
  HiOutlineMinusCircle,
  HiOutlinePlusCircle,
  HiOutlineShoppingBag,
  HiOutlineTrash,
} from 'react-icons/hi2'

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
      className={`h-screen flex text-gray-200 duration-700 ${
        showCart ? 'w-screen ' : 'w-0'
      }  top-0 right-0  fixed z-20`}
    >
      <div
        className={`fixed h-full flex flex-col justify-between w-1/4 lg:w-3/4 duration-700 ease-in-out ${
          showCart ? 'translate-y-0 ' : 'translate-y-full'
        }  top-0 left-0 opacity-30 bg-gray-900 z-10  cursor-pointer`}
        onClick={() => setShowCart(false)}
      />
      <div
        className={`fixed h-full flex flex-col justify-between w-3/4 lg:w-1/4 duration-700 ease-in-out ${
          showCart ? 'translate-x-0 ' : 'translate-x-full'
        }  top-0 right-0 z-10`}
        style={{
          backgroundImage: `url('${bg.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
        }}
        ref={cartRef}
      >
        <div className='h-12 flex justify-between items-center p-2 border-b'>
          <button
            type='button'
            className='hover:scale-110 duration-300'
            onClick={() => setShowCart(false)}
          >
            <FaChevronRight />
          </button>
          <span className='font-bold text-lg'>Your Cart</span>
          <span className='text-orange-600'>({totalQuantities} items)</span>
        </div>
        {cartItems.length === 0 ? (
          <div className=' h-full flex flex-col justify-center mb-16 items-center'>
            <HiOutlineShoppingBag className='w-24 h-24' />
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
        ) : (
          <ul className='h-full flex flex-col m-2 gap-2'>
            {cartItems
              ?.sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((item, i) => {
                return (
                  <li
                    className='flex items-center px-3 py-3 rounded-xl bg-blue-gem-300 bg-opacity-30 hover:bg-opacity-40'
                    key={i}
                  >
                    <div className='rounded-lg'>
                      <Image
                        key={i}
                        src={item.image.data.attributes.url}
                        alt='spinner color'
                        width={100}
                        height={100}
                        // onMouseEnter={() => setImageIndex(i)}
                        className={`rounded`}
                      />
                    </div>
                    <div className='flex flex-col justify-start w-full pl-3'>
                      <div className=' flex justify-between items-center'>
                        <h4 className='text-xl text-blue-gem-200 font-bold'>
                          {item.name}
                        </h4>
                        <h5 className='text-xl text-blue-gem-300 font-bold'>
                          {item.price} MAD
                        </h5>
                      </div>
                      <div>
                        <p className='text-sm text-blue-gem-200 text-opacity-80'>
                          {item.sku}
                        </p>
                      </div>
                      <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center select-none rounded-xl '>
                          <span
                            className='cursor-pointer'
                            onClick={() =>
                              toggleCartItemQuantity(item.id, 'dec')
                            }
                          >
                            <HiOutlineMinusCircle className='w-10 h-10 hover:scale-110 duration-300 drop-shadow-[0_100px_15px_rgba(0,0,0,0.25)] text-red-700' />
                          </span>
                          <span className='font-bold text-blue-gem-200 text-2xl px-2'>
                            {item.quantity}
                          </span>
                          <span
                            className='cursor-pointer'
                            onClick={() =>
                              toggleCartItemQuantity(item.id, 'inc')
                            }
                          >
                            <HiOutlinePlusCircle className='w-10 h-10 text-green-700 hover:scale-110 duration-300 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]' />
                          </span>
                        </div>
                        <button
                          type='button'
                          onClick={() => onRemove(item)}
                          className='hover:scale-110 duration-300'
                        >
                          <HiOutlineTrash className='w-8 h-8 text-orange-600' />
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
          </ul>
        )}
        {cartItems.length >= 1 && (
          <div className='p-5 flex flex-col justify-between'>
            <div className='p-5 flex justify-between '>
              <h3 className='font-bold'>Subtotal:</h3>
              <h3 className='font-bold'>{totalPrice}MAD</h3>
            </div>
            <div className='text-center'>
              <Link href='/checkout'>
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
