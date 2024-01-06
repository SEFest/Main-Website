// pages/index.tsx
import React, { Suspense } from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { motion } from 'framer-motion'
import SplashScreen from '@/components/SplashScreen/SplashScreen'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const DynamicHomeHero = React.lazy(() => import('../components/home/hero'))
const DynamicHomeFeature = React.lazy(() => import('../components/home/feature'))
const DynamicHomePopularCourse = React.lazy(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = React.lazy(() => import('../components/home/testimonial'))
const DynamicHomeOurMentors = React.lazy(() => import('../components/home/mentors'))
const CountDown = React.lazy(() => import('../components/countDown/Countdown'))

const Home: NextPageWithLayout = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Header />
        <DynamicHomeHero />
        <CountDown targetDate={undefined} />
        <DynamicHomePopularCourse />
        <DynamicHomeFeature />
        <DynamicHomeOurMentors />
        <Footer />
      </motion.div>
    </Suspense>
  )
}

Home.getLayout = (page) => <>{page}</>

export default Home
