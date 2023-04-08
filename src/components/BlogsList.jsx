import React, { useId, Fragment, useEffect, useRef, useState } from 'react'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: {
      name: 'Article',
      href: '#',
      color: 'bg-indigo-100 text-indigo-800',
    },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Paul York',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '6 min',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dessie Ryan',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '4 min',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: {
      name: 'Case Study',
      href: '#',
      color: 'bg-green-100 text-green-800',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BlogsList() {
  const [BlogData, setBlogData] = useState()
  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        `https://www.lekdedthai.com/wp-json/wp/v2/posts?&_embed&per_page=8&_fields=id,date_gmt,modified_gmt,slug,title,content,excerpt,categories,_links`
      )
      const data = await res.json()
      setBlogData(data)
    })()

    return () => {
      // this now gets called when the component unmounts
    }
  }, [])
 // console.log(BlogData)
  return (
    <Container>
      <div className="bg-white px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ข่าวบทความรถมือสอง
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              ข่าวสาร ล่าสุด บทความ ดีๆ เกี่ยวกับข้อมูลรถยนต์มือสอง
              หรือติดตามข่าวสารรถยนต์ในวงการรถยนต์ เทคนิคการใช้งานและดูแลรถยนต์
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {BlogData?.slice(0, 3).map((post, indexPost) => (
              <div key={indexPost}>
                <div>
                  <a href={'#'} className="inline-block">
                    <span
                      className={classNames(
                       // post.category.color,
                       'bg-green-100 text-green-800',
                        'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium'
                      )}
                    >
                      {"รถมือสอง"}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post['title']['rendered'].replace(
                      /(<([^>]+)>)|&.+;/gm,
                      ' '
                    )}
                  </p>
                  {/* <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p> */}
                  <div
                    className="mt-3 text-base text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: post['excerpt']['rendered'].replace(
                        /(<([^>]+)>)|&.+;/gm,
                        ' '
                      ),
                    }}
                  ></div>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={'#'}>
                      <span className="sr-only">{'CHANGYED'}</span>
                      <Image
                        src={"/images/Car2autobuy-01.png"}
                        alt={
                          'ตรวจหวย ' +
                          post['title']['rendered'].replace(
                            /(<([^>]+)>)|&.+;/gm,
                            ' '
                          )
                        }
                        layout="fixed"
                        className="w-full rounded-lg object-contain object-center"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <Link href={'#'}>{'CHANGYED'}</Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post['date_gmt']}>
                        {post['date_gmt']}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      {/* <span>{post.readingTime} read</span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
