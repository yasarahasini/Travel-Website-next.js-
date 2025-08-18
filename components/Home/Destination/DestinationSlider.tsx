'use client';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { destinationData } from '@/data/data';
 // ⬅️ move static data into a separate file

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 5 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1 },
};

const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {destinationData.map((data) => (
        <div key={data.id} className="m-3">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            
            {/* Image */}
            <Image 
              src={data.image} 
              alt={data.country} 
              width={500} 
              height={500} 
              className="h-full w-full object-cover" 
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center">
              <h2 className="text-white text-xl font-bold">{data.country}</h2>
              <p className="text-gray-200 text-sm">{data.travelers} travelers</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default DestinationSlider;
