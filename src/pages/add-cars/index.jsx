import { Fragment, useEffect, useId, useRef, useState } from 'react'
import axios from 'axios'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageSEO } from '@/components/SEO'
import { getUserFromCookie } from '@/lib/firebase/userCookies'
import { useRouter } from 'next/router'
import UptoHost from '@/components/UptoHost'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { useUser } from '@/lib/firebase/useUser'
import { initFirebase } from '@/lib/firebase/initFirebase'
import { db } from '@/lib/firebase/initFirebase'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  Timestamp,
  GeoPoint,
} from 'firebase/firestore'
import formatDate from '@/lib/formatDate'
import { BrandData } from '@/data/brand'



export default function AddCars() {
  const { user } = useUser()
  const router = useRouter()
  const [UserUEmail, setUUserEmail] = useState('')
  const [UserUId, setUUserUid] = useState('')
  const [UserUDisplayName, setUUserDisplayName] = useState('')
  const [Add_Name, setAdd_Name] = useState('')
  const [Add_Line, setAdd_Line] = useState('')
  const [Add_Tel, setAdd_Tel] = useState('')
  const [imgxUP, setimgxUP] = useState('')
  const [GcarAddID, setIDGcarID] = useState('')
  const [fileList, setFileList] = useState(null)
  const [dataImg, getFile] = useState([])
  const [progress, setProgess] = useState(0)

  const [Add_Make, setAdd_Make] = useState('')
  const [Add_Model, setAdd_Model] = useState('')
  const [Add_Year, setAdd_Year] = useState('')
  const [Add_Variant, setAdd_Variant] = useState('')
  const [Add_targetPrice, setAdd_targetPrice] = useState('')
  const [Add_marketPrice, setAdd_marketPrice] = useState('')
  const [Add_marketPriceDiff, setAdd_marketPriceDiff] = useState('')
  const [Add_discount, setAdd_discount] = useState('')
  const [Add_processingFee, setAdd_processingFee] = useState('')
  const [Add_engineNumber, setAdd_engineNumber] = useState('')
  const [Add_chasisNumber, setAdd_chasisNumber] = useState('')
  const [Add_booked, setAdd_booked] = useState('')
  const [Add_listingActive, setAdd_listingActive] = useState('')
  const [Add_city, setAdd_city] = useState('')
  const [Add_warrantyExpiryDate, setAdd_warrantyExpiryDate] = useState('')
  const [Add_engineCc, setAdd_engineCc] = useState('')
  const [Add_bodyType, setAdd_bodyType] = useState('')
  const [Add_odometerReading, setAdd_odometerReading] = useState('')
  const [Add_transmissionType, setAdd_transmissionType] = useState('')
  const [Add_fuelType, setAdd_fuelType] = useState('')
  const [Add_Name_carHighlights, setAdd_Name_carHighlights] = useState('')
  const [Add_key_carHighlights, setAdd_key_carHighlights] = useState('')
  const [Add_Description_carHighlights, setAdd_Description_carHighlights] =
    useState('')
  const [Add_subHeading_carHighlights, setAdd_subHeading_carHighlights] =
    useState('')

  const uniqueId = () => {
    const dateString = Date.now().toString(36)
    const randomness = Math.random().toString(36).substr(2)
    return dateString + randomness
  }

  const current = new Date()
  const dateTimeAB = `${current.getDate()} - ${
    current.getMonth() + 1
  } - ${current.getFullYear()}`

  const inputEl = useRef()

  useEffect(() => {
    ;(async () => {
      const UXIDCAR = uniqueId()
      setIDGcarID(UXIDCAR)
    })()

    return () => {}
  }, [])

  const sendData = async () => {
    try {
      const userDoc = doc(db, 'car2autobuy', user.id)
      await updateDoc(userDoc, GcarAddID, {
        appointmentId: GcarAddID,
        make: Add_Make,
        model: Add_Model,
        year: Add_Year,
        variant: Add_Variant,
        targetPrice: Add_targetPrice,
        marketPrice: Add_marketPrice,
        marketPriceDiff: Add_marketPriceDiff,
        discount: Add_discount,
        processingFee: Add_processingFee,
        engineNumber: Add_engineNumber,
        chasisNumber: Add_chasisNumber,
        booked: Add_booked,
        listingActive: Add_listingActive,
        city: Add_city,
        warrantyExpiryDate: Add_warrantyExpiryDate,
        engineCc: Add_engineCc,
        mainImage: dataImg[0],
        carHighlights: [
          {
            name: Add_Name_carHighlights,
            key: Add_key_carHighlights,
            description: Add_Description_carHighlights,
            subHeading: Add_subHeading_carHighlights,
          },
        ],
        gallery: [dataImg],
        promoType: null,
        publishedType: 'READY_FOR_SALE',
        lang: 'th',
        bodyType: Add_bodyType,
        readyForSaleTimestamp: current,
        carTag: null,
        price: Add_targetPrice,
        odometerReading: Add_odometerReading,
        ownerNumber: null,
        transmissionType: Add_transmissionType,
        fuelType: Add_fuelType,
        userId: user.id,
        Add_Name: Add_Name,
        Add_Line: Add_Line,
        Add_Tel: Add_Tel,
        Add_Email: UserUEmail,
        Add_DisplayName: UserUDisplayName,
        current: current,
        imagesG: dataImg,
      })
      alert('Data successfully sent to cloud firestore!')
      //router.push('/add-cars')
      setAdd_Name('')
      setAdd_Line('')
      setAdd_Tel('')
      setimgxUP('')

      router.push('/')
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => {
    const storedgetUser = getUserFromCookie()
    if (!storedgetUser) {
      router.push('/')
    }
    setUUserUid(storedgetUser.id)
    setUUserEmail(storedgetUser.email)
    setUUserDisplayName(storedgetUser.name)
  }, [])

  const handleChange = (e) => {
    setProgess(0)
    setFileList(e.target.files)
  }

  const uploadFile = async () => {
    const PathImg = []
    for (let i = 0; i < fileList?.length; i++) {
      const formData = new FormData()
      formData.append(`file`, fileList[i])
      axios
        .post('https://storage.car2autobuy.com/upload', formData, {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              '%'
            setProgess(progress)
          },
        })
        .then((res) => {
          PathImg.push({
            name: res.data.name,
            path: 'https://storage.car2autobuy.com' + res.data.path,
          })
        })
        .catch((err) => console.log(err))
    }
    getFile(PathImg)
    alert('อัพโหลดเรียบร้อยครับ!')
  }
  //const files = fileList ? [...fileList] : []
  //console.log(dataImg)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  function SelectedCars({DataSet}) {
    const [selected, setSelected] = useState()
    
  
    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            {/* <Listbox.Label className="block text-sm font-medium text-gray-700">{LabelX}</Listbox.Label>  */}
            
              <Listbox.Button className="relative w-full cursor-default rounded-md py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm">
                <span className="flex items-center">
                  <img src={selected?.imgpath} alt={selected?.name} className="h-6 w-6 flex-shrink-0 rounded-full" />
                  <span className="ml-3 block truncate">{selected?.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                  {DataSet.map((perData,indexID) => (
                    <Listbox.Option
                      key={indexID}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={perData}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img src={perData.imgpath} alt={perData.name} className="h-6 w-6 flex-shrink-0 rounded-full" />
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {perData.name}
                            </span>
                          </div>
  
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            
          </>
        )}
      </Listbox>
    )
  }


  return (
    <>
      <PageSEO
        title={
          'ลงประกาศขายรถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy'
        }
        description={
          'ลงประกาศขายรถมือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง'
        }
      />
      <Header />
      <main>
        <Image
          src={'/images/banner1920x9152.jpg'}
          alt="ลงประกาศขายรถมือสอง"
          width={100}
          height={50}
          layout="responsive"
          className="z-0"
        />
        <Container>
          <div className="py-4">
            <div className="py-4 text-center">
              <h1 className="text-3xl font-bold">ลงประกาศขายรถมือสอง</h1>
              <p className="text-base">ลงขายรถ ง่าย ไว 24ชม.</p>
              <p className="text-base font-semibold">
                ลงประกาศขายรถมือสอง CAR2AUTOBUY
              </p>
            </div>
            {/* uploadimage */}
            {/* <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="col-span-5">
                <div className="flex w-full justify-center gap-4 rounded-md border-2 border-dashed border-gray-300 px-5 pb-6 pt-5">
                  <div className="space-y-1 text-center">
                    <div className="grid grid-cols-1 text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>รูปภาพ</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleChange}
                          multiple
                        />
                      </label>
                      <div className="pl-1">
                        <div className="progessBar">{progress}</div>
                        <Button onClick={uploadFile} className="rounded-md">
                          Upload
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      อัพโหลดรูปฟรี 24ชั่วโมงไม่เว้นวันหยุดราชการ
                    </p>
                  </div>
                  <div className="w-full">
                    <ul className="grid grid-cols-4 gap-2">
                      {dataImg?.map((file, i) => (
                        <li key={i}>
                          <div>
                            {file.path ? (
                              <Image
                                src={file.path}
                                alt={file.name}
                                width={100}
                                height={100}
                                className="rounded-md object-contain"
                                layout="fixed"
                              />
                            ) : (
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            <p className="line-clamp-1 text-xs">{file.name}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center gap-4 rounded-md border-2 border-dashed border-gray-300 px-5 pb-6 pt-5">
                <div className="text-center">
                  <p className="text-xs">
                    ขั้นตอนง่ายกับการขายรถที่ CAR2AUTOBUY
                  </p>
                  <div className='p-2'>
                    <Image
                      src={'/images/Car2autobuy-01.png'}
                      alt={'ขายรถยนต์'}
                      width={100}
                      height={60}
                      className="rounded-md object-contain"
                      layout="fixed"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            {/* uploadimage */}
            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md shadow-sm">
                <label
                  htmlFor="make"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ยี่ห้อ
                </label>
                {/* <input
                  type="text"
                  name="make"
                  id="make"
                  value={Add_Make}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="ยี่ห้อ"
                  onChange={(event) => setAdd_Make(event.target.value)}
                /> */}
                <SelectedCars DataSet={BrandData} LabelX={"ยี่ห้อ"} />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="model"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  รุ่น
                </label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  value={Add_Model}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="รุ่น"
                  onChange={(event) => setAdd_Model(event.target.value)}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="variant"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  รุ่นย่อย
                </label>
                <input
                  type="text"
                  name="variant"
                  id="variant"
                  value={Add_Variant}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  placeholder="รุ่นย่อย"
                  onChange={(event) => setAdd_Variant(event.target.value)}
                />
              </div>
            </div>
            {/* ing */}

            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="year"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ปีรถยนต์
                </label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  value={Add_Year}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="ปีรถยนต์"
                  onChange={(event) => setAdd_Year(event.target.value)}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="targetPrice"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ราคา
                </label>
                <input
                  type="text"
                  name="targetPrice"
                  id="targetPrice"
                  value={Add_targetPrice}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="รุ่น"
                  onChange={(event) => setAdd_targetPrice(event.target.value)}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="engineNumber"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  เลขเครื่องยนต์
                </label>
                <input
                  type="text"
                  name="engineNumber"
                  id="engineNumber"
                  value={Add_engineNumber}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  //placeholder="LINE ID"
                  onChange={(event) => setAdd_engineNumber(event.target.value)}
                />
              </div>
            </div>
            {/* ing */}

            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="chasisNumber"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  เลขตัวถัง
                </label>
                <input
                  type="text"
                  name="chasisNumber"
                  id="chasisNumber"
                  value={Add_chasisNumber}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="เลขตัวถัง"
                  onChange={(event) => setAdd_chasisNumber(event.target.value)}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="booked"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  เล่มทะเบียน
                </label>
                <input
                  type="text"
                  name="booked"
                  id="booked"
                  value={Add_booked}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="เล่มทะเบียน"
                  onChange={(event) => setAdd_booked(event.target.value)}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="city"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  เมือง
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={Add_city}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  placeholder="เมือง"
                  onChange={(event) => setAdd_city(event.target.value)}
                />
              </div>
            </div>
            {/* ing */}

            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="warrantyExpiryDate"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  วันหมดประกัน
                </label>
                <input
                  type="date"
                  name="warrantyExpiryDate"
                  id="warrantyExpiryDate"
                  value={Add_warrantyExpiryDate}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="วันหมดประกัน"
                  onChange={(event) =>
                    setAdd_warrantyExpiryDate(event.target.value)
                  }
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="engineCc"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ความจุเครื่องยนต์(cc)
                </label>
                <input
                  type="text"
                  name="engineCc"
                  id="engineCc"
                  value={Add_engineCc}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="ความจุเครื่องยนต์"
                  onChange={(event) => setAdd_engineCc(event.target.value)}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="bodyType"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ประเภทรถยนต์
                </label>
                <input
                  type="text"
                  name="bodyType"
                  id="bodyType"
                  value={Add_bodyType}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  //placeholder="LINE ID"
                  onChange={(event) => setAdd_bodyType(event.target.value)}
                />
              </div>
            </div>
            {/* ing */}

            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="odometerReading"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ระยะไมล์
                </label>
                <input
                  type="text"
                  name="odometerReading"
                  id="odometerReading"
                  value={Add_odometerReading}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="ระยะไมล์"
                  onChange={(event) =>
                    setAdd_odometerReading(event.target.value)
                  }
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="transmissionType"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ประเภทเกียร์
                </label>
                <input
                  type="text"
                  name="transmissionType"
                  id="transmissionType"
                  value={Add_transmissionType}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="ประเภทเกียร์"
                  onChange={(event) =>
                    setAdd_transmissionType(event.target.value)
                  }
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="fuelType"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ประเภทเชื้อเพลิง
                </label>
                <input
                  type="text"
                  name="fuelType"
                  id="fuelType"
                  value={Add_fuelType}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  //placeholder="LINE ID"
                  onChange={(event) => setAdd_fuelType(event.target.value)}
                />
              </div>
            </div>
            {/* ing */}

            {/* uploadimage */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="col-span-5">
                <div className="flex w-full justify-center gap-4 rounded-md border-2 border-dashed border-gray-300 px-5 pb-6 pt-5">
                  <div className="space-y-1 text-center">
                    <div className="grid grid-cols-1 text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>รูปภาพ</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleChange}
                          multiple
                        />
                      </label>
                      <div className="pl-1">
                        <div className="progessBar">{progress}</div>
                        <Button onClick={uploadFile} className="rounded-md">
                          Upload
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      อัพโหลดรูปฟรี 24ชั่วโมงไม่เว้นวันหยุดราชการ
                    </p>
                  </div>
                  <div className="w-full">
                    <ul className="grid grid-cols-4 gap-2">
                      {dataImg?.map((file, i) => (
                        <li key={i}>
                          <div>
                            {file.path ? (
                              <Image
                                src={file.path}
                                alt={file.name}
                                width={100}
                                height={100}
                                className="rounded-md object-contain"
                                layout="fixed"
                              />
                            ) : (
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            <p className="line-clamp-1 text-xs">{file.name}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center gap-4 rounded-md border-2 border-dashed border-gray-300 px-5 pb-6 pt-5">
                <div className="text-center">
                  <p className="text-xs">
                    ขั้นตอนง่ายกับการขายรถที่ CAR2AUTOBUY
                  </p>
                  <div className="p-2">
                    <Image
                      src={'/images/Car2autobuy-01.png'}
                      alt={'ขายรถยนต์'}
                      width={100}
                      height={60}
                      className="rounded-md object-contain"
                      layout="fixed"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* uploadimage */}

            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="name"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ชื่อ ผู้ขาย
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={Add_Name}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="ชื่อผู้ลงประกาศ"
                  onChange={(event) => setAdd_Name(event.target.value)}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="tel"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  เบอร์โทร
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  value={Add_Tel}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="เบอร์โทรศัพท์"
                  onChange={(event) => setAdd_Tel(event.target.value)}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="line_id"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  LINE ID
                </label>
                <input
                  type="text"
                  name="line_id"
                  id="line_id"
                  value={Add_Line}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  placeholder="LINE ID"
                  onChange={(event) => setAdd_Line(event.target.value)}
                />
              </div>
            </div>
            {/* ing */}
            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  E-MAIL
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  defaultValue={UserUEmail}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="DisplayName"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  DisplayName
                </label>
                <input
                  type="text"
                  name="DisplayName"
                  id="DisplayName"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  defaultValue={UserUDisplayName}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="Date_Time"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  วันที่ลงประกาศ
                </label>
                <input
                  type="text"
                  name="Date_Time"
                  id="Date_Time"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  defaultValue={formatDate(current)}
                />
              </div>
            </div>
            {/* ing */}
            <Button className={'rounded-md'} onClick={sendData}>
              SAVE
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
