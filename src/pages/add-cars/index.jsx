import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageSEO } from '@/components/SEO'
import { getUserFromCookie } from '@/lib/firebase/userCookies'
import { useRouter } from 'next/router'
export default function AddCars() {
  const router = useRouter()
  useEffect(() => {
    const storedgetUser = getUserFromCookie()
    if (!storedgetUser) {
      router.push('/')
    }
  }, [])
  return (
    <>
      <PageSEO
        title={'รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy'}
        description={
          'รถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง'
        }
      />
      <Header />
      <main>
        <div>
          <div className='text-center py-4'>
            <h1 className="text-3xl font-bold">ลงประกาศขายรถมือสอง</h1>
            <p className='text-base'>ลงขายรถ ง่าย ไว 24ชม.</p>
          </div>
          <div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
