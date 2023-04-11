import Head from 'next/head'
import { SwiperSlideX } from '@/components/SwiperSlideX'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'


export default function UserMag() {
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
      

      </main>
      <Footer />
    </>
  )
}
