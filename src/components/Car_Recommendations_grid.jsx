import Image from 'next/image'
import { PlusIcon } from '@heroicons/react/20/solid'
import { BrandData } from '@/data/brand'
const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Director, Product Development',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    role: 'Principal Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Car_Recommendations_grid() {
  return (
    <div className="mx-auto w-full">
      <div>
        <div className="text-center">
          <Image
            src="/images/Car2autobuy-01.png"
            alt="ซื้อรถมือสอง"
            layout="fixed"
            width={100}
            height={50}
          />
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            ซื้อรถมือสอง
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            แพลตฟอร์ม ซื้อ-ขายรถยนต์มือสองออนไลน์ ที่ดีที่สุด
          </p>
        </div>
        <form className="mt-6 sm:flex sm:items-center" action="#">
          <label htmlFor="car_filter" className="sr-only">
            ค้นหารถยนต์มือสอง
          </label>
          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            <input
              type="text"
              name="car_filter"
              id="car_filter"
              className="block w-full rounded-md border-gray-300 pr-32 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="ค้นหารถยนต์มือสอง"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
              <label htmlFor="search" className="sr-only">
                ค้นหารถมือสอง
              </label>
              <select
                id="search"
                name="search"
                className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>ค้นหาด้วย ยี่ห้อ</option>
                <option>ค้นหาด้วย ราคา</option>
              </select>
            </div>
          </div>
          <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              className="block w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              ค้นหา
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-500">
          ยี่ห้อรถยนต์มือสองแนะนำ
        </h3>
        <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {BrandData.slice(0,12).map((Brand, BrandIdx) => (
            <li key={BrandIdx}>
              <button
                type="button"
                className="group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="flex min-w-0 flex-1 items-center space-x-3">
                  <span className="block flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={Brand.imgpath}
                      alt={Brand.brand}
                    />
                  </span>
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-gray-900">
                      {Brand.brand}
                    </span>
                    <span className="block truncate text-sm font-medium text-gray-500">
                      {/* {Brand.count} */}
                    </span>
                  </span>
                </span>
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <PlusIcon
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
