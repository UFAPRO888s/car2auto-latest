import { Fragment, useEffect, useId, useRef, useState } from "react";
import siteMetadata from "@/data/siteMetadata";
import { PageSEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import LoanX from "@/components/LoanX";
import Faqs from "@/components/Faqs";
import { Button } from "@/components/Button";

const faqsX = [
  {
    question: "คาร์ทูออโต้บาย จัดการภาษีมูลค่าเพิ่มหรือไม่?",
    answer:
      "คาร์ทูออโต้บาย ก็ไม่ แต่ถ้าคุณย้ายบริษัทไปต่างประเทศ คุณก็อาจจะเพิกเฉยได้",
  },
  {
    question: "ข้อความรับรองเกี่ยวกับการฉ้อโกงภาษีเกี่ยวกับอะไร?",
    answer:
      "คาร์ทูออโต้บาย เป็นเพียงแอปพลิเคชันซอฟต์แวร์ ท้ายที่สุดแล้วหนังสือของคุณจะเป็นความรับผิดชอบของคุณ",
  },
  {
    question: "คุณจะสร้างรายงานได้อย่างไร?",
    answer:
      "คุณเพียงแค่บอกเราว่าคุณต้องการรายงานข้อมูลใด และเราจะให้เด็กๆ สร้างแผนภูมิที่สวยงามให้คุณโดยใช้เฉพาะดินสอสีที่ดีที่สุดเท่านั้น",
  },
  {
    question: "ฉันจะสมัครงานที่ คาร์ทูออโต้บาย ได้อย่างไร?",
    answer:
      "คาร์ทูออโต้บาย จ้างลูกค้าของเราเท่านั้น ดังนั้นสมัครสมาชิกอย่างน้อย 6 เดือนแล้วค่อยคุยกัน",
  },
  {
    question: "ฉันทำรหัสผ่านหาย ฉันจะเข้าสู่บัญชีของฉันได้อย่างไร?",
    answer:
      "ส่งอีเมลถึงเรา แล้วเราจะส่งสำเนาสเปรดชีตรหัสผ่านล่าสุดให้คุณ เพื่อให้คุณค้นหาข้อมูลของคุณได้",
  },
];

export default function LoanCalc() {
  const [RangeOne, setRangeOne] = useState(0);
  const [RangeDown, setRangeDown] = useState(0);
  const [RangeYear, setRangeYear] = useState(4);

  return (
    <>
      <PageSEO
        title={
          "คำนวณค่างวด รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ " +
          siteMetadata.title +
          " | " +
          siteMetadata.author
        }
        description={
          "คำนวณค่างวด รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ " +
          siteMetadata.description
        }
      />
      <main className="px-2 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 mt-10">
          <div className="h-full w-auto object-cover">
            <Image
              className="object-cover"
              src={"/images/car-silver.webp"}
              alt={"คำนวนสินเชื่อ"}
              width={1000}
              height={500}
            />
          </div>
          <div>
            <div className="leading-9">
              <h1 className="text-3xl md:text-6xl font-light">
                คำนวนสินเชื่อ รถมือสองที่ CAR2AUTOBUY
              </h1>
              <p className="text-lg md:text-6xl font-semibold">
                ดีลสุดคุ้มพร้อมโปรโมชั่น พิเศษ!
              </p>
              <p className="text-base md:text-3xl font-semibold text-slate-500">
                ดอกเบี้ยเริ่มต้นเพียง 2.99% ต่อปี
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 text-center">
          <h2 className="text-3xl font-semibold">การเงิน</h2>
          <p className="text-xs">
            คาดการณ์การผ่อนชำระรายเดือน ด้วยเครื่องคำนวณสินเชื่อรถยนต์ของเรา
            คำนวณค่างวด รถยนต์มือสอง
          </p>
        </div>
        <LoanX />
        <div className="mt-10 text-center">
          <h3 className="text-4xl font-semibold">คำนวณตามงบ</h3>
          <div className="py-4 mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 ">
            <div className="text-center flex flex-col mt-10">
              <div className="h-full w-auto flex justify-center">
                <Image
                  className="object-contain"
                  src={"/images/Car2autobuy-01.png"}
                  alt={"คำนวนสินเชื่อ"}
                  width={300}
                  height={200}
                  priority
                />
              </div>
              <h4 className="text-3xl font-semibold">
                คำนวณงบฯ ที่เหมาะกับคุณ
              </h4>
              <p className="text-base py-4 flex gap-4 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                  />
                </svg>
                ค้นหารถยนต์ที่ตรงกับงบประมาณของคุณ
              </p>
              <div className="py-4">
                <CurrencyFormat
                  value={(parseInt(RangeOne) * (RangeYear * 12)) + parseInt(RangeDown)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"฿"}
                  renderText={(value) => (
                    <p className="text-4xl font-bold">
                      {value} <span className="text-xs">บาท</span>
                    </p>
                  )}
                />
              </div>
              <div>
                <div className="py-4">
                  ค้นหารถยนต์มือสอง<br/>ราคาตั้งแต่ 0 ถึง{" "}
                  <CurrencyFormat
                    value={parseInt(RangeOne) * (RangeYear * 12) + parseInt(RangeDown)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={""}
                    renderText={(value) => <span>{value}</span>}
                  />{" "}
                  บาท
                </div>
                <Button href={"/buycars?min=0&max="+(parseInt(RangeOne) * (RangeYear * 12) + parseInt(RangeDown))} className="rounded-sm">
                  ค้นหารถยนต์มือสอง
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="mt-10">
                <div className="py-4">
                  <CurrencyFormat
                    value={RangeOne}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"฿"}
                    renderText={(value) => (
                      <p className="text-2xl font-bold">
                        ต่อเดือนสามารถส่งค่างวดได้ {value}{" "}
                        <span className="text-xs">บาท</span>
                      </p>
                    )}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  value={RangeOne}
                  onChange={(event) => setRangeOne(event.target.value)}
                  class="range range-xs"
                  step="2000"
                />
                <div className="w-full flex justify-between text-xs px-2">
                  <span>|2,000</span>
                  <span>|22,000</span>
                  <span>|46,000</span>
                  <span>|70,000</span>
                  <span>100,000|</span>
                </div>
              </div>
              <div className="mt-10">
                <div className="py-4">
                  <CurrencyFormat
                    value={RangeDown}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"฿"}
                    renderText={(value) => (
                      <p className="text-2xl font-bold">
                        ยอดเงินดาวน์ {value}{" "}
                        <span className="text-xs">บาท</span>
                      </p>
                    )}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  value={RangeDown}
                  onChange={(event) => setRangeDown(event.target.value)}
                  class="range range-xs"
                  step="2000"
                />
                <div className="w-full flex justify-between text-xs px-2">
                  <span>|2,000</span>
                  <span>|22,000</span>
                  <span>|46,000</span>
                  <span>|70,000</span>
                  <span>100,000|</span>
                </div>
              </div>
              <div className="mt-10">
                <div className="py-4">
                  <CurrencyFormat
                    value={RangeYear}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={""}
                    renderText={(value) => (
                      <p className="text-2xl font-bold">
                        จำนวนปี {value} <span className="text-xs">ปี</span>
                      </p>
                    )}
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={RangeYear}
                  onChange={(event) => setRangeYear(event.target.value)}
                  class="range range-xs"
                  step="1"
                />
                <div className="w-full flex justify-between text-xs px-2">
                  <span>|1</span>
                  <span>|2</span>
                  <span>|3</span>
                  <span>|4</span>
                  <span>|5</span>
                  <span>|6</span>
                  <span>7|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <Faqs faqData={faqsX} />
        </div>
      </main>
      <Footer />
    </>
  );
}
