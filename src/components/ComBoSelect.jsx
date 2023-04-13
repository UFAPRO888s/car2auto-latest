import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox, RadioGroup } from '@headlessui/react'
import formatDate from '@/lib/formatDate'
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
} from '@/data/brandCars'
import Image from 'next/image'
import { Button } from '@/components/Button'
import axios from 'axios'
import { useUser } from '@/lib/firebase/useUser'

const current = new Date()
const dateTimeAB = `${current.getDate()}${
  current.getMonth() + 1
}${current.getFullYear()}`

const uniqueId = () => {
  const dateString = Date.now().toString(36)
  const randomness = Math.random().toString(36).substr(2)
  return dateString + randomness
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ComBoSelect({ ComboData }) {
  const { user } = useUser()
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(ComboData[0])
  const [selectedModelX, setModelX] = useState('')
  const [selectedModel_EX, setModel_EX] = useState('')
  const [selectedCarType, setSelectedCarType] = useState(carDataTypeX[0])
  const [selectedColor, setSelectedColor] = useState(listcolors[0])
  const [selectedTransmission, setSelectedTransmission] = useState(TransType[0])
  const [selectedfuelType, setSelectedfuelType] = useState(fuelDataType[0])

  const [fileList, setFileList] = useState('')
  const [dataImg, getFile] = useState([])
  const [progress, setProgess] = useState(0)

  const [IDXCARID, SETIDXCARID] = useState('')
  const [GetUserUid, setGetUserUid] = useState()

  const filteredPeople =
    query === ''
      ? ComboData
      : ComboData.filter((person) => {
          return person?.name?.toLowerCase().includes(query.toLowerCase())
        })

  // const filteredModelex =
  //   selectedModelX === ''
  //     ? ex_model_Data
  //     : ex_model_Data.filter((model_DataX) => {
  //         return model_DataX?.model?.toLowerCase()
  //           .includes(selectedModelX?.toLowerCase())
  //       })
  // console.log(selectedModelX)
  const filteredModelex =
    selectedModelX === ''
      ? ex_model_Data
      : ex_model_Data.filter(
          (model_DataX) => model_DataX?.model == selectedModelX
        )

  const filteredYearModel =
    selectedModel_EX === ''
      ? ex_model_Data
      : ex_model_Data.filter(
          (model_Data_Year) =>
            (model_Data_Year?.model == selectedModelX) &
            (model_Data_Year?.exmodel == selectedModel_EX)
        )

 
  useEffect(() => {
    const UXIDCAR = uniqueId()
    SETIDXCARID(UXIDCAR)
    
    //setGetUserUid(storedgetUser.id)
    //setGetUserEmail(storedgetUser.email)
    //setGetUserDisplayName(storedgetUser.name)
  }, [])

  

  console.log(IDXCARID)
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

  return (
    <div className="py-4">
      <div className="relative flex flex-col justify-between gap-4 py-4 md:flex md:flex-row">
        <div className="w-full">
          <Combobox
            as="div"
            value={selectedPerson}
            onChange={setSelectedPerson}
          >
            <Combobox.Label className="block text-sm font-medium text-gray-700">
              ยี่ห้อรถยนต์
            </Combobox.Label>
            <div className="relative mt-1">
              <Combobox.Input
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(person) => person?.name}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>

              {filteredPeople.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredPeople.map((person, indexIDS) => (
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
                            <img
                              src={person.imageUrl}
                              alt={person.name}
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
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
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
          <label
            htmlFor="model_car"
            className="block text-sm font-medium text-gray-700"
          >
            รุ่นรถยนต์
          </label>
          <select
            id="model_car"
            name="model_car"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            //defaultValue={selectedModelX}
            onChange={(event) => setModelX(event.target.value)}
            //displayValue={(person) => person?.name}
          >
            {CarModelList[selectedPerson?.name?.toUpperCase()]?.map(
              (CarModel, indexCarModel) => (
                <option key={indexCarModel}>{CarModel}</option>
              )
            )}
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="model_car"
            className="block text-sm font-medium text-gray-700"
          >
            รุ่นย่อยรถยนต์
          </label>
          {selectedModelX.length > 0 && (
            <select
              id="model_car"
              name="model_car"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              //defaultValue=""
              onChange={(event) => setModel_EX(event.target.value)}
            >
              {filteredModelex?.map((CarModel_ex, indexCarModel_ex) => (
                <option key={indexCarModel_ex}>{CarModel_ex?.exmodel}</option>
              ))}
            </select>
          )}
        </div>

        <div className="w-full">
          <label
            htmlFor="year_minor_car"
            className="block text-sm font-medium text-gray-700"
          >
            ปี-โฉมรถยนต์
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="year_minor_car"
              id="year_minor_car"
              defaultValue={filteredYearModel[0]?.year}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="โฉมรถยนต์"
              //onChange={(event) => setAdd_warrantyExpiryDate(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between gap-4 py-4 md:flex md:flex-row">
        <div>
          <RadioGroup value={selectedCarType} onChange={setSelectedCarType}>
            <RadioGroup.Label className="-mt-px inline-block px-1 text-base font-medium text-gray-700 text-gray-900">
              ประเภทรถยนต์
            </RadioGroup.Label>
            <div className="mt-4 flex flex-wrap items-center gap-2 md:space-x-3">
              {carDataTypeX?.map((TypesCar, typeIndex) => (
                <RadioGroup.Option
                  key={typeIndex}
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
                      'h-16 w-16 rounded-md border border-black border-opacity-10 text-center text-xs '
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
                    {TypesCar.name}
                  </span>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div>
          <RadioGroup value={selectedCarType} onChange={setSelectedCarType}>
            <RadioGroup.Label className="-mt-px inline-block px-1 text-base font-medium text-gray-700 text-gray-900">
              ประตูรถยนต์
            </RadioGroup.Label>
            <div className="mt-4 flex flex-wrap items-center gap-2 md:space-x-3">
              {doors?.map((doorsCar, ixdexdoor) => (
                <RadioGroup.Option
                  key={ixdexdoor}
                  value={doorsCar}
                  className={({ active, checked }) =>
                    classNames(
                      doorsCar.selectedColor,
                      active && checked ? 'ring ring-offset-1' : '',
                      !active && checked ? 'ring-2' : '',
                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-md p-0.5 hover:bg-red-500 focus:outline-none'
                    )
                  }
                >
                  <RadioGroup.Label as="span" className="sr-only">
                    {doorsCar.name}
                  </RadioGroup.Label>

                  <span
                    aria-hidden="true"
                    className={classNames(
                      doorsCar.bgColor,
                      'grid h-16 w-16 content-center rounded-md border border-black border-opacity-10 text-center font-bold'
                    )}
                  >
                    {/* <Image
                      src={doorsCar.imgp}
                      alt={doorsCar.name}
                      layout="responsive"
                      width={100}
                      height={100}
                      className="object-contain"
                    /> */}
                    {doorsCar.name}
                  </span>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="relative flex flex-col justify-between gap-4 py-4 md:flex md:flex-row">
        <div>
          <RadioGroup value={selectedColor} onChange={setSelectedColor}>
            <RadioGroup.Label className="block text-sm font-medium text-gray-700">
              สีตัวรถ
            </RadioGroup.Label>
            <div className="mt-4 flex flex-wrap items-center justify-around gap-2 md:space-x-3">
              {listcolors.map((color) => (
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
        <div>
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
        <div>
          <RadioGroup value={selectedfuelType} onChange={setSelectedfuelType}>
            <RadioGroup.Label className="block text-sm font-medium text-gray-700">
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
      </div>
      <div className="relative flex flex-col justify-between gap-4 py-4 md:flex md:flex-row">
        <div className="w-full">
          <label
            htmlFor="mileage"
            className="block text-sm font-medium text-gray-700"
          >
            เลขไมล์
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="mileage"
              id="mileage"
              defaultValue=""
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="เลขไมล์"
              //onChange={(event) => setAdd_warrantyExpiryDate(event.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="pricex"
            className="block text-sm font-medium text-gray-700"
          >
            ราคาขาย
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="pricex"
              id="pricex"
              defaultValue=""
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="ราคาขาย"
              //onChange={(event) => setAdd_warrantyExpiryDate(event.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="car_registration_date"
            className="block text-sm font-medium text-gray-700"
          >
            วันจดทะเบียนรถ
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="car_registration_date"
              id="car_registration_date"
              defaultValue=""
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              //placeholder="วันจดทะเบียนรถ"
              //onChange={(event) => setAdd_warrantyExpiryDate(event.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="car_act"
            className="block text-sm font-medium text-gray-700"
          >
            พรบ รถยนต์
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="car_act"
              id="car_act"
              defaultValue=""
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              //placeholder="เลขไมล์"
              //onChange={(event) => setAdd_warrantyExpiryDate(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="car_accessories"
          className="block text-sm font-medium text-gray-700"
        >
          อุปกรณ์เสริมรถยนต์
        </label>
        <fieldset
          id="car_accessories"
          className="border-b border-t border-gray-200 "
        >
          <legend className="sr-only">อุปกรณ์เสริมรถยนต์</legend>
          <div className="grid grid-cols-1 gap-4 divide-y divide-gray-200 md:grid-cols-3">
            {car_accessories.map((caraccessories, indexacc) => (
              <div key={indexacc} className="relative flex items-start py-4">
                <div className="mr-3 flex h-5 items-center">
                  <input
                    id={caraccessories.tid}
                    aria-describedby={caraccessories.tid + '-description'}
                    name={caraccessories.tid}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="min-w-0 flex-1 text-sm">
                  <label
                    htmlFor={caraccessories.tid}
                    className="font-medium text-gray-700"
                  >
                    {caraccessories.label}
                  </label>
                  <p id="air_bag-description" className="text-gray-500">
                    {caraccessories.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-1 py-4">
        <label htmlFor="car_description" className="font-medium text-gray-700">
          รายละเอียดเพิ่มเติม
        </label>
        <textarea
          rows={5}
          name="car_description"
          id="car_description"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={''}
        />
      </div>
      <div>
        <label
          htmlFor="car-photo"
          className="block text-sm font-medium text-gray-700"
        >
          รูปภาพรถยนต์
        </label>
        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
          <div className="space-y-1 text-center">
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
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>คลิกเลือกรูปภาพ</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleChange}
                  multiple
                />
              </label>
              <p className="pl-1">หรือ ลากรูปมาวาง</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            <div className="pl-1">
              <div className="progessBar">{progress}</div>
              <Button onClick={uploadFile} className="rounded-md">
                Upload
              </Button>
            </div>
          </div>
        </div>
        <ul className="flex w-full gap-2 py-4">
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
            //defaultValue={Add_Name}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="ชื่อผู้ลงประกาศ"
            //onChange={(event) => setAdd_Name(event.target.value)}
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
            //defaultValue={Add_Tel}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="เบอร์โทรศัพท์"
            //onChange={(event) => setAdd_Tel(event.target.value)}
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
            //defaultValue={Add_Line}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
            placeholder="LINE ID"
            //onChange={(event) => setAdd_Line(event.target.value)}
          />
        </div>
      </div>

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
            //defaultValue={UserUEmail}
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
            //defaultValue={UserUDisplayName}
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
    </div>
  )
}
