import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { removeUserCookie } from '@/lib/firebase/userCookies'
import { NavLink } from '@/components/NavLink'
import Ilogo from '../images/logos/Car2autobuy-Preview-01.svg'
import cookies from 'js-cookie'
import { useUser } from '@/lib/firebase/useUser'
import { setUserCookie, getUserFromCookie } from '@/lib/firebase/userCookies'
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'next/router'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation({ UserXDisplayName }) {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/buycars">ซื้อรถยนต์</MobileNavLink>
            <MobileNavLink href="/salecars">ขายรถยนต์</MobileNavLink>
            <MobileNavLink href="/loancalc">คำนวณสินเชื่อ</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            {!UserXDisplayName ? (
              <MobileNavLink href="/login">เข้าสู่ระบบ</MobileNavLink>
            ) : null}
            {UserXDisplayName ? (
              <>
                <Button href="/add-cars/" color="blue" className="rounded-md">
                  ลงขายรถ
                </Button>
                <small className="text-center">{UserXDisplayName.name}</small>
              </>
            ) : null}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const { user } = useUser()
  const router = useRouter()
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

  const handleLogout = async () => {
    try {
      await logOut()
      router.push('/login')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <header className="py-4 shadow-xl">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Image
                className="h-10 w-auto"
                src={Ilogo}
                alt="Car2autobuy"
                layout="fixed"
                width={100}
                height={60}
              />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/buycars">ซื้อรถยนต์</NavLink>
              <NavLink href="/salecars">ขายรถยนต์</NavLink>
              <NavLink href="/loancalc">คำนวณสินเชื่อ</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {!user ? (
              <>
                <div className="hidden md:block">
                  <NavLink href="/login">เข้าสู่ระบบ</NavLink>
                </div>
                <Button href="/register" color="blue">
                  <span>
                    สมัคร <span className="hidden lg:inline">สมาชิก</span>
                  </span>
                </Button>
              </>
            ) : null}
            {user ? (
              <>
                <div className="hidden grid-cols-1 md:grid">
                  <small className="text-xs text-black/50">{user.name}</small>
                  <Button href="/add-cars/" color="blue" className="rounded-md">
                    ลงขายรถ
                  </Button>
                </div>
                <div className="hidden md:block">
                  <NavLink href="/login">ออกจากระบบ</NavLink>
                </div>
              </>
            ) : null}

            <div className="-mr-1 md:hidden">
              <MobileNavigation UserXDisplayName={user} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
