import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { Container } from './Container'
import Image from 'next/image'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsCom() {
  let [categories] = useState({
    ซื้อรถ: [
      {
        id: 1,
        title: 'สมัครสมาชิกบนเว็บไซต์',
        imgPath: '/images/saleorbuyimg/สมัครสมาชิกบนเว็บไซต์-01.png',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: 'กรอกข้อมูลรถยนตร์',
        imgPath: '/images/saleorbuyimg/กรอกข้อมูลรถยนตร์-02.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: 'รอผู้ที่สนใจซื้อติดต่อไป',
        imgPath: '/images/saleorbuyimg/รอผู้ที่สนใจซื้อติดต่อไป-03.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: 'นัดผู้ซื้อตรวจสอบ',
        imgPath: '/images/saleorbuyimg/นัดผู้ซื้อตรวจสอบ-04.png',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    ขายรถ: [
      {
        id: 1,
        title: 'ค้นหารถยนตร์ที่ใช่',
        imgPath: '/images/saleorbuyimg/ค้นหารถยนตร์ที่ใช่-01.png',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: 'ตรวจสอบราคา',
        imgPath: '/images/saleorbuyimg/ตรวจสอบราคา-02.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: 'ติดต่อผู้ขายโดยตรง',
        imgPath: '/images/saleorbuyimg/ติดต่อผู้ขายโดยตรง-03.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: 'ทำสัญญาซื้อขาย',
        imgPath: '/images/saleorbuyimg/ทำสัญญาซื้อขาย-04.png',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    เราคือใคร: [
      {
        id: 1,
        title: 'สมัครสมาชิกบนเว็บไซต์',
        imgPath: '/images/saleorbuyimg/สมัครสมาชิกบนเว็บไซต์-01.png',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: 'กรอกข้อมูลรถยนตร์',
        imgPath: '/images/saleorbuyimg/กรอกข้อมูลรถยนตร์-02.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: 'รอผู้ที่สนใจซื้อติดต่อไป',
        imgPath: '/images/saleorbuyimg/รอผู้ที่สนใจซื้อติดต่อไป-03.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: 'นัดผู้ซื้อตรวจสอบ',
        imgPath: '/images/saleorbuyimg/นัดผู้ซื้อตรวจสอบ-04.png',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  })

  return (
    <Container className="w-full px-2 py-6 sm:px-0 mt-10">
      <h2 className="text-lg md:text-5xl font-semibold py-4">บริการของเรา</h2>
      <div>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 max-w-lg ">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <div className="flex flex-row justify-center gap-2">
                  {posts.map((post) => (
                    <div>
                      <div key={post.id} className="relative rounded-md hover:bg-gray-100">
                        <Image
                          src={post.imgPath}
                          alt={post.title}
                          width={200}
                          height={300}
                          className="object-contain"
                          priority
                        />
                        <Link
                          href="#"
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Container>
  )
}
