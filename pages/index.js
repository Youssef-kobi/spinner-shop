import { client, urlFor } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'
import Link from 'next/link'

const Home = ({ productsData, bannerData }) => {
  console.log(bannerData)
  return (
    <div className='flex flex-col h-full justify-between'>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div>
        <div className='my-16'>
          <div className='text-center my-6 text-blue-dark'>
            <h2 className='text-4xl font-extrabold'>Best Selling Products</h2>
            <p className='text-base font-extralight'>
              Heels of many variations
            </p>
          </div>
          <div className='flex justify-center'>
            {productsData?.slice(0, 4).map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
        <div className='my-16'>
          <div className='text-center mb-6 text-blue-dark'>
            <h2 className='text-4xl font-extrabold'>Categories</h2>
          </div>
          <div className='mt-6 flex h-[400px] bg-gray-100 rounded-xl justify-evenly '>
            <div className='bg-[#F2F2F2] rounded  hover:scale-110 duration-300 shadow-2xl -rotate-6 m-2 w-1/4'>
              <Link
                className='h-full w-full flex flex-col justify-start items-center'
                href={'/'}
              >
                <div
                  className='m-2 w-10/12 border rounded h-2/3 bg-cover bg-right-bottom  '
                  style={{
                    backgroundImage: `${
                      bannerData.length &&
                      `url(${urlFor(bannerData[2]?.image[0]).url()})`
                    }`,
                  }}
                ></div>
                <h4 className='text-center text-blue-dark text-2xl m-4 font-semibold'>
                  Heels
                </h4>
              </Link>
            </div>
            <div className='bg-[#F2F2F2] rounded  hover:scale-110 duration-300 shadow-2xl -rotate-0 m-2 w-1/4'>
              <Link
                className='h-full w-full flex flex-col justify-start items-center'
                href={'/'}
              >
                <div
                  className='m-2 w-10/12 border rounded h-2/3 bg-cover bg-right-bottom  '
                  style={{
                    backgroundImage: `${
                      bannerData &&
                      `url(${urlFor(bannerData[2]?.image[1]).url()})`
                    }`,
                  }}
                ></div>
                <h4 className='text-center text-blue-dark text-2xl m-4 font-semibold'>
                  Kids
                </h4>
              </Link>
            </div>
            <div className='bg-[#F2F2F2] rounded  hover:scale-110 duration-300 shadow-2xl rotate-6 m-2 w-1/4'>
              <Link
                className='h-full w-full flex flex-col justify-start items-center'
                href={'/'}
              >
                <div
                  className='m-2 w-10/12 border rounded h-2/3 bg-cover bg-right-bottom  '
                  style={{
                    backgroundImage: `${
                      bannerData &&
                      `url(${urlFor(bannerData[2]?.image[2]).url()})`
                    }`,
                  }}
                ></div>
                <h4 className='text-center text-blue-dark text-2xl m-4 font-semibold'>
                  Accessories
                </h4>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='text-center my-6 text-blue-dark'>
            <h2 className='text-4xl font-extrabold'>New Arrivals</h2>
            <p className='text-base font-extralight'>From spain with love</p>
          </div>
          <div className='flex mx-32 justify-center'>
            {productsData?.slice(2, 6).map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <FooterBanner bannerData={bannerData.length && bannerData[1]} />
    </div>
  )
}
export default Home

export const getServerSideProps = async () => {
  const productsQuery = '*[_type== "product"]'
  const productsData = await client.fetch(productsQuery)
  const bannerQuery = '*[_type== "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  return {
    props: { productsData, bannerData },
  }
}
