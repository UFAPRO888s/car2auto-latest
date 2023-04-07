import Head from 'next/head'
import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { TextField } from '@/components/Fields'
import CurrencyFormat from 'react-currency-format'
export default function LoanCalc() {
  const [DownBt, setDownBt] = useState('')
  const [DownPr, setDownPr] = useState('')
  const [Interest, setInterest] = useState('')
  const [Period, setPeriod] = useState('')
  const [Price, setPrice] = useState('')
  const [PriceXvat, setPriceXvat] = useState('')

  function handlePriceChange(event) {
    //   console.log(event.target.value)
    setPrice(event.target.value)
  }

  function handleDownBtChange(event) {
    //  console.log(event.target.value)
    setDownBt(event.target.value)
  }
  function handlePerDownChange(event) {
    //  console.log(event.target.value)
    setDownPr(event.target.value)
    //const prx = "0."+event.target.value
    const prtobt = (Price * event.target.value) / 100
    // console.log(prtobt)
    setDownBt(prtobt)
  }
  function handleinterestChange(event) {
    // console.log(event.target.value)
    setInterest(event.target.value)
  }
  function PricePeriod(value) {
    // console.log(value)
    const PriceXDown = (Price - DownBt) * (Interest / 100)
    const intye = PriceXDown * value
    const PriceXvat = Number(intye) + Number(Price)
    const PriceXintye = PriceXvat / (value * 12)
    //const PriceXvatXinx = PriceXvat + Interest - DownBt;
    //console.log(intye)
    setPeriod(PriceXintye.toFixed(2))
    setPriceXvat(PriceXvat)
  }

  return (
    <>
      <Head>
        <title>
          คำนวณค่างวด รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง
          car2autobuy
        </title>
        <meta
          name="description"
          content="คำนวณค่างวด รถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <Header />
      <main className="px-2 md:px-10">
        <div className="py-10 text-center">
          <h1 className="text-3xl font-semibold">การเงิน</h1>
          <p className="text-xs">
            คาดการณ์การผ่อนชำระรายเดือน ด้วยเครื่องคำนวณสินเชื่อรถยนต์ของเรา
            คำนวณค่างวด รถยนต์มือสอง
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-1 rounded-lg bg-[#173559] md:col-span-8">
            <div className="mx-4 my-4 rounded-lg bg-[#ECF3F9]">
              <div className="grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
                <div>
                  <TextField
                    id={'PriceCha'}
                    label={'ราคารถ (บาท)'}
                    onChange={handlePriceChange}
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
                  <TextField
                    id={'DownBt'}
                    className="col-span-1 md:col-span-4"
                    label={'เงินดาวน์ บาท'}
                    onChange={handleDownBtChange}
                    defValue={DownBt}
                    dix={true}
                  />
                  <TextField
                    id={'PerDown'}
                    className="col-span-1 md:col-span-2"
                    label={'เงินดาวน์ %'}
                    defValue={'0'}
                    onChange={handlePerDownChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
                <div>
                  <TextField
                    id={'interest'}
                    label={'อัตราดอกเบี้ย (%)'}
                    onChange={handleinterestChange}
                  />
                </div>
                <div>
                  <h3 className="mb-3 block text-sm font-medium text-gray-700">
                    ระยะเวลา
                  </h3>
                  <div className="grid grid grid-cols-3 justify-items-center gap-2 font-bold md:grid-cols-6">
                    <div
                      className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                      onClick={() => PricePeriod('1')}
                    >
                      1
                    </div>
                    <div
                      className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                      onClick={() => PricePeriod('2')}
                    >
                      2
                    </div>
                    <div
                      className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                      onClick={() => PricePeriod('3')}
                    >
                      3
                    </div>
                    <div
                      className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                      onClick={() => PricePeriod('4')}
                    >
                      4
                    </div>
                    <div
                      className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                      onClick={() => PricePeriod('5')}
                    >
                      5
                    </div>
                    <div
                      className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 text-gray-100 hover:bg-red-500"
                      onClick={() => PricePeriod('6')}
                    >
                      6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid grid content-center justify-items-center md:col-span-4">
            <div className="mx-4 my-4 rounded-lg bg-[#ECF3F9] px-4 py-4">
              <small>ยอดจัดรวม:</small>
              <div className="text-2xl font-bold">
                <CurrencyFormat
                  value={PriceXvat}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'฿'}
                  renderText={(value) => (
                    <p>
                      {value} <span className="text-xs">บาท</span>
                    </p>
                  )}
                />
              </div>

              <small>ประเมินค่าผ่อนชำระรายเดือน:</small>
              <div className="text-2xl font-bold text-red-500">
                <CurrencyFormat
                  value={Period}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'฿'}
                  renderText={(value) => (
                    <p>
                      {value} <span className="text-xs">บาท</span>
                    </p>
                  )}
                />
              </div>
              <p className="text-xs">
                อัตราดอกเบี้ยและจำนวนเงินที่คำนวณเป็นเพียงการประมาณการเท่านั้น
                จำนวนจริงอาจแตกต่างกันไปตามเครดิตของคุณ
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
