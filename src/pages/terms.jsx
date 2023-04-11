import { PageSEO } from '@/components/SEO'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import Image from 'next/future/image'
import { Testimonials } from '@/components/Testimonials'
import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/car-silver.webp'
import { Faqs } from '@/components/Faqs'

export default function Terms() {
  return (
    <>
      <PageSEO
        title={
          'ข้อกำหนดและเงื่อนไข รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง car2autobuy'
        }
        description={
          'บริการ รถมือสอง car2autobuy ยอมรับและตกลงผูกพันตามข้อกำหนดและเงื่อนไขในการใช้บริการและการทำธุรกรรมทางอิเล็กทรอนิกส์ในรูปแบบต่าง ๆ'
        }
      />
      <Header />
      <Container>
        <div className="mt-10 overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
          <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
            <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
              <div className="rounded-br-6xl absolute -bottom-12 -top-20 left-0 right-1/2 z-10 bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
                <GridPattern
                  x="100%"
                  y="100%"
                  patternTransform="translate(112 64)"
                />
              </div>
              <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
                <Image className="w-full" src={coverImage} alt="" priority />
              </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
              <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
            </div>
            <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
              <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                <h1 className="text-3xl font-extrabold text-slate-900 md:text-5xl">
                  ข้อกำหนดและเงื่อนไข
                </h1>
                <p className="mt-4 text-base text-slate-600 md:text-lg">
                  ผู้ใช้บริการยอมรับและตกลงผูกพันตามข้อกำหนดและเงื่อนไขในการใช้บริการและการทำธุรกรรมทางอิเล็กทรอนิกส์ในรูปแบบต่าง
                  ๆ กับบริษัท คาร์ทูออโต้บาย (ประเทศไทย) จำกัด ดังต่อไปนี้
                </p>
                {/* <div className="mt-8 flex gap-4">
                  <Button href="#free-chapters" color="blue">
                    Get sample chapter
                  </Button>
                  <Button href="#pricing" variant="outline" color="blue">
                    Buy book
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
          <div>
            <div className="prose max-w-none px-4 py-4">
              <h2 className="text-2xl font-bold">
                เงื่อนไขการใช้บริการ คาร์ทูออโต้บาย
              </h2>
              <p>
                ผู้ใช้บริการยอมรับและตกลงผูกพันตามข้อกำหนดและเงื่อนไขในการใช้บริการและการทำธุรกรรมทางอิเล็กทรอนิกส์ในรูปแบบต่าง
                ๆ กับบริษัท คาร์ทูออโต้บาย (ประเทศไทย) จำกัด ดังต่อไปนี้
              </p>
              <p>
                1. การติดต่อ การให้บริการ
                และการทำธุรกรรมทางอิเล็กทรอนิกส์ด้วยวิธีการใด ๆ เช่น
                การติดต่อสื่อสารผ่านการใช้อีเมลของบริษัทฯ
                การประกาศขายรถยนต์มือสองทางอินเตอร์เน็ต และการเปลี่ยนรหัส Email
                Address เป็นต้น เป็นบริการของบริษัทฯ
                เพื่ออำนวยความสะดวกให้แก่ลูกค้าที่ใช้บริการซื้อขายรถยนต์ของบริษัทฯ
                ซึ่งบริการดังกล่าวอาจมีการเปลี่ยนแปลงได้ตามที่บริษัทฯ เห็นสมควร
              </p>
              <p>
                2. ในการติดต่อ การรับการให้บริการ
                และการทำธุรกรรมทางอิเล็กทรอนิกส์ตามข้อ 1.
                ผู้ใช้บริการจะรับผิดชอบในการเก็บรักษารหัสประจำตัวผู้ใช้ (User
                ID) รหัสผ่าน (Password) และรหัสประจำตัวส่วนบุคคล (Pin Code)
                (ถ้ามี) ของบัญชีของผู้ใช้บริการ รวมถึงรหัส Email Address
                หรือรหัสการติดต่ออื่นใด
                ซึ่งเป็นการระบุตัวตนของผู้ใช้บริการที่ใช้ในการติดต่อ
                การรับการให้บริการ และการทำธุรกรรมทางอิเล็กทรอนิกส์กับบริษัทฯ
                ไว้เป็นความลับ
              </p>
              <p>
                3. การติดต่อ การใช้บริการ และการทำธุรกรรมทางอิเล็กทรอนิกส์ใด ๆ
                ที่กระทำผ่านระบบอิเล็กทรอนิกส์ของบริษัทฯ
                โดยใช้รหัสประจำตัวของผู้ใช้บริการตามข้อ 2.
                ไม่ว่าการกระทำนั้นจะได้กระทำขึ้นโดยผู้ใช้บริการหรือบุคคลอื่นใด
                ผู้ใช้บริการตกลงให้ถือว่าเป็นการกระทำที่ถูกต้องสมบูรณ์ของผู้ใช้บริการ
                โดยผู้ใช้บริการไม่จำต้องลงลายมือชื่อในเอกสารใด ๆ หรือกระทำการใด
                ๆ เพื่อเป็นหลักฐานในการกระทำนั้นอีก และผู้ใช้บริการตกลงว่า
                บริษัทฯ ไม่ต้องรับผิดใด ๆ
                ในความเสียหายที่เกิดขึ้นจากการกระทำดังกล่าว
                เว้นแต่ความเสียหายดังกล่าวจะเกิดขึ้นจากการกระทำโดยทุจริตหรือความประมาทเลินเล่ออย่างร้ายแรงของบริษัทฯ
              </p>
              <p>
                4. ผู้ใช้บริการรับทราบและเข้าใจถึงหลักเกณฑ์ ข้อกำหนด
                และเงื่อนไขในการทำธุรกรรมทางอิเล็กทรอนิกส์
                และยอมรับความเสี่ยงที่อาจเกิดขึ้นจากการทำธุรกรรมดังกล่าว เช่น
                การสูญหายของข้อมูลระหว่างทาง
                การส่งข้อมูลเป็นไปอย่างล่าช้าอันเนื่องมาจากเครือข่ายการสื่อสาร
                การไม่สามารถส่งข้อมูลได้
                รวมถึงการผิดพลาดคลาดเคลื่อนของข้อมูลที่ได้รับ เป็นต้น ทั้งนี้
                บริษัทฯ ไม่ต้องรับผิดชอบต่อความสูญเสียและ/หรือ ความเสียหายใด ๆ
                ที่ลูกค้าได้รับจากการทำธุรกรรมดังกล่าว หากความสูญเสียและ/หรือ
                ความเสียหายดังกล่าวมิได้มีเหตุมาจากการกระทำโดยทุจริตหรือความประมาทเลินเล่ออย่างร้อยแรงของบริษัทฯ
              </p>
              <div>
                5. ข้อจำกัดความรับผิดชอบ
                <ul>
                  <li>
                    5.1. เนื้อหา –
                    บริษัทฯไม่รับรองว่าเนื้อหาในเว็บไซต์ของบริษัทฯ
                    จะมีความถูกต้อง สมบูรณ์เพียงพอ และทันสมัยอยู่ตลอดเวลา
                    แม้บริษัทฯ
                    จะทำการตรวจทานเนื้อหาดังกล่าวและความสอดคล้องของเนื้อหาอยู่เป็นประจำก็ตาม
                    ดังนั้น บริษัทฯ จึงไม่อาจรับผิดชอบ ไม่ว่าโดยตรงหรือโดยอ้อม
                    สำหรับความผิดพลาด และความล่าช้าของข้อมูล
                    ไม่ว่าจะมีผู้ใดได้แจ้งหรือแนะนำบริษัทฯ
                    เกี่ยวกับโอกาสที่จะเกิดปัญหาดังกล่าวก่อนหน้านี้แล้วหรือไม่ก็ตาม
                  </li>
                  <li>
                    5.2. ความเสียหาย - หากเกิดความสูญเสียหรือความเสียหายใด ๆ
                    ขึ้นไม่ว่าโดยทางตรงหรือโดยทางอ้อม
                    หรือเป็นผลสืบเนื่องจากการใช้บริการ เช่น
                    การเขียนและเผยแพร่ข้อความที่ต้องห้าม เป็นต้น บริษัทฯ
                    ไม่ต้องรับผิดชอบในความสูญเสียหรือความเสียหายดังกล่าวต่อผู้ใช้บริการ
                    และ/หรือบุคคลผู้ได้รับความสูญเสียและ/หรือ
                    ความเสียหายดังกล่าว
                    โดยผู้ใช้บริการจะต้องรับผิดชอบในความสูญเสียและความเสียหายที่เกิดขึ้นนั้นแต่เพียงผู้เดียว
                    ทั้งนี้ ผู้ใช้บริการตกลงสละสิทธิ์เรียกร้องให้บริษัทฯ
                    รับผิดชอบในความสูญเสียและ/หรือ ความเสียหายใด ๆ
                    ที่เกิดขึ้นจากการใช้บริการนี้ทั้งสิ้น
                    เว้นแต่ความสูญเสียและ/หรือ
                    ความเสียหายดังกล่าวจะเกิดขึ้นจากการกระทำโดยทุจริตหรือความประมาทเลินเล่ออย่างร้ายแรงของบริษัทฯ
                    นอกจากนี้ ผู้ใช้บริการจะปกป้องมิให้บริษัทฯ
                    ต้องรับผิดชอบหรือถูกฟ้องร้องจากบุคคลอื่นอันเนื่องมาจากการใช้บริการ
                    เว้นแต่จะเข้าข้อยกเว้นดังกล่าว
                  </li>
                  <li>
                    5.3. ระบบบริการ - ผู้ใช้บริการรับทราบและตกลงอย่างชัดแจ้งว่า
                    บริษัทฯ ไม่รับรองว่า
                    การเปิดเข้าสู่หรือการใช้เว็บไซต์ทั้งส่วนหนึ่งส่วนใดหรือทั้งหมดจะสามารถกระทำได้ตลอดเวลา
                    รวดเร็วทันใจ ปราศจากการรบกวนหรือข้อผิดพลาด
                    และไม่รับรองว่าเว็บไซต์จะปราศจากไวรัส ระเบิดเวลา
                    หรือสิ่งอื่นใดที่สามารถก่อให้เกิดความเสียหายต่อคอมพิวเตอร์หรืออุปกรณ์อื่นใดของผู้ใช้บริการที่ใช้ในการเข้าสู่เว็บไซต์
                  </li>
                  <li>
                    5.4. การรับรอง - บริษัทฯ
                    ไม่รับรองว่าบริการและเนื้อหาที่เผยแพร่ผ่านบริการจะ
                    <p>
                      5.4.1. ถูกต้องสมบูรณ์ ไม่บกพร่อง
                      หรือสมตามความประสงค์ของผู้ใช้บริการ
                      ไม่ว่าจะเป็นในด้านเทคนิคหรือด้านใดๆ ก็ตาม
                    </p>
                    <p>
                      5.4.2. มีความเหมาะสม (ไม่ว่าจะในด้านใดๆ ก็ตาม)
                      สำหรับผู้ใช้บริการและบุคคลทั่วไป
                    </p>
                  </li>
                  <li>
                    5.4.3. ไม่ละเมิดสิทธิใด ๆ
                    โดยผู้ใช้บริการจะต้องรับความเสี่ยงจากคุณภาพและผลจากการใช้บริการเองทั้งสิ้น
                    หากการบริการก่อให้เกิดความเสียหายแก่ผู้ใช้บริการหรือบุคคลใด
                    ๆ ก็ตาม บริษัทฯ ไม่มีหน้าที่ต้องรับผิดชอบทั้งสิ้น
                    เว้นแต่ความเสียหายดังกล่าวจะเกิดขึ้นจากการกระทำโดยทุจริตหรือความประมาทเลินเล่ออย่างร้ายแรงของบริษัทฯ
                  </li>
                </ul>
              </div>
              <p>
                6. บริษัทฯ เป็นเจ้าของลิขสิทธิ์ในบรรดาข้อความ ภาพ เสียง เนื้อหา
                ส่วนประกอบใด ๆ ทั้งหมดของบริการ
                รวมถึงแต่ไม่จำกัดเพียงเครื่องหมายทางการค้า เครื่องหมายบริการ
                ชื่อ ชื่อทางการค้า สิทธิบัตร โนว์ฮาว (Know-how)
                และทรัพย์สินทางปัญญาอื่นใดของบริการ ที่ปรากฏในทุก ๆ
                หน้าของเว็บไซต์ ห้ามมิให้ผู้ใดหรือบริษัทฯ ใด ทำซ้ำ ดัดแปลง
                จัดเก็บในระบบที่สามารถนำมาใช้งานได้ ถ่ายโอน ลอกเลียนแบบ เผยแพร่
                หรือ ใช้ข้อมูลส่วนใดส่วนหนึ่งของข้อมูลดังกล่าว
                โดยมิได้รับความยินยอมเป็นลายลักษณ์อักษรจากบริษัทฯ ทั้งนี้
                บริษัทฯ
                ขอสงวนสิทธิ์ที่จะดำเนินการตามกฎหมายกับผู้ละเมิดสิทธิดังกล่าวโดยทันที
              </p>
              <p>
                7. บริษัทฯ
                สงวนสิทธิ์ในการพิจารณาแก้ไขเปลี่ยนแปลงข้อกำหนดและเงื่อนไขในการใช้บริการนี้เมื่อใดและอย่างใดก็ได้ตามความเหมาะสม
                และให้ถือว่าผู้ใช้บริการที่ยังคงใช้บริการต่อไปตกลงยอมรับที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขที่แก้ไขเปลี่ยนแปลงนั้นโดยปริยาย
              </p>
              <p>
                8. บริษัทฯ สงวนสิทธิ์ในการเปลี่ยนแปลง ปรับปรุง แก้ไข
                และระงับบริการไว้ชั่วคราวหรือถาวรได้ตลอดเวลา
                โดยไม่ต้องบอกกล่าวให้ทราบล่วงหน้า
                และไม่ต้องรับผิดชอบในความสูญหายหรือเสียหายใด ๆ
                ที่เกิดขึ้นจากการกระทำดังกล่าวทั้งสิ้น
              </p>
              <p>
                9.
                ข้อกำหนดและเงื่อนไขในการทำธุรกรรมทางอิเล็กทรอนิกส์นี้ให้ใช้บังคับและตีความตามกฎหมายไทย
              </p>
              <p>
                10. ผู้ใช้บริการอนุญาตให้บริษัทฯ
                เชื่อมโยงและนำข้อมูลที่ผู้ใช้บริการเป็นเจ้าของและปรากฏในเว็บไซต์ใด
                ๆ เช่น บรรดาข้อความ ภาพ เสียง เนื้อหา หรือ ส่วนประกอบใด ๆ
                มาปรากฎในเว็บไซต์ของบริษัทฯ
                โดยไม่จำต้องแจ้งความประสงค์ให้ทางเว็บไซต์ต้นทางทราบถึงหรือให้ความยินยอมแก่การกระทำนี้ล่วงหน้า
                และบริษัทฯ จะไม่รับผิดชอบต่อความเสียหายใด ๆ
                อันเกิดจากการกระทำดังกล่าว อย่างไรก็ตาม
                ผู้ใช้บริการยังคงมีสิทธิโดยชอบธรรมต่อข้อมูลดังกล่าวที่ผู้ใช้บริการเป็นเจ้าของ
                ทั้งนี้ หากผู้ใช้บริการไม่ต้องการให้บริษัทฯ
                เชื่อมโยงและนำข้อมูลดังกล่าวมาปรากฏในเว็บไซต์ของบริษัทฯ
                ผู้ใช้บริการจะแจ้งให้บริษัทฯ ทราบเป็นลายลักษณ์อักษร
                โดยทางบริษัทฯ มีสิทธิที่จะพิจารณาเรื่องดังกล่าวตามความเหมาะสม
              </p>
              <p>
                11. ข้อกำหนดและเงื่อนไขในการลงทะเบียนขายรถยนต์
                ในการลงทะเบียนขายรถยนต์
                ผู้ใช้บริการตกลงที่จะให้ข้อมูลที่เป็นความจริงและถูกต้องเกี่ยวกับข้อมูลของผู้ขายและข้อมูลของรถยนต์
              </p>
              <p>
                ผู้ขายยินยอมให้ทางบริษัทฯ เปิดเผยข้อมูลของผู้ขาย
                และข้อมูลของรถยนต์ให้กับผู้ซื้อที่ทางบริษัทฯ จัดหามาให้
                ในการลงทะเบียนขายรถยนต์
                ผู้ขายอนุญาตให้ทางบริษัทดำเนินการจัดการหาผู้ซื้อภายใน 24 ชั่วโมง
                โดยจะไม่ทำการดำเนินการขายใด ๆ จนครบระยะเวลาที่ทางบริษัทกำหนด
                ผู้ขายจะไม่เพิ่มราคาขายรถยนต์ภายหลังจากที่ได้ตกลงราคาดังกล่าวไว้กับผู้ซื้อที่ทางบริษัทได้จัดหามาให้เรียบร้อยแล้ว
                แต่ผู้ซื้อยังคงสามารถที่จะต่อรองราคาขาย และยกเลิกการซื้อขายได้
                บริษัทขอสงวนสิทธิ์ในการปฏิเสธการลงทะเบียนขายรถยนต์ที่ไม่มีสมุดทะเบียนที่ออกโดยกรมการขนส่งทางบก
                รวมทั้งรถยนต์จดประกอบ รถอินวอยส์ รถสรรพสามิต
                (ที่ไม่มีหนังสือรับรอง)
                รวมไปถึงรถยนต์ที่นำเข้ามาอย่างไม่ถูกต้องตามกฎหมาย เอกสารไม่ครบ
                หรือรถหลุดจำนำที่ไม่มีสมุดทะเบียนที่ออกโดยกรมการขนส่งทางบก
                หากบริษัทฯ
                พบหรือมีเหตุอันควรเชื่อว่าผู้ใช้บริการฝ่าฝืนข้อกำหนดและเงื่อนไขต่าง
                ๆ ข้อใดข้อหนึ่ง บริษัทขอสงวนสิทธิ์ในการลบประกาศ
                ระงับการแสดงประกาศ หรือแก้ไขเปลี่ยนแปลงประกาศ
                ซึ่งถือเป็นสิทธิ์ขาดและขึ้นอยู่กับดุลพินิจของบริษัท
                โดยไม่ต้องบอกกล่าวให้ผู้ขายทราบล่วงหน้า
                ข้อกำหนดและเงื่อนไขฉบับนี้ บริษัทขอสงวนสิทธิ์ในการยกเลิก
                หรือเปลี่ยนแปลงรายละเอียดโดยมิต้องแจ้งให้ทราบล่วงหน้า
                การเปลี่ยนแปลง หรือเพิ่มเติม ข้อกำหนดและเงื่อนไขใด ๆ
                ให้ถือเป็นส่วนหนึ่งของข้อกำหนดและเงื่อนไขนี้
                และมีผลบังคับโดยทันที
                การที่ผู้ขายยินยอมลงทะเบียนขายรถยนต์กับทางบริษัท
                หรือการใช้บริการในเว็บไซต์ และ/หรือ แอปพลิเคชันของบริษัท
                ให้ถือว่าบุคคลดังกล่าวให้ความตกลงยินยอมโดยสมบูรณ์ที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขนี้
                รวมถึงข้อกำหนดและเงื่อนไขที่ได้มีการเปลี่ยนแปลงหรือเพิ่มเติมนั้น
              </p>
              <div>
                12. นโยบายความเป็นส่วนตัว
                บริษัทจะดำเนินการตามวิธีการที่เหมาะสมหลังจากที่ได้รับข้อมูลจากลูกค้า
                (ข้อมูลลูกค้า เช่น ชื่อ-นามสกุล ,เบอร์โทร ,ข้อมูลรถ ฯลฯ )
                บริษัทจะไม่ใช้ข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์อื่นๆ
                นอกเหนือจากที่ลูกค้าได้ตกลงยอมรับไว้ก่อนหน้า
                (ไม่รวมถึงตามกฎหมายกำหนด)
                อาจมีการบันทึกบทสนทนาทางโทรศัพท์ของบริษัทเพื่อยืนยันเนื้อหาของบทสนทนา
                การจัดการข้อมูลส่วนบุคคล
                บริษัทจะจัดการข้อมูลส่วนบุคคลของลูกค้าอย่างเหมาะสมและมุ่งมั่นเพื่อป้องกันข้อมูลไม่ให้รั่วไหลสู่ภายนอก
                นอกจากนี้
                ทางบริษัทยังมีมาตรการในการรักษาข้อมูลอย่างเหมาะสมและปลอดภัยเพื่อป้องกันการสูญหาย
                การทำลายและการเปลี่ยนแปลงแก้ไขสำหรับการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต
                ในกรณีที่บริษัทต้องใช้บุคลากรจากภายนอก
                บริษัทจะดำเนินการและให้คำแนะนำบุคคลภายนอกดังกล่าวนั้นตามความเหมาะสม
                เพื่อให้แน่ใจว่าข้อมูลของลูกค้ามีการส่งผ่านในสัญญาหรือวิธีการอื่นโดยเหมาะสม
                การใช้ข้อมูลส่วนบุคคล
                บริษัทจะใช้ข้อมูลที่รวบรวมเกี่ยวกับลูกค้าเพื่อวัตถุประสงค์ดังต่อไปนี้:
                <ul>
                  <li>
                    12.1. เพื่อให้ข้อมูลเกี่ยวกับการซื้อขายและแคมเปญต่างๆ
                    กับลูกค้าทางออนไลน์
                  </li>
                  <li>12.2. เพื่อยืนยันการซื้อขายผลิตภัณฑ์ </li>
                  <li>
                    12.3.
                    เพื่อสอบถามลูกค้าให้ตอบคำถามต่อผลิตภัณฑ์และบริการของบริษัท{' '}
                  </li>
                  <li>
                    12.4.
                    เพื่อขอความเห็นของลูกค้าในการปรับปรุงผลิตภัณฑ์และบริการของบริษัท
                  </li>
                  <li>
                    12.5.
                    เพื่อให้ลูกค้ามีข้อมูลที่ถูกต้องเกี่ยวกับบริการพิเศษและผลิตภัณฑ์ใหม่ๆ
                  </li>
                  <li>
                    12.6. เพื่อตอบคำถามจากลูกค้า
                    บริษัทจะทำการดูแลที่เหมาะสมเมื่อมีการใช้ข้อมูลของลูกค้าที่มีการรวบรวมไว้เพื่อปกป้องสิทธิของลูกค้า
                    นอกจากนี้
                  </li>
                </ul>
                บริษัทจะไม่ใช้ข้อมูลของลูกค้าเพื่อวัตถุประสงค์อื่นนอกเหนือจากที่ระบุไว้ข้างต้นโดยไม่ได้รับอนุญาตของลูกค้า
                (ยกเว้นกรณีที่ลูกค้าให้ความยินยอมล่วงหน้าหรือตามกฎหมายกำหนด)
              </div>
              <p>
                13. การแบ่งปันข้อมูลส่วนบุคคล เพื่อตอบสนองความต้องการของลูกค้า
                บริษัทอาจจะแบ่งปันข้อมูลของลูกค้าให้กับกลุ่มบริษัทภายในขอบเขตที่มีความจำเป็น
                บริษัทจะรับผิดชอบการจัดการข้อมูลส่วนบุคคดังกล่าวสำหรับกรณีนี้
              </p>
              <p>
                14. การใช้คุกกี้ คุกกี้จะมีการใช้บนบางหน้าของเว็บไซต์นี้
                คุกกี้เป็นเทคโนโลยีสำหรับการสื่อสารระหว่างเซิร์ฟเวอร์ของเว็บไซต์และเบราว์เซอร์
                ผ่านคุกกี้ จะสามารถระบุเบราว์เซอร์ที่ลูกค้าใช้ได้
                แต่จะไม่ระบุถึงข้อมูลส่วนบุคคลของลูกค้าด้วยคุกกี้
                จะมีการบันทึกประวัติการเข้าชมของเว็บไซต์ของบริษัทโดยผู้ใช้
                ทำให้การใช้อินเตอร์เน็ตเป็นประโยชน์มากขึ้น
                มีการใช้งานคุกกี้อย่างแพร่หลายโดยถือเป็นเทคโนโลยีมาตรฐานของอินเตอร์เน็ต
                และมีการใช้งานในหลายๆ เว็บไซต์สำหรับปรับปรุงความสะดวกของลูกค้า
                แสดงโฆษณาไปยังลูกค้าและรวบรวมสถิติเมื่อมีการใช้บริการจากหุ้นส่วนของบริษัท
                ข้อมูลที่ได้รับจากการใช้งานคุกกี้จะถูกรายงานเป็นผลรวมไปยังบริษัทและหุ้นส่วนธุรกิจ
                รายงานรวมถึงข้อมูลการเข้าดูของลูกค้า และจากข้อมูลนี้
                อาจมีการส่งโฆษณาของบริษัทให้กับเว็บไซต์อื่นๆ ที่ลูกค้าเข้าดู
                โดยการเปลี่ยนการตั้งค่าคุกกี้ด้วยตัวเอง
                ลูกค้าสามารถบล็อกคุกกี้ได้ ทั้งนี้ หากมีการบล็อคคุกกี้
                ผู้ใช้อาจไม่สามารถใช้บริการบางอย่างในเว็บไซต์นั้นได้ นอกจากนี้
                ขึ้นอยู่กับการใช้สภาพแวดล้อมในการใช้งานของลูกค้า
                (การตั้งค่าเบราว์เซอร์ การเชื่อมต่ออินเตอร์เน็ต)
                อาจจะไม่สามารถบล็อคคุกกี้ได้ในบางกรณี
              </p>
              <p>
                15. กรณีที่ลูกค้าลงข้อมูลรถเพื่อขายรถแบบด่วนบนเว็บไซต์คาร์ทูออโต้บาย
                และไม่สามารถจบการขายได้ภายใน 30 วัน
                นับตั้งแต่วันที่ลงข้อมูลรถครั้งแรก
                ข้อมูลรถของคุณจะขึ้นไปอยู่ในหน้าประกาศขายรถของ คาร์ทูออโต้บาย
                ตลาดรถ โดยอัตโนมัติทันที ซึ่งในระหว่าง 30
                วันก่อนการประกาศขายในหน้า คาร์ทูออโต้บาย ตลาดรถ
                คุณสามารถเข้าไปแก้ไขข้อมูลรถได้
                และหลังจากข้อมูลรถได้ลงประกาศขายในหน้า คาร์ทูออโต้บาย ตลาดรถ
                คุณจะสามารถเข้าไปแก้ไข หรือลบข้อมูลรถได้
                โดยเข้าสู่ระบบด้วยเบอร์โทรศัพท์ที่ลงทะเบียนเท่านั้น
              </p>
              <p>
                16. กรณีที่ลูกค้าทั่วไปลงข้อมูลรถเพื่อขายรถเป็นครั้งแรก
                และยินยอมให้ข้อมูลรถของลูกค้าขายผ่านช่องทาง CAR2AUTOBUY Express
                และ CAR2AUTOBUY SellCar บนเว็บไซต์คาร์ทูออโต้บายทันที ในช่วง 5 วันแรก
                ชื่อ-นามสกุล และเบอร์ติดต่อ จะเป็นชื่อในนามบริษัท CAR2AUTOBUY
                เพื่อให้ CAR2AUTOBUY ช่วยขายรถของคุณให้จบแบบด่วนที่สุด
                แต่ถ้าทางคาร์ทูออโต้บายไม่สามารถจบการขายได้ภายใน 5 วัน ชื่อ-นามสกุล
                และเบอร์ติดต่อ จะเปลี่ยนเป็นชื่อลูกค้าโดยอัตโนมัติ
                และคุณจะสามารถเข้าไปแก้ไข หรือลบข้อมูลรถได้
                โดยเข้าสู่ระบบด้วยเบอร์โทรศัพท์ที่ลงทะเบียนเท่านั้น
              </p>
            </div>
          </div>
        </div>
        <Faqs />
      </Container>
      <Footer />
    </>
  )
}
