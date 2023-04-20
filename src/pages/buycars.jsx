import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroCars } from '@/components/HeroCars'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Car_Recommendations_grid from '@/components/Car_Recommendations_grid'
import { SwiperSlideXbuy } from '@/components/SwiperSlideXbuy'
import { Container } from '@/components/Container'
import { HeroWhiteBuyCar } from '@/components/HeroWhiteBuyCar'


export default function BuyCars({DataCar,textRxSx,contexzt}) {
 // console.log(DataCar)
  return (
    <>
      <Head>
        <title>
          ซื้อรถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy
        </title>
        <meta
          name="description"
          content="ซื้อรถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <Header />
      {/* <SwiperSlideXbuy /> */}
      <main>
        <Container>
          <Car_Recommendations_grid />
          <HeroWhiteBuyCar DataCars={DataCar} textDis={textRxSx} ConTex={contexzt}/>
          {/* <HeroCars /> */}
          {/* <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
        </Container>
      </main>
      <Footer />
    </>
  )
}
export async function getServerSideProps(context) {
  const { make, min, max } = context.query
  const res = await fetch(
    `https://car2auto-2023-default-rtdb.asia-southeast1.firebasedatabase.app/dataCar.json`
  )
  const data = await res.json()
  // console.log(data)
  let result = data;
  let textRx = "ไม่พบรถยนต์ยี่ห้อ" +make;
  let conx = "ไม่พบการค้นหา"
  if(make){
   result = data.filter((carx) => carx.make == make | carx.price >= min | carx.price <= max)
   textRx = "รถยนต์ "+make+" จำนวน "+result.length +" คัน";
   conx = "ตามเงื่อนไข ยี่ห้อ "+make
  }else{
    result = data;
    textRx = "รถยนต์ทั้งหมด จำนวน "+result.length +" คัน";
    conx = "";
  }
  return {
    props: { DataCar: result ,textRxSx: textRx ,contexzt:conx},
  }
}
