import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox, RadioGroup } from '@headlessui/react'
import { FormProvider, useForm } from 'react-hook-form'
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
  Cityvalue,
} from '@/data/brandCars'
import Image from 'next/image'
import { Button } from '@/components/Button'
import axios from 'axios'


const current = new Date()
const dateTimeAB = `${current.getDate()}${current.getMonth() + 1}${current.getFullYear()}`

const uniqueId = () => {
  const dateString = Date.now().toString(36)
  const randomness = Math.random().toString(36).substr(2)
  return dateString + randomness
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FormSaleCar() {
  const [query, setQuery] = useState('')
  const [selectedBrand, setSelectedBrand] = useState(BrandDataList[0])
  const [selectedModelX, setModelX] = useState('')
  const [selectedModel_EX, setModel_EX] = useState('')
  const [selectedYear, setYear] = useState('')
  const [selectedCity, setCity] = useState('')

  const [selectedCarType, setSelectedCarType] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedTransmission, setSelectedTransmission] = useState('')
  const [selectedfuelType, setSelectedfuelType] = useState('')

  const [fileList, setFileList] = useState('')
  const [dataImg, getFile] = useState([])
  const [progress, setProgess] = useState(0)

  const [IDXCARID, SETIDXCARID] = useState('')
  const [GetUserUid, setGetUserUid] = useState()
  const [NameSend, setNameSend] = useState()
  const [TelPhone, setTelPhone] = useState()
  const [checkThai, setcheckThai] = useState(0)
  const [LineId, setLineId] = useState('')
  const [userPrice, setuserPrice] = useState('')
  const methods = useForm({ mode: 'onBlur' })
  const [errorMessage, setErrorMessage] = useState(null)
  const [ErrorNameMessage, setErrorNameMessage] = useState(null)

  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

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

  //console.log(selectedModel_EX)
  useEffect(() => {
    //setYear(filteredYearModel[0].year)
    const UXIDCAR = uniqueId()
    SETIDXCARID(UXIDCAR)

    //setGetUserUid(storedgetUser.id)
    //setGetUserEmail(storedgetUser.email)
    //setGetUserDisplayName(storedgetUser.name)
  }, [])

  function isValidTel(telx) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(telx)
  }

  function isValidName(namex) {
    return /[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์]/.test(namex)
  }

  const handleChangeTel = (event) => {
    if (!isValidTel(event.target.value)) {
      setErrorMessage('กรุณาใส่เบอร์โทรที่ถูกต้อง')
    } else {
      setErrorMessage(null)
    }

    setTelPhone(event.target.value)
  }

  const handleChangeName = (event) => {
    if (!isValidName(event.target.value)) {
      setErrorNameMessage('ชาวต่างชาติ กรุณาระบุสัญชาติด้วยนะค่ะ')
      setcheckThai(1)
    } else {
      setcheckThai(0)
      setErrorNameMessage(null)
    }

    setNameSend(event.target.value)
  }

  //console.log(GetUserUid)
  //console.log(IDXCARID)
  //brand_car=Honda&model_car=BRIO&modelex_car=1.2V&year_minor_car=2011-2016&first-name=AVFREE
  //&price-req=50000&tel=069-555-6666&line=ygfff&file-upload=สนุกกับBMW.png
 
  const subscribe = async (e) => {
    e.preventDefault()
    if (
      NameSend != '' ||
      TelPhone != '' ||
      LineId != ''
    ) {
      const res = await fetch(`/api/linenotify`, {
        body: JSON.stringify({
          selYear: selectedYear,
          selMake: selectedBrand?.name,
          selModel: selectedModelX,
          selModelex: selectedModel_EX,
          selNameUs: NameSend,
          selTel: TelPhone,
          selLine: LineId,
          pricereq: userPrice,
          selCity: selectedCity,
          URLimage: encodeURI(dataImg[0].name),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      let mxmsg = `NEW ปีรถ: ${selectedYear} ยี่ห้อ: ${selectedBrand?.name} รุ่น: ${selectedModelX} รุ่นย่อย: ${selectedModel_EX} ราคา: ${userPrice} ชื่อติดต่อ: ${NameSend} เบอร์โทร: ${TelPhone} line: ${LineId} จังหวัด: ${selectedCity}`
      
      //console.log(mxmsg)
      if (error) {
        setError(true)
        setMessage('กรุณาตรวจสอบข้อมูล ก่อนส่งนะ!')
        return
      }

      setError(false)
      setSubscribed(true)
      setMessage('ส่งข้อมูลเรียบร้อย! 🎉 พนักงานจะติดต่อกลับด่วนที่สุด\n' + mxmsg)
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
            let progress = Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) + '%'
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
  const files = fileList ? [...fileList] : []
  return (
    <>
      <form className="space-y-8 divide-y divide-gray-200" method='post' target='/api/line/'>
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div>
              <h3 className="text-3xl font-semibold leading-6 text-gray-100">ส่งรถ ประเมินราคา</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-200">
                ตรวจเช็คสภาพและประเมินราคาฟรีโดยมืออาชีพ
                จองคิวของคุณเพียงติดต่อเจ้าหน้านี้ได้เลยวันนี้!
              </p>
            </div>

            <div className="space-y-6 sm:space-y-5 grid grid-cols-1">
              <div className="w-full">
                <label htmlFor="brand_car" className="text-sm font-medium text-gray-100">
                  ยี่ห้อรถยนต์
                </label>
                <Combobox as="div" value={selectedBrand} onChange={setSelectedBrand}>
                  {/* <Combobox.Label className="block text-sm font-medium text-gray-100">
                    ยี่ห้อรถยนต์
                  </Combobox.Label> */}
                  <div className="relative w-full max-w-xs">
                    <Combobox.Input
                      className="mt-1 input input-bordered input-error w-full max-w-xs font-semibold"
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
                <label htmlFor="model_car" className="block text-sm font-medium text-gray-100">
                  รุ่นรถยนต์
                </label>
                <select
                  id="model_car"
                  name="model_car"
                  className="mt-1 input input-bordered input-error w-full max-w-xs font-semibold"
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
              <div className="w-full">
                {selectedModelX.length > 0 && (
                  <>
                    <label
                      htmlFor="modelex_car"
                      className="block text-sm font-medium text-gray-100"
                    >
                      รุ่นย่อยรถยนต์
                    </label>

                    <select
                      id="modelex_car"
                      name="modelex_car"
                      className="mt-1 input input-bordered input-error w-full max-w-xs font-semibold"
                      defaultValue={selectedModel_EX}
                      onChange={(event) => setModel_EX(event.target.value)}
                    >
                      {filteredModelex?.map((CarModel_ex, indexCarModel_ex) => (
                        <option key={indexCarModel_ex}>{CarModel_ex?.exmodel}</option>
                      ))}
                    </select>
                  </>
                )}
              </div>

              <div className="w-full">
                {selectedModel_EX.length > 0 && (
                  <>
                    <label
                      htmlFor="year_minor_car"
                      className="block text-sm font-medium text-gray-100"
                    >
                      ปี-โฉมรถยนต์
                    </label>

                    <select
                      id="year_minor_car"
                      name="year_minor_car"
                      className="mt-1 input input-bordered input-error w-full max-w-xs font-semibold"
                      defaultValue={selectedYear}
                      onChange={(event) => setYear(event.target.value)}
                    >
                      {filteredModelex?.map((CarModel_year, indexCarModel_year) => (
                        <option key={indexCarModel_year}>{CarModel_year?.year}</option>
                      ))}
                    </select>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-200">Personal Information</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-100">
                ข้อมูลเบื้องต้นเพื่อประกอบการประเมินราคารถยนต์
              </p>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-100 sm:mt-px sm:pt-2"
                >
                  ชื่อผู้ติดต่อ
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="input input-bordered input-success w-full max-w-xs"
                    onChange={handleChangeName}
                    defaultValue={NameSend}
                    required
                  />
                  {ErrorNameMessage && <p className="text-red-400 py-2">{ErrorNameMessage}</p>}
                </div>
              </div>
              {checkThai > 0 && (
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="thai-id"
                    className="block text-sm font-medium text-gray-100 sm:mt-px sm:pt-2"
                  >
                    คนไทยหรือป่าวววว
                  </label>

                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="thai-id"
                      {...register('thai', { required: 'จำเป็นต้องแจ้งว่าเป็น คนไทยหรือป่าวววว' })}
                      className={`input input-bordered input-success w-full max-w-xs`}
                    />
                    {errors.thai && <p className="text-red-400">{errors.thai.message}</p>}
                  </div>
                </div>
              )}

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="price_req"
                  className="block text-sm font-medium text-gray-100 sm:mt-px sm:pt-2"
                >
                  ราคาขายที่ต้องการ
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    name="price_req"
                    id="price_req"
                    className="input input-bordered input-success w-full max-w-xs"
                    onChange={(event) => setuserPrice(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="tel-phone"
                    className="block text-sm font-medium text-gray-100 sm:mt-px sm:pt-2"
                  >
                    เบอร์โทร
                  </label>

                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="tel"
                      {...register('tel', { required: 'จำเป็นต้องใช้เบอร์โทร' })}
                      className={`input input-bordered input-warning w-full max-w-xs`}
                      onChange={handleChangeTel}
                      defaultValue={TelPhone}
                    />
                    {errors.tel && <p className="text-red-400">{errors.tel.message}</p>}
                    {errorMessage && <p className="text-red-400 py-2">{errorMessage}</p>}
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="tel-phone"
                    className="block text-sm font-medium text-gray-100 sm:mt-px sm:pt-2"
                  >
                    LINE ID
                  </label>

                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="line-id"
                      {...register('line', { required: 'จำเป็นต้องใช้LINE' })}
                      className={`input input-bordered input-success w-full max-w-xs`}
                      onChange={(event) => setLineId(event.target.value)}
                    />
                    {errors.line && <p className="text-red-400">{errors.line.message}</p>}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 border-t border-gray-200 pt-5 pb-10">
                <div className="col-span-1 md:col-span-2 form-control w-full max-w-xs">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-100 sm:mt-px sm:pt-2"
                  >
                    จังหวัด
                  </label>
                  <label className="label">
                    <span className="label-text text-gray-100">
                      กรุณาเลือกจังหวัดที่รถอยู่ในปัจจุบัน
                    </span>
                    <span className="label-text-alt text-gray-300">{selectedCity}</span>
                  </label>
                  <select
                    className="select select-bordered"
                    id="cityName"
                    name="cityName"
                    onChange={(event) => setCity(event.target.value)}
                  >
                    <option disabled selected>
                      เลือก จังหวัด
                    </option>

                    {Cityvalue.map((City_List, indexCity_List) => (
                      <option key={indexCity_List}>{City_List?.CityName}</option>
                    ))}
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-gray-100">ระบุข้อมูลที่ถูกต้อง</span>
                    <span className="label-text-alt text-green-500">ช่วยให้ขายรถได้ไว</span>
                  </label>
                </div>
                <div className="col-span-1 md:col-span-3">
                  <div className="mt-1 sm:mt-0">
                    <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                        <div className="flex text-sm text-gray-100 gap-4">
                          <label
                            htmlFor="file_upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>คลิกเลือกรูปภาพ</span>
                            <input
                              id="file_upload"
                              name="file_upload"
                              type="file"
                              className="sr-only"
                              onChange={handleChange}
                            />
                          </label>
                        </div>
                        <div
                          onClick={uploadFile}
                          className="cursor-pointer rounded-md bg-red-500  text-gray-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          Upload
                        </div>
                      </div>
                      <ul className="ml-4 flex w-full gap-2 py-4 text-gray-100 text-center">
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
                <div className="col-span-1 md:col-span-1">
                  {message}
                  <Button
                    onClick={subscribe}
                    className="text-base bg-green-400 px-8 py-2 font-medium text-gray-500 bg-[#0E2E63] hover:text-gray-900 rounded-md"
                  >
                    ส่งข้อมูล
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 text-center">
            <p className="text-3xl text-red-500">อีกสักพักก็จะมีพนักงานติดต่อกลับ</p>
          </div>
        </div>
      </form>
    </>
  )
}
