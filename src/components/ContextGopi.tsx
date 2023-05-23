import React, { createContext } from 'react'
import { gopiTheme } from './theme'

type GopiContextProviderProps = {
  children: React.ReactNode
}

export const GopiNavContext = createContext(gopiTheme)

export const GopiContextProvider = ({children}: GopiContextProviderProps) => {
  return <GopiNavContext.Provider value = {gopiTheme}>{children}</GopiNavContext.Provider>
}