import React, { useId, Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { BrandData } from '@/data/brand'
import original from '@/data/OptCars'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MakeAndLogo() {
  const [selectedMake, setSelectedMake] = useState('')
  console.log(selectedMake?.brand)
  return (
    <Listbox value={selectedMake} onChange={setSelectedMake}>
      {({ open }) => (
        <>
          {/* <Listbox.Label id='MakeAndLogo' className="block text-sm font-medium text-gray-700">
            เลือกยี่ห้อ
          </Listbox.Label> */}
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <img
                  src={selectedMake?.imgpath}
                  alt={selectedMake?.brand}
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selectedMake?.brand}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {BrandData.map((BrandXData) => (
                  <Listbox.Option
                    key={BrandXData?.brand}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={BrandXData}
                  >
                    {({ selectedMake, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={BrandXData?.imgpath}
                            alt={BrandXData?.brand}
                            className="h-6 w-6 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selectedMake ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {BrandXData?.brand}
                          </span>
                        </div>

                        {selectedMake ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
