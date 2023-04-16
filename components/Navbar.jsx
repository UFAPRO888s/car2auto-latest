import { Fragment, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Ilogo from "@/images/logos/Car2autobuy-Preview-01.svg";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "./Button";

const solutions = [
  {
    name: "รถเล็ก ประหยัดน้ำมัน",
    description:
      "แรงจริงประหยัดจริง ด้วยเครื่องยนต์ 1.0 ลิตร เทอร์โบ ทั้งแรงและประหยัด",
    href: "#",
    icon: "/images/menunav/nav-eco.png",
  },
  {
    name: "รถ SUV คุ้มค่า",
    description:
      "ยนตรกรรมระดับพรีเมี่ยมในราคาที่เอื้อมถึง เมื่อสมรรถนะและความปลอดภัยคือสิ่งสำคัญ",
    href: "#",
    icon: "/images/menunav/nav-eco.png",
  },
  {
    name: "รถเก๋ง รุ่นหลากหลาย",
    description:
      "รถมือสองปีนี้มีรุ่นไหนน่าซื้อบ้าง ขายต่อราคาไม่ตก งบน้อยก็ซื้อได้ หลายยี่ห้อดัง",
    href: "#",
    icon: "/images/menunav/nav-eco.png",
  },
  {
    name: "รถกระบะ สายลุย",
    description:
      "รถกระบะออฟโรดสมรรถนะสูง อัดแน่นไปด้วยดีเอ็นเอของฟอร์ด เพอร์ฟอร์แมนซ์",
    href: "#",
    icon: "/images/menunav/nav-eco.png",
  },
];
const callsToAction = [
  { name: "car2autobuy", href: "#", icon: "/images/img/linex.png" },
  { name: "car2autobuy", href: "#", icon: "/images/img/fb.png" },
  { name: "car2autobuy", href: "#", icon: "/images/img/youtube.png" },
];
const company = [
  { name: "เกี่ยวกับเรา", href: "#", icon: InformationCircleIcon },
  { name: "รถมือสองของเรา", href: "#", icon: BuildingOfficeIcon },
  { name: "การรับประกันคุณภาพ", href: "#", icon: NewspaperIcon },
  { name: "ปรับสภาและซ่อมบำรุง", href: "#", icon: BriefcaseIcon },
  { name: "เงื่อนไขการใช้บริการ", href: "/terms", icon: ShieldCheckIcon },
];
const resources = [
  { name: "ข้อมูลน่ารู้", href: "#", icon: UserGroupIcon },
  { name: "รีวิว", href: "#", icon: GlobeAltIcon },
  { name: "เปรียบเทียบ", href: "#", icon: BookmarkSquareIcon },
  { name: "ข่าวสาร", href: "#", icon: ComputerDesktopIcon },
];



const blogPosts = [
  {
    id: 1,
    name: "ประสบการณ์ความเร็ว แรง BMW",
    href: "/car-story?cat=ข้อมูลน่ารู้",
    preview:
      "สนุกกับประสบการณ์ความเร็ว แรง และคล่องตัวกับการขับรถในเมืองใน BMW ซีรีส์ 1",
    imageUrl: "/images/img/สนุกกับBMW.png",
  },
  {
    id: 2,
    name: "All-New Isuzu D-Max 2023",
    href: "/car-recommend?recom=รีวิว",
    preview:
      "รประสบความสำเร็จอย่างงดงามของรุ่นดีแมคซ์ (D-Max) เจเนอเรชันที่ 2 ในที่สุด อีซูซุ (Isuzu) ได้เปิดตัวรุ่นออลนิว ดีแมคซ์ (All-New D-Max) เจนเนอเรชั่นที่ 3 ในปี 2019",
    imageUrl: "/images/img/All-NEW-ISUZU-D-MAX.jpg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ children }) => {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const menuItems = [
    {
      id: 1,
      name: "เข้าสู่ระบบ",
      link: "/login",
    },
    {
      id: 2,
      name: "สมัครสมาชิก",
      link: "/signup",
    },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   if (user.email) {
  //     console.log(user);
  //   }
  // }, []);

  return (
    <>
      <Popover className="relative bg-white shadow-lg sticky top-0 z-50">
        <div
          className="pointer-events-none absolute inset-0 z-30 shadow"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex mr-auto md:w-68 flex-shrink-0">
              <Link href="/" aria-label="Home">
                <Image
                  className="h-10 w-auto"
                  src={Ilogo}
                  alt="Car2autobuy"
                  width={100}
                  height={50}
                  priority
                />
              </Link>
              <div className="hidden xl:flex items-center">
                <small className="ml-3 font-semibold text-xs">
                  ซื้อขายรถมือสอง
                </small>
              </div>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 "
                        )}
                      >
                        <Link href={'/buycars'}>ซื้อรถ</Link>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                          <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                            {solutions.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                              >
                                <div className="flex md:h-full lg:flex-col">
                                  <div className="flex-shrink-0">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#EBD25F] text-white sm:h-12 sm:w-12">
                                      <Image
                                        className="h-10 w-10"
                                        src={item.icon}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        priority
                                      />
                                    </span>
                                  </div>
                                  <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                    <div>
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                      คลิก
                                      <span aria-hidden="true"> &rarr;</span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="bg-gray-50">
                            <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <Link
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                  >
                                    <Image
                                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                                      src={item.icon}
                                      alt={item.name}
                                      width={100}
                                      height={100}
                                      priority
                                    />
                                    <span className="ml-3 text-xs">
                                      {item.name}
                                    </span>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Link
                  href="/salecar"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  ขายรถ
                </Link>
                <Link
                  href="/loancalculator"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  สินเชื่อ
                </Link>
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 "
                        )}
                      >
                        <span>โปรโมชั่น</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                          <div className="absolute inset-0 flex">
                            <div className="w-1/2 bg-white" />
                            <div className="w-1/2 bg-gray-50" />
                          </div>
                          <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                            <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                              <div>
                                <h3 className="text-base font-medium text-gray-500">
                                  CAR2AUTOBUY
                                </h3>
                                <ul role="list" className="mt-5 space-y-6">
                                  {company.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                      >
                                        <item.icon
                                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                                          aria-hidden="true"
                                        />
                                        <span className="ml-4">
                                          {item.name}
                                        </span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-base font-medium text-gray-500">
                                  บทความ
                                </h3>
                                <ul role="list" className="mt-5 space-y-6">
                                  {resources.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <Link
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                      >
                                        <item.icon
                                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                                          aria-hidden="true"
                                        />
                                        <span className="ml-4">
                                          {item.name}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </nav>
                            <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                              <div>
                                <h3 className="text-base font-medium text-gray-500">
                                  ข่าวล่าสุด
                                </h3>
                                <ul role="list" className="mt-6 space-y-6">
                                  {blogPosts.map((post) => (
                                    <li key={post.id} className="flow-root">
                                      <Link
                                        href={post.href}
                                        className="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
                                      >
                                        <div className="hidden flex-shrink-0 sm:block">
                                          <Image
                                            className="h-20 w-32 rounded-md object-cover"
                                            src={post.imageUrl}
                                            alt={post.name}
                                            width={100}
                                            height={100}
                                            priority
                                          />
                                        </div>
                                        <div className="w-0 flex-1 sm:ml-8">
                                          <h4 className="truncate text-base font-medium text-gray-900">
                                            {post.name}
                                          </h4>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {post.preview}
                                          </p>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6 text-sm font-medium">
                                <Link
                                  href="#"
                                  className="text-indigo-600 hover:text-indigo-500"
                                >
                                  อ่านข่าวทั้งหมด
                                  <span aria-hidden="true"> &rarr;</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="flex items-center md:ml-12">
                <ul className="text-base ml-4 flex items-center justify-end">
                  <>
                    {!user.uid ? (
                      menuItems.map((item) => (
                        <li key={item.id} className="flex items-center mr-2 ">
                          <Button
                            href={item?.link}
                            //className="text-blue-800 hover:text-blue-900 transition px-4 py-2 bg-green-500 shadow-md rounded-md"
                            className="text-base font-medium text-gray-500 bg-[#0E2E63] hover:text-gray-900 rounded-md"
                          >
                            {item?.name}
                          </Button>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="my-3 md:my-0 items-center mr-4 md:flex">
                          <Link
                            href="/dashboard"
                            className="flex items-center mr-2 text-blue-800 hover:text-blue-900 transition"
                          >
                            <svg
                              className="hidden xl:flex h-9 lg:h-10 p-2 text-gray-500"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="user"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                className="svg-inline--fa fa-user fa-w-14 fa-9x"
                                fill="currentColor"
                                d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                              ></path>
                            </svg>{" "}
                            หน้าสมาชิก
                          </Link>
                        </li>
                        <li className="my-3 md:my-0 items-center mr-4 md:inline-block block ">
                          <div
                            onClick={handleLogout}
                            className="flex items-center mr-2 text-blue-800 hover:text-blue-900 transition cursor-pointer"
                          >
                            <svg
                              className="hidden xl:flex h-9 lg:h-10 p-2 text-gray-500"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="heart"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                className="svg-inline--fa fa-heart fa-w-16 fa-9x"
                                fill="currentColor"
                                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                              ></path>
                            </svg>{" "}
                            ออกจากระบบ
                          </div>
                        </li>
                      </>
                    )}
                  </>
                </ul>

                {/* <Link
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-0 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg">
              <div className="px-5 pt-5 pb-6 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" aria-label="Home">
                      <Image
                        className="h-10 w-auto"
                        src={Ilogo}
                        alt="Car2autobuy"
                        width={100}
                        height={50}
                        priority
                      />
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#EBD25F] text-white sm:h-12 sm:w-12">
                            <Image
                              className="h-10 w-10"
                              src={item.icon}
                              alt={item.name}
                              width={100}
                              height={100}
                              priority
                            />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-8 text-base">
                      <Link
                        href="/buycars"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        ดูรถทั้งหมด
                        <span aria-hidden="true"> &rarr;</span>
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="py-2 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/salecar"
                    className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    ขายรถ
                  </Link>
                  <Link
                    href="/loancalculator"
                    className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    สินเชื่อ
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    เกี่ยวกับเรา
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    โปรโมชั่น
                  </Link>
                  {/* <Link
                    href="#"
                    className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact Sales
                  </Link> */}
                </div>
                <div className="mt-6">
                  <ul className="text-base ml-4 flex items-center justify-end">
                    <>
                      {!user.uid ? (
                        menuItems.map((item) => (
                          <li key={item.id} className="flex items-center mr-2 ">
                            <Button
                              href={item?.link}
                              //className="text-blue-800 hover:text-blue-900 transition px-4 py-2 bg-green-500 shadow-md rounded-md"
                              className="text-base font-medium text-gray-500 bg-[#0E2E63] hover:text-gray-900 rounded-md"
                            >
                              {item?.name}
                            </Button>
                          </li>
                        ))
                      ) : (
                        <>
                          <li className="my-3 md:my-0 items-center mr-4 md:flex">
                            <Link
                              href="/dashboard"
                              className="flex items-center mr-2 text-blue-800 hover:text-blue-900 transition"
                            >
                              <svg
                                className="hidden xl:flex h-9 lg:h-10 p-2 text-gray-500"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="user"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  className="svg-inline--fa fa-user fa-w-14 fa-9x"
                                  fill="currentColor"
                                  d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                                ></path>
                              </svg>{" "}
                              หน้าสมาชิก
                            </Link>
                          </li>
                          <li className="my-3 md:my-0 items-center mr-4 md:inline-block block ">
                            <div
                              onClick={handleLogout}
                              className="flex items-center mr-2 text-blue-800 hover:text-blue-900 transition cursor-pointer"
                            >
                              <svg
                                className="hidden xl:flex h-9 lg:h-10 p-2 text-gray-500"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  className="svg-inline--fa fa-heart fa-w-16 fa-9x"
                                  fill="currentColor"
                                  d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                                ></path>
                              </svg>{" "}
                              ออกจากระบบ
                            </div>
                          </li>
                        </>
                      )}
                    </>
                  </ul>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {children}
    </>
  );
};

export default Navbar;
