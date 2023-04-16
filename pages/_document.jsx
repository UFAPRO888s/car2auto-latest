import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="th">
      <Head>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#1B65A6" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#1B65A6" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
