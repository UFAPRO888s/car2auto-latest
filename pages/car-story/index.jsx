import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Container } from "@/components/Container";
import { PageSEO } from "@/components/SEO";

import { Footer } from "@/components/Footer";

const ByCatPostCarStory = (props) => {
  const current = new Date(props.data[0]["date_gmt"]);
  const dateTimeAB = `${current.getDate()} - ${
    current.getMonth() + 1
  } - ${current.getFullYear()}`;
  // console.log(dateTimeAB)
  // const dateTimeAB = formatDate(current)
  function SocialLink({ className, href, children, icon: Icon }) {
    return (
      <li className={clsx(className, "flex")}>
        <Link
          href={href}
          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </Link>
      </li>
    );
  }

  function MailIcon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        />
      </svg>
    );
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <PageSEO
        title={`รถมือสอง ${props.dataMeta["name"]?.replace(
          /(<([^>]+)>)|&.+;/gm,
          " "
        )} รับประกันคุณภาพ - รถมือสอง car2autobuy`}
        description={`รถยนต์มือสอง ${props.dataMeta["name"]?.replace(
          /(<([^>]+)>)|&.+;/gm,
          " "
        )} จำนวน ${
          props.dataMeta["count"]
        } คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง`}
      />

      <Container>
        <div className="px-2 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ข่าวบทความรถมือสอง{" "}
                {props.dataMeta["name"]?.replace(/(<([^>]+)>)|&.+;/gm, " ")}
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                ข่าวสาร ล่าสุด จำนวน {props.dataMeta["count"]} บทความ{" "}
                {props.dataMeta["name"]?.replace(/(<([^>]+)>)|&.+;/gm, " ")} ดีๆ
                เกี่ยวกับข้อมูลรถยนต์มือสอง หรือติดตามข่าวสารรถยนต์ในวงการรถยนต์{" "}
                {props.dataMeta["name"]?.replace(/(<([^>]+)>)|&.+;/gm, " ")}
                เทคนิคการใช้งานและดูแลรถยนต์
              </p>
            </div>
            <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {props.data?.slice(0, 9).map((postXS, indexPost) => (
                <div
                  key={indexPost}
                  className="rounded-lg shadow-md hover:shadow-lg px-2 py-2 bg-gray-100"
                >
                  <Link href={`/car-story/${postXS["slug"]}`}>
                    <div className="relative">
                      <Image
                        src={
                          postXS["_embedded"]["wp:featuredmedia"][0][
                            "source_url"
                          ]
                        }
                        alt={postXS["title"]["rendered"].replace(
                          /(<([^>]+)>)|&.+;/gm,
                          " "
                        )}
                        className=" w-full rounded-lg object-cover object-center"
                        width={300}
                        height={200}
                      />
                      <div className="absolute left-2 top-2">
                        <div className="inline-block">
                          <span
                            className={classNames(
                              // post.category.color,
                              "bg-green-100 text-green-800",
                              "inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium"
                            )}
                          >
                            {dateTimeAB}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={`/car-story/${postXS["slug"]}`}
                    className="mt-4 block px-2"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {postXS["title"]["rendered"].replace(
                        /(<([^>]+)>)|&.+;/gm,
                        " "
                      )}
                    </h3>
                  </Link>
                  <div
                    className="mt-3 text-base text-gray-500 px-2"
                    dangerouslySetInnerHTML={{
                      __html: postXS["excerpt"]["rendered"].slice(0,250).replace(
                        /(<([^>]+)>)|CARSOME|&.+;/gm,
                        " "
                      ),
                    }}
                  ></div>

                  <div className="mt-6 flex items-center px-2">
                    <div className="flex-shrink-0 ">
                      <div>
                        <span className="sr-only">{"CHANGYED"}</span>
                        <Image
                          src={"/images/Car2autobuy-01.png"}
                          alt={
                            "รถมือสอง " +
                            postXS["title"]["rendered"].replace(
                              /(<([^>]+)>)|&.+;/gm,
                              " "
                            )
                          }
                          className="w-full rounded-lg object-contain object-center"
                          width={100}
                          height={50}
                        />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {"CAR2AUTOBUY"}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={postXS["date_gmt"]}>
                          {postXS["date_gmt"]}
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
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  let { cat } = context.query;

  if (cat == "ข้อมูลน่ารู้") {
    cat = 149;
  } else if (cat == "TopPick") {
    cat = 437;
  } else if (cat == "เปรียบเทียบ") {
    cat = 438;
  }
  const res = await fetch(
    `https://www.carsome.co.th/news/wp-json/wp/v2/posts?categories=${cat}&_embed&per_page=9&_fields=id,date_gmt,modified_gmt,slug,title,content,excerpt,categories,_links`
  );
  const data = await res.json();
  const resMeta = await fetch(
    `https://www.carsome.co.th/news/wp-json/wp/v2/categories/${cat}`
  );
  const dataMeta = await resMeta.json();
  if (data == "" && dataMeta == "") {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data, dataMeta: dataMeta },
  };
}

export default ByCatPostCarStory;
