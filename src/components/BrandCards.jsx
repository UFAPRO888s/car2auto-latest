import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { BrandData } from '@/data/brand'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BrandCards({ Maname }) {
  return (
    <Container>
      <div className="py-8">
        <h2 className="text-2xl font-bold text-gray-500">ค้นหายี่ห้อรถยนต์</h2>
        <ul
          role="list"
          className="mt-3 grid grid-cols-3 gap-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-7"
        >
          {BrandData.slice(0, 21).map((project) => (
            <li
              key={project.brand}
              className="col-span-1 flex rounded-md shadow-sm hover:bg-[#130F40] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <Link
                href={`/buycars/?make=${project.brand}&min=0&max=5000000`}
                className="h-auto w-full"
              >
                <div
                  className={classNames(
                    'flex flex flex-col items-center justify-center rounded-md border border-gray-200 p-1 text-sm font-medium text-gray-500'
                  )}
                >
                  <Image
                    className="block h-8 w-auto object-cover object-center"
                    src={project.imgpath}
                    alt={project.brand}
                    layout="fixed"
                    width={80}
                    height={80}
                  />

                  {project.brand}
                  <p className="font-normal text-gray-500">
                    {project.count} คัน
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
