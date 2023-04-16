import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Head from 'next/head'
import { SwiperSlideX } from '@/components/SwiperSlideX'

import { Footer } from '@/components/Footer'
import { HeroWhiteBuyCar } from '@/components/HeroWhiteBuyCar'
import siteMetadata from '@/data/siteMetadata'
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
      <PageSEO
        title={'ประเมินราคา ' + siteMetadata.title + ' | ' + siteMetadata.author}
        description={'ประเมินราคา ' + siteMetadata.description}
      />
      <SwiperSlideX />
      <main>
        <Container>
          <div className="mt-10">
            <div>
              <h1 className="text-3xl font-bold">ลงขายรถง่ายๆเพียง2ขั้นตอน</h1>
              <p className="text-xs font-semibold">ข้อมูลรถ</p>
            </div>
            <ComBoSelect ComboData={BrandDataList} Xlabel={'ยี่ห้อรถยนต์'} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
