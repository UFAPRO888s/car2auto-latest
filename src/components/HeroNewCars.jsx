import Image from 'next/image'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import GroupBrand from '@/data/groupbrand'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import CurrencyFormat from 'react-currency-format'
import HotIcon from '@/images/hot-icon.svg'
import Link from 'next/link'
const MakeBrand = [
  {
    brand: 'Nissan',
    count: 1129,
    imgpath: '/images/brands/nissan.png',
    href: '/nissan',
    bgcolor: 'bg-yellow-500',
  },
  {
    brand: 'Toyota',
    count: 4652,
    imgpath: '/images/brands/toyota.png',
    href: '/toyota',
    bgcolor: 'bg-purple-600',
  },
  {
    brand: 'Honda',
    count: 2599,
    imgpath: '/images/brands/honda.png',
    href: '/honda',
    bgcolor: 'bg-yellow-500',
  },
  {
    brand: 'Mazda',
    count: 890,
    imgpath: '/images/brands/mazda.png',
    href: '/mazda',
    bgcolor: 'bg-green-500',
  },
  {
    brand: 'Mitsubishi',
    count: 1169,
    imgpath: '/images/brands/mitsubishi.png',
    href: '/mitsubishi',
    bgcolor: 'bg-purple-600',
  },
  {
    brand: 'Isuzu',
    count: 1224,
    imgpath: '/images/brands/isuzu.png',
    href: '/isuzu',
    bgcolor: 'bg-pink-600',
  },
]

export function HeroNewCars() {
  return (
    <>
      <div className="bg-[url('/images/banner1920x9152.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-blue-600/30 backdrop-brightness-75">
          <Container className="pb-10 pt-4 text-center md:pt-10 ">
            <div className="rounded-xl bg-white px-6 py-4 shadow-lg">
              <div className="grid grid-cols-1 md:flex md:flex md:items-stretch justify-between gap-2">
                <div className="self-center px-4">
                  <h2 className="border-b-4 border-red-500 text-lg font-medium md:text-4xl">
                    ยี่ห้อรถยนต์มือสองแนะนำ
                  </h2>
                </div>
                <div className="hidden grid-cols-6 gap-4 py-4 md:grid ">
                  {MakeBrand.map((MakeBrandUP, MakeIndex) => (
                    <Button
                      //href={`/buycars/?make=${MakeBrandUP.brand}`}
                      variant="outline"
                      key={MakeIndex}
                      className="rounded-lg"
                    >
                      <div>
                        <div className="mx-auto">
                          <Image
                            src={MakeBrandUP.imgpath}
                            alt={MakeBrandUP.brand}
                            layout="fixed"
                            width={70}
                            height={70}
                            className="h-auto w-10 object-contain md:h-auto md:w-14"
                          />
                        </div>
                        <p className="text-xs">{MakeBrandUP.string}</p>
                      </div>
                    </Button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 py-4 md:hidden">
                  {MakeBrand.map((MakeBrandUP, MakeIndex) => (
                    <Button
                      //href={`/buycars/?make=${MakeBrandUP.brand}`}
                      variant="outline"
                      key={MakeIndex}
                      className="rounded-lg"
                    >
                      <div>
                        <div className="mx-auto">
                          <Image
                            src={MakeBrandUP.imgpath}
                            alt={MakeBrandUP.brand}
                            layout="fixed"
                            width={70}
                            height={70}
                            className="h-5 w-5 object-contain"
                          />
                        </div>
                        <p className="text-xs">{MakeBrandUP.string}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-18 mt-10 block md:hidden">
              <Swiper
                className="heroCarouselSwiper"
                loop={true}
                modules={[Pagination, Navigation]}
                navigation={true}
                //pagination={{
                //  clickable: true,
                //}}
                autoplay={{
                  delay: 5000,
                }}
                slidesPerView={1}
                spaceBetween={10}
              >
                {GroupBrand.map((GroupBrandSL, BrandSlIndex) => (
                  <SwiperSlide key={BrandSlIndex}>
                    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                      <div className="relative">
                        <Image
                          src={
                            'https://fastly-production.24c.in/' +
                            GroupBrandSL.mainImage.path
                          }
                          alt={GroupBrandSL.variant}
                          layout="responsive"
                          width={100}
                          height={70}
                          className="h-auto w-full rounded-t-lg object-cover"
                        />
                        <div className="absolute right-0 top-0 flex flex flex h-10 w-20 items-center justify-center rounded-bl-2xl bg-[#E20919]">
                          <div className="h-5 w-auto object-contain"></div>
                          <p className="text-[14px] text-white">HOT</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-8 divide-x divide-slate-400 rounded-b-lg bg-white px-2 py-4">
                        <div className="col-span-6">
                          <h3 className="px-2 text-start text-lg font-semibold">
                            {GroupBrandSL.make} {GroupBrandSL.model}
                          </h3>
                          <div className="px-2">
                            <div className="flex flex items-stretch text-lg font-bold text-red-500">
                              <span className="mr-1 flex self-start text-[10px]">
                                เริ่มต้น
                              </span>
                              <CurrencyFormat
                                value={GroupBrandSL.price}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={''}
                                renderText={(value) => (
                                  <p>
                                    {value} <span className="text-xs">บาท</span>
                                  </p>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="px-2 text-lg font-bold">
                            {GroupBrandSL.odometerReading}
                          </p>
                          <small>กม.</small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mb-10 mt-20 hidden md:block">
              <Swiper
                className="heroCarouselSwiper"
                loop={true}
                modules={[Pagination, Navigation]}
                navigation={true}
                //pagination={{
                //  clickable: true,
                //}}
                autoplay={{
                  delay: 5000,
                }}
                slidesPerView={4}
                spaceBetween={10}
              >
                {GroupBrand.map((GroupBrandSL, BrandSlIndex) => (
                  <SwiperSlide key={BrandSlIndex}>
                    <Link
                      href={
                        '/car/' +
                        GroupBrandSL.make +
                        '-' +
                        GroupBrandSL.model +
                        '-' +
                        GroupBrandSL.appointmentId
                      }
                    >
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                        <div className="relative">
                          <Image
                            src={
                              'https://fastly-production.24c.in/' +
                              GroupBrandSL.mainImage.path
                            }
                            alt={GroupBrandSL.variant}
                            layout="responsive"
                            width={100}
                            height={70}
                            className="h-auto w-full rounded-t-lg object-cover"
                          />
                          <div className="absolute right-0 top-0 flex flex flex h-10 w-20 items-center justify-center rounded-bl-2xl bg-[#E20919]">
                            <div className="h-5 w-auto object-contain"></div>
                            <p className="text-[14px] text-white">HOT</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-8 divide-x divide-slate-400 rounded-b-lg bg-white px-2 py-4">
                          <div className="col-span-6">
                            <h3 className="px-2 text-start text-lg font-semibold">
                              {GroupBrandSL.make} {GroupBrandSL.model}
                            </h3>
                            <div className="px-2">
                              <div className="flex flex items-stretch text-lg font-bold text-red-500">
                                <span className="mr-1 flex self-start text-[10px]">
                                  เริ่มต้น
                                </span>
                                <CurrencyFormat
                                  value={GroupBrandSL.price}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  prefix={''}
                                  renderText={(value) => (
                                    <p>
                                      {value}{' '}
                                      <span className="text-xs">บาท</span>
                                    </p>
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2 text-center">
                            <p className="px-2 text-lg font-bold">
                              {GroupBrandSL.odometerReading}
                            </p>
                            <small>กม.</small>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}
