import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Head from 'next/head'
import { SwiperSlideX } from '@/components/SwiperSlideX'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import Iframe from 'react-iframe'
import Image from 'next/image'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Listbox, Transition } from '@headlessui/react'
import ComBoSelect from '@/components/ComBoSelect'

import { BrandDataList, CarModelList } from '@/data/brandCars'
import original from '@/data/OptCars'
import Yearvalue from '@/data/year'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}





export default function AddNewCar() {
  // const [query, setQuery] = useState('')
  // const [selectedBrandData, setSelectedBrandData] = useState('')
  // const [selectedModelData, setSelectedModelData] = useState('')
  // const [selectedYearData, setSelectedYearData] = useState('')
 

  return (
    <>
      <Head>
        <title>
          รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy
        </title>
        <meta
          name="description"
          content="รถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <Header />
      <SwiperSlideX />
      <main>
        <Container>
          <div className="mt-10">
            <div>
              <h1 className="text-3xl font-bold">ลงขายรถง่ายๆเพียง2ขั้นตอน</h1>
              <p className="text-xs font-semibold">ข้อมูลรถ</p>
            </div>
            <ComBoSelect ComboData={BrandDataList} Xlabel={'ยี่ห้อรถยนต์'} />
            {/* <ComBoSelect ComboData={CarModelList} Xlabel={"รุ่นรถยนต์"} /> */}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
