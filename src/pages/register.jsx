import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>สมัครสมาชิก รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy</title>
        <meta
          name="description"
          content="สมัครสมาชิก รถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">
            เริ่มต้นได้ฟรี
            </h2>
            <p className="mt-2 text-sm text-gray-700">
            ลงทะเบียนเรียบร้อยแล้ว?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                ลงชื่อเข้าใช้
              </Link>{' '}
              บัญชีของคุณ
            </p>
          </div>
        </div>
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="ชื่อ"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="นามสกุล"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="ที่อยู่ อีเมล์"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="รหัสผ่าน"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <SelectField
            className="col-span-full"
            label="คุณต้องการอะไรจากเรา?"
            id="referral_source"
            name="referral_source"
          >
            <option>ค้นหา รถมือสอง</option>
            <option>ลงขายรถมือสอง</option>
            <option>หาเพื่อน</option>
            <option>หากลุ่ม</option>
          </SelectField>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
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
