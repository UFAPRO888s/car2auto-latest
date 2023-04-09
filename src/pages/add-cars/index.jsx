import { Fragment, useEffect, useId, useRef, useState } from 'react'
import axios from 'axios'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageSEO } from '@/components/SEO'
import { getUserFromCookie } from '@/lib/firebase/userCookies'
import { useRouter } from 'next/router'
import UptoHost from '@/components/UptoHost'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { Button } from '@/components/Button'
import FileUploadMultiple from '@/components/FileUploadMultiple'
export default function AddCars() {
  const router = useRouter()
  const [UserUEmail, setUUserEmail] = useState('')
  const [UserUId, setUUserUid] = useState('')
  const [UserUDisplayName, setUUserDisplayName] = useState('')
  const [file, setFile] = useState('')
  const [data, getFile] = useState({ name: '', path: '' })
  const [progress, setProgess] = useState(0)

  const el = useRef()

  useEffect(() => {
    const storedgetUser = getUserFromCookie()
    if (!storedgetUser) {
      router.push('/')
    }
    setUUserUid(storedgetUser.uid)
    setUUserEmail(storedgetUser.email)
    setUUserDisplayName(storedgetUser.displayName)
  }, [])
  //console.log(UserUId)
  const handleChange = (e) => {
    setProgess(0)
    const file = e.target.files
    //console.log(file)
    setFile(file)
  }

  const uploadFile = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios
      .post('https://storage.car2autobuy.com/upload', formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) + '%'
          setProgess(progress)
        },
      })
      .then((res) => {
        console.log(res)
        getFile({
          name: res.data.name,
          path: 'https://storage.car2autobuy.com' + res.data.path,
        })
      })
      .catch((err) => console.log(err))
  }
  const current = new Date()
  const dateTimeAB = `${current.getDate()} - ${
    current.getMonth() + 1
  } - ${current.getFullYear()}`
  return (
    <>
      <PageSEO
        title={
          'ลงประกาศขายรถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy'
        }
        description={
          'ลงประกาศขายรถมือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง'
        }
      />
      <Header />
      <main>
        <Image
          src={'/images/banner1920x9152.jpg'}
          alt="ลงประกาศขายรถมือสอง"
          width={100}
          height={50}
          layout="responsive"
          className="z-0"
        />
        <Container>
          <div>
            <div className="py-4 text-center">
              <h1 className="text-3xl font-bold">ลงประกาศขายรถมือสอง</h1>
              <p className="text-base">ลงขายรถ ง่าย ไว 24ชม.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="col-span-2">
                <UptoHost />
              </div>
              <div className="col-span-2">
                
              </div>
              <div className="col-span-2">
               
              </div>
            </div>
            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="name"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  ชื่อ ผู้ขาย
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="ชื่อผู้ลงประกาศ"
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="tel"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  เบอร์โทร
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="เบอร์โทรศัพท์"
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="line_id"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  LINE ID
                </label>
                <input
                  type="text"
                  name="line_id"
                  id="line_id"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  placeholder="LINE ID"
                />
              </div>
            </div>
            {/* ing */}
            {/* ing */}
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  E-MAIL
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  placeholder=""
                  defaultValue={UserUEmail}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="DisplayName"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  DisplayName
                </label>
                <input
                  type="text"
                  name="DisplayName"
                  id="DisplayName"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 md:text-sm"
                  defaultValue={UserUDisplayName}
                />
              </div>
              <div className="relative col-span-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label
                  htmlFor="Date_Time"
                  className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  วันที่ลงประกาศ
                </label>
                <input
                  type="text"
                  name="Date_Time"
                  id="Date_Time"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  defaultValue={dateTimeAB}
                />
              </div>
            </div>
            {/* ing */}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
