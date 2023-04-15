import Image from 'next/image'


export default function Car_Recommendations_grid() {
  return (
    <div className="mx-auto mt-10 w-full">
      <div>
        <div className="text-center">
          
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            ซื้อรถมือสอง
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            แพลตฟอร์ม ซื้อ-ขายรถยนต์มือสองออนไลน์ ที่ดีที่สุด
          </p>
        </div>
        <form className="mt-6 sm:flex sm:items-center" action="#">
          <label htmlFor="car_filter" className="sr-only">
            ค้นหารถยนต์มือสอง
          </label>
          {/* <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            <input
              type="text"
              name="car_filter"
              id="car_filter"
              className="block w-full rounded-md border-gray-300 pr-32 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="ค้นหารถยนต์มือสอง"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
              <label htmlFor="search" className="sr-only">
                ค้นหารถมือสอง
              </label>
              <select
                id="search"
                name="search"
                className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>ค้นหาด้วย ยี่ห้อ</option>
                <option>ค้นหาด้วย ราคา</option>
              </select>
            </div>
          </div> 
          <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              className="block w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              ค้นหา
            </button>
          </div>*/}
        </form>
      </div>
    </div>
  )
}
