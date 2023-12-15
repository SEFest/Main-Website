import React, { createContext, useState } from 'react'
export const LaunchContext = createContext()
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const LaunchContextProvider = ({ children }) => {
  const [showRegister, setShowRegister] = useState(false)

  const value = {
    showRegister,
    setShowRegister,
  }

  return <LaunchContext.Provider value={value}>{children}</LaunchContext.Provider>
}
