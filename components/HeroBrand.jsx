import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox, RadioGroup } from '@headlessui/react'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

import {
  BrandDataList,
  CarModelList,
  ex_model_Data,
  carDataTypeX,
  listcolors,
  doors,
  TransType,
  fuelDataType,
  car_accessories,
  Cityvalue,
} from '@/data/brandCars'
import { Button } from './Button'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MakeBrand = [
  {
    brand: 'HONDA',
    count: 1129,
    imgpath: '/images/carbrandtop/01.png',
    href: 'Honda',
    bgcolor: 'bg-yellow-500',
  },
  {
    brand: 'TOYOTA',
    count: 4652,
    imgpath: '/images/carbrandtop/02.png',
    href: 'Toyota',
    bgcolor: 'bg-purple-600',
  },
  {
    brand: 'MAZDA',
    count: 2599,
    imgpath: '/images/carbrandtop/03.png',
    href: 'Honda',
    bgcolor: 'bg-yellow-500',
  },
  {
    brand: 'NISSAN',
    count: 890,
    imgpath: '/images/carbrandtop/04.png',
    href: 'Nissan',
    bgcolor: 'bg-green-500',
  },
  {
    brand: 'MG',
    count: 1169,
    imgpath: '/images/carbrandtop/05.png',
    href: 'Mg',
    bgcolor: 'bg-purple-600',
  },
  {
    brand: 'MITSUBISHI',
    count: 1224,
    imgpath: '/images/carbrandtop/06.png',
    href: 'Mitsubishi',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'ISUZU',
    count: 1224,
    imgpath: '/images/carbrandtop/07.png',
    href: 'Isuzu',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'SUZUKI',
    count: 1224,
    imgpath: '/images/carbrandtop/08.png',
    href: 'Suzuki',
    bgcolor: 'bg-pink-600',
  },
]

const MakeType = [
  {
    brand: '2 ประตู',
    imgpath: '/images/car_type/2-ประตู.png',
    href: '/2ประตู',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: '4 ประตู',
    imgpath: '/images/car_type/4-ประตู.png',
    href: '/4ประตู',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'รถยนตร์ไฟฟ้า EV',
    imgpath: '/images/car_type/รถยนตร์ไฟฟ้า-EV.png',
    href: '/รถยนตร์ไฟฟ้า-EV',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'รถตู้',
    imgpath: '/images/car_type/รถตู้.png',
    href: '/รถตู้',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'มินิเเวน',
    imgpath: '/images/car_type/มินิเเวน.png',
    href: '/มินิเเวน',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'รถกระบะ',
    imgpath: '/images/car_type/รถกระบะ.png',
    href: '/รถกระบะ',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'รถสปอร์ต',
    imgpath: '/images/car_type/รถสปอร์ต.png',
    href: '/รถสปอร์ต',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'รถ SUV',
    imgpath: '/images/car_type/SUV.png',
    href: '/SUV',
    bgcolor: 'bg-pink-600',
  },
]

const MakePrice = [
  {
    title: 'ต่ำกว่า 500,000 บาท',

    href: 'min=0&max=500000',
    bgcolor: 'bg-pink-600',
  },
  {
    title: '500,000 - 700,000 บาท',

    href: 'min=500000&max=700000',
    bgcolor: 'bg-pink-600',
  },
  {
    title: '700,000 - 1,000,000 บาท',

    href: 'min=700000&max=1000000',
    bgcolor: 'bg-pink-600',
  },
  {
    title: 'มากกว่า 1,000,000 บาท',

    href: 'min=1000000&max=10000000',
    bgcolor: 'bg-pink-600',
  },
]

const BraX = [
  {
    text: 'รถมือสอง-ไมล์น้อย',
    imgpath: '/images/banner/pic-ads-1.png',
    href: '/SUV',
    bgcolor: 'bg-pink-600',
  },
  {
    text: 'รถยุโรปมาแรง',
    imgpath: '/images/banner/pic-ads-3.png',
    href: '/SUV',
    bgcolor: 'bg-pink-600',
  },
  {
    text: 'รถเก๋งผ่อนสบาย',
    imgpath: '/images/banner/pic-ads-3.png',
    href: '/SUV',
    bgcolor: 'bg-pink-600',
  },
  {
    text: 'รถกระบะ-ขนของหนัก',
    imgpath: '/images/banner/pic-ads-4.png',
    href: '/SUV',
    bgcolor: 'bg-pink-600',
  },
]

export function HeroBrand() {
  const [query, setQuery] = useState('')
  const [selectedBrand, setSelectedBrand] = useState(BrandDataList[0])
  const [selectedModelX, setModelX] = useState('เลือกยี่ห้อรถยนต์')
  const [selectedModel_EX, setModel_EX] = useState('เลือกยี่ห้อรถยนต์')
  const filteredBrand =
    query === ''
      ? BrandDataList
      : BrandDataList.filter((Brand) => {
          return Brand?.name?.toLowerCase().includes(query.toLowerCase())
        })

  const filteredModelex =
    selectedModelX === ''
      ? ex_model_Data
      : ex_model_Data.filter((model_DataX) => model_DataX?.model == selectedModelX)

  const filteredYearModel =
    selectedModel_EX === ''
      ? filteredModelex
      : filteredModelex.filter(
          (model_Data_Year) =>
            model_Data_Year?.model == selectedModelX && model_Data_Year?.exmodel == selectedModel_EX
        )

  return (
    <div
      className={
        "p-2 md:p-16 bg-[url('/images/background-filter-ซื้อรถยนตร์.jpg')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className="flex flex-col md:flex-row py-4 md:py-12 bg-white rounded-md md:rounded-2xl shadow-lg">
        <div className="mx-2 basis-6/6 md:basis-4/6 my-4 md:mx-10 rounded-md text-[#588DBC]">
          <div>
            <h2 className="text-2xl font-bold text-black">ซื้อรถยนต์</h2>

            <div className="pt-6 w-full rounded-md">
              <label htmlFor="search" className="sr-only">
                ทางลัดค้นหารถยนต์ที่ตรงใจคุณ...
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-[#588DBC]" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border border-1 border-[#588DBC]/50 py-2 pl-10 pr-3 leading-5 text-[#588DBC] placeholder-[#588DBC] focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                  placeholder="ทางลัดค้นหารถยนต์ที่ตรงใจคุณ..."
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 md:grid md:grid-cols-8 md:gap-4 overflow-x-auto md:overflow-visible">
            {MakeBrand.map((MakeBrandUP, MakeIndex) => (
              <Link
                href={'/buycars?make=' + MakeBrandUP.href}
                className="box-content py-4"
                key={MakeIndex}
              >
                <div className="w-[90px] h-[90px] border border-1 border-[#588DBC]/50 rounded-md mt-4 hover:bg-gray-500 cursor-pointer hover:shadow-md">
                  <Image
                    src={MakeBrandUP.imgpath}
                    alt={MakeBrandUP.brand}
                    priority
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-2 md:grid md:grid-cols-8 md:gap-4 overflow-x-auto md:overflow-visible">
            {MakeType.map((MakeTypeUP, TypeIndex) => (
              <Link href={'/buycars?type=' + MakeTypeUP.brand.toLowerCase()} key={TypeIndex}>
                <div className="grid content-center h-[90px] w-[90px] border border-1 border-[#588DBC]/50 rounded-md mt-4 hover:bg-[#588DBC] cursor-pointer hover:shadow-md">
                  <Image
                    src={MakeTypeUP.imgpath}
                    alt={MakeTypeUP.brand}
                    priority
                    width={100}
                    height={100}
                    className="w-full h-auto object-contain px-3"
                  />
                  <span className="text-center text-[10px] text-black hover:text-white">
                    {MakeTypeUP.brand}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-2 md:grid md:grid-cols-5 md:gap-3 overflow-x-auto md:overflow-visible">
            {MakePrice.map((MakePriceUP, PriceIndex) => (
              <Link href={'/buycars?' + MakePriceUP.href} key={PriceIndex}>
                <div className="grid content-center bg-[#D2E0ED] h-10 w-[200px] md:w-auto border border-1 border-[#588DBC]/50 rounded-md mt-4 hover:bg-[#588DBC] cursor-pointer hover:shadow-md">
                  <p className="text-center font-semibold text-[12px] text-[#4B86B9] hover:text-white">
                    {MakePriceUP.title}
                  </p>
                </div>
              </Link>
            ))}
            <Link href={'/buycars'}>
              <div className="grid content-center bg-[#A3C1DB] h-10 w-[200px] md:w-auto border border-1 border-[#588DBC]/50 rounded-md mt-4 hover:bg-[#588DBC] cursor-pointer hover:shadow-md">
                <p className="text-center font-semibold text-[12px] text-black hover:text-white">
                  ดูรถยนต์ที่มีทั้งหมด
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="basis-1/4 px-2">
          <div className="w-full pt-5">
            <h2 className="text-xl font-bold text-black">
              เลือกยี่ห้อและรุ่นรถยนต์<span className="text-xs">ที่ตรงใจคุณ!</span>
            </h2>
            <div className="grid grid-cols-2 gap-2 pt-5">
              <div className="w-full">
                <Combobox as="div" value={selectedBrand} onChange={setSelectedBrand}>
                  {/* <Combobox.Label className="block text-sm font-medium text-gray-100">
                    ยี่ห้อรถยนต์
                  </Combobox.Label> */}
                  <div className="relative w-full max-w-xs">
                    <Combobox.Input
                      className="input w-full max-w-xs font-semibold border border-1 border-[#A3C1DB] h-10"
                      onChange={(event) => setQuery(event.target.value)}
                      displayValue={(person) => person?.name}
                      id="brand_car"
                      name="brand_car"
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Combobox.Button>

                    {filteredBrand.length > 0 && (
                      <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredBrand.map((person, indexIDS) => (
                          <Combobox.Option
                            key={indexIDS}
                            value={person}
                            className={({ active }) =>
                              classNames(
                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                              )
                            }
                          >
                            {({ active, selected }) => (
                              <>
                                <div className="flex items-center">
                                  <Image
                                    src={person.imageUrl}
                                    alt={person.name}
                                    width={100}
                                    height={100}
                                    priority
                                    className="h-6 w-6 flex-shrink-0 rounded-full"
                                  />
                                  <span
                                    className={classNames(
                                      'ml-3 truncate',
                                      selected && 'font-semibold'
                                    )}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selected && (
                                  <span
                                    className={classNames(
                                      'absolute inset-y-0 right-0 flex items-center pr-4',
                                      active ? 'text-white' : 'text-indigo-600'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                )}
                              </>
                            )}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    )}
                  </div>
                </Combobox>
              </div>
              <div className="w-full">
                <select
                  id="model_car"
                  name="model_car"
                  className="input w-full max-w-xs font-semibold border border-1 border-[#A3C1DB] h-10"
                  defaultValue={selectedModelX}
                  onChange={(event) => setModelX(event.target.value)}
                  //displayValue={(person) => person?.name}
                >
                  {CarModelList[selectedBrand?.name?.toUpperCase()]?.map(
                    (CarModel, indexCarModel) => (
                      <option key={indexCarModel}>{CarModel}</option>
                    )
                  )}
                </select>
              </div>
              <div className="col-span-2 mt-2">
                <Button
                href={"/buycars/?make="+selectedBrand?.name}
                  variant="solid"
                  color="#1B64A6"
                  className="bg-[#1B64A6] rounded-md w-full text-white"
                >
                  เริ่มต้นค้นหา
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-5">
              {BraX.map((BraXADS, indexADS) => (
                <div key={indexADS} className="relative rounded-md cursor-pointer">
                  <Image
                    src={BraXADS.imgpath}
                    alt={BraXADS.text}
                    width={100}
                    height={100}
                    priority
                    className="w-full h-auto rounded-md"
                  />

                  <p className="absolute top-1 left-2 text-xs font-semibold">
                    {BraXADS.text.replace('-', ' ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
