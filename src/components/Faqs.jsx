import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'คาร์ทูออโต้บาย จัดการภาษีมูลค่าเพิ่มหรือไม่?',
      answer:
        'คาร์ทูออโต้บาย ก็ไม่ แต่ถ้าคุณย้ายบริษัทไปต่างประเทศ คุณก็อาจจะเพิกเฉยได้',
    },
    {
      question: 'ฉันสามารถชำระค่าสมัครสมาชิกผ่านใบสั่งซื้อได้หรือไม่?',
      answer: 'เรายินดีรับเงินของคุณในทุกรูปแบบอย่างแน่นอน.',
    },
    {
      question: 'ฉันจะสมัครงานที่ คาร์ทูออโต้บาย ได้อย่างไร?',
      answer:
        'คาร์ทูออโต้บาย จ้างลูกค้าของเราเท่านั้น ดังนั้นสมัครสมาชิกอย่างน้อย 6 เดือนแล้วค่อยคุยกัน',
    },
  ],
  [
    {
      question: 'ข้อความรับรองเกี่ยวกับการฉ้อโกงภาษีเกี่ยวกับอะไร?',
      answer:
        'คาร์ทูออโต้บาย เป็นเพียงแอปพลิเคชันซอฟต์แวร์ ท้ายที่สุดแล้วหนังสือของคุณจะเป็นความรับผิดชอบของคุณ',
    },
    {
      question:
        'คาร์ทูออโต้บาย ฟังดูน่ากลัว แต่ทำไมฉันยังรู้สึกว่าจำเป็นต้องซื้อ?',
      answer:
        'นี่คือพลังของ คาร์ทูออโต้บาย การออกแบบภาพที่ยอดเยี่ยม คุณไม่สามารถต้านทานได้ไม่ว่ามันจะทำงานได้ไม่ดีก็ตาม',
    },
    {
      question:
        'ฉันพบบริษัทอื่นที่ชื่อว่า คาร์ทูออโต้บาย คุณแน่ใจหรือว่าสามารถใช้ชื่อนี้ได้?',
      answer:
        'สุจริตไม่แน่ใจเลย คาร์ทูออโต้บาย เราไม่ได้รวมบริษัทหรืออะไรจริง ๆ เราแค่คิดว่ามันฟังดูดีและสร้างเว็บไซต์นี้ขึ้นมา',
    },
  ],
  [
    {
      question: 'คุณจะสร้างรายงานได้อย่างไร?',
      answer:
        'คุณเพียงแค่บอกเราว่าคุณต้องการรายงานข้อมูลใด และเราจะให้เด็กๆ สร้างแผนภูมิที่สวยงามให้คุณโดยใช้เฉพาะดินสอสีที่ดีที่สุดเท่านั้น',
    },
    {
      question: 'เราสามารถคาดหวังคุณสมบัติสินค้าคงคลังเพิ่มเติมได้หรือไม่?',
      answer: 'ในชีวิตมันดีกว่าที่จะไม่คาดหวังอะไรเลย',
    },
    {
      question: 'ฉันทำรหัสผ่านหาย ฉันจะเข้าสู่บัญชีของฉันได้อย่างไร?',
      answer:
        'ส่งอีเมลถึงเรา แล้วเราจะส่งสำเนาสเปรดชีตรหัสผ่านล่าสุดให้คุณ เพื่อให้คุณค้นหาข้อมูลของคุณได้',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt="คำถามที่พบบ่อย"
        width={100}
        height={20}
        layout="responsive"
        unoptimized
      />

      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
          id="faq-title"
          className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          คำถามที่พบบ่อย
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          หากคุณไม่พบสิ่งที่ต้องการ โปรดส่งอีเมลถึงทีมสนับสนุนของเรา และ
          จะมีพนักงาานติดต่อกลับมาหาคุณ
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
      >
        {faqs.map((column, columnIndex) => (
          <li key={columnIndex}>
            <ul role="list" className="flex flex-col gap-y-8">
              {column.map((faq, faqIndex) => (
                <li key={faqIndex}>
                  <h3 className="font-display text-lg leading-7 text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
