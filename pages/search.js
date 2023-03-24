import React, { useEffect, useState } from 'react'
import { getTrackBackground, Range } from 'react-range'
import { Product } from '../components'
import { client } from '../lib/client'
// import { useParams } from 'react-router-dom'
import { useRouter } from 'next/router'

const STEP = 10
const MIN = 0
const MAX = 2000
const Search = ({ productsData }) => {
  const params = useRouter()
  console.log(params)
  const [filterCategory, setFilterCategory] = useState(
    params.query.Categories === 'women'
      ? ['heels', 'sandals', 'boots']
      : params.query.Categories === 'kids'
      ? ['kids']
      : ['heels', 'sandals', 'boots', 'kids']
  )
  useEffect(() => {
    setFilterCategory(
      params.query.Categories === 'women'
        ? ['heels', 'sandals', 'boots']
        : params.query.Categories === 'kids'
        ? ['kids']
        : ['heels', 'sandals', 'boots', 'kids']
    )
  }, [params])

  const [filterColor, setFilterColor] = useState([])
  const [filterSizes, setFilterSizes] = useState([])
  const [filterPrice, setFilterPrice] = useState([MIN, MAX])

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-1/4 my-2'>
        <div className='border rounded-lg p-2 my-2 py-6'>
          <div className='flex justify-between items-center '>
            <h2 className='font-semibold text-base text-blue-dark'>Filters</h2>
            <button className='font-semibold text-gray-500 text-sm'>
              Clear all
            </button>
          </div>
          <div>
            {filterColor.map((color, i) => {
              return (
                <button
                  key={i}
                  onClick={() =>
                    setFilterColor((prev) =>
                      prev.filter((item) => item !== color)
                    )
                  }
                  className='border shadow-lg px-4 py-1 my-4 mx-1'
                >
                  {color}
                </button>
              )
            })}
          </div>
          <p className='p-2 font-normal text-sm text-gray-500'>
            2 of 10 products
          </p>
        </div>
        <div className=' border rounded-lg p-2 my-2 py-6'>
          <div className='flex justify-between items-center '>
            <h2 className='font-semibold text-base text-blue-dark'>
              Categories
            </h2>
            <button
              onClick={() => setFilterCategory([])}
              className='font-semibold text-gray-500 text-sm'
            >
              Clear all
            </button>
          </div>
          <p className='p-2 font-normal text-sm text-gray-500'>
            {filterCategory.length} Selected
          </p>
          <div className=''>
            {['heels', 'sandals', 'boots', 'kids'].map((category, i) => (
              <label className='flex items-center  mx-2' key={i}>
                <input
                  onChange={(e) => {
                    //add the input name to the searchColor state
                    setFilterCategory((prev) => {
                      if (prev.includes(e.target.name))
                        return prev.filter((item) => item !== e.target.name)
                      else return [...prev, e.target.name]
                    })
                  }}
                  checked={filterCategory.includes(category)}
                  type='checkbox'
                  name={category}
                  className=' w-5 h-5 mx-2 rounded-lg accent-blue-dark bg-green-500'
                />
                <p className='first-letter:uppercase'>{category}</p>
              </label>
            ))}
          </div>
        </div>

        <div className='border rounded-lg p-2 my-2 py-6'>
          <div className='flex justify-between items-center '>
            <h2 className='font-semibold text-base text-blue-dark'>Color</h2>
            <button
              onClick={() => setFilterColor([])}
              className='font-semibold text-gray-500 text-sm'
            >
              Reset
            </button>
          </div>
          <p className='p-2 font-normal text-sm text-gray-500'>
            {filterColor.length} Selected
          </p>
          <div className=''>
            {[
              'yellow',
              'brown',
              'red',
              'orange',
              'green',
              'violet',
              'blue',
            ].map((color, i) => (
              <label className='flex items-center  mx-2' key={i}>
                <input
                  onChange={(e) => {
                    //add the input name to the searchColor state
                    setFilterColor((prev) => {
                      if (prev.includes(e.target.name))
                        return prev.filter((item) => item !== e.target.name)
                      else return [...prev, e.target.name]
                    })
                  }}
                  checked={filterColor.includes(color)}
                  type='checkbox'
                  name={color}
                  className=' w-5 h-5 mx-2 rounded-lg accent-blue-dark'
                />
                <p className='first-letter:uppercase'>{color}</p>
              </label>
            ))}
          </div>
        </div>
        <div className='border rounded-lg p-2 my-2 py-6'>
          <div className='flex justify-between items-center '>
            <h2 className='font-semibold text-base text-blue-dark'>Sizes</h2>
            <button
              onClick={() => setFilterSizes([])}
              className='font-semibold text-gray-500 text-sm'
            >
              Reset
            </button>
          </div>
          <p className='p-2 font-normal text-sm text-gray-500'>
            {filterSizes.length} Selected
          </p>
          <div className='flex flex-wrap'>
            {[
              '31',
              '32',
              '33',
              '34',
              '35',
              '36',
              '37',
              '38',
              '39',
              '40',
              '41',
              '42',
            ].map((size, i) => (
              <div
                key={i}
                onClick={(e) => {
                  setFilterSizes((prev) => {
                    if (prev.includes(e.target.innerHTML))
                      return prev.filter((item) => item !== e.target.innerHTML)
                    else return [...prev, e.target.innerHTML]
                  })
                }}
                className={`border rounded-lg cursor-pointer m-1 px-1 ${
                  filterSizes.includes(size) && 'border-green-500'
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className='border rounded-lg p-2 my-2 py-6'>
          <div className='flex justify-between items-center '>
            <h2 className='font-semibold text-base text-blue-dark'>Price</h2>
            <button
              onClick={() => setFilterPrice([MIN, MAX])}
              className='font-semibold text-gray-500 text-sm'
            >
              Reset
            </button>
          </div>
          <div className='p-2 font-normal text-sm flex justify-between text-gray-500'>
            <p className=''>min: {filterPrice[0]}</p>
            <p className=''>max: {filterPrice[1]}</p>
          </div>
          <div className='flex justify-center flex-wrap'>
            <Range
              values={filterPrice}
              step={STEP}
              min={MIN}
              max={MAX}
              rtl={false}
              onChange={(values) => {
                setFilterPrice(values)
              }}
              renderTrack={({
                props: { ref, onMouseDown, onTouchStart },
                children,
              }) => (
                <div
                  onMouseDown={onMouseDown}
                  onTouchStart={onTouchStart}
                  className='h-9 flex w-full'
                >
                  <div
                    ref={ref}
                    className='h-1 w-full rounded-lg self-center'
                    style={{
                      background: getTrackBackground({
                        values: filterPrice,
                        colors: ['#ccc', '#548BF4', '#ccc'],
                        min: MIN,
                        max: MAX,
                        rtl: false,
                      }),
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  className='h-10 w-10 border outline-none hover:border-blue-dark bg-white-pure rounded-xl flex justify-center items-center shadow-lg'
                  style={props.style}
                >
                  <div
                    className={`h-4 w-1 ${
                      isDragged ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div className='w-3/4 flex ml-4 justify-start content-start flex-wrap'>
        {productsData.length
          ? productsData.map((product) => (
              <Product key={product._id} product={product} />
            ))
          : notfound}
      </div>
    </div>
  )
}

export default Search

export const getServerSideProps = async () => {
  const productsQuery = '*[_type== "product"]'
  const productsData = await client.fetch(productsQuery)
  // const bannerQuery = '*[_type== "banner"]'
  // const bannerData = await client.fetch(bannerQuery)
  return {
    props: { productsData },
  }
}
