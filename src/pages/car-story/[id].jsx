import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { BlogSEO } from '@/components/SEO'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TwitterIcon, InstagramIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/banner-1920x915-1.jpg'
import { formatDate } from '@/lib/formatDate'
const LottoPost = (props) => {
  const current = new Date(props.data[0]['date_gmt'])
 const dateTimeAB = `${current.getDate()} - ${
    current.getMonth() + 1
  } - ${current.getFullYear()}`
  // console.log(dateTimeAB)
 // const dateTimeAB = formatDate(current)
  function SocialLink({ className, href, children, icon: Icon }) {
    return (
      <li className={clsx(className, 'flex')}>
        <Link
          href={href}
          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </Link>
      </li>
    )
  }

  function MailIcon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        />
      </svg>
    )
  }

  return (
    <>
      <BlogSEO
        title={props.data[0]['title']['rendered']?.replace(
          /(<([^>]+)>)|&.+;/gm,
          ' '
        ) + " รถมือสอง car2autobuy"}
        date={props.data[0]['date_gmt']}
        lastmod={props.data[0]['date_gmt']}
        summary={props.data[0]['excerpt']['rendered']}
        url={'/car-story/' + props.data[0]['slug']}
        authorDetails={props.data[0]['_embedded']['author']}
        images={[
          props.data[0]['_embedded']['wp:featuredmedia'][0]['source_url'],
        ]}
      />
      <Header />
      <Container>
        {/* <div className="w-full px-2 py-4 md:px-10 ">
          {props.data.map((post, index) => {
            return (
              <article key={index} className="prose max-w-none text-white">
              
                <dt className="sr-only">
                  เผยแพร่เมื่อ{' '}
                  <time dateTime={post['date_gmt']}>{post['date_gmt']}</time>
                </dt>
                <div className="relative h-[250px] w-full">
                  <Image
                    className="rounded-lg"
                    src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                    layout="fill"
                    objectFit="cover"
                    alt={post['title']['rendered']?.replace(
                      /(<([^>]+)>)|&.+;/gm,
                      ' '
                    )}
                    priority="true"
                  />
                </div>
                <div className="py-4">
                  <div className="w-full">
                    <h1 className="title-font my-2 text-3xl font-medium text-amber-400">
                      {post['title']['rendered']}
                    </h1>
                    <div>
                      <p className="text-xs font-semibold text-black/50">
                        วันที่เผยแพร่ {dateTimeAB} |
                      </p>
                      <p className="text-end font-semibold text-pink-500">
                        รถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี
                        <br />
                        <strong className="title-font my-2 text-3xl font-bold text-amber-400">
                          รถยนต์มือสอง
                        </strong>
                        <br />
                        ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย
                      </p>
                    </div>
                    
                    <article
                      className="prose-h1:text-blue-100 prose-h2:text-blue-200 prose-h3:text-blue-300 leading-relaxed text-black"
                      dangerouslySetInnerHTML={{
                        __html: props?.contentY?.replace(/TODE/g, ' UFAX24 '),
                      }}
                    ></article>

                    <div className="flex justify-center text-base font-medium leading-6">
                      <Link
                        href="/"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="รวม หวย"
                        title="เรื่องหวย ทั้งหมด"
                      >
                        กลับไป หวย ทั้งหมด
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div> */}

        <div className="grid grid-cols-1 gap-y-16 py-20 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={
                  props.data[0]['_embedded']['wp:featuredmedia'][0][
                    'source_url'
                  ]
                }
                alt={props.data[0]['title']['rendered']?.replace(
                  /(<([^>]+)>)|&.+;/gm,
                  ' '
                )}
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                width={100}
                height={50}
                layout="responsive"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {props.data[0]['title']['rendered']?.replace(
                  /(<([^>]+)>)|&.+;/gm,
                  ' '
                )}
              </h1>
              <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">
                {props.data[0]['excerpt']['rendered']?.replace(
                  /(<([^>]+)>)|&.+;/gm,
                  ' '
                )}
              </p>
            </div>
            <div className="mt-6 space-y-7">
              <article
                className="prose-h1:text-blue-100 prose-h2:text-blue-200 prose-h3:text-blue-300 leading-relaxed text-black"
                dangerouslySetInnerHTML={{
                  __html: props?.contentY?.replace(/TODE/g, ''),
                }}
              ></article>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <p className="text-xs font-semibold text-black/50 ">
                วันที่เผยแพร่ {dateTimeAB} | CAR2AUTOBUY
              </p>
              <SocialLink href="#" className="mt-2" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-2">
                Follow on Instagram
              </SocialLink>

              <SocialLink
                href="mailto:admin@car2autobuy.com"
                icon={MailIcon}
                className="mt-2 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                admin@car2autobuy.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(
    `https://archive.car2autobuy.com/wp-json/wp/v2/posts?_embed&slug=${encodeURI(
      id
    )}`
  )
  const data = await res.json()
  const contentx = data[0]?.content.rendered.replace(
    /<\/?(?!p)(?!h1)(?!h2)(?!h3)(?!img)(?!ul)(?!li)\w*\b[^>]*>/gm,
    ''
  )
  if (!contentx) {
    return {
      notFound: true,
    }
  }
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data, contentY: contentx },
  }
}

export default LottoPost
