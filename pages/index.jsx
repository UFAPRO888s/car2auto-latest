import React from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import SwiperSlideX from '@/components/SwiperSlideX'
import { Speakers } from '@/components/Speakers'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import BrandCards from '@/components/BrandCards'
import { HeroNewCars } from '@/components/HeroNewCars'
import { HeroWhite } from '@/components/HeroWhite'
import Type_Cars from '@/components/Type_Cars'
import TabsCom from '@/components/Tabs'

export default function HomeCar2Auto() {
  return (
    <>
      <Head>
        <title>{siteMetadata.title + ' | ' + siteMetadata.author}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>
      <PageSEO
        title={siteMetadata.title + ' | ' + siteMetadata.author}
        description={siteMetadata.description}
      />

      <SwiperSlideX />
      <main>
        <HeroNewCars />
        <HeroWhite />
        <BrandCards />
        <Type_Cars />
        <TabsCom />
        <Speakers />
      </main>
      <Footer />
    </>
  )
}
