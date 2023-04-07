import React, { useId, useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import CarData from '@/data/carlist'
import { Button } from '@/components/Button'
import Link from 'next/link'
import CurrencyFormat from 'react-currency-format'

const featuresBrand = [
  {
    Brand: 'Toyota',
    countx: '1',
  },
  {
    Brand: 'Honda',
    countx: '3',
  },
  {
    Brand: 'Mazda',
    countx: '2',
  },
  {
    Brand: 'Isuzu',
    countx: '1',
  },
  {
    Brand: 'Mitsubishi',
    countx: '6',
  },
]

export function SecondaryCarNew() {
  const [count, setCount] = useState(0)
  const [Maname, setMaName] = useState('Toyota')

  const sayBrand = (nameBrand) => {
    //e.preventDefault();
    setMaName(nameBrand)
  }

  Array.prototype.randomSite = function () {
    return this[Math.floor(Math.random() * this.length)];
  };
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  // useEffect(() => {
  //    console.log(`Hi ${name} you clicked ${count} times`)
  // })
  //console.log(CarData.randomSite())
  const CarDataRanD = getRandomIntInclusive(0,(CarData.length - 16))
  const CarNux = CarDataRanD + 16
  //console.log(CarDataRanD,CarNux)
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="bg-[#EFF3FA] py-5  md:py-20"
    >
      <Container>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <h2 className="text-start text-lg font-semibold tracking-tight text-gray-900 md:text-4xl">
              ซื้อรถยนต์มือสอง
            </h2>
          </div>

          {/* <p className="mt-2 text-lg text-gray-600">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg.
          </p> */}
          {/* <div>
            <ul id="listcarf" className="flex flex-wrap gap-4">
              {featuresBrand.map((feaBrand, icxd) => (
                <li
                  key={icxd}
                  className="flex flex-row rounded-md border hover:border-orange-500"
                >
                  <div
                    className="cursor-pointer rounded-md bg-[#FFF0EB] px-4 py-0 text-center text-[14px] font-semibold text-[#FF4605]"
                    name={feaBrand.Brand}
                    onClick={() => {
                      sayBrand(feaBrand.Brand)
                    }}
                  >
                    {feaBrand.Brand}
                    <br />
                    <span className="text-[10px] font-medium">
                      {feaBrand.countx} รถที่กำลังขาย
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        {/* <ul
          role="list"
          className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-4 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-4"
        >
          {CarData.map((feature) => {
            if (feature.make == Maname)
              return (
                <li
                  key={feature.appointmentId}
                  className="h-fit w-full rounded-2xl rounded-lg border hover:border-orange-500 bg-[#222732] md:w-[300px]"
                >
                  <div>
                    <Link
                      href={
                        '/car/' +
                        feature.make +
                        '-' +
                        feature.model +
                        '-' +
                        feature.appointmentId
                      }
                    >
                      <Image
                        className="rounded-t-lg"
                        src={
                          'https://fastly-production.24c.in/' +
                          feature.mainImage.path
                        }
                        alt={feature.variant}
                        width={100}
                        height={50}
                        layout="responsive"
                      />
                    </Link>
                  </div>

                
                  <div className="px-4 py-2">
                    <h3 className="line-clamp-1 font-semibold text-gray-100">
                      {feature.variant}
                    </h3>
                    <div className="text-2xl font-semibold text-gray-100">
                    <CurrencyFormat value={feature.price} displayType={'text'} thousandSeparator={true} prefix={'฿'} renderText={value => <p>{value} <span className='text-xs'>บาท</span></p>} />
                    </div>
                    <p className="mt-2 text-gray-700">{feature.description}</p>
                    <hr />
                    <ul className="flex items-center py-0">
                      <li>
                        <Button
                          href={
                            '/car/' +
                            feature.make +
                            '-' +
                            feature.model +
                            '-' +
                            feature.appointmentId
                          }
                          title={feature.year}
                          variant="outline"
                          className="rounded-md bg-[#FF4605] px-2 py-0 text-gray-100"
                        >
                          <span className="text-gray-100">{feature.year}</span>
                        </Button>
                      </li>
                      <li>
                        <Link
                          href={
                            '/car/' +
                            feature.make +
                            '-' +
                            feature.model +
                            '-' +
                            feature.appointmentId
                          }
                          title={feature.odometerReading}
                          className="rounded-md px-2 py-0 text-xs text-gray-100"
                        >
                          <div className="text-gray-100 px-2">
                          <CurrencyFormat value={feature.odometerReading} displayType={'text'} thousandSeparator={true} renderText={value => <p>{value} <span className='text-xs'> กม.</span></p>} />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            '/car/' +
                            feature.make +
                            '-' +
                            feature.model +
                            '-' +
                            feature.appointmentId
                          }
                          title={feature.transmissionType}
                          className="rounded-md px-2 py-0 text-xs text-gray-100"
                        >
                          <span className="text-gray-100">
                            {feature.transmissionType}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            '/car/' +
                            feature.make +
                            '-' +
                            feature.model +
                            '-' +
                            feature.appointmentId
                          }
                          title={feature.fuelType}
                          className="rounded-md px-2 py-0 text-xs text-gray-100"
                        >
                          <span className="text-gray-100">
                            {feature.fuelType}
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )
          })}
        </ul> */}
        <ul
          role="list"
          className="grid w-full grid-cols-1 gap-2 py-4 lg:grid-cols-4"
        >
          {/* <Carousel {...getConfigurableProps()}> */}
          {CarData.slice(CarDataRanD,CarNux).map((car) => {
           // if (car.make == Maname)
              return (
                <li
                  key={car.appointmentId}
                  className="border-1 col-span-1 flex w-full flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-md hover:shadow-xl"
                >
                  <Link
                    href={
                      '/car/' +
                      car.make +
                      '-' +
                      car.model +
                      '-' +
                      car.appointmentId
                    }
                  >
                    <div className="flex flex-1 flex-col p-0">
                      <div className="relative ">
                        <Image
                          className="h-auto w-full rounded-t-lg"
                          src={
                            'https://fastly-production.24c.in/' +
                            car.mainImage.path
                          }
                          alt={car.make + ' ' + car.model}
                          layout="responsive"
                          width={100}
                          height={60}
                        />
                        <p className="absolute left-2 top-2 rounded-md bg-[#005A96] p-1 text-[12px] text-white">
                          {car.carHighlights[0].name}
                        </p>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between">
                          <h3 className="font-['Poppins'] text-[18px] font-semibold">
                            {car.year} {car.make}
                          </h3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6 text-orange-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                        </div>
                        <p className="line-clamp-1 text-start text-[14px] font-medium text-['Poppins']">
                          {car.variant}
                        </p>
                        <p className="flex gap-4 space-x-4 py-3 text-start text-[12px] text-gray-500">
                          <CurrencyFormat
                            value={car.odometerReading}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={''}
                            renderText={(value) => (
                              <p>
                                {value} <span className="text-xs"> ก.ม.</span>
                              </p>
                            )}
                          />{' '}
                          | {car.fuelType} | {car.transmissionType}
                        </p>
                        <dl>
                          <dt className="sr-only">ราคารถมือสอง</dt>
                          <dd className="flex flex items-center justify-between text-[18px] font-semibold text-['Poppins'] text-orange-500">
                            <CurrencyFormat
                              value={car?.price}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'฿'}
                              renderText={(value) => (
                                <p>
                                  {value} <span className="text-xs">บาท</span>
                                </p>
                              )}
                            />
                            <span className="flex items-center gap-1 text-end text-[14px] font-medium text-gray-500">
                              {/* <CurrencyFormat
                            value={(
                              ((parseInt(car?.price) * 7) / 100 +
                                parseInt(car?.price)) /
                              60
                            ).toFixed(2)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={(value) => (
                              <p>
                                {value}{' '}
                                <span className="text-xs">บาท/เดือน</span>
                              </p>
                            )}
                          /> */}
                              {car.city}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="none"
                              >
                                <path
                                  d="M7 3.5c.385 0 .7.315.7.7V7c0 .385-.315.7-.7.7a.702.702 0 0 1-.7-.7V4.2c0-.385.315-.7.7-.7ZM6.993 0A6.997 6.997 0 0 0 0 7c0 3.864 3.129 7 6.993 7A7.004 7.004 0 0 0 14 7c0-3.864-3.136-7-7.007-7ZM7 12.6A5.598 5.598 0 0 1 1.4 7c0-3.094 2.506-5.6 5.6-5.6s5.6 2.506 5.6 5.6-2.506 5.6-5.6 5.6Zm.7-2.1H6.3V9.1h1.4v1.4Z"
                                  fill="#465166"
                                />
                              </svg>
                            </span>
                          </dd>

                          <dt className="sr-only">ติดต่อ</dt>
                          <dd className="grid grid-cols-2 gap-2">
                            <Button
                              href="#"
                              variant="outline"
                              className="rounded-md bg-[#06C152] px-2 py-0 text-gray-100"
                            >
                              <span className="text-base font-semibold text-gray-100">
                                LINE
                              </span>
                            </Button>
                            <Button
                              href="#"
                              variant="outline"
                              className="rounded-md bg-[#1D64A3] px-2 py-0 text-gray-100"
                            >
                              <span className="text-base font-semibold text-gray-100">
                                โทร
                              </span>
                            </Button>
                            {/* <span className="text-[12px] font-medium text-gray-500">
                          <CurrencyFormat
                            value={
                              (parseInt(car?.price) * 7) / 100 +
                              parseInt(car?.price)
                            }
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'฿'}
                            renderText={(value) => (
                              <p>
                                {value}{' '}
                                <span className="text-xs">(รวมภาษี 7%)</span>
                              </p>
                            )}
                          /> 
                        </span>
                        <span>{car.city}</span>*/}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </Link>
                </li>
              )
          })}
        </ul>
        <div className="py-4 text-center">
          <Button
            href={`/carsall`}
            variant="outline"
            className="rounded-md bg-[#FF4605] px-2 py-0 text-gray-100"
          >
            <span className="text-base font-semibold text-gray-100">
              ดูรถ เพิ่มเติม
            </span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
