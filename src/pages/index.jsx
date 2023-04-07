import Head from 'next/head'
import { SwiperSlideX } from '@/components/SwiperSlideX'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroCars } from '@/components/HeroCars'
import { HeroNewCars } from '@/components/HeroNewCars'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { HeroWhite } from '@/components/HeroWhite'
export default function Home() {
  return (
    <>
      <Head>
        <title>รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy</title>
        <meta
          name="description"
          content="รถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <Header />
      <SwiperSlideX />
      <main>
        <HeroNewCars />
        <HeroWhite />
        {/* <PrimaryFeatures />
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
