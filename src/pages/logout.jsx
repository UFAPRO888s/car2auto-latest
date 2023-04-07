import Head from 'next/head'
import Link from 'next/link'
import cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'


export default function LogoutX() {
  const router = useRouter()
 
  function logout(){
    try {
        
        cookies.remove('auth');
        router.push("/");
    } catch (e) {
        console.log(e.message);
    }
}
  return (
    <>
      <Head>
        <title>ออกจากระบบ รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy</title>
        <meta
          name="description"
          content="สมัครสมาชิก รถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <AuthLayout>
        {logout}
      </AuthLayout>
    </>
  )
}
