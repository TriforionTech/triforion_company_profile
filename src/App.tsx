import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { HomePage } from './pages/HomePage'
import { BlogPage } from './pages/BlogPage'
import { ArticlePage } from './pages/ArticlePage'
import { CareersPage } from './pages/CareersPage'
import { NotFoundPage } from './pages/NotFoundPage'

const ScrollManager: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    const stateObj = location.state as { scrollTo?: string } | null
    const targetId = stateObj?.scrollTo || (location.hash ? location.hash.replace(/^#\/?/, '') : null)

    if (targetId) {
      const scrollTarget = () => {
        const element = document.getElementById(targetId)
        if (element) {
          const navOffset = window.innerWidth < 640 ? 56 : 72
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
          return true
        }
        return false
      }

      const timer1 = setTimeout(scrollTarget, 100)
      const timer2 = setTimeout(scrollTarget, 300)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash, location.state])

  return null
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  )
}

export default App
