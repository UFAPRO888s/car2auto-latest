import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { SelectField } from '@/components/Fields'
import { Button } from '@/components/Button'


import {DownDropYear} from '@/components/DownDropYear'
export default function SaleCars() {
 //console.log(Yearvalue)
  return (
    <>
      <Head>
        <title>
          ขายรถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy
        </title>
        <meta
          name="description"
          content="ขายรถมือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <Header />
      <main>
        <div className="bg-[url('/images/banner1920x9152.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="mx-auto grid h-auto md:h-screen grid-cols-1 px-2 md:px-10 py-10 md:py-20 md:grid-cols-2">
            <div className='grid content-end'>
              <h1 className="text-2xl md:text-5xl font-bold text-white">
                ขายรถยนต์ของคุณที่ CAR2AUTOBUY
              </h1>
              <p className="text-base md:text-2xl text-white">
                ปลอดภัย เชื่อถือได้ และจบไวใน 24 ชั่วโมง
              </p>
            </div>
            <div className="rounded-lg bg-white px-4 md:px-10 py-4 md:py-10">
              <h2 className="text-center text-lg font-semibold text-gray-700">
                กรอกรายละเอียดของคุณเพื่อประเมินราคาฟรี!
              </h2>
              <div className="grid grid-cols-2 gap-2 py-2">
              
                {/* <DownDropYear /> */}
                <SelectField label={'ปีรถยนต์'} />
                <SelectField label={'รุ่นรถยนต์'} />
               
              </div>
              <div className="grid grid-cols-2 gap-2 py-2">
                <SelectField label={'รุ่นรถยนต์'} />
                <SelectField label={'ประเภทรถ'} />
              </div>
              <div className="grid grid-cols-2 gap-2 py-2">
                <SelectField label={'เครื่องยนต์'} />
                <SelectField label={'ระบบเกียร์'} />
              </div>
              <div className="py-6">
                <Button className="w-full rounded-md">เริ่มที่นี่</Button>
                <p className="py-4 text-center text-xs">
                  เพื่อดำเนินการต่อ
                  ฉันยอมรับนโยบายความเป็นส่วนตัวและข้อกำหนดการใช้งาน
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
