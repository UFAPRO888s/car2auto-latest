import Head from 'next/head'
import { SwiperSlideX } from '@/components/SwiperSlideX'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import Iframe from 'react-iframe'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

import { BrandData } from '@/data/brand'
import original from '@/data/OptCars'
import Yearvalue from '@/data/year'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserMag() {
  const [query, setQuery] = useState('')
  const [selectedBrandData, setSelectedBrandData] = useState('')
  const [selectedModelData, setSelectedModelData] = useState('')
  const [selectedYearData, setSelectedYearData] = useState('')

  const filteredYearData =
    query === ''
      ? Yearvalue
      : Yearvalue.filter((Year) => {
          return Year.YearName.toLowerCase().includes(query.toLowerCase())
        })

  const filteredBrandData =
    query === ''
      ? BrandData
      : BrandData.filter((Brand) => {
          //  console.log(Brand[selectedYearData?.YearCode])
          return Brand.name.toLowerCase().includes(query.toLowerCase())
        })

  const filteredModelData =
    query === ''
      ? BrandData
      : BrandData.filter((Brand) => {
          return Brand.name.toLowerCase().includes(query.toLowerCase())
        })
  //console.log(filteredBrandData[0][selectedYearData?.YearCode])
  //console.log(selectedBrandData['name'].toLowerCase())

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
          <div className="flex py-8 h-[95rem] hidden md:flex">
            <Iframe
              url="https://sale.car2autobuy.com/cars-add-new/"
              width="100%"
              height="100%"
              id="add_car"
              className="aspect-auto w-full h-[90rem]"
              display="block"
              position="relative"
            />
          </div>
          <div className='py-8 flex md:hidden'>
            <h2>ยังไม่รองรับมือถือ กรุณาใช้ในคอมพิวเตอร์</h2>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
