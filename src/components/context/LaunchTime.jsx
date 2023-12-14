import React, { createContext, useState } from 'react'

export const LaunchContext = createContext()

export const LaunchContextProvider = ({ children }) => {
  const [showRegister, setShowRegister] = useState(false)

  const value = {
    showRegister,
    setShowRegister,
  }

  return <LaunchContext.Provider value={value}>{children}</LaunchContext.Provider>
}
