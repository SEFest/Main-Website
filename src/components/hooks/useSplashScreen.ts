// hooks/useSplashScreen.ts
import { useState, useEffect } from 'react'

const useSplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000) // Example: Hide after 3 seconds

    // window.onload = () => {
    //   clearTimeout(timer)
    //   setIsVisible(false)
    // }

    return () => {
      clearTimeout(timer)
      window.onload = null // Cleanup to avoid potential memory leaks
    }
  }, [])

  return isVisible
}

export default useSplashScreen
