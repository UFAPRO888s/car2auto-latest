import React, { useState, useRef } from 'react'
import Head from 'next/head'
import { AuthLayout } from '@/components/AuthLayout'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/Button'
import Img_GG from '@/images/google.png'
import Img_FB from '@/images/facebook.png'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const SignupPage = () => {
  const methods = useForm({ mode: 'onBlur' })
  const [errorMessage, setErrorMessage] = useState(null)
  const { signUp, ProviderSignIn, ProviderFacebookSignIn } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const password = useWatch({
    control: methods.control,
    name: 'password',
  })
  const confirmPassword = useWatch({
    control: methods.control,
    name: 'confirmPassword',
  })

  const onSubmit = async (data) => {
    try {
      await signUp(data.email, data.password)

      router.push('/dashboard')
    } catch (error) {
      console.log(error)
      const cleanErrorMessage = error.message.split('/')[1].replace(/[^a-zA-Z ]/g, ' ')
      setErrorMessage(cleanErrorMessage)
    }
  }

  const handleButtonClick = () => {
    if (password !== confirmPassword) {
      setErrorMessage('รหัสผ่านไม่ตรงกัน')
    } else {
      handleSubmit(onSubmit)()
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
        <title>{'สมัครสมาชิก ' + siteMetadata.title + ' | ' + siteMetadata.author}</title>
        <meta name="description" content={'สมัครสมาชิก ' + siteMetadata.description} />
      </Head>
      <PageSEO
        title={'สมัครสมาชิก ' + siteMetadata.title + ' | ' + siteMetadata.author}
        description={'สมัครสมาชิก ' + siteMetadata.description}
      />
      <AuthLayout>
        <div>
          <div className="text-center">
            <h2 className="text-center text-2xl font-semibold text-[#1B64A6]">
              ลงทะเบียนสมาชิกใหม่
            </h2>
            <small className="text-[#1B64A6] font-semibold">ยินดีต้อนรับสู่ Car2autobuy</small>
          </div>

          <FormProvider {...methods}>
            <form action="" className="w-90 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="block mb-3 font-sans text-[#1B64A6] text-sm">
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
                  <label htmlFor="password" className="block mb-3 font-sans text-[#1B64A6] text-sm">
                    กรอกรหัสผ่าน *
                  </label>
                </div>

                <input
                  id="password"
                  type="password"
                  {...register('password', { required: 'ต้องการรหัสผ่าน' })}
                  className={`rounded-lg bg-[#F0F0F0] ring:0 focus:ring-0 focus:outline-none text-gray-500 text-normal py-2 h-10 px-6 text-lg w-full flex items-center`}
                />
                {errors.password && <p className="text-red-400">{errors.password.message}</p>}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="re_password"
                    className="block mb-3 font-sans text-[#1B64A6] text-sm"
                  >
                    กรอกรหัสผ่าน อีกครั้ง *
                  </label>
                </div>

                <input
                  id="re_password"
                  type="password"
                  {...register('confirmPassword', {
                    required: 'ยืนยันรหัสผ่านของคุณ',
                  })}
                  className={`rounded-lg bg-[#F0F0F0] ring:0 focus:ring-0 focus:outline-none text-gray-500 text-normal py-2 h-10 px-6 text-lg w-full flex items-center`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-400">{errors.confirmPassword.message}</p>
                )}
              </div>
              {errorMessage && (
                <div className="mt-8">
                  <p className="text-red-400">{errorMessage}</p>
                </div>
              )}
              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className={`h-10 text-center w-full bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-sm transition`}
                >
                  <p className="capitalize text-white font-normal">สมัครเลย</p>
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
              <div className="text-center">
                <p className="text-base text-red-500">{errorMessage}</p>
              </div>
            </form>
          </FormProvider>
        </div>
      </AuthLayout>
    </>
  )
}

export default SignupPage
