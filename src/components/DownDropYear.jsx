import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import Yearvalue from '@/data/year'
import original from '@/data/OptCars'
import car10 from "@/data/car10.json"
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function DownDropYear() {

  
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [selectedMake, setSelectedMake] = useState(null)
  const [Models, setModels] = useState([])
  const [selectedModels_ex, setSelectedModels_ex] = useState('')
  const filteredPeople =
    query === ''
      ? Yearvalue
      : Yearvalue.filter((year) => {
          return year.YearCode.toLowerCase().includes(query.toLowerCase())
        })
  
  
  //console.log(car10[selectedPerson?.YearCode],selectedPerson?.YearCode)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2">
      <div id='selectedPerson'>
        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Label className="mb-3 block text-sm font-medium text-gray-700">
            ปีรถยนต์
          </Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(person) => person?.YearCode}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredPeople.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.map((person, indexs) => (
                  <Combobox.Option
                    key={indexs}
                    value={person}
                    className={({ active }) =>
                      classNames(
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <div className="flex items-center">
                          {/* <img src={person.imageUrl} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                          <span
                            className={classNames(
                              'ml-3 truncate',
                              selected && 'font-semibold'
                            )}
                          >
                            {person.YearCode}
                          </span>
                        </div>

                        {selected && (
                          <span
                            className={classNames(
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                              active ? 'text-white' : 'text-indigo-600'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
      </div>
      {/* <div id='selectedMake'>
        <Combobox as="div" value={selectedMake} onChange={setSelectedMake}>
          <Combobox.Label className="mb-3 block text-sm font-medium text-gray-700">
            ยี่ห้อรถยนต์
          </Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(person) => person?.YearCode}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredMake?.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredMake?.map((Make, indexMake) => (
                  <Combobox.Option
                    key={indexMake}
                    value={Make}
                    className={({ active }) =>
                      classNames(
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <div className="flex items-center">
                        
                          <span
                            className={classNames(
                              'ml-3 truncate',
                              selected && 'font-semibold'
                            )}
                          >
                            {Make}
                          </span>
                        </div>

                        {selected && (
                          <span
                            className={classNames(
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                              active ? 'text-white' : 'text-indigo-600'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
      </div> */}
    </div>
  )
}
