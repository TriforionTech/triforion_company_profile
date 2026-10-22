import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface RootLayoutProps {
  children: React.ReactNode
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-text-primary">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
