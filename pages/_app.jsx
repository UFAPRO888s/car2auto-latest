import '@/styles/globals.css'
import Head from 'next/head'
import { AuthContextProvider } from '@/context/AuthContext'
import Navbar from '@/components/Navbar'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import Analytics from '@/components/analytics'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <AuthContextProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Analytics />
        <ThirdwebProvider activeChain="ethereum">
          <Navbar>
            <Component {...pageProps} />
          </Navbar>
        </ThirdwebProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}
