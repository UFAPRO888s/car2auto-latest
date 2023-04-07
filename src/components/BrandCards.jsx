import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { BrandData } from '@/data/brand'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BrandCards({Maname}) {
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
              <Link href={`/cars/?make=${project.brand}&low=0&max=5000000`} className="h-auto w-full">
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
              {/* <div className="hidden md:flex flex-1 items-center justify-between truncate">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.brand}
                </a>
                <p className="text-gray-500">{project.count} คัน</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div> 
            </div>*/}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
