import "@/styles/globals.css";
import Head from "next/head";
import { AuthContextProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Analytics from '@/components/analytics'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AuthContextProvider>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <ThirdwebProvider activeChain="ethereum">
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </ThirdwebProvider>
    </AuthContextProvider>
  );
}
