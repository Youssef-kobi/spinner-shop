import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useStateContext } from '../Context/StateContext'
import axios from 'axios'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { toast } from 'react-toastify'

// Define validation schema
const schema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
})

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  }
}
const CheckoutPage = () => {
  const { t } = useTranslation('common')
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const { totalPrice, cartItems, setShowCart, onEmptyCart } = useStateContext()
  const router = useRouter()
  // Set focus on the first input field
  useEffect(() => {
    setFocus('name')
  }, [setFocus])
  const onSubmit = async (data) => {
    try {
      console.log(data)
      // Post to the Strapi's Customer endpoint
      const customerResponse = await axios.post(
        'https://flyspin-strapi-s6drp.ondigitalocean.app/api/Customers',
        {
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
          },
        }
      )
      console.log(customerResponse.data.data.id )
      await axios.post(
        'https://flyspin-strapi-s6drp.ondigitalocean.app/api/orders',
        {
          data: {
            OrderStatus: 'Pending',
            OrderItems: cartItems,
            customer: customerResponse.data.data.id,
          },
        }
      )
      onEmptyCart()
      router.push('/success')
    } catch (error) {
      if (error.response) {
        console.error('Error placing order:', error.response.data)
        toast.error(error.response.data.message)
        // If you have a UI for displaying errors to users, you can do so here.
      } else if (error.request) {
        // The request was made but no response was received
        toast.error('An error occurred while placing the order')
        console.error('No response received:', error.request)
        // Display a message to the user about network issues
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message)
        toast.error('An error occurred while placing the order')
        // Display a generic message to the user
      }
    }
  }

  return (
    <div className='w-full mt-28'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='whitespace-pre-wrap mb-4 rounded-3xl bg-white bg-opacity-10 drop-shadow-xl px-4 py-6 shadow-xl'
      >
        <h2 className='text-3xl text-blue-gem-200 mb-4'>
          {t('checkout.shipping_information')}
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='name'
              className='font-bold text-lg italic text-blue-gem-200 mb-2'
            >
              {t('checkout.name')}
            </label>
            <input
              {...register('name')}
              placeholder={t('checkout.name_placeholder')}
              className='w-full px-3 py-2 border border-blue-gem-200 rounded-md'
            />
            {errors.name && (
              <p className='text-red-600'>{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor='email'
              className='font-bold text-lg italic text-blue-gem-200 mb-2'
            >
              {t('checkout.email')}
            </label>
            <input
              placeholder={t('checkout.email_placeholder')}
              {...register('email')}
              className='w-full px-3 py-2 border border-blue-gem-200 rounded-md'
            />
            {errors.email && (
              <p className='text-red-600'>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor='phone'
              className='font-bold text-lg italic text-blue-gem-200 mb-2'
            >
              {t('checkout.phone')}
            </label>
            <input
              placeholder={t('checkout.phone_placeholder')}
              {...register('phone')}
              className='w-full px-3 py-2 border border-blue-gem-200 rounded-md'
            />
            {errors.phone && (
              <p className='text-red-600'>{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor='address'
              className='font-bold text-lg italic text-blue-gem-200 mb-2'
            >
              {t('checkout.address')}
            </label>
            <input
              placeholder={t('checkout.address_placeholder')}
              {...register('address')}
              className='w-full px-3 py-2 border border-blue-gem-200 rounded-md'
            />
            {errors.address && (
              <p className='text-red-600'>{errors.address.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor='city'
              className='font-bold text-lg italic text-blue-gem-200 mb-2'
            >
              {t('checkout.city')}
            </label>
            <input
              {...register('city')}
              placeholder={t('checkout.city_placeholder')}
              className='w-full px-3 py-2 border border-blue-gem-200 rounded-md'
            />
            {errors.city && (
              <p className='text-red-600'>{errors.city.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor='state'
              className='font-bold text-lg italic text-blue-gem-200 mb-2'
            >
              {t('checkout.state')}
            </label>
            <input
              placeholder={t('checkout.state_placeholder')}
              {...register('state')}
              className='w-full px-3 py-2 border border-blue-gem-200 rounded-md'
            />
            {errors.state && (
              <p className='text-red-600'>{errors.state.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor='zip'
              className='font-bold text-lg italic text-blue-gem-200 mb-2'
            >
              {t('checkout.zip')}
            </label>
            <input
              placeholder={t('checkout.zip_placeholder')}
              {...register('zip')}
              className='w-full px-3 py-2 border border-blue-gem-200 rounded-md'
            />
            {errors.zip && <p className='text-red-600'>{errors.zip.message}</p>}
          </div>
        </div>

        <button
          type='submit'
          className='gradientButton relative overflow-hidden rounded bg-orange-600 hover:bg-orange-500 px-6 py-2 m-3 mt-6'
        >
          {t('checkout.place_order')}
        </button>
      </form>
      <div className='rounded-3xl bg-white bg-opacity-10 drop-shadow-xl px-4 py-6 shadow-xl'>
        <h2 className='text-3xl text-blue-gem-200 mb-4'>
          {t('checkout.order_summary')}
        </h2>
        {cartItems.map((item) => (
          <div
            key={item.name}
            className='flex justify-between text-blue-gem-200 my-2'
          >
            <div>
              <h3 className='font-bold text-lg'>{item.name}</h3>
              <p>
                {t('checkout.quantity')}: {item.quantity}
              </p>
            </div>
            <p>${item.quantity * item.price}</p>
          </div>
        ))}
        <hr className='my-4' />
        <div className='flex justify-between font-bold text-blue-gem-200'>
          <h3>{t('checkout.subtotal')}</h3>
          <p>${totalPrice}</p>
        </div>
        <button
          onClick={() => setShowCart(true)}
          className='gradientButton relative overflow-hidden rounded bg-orange-600 hover:bg-orange-500 px-6 py-2 m-3 mt-6'
        >
          {t('checkout.edit_order')}
        </button>
      </div>
    </div>
  )
}

export default CheckoutPage
