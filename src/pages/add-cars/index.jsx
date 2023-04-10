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



export default function AddCars() {
  const { user } = useUser()
  const router = useRouter()
  const [UserUEmail, setUUserEmail] = useState('')
  const [UserUId, setUUserUid] = useState('')
  const [UserUDisplayName, setUUserDisplayName] = useState('')
  const [Add_Name, setAdd_Name] = useState('')
  const [Add_Line, setAdd_Line] = useState('')
  const [Add_Tel, setAdd_Tel] = useState('')
  const [imgxUP, setimgxUP] = useState('')
  const [GcarAddID, setIDGcarID] = useState('')
  const [fileList, setFileList] = useState(null)
  const [dataImg, getFile] = useState([])
  const [progress, setProgess] = useState(0)

  const uniqueId = () => {
    const dateString = Date.now().toString(36)
    const randomness = Math.random().toString(36).substr(2)
    return dateString + randomness
  }

  const current = new Date()
  const dateTimeAB = `${current.getDate()} - ${
    current.getMonth() + 1
  } - ${current.getFullYear()}`

  const  inputEl = useRef()

  useEffect(() => {
    (async () => {
      const UXIDCAR = uniqueId()
      setIDGcarID(UXIDCAR)
    })()

    return () => {
     
    }
  }, [])

  const sendData = async () => {
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
        imagesG: dataImg,
      })
      alert('Data successfully sent to cloud firestore!')
      //router.push('/add-cars')
      setAdd_Name('')
      setAdd_Line('')
      setAdd_Tel('')
      setimgxUP('')

      
      router.push('/add-cars')
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

  const handleChange = (e) => {
    setProgess(0)
    setFileList(e.target.files)
  }

  const uploadFile = async () => {
    const PathImg = []
    for (let i = 0; i < fileList?.length; i++) {
      const formData = new FormData()
      formData.append(`file`, fileList[i])
      axios
        .post('https://storage.car2autobuy.com/upload', formData, {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              '%'
            setProgess(progress)
          },
        })
        .then((res) => {
          PathImg.push({
            name: res.data.name,
            path: 'https://storage.car2autobuy.com' + res.data.path,
          })
        })
        .catch((err) => console.log(err))
    }
    getFile(PathImg)
    alert('อัพโหลดเรียบร้อยครับ!')
  }
  //const files = fileList ? [...fileList] : []
  //console.log(dataImg)
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
                {/* <UptoHost car_IDX={GcarAddID} /> */}
                <div className="flex w-full justify-center gap-4 rounded-md border-2 border-dashed border-gray-300 px-5 pb-6 pt-5">
                  <div className="space-y-1 text-center">
                    <div className="grid grid-cols-1 text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>รูปภาพ</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleChange}
                          multiple
                        />
                      </label>
                      <div className="pl-1">
                        <div className="progessBar">{progress}</div>
                        <Button onClick={uploadFile} className="rounded-md">
                          Upload
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      อัพโหลดรูปฟรี 24ชั่วโมงไม่เว้นวันหยุดราชการ
                    </p>
                  </div>
                  <div className="w-full">
                    <ul className="grid grid-cols-4 gap-2">
                      {dataImg?.map((file, i) => (
                        <li key={i}>
                          <div>
                            {file.path ? (
                              <Image
                                src={
                                  file.path
                                }
                                alt={file.name}
                                width={100}
                                height={100}
                                className="rounded-md object-contain"
                                layout="responsive"
                              />
                            ) : (
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            <p className="line-clamp-1 text-xs">{file.name}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                  value={Add_Name}
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
                  value={Add_Tel}
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
                  value={Add_Line}
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
