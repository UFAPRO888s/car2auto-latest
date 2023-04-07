import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Button } from '@/components/Button'
import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Navigation, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroCars } from '@/components/HeroCars'
import { HeroNewCars } from '@/components/HeroNewCars'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import SwiperV from '@/components/SwiperV'
import carData from '@/data/carlist'
import { Container } from '@/components/Container'
import CurrencyFormat from 'react-currency-format'
import { TextField } from '@/components/Fields'

export default function CarDetailing({ DataCar }) {
  const [DownBt, setDownBt] = useState('')
  const [DownPr, setDownPr] = useState('')
  const [Interest, setInterest] = useState('')
  const [Period, setPeriod] = useState('')
  const [Price, setPrice] = useState('')
  const [PriceXvat, setPriceXvat] = useState('')
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  function handlePriceChange(event) {
    //   console.log(event.target.value)
    setPrice(event.target.value)
  }

  function handleDownBtChange(event) {
    //  console.log(event.target.value)
    setDownBt(event.target.value)
  }
  function handlePerDownChange(event) {
    //  console.log(event.target.value)
    setDownPr(event.target.value)
    //const prx = "0."+event.target.value
    const prtobt = (Price * event.target.value) / 100
    // console.log(prtobt)
    setDownBt(prtobt)
  }
  function handleinterestChange(event) {
    // console.log(event.target.value)
    setInterest(event.target.value)
  }
  function PricePeriod(value) {
    // console.log(value)
    const PriceXDown = (Price - DownBt) * (Interest / 100)
    const intye = PriceXDown * value
    const PriceXvat = Number(intye) + Number(Price)
    const PriceXintye = PriceXvat / (value * 12)
    //const PriceXvatXinx = PriceXvat + Interest - DownBt;
    //console.log(intye)
    setPeriod(PriceXintye.toFixed(2))
    setPriceXvat(PriceXvat)
  }
  return (
    <>
      <Head>
        <title>
          รถมือสอง {DataCar?.make} {DataCar?.model} {DataCar?.year}ราคาคุ้มค่า
          รับประกันคุณภาพ - รถมือสอง car2autobuy
        </title>
        <meta
          name="description"
          content={`รถยนต์มือสอง ${DataCar?.variant} คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง`}
        />
      </Head>
      <Header />
      {/* <SwiperSlideX /> */}
      <main className=" bg-[#d2e0ed]">
        <Container>
          <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-12">
            <div className="col-span-10 h-[500px] w-full">
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-slide rounded-xl"
              >
                {DataCar.gallery.map((galleryBrandUP, galleryIndex) => (
                  <SwiperSlide key={galleryIndex}>
                    <Image
                      src={
                        'https://fastly-production.24c.in/' +
                        galleryBrandUP.path
                      }
                      alt={galleryBrandUP.label}
                      layout="responsive"
                      width={100}
                      height={60}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-span-2">
              <SwiperV imgxs={DataCar.gallery} />
            </div>
          </div>
        </Container>

        <div className="bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-4 py-4 sm:px-6 md:grid-cols-12 lg:px-8">
            <div className="col-span-6 flex text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <div className="grid grid-rows-2 ">
                <h1 className="text-2xl font-bold ">
                  {DataCar?.make} {DataCar?.model} {DataCar?.year}
                </h1>
                <div className="grid grid-cols-4 divide-x divide-gray-200">
                  <p className="line-clamp-1 px-1 text-center text-xs">
                    {DataCar.model}
                  </p>
                  <p className="px-1 text-center text-xs">
                    {DataCar.transmissionType}
                  </p>
                  <div className="px-1 text-center text-xs">
                    <CurrencyFormat
                      value={DataCar.odometerReading}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={''}
                      renderText={(value) => (
                        <p>
                          {value} <span className="text-xs">กม.</span>
                        </p>
                      )}
                    />
                  </div>
                  <p className="px-1 text-center text-xs">{DataCar.fuelType}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="text-end text-2xl font-bold">
                <CurrencyFormat
                  value={DataCar?.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={''}
                  renderText={(value) => (
                    <div className="flex flex-row py-0">
                      {value} <span>บาท</span>
                    </div>
                  )}
                />
                <div className="text-xs">
                  <CurrencyFormat
                    value={
                      (parseInt(DataCar?.price) * 7) / 100 +
                      parseInt(DataCar?.price)
                    }
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                    renderText={(value) => (
                      <div className="flex flex-row py-0">
                        {value} <span>บาท (รวมภาษี7%)</span>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2 flex text-start">
              <div className="text-2xl font-bold">
                <CurrencyFormat
                  value={(
                    ((parseInt(DataCar?.price) * 7) / 100 +
                      parseInt(DataCar?.price)) /
                    60
                  ).toFixed(2)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={''}
                  renderText={(value) => (
                    <div className="flex flex-row py-0">
                      {value} <span className="text-xs">บ/เดือน </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </div>
                  )}
                />
                <p className="text-xs">เงินดาวน์ 0 บาท</p>
              </div>
            </div>
            <div className="col-span-2 flex text-center">
              <Button
                href={
                  '/car/' +
                  DataCar.make +
                  '-' +
                  DataCar.model +
                  '-' +
                  DataCar.appointmentId
                }
                variant="solid"
                color="blue"
                className="w-full rounded-md"
              >
                <span className="text-center text-xs">ติดต่อผู้ขาย</span>
              </Button>
            </div>
          </div>
          <div className="bg-[#1b65a6] text-white">
            <div className="mx-auto grid max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div>
                <h3 className="text-2xl font-semibold">รายละเอียดรถยนต์</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-5">
                <div className="grid grid-rows-2 gap-2">
                  <h4>ออกรถเมื่อ:</h4>
                  <p className="font-bold">{DataCar?.year}</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <h4>ทะเบียน:</h4>
                  <p className="font-bold">{DataCar?.year}</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <h4>เจ้าของ:</h4>
                  <p className="font-bold">{DataCar?.ownerNumber}</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <h4>สี:</h4>
                  <p className="font-bold">{DataCar?.color}</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <h4>คู่มือรถ:</h4>
                  <p className="font-bold">{DataCar?.booked}</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <h4>ที่นั่ง:</h4>
                  <p className="font-bold">{DataCar?.st}</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <h4>ระบบเกียร์:</h4>
                  <p className="font-bold">{DataCar?.transmissionType}</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <h4>เครื่องยนต์:</h4>
                  <p className="font-bold">{DataCar?.engineCc}</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <h4>ระยะทางที่ขับ:</h4>
                  <p className="font-bold">{DataCar?.odometerReading}</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <h4>พรบ:</h4>
                  คุ้มครองถึง{' '}
                  <p className="font-bold">{DataCar?.warrantyExpiryDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#d2e0ed] py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
            <div className="w-full rounded-lg bg-white px-8 py-4">
              <div className="text-start text-gray-700">
                <h4 className="text-2xl font-bold">
                  สิ่งอำนวยความสะดวก
                  <br />
                  <span className="text-lg">
                    {DataCar?.make} {DataCar?.model}
                  </span>
                </h4>
                <div className="flex justify-between py-4 text-start">
                  <div className="mr-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>ถุงลมนิรภัย</p>
                  </div>
                  <div className="mr-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>กล้องถอย</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between py-4">
                  <div className="mr-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>ระบบตรวจจุดอับสายตา</p>
                  </div>
                  <div className="mr-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>ระบบควบคุมความเร็วอัตโนมัติ</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between py-4">
                  <div className="mr-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>บูลทูธ</p>
                  </div>
                  <div className="mr-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>เซ็นเซอร์ถอยหลัง</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between py-4">
                  <div className="mr-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>หน้าต่างไฟฟ้า</p>
                  </div>
                  <div className="mr-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>กล้องหน้ารถ</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between py-4">
                  <div className="mr-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>การติดตั้ง คาร์ซีท</p>
                  </div>
                  <div className="mr-2 flex items-center"></div>
                </div>
              </div>
            </div>
            <div className="w-full rounded-lg bg-white px-8 py-4">
              <div className="mx-auto grid grid-cols-1">
                <h4 className="text-2xl font-bold">
                  คำนวนสินเชื่อ
                  <br />
                  <span className="text-lg">
                    {DataCar?.make} {DataCar?.model}
                  </span>
                </h4>
                <div className="rounded-lg md:col-span-8">
                  <div className="mx-4 my-4 rounded-lg">
                    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
                      <div>
                        <TextField
                          id={'PriceCha'}
                          label={'ราคารถ (บาท)'}
                          defValue={DataCar?.price}
                          onChange={handlePriceChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
                        <TextField
                          id={'DownBt'}
                          className="col-span-1 md:col-span-4"
                          label={'เงินดาวน์ บาท'}
                          onChange={handleDownBtChange}
                          defValue={DownBt}
                          dix={true}
                        />
                        <TextField
                          id={'PerDown'}
                          className="col-span-1 md:col-span-2"
                          label={'เงินดาวน์ %'}
                          defValue={'0'}
                          onChange={handlePerDownChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
                      <div>
                        <TextField
                          id={'interest'}
                          label={'อัตราดอกเบี้ย (%)'}
                          onChange={handleinterestChange}
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 block text-sm font-medium text-gray-700">
                          ระยะเวลา
                        </h3>
                        <div className="grid grid grid-cols-3 justify-items-center gap-2 font-bold md:grid-cols-6">
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod('1')}
                          >
                            1
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod('2')}
                          >
                            2
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod('3')}
                          >
                            3
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod('4')}
                          >
                            4
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod('5')}
                          >
                            5
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod('6')}
                          >
                            6
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid content-center justify-items-center md:col-span-4">
                  <div className="mx-4 my-4 rounded-lg bg-[#ECF3F9] px-4 py-4">
                    <small>ยอดจัดรวม:</small>
                    <div className="text-2xl font-bold">
                      <CurrencyFormat
                        value={PriceXvat}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'฿'}
                        renderText={(value) => (
                          <p>
                            {value} <span className="text-xs">บาท</span>
                          </p>
                        )}
                      />
                    </div>

                    <small>ประเมินค่าผ่อนชำระรายเดือน:</small>
                    <div className="text-2xl font-bold text-red-500">
                      <CurrencyFormat
                        value={Period}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'฿'}
                        renderText={(value) => (
                          <p>
                            {value} <span className="text-xs">บาท</span>
                          </p>
                        )}
                      />
                    </div>
                    <p className="text-xs">
                      อัตราดอกเบี้ยและจำนวนเงินที่คำนวณเป็นเพียงการประมาณการเท่านั้น
                      จำนวนจริงอาจแตกต่างกันไปตามเครดิตของคุณ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.params
  if (!slug) {
    return {
      notFound: true,
    }
  }

  const result = carData.filter(
    (carx) => carx.make + '-' + carx.model + '-' + carx.appointmentId == slug
  )

  return {
    props: { DataCar: result[0] },
  }
}
