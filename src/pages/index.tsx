import React, { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { motion } from 'framer-motion'
import SplashScreen from '@/components/SplashScreen/SplashScreen'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const CountDown = dynamic(() => import('../components/countDown/Countdown'), { ssr: false })

const Home: NextPageWithLayout = () => {
  const [componentsLoaded, setComponentsLoaded] = useState(false)

  useEffect(() => {
    const loadComponents = async () => {
      await Promise.all([
        DynamicHomeHero,
        DynamicHomeFeature,
        DynamicHomePopularCourse,
        DynamicHomeTestimonial,
        DynamicHomeOurMentors,
        CountDown,
      ])
      setComponentsLoaded(true)
    }

    setTimeout(async () => {
      await loadComponents()
    }, 200)
  }, [])

  return (
    <Suspense fallback={<SplashScreen />}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {componentsLoaded && <Header />}
        <DynamicHomeHero />
        <CountDown targetDate={undefined} />
        <DynamicHomePopularCourse />
        <DynamicHomeFeature />
        <DynamicHomeOurMentors />
        {componentsLoaded && <Footer />}
      </motion.div>
    </Suspense>
  )
}

// Home.getLayout = (page) => <>{page}</>

export default Home
