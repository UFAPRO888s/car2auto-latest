import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format'

export default function Loan({ car_pricex, car_title }) {
  const [Down, setDown] = useState('')
  const [Interest, setInterest] = useState('')
  const [Period, setPeriod] = useState('')
 // const [Price, setPrice] = useState('')
  const [PriceXvat, setPriceXvat] = useState('')

  function handleDownChange(event) {
    //console.log(event.target.value);
    setDown(event.target.value)
  }
  function handleInterestChange(event) {
    // let bankInterest = '3.5'
    // if (event.target.value == 'เกียรตินาคิน') {
    //   bankInterest = '2.5'
    // } else if (event.target.value == 'ทีทีบี') {
    //   bankInterest = '2.6'
    // } else if (event.target.value == 'ทิสโก้') {
    //   bankInterest = '2.7'
    // } else if (event.target.value == 'กสิกรไทย') {
    //   bankInterest = '2.8'
    // } else if (event.target.value == 'ไทยพาณิชย์') {
    //   bankInterest = '2.9'
    // }
    //console.log(bankInterest);
    setInterest(event.target.value)
  }
  function handlePeriodChange(event) {
    // console.log(event.target.value);
    setPeriod(event.target.value)
    const PriceXDown =
      (parseInt(car_pricex) - parseInt(Down)) * (parseInt(Interest) / 100)
    const intye = PriceXDown * parseInt(event.target.value)
    const PriceXvat = parseInt(intye) + parseInt(car_pricex)
    const PriceXintye = PriceXvat / (parseInt(event.target.value) * 12)
    //const PriceXvatXinx = PriceXvat + Interest - DownBt;
    //console.log(intye)
    setPeriod(PriceXintye.toFixed(2))
    setPriceXvat(PriceXvat)
  }

  return (
    <section className="rounded-md bg-gray-50 p-4">
      <div>
        <h3 className="text-3xl font-bold">คำนวณสินเชื่อ</h3>
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          ราคารถยนต์ {car_title}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">฿</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={car_pricex}
            aria-describedby="price-currency"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="price-currency">
              บาท
            </span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          เงินดาวน์
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">฿</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="เงินดาวน์"
            onChange={handleDownChange}
            aria-describedby="price-currency"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="price-currency">
              บาท
            </span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="phone-number"
          className="block text-sm font-medium text-gray-700"
        >
          ไฟแนนซ์
        </label>
        <div className="relative mt-1 grid grid-cols-2 gap-2 rounded-md shadow-sm">
          {/* <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="finance" className="sr-only">
              ไฟแนนซ์
            </label>
            <select
              id="finance"
              name="finance"
              autoComplete="finance"
              onChange={handleInterestChange}
              className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option>เกียรตินาคิน</option>
              <option>ทีทีบี</option>
              <option>ทิสโก้</option>
              <option>กสิกรไทย</option>
              <option>ไทยพาณิชย์</option>
            </select>
          </div> */}
          <div>
            <label htmlFor="interest" className="text-xs text-gray-500">
              ดอกเบี้ย
            </label>
            <input
              type="number"
              name="interest"
              id="interest"
              onChange={handleInterestChange}
              className="block w-full rounded-md border-gray-300 pl-32 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="อัตราดอกเบี้ย"
            />
          </div>
          <div>
            <label htmlFor="period" className="text-xs text-gray-500">
              จำนวนปี
            </label>
            <input
              type="number"
              name="period"
              id="period"
              onChange={handlePeriodChange}
              className="block w-full rounded-md border-gray-300 pl-32 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="ใส่จำนวนปี"
            />
          </div>
        </div>
      </div>
      <div className="block w-full py-4">
        <div className="text-xs text-gray-500">
          ราคารถยนต์{' '}
          <span className="font-semibold text-gray-800">
            <CurrencyFormat
              value={(parseInt(car_pricex) * 7) / 100 + parseInt(car_pricex)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'฿'}
              renderText={(value) => (
                <p>
                  {value} <span className="text-xs">บาท</span>
                </p>
              )}
            />
          </span>{' '}
          ราคารวมภาษี 7%
        </div>

        <div className="text-end text-lg font-bold text-red-500">
          <span className="text-base text-gray-800">ยอดจัด</span>{' '}
          <CurrencyFormat
            value={
              parseInt(Interest) * parseInt(Period) +
              (parseInt(car_pricex) - parseInt(Down))
            }
            displayType={'text'}
            thousandSeparator={true}
            prefix={'฿'}
            renderText={(value) => (
              <p>
                {value} <span className="text-xs">บาท</span>
              </p>
            )}
          />
        </div>

        <div className="text-end text-3xl font-bold text-red-500">
          <span className="text-base text-gray-800">ยอดผ่อน</span>{' '}
          {/* {((parseInt(car_pricex.replace(/,/g, "")) * 7) / 100 +
            parseInt(car_pricex.replace(/,/g, "")) / 72).toFixed(2)}{" "} */}
          <CurrencyFormat
            // value={(
            //   (parseInt(Interest) * parseInt(Period) + (parseInt(car_pricex) - parseInt(Down)) * 7) / 100 +
            //   parseInt(Interest) * parseInt(Period) + (parseInt(car_pricex) - parseInt(Down)) / (parseInt(Period) * 12)
            // ).toFixed(2)}
            value={PriceXvat}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'฿'}
            renderText={(value) => (
              <p>
                {value} <span className="text-xs">เดือน</span>
              </p>
            )}
          />
        </div>
      </div>
    </section>
  )
}
