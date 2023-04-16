import Link from 'next/link'
import Image from 'next/image'
const categories = [
  {
    name: '2 ประตู',
    href: '/typecars/?type=2-ประตู',
    imageSrc: '/images/car_type/2-ประตู.png',
  },
  {
    name: '4 ประตู',
    href: '/typecars/?type=4-ประตู',
    imageSrc: '/images/car_type/4-ประตู.png',
  },
  {
    name: '5 ประตู',
    href: '/typecars/?type=5-ประตู',
    imageSrc: '/images/car_type/5-ประตู.png',
  },
  {
    name: 'SUV',
    href: '/typecars/?type=suv',
    imageSrc: '/images/car_type/SUV.png',
  },
  {
    name: 'มินิเเวน',
    href: '/typecars/?type=มินิเเวน',
    imageSrc: '/images/car_type/มินิเเวน.png',
  },
  {
    name: 'รถกระบะ',
    href: '/typecars/?type=รถกระบะ',
    imageSrc: '/images/car_type/รถกระบะ.png',
  },
  {
    name: 'รถตู้',
    href: '/typecars/?type=รถตู้',
    imageSrc: '/images/car_type/รถตู้.png',
  },
  {
    name: 'รถยนตร์ไฟฟ้าEV',
    href: '/typecars/?type=รถยนตร์ไฟฟ้า-EV',
    imageSrc: '/images/car_type/รถยนตร์ไฟฟ้า-EV.png',
  },
  {
    name: 'รถสปอร์ต',
    href: '/typecars/?type=รถสปอร์ต',
    imageSrc: '/images/car_type/รถสปอร์ต.png',
  },
]

export default function Type_Cars() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">เลือก รถยนต์ตามประเภท</h2>
          <Link
            href="/typecars"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            ดูประเภทรถยนต์ ทั้งหมด
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-52 overflow-x-auto py-2 xl:overflow-visible">
              <div className="min-w-screen-xl absolute flex space-x-2 px-2 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="relative flex h-40 w-40 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <Image
                        src={category.imageSrc}
                        alt={category.name}
                        width={300}
                        height={300}
                        priority
                        className="h-full w-full object-contain object-center"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xs font-bold text-white">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <Link
            href="/typecars"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            ดูประเภทรถยนต์ ทั้งหมด
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
