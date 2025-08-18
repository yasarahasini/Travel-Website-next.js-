import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      
      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70 z-10'></div>

      {/* Video Background */}
      <video 
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload='metadata'
        className='w-full h-full object-cover'
      />

      {/* Hero Content */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white px-4'>
        <h2 className='text-4xl sm:text-5xl font-bold mb-4'>Let's Enjoy Nature</h2>
        <p className='text-lg sm:text-xl'>Get the best prices on 2,000,000+ properties worldwide</p>
        <SearchBox/>
      </div>

    </div>
  )
}

export default Hero
