import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  }
}

const Contact = () => {
  const { t } = useTranslation('common')

  return (
    <section className='flex flex-col items-center justify-center mt-32 bg-gray-900 bg-opacity-60 text-blue-gem-200 p-4 rounded-3xl'>
      <h1 className='text-4xl font-bold my-8'>{t('contact.title')}</h1>
      <p className='text-lg lg:text-xl text-center mb-8'>
        {t('contact.description')}
      </p>
      <form className='w-full max-w-lg'>
        <div className='flex flex-wrap mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              {t('contact.form.firstName')}
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='grid-first-name'
              type='text'
              placeholder={t('contact.form.firstNamePlaceholder')}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2'
              htmlFor='grid-last-name'
            >
              {t('contact.form.lastName')}
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='grid-last-name'
              type='text'
              placeholder={t('contact.form.lastNamePlaceholder')}
            />
          </div>
        </div>
        <div className='flex flex-wrap mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2'
              htmlFor='grid-email'
            >
              {t('contact.form.email')}
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='grid-email'
              type='email'
              placeholder={t('contact.form.emailPlaceholder')}
            />
          </div>
        </div>
        <div className='flex flex-wrap mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2'
              htmlFor='grid-message'
            >
              {t('contact.form.message')}
            </label>
            <textarea
              className='no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='grid-message'
              rows='8'
              placeholder={t('contact.form.messagePlaceholder')}
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='button'
            >
              {t('contact.form.submitButton')}
            </button>
          </div>
          <div className='md:w-2/3 px-3'>
            <div className='text-gray-200 font-bold'>
              {t('contact.form.privacyPolicy')}{' '}
              <a className='underline' href='/privacy-policy'>
                {t('contact.form.privacyPolicyLink')}
              </a>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
export default Contact
