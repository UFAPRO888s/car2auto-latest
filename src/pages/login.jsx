import React, { useId, Fragment, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'
import { initFirebase } from '@/lib/firebase/initFirebase'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { setUserCookie } from '@/lib/firebase/userCookies'
import { mapUserData } from '@/lib/firebase/mapUserData'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import Img_GG from '@/images/google.png'
import Img_FB from '@/images/facebook.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { db } from '@/lib/firebase/initFirebase'
import { doc, setDoc, Timestamp, GeoPoint } from 'firebase/firestore'

initFirebase()

export default function Login() {
  const router = useRouter()
  const [Password, setPassword] = useState('')
  const [Email, setEmail] = useState('')
  const [TextErrorLogin, setErrorLogin] = useState('')
  //const { userx, logout } = useUser()
  function handleSubmit(event) {
    event.preventDefault()
    if (Password) {
      //console.log(Email, Password)
      const auth = getAuth()
      signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          const user = userCredential.user
          setUserCookie(user) //console.log(user)
          WriteToCloudFirestore(user)
          //localStorage.setItem('userdatax', JSON.stringify(user))
          router.push('/')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
          setErrorLogin(
            'ไม่พบ ' +
              Email +
              ' ในระบบ ลงชื่อเข้าใช้ผ่าน Google ก็ได้นะ หรือจะสมัครโดยใช้ Email ก็ได้เช่นกัน'
          )
        })
    }
  }

  function handleGoogle() {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        setUserCookie(user)
        WriteToCloudFirestore(user)
        console.log(user)
        //localStorage.setItem('userdatax', JSON.stringify(user))
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        //const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }

  function handleFacebook() {
    const auth = getAuth()
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        setUserCookie(user)
        WriteToCloudFirestore(user)
        //console.log(user)
        //localStorage.setItem('userdatax', JSON.stringify(user))
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        //const email = error.customData.email
        const credential = FacebookAuthProvider.credentialFromError(error)
      })
  }

  const WriteToCloudFirestore = async (datax) => {
    //const WriteToCloudFirestore = (datax) => {

    try {
      const userDoc = doc(db, 'car2autobuy', datax.uid)
      await setDoc(
        userDoc,
        { 
        uid: datax.uid,
        // number_data: 2,
        // boolean_data: true,
        // map_data: { stringInMap: 'Hi', numberInMap: 7 },
        // array_data: ['text', 4],
        // null_data: null,
        // time_stamp: Timestamp.fromDate(new Date('December 17, 1995 03:24:00')),
        // geo_point: new GeoPoint(34.714322, -131.468435)
        })
      alert('Data was successfully sent to cloud firestore!')
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <>
      <Head>
        <title>
          เข้าสู่ระบบ รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง
          car2autobuy
        </title>
        <meta
          name="description"
          content="เข้าสู่ระบบ รถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">
              ลงชื่อเข้าใช้บัญชีของคุณ
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              ไม่มีบัญชี?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                ลงทะเบียน
              </Link>{' '}
              เพื่อเริ่มใช้งานฟรี
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 py-2">
            <div>
              <Button
                type="submit"
                color="cyan"
                onClick={handleGoogle}
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Google</span>
                <Image
                  className="h-20"
                  src={Img_GG}
                  alt="google"
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </Button>
            </div>
            <div>
              <Button
                type="submit"
                color="cyan"
                onClick={handleFacebook}
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Facebook</span>
                <Image
                  className="h-20"
                  src={Img_FB}
                  alt="facebook"
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </Button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-base text-red-500">{TextErrorLogin}</p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-4">
          <TextField
            label="ที่อยู่อีเมล์"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <TextField
            label="รหัสผ่าน"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
              onClick={handleSubmit}
            >
              <span>
                เข้าสู่ระบบ <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
