import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
import Avatar1 from '../assets/avatar1.jpg'
import Avatar2 from '../assets/avatar2.jpg'
import Avatar3 from '../assets/avatar3.jpg'
import { Pagination } from 'swiper'
import Image from 'next/image'

// SwiperCore.use([Pagination])
const slideData = [
  {
    avatar: Avatar1,
    name: `Im amazed at how fun the Flying Spinner is!`,
    text: "I have to admit, when I first heard about the Flying Spinner, I was a little skeptical. But after giving it a try, I'm a believer! It's so much fun to watch it fly through the air and try to catch it. My kids love playing with it too, and it's become a regular part of our family game night.",
  },
  {
    avatar: Avatar2,
    name: "This is the coolest toy I've seen in a long time!",
    text: `I'm always on the lookout for new and interesting toys, and the Flying Spinner definitely fits the bill. It's unlike anything else out there, and the way it spins and glides through the air is really mesmerizing. Plus, it's super easy to use and provides endless entertainment.`,
  },
  {
    avatar: Avatar3,
    name: 'I never knew I needed a Flying Spinner until I got one!',
    text: `I saw an ad for the Flying Spinner on social media and decided to give it a try, and I'm so glad I did. It's become one of my go-to stress relievers, and I love challenging my friends to see who can keep it in the air the longest. It's also surprisingly durable - I've dropped it more times than I can count and it still works perfectly.`,
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex flex-col items-center w-full'>
      <h2
        data-aos='fade-down'
        className='text-7xl mb-14 text-blue-gem-50 italic font-extrabold p-4'
      >
        Testimonials
      </h2>
      <div className='flex justify-center container'>
        <Swiper
          className='w-full lg:w-2/4 rounded-3xl overflow-hidden'
          spaceBetween={4}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className=' bg-white bg-opacity-10 saturate-200 backdrop-blur-lg shadow-2xl border-2 box-border border-blue-gem-600 rounded-3xl'
            >
              <div className='flex flex-col items-center justify-center m-8 mt-4 '>
                <Image
                  src={slide.avatar}
                  width={100}
                  height={100}
                  alt=''
                  className=' border-2 border-solid border-blue-gem-600 rounded-full '
                />
                <h5 className='mt-2 font-semibold text-blue-100'>{slide.name}</h5>
                <small className='text-center text-sm text-blue-100 text-opacity-80'>{slide.text}</small>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
