import Link from 'next/link'
import Image from 'next/image'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import HeroImg1 from '../images/slidex/preview-banner-01.jpg'
import HeroImg2 from '../images/slidex/preview-banner-02.jpg'
import LogoColor from '@/images/logos/Car2autobuy-Preview-01.svg'
import { Button } from './Button'
export function SwiperSlideX() {
  return (
    <>
      <Swiper
        className="heroCarouselSwiper"
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={1}
        spaceBetween={0}
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-2 bg-black bg-[url('/images/banner-1920x915-1.jpg')] bg-auto md:bg-contain bg-center bg-no-repeat md:grid-cols-2">
            {/* <Image src={HeroImg1} alt='HeroImg1'/> */}
            <div className="mb-20 mt-20">
              <Image
                src={LogoColor}
                alt="HeroImg1"
                layout="fixed"
                width={200}
                height={100}
              />
              <div className="py-4">
                <h1 className="text-2xl font-semibold text-white md:text-3xl">
                  รถมือสอง ฟรีดาวน์ ผ่อนถูก!
                </h1>
                <p className="hidden py-4 text-[18px] text-white md:block">
                  รถมือสอง ราคาถูก สภาพดี ติดต่อได้ทันที บริการฟรี!
                  <br />
                  เว็บไซต์ ซื้อ-ขายรถยนต์มือสอง ที่มีรถให้เลือกมากกว่า 1
                  หมื่นคัน
                  <br />
                  รถสวยสภาพดี การันตีความปลอดภัย อยู่ที่ไหนก็ซื้อได้
                  <br />
                  <br />
                  ตลาดรถยนตร์มือสอง Car2autobuy ซื้อรถง่าย ขายคล่อง เช็ค
                  <br />
                  ราคารถยนตร์ได้ทุกรุ่น ค้นหารถยนตร์มือสองสภาพดี ตรวจเช็ค
                  <br />
                  สภาพรถให้เสร็จสรรพ พร้อมให้คำปรึกษาด้านยานยนตร์ฟรี!
                </p>
                <p className="block px-4 py-4 text-[14px] text-white md:hidden">
                  รถมือสอง ราคาถูก สภาพดี ติดต่อได้ทันที บริการฟรี! เว็บไซต์
                  ซื้อ-ขายรถยนต์มือสอง ที่มีรถให้เลือกมากกว่า 1 หมื่นคัน
                  รถสวยสภาพดี การันตีความปลอดภัย อยู่ที่ไหนก็ซื้อได้
                  <br />
                  ตลาดรถยนตร์มือสอง Car2autobuy ซื้อรถง่าย ขายคล่อง เช็ค
                  ราคารถยนตร์ได้ทุกรุ่น ค้นหารถยนตร์มือสองสภาพดี ตรวจเช็ค
                  สภาพรถให้เสร็จสรรพ พร้อมให้คำปรึกษาด้านยานยนตร์ฟรี!
                </p>
              </div>
              <div className="py-4">
                <Button
                  href={'/buycars'}
                  //variant={featured ? 'solid' : 'outline'}
                  variant={'outline'}
                  color="white"
                  className="rounded-md bg-slate-400/50 px-4 py-2 text-[20px]"
                  aria-label={`ค้นหารถยนต์ ตรงใจคุณ`}
                >
                  ค้นหารถยนต์ ตรงใจคุณ
                </Button>
              </div>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-2 bg-black bg-[url('/images/banner1920x9152.jpg')] bg-auto md:bg-contain bg-center bg-no-repeat md:grid-cols-2">
            {/* <Image src={HeroImg1} alt='HeroImg1'/> */}
            <div></div>
            <div className="mb-20 mt-20">
              <Image
                src={LogoColor}
                alt="HeroImg1"
                layout="fixed"
                width={200}
                height={100}
              />
              <div className="py-4">
                <h1 className="text-2xl font-semibold text-white md:text-3xl">
                  รถมือสอง ฟรีดาวน์ ผ่อนถูก!
                </h1>
                <p className="hidden py-4 text-[18px] text-white md:block">
                  รถมือสอง ราคาถูก สภาพดี ติดต่อได้ทันที บริการฟรี!
                  <br />
                  เว็บไซต์ ซื้อ-ขายรถยนต์มือสอง ที่มีรถให้เลือกมากกว่า 1
                  หมื่นคัน
                  <br />
                  รถสวยสภาพดี การันตีความปลอดภัย อยู่ที่ไหนก็ซื้อได้
                  <br />
                  <br />
                  ตลาดรถยนตร์มือสอง Car2autobuy ซื้อรถง่าย ขายคล่อง เช็ค
                  <br />
                  ราคารถยนตร์ได้ทุกรุ่น ค้นหารถยนตร์มือสองสภาพดี ตรวจเช็ค
                  <br />
                  สภาพรถให้เสร็จสรรพ พร้อมให้คำปรึกษาด้านยานยนตร์ฟรี!
                </p>
                <p className="block px-4 py-4 text-[14px] text-white md:hidden">
                  รถมือสอง ราคาถูก สภาพดี ติดต่อได้ทันที บริการฟรี! เว็บไซต์
                  ซื้อ-ขายรถยนต์มือสอง ที่มีรถให้เลือกมากกว่า 1 หมื่นคัน
                  รถสวยสภาพดี การันตีความปลอดภัย อยู่ที่ไหนก็ซื้อได้
                  <br />
                  ตลาดรถยนตร์มือสอง Car2autobuy ซื้อรถง่าย ขายคล่อง เช็ค
                  ราคารถยนตร์ได้ทุกรุ่น ค้นหารถยนตร์มือสองสภาพดี ตรวจเช็ค
                  สภาพรถให้เสร็จสรรพ พร้อมให้คำปรึกษาด้านยานยนตร์ฟรี!
                </p>
              </div>
              <div className="py-4">
                <Button
                  href={'/buycars'}
                  //variant={featured ? 'solid' : 'outline'}
                  variant={'outline'}
                  color="white"
                  className="rounded-md bg-slate-400/50 px-4 py-2 text-[20px]"
                  aria-label={`ค้นหารถยนต์ ตรงใจคุณ`}
                >
                  ค้นหารถยนต์ ตรงใจคุณ
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
