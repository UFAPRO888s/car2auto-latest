import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { Combobox, RadioGroup } from '@headlessui/react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import CurrencyFormat from 'react-currency-format'
import { Button } from '@/components/Button'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
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
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid'
import { Footer } from '@/components/Footer'
import carData from '@/data/carlist'
import Link from 'next/link'

const sortOptions = [
  { name: 'กำลังเป็นที่นิยม', href: '#', current: true },
  { name: 'คะแนนโหวตสูง', href: '#', current: false },
  { name: 'มาใหม่', href: '#', current: false },
  { name: 'ราคา: น้อย ไปหา มาก', href: '#', current: false },
  { name: 'ราคา: มาก ไปหา น้อย', href: '#', current: false },
]
const subCategories = [{ name: 'รถยอดนิยม', href: '#' }]
const filters = [
  {
    id: 'color',
    name: 'สีตัวถัง',
    options: [
      { value: 'white', label: 'สีขาว', checked: false },
      { value: 'Black', label: 'สีดำ', checked: false },
      { value: 'Pink', label: 'สีชมพู', checked: false },
      { value: 'brown', label: 'สีน้ำตาล', checked: false },
      { value: 'Gold', label: 'สีทอง', checked: false },
      { value: 'Silver', label: 'สีเงิน', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'ประเภทรถ',
    options: [
      {
        label: '2-ประตู',
        value: '2-ประตู',
        imgp: '/images/car_type/2-ประตู.png',
        checked: false,
        bgColor: 'bg-gray-100/80',
      },
      {
        label: '4-ประตู',
        value: '4-ประตู',
        imgp: '/images/car_type/4-ประตู.png',
        checked: false,
        bgColor: 'bg-gray-100/80',
      },
      {
        label: '5-ประตู',
        value: '5-ประตู',
        imgp: '/images/car_type/5-ประตู.png',
        checked: false,
        bgColor: 'bg-gray-100/80',
      },
      {
        label: 'SUV',
        value: 'SUV',
        imgp: '/images/car_type/SUV.png',
        checked: false,
        bgColor: 'bg-gray-100/80',
      },
      {
        label: 'มินิเเวน',
        value: 'มินิเเวน',
        imgp: '/images/car_type/มินิเเวน.png',
        checked: false,
        bgColor: 'bg-gray-100/80',
      },
      {
        label: 'รถกระบะ',
        value: 'รถกระบะ',
        imgp: '/images/car_type/รถกระบะ.png',
        checked: false,
        bgColor: 'bg-gray-100/80',
      },
      {
        label: 'รถตู้',
        value: 'รถตู้',
        imgp: '/images/car_type/รถตู้.png',
        checked: false,
        bgColor: 'bg-gray-100/80',
      },
      {
        label: 'รถยนตร์ไฟฟ้า EV',
        value: 'รถยนตร์ไฟฟ้า-EV',
        imgp: '/images/car_type/รถยนตร์ไฟฟ้า-EV.png',
        checked: false,
        bgColor: 'bg-gray-100/80',
      },
      {
        label: 'รถสปอร์ต',
        value: 'รถสปอร์ต',
        imgp: '/images/car_type/รถสปอร์ต.png',
        checked: false,
        bgColor: 'bg-gray-100/80',
      },
    ],
  },
  {
    id: 'size',
    name: 'ขนาดยาง',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: false },
    ],
  },
]

const quotedPrice = [
  {
    key: 'ต่ำกว่า 350,000 บาท',
    displayText: 'ต่ำกว่า 350,000 บาท',
    nameEn: 'Below ฿ 350,000',
    isTopBrand: false,
    min: 0,
    max: 350000,
  },
  {
    key: '350k - 500k',
    displayText: '350k - 500k',
    nameEn: '350k - 500k',
    isTopBrand: false,
    min: 350000,
    max: 500000,
  },
  {
    key: '500k - 700k',
    displayText: '500k - 700k',
    nameEn: '500k - 700k',
    isTopBrand: false,
    min: 500000,
    max: 700000,
  },
  {
    key: '700k - 1 ล้านบาท',
    displayText: '700k - 1 ล้านบาท',
    nameEn: '฿ 700K - 1M',
    isTopBrand: false,
    min: 700000,
    max: 1000000,
  },
]

const MakeBrand = [
  {
    brand: 'Nissan',
    count: 1129,
    imgpath: '/images/brands/nissan.png',
    href: '/nissan',
    bgcolor: 'bg-yellow-500',
  },
  {
    brand: 'Toyota',
    count: 4652,
    imgpath: '/images/brands/toyota.png',
    href: '/toyota',
    bgcolor: 'bg-purple-600',
  },
  {
    brand: 'Honda',
    count: 2599,
    imgpath: '/images/brands/honda.png',
    href: '/honda',
    bgcolor: 'bg-yellow-500',
  },
  {
    brand: 'Mazda',
    count: 890,
    imgpath: '/images/brands/mazda.png',
    href: '/mazda',
    bgcolor: 'bg-green-500',
  },
  {
    brand: 'Mitsubishi',
    count: 1169,
    imgpath: '/images/brands/mitsubishi.png',
    href: '/mitsubishi',
    bgcolor: 'bg-purple-600',
  },
  {
    brand: 'Isuzu',
    count: 1224,
    imgpath: '/images/brands/isuzu.png',
    href: '/isuzu',
    bgcolor: 'bg-pink-600',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TypeCarsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCarType, setSelectedCarType] = useState('')
  const [selectedfuelType, setSelectedfuelType] = useState('')
  return (
    <>
      <PageSEO
        title={siteMetadata.title + ' | ' + siteMetadata.author}
        description={siteMetadata.description}
      />

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">ตัวกรอง</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">ประเภท</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-lg md:text-4xl font-bold tracking-tight text-gray-900">
              CAR2AUTOBUY
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    จัดเรียง
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">ดูตาราง</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">ตัวกรอง</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              รถยนต์
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">ประเภท</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {quotedPrice.map((categoryPrice, IndexPrice) => (
                    <li key={IndexPrice}>
                      <div className="badge badge-success gap-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 py-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <Link
                          href={'typecars/?min=' + categoryPrice.min + '&max=' + categoryPrice.max}
                          
                        >
                          {categoryPrice.displayText}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="hidden grid-cols-3 gap-2 py-4 md:grid ">
                  {MakeBrand.map((MakeBrandUP, MakeIndex) => (
                    <Button
                      //href={`/buycars/?make=${MakeBrandUP.brand}`}
                      variant="outline"
                      key={MakeIndex}
                      className="rounded-lg  bg-white/50"
                    >
                      <div>
                        <div className="mx-auto">
                          <Image
                            src={MakeBrandUP.imgpath}
                            alt={MakeBrandUP.brand}
                            priority
                            width={70}
                            height={70}
                            className="h-auto w-10 object-contain md:h-auto md:w-14"
                          />
                        </div>
                        <p className="text-xs">{MakeBrandUP.string}</p>
                      </div>
                    </Button>
                  ))}
                </div>
                <div className="py-4">
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
                              'h-12 w-12 rounded-full border border-black border-opacity-10 text-xs text-center'
                            )}
                          >
                            <Image
                              src={fuels.imgp}
                              alt={fuels.name}
                              priority
                              width={100}
                              height={100}
                              className="object-cover"
                            />
                            {fuels.name}
                          </span>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="py-4">
                  <RadioGroup value={selectedCarType} onChange={setSelectedCarType}>
                    <RadioGroup.Label className="-mt-px inline-block px-1 text-base font-medium text-gray-700 text-gray-900">
                      ประเภทรถยนต์
                    </RadioGroup.Label>
                    <div className="mt-4 grid grid-cols-4 gap-4">
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
                              width={100}
                              height={100}
                              className="object-contain"
                              priority
                            />
                            {TypesCar.name}
                          </span>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:col-span-3 lg:gap-x-8">
                {carData.map((carListData, indexCar) => (
                  <Link
                    key={indexCar}
                    href={
                      '/car/' +
                      carListData.make +
                      '-' +
                      carListData.model +
                      '-' +
                      carListData.appointmentId
                    }
                    className="group text-sm"
                  >
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        src={'https://fastly-production.24c.in/' + carListData.mainImage.path}
                        alt={carListData.variant}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover object-center"
                        priority
                      />
                    </div>
                    <h3 className="mt-4 font-medium text-gray-900">
                      {carListData.make} {carListData.year}
                    </h3>
                    <p className="italic text-xs text-gray-500">{carListData.variant}</p>

                    <CurrencyFormat
                      value={carListData.price}
                      displayType={'text'}
                      thousandSeparator={true}
                      //prefix={""}
                      renderText={(value) => (
                        <p className="mt-2 font-medium text-gray-900">
                          {value} <span className="text-xs">บาท</span>
                        </p>
                      )}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
