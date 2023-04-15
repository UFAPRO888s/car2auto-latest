/* This example requires Tailwind CSS v3.0+ */
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { FAQPageJsonLd } from "next-seo";

export default function Faqs({ faqData }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            คำถามที่พบบ่อย
          </h2>

          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqData.map((faq, indexfaq) => (
              <div key={indexfaq}>
                <FAQPageJsonLd
                  mainEntity={[
                    {
                      questionName: faq.question,
                      acceptedAnswerText: faq.answer,
                    },
                  ]}
                />
                <Disclosure as="div" className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
