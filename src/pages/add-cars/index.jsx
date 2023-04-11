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
import { RadioGroup } from '@headlessui/react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import User_Borders from '@/components/User_Borders'
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  Timestamp,
  getDoc,
  GeoPoint,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import formatDate from '@/lib/formatDate'
import Yearvalue from '@/data/year'
import { BrandData } from '@/data/brand'
import Cityvalue from '@/data/city'
import ReadDataFromCloudFirestore from '@/components/cloudFirestore/Read'
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

const fuelDataType = [
  {
    id: 1,
    name: 'เบนซิน',
    imgp: '/images/fuelType/Petrol.png',
    selectedColor: 'bg-blue-100/80',
    bgColor: 'bg-blue-100/80',
  },
  {
    id: 2,
    name: 'ดีเซล',
    imgp: '/images/fuelType/Diesel.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
  },
  {
    id: 3,
    name: 'Hybrid',
    imgp: '/images/fuelType/Hybrid.png',
    selectedColor: 'bg-red-100/80',
    bgColor: 'bg-red-100/80',
  },
]

const carDataType = [
  {
    id: 1,
    name: '2-ประตู',
    imgp: '/images/car_type/2-ประตู.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
  },
  {
    id: 2,
    name: '4-ประตู',
    imgp: '/images/car_type/4-ประตู.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
  },
  {
    id: 3,
    name: '5-ประตู',
    imgp: '/images/car_type/5-ประตู.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
  },
  {
    id: 4,
    name: 'SUV',
    imgp: '/images/car_type/SUV.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
  },
  {
    id: 5,
    name: 'มินิเเวน',
    imgp: '/images/car_type/มินิเเวน.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
  },
  {
    id: 6,
    name: 'รถกระบะ',
    imgp: '/images/car_type/รถกระบะ.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
  },
  {
    id: 7,
    name: 'รถตู้',
    imgp: '/images/car_type/รถตู้.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
  },
  {
    id: 8,
    name: 'รถยนตร์ไฟฟ้า-EV',
    imgp: '/images/car_type/รถยนตร์ไฟฟ้า-EV.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
  },
  {
    id: 9,
    name: 'รถสปอร์ต',
    imgp: '/images/car_type/รถสปอร์ต.png',
    selectedColor: 'bg-gray-100/80',
    bgColor: 'bg-gray-100/80',
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
const BookCar = [
  { id: 'yes', title: 'มีเล่มทะเบียน' },
  { id: 'no', title: 'ไม่มีเล่มทะเบียน' },
]
export default function AddCars() {
  const { user } = useUser()
  const router = useRouter()
  const [UserUEmail, setUUserEmail] = useState('')
  const [UserUId, setUUserUid] = useState('')
  const [UserUDisplayName, setUUserDisplayName] = useState('')
  const [Add_Name, setAdd_Name] = useState('')
  const [Add_Line, setAdd_Line] = useState('')
  const [Add_Tel, setAdd_Tel] = useState('')
  //const [imgxUP, setimgxUP] = useState(null)
  const [GcarAddID, setIDGcarID] = useState('')
  const [fileList, setFileList] = useState('')
  const [dataImg, getFile] = useState([])
  const [progress, setProgess] = useState(0)

  const [selected, setSelected] = useState(BrandData[0])
  //const [Add_Make, setAdd_Make] = useState('')
  const [Add_Model, setAdd_Model] = useState('')
  //const [Add_Year, setAdd_Year] = useState('')
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
  //const [Add_city, setAdd_city] = useState('')
  const [Add_warrantyExpiryDate, setAdd_warrantyExpiryDate] = useState('')
  const [Add_engineCc, setAdd_engineCc] = useState('')
  //const [Add_bodyType, setAdd_bodyType] = useState('')
  const [Add_odometerReading, setAdd_odometerReading] = useState('')
  //const [Add_transmissionType, setAdd_transmissionType] = useState('')
  //const [Add_fuelType, setAdd_fuelType] = useState('')
  const [Add_Door, setAdd_Door] = useState('')
  const [RxData, setRxData] = useState('')
  

  const [Add_Name_carHighlights, setAdd_Name_carHighlights] = useState('')
  const [Add_key_carHighlights, setAdd_key_carHighlights] = useState('')
  const [Add_Description_carHighlights, setAdd_Description_carHighlights] =
    useState('')
  const [Add_subHeading_carHighlights, setAdd_subHeading_carHighlights] =
    useState('')

  const [selectedYear, setSelectedYear] = useState(Yearvalue[0])
  const [selectedCity, setSelectedCity] = useState(Cityvalue[0])
  const [selectedTransmission, setSelectedTransmission] = useState(TransType[0])
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedCarType, setSelectedCarType] = useState(carDataType[0])
  const [selectedfuelType, setSelectedfuelType] = useState(fuelDataType[0])

  const uniqueId = () => {
    const dateString = Date.now().toString(36)
    const randomness = Math.random().toString(36).substr(2)
    return dateString + randomness
  }

  useEffect(() => {
    const storedgetUser = getUserFromCookie()

    if (!storedgetUser) {
      router.push('/')
    }
    console.log(storedgetUser)
    setUUserUid(storedgetUser.id)
    setUUserEmail(storedgetUser.email)
    setUUserDisplayName(storedgetUser.name)
  }, [])

  const current = new Date()
  const dateTimeAB = `${current.getDate()}${
    current.getMonth() + 1
  }${current.getFullYear()}`

  // const inputEl = useRef()

  useEffect(() => {
    ;(async () => {
      const UXIDCAR = uniqueId()
      setIDGcarID(UXIDCAR)
    })()

    return () => {}
  }, [])

  useEffect(() => {
    ;(async () => {
      console.log(UserUId)
      const UserGquery = query(
        collection(db, 'car2autobuy'),
        where('Add_Email', '==', UserUEmail)
      )

      const querySnapshot = await getDocs(UserGquery)
      //console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        setRxData(doc.data())
        //console.log(doc.id, ' => ', doc.data())
       // console.log(doc.data().count)
      })
    })()

    return () => {}
  }, [])

  //const qNook = query(collection(db, "car2autobuy"), where("capital", "==", true));

  //console.log(selected.name,Add_Model,selectedCarType.name,selectedCity.CityName, selectedYear.YearCode,Add_Variant,Add_targetPrice,Add_engineNumber,Add_chasisNumber,Add_booked)
  const sendData = async () => {
    try {
      //const userDoc = doc(db, 'car2autobuy',GcarAddID+'-'+dateTimeAB)

      // await setDoc(userDoc, GcarAddID, {
      //   appointmentId: GcarAddID,
      //   make: selected.name,
      //   model: Add_Model,
      //   year: selectedYear.YearCode,
      //   variant: Add_Variant,
      //   targetPrice: Add_targetPrice,
      //   marketPrice: null,
      //   marketPriceDiff: null,
      //   discount: null,
      //   processingFee: null,
      //   engineNumber: Add_engineNumber,
      //   chasisNumber: Add_chasisNumber,
      //   booked: Add_booked,
      //   listingActive: null,
      //   city: selectedCity.CityName,
      //   warrantyExpiryDate: Add_warrantyExpiryDate,
      //   engineCc: Add_engineCc,
      //   mainImage: {
      //     path: dataImg[0].path,
      //     vehicleImageCategory: dataImg[0].name,
      //     label: dataImg[0].name,
      //   },
      //   carHighlights: {
      //     name: Add_Name_carHighlights,
      //     key: Add_key_carHighlights,
      //     description: Add_Description_carHighlights,
      //     subHeading: Add_subHeading_carHighlights,
      //   },

      //   gallery: dataImg,
      //   promoType: null,
      //   publishedType: 'READY_FOR_SALE',
      //   lang: 'th',
      //   bodyType: selectedCarType.name,
      //   readyForSaleTimestamp: current,
      //   carTag: null,
      //   color: selectedColor.name,
      //   price: Add_targetPrice,
      //   odometerReading: Add_odometerReading,
      //   ownerNumber: null,
      //   transmissionType: selectedTransmission.name,
      //   fuelType: selectedfuelType.name,
      //   userId: user.id,
      //   Add_Name: Add_Name,
      //   Add_Line: Add_Line,
      //   Add_Tel: Add_Tel,
      //   Add_Email: UserUEmail,
      //   Add_DisplayName: UserUDisplayName,
      //   current: current,
      //   //imagesG: dataImg,
      // },{ merge: true })

      const docData = {
        appointmentId: GcarAddID,
        make: selected.name,
        model: Add_Model,
        year: selectedYear.YearCode,
        variant: Add_Variant,
        targetPrice: Add_targetPrice,
        marketPrice: '',
        marketPriceDiff: '',
        discount: '',
        processingFee: '',
        engineNumber: Add_engineNumber,
        chasisNumber: Add_chasisNumber,
        booked: Add_booked,
        listingActive: '',
        city: selectedCity.CityName,
        warrantyExpiryDate: Add_warrantyExpiryDate,
        engineCc: Add_engineCc,
        door: Add_Door,
        mainImage: {
          path: dataImg[0].path,
          vehicleImageCategory: dataImg[0].name,
          label: dataImg[0].name,
        },
        carHighlights: {
          name: Add_Name_carHighlights,
          key: Add_key_carHighlights,
          description: Add_Description_carHighlights,
          subHeading: Add_subHeading_carHighlights,
        },

        gallery: dataImg,
        promoType: null,
        publishedType: 'READY_FOR_SALE',
        lang: 'th',
        bodyType: selectedCarType.name,
        readyForSaleTimestamp: current,
        carTag: '',
        color: selectedColor.name,
        price: Add_targetPrice,
        odometerReading: Add_odometerReading,
        ownerNumber: null,
        transmissionType: selectedTransmission.name,
        fuelType: selectedfuelType.name,
        userId: user.id,
        Add_Name: Add_Name,
        Add_Line: Add_Line,
        Add_Tel: Add_Tel,
        Add_Email: UserUEmail,
        Add_uid: UserUId,
        Add_DisplayName: UserUDisplayName,
        current: current,
      }
      await setDoc(
        doc(db, 'car2autobuy', GcarAddID + '-' + dateTimeAB),
        docData
      )
      alert('Data successfully sent to cloud firestore!')
      //router.push('/add-cars')
      //setAdd_Name('')
      //setAdd_Line('')
      //setAdd_Tel('')
      //setimgxUP('')

      router.push('/')
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

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
        <div className="relative">
          <Image
            src={'/images/banner1920x9152.jpg'}
            alt="ลงประกาศขายรถมือสอง"
            width={100}
            height={50}
            layout="responsive"
            className="z-0"
            priority
          />
          <div className="relative md:absolute md:bottom-32 md:right-10">
            <h1 className="px-4 text-3xl font-bold text-gray-700 md:text-5xl md:text-white">
              ขายรถมือสอง<span>ประกาศขายรถ</span>
            </h1>
            <p className="px-4 text-base text-gray-700 md:text-gray-100">
              แหล่งรวม<strong className="text-orange-500">รถยนต์มือสอง</strong>
              คุณภาพดี ตรวจสอบประวัติย้อนหลังได้ ในราคาที่ดีที่สุด
              เช่าซื้อได้ทุกอาชีพ ไฟแนนซ์ผ่านง่าย ผ่อนนาน
            </p>
            <div>
              <User_Borders />
            </div>
          </div>
        </div>
        <Container>
          <div className="py-4">
            <div className="py-4 text-center">
              <h2 className="text-2xl font-bold md:text-3xl">
                ลงประกาศขายรถมือสอง
              </h2>
              <p className="text-base">ลงขายรถ ง่าย ไว 24ชม.</p>
              <p className="text-base font-semibold">
                ลงประกาศขายรถมือสอง CAR2AUTOBUY
              </p>
            </div>
            {/* ing */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="relative col-span-8 py-2">
                <RadioGroup
                  value={selectedCarType}
                  onChange={setSelectedCarType}
                >
                  <RadioGroup.Label className="absolute -top-2 left-2 -mt-px inline-block px-1 text-sm text-xs font-medium font-medium text-gray-700 text-gray-900">
                    ประเภทรถยนต์
                  </RadioGroup.Label>
                  <div className="mt-4 flex flex-wrap items-center gap-2 md:space-x-3">
                    {carDataType.map((TypesCar) => (
                      <RadioGroup.Option
                        key={TypesCar.id}
                        value={TypesCar}
                        className={({ active, checked }) =>
                          classNames(
                            TypesCar.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-md p-0.5 hover:bg-red-500 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {TypesCar.name}
                        </RadioGroup.Label>

                        <span
                          aria-hidden="true"
                          className={classNames(
                            TypesCar.bgColor,
                            'h-16 w-16 rounded-md border border-black border-opacity-10'
                          )}
                        >
                          <Image
                            src={TypesCar.imgp}
                            alt={TypesCar.name}
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

              <div className="relative col-span-4 rounded-md py-2">
                {/* <SelectedCars DataSet={BrandData} LabelX={'ยี่ห้อ'} /> */}
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-sm font-medium text-gray-700">
                        ยี่ห้อ
                      </Listbox.Label>

                      <Listbox.Button className="relative w-full cursor-default rounded-md py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm">
                        <span className="flex items-center">
                          <Image
                            src={selected?.imgpath}
                            alt={selected?.name}
                            layout="fixed"
                            width={30}
                            height={30}
                            className="h-6 w-6 flex-shrink-0 rounded-full object-contain"
                            priority
                          />
                          <span className="ml-3 block truncate">
                            {selected?.name}
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
                          {BrandData.map((perData, indexID) => (
                            <Listbox.Option
                              key={indexID}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9'
                                )
                              }
                              value={perData}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <Image
                                      src={perData.imgpath}
                                      alt={perData.name}
                                      layout="fixed"
                                      width={30}
                                      height={30}
                                      className="h-6 w-6 flex-shrink-0 rounded-full object-contain"
                                      priority
                                    />
                                    <span
                                      className={classNames(
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'ml-3 block truncate'
                                      )}
                                    >
                                      {perData.name}
                                    </span>
                                  </div>

                                  {selected ? (
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
                    </>
                  )}
                </Listbox>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="Year"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ปีจดทะเบียน
                </label>
                <Listbox value={selectedYear} onChange={setSelectedYear}>
                  {({ open }) => (
                    <>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md py-2 pl-3 pr-9 text-left shadow-sm sm:text-sm">
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
                  htmlFor="targetPrice"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ราคา
                </label>
                <input
                  type="number"
                  name="targetPrice"
                  id="targetPrice"
                  value={Add_targetPrice}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="ราคา"
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
                  placeholder="เลขเครื่องยนต์"
                  onChange={(event) => setAdd_engineNumber(event.target.value)}
                />
              </div>
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
                  defaultValue={Add_chasisNumber}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  placeholder="เลขตัวถัง"
                  onChange={(event) => setAdd_chasisNumber(event.target.value)}
                />
              </div>
            </div>
            {/* ing */}

            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="col-span-2 grid grid-rows-2">
                <div className="relative col-span-2">
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
                                {selectedCity.CityName}
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
                                  key={CityXData.CityId}
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
                                          {CityXData.CityName}
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
                    defaultValue={Add_warrantyExpiryDate}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="วันหมดประกัน"
                    onChange={(event) =>
                      setAdd_warrantyExpiryDate(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label className="text-base font-medium text-gray-900">
                  เล่มทะเบียน
                </label>
                <p className="text-sm leading-5 text-gray-500">
                  รถยนต์มีเล่มทะเบียนมาด้วยหรือไม่
                </p>
                <fieldset className="mt-4">
                  <legend className="sr-only">เล่มทะเบียน</legend>
                  <div className="space-y-4">
                    {BookCar.map((BookCarMethod) => (
                      <div key={BookCarMethod.id} className="flex items-center">
                        <input
                          id="BookCarMethod-method"
                          name="BookCarMethod-method"
                          type="radio"
                          defaultChecked={BookCarMethod.id === 'no'}
                          onChange={(event) =>
                            setAdd_booked(event.target.value)
                          }
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={BookCarMethod.id}
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          {BookCarMethod.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* XCSS */}
              <div className="col-span-2 grid grid-rows-2 gap-4">
                <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                  <label
                    htmlFor="engineCc"
                    className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                  >
                    ความจุเครื่องยนต์(cc)
                  </label>
                  <input
                    type="number"
                    name="engineCc"
                    id="engineCc"
                    defaultValue={Add_engineCc}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="ความจุเครื่องยนต์"
                    onChange={(event) => setAdd_engineCc(event.target.value)}
                  />
                </div>
                <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                  <label
                    htmlFor="odometerReading"
                    className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                  >
                    ระยะไมล์
                  </label>
                  <input
                    type="number"
                    name="odometerReading"
                    id="odometerReading"
                    defaultValue={Add_odometerReading}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="ระยะไมล์"
                    onChange={(event) =>
                      setAdd_odometerReading(event.target.value)
                    }
                  />
                </div>
              </div>
              {/* XCSS */}
            </div>
            {/* ing */}

            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md px-3 py-2">
                <RadioGroup
                  value={selectedTransmission}
                  onChange={setSelectedTransmission}
                >
                  <RadioGroup.Label className="absolute -top-2 left-2 -mt-px inline-block px-1 text-sm text-xs font-medium font-medium text-gray-700 text-gray-900">
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

              <div className="relative col-span-2 rounded-md px-3 py-2">
                <RadioGroup
                  value={selectedfuelType}
                  onChange={setSelectedfuelType}
                >
                  <RadioGroup.Label className="absolute -top-2 left-2 -mt-px inline-block px-1 text-sm text-xs font-medium font-medium text-gray-700 text-gray-900">
                    ประเภทเชื้อเพลิง
                  </RadioGroup.Label>
                  <div className="mt-4 flex items-center space-x-3">
                    {fuelDataType.map((fuels) => (
                      <RadioGroup.Option
                        key={fuels.id}
                        value={fuels}
                        className={({ active, checked }) =>
                          classNames(
                            fuels.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {fuels.name}
                        </RadioGroup.Label>

                        <span
                          aria-hidden="true"
                          className={classNames(
                            fuels.bgColor,
                            'h-10 w-10 rounded-full border border-black border-opacity-10'
                          )}
                        >
                          <Image
                            src={fuels.imgp}
                            alt={fuels.name}
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
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="door"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ประตู
                </label>
                <input
                  type="number"
                  name="door"
                  id="door"
                  value={Add_Door}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="ประตู"
                  onChange={(event) => setAdd_Door(event.target.value)}
                />
              </div>
            </div>
            {/* ing */}
            <div className="grid grid-cols-1 gap-2 py-2">
              {/* <ColorPicker id="color_car" name="color_car" /> */}
              <RadioGroup value={selectedColor} onChange={setSelectedColor}>
                <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                  สีตัวรถ
                </RadioGroup.Label>
                <div className="mt-4 flex flex-wrap items-center justify-around gap-2 md:space-x-3">
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
            {/* uploadimage */}
            <div className="grid grid-cols-1 gap-2 py-4 md:grid-cols-6">
              <div className="col-span-1 md:col-span-5">
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
              <div className="hidden w-full justify-center gap-4 rounded-md border-2 border-dashed border-gray-300 px-5 pb-6 pt-5 md:flex">
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
                  defaultValue={Add_Name}
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
                  defaultValue={Add_Tel}
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
                  defaultValue={Add_Line}
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
