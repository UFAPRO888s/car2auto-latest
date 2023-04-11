import Head from 'next/head'
import React, { useId, Fragment, useEffect, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
//import { CallToAction } from '@/components/CallToAction'
import Image from 'next/image'
//import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
// import { Hero } from '@/components/Hero'
// import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
// import { SecondaryFeatures } from '@/components/SecondaryFeatures'
// import { Testimonials } from '@/components/Testimonials'
import { SelectField, TextField } from '@/components/Fields'
import { Button } from '@/components/Button'
import { RadioGroup } from '@headlessui/react'

// import LineLogo from '@/images/logos/line-icon.svg'
// import { year } from '@/data/opt'
// import CityCars from '@/components/CityCars'
// import { DownDropYear } from '@/components/DownDropYear'
// import MakeAndLogo from '@/components/MakeAndLogo'
// import YearVValue from '@/components/YearCars'
// import ColorPicker from '@/components/ColorPicker'
// import TransmissionType from '@/components/TransmissionType'

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import { initFirebase } from '@/lib/firebase/initFirebase'

import Yearvalue from '@/data/year'
import { BrandData } from '@/data/brand'
import Cityvalue from '@/data/city'
// import UploadFile from '@/components/storage/UploadFile'
//B7t6YD5UkTW9pdgGICAMcsRJ53vAdf0cKQwD2dW2m9y
//import Alart_description from '@/components/Alart_description'
//import handlerLine from '@/api/linenotify'

initFirebase()
const storage = getStorage()

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

  { name: 'Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },

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

  const inputEl = useRef(null)
  const [value, setValue] = useState(0)
  const [valueImgss, setValueImgss] = useState()
  // console.log(selectedYear?.YearName)

  function handleTelChange(event) {
    const telxcheck = event.target.value
    if (telxcheck.length > 12) {
      setMessage('กรุณาตรวจสอบข้อมูล เบอร์โทรนะค่ะ!')
    }
   // console.log(telxcheck)
    setSelectedTel(event.target.value)
  }

  function uploadFile() {
    var file = inputEl.current.files[0]
    // setValueImgss(
    //   'https://firebasestorage.googleapis.com/v0/b/car2auto-2023.appspot.com/o/' +
    //     file.name +
    //     '?alt=media'
    // )
    // create a storage ref
    const storageRef = ref(storage, 'user_uploads' + file.name)

    // upload file
    const task = uploadBytesResumable(storageRef, file)

    // update progress bar
    task.on(
      'state_change',

      function progress(snapshot) {
        setValue((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },

      function error(err) {
        alert(error)
      },

      function complete() {
        getDownloadURL(task.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          setValueImgss(downloadURL)
          //alert('Uploaded to firebase storage successfully!'+downloadURL)
        })
      }
    )
  }
  //https://firebasestorage.googleapis.com/v0/b/car2auto-2023.appspot.com/o/user_uploadsscreencapture-localhost-3000-car-Nissan-Frontier-Navara-THA6630001164-2023-04-02-14_20_57.png?alt=media

  const subscribe = async (e) => {
    e.preventDefault()
    if (
      selectedYear?.YearName != '' ||
      selectedMake?.name != '' ||
      valueImgss != ''
    ) {
      const res = await fetch(`https://storage.car2autobuy.com/linenotify`, {
        body: JSON.stringify({
          selYear: selectedYear?.YearName,
          selMake: selectedMake?.name,
          selModel: selectedModel,
          selNameUs: selectedNameUs,
          selTel: selectedTel,
          selLine: selectedLineId,
          selCity: selectedCity?.CityName,
          selGear: selectedTransmission?.name,
          selColor: selectedColor?.name,
          URLimage: valueImgss,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      let mxmsg = `NEW ปีรถ: ${selectedYear?.YearName} ยี่ห้อ: ${selectedMake?.name} รุ่น: ${selectedModel} เกียร์: ${selectedTransmission?.name} สีตัวรถ: ${selectedColor?.name} ชื่อติดต่อ: ${selectedNameUs} เบอร์โทร: ${selectedTel} line: ${selectedLineId} จังหวัด: ${selectedCity?.CityName}`
      if (error) {
        setError(true)
        setMessage('กรุณาตรวจสอบข้อมูล ก่อนส่งนะ!')
        return
      }

      selectedYear = ''
      selectedMake = ''
      selectedModel = ''
      selectedNameUs = ''
      selectedTel = ''
      selectedLineId = ''
      selectedCity = ''
      inputEl = ''

      setError(false)
      setSubscribed(true)
      setMessage(
        'ส่งข้อมูลเรียบร้อย! 🎉 พนักงานจะติดต่อกลับด่วนที่สุด\n' + mxmsg
      )
    }
  }

  // const subscribe = async (e) => {
  //   e.preventDefault()
  //   if (
  //     selectedYear?.YearName != '' ||
  //     selectedMake?.brand != '' ||
  //     valueImgss != ''
  //   ) {
  //     let mxmsg = `NEW ปีรถ: ${selectedYear?.YearName} ยี่ห้อ: ${selectedMake?.brand} รุ่น: ${selectedModel} เกียร์: ${selectedTransmission?.name} สีตัวรถ: ${selectedColor?.name} ชื่อติดต่อ: ${selectedNameUs} เบอร์โทร: ${selectedTel} line: ${selectedLineId} จังหวัด: ${selectedCity?.CityName}`
  //     const res = await SendLineNotify(mxmsg,valueImgss)
  //     console.log(res)
  //     const { error } = await res;
      
  //     if (error) {
  //       setError(true)
  //       setMessage('กรุณาตรวจสอบข้อมูล ก่อนส่งนะ!')
  //       return
  //     }

  //     selectedYear = ''
  //     selectedMake = ''
  //     selectedModel = ''
  //     selectedNameUs = ''
  //     selectedTel = ''
  //     selectedLineId = ''
  //     selectedCity = ''
  //     inputEl = ''

  //     setError(false)
  //     setSubscribed(true)
  //     setMessage(
  //       'ส่งข้อมูลเรียบร้อย! 🎉 พนักงานจะติดต่อกลับด่วนที่สุด\n' + mxmsg
  //     )
  //   }
  // }

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
                                  alt={selectedMake?.name}
                                  className="h-6 w-6 flex-shrink-0 rounded-full"
                                />
                                <span className="ml-3 block truncate">
                                  {selectedMake?.name}
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
                                {BrandData.map((BrandXData,inedex) => (
                                  <Listbox.Option
                                    key={inedex}
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
                                            alt={BrandXData?.name}
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
                                            {BrandXData?.name}
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
                    onChange={handleTelChange}
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
                              'relative -m-0.5 flex cursor-pointer flex-col items-center justify-center rounded-full p-0.5 focus:outline-none'
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
                          <span className="text-[10px]">{color.name}</span>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="uploadCarImg"
                    className="mb-3 block text-sm font-medium text-gray-700"
                  >
                    อัพโหลดรูปรถยนต์
                  </label>
                  <div className="mx-5 my-5">
                    {valueImgss ? (
                      <div>
                        <Image
                          src={valueImgss}
                          alt={'imgUP'}
                          layout="fixed"
                          width={100}
                          height={100}
                          className="object-contain"
                        />
                      </div>
                    ) : null}
                    <progress
                      value={value}
                      max="100"
                      style={{ width: '100%' }}
                    ></progress>
                    <br />
                    <input type="file" onChange={uploadFile} ref={inputEl} />
                  </div>
                </div>
                <div className="flex gap-4 py-6">
                  <Button
                    type="submit"
                    onClick={subscribe}
                    className="w-full rounded-md"
                  >
                    ส่งไปยังพนักงาน
                  </Button>
                  <Button
                    href={'line://oaMessage/@272iybrg/?สวัสดี%20❤️'}
                    className="w-full rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      className="mr-2 object-contain"
                    >
                      <path
                        d="M64 27.487c0-14.32-14.355-25.97-32-25.97S0 13.168 0 27.487c0 12.837 11.384 23.588 26.762 25.62 1.042.225 2.46.688 2.82 1.578.322.81.21 2.076.103 2.894l-.457 2.74c-.14.81-.643 3.164 2.772 1.725s18.428-10.852 25.143-18.58h-.001C61.78 38.38 64 33.218 64 27.487"
                        fill="#00b900"
                      />
                      <g fill="#fff">
                        <path d="M25.498 20.568h-2.245c-.344 0-.623.28-.623.623v13.943a.62.62 0 0 0 .623.62h2.245a.62.62 0 0 0 .623-.62V21.2c0-.343-.28-.623-.623-.623m15.45-.01h-2.244c-.345 0-.624.28-.624.623v8.284l-6.4-8.63c-.014-.022-.03-.043-.048-.063l-.004-.004a.4.4 0 0 0-.038-.038l-.044-.04c-.006-.004-.01-.008-.016-.012l-.032-.022-.02-.012-.033-.02c-.006-.002-.014-.006-.02-.01-.012-.006-.023-.012-.036-.016s-.014-.006-.02-.006c-.012-.006-.025-.008-.037-.012l-.022-.006c-.012-.002-.023-.006-.035-.008l-.026-.004c-.008-.002-.022-.004-.033-.004l-.032-.002c-.008 0-.014-.001-.022-.001h-2.244c-.344 0-.623.28-.623.623V35.13a.62.62 0 0 0 .623.62h2.244c.344 0 .624-.278.624-.62v-8.28l6.397 8.64a.63.63 0 0 0 .158.154c.018.014.032.022.045.03.006.004.012.008.018.01s.02.01.03.014.02.008.03.014l.06.022a.62.62 0 0 0 .168.022h2.244a.62.62 0 0 0 .623-.62V21.2c0-.343-.28-.623-.623-.623" />
                        <path d="M20.087 32.264h-6.1V21.2c0-.344-.28-.623-.623-.623H11.12c-.344 0-.623.28-.623.623v13.942a.62.62 0 0 0 .174.431c.012.012.014.016.016.018.113.107.264.174.43.174h8.968c.344 0 .623-.28.623-.623v-2.245c0-.344-.278-.623-.623-.623m33.258-8.214c.344 0 .623-.28.623-.623V21.2c0-.344-.278-.623-.623-.623h-8.968c-.168 0-.32.067-.432.176-.012.01-.016.014-.018.018-.107.1-.173.262-.173.43v13.943a.62.62 0 0 0 .174.431l.016.016a.62.62 0 0 0 .431.174h8.968c.344 0 .623-.28.623-.623v-2.246c0-.344-.278-.623-.623-.623h-6.098v-2.357h6.098a.62.62 0 0 0 .623-.623V27.04c0-.344-.278-.624-.623-.624h-6.098V24.06h6.098z" />
                      </g>
                    </svg>
                    ติดต่อผ่าน LINE
                  </Button>
                </div>
                <div>
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
