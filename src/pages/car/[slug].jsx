import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'
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
import CenteredSingleAction from '@/components/CenteredSingleAction'
import LoanX from '@/components/LoanX'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
import Loan from '@/components/Loan'

export default function CarDetailing({ DataCar }) {
  const [XDownBt, setxDownBt] = useState('')
  const [XDownPr, setxDownPr] = useState('')
  const [XInterest, setxInterest] = useState('')
  const [XPeriod, setxPeriod] = useState('')
  const [XPrice, setxPrice] = useState('')
  const [XPriceXvat, setxPriceXvat] = useState('')
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [open, setOpen] = useState(false)

  // function handlePriceChange(event) {
  //   console.log(event.target.value)
  //  // setPrice(event)
  // }

  // function handleDownBtChange(event) {
  //    console.log(event.target.value)
  //    setxDownBt(event.target.value)
  // }

  function handlePerDownChange(event) {
    //console.log(event.target.value)
    setxDownPr(event.target.value)
    //const prx = "0."+event.target.value
    //console.log(XPrice)
    //const prtobt = (XPrice * event.target.value) / 100
    // console.log(prtobt)
    //setxDownBt(prtobt)
  }
  function handleinterestChange(event) {
    // console.log(event.target.value)
    setxInterest(event.target.value)
  }
  function PricePeriod(value) {
    //console.log(XInterest,XPrice,XDownBt)
    const PriceXDown =
      (Number(XPrice) - Number(XDownBt)) * (Number(XInterest) / 100)
    const intye = Number(PriceXDown) * value
    //const PriceXvat = Number(intye) + Number(XPrice)
    const PriceXintye = (Number(intye) + Number(XPrice)) / (Number(value) * 12)
    //const PriceXvatXinx = PriceXvat + Interest - DownBt;
    //console.log(PriceXDown,intye)
    setxPeriod(PriceXintye.toFixed(2))
    //setxPriceXvat(PriceXvat)
  }
  return (
    <>
      <PageSEO
        title={`รถมือสอง ${DataCar?.make} ${DataCar?.model} ${DataCar?.year} ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy`}
        description={`รถยนต์มือสอง ${DataCar?.variant} คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง`}
        ogImageUrlX={DataCar?.gallery[0].path}
        twImageUrlX={DataCar?.gallery[0].path}
      />
      <Header />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        ช่องทางติดต่อ
                      </Dialog.Title>
                      <p className="text-sm text-gray-500">เลือกได้ตามสะดวก</p>
                      <div className="mt-2 grid grid-cols-3">
                        <div className="h-auto w-full">
                          <Image
                            className="h-10 w-10"
                            src={'/images/img/fb.png'}
                            alt="car-fb"
                            width={50}
                            height={50}
                            layout="fixed"
                            priority
                          />
                        </div>
                        <div className="h-auto w-full">
                          <Image
                            className="h-10 w-10"
                            src={'/images/img/linex.png'}
                            alt="car-linex"
                            width={50}
                            height={50}
                            layout="fixed"
                            priority
                          />
                        </div>
                        <div className="h-auto w-full">
                          <Image
                            className="h-10 w-10"
                            src={'/images/img/youtube.png'}
                            alt="car-youtube"
                            width={50}
                            height={50}
                            layout="fixed"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Go back to dashboard
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* <SwiperSlideX /> */}
      <main className="bg-[#d2e0ed]">
        <Container>
          <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-12">
            <div className="col-span-10 h-auto w-full md:h-[500px]">
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
                      className="bg-[#d2e0ed]"
                      
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-span-2 hidden md:block">
              <SwiperV imgxs={DataCar.gallery} />
            </div>
          </div>
        </Container>

        <div className="bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-4 py-4 sm:px-6 md:grid-cols-12 lg:px-8">
            <div className="col-span-6 block text-center md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-auto text-red-500 md:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <div className="grid grid-rows-2">
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
                    <p className="flex flex-row py-0">
                      {value} <span>บาท</span>
                    </p>
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
                      <p className="flex flex-row py-0">
                        {value} <span>บาท (รวมภาษี7%)</span>
                      </p>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2 flex hidden text-start md:block">
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
                type="button"
                href={'#'}
                variant="solid"
                className="w-full rounded-md bg-[#F37373]"
                onClick={() => setOpen(true)}
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
              <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-5">
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
                <div className="grid grid-cols-2 py-4 text-start">
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
                <div className="grid grid-cols-2 py-4">
                  <div className="mr-2 flex items-start">
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
                <div className="grid grid-cols-2 py-4">
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
                <div className="grid grid-cols-2 py-4">
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
                <div className="grid grid-cols-2 py-4">
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
            <div className="w-full rounded-lg bg-white px-4 py-4 md:px-8">
              <div className="mx-auto grid grid-cols-1">
                {/* <h4 className="text-2xl font-bold">
                  คำนวนสินเชื่อ
                  <br />
                  <span className="text-lg">
                    {DataCar?.make} {DataCar?.model}
                  </span>
                </h4>
                <div className="rounded-lg md:col-span-8"> */}
                  <Loan car_pricex={DataCar?.price} car_title={DataCar?.make+" "+DataCar?.model+" "+DataCar?.variant} />
                  {/* <div className="grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
                    <div className="text-3xl font-semibold">
                      <CurrencyFormat
                        value={DataCar?.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={(value) => (
                          <div className="flex flex-row py-0">
                            {value} <span className="text-xs">บาท</span>
                          </div>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-2xl font-semibold md:grid-cols-6">
                      <CurrencyFormat
                        value={(DataCar?.price * Number(XDownPr)) / 100}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={(value) => (
                          <div className="flex flex-row py-0">
                            {value} <span className="text-xs">บาท</span>
                          </div>
                        )}
                      />
                    </div>
                    <TextField
                      id={'PerDown'}
                      className=""
                      label={'เงินดาวน์ %'}
                      defValue={'0'}
                      onChange={handlePerDownChange}
                    />
                    <div>
                      <TextField
                        id={'interest'}
                        label={'อัตราดอกเบี้ย (%)'}
                        onChange={handleinterestChange}
                      />
                    </div>
                  </div>

                  <div className="mx-4 my-4 rounded-lg bg-[#ECF3F9]">
                    <div className="grid grid-cols-1 gap-4 px-4 py-4">
                      <div>
                        <h3 className="mb-3 block text-sm font-medium text-gray-700">
                          ระยะเวลา
                        </h3>
                        <div className="grid grid grid-cols-3 justify-items-center gap-2 font-bold md:grid-cols-6">
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod(1)}
                          >
                            1
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod(2)}
                          >
                            2
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod(3)}
                          >
                            3
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod(4)}
                          >
                            4
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod(5)}
                          >
                            5
                          </div>
                          <div
                            className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                            onClick={() => PricePeriod(6)}
                          >
                            6
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>*/}
                  {/* <small>ประเมินค่าผ่อนชำระรายเดือน:</small>
                  <div className="text-2xl font-bold text-red-500">
                    <CurrencyFormat
                      value={XPeriod}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'฿'}
                      renderText={(value) => (
                        <div>
                          {value} <span className="text-xs">บาท</span>
                        </div>
                      )}
                    />
                   <span className='text-xs font-normal text-black'>ต้องการคำนวน ภาษี7% คำนวนยอดผ่อนชำระรถยนต์ รายปี ตามอัตราดอกเบี้ยที่กำหนดได้เอง <Link className='text-red-500' href={"/loancalc"} title='คำนวนยอดผ่อนชำระรถยนต์'>คำนวนยอดผ่อนชำระรถยนต์</Link></span>
                  </div> */}
                  {/*<div className="mx-4 my-4 rounded-lg">
                     <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
                      <div>
                        <TextField
                          id={'PriceCha'}
                          label={'ราคารถ (บาท)'}
                          defValue={DataCar?.price}
                          //value={DataCar?.price}
                          onChange={handlePriceChange}
                          //onChange={(event) => setPrice(event.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
                        <TextField
                          id={'DownBt'}
                          className="col-span-1 md:col-span-4"
                          label={'เงินดาวน์ บาท'}
                          onChange={handleDownBtChange}
                          defValue={XDownBt}
                          dix={true}
                        />
                        <TextField
                          id={'PerDown'}
                          className="col-span-1 md:col-span-2"
                          label={'เงินดาวน์ %'}
                          //defValue={'0'}
                          onChange={handlePerDownChange}
                        />
                      </div>
                    </div> */}
                  {/* <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
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
                  </div>*/}
                {/* </div> */}
                {/* <div className="grid grid content-center justify-items-center md:col-span-4">
                  <div className="mx-4 my-4 rounded-lg bg-[#ECF3F9] px-4 py-4">
                    <small>ยอดจัดรวม:</small>
                    <div className="text-2xl font-bold">
                      <CurrencyFormat
                        value={XPriceXvat}
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
                        value={XPeriod}
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
                </div> */}
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
