import Image from 'next/image'

import backgroundImage from '@/images/bg-หน้า-login.png'
import LogoCar2autobuy from '@/images/Car2autobuy-03.png'

export function AuthLayout({ children }) {
  return (
    <>
      <div className="relative flex min-h-full justify-center md:px-0 bg-black">
        <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-16">
          <div className="mx-auto w-full max-w-md sm:px-4 md:max-w-sm md:px-0">{children}</div>
        </div>
        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <div>
            <Image
              //className="absolute inset-0 h-full w-full object-contain"
              className="relative"
              src={backgroundImage}
              alt="เข้าสู่ระบบ สมัครสมาชิก"
              width="100%"
              height="100%"
              priority
            />
          </div>
          <div>
            <div className="absolute top-20 right-32 text-white ">
              <Image
                className="object-contain"
                src={LogoCar2autobuy}
                alt="Logo Car2autobuy"
                width={200}
                height={100}
                priority
              />
              <div className="py-4">
                <h1 className="text-3xl font-semibold">รถมือสอง ฟรีดาวน์ ผ่อนถูก!</h1>
                <div className="py-4">
                  <p>เว็บไซต์ ซื้อ-ขาย รถมือสอง ที่มีรถให้เลือกมากกว่า10,000คัน</p>
                  <p>รถสวยสภาพดี การันตีความปลอดภัย อยู่ที่ไหนก็ซื้อได้</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
