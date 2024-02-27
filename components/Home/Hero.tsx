import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h2 className='text-[40px] md:text-[60px] font-semibold'>
          Premium Car Rental in Your Area
          <h2 className='text-[20px] text-gray-500 pr-20 '>
            Book the Car Now
          </h2>
          <button className='p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transiiton-all'>
            Explore Cars
          </button>
        </h2>
      </div>
      <div>
        <Image
          src='/hero.png'
          alt='hero'
          width={400}
          height={500} 
          className='w-full object-cover'
        />
      </div>
      {/* <div className='hero__image-overlay' /> */}
    </div>
  )
}

export default Hero