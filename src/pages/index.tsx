import React, { lazy, Suspense, useState, useEffect } from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import SplashScreen from '@/components/SplashScreen/SplashScreen'

const DynamicHomeHero = lazy(() => import('../components/home/hero'))
const DynamicHomeFeature = lazy(() => import('../components/home/feature'))
const DynamicHomePopularCourse = lazy(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = lazy(() => import('../components/home/testimonial'))
const DynamicHomeOurMentors = lazy(() => import('../components/home/mentors'))
const CountDown = lazy(() => import('../components/countDown/Countdown'))

const Home: NextPageWithLayout = () => {
  const [componentsLoaded, setComponentsLoaded] = useState(false)

  useEffect(() => {
    // Simulate a delay for loading each component
    const loadComponents = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
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

    loadComponents()
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

export default Home
