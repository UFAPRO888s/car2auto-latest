import { Fragment, useEffect, useId, useRef, useState } from 'react'



import { Button } from '@/components/Button'
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

const ReadDataFrom = async () => {
  const { user } = useUser()
  const [UserRxData, setRxData] = useState('')
  try {
    const UserGquery = query(
      collection(db, 'car2autobuy'),
      where('Add_Email', '==', user?.email)
    )
    const querySnapshot = await getDocs(UserGquery)
    querySnapshot.forEach((doc) => {
      setRxData(doc.data())
    })
  } catch (error) {
    console.log(error)
    alert(error)
  }

  return (
    <div style={{ margin: '5px 0' }}>
      <Button onClick={readData} style={{ width: '100%' }}>
        Read Data From Cloud Firestore
      </Button>
    </div>
  )
}

export default ReadDataFrom
