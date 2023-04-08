import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

const LottoPost = (props) => {
  return (
    <>
      <Container>
        <div className="w-full px-2 py-4 md:px-10 ">
          {props.data.map((post, index) => {
            return (
              <article key={index.id} className="prose max-w-none text-white">
                {/* <PageSEO
                title={
                  post['title']['rendered']?.replace(/(<([^>]+)>)|&.+;/gm, ' ')?.slice(0, 55) ||
                  siteMetadata.title
                }
                description={
                  post['content']['rendered']
                    ?.replace(/(<([^>]+)>)|&.+;|\s+|”/gm, '')
                    ?.slice(0, 150) || siteMetadata.description
                }
                //images={post['_embedded']['wp:featuredmedia'][0]['source_url']}
              /> */}
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
                      <p className="text-end text-pink-500">
                        แทงหวยออนไลน์ กับเว็บ หวยออยไลน์ ที่ปลอดภัย
                        <br />
                        <strong className="title-font my-2 text-3xl font-medium text-amber-400">
                          แทงหวย แทงได้ทุกประเภท
                        </strong>
                      </p>
                    </div>
                    {/* <article
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: post['content']['rendered']?.replace(/lekdedthai\.com/g,"loopyt.com"),
                    }}
                    
                  ></article> */}
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
        </div>
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(
    `https://archive.car2autobuy.com/wp-json/wp/v2/posts?_embed&slug=${id}`
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
