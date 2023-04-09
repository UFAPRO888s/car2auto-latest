import Link from 'next/link'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Button } from './Button'

const Img_pic = [
  { img: '/images/ads/Adcard-01.png' },
  { img: '/images/ads/Adcard-02.png' },
  { img: '/images/ads/Adcard-03.png' },
  { img: '/images/ads/Adcard-04.png' },
  { img: '/images/ads/Adcard-05.png' },
  { img: '/images/ads/Adcard-06.png' },
  { img: '/images/ads/Adcard-07.png' },
  { img: '/images/ads/Adcard-08.png' },
]
export function SwiperSlideXbuy() {
  return (
    <div className="grid h-auto w-full grid-cols-4 gap-4 px-4 py-2">
      {Img_pic.slice(0, 4).map((columnImg_pic, columnIndex) => (
        <Image
          key={columnIndex}
          src={columnImg_pic.img}
          alt={'ads' + columnIndex}
          layout="responsive"
          width={100}
          height={60}
          className="overflow-hidden rounded-xl object-contain"
          
        />
      ))}
    </div>
  )
}
