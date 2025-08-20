'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from 'swiper/modules';
import { reviewData } from '@/data/data';
import { FaStar } from 'react-icons/fa';
import Image from "next/image";

const ReviewSider = () => {
  return (
    <div>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
        {reviewData.map((data) => (
          <SwiperSlide key={data.id} className="bg-white rounded-3xl block">
            <div className="w-[80%] mx-auto mt-16 text-center">
              {/* Review text */}
              <p className="text-xs sm:text-sm md:text-base font-semibold">
                {data.review}
              </p>

              {/* Stars */}
              <div className="flex items-center justify-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"
                  />
                ))}
              </div>

              {/* User profile */}
              <div className="mt-10 flex flex-col items-center">
                <Image
                  src={data.image}
                  width={60}
                  height={60}
                  alt="client"
                  className="rounded-full"
                />
                <p className="text-sm sm:text-lg font-semibold mt-2">
                  {data.name}
                </p>
                <p className="text-gray-600 text-xs sm:text-base">
                  Web Developer
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ReviewSider
