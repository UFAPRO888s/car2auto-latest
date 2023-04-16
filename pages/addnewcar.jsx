import { Fragment, useEffect, useId, useRef, useState } from 'react'

import { Footer } from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { Container } from '@/components/Container'
import ComBoSelect from '@/components/ComBoSelect'
import { PageSEO } from "@/components/SEO";
import { BrandDataList } from '@/data/brandCars'

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
