import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useUser } from '@/lib/firebase/useUser'
import { Container } from './Container'
import { db } from '@/lib/firebase/initFirebase'
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  Timestamp,
  getDoc,
  GeoPoint,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { setUserCookie, getUserFromCookie } from '@/lib/firebase/userCookies'


const stats = [
  {
    id: 1,
    name: 'รายการประกาศทั้งหมด',
    stat: '0',
    icon: EnvelopeOpenIcon,
    change: '0',
    changeType: 'increase',
    hrefLink: '#',
    //detailsText: '<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">ดูทั้งหมด<span className="sr-only"> {item.name} ดูทั้งหมด</span></a>'
  },
  {
    id: 2,
    name: 'จำนวนผู้เข้าชมประกาศ',
    stat: '58.16%',
    icon: UsersIcon,
    change: '5.4%',
    changeType: 'increase',
    detailsText: 'จากจำนวนผู้เข้าชมทั้งหมด/รายเดือน',
    hrefLink: '#',
  },
  {
    id: 3,
    name: 'จำนวนผู้คลิกติดต่อ',
    stat: '24.57%',
    icon: CursorArrowRaysIcon,
    change: '3.2%',
    changeType: 'decrease',
    detailsText: 'จำนวนคลิกติดต่อ',
    hrefLink: '#',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function User_Borders() {
  const { user } = useUser()

  const [UserRxData, setRxData] = useState('')
  const [UserEmail, setUserEmail] = useState('')
  const [UserId, setUserUid] = useState('')
  const [UserDisplayName, setUserDisplayName] = useState('')


  useEffect(() => {
    const storedgetUser = getUserFromCookie()
    //console.log(storedgetUser)
    if (storedgetUser) {
      setUserUid(storedgetUser?.uid)
      setUserEmail(storedgetUser?.email)
      setUserDisplayName(storedgetUser?.UserDisplayName)
    }
  }, [])

  useEffect(() => {
    
    const getUsers = async () => {
      const UserGquery = query(
        collection(db, 'car2autobuy'),
        where('Add_Email', '==', UserEmail)
      )
      const querySnapshot = await getDocs(UserGquery)
      querySnapshot.forEach((doc) => {
        setRxData(doc.data())
      })
    }

    getUsers()

    return () => {}
  }, [])

  //console.log(UserRxData)
  return (
    <Container>
      <div className="flex py-4">
        <div className="mr-4 flex-shrink-0">
          {user?.profilePic ? (
            <Image
              src={user.profilePic}
              alt="Car2autobuy ลงประกาศขายรถมือสอง"
              width={60}
              height={60}
              layout="fixed"
              className="h-6 w-6 rounded-full"
            />
          ) : (
            <Image
              src={'/images/Car2autobuy-03.png'}
              alt="ลงประกาศ Car2autobuy รถมือสอง"
              width={100}
              height={50}
              layout="fixed"
              className="z-0"
            />
          )}
        </div>
        <div className="text-gray-700 md:text-gray-100">
          <h4 className="text-lg font-bold">สรุป {user?.name}</h4>
          <p className="mt-1">รายการลงประกาศของผู้ใช้ {user?.name}</p>
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-5 px-2 sm:grid-cols-2 lg:grid-cols-3 ">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded rounded-lg bg-gray-200 bg-opacity-20 px-4 pb-12 pt-5 shadow drop-shadow-lg backdrop-blur-lg sm:px-6 sm:pt-6 md:bg-gray-800"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-700 md:text-gray-100">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-700 md:text-gray-100">
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {' '}
                  {item.changeType === 'increase'
                    ? 'Increased'
                    : 'Decreased'}{' '}
                  by{' '}
                </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-6">
                <p className="text-xs font-medium text-indigo-100">
                  {item.detailsText}
                </p>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {' '}
                    ดูทั้งหมด
                    <span className="sr-only"> {item.name} ดูทั้งหมด</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  )
}
