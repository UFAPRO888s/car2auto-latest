import React, { useState } from 'react'
import Head from 'next/head'
import { FormProvider, useForm } from 'react-hook-form'
import Link from 'next/link'
import { Button } from '@/components/Button'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import { AuthLayout } from '@/components/AuthLayout'
import Img_GG from '@/images/google.png'
import Img_FB from '@/images/facebook.png'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const LoginPage = () => {
  const methods = useForm({ mode: 'onBlur' })
  const [errorMessage, setErrorMessage] = useState(null)
  const { logIn, ProviderSignIn, ProviderFacebookSignIn } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password)
      router.push('/dashboard')
    } catch (error) {
      console.log(error.message)
      const cleanErrorMessage = error.message.split('/')[1].replace(/[^a-zA-Z ]/g, ' ')
      setErrorMessage(cleanErrorMessage)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await ProviderSignIn()
      router.push('/dashboard')
    } catch (error) {
      console.log(error.message)
      const cleanErrorMessage = error.message.split('/')[1].replace(/[^a-zA-Z ]/g, ' ')
      setErrorMessage(cleanErrorMessage)
    }
  }

  const handleFacebookSignIn = async () => {
    try {
      await ProviderFacebookSignIn()
      router.push('/dashboard')
    } catch (error) {
      console.log(error.message)
      const cleanErrorMessage = error.message.split('/')[1].replace(/[^a-zA-Z ]/g, ' ')
      setErrorMessage(cleanErrorMessage)
    }
  }

  return (
    <>
      <Head>
        <title>{'เข้าสู่ระบบ ' + siteMetadata.title + ' | ' + siteMetadata.author}</title>
        <meta name="description" content={'เข้าสู่ระบบ ' + siteMetadata.description} />
      </Head>
      <PageSEO
        title={'เข้าสู่ระบบ ' + siteMetadata.title + ' | ' + siteMetadata.author}
        description={'เข้าสู่ระบบ ' + siteMetadata.description}
      />
      <AuthLayout>
        <div>
          <div className="mt-10">
            <div className="text-center">
              <h2 className="text-center text-2xl font-semibold text-[#1B64A6]">เข้าสู่ระบบ</h2>
              <small className="text-[#1B64A6] font-semibold">ยินดีต้อนรับสู่ Car2autobuy</small>
            </div>
          </div>

          <FormProvider {...methods}>
            <form action="" className="w-90 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="block mb-2 font-sans text-[#1B64A6] text-sm">
                    อีเมล์ *
                  </label>
                </div>

                <input
                  type="email"
                  {...register('email', { required: 'จำเป็นต้องใช้อีเมล' })}
                  className={`rounded-lg bg-[#F0F0F0] ring:0 focus:ring-0 focus:outline-none text-gray-500 text-normal py-2 h-10 px-6 text-lg w-full flex items-center`}
                />
                {errors.email && <p className="text-red-400">{errors.email.message}</p>}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="block mb-2 font-sans text-[#1B64A6] text-sm">
                    กรอกรหัสผ่าน *
                  </label>
                </div>

                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  className={`rounded-lg bg-[#F0F0F0] ring:0 focus:ring-0 focus:outline-none text-gray-500 text-normal py-2 h-10 px-6 text-lg w-full flex items-center`}
                />
                {errors.password && <p className="text-red-400">{errors.password.message}</p>}
              </div>
              <div className="flex gap-4 py-4 ">
                <div>
                  <div className="flex h-5 items-center text-sm font-semibold">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 mr-2"
                    />
                    <span className="text-[#1B64A6]">จำการเข้าสู่ระบบ</span>
                  </div>
                </div>
                <div className="flex h-5 items-center text-sm font-semibold">
                  <button
                    type="button"
                    onClick={() => router.push('/forgot-password')}
                    className="text-sm text-[#1B64A6] hover:text-blue-700 cursor-pointer font-semibold"
                  >
                    {' '}
                    ลืมรหัสผ่าน?
                  </button>
                </div>
              </div>
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className={`h-10 text-center w-full bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-sm transition`}
                >
                  <p className="capitalize text-white font-normal">เข้าสู่ระบบ</p>
                </button>
              </div>
              <div className="relative border-b-2 border-[#AFC8DF] mt-4 mb-4">
                <p className="absolute -bottom-3 left-28 text-center bg-white text-sm text-[#1B64A6] px-1">
                  หรือลงชื่อเข้าใช้โดย
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2 py-2 px-4">
                <div></div>
                <div>
                  <Button
                    type="submit"
                    color="cyan"
                    onClick={handleGoogleSignIn}
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <Image src={Img_GG} alt="google" width={50} height={50} priority />
                  </Button>
                </div>
                <div>
                  <Button
                    type="submit"
                    color="cyan"
                    onClick={handleFacebookSignIn}
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <Image src={Img_FB} alt="facebook" width={50} height={50} priority />
                  </Button>
                </div>
                <div></div>
              </div>
              <div className="text-center text-[10px] text-[#1B64A6]">
                <p>ในการดำเนินการต่อไปนี้ ข้าพเจ้ายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว</p>
                <p>ของ Car2autobuy ข้อกำหนด และ นโยบายความเป็นส่วนตัว</p>
              </div>
            </form>
          </FormProvider>
        </div>
      </AuthLayout>
    </>
  )
}

export default LoginPage
