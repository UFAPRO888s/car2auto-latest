import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import CarR1 from '@/images/imgcat/CarR1.jpg'
import CarR2 from '@/images/imgcat/CarR2.jpg'
import CarR3 from '@/images/imgcat/CarR3.jpg'

import CarX1 from '@/images/imgcat/CarX1.jpg'
import CarX2 from '@/images/imgcat/CarX2.jpg'
import CarX3 from '@/images/imgcat/CarX3.jpg'

import CarY1 from '@/images/imgcat/CarY1.jpg'
import CarY2 from '@/images/imgcat/CarY2.jpg'
import CarY3 from '@/images/imgcat/CarY3.jpg'

import LogoImage from '@/images/logos/Car2autobuy-Preview-01.svg'
import Link from 'next/link'

const days = [
  {
    name: 'Car Recommend',
    date: 'แนะนำรถยนต์มือสอง',
    dateTime: '2022-04-04',
    responsible: 'admin3',
    speakers: [
      {
        name: 'ประเภทรถเก๋ง',
        role: 'ตอบโจทย์การใช้งานที่แตกต่างกัน',
        image: CarR1,
        href: '/car-recommend/?recom=รถเก๋ง',
      },
      {
        name: 'ประเภทรถเก๋งแฮชแท็ก',
        role: 'สำหรับรถยนต์นั่งแบบ Hatchback',
        image: CarR2,
        href: '/car-recommend/?recom=รถเก๋งแฮชแท็ก',
      },
      {
        name: 'ประเภทรถกระบะ',
        role: 'เปรียบเทียบสเปครถ รถกระบะ 4 ประตูทุกรุ่น',
        image: CarR3,
        href: 'car-recommend/?recom=รถกระบะ',
      },
    ],
  },
  {
    name: 'Car Clip',
    date: 'คลิปหลุดในรถยนต์',
    dateTime: '2022-04-05',
    responsible: 'admin2',
    speakers: [
      {
        name: 'รถสปอร์ต',
        role: 'คลิปหลุดรถสปอร์ต',
        image: CarY1,
        href: 'car-clip/?clip=รถสปอร์ต',
      },
      {
        name: 'รถเก๋ง',
        role: 'คลิปหลุดรถเก๋ง',
        image: CarY2,
        href: 'car-clip/?clip=รถเก๋ง',
      },
      {
        name: 'รถกระบะ',
        role: 'คลิปหลุดรถกระบะ',
        image: CarY3,
        href: 'car-clip/?clip=รถกระบะ',
      },
    ],
  },
  {
    name: 'Car Story',
    date: 'ข่าวราคารถยนต์',
    dateTime: '2022-04-06',
    responsible: 'admin1',
    speakers: [
      {
        name: 'รถสปอร์ต',
        role: 'ข่าวรถสปอร์ต',
        image: CarX1,
        href: 'car-story/?cat=ข่าวรถสปอร์ต',
      },
      {
        name: 'รถเก๋ง',
        role: 'ข่าวรถเก๋ง',
        image: CarX2,
        href: 'car-story/?cat=ข่าวรถเก๋ง',
      },
      {
        name: 'รถกระบะ',
        role: 'ข่าวรถกระบะ',
        image: CarX3,
        href: 'car-story/?cat=ข่าวรถกระบะ',
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-zinc-600 md:text-5xl"
          >
            บทความ ข่าวรถยนต์มือสอง
          </h2>
          <p className="mt-4 font-display text-lg md:text-2xl tracking-tight text-zinc-900">
            ข่าวสาร ล่าสุด บทความ ดีๆ เกี่ยวกับข้อมูลรถยนต์มือสอง
            หรือติดตามข่าวสารรถยนต์ในวงการรถยนต์ เทคนิคการใช้งานและดูแลรถยนต์
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-zinc-600 stroke-blue-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-red-500'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-lg md:text-2xl font-semibold tracking-tight text-zinc-900"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[8rem] transform overflow-hidden rounded-4xl md:h-[17.5rem]">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-zinc-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Link href={`${speaker.href}`} title={speaker.name}>
                          <Image
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            src={speaker.image}
                            alt={speaker.name}
                            priority
                            layout="responsive"
                            width={100}
                            height={100}
                            //sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </Link>
                      </div>
                    </div>
                    <Link
                      href={`${speaker.href}`}
                      title={'ไปยัง ' + speaker.name}
                    >
                      <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                        {speaker.name}
                      </h3>
                    </Link>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
