import Image from 'next/image'
import Link from 'next/link'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import { TextField } from './Fields'
import { bodyType, quotedPrice } from '@/data/opt'
export function HeroCars() {
  return (
    <>
      <Container className="pb-16 pt-10 text-center md:pt-12">
        <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 md:text-5xl">
          ซื้อรถยนต์{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">CAR2AUTOBUY</span>
          </span>{' '}
          ซื้อรถมือสองที่CAR2AUTOBUY
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base tracking-tight text-slate-700 md:text-lg">
          ซื้อรถมือสองง่ายๆ จัดส่งฟรีถึงหน้าบ้านคุณ พร้อมตรวจสอบสภาพรถก่อนจัดส่ง
          175 จุด รับประกัน 1 ปี ราคาดี ไม่มีค่าธรรมเนียมแอบแฝง การันตีคุณภาพโดย
          สหประชาชาติ
        </p>
        <div className="mt-10 w-full gap-x-6 bg-white shadow-xl">
          <div className="px-2 py-10 md:px-10">
            <h2 className="text-start text-3xl font-semibold">ซื้อรถยนต์</h2>
            <TextField className="w-full text-start" label={'ค้นหารถยนต์'} />
            <div className="hidden grid-cols-9 gap-2 py-4 md:grid">
              {bodyType.map((groupbodyType, groupIndex) => (
                <Button
                  href={`/buycars/?type=${groupbodyType.nameEn}`}
                  variant="outline"
                  key={groupIndex}
                  className="rounded-sm"
                >
                  <div>
                    <div className="mx-auto">
                      <Image
                        src={groupbodyType.img}
                        alt={groupbodyType.nameEn}
                        layout="fixed"
                        width={100}
                        height={50}
                        className="h-auto w-10 object-contain md:h-auto md:w-20"
                        unoptimized
                      />
                    </div>
                    <p className="text-xs">{groupbodyType.displayText}</p>
                  </div>
                </Button>
              ))}
            </div>
            <div className="block grid grid-cols-1 gap-2 py-4 md:hidden">
              <Swiper
                className="heroCarouselSwiper"
                loop={true}
                //modules={[Pagination, Navigation]}
                //navigation={true}
                //pagination={{
                //  clickable: true,
                //}}
                autoplay={{
                  delay: 5000,
                }}
                slidesPerView={2}
                spaceBetween={0}
              >
                {bodyType.map((groupbodyType, groupIndex) => (
                  <SwiperSlide key={groupIndex}>
                    <Button
                      href={`/buycars/?type=${groupbodyType.nameEn}`}
                      variant="outline"
                      className="rounded-sm "
                    >
                      <div>
                        <div className="mx-auto">
                          <Image
                            src={groupbodyType.img}
                            alt={groupbodyType.nameEn}
                            layout="fixed"
                            width={100}
                            height={50}
                            className="h-auto w-8 object-contain md:h-auto md:w-20"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs">{groupbodyType.displayText}</p>
                      </div>{' '}
                    </Button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden grid-cols-4 gap-2 py-4 md:grid">
              {quotedPrice.map((quotedPriceX, quotedPriceIndex) => (
                <Button
                  href={`/buycars/?pricemin=${quotedPriceX.min}&pricemax=${quotedPriceX.max}`}
                  variant="solid"
                  key={quotedPriceIndex}
                  className="rounded-sm"
                >
                  <div>
                    {/* <div className="mx-auto">
                      <Image
                        src={quotedPriceX.img}
                        alt={quotedPriceX.nameEn}
                        layout="fixed"
                        width={100}
                        height={50}
                        className="h-auto w-10 object-contain md:h-auto md:w-20"
                        unoptimized
                      />
                    </div> */}
                    <p className="text-xs">{quotedPriceX.displayText}</p>
                  </div>
                </Button>
              ))}
            </div>
            <div className="block grid grid-cols-1 gap-2 py-2 md:hidden">
              <Swiper
                className="heroCarouselSwiper"
                loop={true}
                //modules={[Pagination, Navigation]}
                //navigation={true}
                //pagination={{
                //  clickable: true,
                //}}
                autoplay={{
                  delay: 5000,
                }}
                slidesPerView={1}
                spaceBetween={0}
              >
                {quotedPrice.map((quotedMPriceX, quotedMPriceIndex) => (
                  <SwiperSlide key={quotedMPriceIndex}>
                    <Button
                     href={`/buycars/?pricemin=${quotedMPriceX.min}&pricemax=${quotedMPriceX.max}`}
                      variant="solid"
                      className="rounded-sm w-full"
                    >
                      <div>
                        <p className="text-xs">{quotedMPriceX.displayText}</p>
                      </div>{' '}
                    </Button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
