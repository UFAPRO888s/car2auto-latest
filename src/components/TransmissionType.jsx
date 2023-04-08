import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
const TransType = [
  {
    name: 'เกียร์อัตโนมัติ',
    bgColor: 'bg-pink-100/80',
    selectedColor: 'ring-purple-500',
    imgp: '/images/cars-at.png'
  },
  {
    name: 'เกียร์ธรรมดา',
    bgColor: 'bg-pink-100/80',
    selectedColor: 'ring-purple-500',
    imgp: '/images/cars-mt.png'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TransmissionType() {
  const [selectedTransmission, setSelectedTransmission] = useState(TransType[0])
  console.log(selectedTransmission?.name)
  return (
    <RadioGroup value={selectedTransmission} onChange={setSelectedTransmission}>
      <RadioGroup.Label className="block text-sm font-medium text-gray-700">
        ประเภทเกียร์
      </RadioGroup.Label>
      <div className="mt-4 flex items-center space-x-3">
        {TransType.map((Trans) => (
          <RadioGroup.Option
            key={Trans.name}
            value={Trans}
            className={({ active, checked }) =>
              classNames(
                Trans.selectedColor,
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
              )
            }
          >
            <RadioGroup.Label as="span" className="sr-only">
              {Trans.name}
            </RadioGroup.Label>

            <span
              aria-hidden="true"
              className={classNames(
                Trans.bgColor,
                'h-10 w-10 rounded-full border border-black border-opacity-10'
              )}
            >
              <Image
                src={Trans.imgp}
                alt={Trans.name}
                layout="responsive"
                width={100}
                height={100}
                className="object-contain"
              />
            </span>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
