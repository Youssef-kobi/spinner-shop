import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaMoneyBillAlt,
} from 'react-icons/fa'


const FooterBanner = () => {
  const { t } = useTranslation('common')

  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div>
          <h3 className='text-lg font-bold mb-2'>
            {t('footer.contactInformation')}
          </h3>
          <p>123 Main St.</p>
          <p>New York, NY 10001</p>
          <p>Email: info@flyingspinners.com</p>
          <p>Phone: (555) 555-5555</p>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-2'>
            {t('footer.socialMediaLinks')}
          </h3>
          <ul className='flex space-x-4'>
            <li>
              <a
                href='https://www.facebook.com/flyingspinners'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com/flyingspinners'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/flyingspinners'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-2'>
            {t('footer.navigationMenu')}
          </h3>
          <ul>
            <li>
              <Link href='/'>{t('footer.home')}</Link>
            </li>
            <li>
              <Link href='/products'>{t('footer.products')}</Link>
            </li>
            <li>
              <Link href='/about'>{t('footer.aboutUs')}</Link>
            </li>
            <li>
              <Link href='/contact'>{t('footer.contactUs')}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-2'>
            {t('footer.newsletterSignup')}
          </h3>
          <form>
            <input
              type='email'
              placeholder='Enter your email'
              className='border border-gray-300 rounded py-2 px-3 mb-2 w-full'
            />
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
              {t('footer.signUp')}
            </button>
          </form>
        </div>
      </div>
      <div className='border-t border-gray-700 pt-6 mt-6 text-sm'>
        <p className='mb-2'>{t('footer.paymentMethods')}</p>
        <ul className='flex space-x-4 mb-4'>
          <li>
            <FaCcVisa />
          </li>
          <li>
            <FaCcMastercard />
          </li>
          <li>
            <FaPaypal />
          </li>
          <li>
            <FaMoneyBillAlt />
          </li>
        </ul>
        <p className='mb-2'>{t('footer.securePayments')}</p>
        <p className='mb-2'>{t('footer.privacyPolicy')}</p>
        <p>&copy; {t('footer.copyRight')}</p>
      </div>
    </div>
  )
}
export default FooterBanner
