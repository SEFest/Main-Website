// components/SplashScreen.tsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Typography } from '@mui/material'

const SplashScreen: React.FC = () => {
  // const [isVisible, setIsVisible] = useState(true)

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsVisible(false)
  //   }, 3000)

  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [])
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff', // Adjust the background color
      }}
    >
      <motion.div
        //   variants={fadeInOutAnimation}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        //   exit="exit"
      >
        <Image src="/images/festLogo.png" alt="Splash Screen" width={350} height={300} />
        <Typography sx={{ fontSize: { xs: 25, md: 45 } }}>Science & Engineering Festival</Typography>
      </motion.div>
    </div>
  )
}

export default SplashScreen
