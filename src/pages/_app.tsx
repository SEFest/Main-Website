import React, { Component, FC, useEffect, useState } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { createEmotionCache } from '@/utils'
import { MUIProvider } from '@/providers'
import 'slick-carousel/slick/slick.css'
import '@/styles/globals.css'
import '@/styles/react-slick.css'
import { NextPageWithLayout } from '@/interfaces/layout'
import '../components/countDown/countdown.css'
import '../styles/swipper.css'
import SplashScreen from '@/components/SplashScreen/SplashScreen'
// import 'slick-carousel/slick/slick-theme.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type AppPropsWithLayout = AppProps & {
  emotionCache: EmotionCache
  Component: NextPageWithLayout
}

const App: FC<AppPropsWithLayout> = (props: AppPropsWithLayout) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const splashScreenTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(splashScreenTimeout)
    }
  }, [])
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    //
    <CacheProvider value={emotionCache}>
      <Head>
        {/* <meta name="viewport" content="initial-scale=1, width=device-width" /> */}
        <title>SciFest</title>
      </Head>
      <MUIProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {isLoading ? <SplashScreen /> : getLayout(<Component {...pageProps} />)}
      </MUIProvider>
    </CacheProvider>
  )
}

export default App
