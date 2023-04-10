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
import { useUser } from '@/lib/firebase/useUser'
import { initFirebase } from '@/lib/firebase/initFirebase'
import { db } from '@/lib/firebase/initFirebase'
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  Timestamp,
  GeoPoint,
} from 'firebase/firestore'

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}

export default function AddCars() {
  const { user } = useUser()
  const router = useRouter()
  const [UserUEmail, setUUserEmail] = useState('')
  const [UserUId, setUUserUid] = useState('')
  const [UserUDisplayName, setUUserDisplayName] = useState('')
  const [Add_Name, setAdd_Name] = useState('')
  const [Add_Line, setAdd_Line] = useState('')
  const [Add_Tel, setAdd_Tel] = useState('')
  const [GcarAddID, setIDGcarID] = useState('')

  const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

  const current = new Date()
  const dateTimeAB = `${current.getDate()} - ${
    current.getMonth() + 1
  } - ${current.getFullYear()}`

  //const el = useRef()
  
  

  
  
  

  useEffect(() => {
    (async () => {
      const UXIDCAR = uniqueId()
      setIDGcarID(UXIDCAR)
    })();
  
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  //console.log(GcarAddID)
  const sendData = async () => {
   // const GcarIDX = uuidv4()
    try {
      const userDoc = doc(db, 'car2autobuy', user.id)
      await updateDoc(userDoc, GcarAddID, {
        car_ID: GcarAddID,
        userId: user.id,
        Add_Name: Add_Name,
        Add_Line: Add_Line,
        Add_Tel: Add_Tel,
        Add_Email: UserUEmail,
        Add_DisplayName: UserUDisplayName,
        current: current,
      })
      alert('Data was successfully sent to cloud firestore!')
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => {
    const storedgetUser = getUserFromCookie()
    if (!storedgetUser) {
      router.push('/')
    }
    setUUserUid(storedgetUser.id)
    setUUserEmail(storedgetUser.email)
    setUUserDisplayName(storedgetUser.name)
  }, [])
  //console.log(UserUId)

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
          <div className="py-4">
            <div className="py-4 text-center">
              <h1 className="text-3xl font-bold">ลงประกาศขายรถมือสอง</h1>
              <p className="text-base">ลงขายรถ ง่าย ไว 24ชม.</p>
              <p className="text-base font-semibold">
                ลงประกาศขายรถมือสอง CAR2AUTOBUY
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-6">
              <div className="col-span-5">
                <UptoHost car_IDX={GcarAddID} />
              </div>

              <div className="col-span-1"></div>
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
                  onChange={(event) => setAdd_Name(event.target.value)}
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
                  onChange={(event) => setAdd_Tel(event.target.value)}
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
                  onChange={(event) => setAdd_Line(event.target.value)}
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
            <Button className={'rounded-md'} onClick={sendData}>
              SAVE
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
