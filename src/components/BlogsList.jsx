import React, { useId, Fragment, useEffect, useRef, useState } from 'react'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BlogsList() {
  const [BlogData, setBlogData] = useState()
  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        `https://archive.car2autobuy.com/wp-json/wp/v2/posts?&_embed&per_page=8&_fields=id,date_gmt,modified_gmt,slug,title,content,excerpt,categories,_links`
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
                <Link href={`/car-story/${post['slug']}`}>
                  <div className="relative">
                    <Image
                      src={
                        post['_embedded']['wp:featuredmedia'][0]['source_url']
                      }
                      alt={post['title']['rendered'].replace(
                        /(<([^>]+)>)|&.+;/gm,
                        ' '
                      )}
                      layout="responsive"
                      className=" w-full rounded-lg object-cover object-center"
                      width={100}
                      height={70}
                    />
                    <div className="absolute left-2 top-2">
                      <div className="inline-block">
                        <span
                          className={classNames(
                            // post.category.color,
                            'bg-green-100 text-green-800',
                            'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium'
                          )}
                        >
                          {'รถมือสอง'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={`/car-story/${post['slug']}`} className="mt-4 block">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {post['title']['rendered'].replace(
                      /(<([^>]+)>)|&.+;/gm,
                      ' '
                    )}
                  </h3>
                </Link>
                <div
                  className="mt-3 text-base text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: post['excerpt']['rendered'].replace(
                      /(<([^>]+)>)|&.+;/gm,
                      ' '
                    ),
                  }}
                ></div>

                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div>
                      <span className="sr-only">{'CHANGYED'}</span>
                      <Image
                        src={'/images/Car2autobuy-01.png'}
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
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {'CAR2AUTOBUY'}
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
