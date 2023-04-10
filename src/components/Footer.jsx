import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[url('/images/banner/banner1920x9152.jpg')] bg-cover bg-center bg-no-repeat py-10">
      <Container>
        <div className="my-10 grid grid-cols-1 gap-4 pb-6 pt-16 md:grid-cols-4 md:py-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center text-gray-100">
              {/* <Logomark className="h-10 w-10 flex-none fill-cyan-500" /> */}
              <Image
                className="h-auto w-40 flex-none fill-cyan-500"
                src={'/images/Car2autobuy-03.png'}
                alt="car-silver"
                width={100}
                height={50}
                layout="fixed"
              />
            </div>

            {/* <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav> */}
          </div>
          <div>
            <ul className="grid list-disc grid-cols-1 md:grid-cols-2">
              <li>
                <Link className="text-white hover:text-orange-500" href={'/buycars'}>
                  ค้นหารถ
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-orange-500" href={'#'}>
                  บทความ
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-orange-500" href={'/terms#faq'}>
                  คำถามที่พบบ่อย
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-orange-500"
                  href={'/terms'}
                >
                  เงื่อนไขการใช้บริการ
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-orange-500" href={'#'}>
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-white">
              ตัวแทนจำหน่ายรถยนต์ใหม่ และมือสองที่ได้รับรางวัล
              เป็นของศูนย์กลางตลาดรถที่ดีที่สุด ซึ่งมีสาขา ทั่วประเทศไทย
              รับประกันราคาต่ำสุดและการบริการลูกค้าที่ดีที่สุด
            </p>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-2">
            {/* <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div> */}
            <div className="ml-8 lg:w-64">
              <p className="text-3xl font-semibold text-orange-500">
                <Link href="tel:091-816-6689">091-816-6689</Link>
              </p>
              <p className="mt-1 text-base text-gray-100">
                support@car2autobuy.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-6 pt-8 md:flex-row md:justify-between md:pt-6">
          {/* <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form> */}
          <p className="my-6 text-sm text-gray-100 md:my-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved
            Car2autobuy
          </p>
          <div className="flex gap-4 text-center text-white">
            <div className="h-auto w-full">
              <Link href={'https://facebook.com/'} title="facebook">
                {' '}
                <Image
                  className="h-10 w-10"
                  src={'/images/img/fb.png'}
                  alt="car-fb"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </Link>
            </div>
            <div className="h-auto w-full">
              <Link href={'https://line.com/'} title="facebook">
                <Image
                  className="h-10 w-10"
                  src={'/images/img/linex.png'}
                  alt="car-linex"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </Link>
            </div>
            <div className="h-auto w-full">
              <Link href={'https://youtube.com/'} title="facebook">
                <Image
                  className="h-10 w-10"
                  src={'/images/img/youtube.png'}
                  alt="car-youtube"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
