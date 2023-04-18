import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
const MakeBrand = [
  {
    brand: 'HONDA',
    count: 1129,
    imgpath: '/images/carbrandtop/01.png',
    href: '/nissan',
    bgcolor: 'bg-yellow-500',
  },
  {
    brand: 'TOYOTA',
    count: 4652,
    imgpath: '/images/carbrandtop/02.png',
    href: '/toyota',
    bgcolor: 'bg-purple-600',
  },
  {
    brand: 'MAZDA',
    count: 2599,
    imgpath: '/images/carbrandtop/03.png',
    href: '/honda',
    bgcolor: 'bg-yellow-500',
  },
  {
    brand: 'NISSAN',
    count: 890,
    imgpath: '/images/carbrandtop/04.png',
    href: '/nissan',
    bgcolor: 'bg-green-500',
  },
  {
    brand: 'MG',
    count: 1169,
    imgpath: '/images/carbrandtop/05.png',
    href: '/mg',
    bgcolor: 'bg-purple-600',
  },
  {
    brand: 'MITSUBISHI',
    count: 1224,
    imgpath: '/images/carbrandtop/06.png',
    href: '/mitsubishi',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'ISUZU',
    count: 1224,
    imgpath: '/images/carbrandtop/07.png',
    href: '/isuzu',
    bgcolor: 'bg-pink-600',
  },
  {
    brand: 'SUZUKI',
    count: 1224,
    imgpath: '/images/carbrandtop/08.png',
    href: '/suzuki',
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

export function HeroBrand() {
  return (
    <div
      className={
        "p-16 bg-[url('/images/background-filter-ซื้อรถยนตร์.jpg')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className="flex flex-row py-12 bg-white rounded-2xl shadow-lg">
        <div className="basis-4/6 my-4 mx-10 rounded-md text-[#588DBC]">
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
          <div className="grid grid-cols-8 gap-4">
            {MakeBrand.map((MakeBrandUP, MakeIndex) => (
              <Link href={'#'} key={MakeIndex}>
                <div className="h-[90px] w-[90px] border border-1 border-[#588DBC]/50 rounded-md mt-4 hover:bg-[#588DBC] cursor-pointer hover:shadow-md">
                  <Image
                    src={MakeBrandUP.imgpath}
                    alt={MakeBrandUP.brand}
                    priority
                    width={100}
                    height={100}
                    className="object-contain "
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-8 gap-4 ">
            {MakeType.map((MakeTypeUP, TypeIndex) => (
              <Link href={'#'} key={TypeIndex}>
                <div className="grid content-center h-[90px] w-[90px] border border-1 border-[#588DBC]/50 rounded-md mt-4 hover:bg-[#588DBC] cursor-pointer hover:shadow-md">
                  <Image
                    src={MakeTypeUP.imgpath}
                    alt={MakeTypeUP.brand}
                    priority
                    width={100}
                    height={100}
                    className="w-full h-auto object-contain px-3"
                  />
                  <span className="text-center text-[10px] text-black">{MakeTypeUP.brand}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="basis-1/6">xx</div>
      </div>
    </div>
  )
}
