import { useId } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import CarData from '@/data/carlist'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceCardsIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill="#171717" />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#737373" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DeviceClockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={11} cy={20} r={2} fill="#171717" />
      <circle cx={11} cy={26} r={2} fill="#171717" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceLockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceChartIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
        fill="#171717"
      />
      <path
        d="M10 12h12"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function SecondaryBuySale() {
  return (
    <section
      id="secondary-hero"
      aria-label="Features secondary-hero"
      className="mt-5 py-5  md:py-10"
    >
      <Container>
        <div className="mx-auto py-10 text-center ">
          <div className="mx-auto my-4 flex h-1 max-w-[100px] justify-center bg-[#FDCF33]"></div>
          <h2 className=" text-3xl font-medium tracking-tight text-gray-900">
            ขั้นตอนการซื้อรถ
          </h2>
          {/* <p className="mt-2 text-lg text-gray-600">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg.
          </p> */}
        </div>
        <div>
          <Tabs className={'text-center'}>
            <TabList className={'flex justify-center gap-4'}>
              <Tab>วิธีซื้อ</Tab>
              <Tab>วิธีขาย</Tab>
            </TabList>
            <TabPanel>
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-4 md:grid-cols-4">
                <div className="relative h-auto">
                  <Image
                    className="h-full w-auto"
                    src={'/images/saleorbuyimg/ค้นหารถยนตร์ที่ใช่-01.png'}
                    alt={'ค้นหารถยนตร์ที่ใช่'}
                    width={80}
                    height={100}
                    layout="responsive"
                  />
                  <div className="absolute left-0 top-60 px-4 md:top-48">
                    <h3 className="text-lg font-semibold">ค้นหารถยนต์ที่ใช่</h3>
                    <p className="text-xs">
                      1. ค้นหารถยนต์ที่ใช่ เลือกรถที่คุณต้องการ
                      สามารถระบุรายละเอียด เช่น รุ่น ประเภทรถ หรือราคาเฉลี่ย
                      เพื่อให้ตรงตามความต้องการของคุณ
                    </p>
                  </div>
                </div>
                <div className="relative ">
                  <Image
                    className="h-full w-auto"
                    src={'/images/saleorbuyimg/ตรวจสอบราคา-02.png'}
                    alt={'ตรวจสอบราคา'}
                    width={80}
                    height={100}
                    layout="responsive"
                  />
                  <div className="absolute left-0 top-60 px-4 md:top-48">
                    <h3 className="text-lg font-semibold">ตรวจสอบราคา</h3>
                    <p className="text-xs">
                      2. ตรวจสอบราคา / ผ่อนชำระต่องวด เช็คราคารถยนต์
                      และข้อมูลจำเพาะต่างๆ ของรถยนต์ที่คุณอยากได้
                      หรือประเมินวงเงินเบื้องต้น เพื่อทราบราคาดาวน์
                      และราคาผ่อนชำระต่องวดได้แบบรวดเร็วทันใจ
                    </p>
                  </div>
                </div>
                <div className="relative ">
                  <Image
                    className="h-full w-auto"
                    src={'/images/saleorbuyimg/ติดต่อผู้ขายโดยตรง-03.png'}
                    alt={'ติดต่อผู้ขายโดยตรง'}
                    width={80}
                    height={100}
                    layout="responsive"
                  />
                  <div className="absolute left-0 top-60 px-4 md:top-48">
                    <h3 className="text-lg font-semibold">
                      ติดต่อผู้ขายโดยตรง
                    </h3>
                    <p className="text-xs">
                      3. ติดต่อผู้ขายโดยตรงสามารถติดต่อกับผู้ขายได้โดยตรง
                      เพื่อรับทราบเงื่อนไขในการชำระเงิน จัดไฟแนนซ์ ผ่อนชำระ
                      จองรถ หรือขอข้อมูลและดูรูปภาพรถเพิ่มเติมก่อนตัดสินใจซื้อ
                    </p>
                  </div>
                </div>
                <div className="relative ">
                  <Image
                    className="h-full w-auto"
                    src={'/images/saleorbuyimg/ทำสัญญาซื้อขาย-04.png'}
                    alt={'ทำสัญญาซื้อขาย'}
                    width={80}
                    height={100}
                    layout="responsive"
                  />
                  <div className="absolute left-0 top-60 px-4 md:top-48">
                    <h3 className="text-lg font-semibold">ทำสัญญาซื้อขาย</h3>
                    <p className="text-xs">
                      4. ทำสัญญาซื้อขายรถยนต์เตรียมสำเนาบัตรประชาชน
                      สำเนาทะเบียนบ้าน เอกสารสัญญาซื้อ-ขายรถ หรือเอกสารอื่นๆ
                      เพื่อเป็นการตกลงกับผู้ซื้อ
                      หรือเพื่อขอสินเชื่อกับสถาบันการเงินหรือไฟแนนซ์
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-4 md:grid-cols-4">
                <div className="relative ">
                  <Image
                    className="h-full w-auto"
                    src={'/images/saleorbuyimg/สมัครสมาชิกบนเว็บไซต์-01.png'}
                    alt={'สมัครสมาชิกบนเว็บไซต์'}
                    width={80}
                    height={100}
                    layout="responsive"
                  />
                  <div className="absolute left-0 top-60 px-4 md:top-48">
                    <h3 className="text-lg font-semibold">
                      สมัครสมาชิกบนเว็บไซต์
                    </h3>
                    <p className="text-xs">
                      1. สมัครสมาชิกบนหน้าเว็บไซต์ลงทะเบียนเพื่อเป็นสมาชิก
                      สามารถใช้ Google หรือ Facebook
                      สมัครสมาชิกกับเว็บไซต์ก็สามารถทำได้
                    </p>
                  </div>
                </div>
                <div className="relative ">
                  <Image
                    className="h-full w-auto"
                    src={'/images/saleorbuyimg/กรอกข้อมูลรถยนตร์-02.png'}
                    alt={'กรอกข้อมูลรถยนตร์'}
                    width={80}
                    height={100}
                    layout="responsive"
                  />
                  <div className="absolute left-0 top-60 px-4 md:top-48">
                    <h3 className="text-lg font-semibold">กรอกข้อมูลรถยนตร์</h3>
                    <p className="text-xs">
                      2. กรอกข้อมูลรถยนต์ที่ต้องการขาย
                      กรอกข้อมูลและรายละเอียดของรถยนต์ที่ต้องการขาย เช่น ยี่ห้อ
                      รุ่น ระบบเกียร์ ความจุเครื่องยนต์ เลขไมล์ สี
                      และรายละเอียดอื่นๆ พร้อมอัปโหลดรูปภาพรถที่ต้องการลงขาย
                      เพื่อให้ผู้ซื้อได้ทราบรายละเอียดได้อย่างชัดเจน
                    </p>
                  </div>
                </div>
                <div className="relative ">
                  <Image
                    className="h-full w-auto"
                    src={'/images/saleorbuyimg/รอผู้ที่สนใจซื้อติดต่อไป-03.png'}
                    alt={'รอผู้ที่สนใจซื้อติดต่อไป'}
                    width={80}
                    height={100}
                    layout="responsive"
                  />
                  <div className="absolute left-0 top-60 px-4 md:top-48">
                    <h3 className="text-lg font-semibold">
                      รอผู้ที่สนใจซื้อติดต่อไป
                    </h3>
                    <p className="text-xs">
                      3. รอผู้ที่สนใจซื้อติดต่อไป พูดคุยรายละเอียดต่างๆ
                      ตกลงราคาการซื้อขายหรือผ่อนชำระต่องวดกับผู้ซื้อ
                      โดยผู้ขายสามารถตกลงรายละเอียดต่างๆ กับผู้ซื้อได้โดยตรง
                      ไม่ว่าจะเป็นเรื่องทดลองขับ หรือเข้าชมรถยนต์
                    </p>
                  </div>
                </div>
                <div className="relative ">
                  <Image
                    className="h-full w-auto"
                    src={'/images/saleorbuyimg/นัดผู้ซื้อตรวจสอบ-04.png'}
                    alt={'นัดผู้ซื้อตรวจสอบ'}
                    width={80}
                    height={100}
                    layout="responsive"
                  />
                  <div className="absolute left-0 top-60 px-4 md:top-48">
                    <h3 className="text-lg font-semibold">นัดผู้ซื้อตรวจสอบ</h3>
                    <p className="text-xs">
                      4. นัดผู้ซื้อตรวจสอบสภาพรถ
                      นัดหมายผู้ซื้อตรวจเช็คสภาพรถยนต์
                      ให้พร้อมใช้งานตามมาตรฐานของแบรนด์รถยนต์
                      และตกลงนัดรับตามที่ได้คุยกันไว้
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </section>
  )
}
