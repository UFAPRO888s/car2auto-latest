import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/autoplay";

// import required modules
import { Mousewheel, Pagination } from 'swiper'

export default function SwiperV({ imgxs }) {
  //console.log(imgxs)
  return (
    <div>
      <Swiper
        direction={'vertical'}
        slidesPerView={4}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper2 rounded-xl overflow-hidden"
      >
        {imgxs.map((groupgallery, groupIndex) => (
          <SwiperSlide key={groupIndex}>
            <Image
              src={'https://fastly-production.24c.in/' + groupgallery.path}
              alt={groupgallery.label}
              layout="responsive"
              width={100}
              height={60}
              className="rounded-xl object-cover overflow-hidden"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
