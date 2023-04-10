import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import carData from '@/data/carlist'
import CurrencyFormat from 'react-currency-format'
import Link from 'next/link'
import FavoriteButton from '@/components/FavoriteButton'



export function HeroWhite() {
  const [postNum, setPostNum] = useState(8) // Default number of posts dislplayed
  //const [SaveClicks, setSaveClicks] = useState()
  
  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 4) // 3 is the number of posts you want to load per click
  }

  
    // useEffect(() => {
    //   localStorage.setItem('favorite', JSON.stringify({CarID: SaveClicks}))
    //   const stored = localStorage.getItem('favorite')
    //  // console.log(stored)
    // }, [])
  
  
 
  return (
    <>
      <Container className="pb-16 pt-5 text-center md:pt-10">
        <h3 className="mx-auto max-w-4xl font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          <span className="relative whitespace-nowrap text-slate-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-red-500/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">ซื้อรถยนต์มือสอง</span>
          </span>{' '}
        </h3>
        <div className="flex justify-center py-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <p className="flex flex items-center text-lg font-semibold ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              ตรวจสภาพรถ 175 จุด
            </p>
            <p className="flex flex items-center text-lg font-semibold ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              ราคาโปร่งใส คุ้มค่า
            </p>
            <p className="flex flex items-center text-lg font-semibold ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              รับประกันสูงสุด 2 ปีเต็ม
            </p>
            <p className="flex flex items-center text-lg font-semibold ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              รับประกันคืนเงินภายใน 30 วัน
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {carData.slice(0, postNum).map((carDataUP, carDataIndex) => (
            <div
              key={carDataIndex}
              className="overflow-hidden rounded-lg bg-white py-4 shadow-md hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Link
                  href={
                    '/car/' +
                    carDataUP.make +
                    '-' +
                    carDataUP.model +
                    '-' +
                    carDataUP.appointmentId
                  }
                  title={carDataUP?.variant}
                >
                  <Image
                    src={
                      'https://fastly-production.24c.in/' +
                      carDataUP.mainImage.path
                    }
                    alt={carDataUP.variant}
                    layout="responsive"
                    width={100}
                    height={60}
                    className="h-auto w-full rounded-t-lg object-cover"
                  />
                </Link>
                <div className="absolute right-0 top-0 flex flex flex h-10 w-20 items-center justify-center rounded-bl-2xl bg-[#E20919]">
                  <div className="h-5 w-auto object-contain"></div>
                  <p className="text-[14px] text-white">รถมาใหม่</p>
                </div>
              </div>
              
              <div className="bg-[#1b65a6] py-2">
                <div className="flex justify-between px-4 text-white">
                  <div className="text-2xl font-bold ">
                    {' '}
                    <CurrencyFormat
                      value={carDataUP.price}
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
                  <div className="flex items-end text-xs">
                    <CurrencyFormat
                      value={(
                        ((parseInt(carDataUP?.price) * 7) / 100 +
                          parseInt(carDataUP?.price)) /
                        60
                      ).toFixed(2)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={''}
                      renderText={(value) => (
                        <p className="flex flex-row py-2">
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
                        </p>
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-between px-4 text-white">
                  <div className="text-xs font-light">
                    {' '}
                    <CurrencyFormat
                      value={
                        (parseInt(carDataUP?.price) * 7) / 100 +
                        parseInt(carDataUP?.price)
                      }
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={''}
                      renderText={(value) => (
                        <p>
                          {value}{' '}
                          <span className="text-xs">บาท(รวมภาษี 7%)</span>
                        </p>
                      )}
                    />
                  </div>
                  <div className="flex items-end text-xs">เงินดาวน์ 0 บาท</div>
                </div>
              </div>
              <div className="flex justify-between px-4 py-2">
                <p className="text-lg font-bold">
                  {carDataUP.make} {carDataUP.year}
                </p>
                 <FavoriteButton DataList={carDataUP.appointmentId} />
                {/* <Button onClick={() => setSaveClicks(carDataUP.appointmentId)}> 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </Button>*/}
              </div>
              <div className="grid grid-cols-4 divide-x divide-gray-200 px-2">
                <p className="line-clamp-1 text-xs">{carDataUP.model}</p>
                <p className="text-xs">{carDataUP.transmissionType}</p>
                <div className="text-xs">
                  <CurrencyFormat
                    value={carDataUP.odometerReading}
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
                <p className="text-xs">{carDataUP.fuelType}</p>
              </div>
              <div className="grid grid-cols-2 gap-0 px-4 py-2">
                <Button
                  href={
                    '/car/' +
                    carDataUP.make +
                    '-' +
                    carDataUP.model +
                    '-' +
                    carDataUP.appointmentId
                  }
                  variant="solid"
                  color="blue"
                  className="rounded-md"
                >
                  <span className="text-center text-xs">
                    รายละเอียดเพิ่มเติม
                  </span>
                </Button>
                <div className="flex items-center justify-center text-center text-[#1b65a6]">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="text-xs">{carDataUP.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 py-4 text-center">
          <Button
            //href={`/cars/?make=${Maname}`}
            variant="solid"
            className="flex items-center justify-center rounded-md border border-gray-300 bg-[#1b65a6] px-4 py-2 font-medium shadow-sm hover:bg-gray-50"
            onClick={handleClick}
          >
            <span className="text-base font-semibold text-gray-100">
              ดูเพิ่มเติม
            </span>
          </Button>
        </div>
      </Container>
    </>
  )
}
