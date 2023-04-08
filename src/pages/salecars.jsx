import Head from 'next/head'
import React, { useId, Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { CallToAction } from '@/components/CallToAction'
import Image from 'next/image'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { SelectField, TextField } from '@/components/Fields'
import { Button } from '@/components/Button'
import { RadioGroup } from '@headlessui/react'
import { year } from '@/data/opt'
import CityCars from '@/components/CityCars'
import { DownDropYear } from '@/components/DownDropYear'
import MakeAndLogo from '@/components/MakeAndLogo'
import YearVValue from '@/components/YearCars'
import ColorPicker from '@/components/ColorPicker'
import TransmissionType from '@/components/TransmissionType'
import Yearvalue from '@/data/year'
import { BrandData } from '@/data/brand'
import Cityvalue from '@/data/city'
//B7t6YD5UkTW9pdgGICAMcsRJ53vAdf0cKQwD2dW2m9y

const TransType = [
  {
    name: 'เกียร์อัตโนมัติ',
    bgColor: 'bg-pink-100/80',
    selectedColor: 'ring-purple-500',
    imgp: '/images/cars-at.png',
  },
  {
    name: 'เกียร์ธรรมดา',
    bgColor: 'bg-pink-100/80',
    selectedColor: 'ring-purple-500',
    imgp: '/images/cars-mt.png',
  },
]

const colors = [
  { name: 'Pink', bgColor: 'bg-pink-500', selectedColor: 'ring-pink-500' },
  {
    name: 'Purple',
    bgColor: 'bg-purple-500',
    selectedColor: 'ring-purple-500',
  },
  { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
  { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
  {
    name: 'Yellow',
    bgColor: 'bg-yellow-500',
    selectedColor: 'ring-yellow-500',
  },
  { name: 'Slate', bgColor: 'bg-slate-500', selectedColor: 'ring-slate-500' },
  { name: 'Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  { name: 'Zinc', bgColor: 'bg-zinc-500', selectedColor: 'ring-zinc-500' },
  { name: 'Red', bgColor: 'bg-red-500', selectedColor: 'ring-red-500' },
  {
    name: 'Orange',
    bgColor: 'bg-orange-500',
    selectedColor: 'ring-orange-500',
  },
  { name: 'Cyan', bgColor: 'bg-cyan-500', selectedColor: 'ring-cyan-500' },
]

export default function SaleCars() {
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const [selectedYear, setSelectedYear] = useState(Yearvalue[0].YearName)
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedNameUs, setSelectedNameUs] = useState('')
  const [selectedTel, setSelectedTel] = useState('')
  const [selectedLineId, setSelectedLineId] = useState('')

  const [selectedCity, setSelectedCity] = useState('')
  const [selectedTransmission, setSelectedTransmission] = useState(TransType[0])
  const [selectedColor, setSelectedColor] = useState(colors[0])
  // console.log(selectedYear?.YearName)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`https://carx2auto.netlify.app/api/lineNotify`, {
      body: JSON.stringify({
        selYear: selectedYear?.YearName,
        selMake: selectedMake?.brand,
        selModel: selectedModel,
        selNameUs: selectedNameUs,
        selTel: selectedTel,
        selLine: selectedLineId,
        selCity: selectedCity?.CityName,
        selGear: selectedTransmission?.name,
        selColor: selectedColor?.name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    let mxmsg = `NEW ประเมินราคา<br/>ปีรถ: ${selectedYear?.YearName}<br/>ยี่ห้อ: ${selectedMake?.brand}<br/>รุ่น: ${selectedModel} เกียร์: ${selectedTransmission?.name}<br/>สีตัวรถ: ${selectedColor?.name}<br/>ชื่อติดต่อ: ${selectedNameUs} เบอร์โทร: ${selectedTel}<br/>line: ${selectedLineId} จังหวัด: ${selectedCity?.CityName}`
    if (error) {
      setError(true)
      setMessage('กรุณาตรวจสอบข้อมูล ก่อนส่งนะ!')
      return
    }

    selectedYear = ''
    setError(false)
    setSubscribed(true)
    setMessage('ส่งข้อมูลเรียบร้อย! 🎉 พนักงานจะติดต่อกลับด่วนที่สุด\n' + mxmsg)
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <Head>
        <title>
          ขายรถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy
        </title>
        <meta
          name="description"
          content="ขายรถมือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <Header />
      <main>
        <section>
          <div className="bg-[url('/images/banner1920x9152.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="mx-auto grid h-auto grid-cols-1 px-2 py-10 md:h-auto md:grid-cols-2 md:px-10 md:py-20">
              <div className="grid content-end">
                <div className="text-lg text-white">{message}</div>
                <h1 className="text-2xl font-bold text-white md:text-5xl">
                  ขายรถยนต์ของคุณที่ CAR2AUTOBUY
                </h1>
                <p className="text-base text-white md:text-2xl">
                  ปลอดภัย เชื่อถือได้ และจบไวใน 24 ชั่วโมง
                </p>
              </div>
              <div className="rounded-lg bg-white px-4 py-4 md:px-10 md:py-10">
                <h2 className="text-center text-lg font-semibold text-gray-700">
                  กรอกรายละเอียดของคุณเพื่อประเมินราคาฟรี!
                </h2>
                <div className="grid grid-cols-1 gap-2 py-2 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Year"
                      className="mb-3 block text-sm font-medium text-gray-700"
                    >
                      ปีรถยนต์
                    </label>
                    {/* <YearVValue id="year_car" name="year_car" /> */}
                    <Listbox value={selectedYear} onChange={setSelectedYear}>
                      {({ open }) => (
                        <>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                              <span className="flex items-center">
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
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                  />
                                </svg>
                                <span className="ml-3 block truncate">
                                  {selectedYear?.YearName}
                                </span>
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {Yearvalue.map((YearXData, inyear) => (
                                  <Listbox.Option
                                    key={inyear}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? 'bg-indigo-600 text-white'
                                          : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                      )
                                    }
                                    value={YearXData}
                                  >
                                    {({ selectedYear, active }) => (
                                      <>
                                        <div className="flex items-center">
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
                                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                            />
                                          </svg>

                                          <span
                                            className={classNames(
                                              selectedYear
                                                ? 'font-semibold'
                                                : 'font-normal',
                                              'ml-3 block truncate'
                                            )}
                                          >
                                            {YearXData?.YearName}
                                          </span>
                                        </div>

                                        {selectedYear ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? 'text-white'
                                                : 'text-indigo-600',
                                              'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  <div>
                    <label
                      htmlFor="brandcars"
                      className="mb-3 block text-sm font-medium text-gray-700"
                    >
                      ยี่ห้อรถยนต์
                    </label>
                    {/* <MakeAndLogo id="make_car" name="make_car" /> */}
                    <Listbox value={selectedMake} onChange={setSelectedMake}>
                      {({ open }) => (
                        <>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                              <span className="flex items-center">
                                <img
                                  src={selectedMake?.imgpath}
                                  alt={selectedMake?.brand}
                                  className="h-6 w-6 flex-shrink-0 rounded-full"
                                />
                                <span className="ml-3 block truncate">
                                  {selectedMake?.brand}
                                </span>
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {BrandData.map((BrandXData) => (
                                  <Listbox.Option
                                    key={BrandXData?.brand}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? 'bg-indigo-600 text-white'
                                          : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                      )
                                    }
                                    value={BrandXData}
                                  >
                                    {({ selectedMake, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <img
                                            src={BrandXData?.imgpath}
                                            alt={BrandXData?.brand}
                                            className="h-6 w-6 flex-shrink-0 rounded-full"
                                          />
                                          <span
                                            className={classNames(
                                              selectedMake
                                                ? 'font-semibold'
                                                : 'font-normal',
                                              'ml-3 block truncate'
                                            )}
                                          >
                                            {BrandXData?.brand}
                                          </span>
                                        </div>

                                        {selectedMake ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? 'text-white'
                                                : 'text-indigo-600',
                                              'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  <TextField
                    id="model_car"
                    name="model_car"
                    label={'รุ่นรถยนต์'}
                    onChange={(event) => setSelectedModel(event.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 py-2 md:grid-cols-3">
                  <TextField
                    id="name_car"
                    name="name_car"
                    label={'ชื่อผู้ติดต่อ'}
                    onChange={(event) => setSelectedNameUs(event.target.value)}
                  />
                  <TextField
                    id="tel_car"
                    name="tel_car"
                    label={'เบอร์โทร'}
                    onChange={(event) => setSelectedTel(event.target.value)}
                  />
                  <TextField
                    id="lineid_car"
                    name="lineid_car"
                    label={'LINEID'}
                    onChange={(event) => setSelectedLineId(event.target.value)}
                  />
                </div>
                <div className="grid grid grid-cols-1 justify-items-center gap-2 py-2 md:grid-cols-2">
                  <div className="w-full">
                    <label
                      htmlFor="city"
                      className="mb-3 block text-sm font-medium text-gray-700"
                    >
                      จังหวัด
                    </label>
                    {/* <CityCars id="city_car" name="city_car" /> */}
                    <Listbox value={selectedCity} onChange={setSelectedCity}>
                      {({ open }) => (
                        <>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                              <span className="flex items-center">
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
                                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                                  />
                                </svg>

                                <span className="ml-3 block truncate">
                                  {selectedCity?.CityName}
                                </span>
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {Cityvalue.map((CityXData) => (
                                  <Listbox.Option
                                    key={CityXData?.CityId}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? 'bg-indigo-600 text-white'
                                          : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                      )
                                    }
                                    value={CityXData}
                                  >
                                    {({ selectedCity, active }) => (
                                      <>
                                        <div className="flex items-center">
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
                                              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                                            />
                                          </svg>

                                          <span
                                            className={classNames(
                                              selectedCity
                                                ? 'font-semibold'
                                                : 'font-normal',
                                              'ml-3 block truncate'
                                            )}
                                          >
                                            {CityXData?.CityName}
                                          </span>
                                        </div>

                                        {selectedCity ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? 'text-white'
                                                : 'text-indigo-600',
                                              'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  <div>
                    {/* <TransmissionType
                      id="transmission_car"
                      name="transmission_car"
                    /> */}
                    <RadioGroup
                      value={selectedTransmission}
                      onChange={setSelectedTransmission}
                    >
                      <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                        ประเภทเกียร์
                      </RadioGroup.Label>
                      <div className="mt-4 flex items-center space-x-3">
                        {TransType.map((Trans) => (
                          <RadioGroup.Option
                            key={Trans.name}
                            value={Trans}
                            className={({ active, checked }) =>
                              classNames(
                                Trans.selectedColor,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {Trans.name}
                            </RadioGroup.Label>

                            <span
                              aria-hidden="true"
                              className={classNames(
                                Trans.bgColor,
                                'h-10 w-10 rounded-full border border-black border-opacity-10'
                              )}
                            >
                              <Image
                                src={Trans.imgp}
                                alt={Trans.name}
                                layout="responsive"
                                width={100}
                                height={100}
                                className="object-contain"
                              />
                            </span>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 py-2">
                  {/* <ColorPicker id="color_car" name="color_car" /> */}
                  <RadioGroup value={selectedColor} onChange={setSelectedColor}>
                    <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                      สีตัวรถ
                    </RadioGroup.Label>
                    <div className="mt-4 flex flex-wrap items-center justify-around gap-2 space-x-3 md:flex md:flex-nowrap">
                      {colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="py-6">
                  <Button
                    type="submit"
                    onClick={subscribe}
                    className="w-full rounded-md"
                  >
                    ส่งไปยังพนักงาน
                  </Button>
                  <p className="py-4 text-center text-xs">
                    เพื่อดำเนินการต่อ
                    ฉันยอมรับนโยบายความเป็นส่วนตัวและข้อกำหนดการใช้งาน
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
