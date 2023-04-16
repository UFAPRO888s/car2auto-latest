import ProtectedRoute from '../components/ProtectedRoute'
import { useAuth } from '@/context/AuthContext'
import addData from '../firebase/firestore/addData'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  BarsArrowUpIcon,
  CheckBadgeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  StarIcon,
} from '@heroicons/react/20/solid'
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'
import Link from 'next/link'

const projects = [
  {
    name: 'titleประกาศ',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'car2autobuy/userdisplay',
    tech: 'ประเภทรถ',
    lastDeploy: '3h ago',
    location: 'จังหวัด',
    starred: true,
    active: true,
  },
]
const activityItems = [
  {
    project: 'Workcation',
    commit: '2d89f0c8',
    environment: 'production',
    time: '1h',
    text: 'อายุ.เท่าไรแล้วจ๊ะ โตเร็ว.จริงนะหน้ามน ยิ่งโต.ยิ่งสวยน่าสน ถามนิดตอบหน่อยหน้ามน ทำบัตรประชาชนหรือยัง โอ้โฮ โตเร็วจริงๆนะเจ้า เผลอแว๊บเดียว',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DashboardPage = () => {
  const { user } = useAuth()
  const address = useAddress()

  const addWallet = async () => {
    if (!address) return console.log('No wallet connected')
    else {
      const data = {
        email: user.email,
        wallet: address,
      }
      const { result, error } = await addData('wallets', user.uid, data)

      if (error) {
        return console.log(error)
      }
    }
  }

  //console.log(user)
  return (
    <>
      <ProtectedRoute>
        <PageSEO
          title={'Dashboard ' + siteMetadata.title + ' | ' + siteMetadata.author}
          description={'Dashboard ' + siteMetadata.description}
        />
        {/* Background color split screen for large screens */}
        <div className="fixed top-0 left-0 h-full w-1/2 bg-white" aria-hidden="true" />
        <div className="fixed top-0 right-0 h-full w-1/2 bg-gray-50" aria-hidden="true" />
        <div className="relative flex min-h-full flex-col">
          {/* 3 column wrapper */}
          <div className="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
            {/* Left sidebar & main wrapper */}
            <div className="min-w-0 flex-1 bg-white xl:flex">
              {/* Account profile */}
              <div className="bg-white xl:w-64 xl:flex-shrink-0 xl:border-r xl:border-gray-200">
                <div className="py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-8">
                      <div className="space-y-8 sm:flex sm:items-center sm:justify-between sm:space-y-0 xl:block xl:space-y-8">
                        {/* Profile */}
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-12 flex-shrink-0">
                            <Image
                              className="h-12 w-12 rounded-full"
                              src={user?.profilePic}
                              alt={user?.name}
                              width={100}
                              height={100}
                              priority
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                            <a href="#" className="group flex items-center space-x-2.5">
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
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>

                              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                xxxxxxx
                              </span>
                            </a>
                          </div>
                        </div>
                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row xl:flex-col">
                          <Button
                            href="/addnewcar"
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 xl:w-full"
                          >
                            ลงประกาศ ใหม่
                          </Button>
                          <Button
                            type="button"
                            className="mt-3 inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-500 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
                          >
                            BUTTON AV
                          </Button>
                        </div>
                      </div>
                      {/* Meta info */}
                      <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                        <div className="flex items-center space-x-2">
                          <CheckBadgeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="text-sm font-medium text-gray-500">Member</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RectangleStackIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-gray-500">0 รายการ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects List */}
              <div className="bg-white lg:min-w-0 lg:flex-1">
                <div className="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
                  <div className="flex items-center">
                    <h1 className="flex-1 text-lg font-medium">ความเคลื่อนไหว</h1>
                    <Menu as="div" className="relative">
                      <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <BarsArrowUpIcon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        จัดเรียง
                        <ChevronDownIcon
                          className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                ชื่อ
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                แก้ไขล่าสุด
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                สร้างเมื่อ
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Menu>
                  </div>
                </div>
                <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                  {projects.map((project) => (
                    <li
                      key={project.repo}
                      className="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
                    >
                      <div className="flex items-center justify-between space-x-4">
                        {/* Repo name and link */}
                        <div className="min-w-0 space-y-3">
                          <div className="flex items-center space-x-3">
                            <span
                              className={classNames(
                                project.active ? 'bg-green-100' : 'bg-gray-100',
                                'h-4 w-4 rounded-full flex items-center justify-center'
                              )}
                              aria-hidden="true"
                            >
                              <span
                                className={classNames(
                                  project.active ? 'bg-green-400' : 'bg-gray-400',
                                  'h-2 w-2 rounded-full'
                                )}
                              />
                            </span>

                            <h2 className="text-sm font-medium">
                              <Link href={project.href}>
                                <span className="absolute inset-0" aria-hidden="true" />
                                {project.name}{' '}
                                <span className="sr-only">
                                  {project.active ? 'Running' : 'Not running'}
                                </span>
                              </Link>
                            </h2>
                          </div>
                          <Link
                            href={project.repoHref}
                            className="group relative flex items-center space-x-2.5"
                          >
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
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              />
                            </svg>

                            <span className="truncate text-sm font-medium text-gray-500 group-hover:text-gray-900">
                              {project.repo}
                            </span>
                          </Link>
                        </div>
                        <div className="sm:hidden">
                          <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        {/* Repo meta info */}
                        <div className="hidden flex-shrink-0 flex-col items-end space-y-3 sm:flex">
                          <p className="flex items-center space-x-4">
                            <Link
                              href={project.siteHref}
                              className="relative text-sm font-medium text-gray-500 hover:text-gray-900"
                            >
                              ดูประกาศ
                            </Link>
                            <button
                              type="button"
                              className="relative rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              <span className="sr-only">
                                {project.starred ? 'Add to favorites' : 'Remove from favorites'}
                              </span>
                              <StarIcon
                                className={classNames(
                                  project.starred
                                    ? 'text-yellow-300 hover:text-yellow-400'
                                    : 'text-gray-300 hover:text-gray-400',
                                  'h-5 w-5'
                                )}
                                aria-hidden="true"
                              />
                            </button>
                          </p>
                          <p className="flex space-x-2 text-sm text-gray-500">
                            <span>{project.tech}</span>
                            <span aria-hidden="true">&middot;</span>
                            <span>Last deploy {project.lastDeploy}</span>
                            <span aria-hidden="true">&middot;</span>
                            <span>{project.location}</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Activity feed */}
            <div className="bg-gray-50 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
              <div className="pl-6 lg:w-80">
                <div className="pt-6 pb-2">
                  <h2 className="text-sm font-semibold">จากแอดมิน</h2>
                </div>
                <div>
                  <ul role="list" className="divide-y divide-gray-200">
                    {activityItems.map((item) => (
                      <li key={item.commit} className="py-4">
                        <div className="flex space-x-3">
                          <Image
                            className="h-6 w-auto rounded-full"
                            src={'/images/Car2autobuy-01.png'}
                            alt={'ADMIN Car2autobuy'}
                            width={50}
                            height={50}
                            priority
                          />
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">ADMIN</h3>
                              <p className="text-sm text-gray-500">{item.time}</p>
                            </div>
                            <p className="text-sm text-gray-500">
                              Deployed {item.project}
                              <br />
                              {item.text}
                              <br /> ({item.commit} in master) to {item.environment}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* <div className="border-t border-gray-200 py-4 text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-900">
                      View all activity
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </>
  )
}

export default DashboardPage
