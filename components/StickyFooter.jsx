import { Fragment, useEffect, useId, useRef, useState } from "react";
import { MegaphoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import Link from "next/link";
export default function StickyFooter() {
  const [open, setClose] = useState(true);

  useEffect(() => {
    const storedcookie = localStorage.getItem("cookie");

    if (storedcookie) {
      const cookieX = JSON.parse(storedcookie);
      //console.log(cookieX.statux)
      if (cookieX.statux === "true") {
        setClose(false);
      } else {
        setClose(true);
      }
    }
  }, []);

  function handleRate() {
    localStorage.setItem("cookie", JSON.stringify({ statux: "true" }));
    setClose(false);
  }
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="bg-slate-600/80 z-50">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                  <span className="flex rounded-lg bg-indigo-800 p-2">
                    <MegaphoneIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="ml-3 truncate font-medium text-white">
                    <span className="md:hidden">เว็บไซต์นี้ใช้คุกกี้RUN</span>
                    <span className="hidden md:inline">
                      ปรับปรุงการใช้บริการออนไลน์ของท่าน
                      โดยเราจะใช้คุกกี้เมื่อท่านเข้ามาหน้าเว็บไซต์
                    </span>
                  </p>
                </div>
                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                  <Link
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                  >
                    อ่านต่อป่ะ
                  </Link>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                  <button
                    type="button"
                    onClick={handleRate}
                    className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  >
                    <span className="sr-only">ปิดประกาศ</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition.Root>
    </>
  );
}
